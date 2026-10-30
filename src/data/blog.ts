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
    title: 'Sevilla superó los tres millones de visitantes en su récord turístico',
    category: 'Noticia',
    excerpt:
      'Informe sobre las cifras históricas de visitantes en el casco histórico y la necesidad de promover itinerarios culturales sostenibles.',
    author: 'Diario de Sevilla',
    date: '14 oct 2026',
    readTime: '4 min',
    emoji: '📰',
    accent: 'from-amber-400 to-dly',
    url: 'https://www.diariodesevilla.es/sevilla/Sevilla-tercera-ciudad-espanola-visitada_0_1816319081.html',
  },
  {
    id: 'b2',
    title: 'Entrevista: "Hay que divulgar la historia con rigor pero enganchando"',
    category: 'Entrevista',
    excerpt:
      'Análisis sobre cómo adaptar la comunicación del patrimonio andaluz a los hábitos de consumo cultural de los jóvenes.',
    author: 'ABC de Sevilla',
    date: '11 oct 2026',
    readTime: '6 min',
    emoji: '🎤',
    accent: 'from-emerald-500 to-teal-600',
    url: 'https://www.abc.es/sevilla/ciudad/sevi-sevilla-tercera-ciudad-mas-turistas-espana-201905211332_noticia.html',
  },
  {
    id: 'b3',
    title: 'Edición Podcast: Los rincones sonoros y la voz de los barrios',
    category: 'Podcast',
    excerpt:
      'Episodio dedicado al patrimonio inmaterial, las leyendas de las calles de Sevilla y el valor de escucharlas a pie de calle.',
    author: 'Cadena SER (Radio Sevilla)',
    date: '9 oct 2026',
    readTime: '12 min audio',
    emoji: '🎧',
    accent: 'from-violet-500 to-purple-600',
    url: 'https://cadenaser.com/emisora/radio_sevilla/',
  },
  {
    id: 'b4',
    title: 'Opinión: Redescubrir la ciudad levantando la vista del móvil',
    category: 'Opinión',
    excerpt:
      'Una reflexión sobre cómo los formatos puramente auditivos devuelven el protagonismo al entorno urbano.',
    author: 'El País',
    date: '6 oct 2026',
    readTime: '5 min',
    emoji: '✍️',
    accent: 'from-neutral-700 to-ink',
    url: 'https://elpais.com/elpais/2019/10/01/opinion/1569945112_412351.html',
  },
  {
    id: 'b5',
    title: 'Infografía y datos: La evolución del turismo cultural en Andalucía',
    category: 'Infografía',
    excerpt:
      'Análisis gráfico sobre la afluencia de viajeros y el cambio de tendencia hacia visitas culturales autoguiadas.',
    author: 'Sevilla Actualidad',
    date: '3 oct 2026',
    readTime: '2 min',
    emoji: '📊',
    accent: 'from-dly to-dly-900',
    url: 'https://www.sevillaactualidad.com/sevilla/',
  },
  {
    id: 'b6',
    title: 'Qué ver en Sevilla: Ruta paso a paso por sus monumentos emblemáticos',
    category: 'Reportaje',
    excerpt:
      'Guía ilustrada y reportaje detallado de los itinerarios imprescindibles por el centro y los barrios históricos.',
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
      'Cobertura audiovisual de Canal Sur enfocada en la divulgación accesible del entorno histórico para todos los públicos.',
    author: 'Canal Sur TV',
    date: '24 sep 2026',
    readTime: '5 min vídeo',
    emoji: '🎬',
    accent: 'from-sky-500 to-blue-600',
    url: 'https://www.canalsurmas.es/videos/category/34912-andalucia-a-dedo-accesible',
  },
  {
    id: 'b8',
    title: 'Guía oficial e información turística sobre el centro histórico de Sevilla',
    category: 'Nota de Prensa',
    excerpt:
      'Comunicado y directorio oficial sobre el libre acceso a actividades culturales y puntos de interés de la ciudad.',
    author: 'Turismo de Sevilla',
    date: '20 sep 2026',
    readTime: '3 min',
    emoji: '📢',
    accent: 'from-orange-500 to-amber-600',
    url: 'https://www.visitasevilla.es/que-ver-y-hacer',
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
