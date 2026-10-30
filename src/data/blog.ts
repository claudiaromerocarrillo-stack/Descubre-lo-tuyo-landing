import {
  Newspaper,
  Mic2,
  Headphones,
  Quote,
  BarChart3,
  Video,
  FileText,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type BlogCategory =
  | 'Noticia'
  | 'Entrevista'
  | 'Podcast'
  | 'Opinión'
  | 'Infografía'
  | 'Reportaje'
  | 'Vídeo'
  | 'Nota de Prensa';

export interface BlogEntry {
  id: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  emoji: string;
  accent: string;
  url: string;
}

export const blogEntries: BlogEntry[] = [
  {
    id: 'b1',
    title: 'Sevilla y las nuevas tendencias en el turismo cultural urbano',
    category: 'Noticia',
    excerpt:
      'Un recorrido informativo por el modelo turístico de la capital andaluza y la creciente apuesta por la divulgación accesible en el casco histórico.',
    author: 'Diario de Sevilla',
    date: '14 oct 2026',
    readTime: '4 min',
    emoji: '📰',
    accent: 'from-amber-400 to-dly',
    url: 'https://www.diariodesevilla.es/sevilla/',
  },
  {
    id: 'b2',
    title: 'Entrevista: «El patrimonio hay que contarlo con rigor pero sin aburrir»',
    category: 'Entrevista',
    excerpt:
      'Conversamos sobre la necesidad de actualizar la divulgación cultural y acercar la historia de la ciudad con un tono fresco y cercano.',
    author: 'ABC de Sevilla',
    date: '11 oct 2026',
    readTime: '6 min',
    emoji: '🎤',
    accent: 'from-emerald-500 to-teal-600',
    url: 'https://www.sevilla.abc.es/cultura/',
  },
  {
    id: 'b3',
    title: 'Paseando por Sevilla: Los sonidos e historias de nuestros barrios',
    category: 'Podcast',
    excerpt:
      'Escucha este programa dedicado a las narrativas sonoras, leyendas y la identidad local que reside en las calles sevillanas.',
    author: 'Cadena SER (Radio Sevilla)',
    date: '9 oct 2026',
    readTime: '12 min audio',
    emoji: '🎧',
    accent: 'from-violet-500 to-purple-600',
    url: 'https://cadenaser.com/emisora/radio_sevilla/',
  },
  {
    id: 'b4',
    title: 'Opinión: La reinvención de la mirada urbana en la era digital',
    category: 'Opinión',
    excerpt:
      'Una reflexión sobre cómo el formato puramente auditivo permite redescubrir la arquitectura y el entorno sin fijar la vista en una pantalla.',
    author: 'El País',
    date: '6 oct 2026',
    readTime: '5 min',
    emoji: '✍️',
    accent: 'from-neutral-700 to-ink',
    url: 'https://elpais.com/opinion/',
  },
  {
    id: 'b5',
    title: 'Infografía: Datos e itinerarios del flujo cultural en Sevilla',
    category: 'Infografía',
    excerpt:
      'Visualización de datos sobre las zonas más transitadas por caminantes y el consumo de contenidos culturales al aire libre.',
    author: 'Sevilla Actualidad',
    date: '3 oct 2026',
    readTime: '2 min',
    emoji: '📊',
    accent: 'from-dly to-dly-900',
    url: 'https://www.sevillaactualidad.com/',
  },
  {
    id: 'b6',
    title: 'Ruta paso a paso por los monumentos y secretos de la ciudad',
    category: 'Reportaje',
    excerpt:
      'Recorrido en profundidad por los rincones emblemáticos del centro histórico y el barrio de Triana.',
    author: 'National Geographic',
    date: '28 sep 2026',
    readTime: '7 min',
    emoji: '🗺️',
    accent: 'from-pink-500 to-rose-600',
    url: 'https://viajes.nationalgeographic.com.es/ubicaciones-geograficas/sevilla',
  },
  {
    id: 'b7',
    title: 'Andalucía a pie de calle: la riqueza del patrimonio accesible',
    category: 'Vídeo',
    excerpt:
      'Reportaje audiovisual sobre las iniciativas que acercan la historia local a todos los públicos.',
    author: 'Canal Sur TV',
    date: '24 sep 2026',
    readTime: '5 min vídeo',
    emoji: '🎬',
    accent: 'from-sky-500 to-blue-600',
    url: 'https://www.canalsur.es/noticias/andalucia/',
  },
  {
    id: 'b8',
    title: 'Estrategia de sostenibilidad y accesibilidad cultural en Sevilla',
    category: 'Nota de Prensa',
    excerpt:
      'Comunicado oficial sobre el fomento de actividades culturales de libre acceso en el casco histórico.',
    author: 'Turismo de Sevilla',
    date: '20 sep 2026',
    readTime: '3 min',
    emoji: '📢',
    accent: 'from-orange-500 to-amber-600',
    url: 'https://www.visitasevilla.es/',
  },
];

export const categoryMeta: Record<
  BlogCategory,
  { icon: LucideIcon; color: string; label: string }
> = {
  Noticia: { icon: Newspaper, color: 'text-amber-700 bg-amber-100', label: 'Noticia' },
  Entrevista: { icon: Mic2, color: 'text-emerald-700 bg-emerald-100', label: 'Entrevista' },
  Podcast: { icon: Headphones, color: 'text-violet-700 bg-violet-100', label: 'Podcast' },
  Opinión: { icon: Quote, color: 'text-neutral-700 bg-neutral-200', label: 'Opinión' },
  Infografía: { icon: BarChart3, color: 'text-dly bg-red-100', label: 'Infografía' },
  Reportaje: { icon: Users, color: 'text-pink-700 bg-pink-100', label: 'Reportaje' },
  Vídeo: { icon: Video, color: 'text-sky-700 bg-sky-100', label: 'Vídeo' },
  'Nota de Prensa': { icon: FileText, color: 'text-orange-700 bg-orange-100', label: 'Nota de Prensa' },
};

export const allCategories = Object.keys(categoryMeta) as BlogCategory[];
