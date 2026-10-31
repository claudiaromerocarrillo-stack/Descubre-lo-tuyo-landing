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
    title: 'Sevilla se consolida como la tercera ciudad más visitada de España',
    category: 'Noticia',
    excerpt:
      'Análisis sobre el impacto del turismo en el casco histórico y los retos de gestión de la afluencia de viajeros en la capital andaluza.',
    author: 'Diario de Sevilla',
    date: '14 oct 2026',
    readTime: '4 min',
    emoji: '📰',
    accent: 'from-amber-400 to-dly',
    url: 'https://www.diariodesevilla.es/sevilla/Sevilla-tercera-ciudad-espanola-visitada_0_1816319081.html',
  },
  {
    id: 'b2',
    title: 'Sevilla entre historia y experiencia: el visitante quiere ser protagonista de su viaje',
    category: 'Entrevista',
    excerpt:
      'Reflexión sobre el perfil del nuevo viajero que busca itinerarios personalizados, aprendizaje y experiencias culturales genuinas.',
    author: 'SunCruise Andalucía',
    date: '11 oct 2026',
    readTime: '5 min',
    emoji: '🎤',
    accent: 'from-emerald-500 to-teal-600',
    url: 'https://suncruiseandalucia.eu/sevilla-entre-historia-y-experiencia-el-visitante-quiere-ser-protagonista-de-su-propio-viaje/',
  },
  {
    id: 'b3',
    title: 'Sevilla de Pe a Pa: las voces e historias sonoras de la ciudad',
    category: 'Podcast',
    excerpt:
      'Espacio sonoro dedicado a recorrer la historia, curiosidades y anécdotas de los barrios sevillanos a través del formato audio.',
    author: 'Omny Studio (Radio)',
    date: '9 oct 2026',
    readTime: '15 min audio',
    emoji: '🎧',
    accent: 'from-violet-500 to-purple-600',
    url: 'https://omny.fm/shows/sevilla-pe-a-pa/sevilla-de-pe-a-pa',
  },
  {
    id: 'b4',
    title: 'Sevilla: cuando ser la mejor ciudad de Europa no convence a sus ciudadanos',
    category: 'Opinión',
    excerpt:
      'Debate y análisis sobre el equilibrio entre el éxito turístico internacional y la calidad de vida y convivencia en los barrios.',
    author: 'El País',
    date: '6 oct 2026',
    readTime: '6 min',
    emoji: '✍️',
    accent: 'from-neutral-700 to-ink',
    url: 'https://elpais.com/espana/andalucia/2025-11-06/sevilla-cuando-ser-la-mejor-ciudad-de-europa-no-convence-a-sus-ciudadanos.html',
  },
  {
    id: 'b5',
    title: 'Informe e indicadores clave sobre la evolución del turismo en Andalucía',
    category: 'Infografía',
    excerpt:
      'Resumen de datos estadísticos y métricas del sector turístico andaluz y las tendencias de consumo cultural.',
    author: 'Andalucía Noticias',
    date: '3 oct 2026',
    readTime: '3 min',
    emoji: '📊',
    accent: 'from-dly to-dly-900',
    url: 'https://www.andalucianoticias.eu/informe-turismo-andalucia/959/',
  },
  {
    id: 'b6',
    title: 'Del Guadalquivir a la Expo 92: la Sevilla secreta que muy pocos conocen',
    category: 'Reportaje',
    excerpt:
      'Un viaje de descubrimiento por historias alternativas, rincones ocultos y leyendas a lo largo del río y zonas menos transitadas.',
    author: 'National Geographic Viajes',
    date: '28 sep 2026',
    readTime: '7 min',
    emoji: '🗺️',
    accent: 'from-pink-500 to-rose-600',
    url: 'https://viajes.nationalgeographic.com.es/a/guadalquivir-expo-92-sevilla-secreta-que-pocos-conocen_25574',
  },
  {
    id: 'b7',
    title: 'Paseos urbanos e itinerarios por el patrimonio de la ciudad',
    category: 'Vídeo',
    excerpt:
      'Reportaje audiovisual que muestra rutas a pie de calle y la interacción de los caminantes con el entorno histórico.',
    author: 'YouTube',
    date: '24 sep 2026',
    readTime: '8 min vídeo',
    emoji: '🎬',
    accent: 'from-sky-500 to-blue-600',
    url: 'https://youtu.be/1579guI3ws4?si=3_JVOI0-G-t5ITNW',
  },
  {
    id: 'b8',
    title: 'El Ayuntamiento presenta rutas en Triana para un turismo más sostenible',
    category: 'Nota de Prensa',
    excerpt:
      'Iniciativa municipal orientada a descentralizar los flujos turísticos e impulsar el patrimonio de barrio de forma respetuosa.',
    author: 'la voz del sur',
    date: '20 sep 2026',
    readTime: '3 min',
    emoji: '📢',
    accent: 'from-orange-500 to-amber-600',
    url: 'https://www.lavozdelsur.es/ediciones/sevilla/ayuntamiento-sevilla-presenta-rutas-turisticas-en-triana-para-lograr-turismo-mas-sostenible_294321_102.html',
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
