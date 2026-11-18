import { useState, useEffect } from 'react';
import { Heart, Send, User, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Comment {
  id: string;
  author: string;
  location: string;
  text: string;
  likes: number;
  created_at: string;
}

export default function Forum() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Cargar comentarios desde Supabase al abrir la página
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('forum_comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setComments(data);
    }
    setLoading(false);
  };

  // Guardar nuevo comentario en Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim() || submitting) return;

    setSubmitting(true);

    const { data, error } = await supabase
      .from('forum_comments')
      .insert([
        {
          author: authorName.trim(),
          location: userLocation.trim() || 'Sevilla',
          text: newComment.trim(),
          likes: 0,
        },
      ])
      .select()
      .single();

    if (!error && data) {
      setComments([data, ...comments]);
      setNewComment('');
    } else {
      alert('No se pudo publicar el comentario. Revisa la conexión.');
    }

    setSubmitting(false);
  };

  // Actualizar likes en Supabase
  const handleLike = async (id: string, currentLikes: number) => {
    const updatedLikes = currentLikes + 1;

    setComments(
      comments.map((c) => (c.id === id ? { ...c, likes: updatedLikes } : c))
    );

    await supabase
      .from('forum_comments')
      .update({ likes: updatedLikes })
      .eq('id', id);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section id="comunidad" className="relative py-20 bg-slate-50 border-t border-black/5 text-ink">
      <div className="container-dly max-w-4xl">
        {/* Cabecera */}
        <div className="text-center">
          <span className="section-eyebrow">Comunidad y relatos</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            El foro de <span className="text-dly">DescubreLoTuyo</span>
          </h2>
          <p className="mt-4 font-serif text-lg text-ink/80">
            Comparte tus impresiones, recomendaciones y leyendas de la ciudad con otros caminantes.
          </p>
        </div>

        {/* Formulario */}
        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-lg sm:p-8">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            <Sparkles className="h-5 w-5 text-dly" />
            Deja tu comentario o recomendación
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Tu nombre (ej. Ana P.)"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-dly focus:bg-white focus:outline-none transition"
                required
              />
              <input
                type="text"
                placeholder="Lugar o Barrio (opcional)"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-dly focus:bg-white focus:outline-none transition"
              />
            </div>

            <textarea
              rows={3}
              placeholder="¿Qué te ha parecido la experiencia? O cuéntanos una historia sobre algún rincón de Sevilla..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-slate-50 px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-dly focus:bg-white focus:outline-none transition"
              required
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary disabled:opacity-50"
              >
                {submitting ? 'Publicando...' : 'Publicar en el foro'}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Lista de comentarios */}
        <div className="mt-12 space-y-4">
          {loading ? (
            <p className="text-center text-sm text-ink/50">Cargando comentarios...</p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-dly/10 text-dly font-bold">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-ink">
                        {comment.author}
                      </h4>
                      <p className="text-xs text-ink/50">
                        {comment.location} · {formatDate(comment.created_at)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLike(comment.id, comment.likes)}
                    className="flex items-center gap-1.5 rounded-full border border-black/5 bg-slate-50 px-3 py-1.5 text-xs text-ink/70 hover:bg-dly/10 hover:text-dly transition"
                  >
                    <Heart className="h-3.5 w-3.5 fill-current" />
                    <span>{comment.likes}</span>
                  </button>
                </div>

                <p className="mt-3 font-serif text-sm leading-relaxed text-ink/80">
                  {comment.text}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
