import {
  Newspaper,
  Hash,
  Headphones,
  Mic2,
  GraduationCap,
  Quote,
  BarChart3,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type BlogCategory =
  | 'Historia'
  | 'Redes'
  | 'Podcast'
  | 'Entrevista'
  | 'Educativo'
  | 'Opinión'
  | 'Infografía'
  | 'Comunidad';

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
}

export const blogEntries: BlogEntry[] = [
  {
    id: 'b1',
    title: 'La Alhambra que no te cuentan: 7 secretos entre muros',
    category: 'Historia',
    excerpt:
      'Recorremos los rincones que las audioguías oficiales se saltan, desde el taller de un zapatero nazarí hasta el mensaje escondido en los azulejos.',
    author: 'Creativos 6',
    date: '14 oct 2026',
    readTime: '6 min',
    emoji: '🏛️',
    accent: 'from-amber-400 to-dly',
  },
  {
    id: 'b2',
    title: 'PT: el hilo que se volvió viral en Sevilla 🧵🔥',
    category: 'Redes',
    excerpt:
      'Un hilo de TikTok sobre la Torre del Oro superó 2M de visualizaciones en 48h. Analizamos qué hizo que la historia conectara con Gen Z.',
    author: '@descubrelotuyo',
    date: '11 oct 2026',
    readTime: '3 min',
    emoji: '📱',
    accent: 'from-pink-500 to-rose-600',
  },
  {
    id: 'b3',
    title: 'Ep.03 — Susurros de la Judería (podcast inmersivo)',
    category: 'Podcast',
    excerpt:
      'Un paseo sonoro de 14 minutos por el barrio de Santa Cruz con sonido binaural. Ponte los auriculares y camina con nosotros.',
    author: 'DescubreLoTuyo Audio',
    date: '9 oct 2026',
    readTime: '14 min audio',
    emoji: '🎧',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    id: 'b4',
    title: 'Entrevista a María José, la última ceramista del barrio Triana',
    category: 'Entrevista',
    excerpt:
      'Hablamos con una de las últimas artesanas que mantiene viva la tradición de la cerámica trianera sobre patrimonio, jóvenes y futuro.',
    author: 'Creativos 6',
    date: '6 oct 2026',
    readTime: '8 min',
    emoji: '🎤',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'b5',
    title: 'Guía para educadores: llevar el patrimonio al aula en 5 pasos',
    category: 'Educativo',
    excerpt:
      'Una ficha didáctica lista para usar, con dinámicas, preguntas-guía y enlaces a nuestras audioguías para trabajar patrimonio en ESO y Bachillerato.',
    author: 'Equipo Educativo',
    date: '3 oct 2026',
    readTime: '10 min',
    emoji: '📐',
    accent: 'from-sky-500 to-blue-600',
  },
  {
    id: 'b6',
    title: 'Opinión: ¿Por qué las audioguías nos aburren a los 20?',
    category: 'Opinión',
    excerpt:
      'Una reflexión sincera sobre el formato, el tono y la actitud del patrimonio cultural ante un público que ya no se conforma con monólogos de 40 minutos.',
    author: 'Creativos 6',
    date: '28 sep 2026',
    readTime: '5 min',
    emoji: '✍️',
    accent: 'from-neutral-700 to-ink',
  },
  {
    id: 'b7',
    title: 'Infografía: 8 ciudades andaluzas, 8 historias en un mapa',
    category: 'Infografía',
    excerpt:
      'Un mapa visual con los datos clave de patrimonio por ciudad: número de monumentos, visitas, edades del público y rutas sonoras disponibles.',
    author: 'Creativos 6',
    date: '24 sep 2026',
    readTime: '2 min',
    emoji: '🗺️',
    accent: 'from-dly to-dly-900',
  },
  {
    id: 'b8',
    title: '¿Qué monumento de tu ciudad no conocía nadie? (Comunidad)',
    category: 'Comunidad',
    excerpt:
      'Abrimos el espacio para que propongas ese rincón de tu ciudad que merece una audioguía. Las 5 propuestas más votadas se graban este mes.',
    author: 'Comunidad DLY',
    date: '20 sep 2026',
    readTime: 'Abierto',
    emoji: '💬',
    accent: 'from-orange-500 to-amber-600',
  },
];

export const categoryMeta: Record<
  BlogCategory,
  { icon: LucideIcon; color: string; label: string }
> = {
  Historia: { icon: Newspaper, color: 'text-amber-700 bg-amber-100', label: 'Historia' },
  Redes: { icon: Hash, color: 'text-pink-700 bg-pink-100', label: 'Redes' },
  Podcast: { icon: Headphones, color: 'text-violet-700 bg-violet-100', label: 'Podcast' },
  Entrevista: { icon: Mic2, color: 'text-emerald-700 bg-emerald-100', label: 'Entrevista' },
  Educativo: { icon: GraduationCap, color: 'text-sky-700 bg-sky-100', label: 'Educativo' },
  Opinión: { icon: Quote, color: 'text-neutral-700 bg-neutral-200', label: 'Opinión' },
  Infografía: { icon: BarChart3, color: 'text-dly bg-red-100', label: 'Infografía' },
  Comunidad: { icon: Users, color: 'text-orange-700 bg-orange-100', label: 'Comunidad' },
};

export const allCategories = Object.keys(categoryMeta) as BlogCategory[];
