import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Users, Headphones, MessageSquare, Trash2, LogOut, RefreshCw } from 'lucide-react';

interface ForumComment {
  id: string;
  author: string;
  location: string;
  text: string;
  likes: number;
  created_at: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [totalVisits, setTotalVisits] = useState(0);
  const [totalPlays, setTotalPlays] = useState(0);
  const [audioRanking, setAudioRanking] = useState<{ name: string; count: number }[]>([]);
  const [comments, setComments] = useState<ForumComment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);

    // 1. Cargar eventos de visitas y reproducciones de audio
    const { data: events } = await supabase
      .from('analytics_events')
      .select('*');

    if (events) {
      const visits = events.filter((e) => e.event_type === 'page_view');
      const plays = events.filter((e) => e.event_type === 'audio_play');

      setTotalVisits(visits.length);
      setTotalPlays(plays.length);

      // Agrupar escuchas por nombre de audioguía
      const counts: Record<string, number> = {};
      plays.forEach((p) => {
        const name = p.item_name || 'Audio sin nombre';
        counts[name] = (counts[name] || 0) + 1;
      });

      const sorted = Object.entries(counts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);

      setAudioRanking(sorted);
    }

    // 2. Cargar comentarios del foro
    const { data: forumData } = await supabase
      .from('forum_comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (forumData) {
      setComments(forumData);
    }

    setLoading(false);
  };

  const handleDeleteComment = async (id: string) => {
    if (!confirm('¿Seguro que quieres eliminar este comentario del foro?')) return;

    const { error } = await supabase
      .from('forum_comments')
      .delete()
      .eq('id', id);

    if (!error) {
      setComments(comments.filter((c) => c.id !== id));
    } else {
      alert('Error al eliminar el comentario.');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-ink text-white p-6 sm:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Cabecera */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Panel de Administración</h1>
            <p className="text-sm text-white/60 mt-1">
              Estadísticas en tiempo real y moderación de DescubreLoTuyo
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadDashboardData}
              className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl bg-red-500/20 text-red-300 border border-red-500/30 px-4 py-2 text-sm hover:bg-red-500/30 transition"
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </button>
          </div>
        </div>

        {/* Tarjetas de Métricas */}
        <div className="grid gap-6 sm:grid-cols-3 mt-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">Visitas a la Web</span>
              <Users className="h-5 w-5 text-dly-300" />
            </div>
            <p className="text-4xl font-bold mt-4">{totalVisits}</p>
            <p className="text-xs text-white/40 mt-2">Entradas registradas en la landing</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">Audios Escuchados</span>
              <Headphones className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="text-4xl font-bold mt-4">{totalPlays}</p>
            <p className="text-xs text-white/40 mt-2">Reproducciones totales iniciadas</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">Comentarios en Foro</span>
              <MessageSquare className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-4xl font-bold mt-4">{comments.length}</p>
            <p className="text-xs text-white/40 mt-2">Mensajes publicados por usuarios</p>
          </div>
        </div>

        {/* Desglose por Audioguía */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold mb-4">Reproducciones por Audioguía</h2>
          {audioRanking.length === 0 ? (
            <p className="text-sm text-white/50">
              Aún no se han registrado reproducciones de audio.
            </p>
          ) : (
            <div className="space-y-3">
              {audioRanking.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                >
                  <span className="font-medium text-sm">{item.name}</span>
                  <span className="rounded-full bg-dly/20 text-dly-300 px-3 py-1 text-xs font-bold">
                    {item.count} escuchas
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Moderación del Foro */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold mb-4">
            Comentarios del Foro ({comments.length})
          </h2>
          {comments.length === 0 ? (
            <p className="text-sm text-white/50">No hay comentarios en el foro todavía.</p>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-4 border border-white/5"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">{comment.author}</span>
                      <span className="text-xs text-white/50">· {comment.location}</span>
                    </div>
                    <p className="text-sm text-white/80 mt-1">{comment.text}</p>
                  </div>

                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    title="Eliminar comentario"
                    className="rounded-lg bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 transition shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
