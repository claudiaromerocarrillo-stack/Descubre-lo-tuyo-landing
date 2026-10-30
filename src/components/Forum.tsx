import { useState } from 'react';
import { MessageSquare, Heart, Send, User, Sparkles } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  location: string;
  text: string;
  likes: number;
  date: string;
}

const initialComments: Comment[] = [
  {
    id: '1',
    author: 'Carmen M.',
    location: 'Barrio de Santa Cruz',
    text: '¡El audiorrelato de la Giralda me ha parecido increíble! No conocía la historia sobre los cascabeles de la torre.',
    likes: 12,
    date: 'Hace 2 horas',
  },
  {
    id: '2',
    author: 'Javier R.',
    location: 'Triana',
    text: 'Escuchar el audio del Puente de Triana mientras lo cruzaba al atardecer ha sido una experiencia de 10. Recomiendo 100%.',
    likes: 8,
    date: 'Hace 5 horas',
  },
];

export default function Forum() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [userLocation, setUserLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      location: userLocation || 'Sevilla',
      text: newComment,
      likes: 0,
      date: 'Ahora mismo',
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleLike = (id: string) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, likes: c.likes + 1 } : c
      )
    );
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
                className="btn-primary"
              >
                Publicar en el foro
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Lista de comentarios */}
        <div className="mt-12 space-y-4">
          {comments.map((comment) => (
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
                      {comment.location} · {comment.date}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleLike(comment.id)}
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
          ))}
        </div>
      </div>
    </section>
  );
}
