export interface MapPoint {
  id: string;
  city: string;
  title: string;
  x: number; // % position on the map
  y: number;
  duration: string;
  blurb: string;
}

// Puntos de interés dentro de la ciudad de Sevilla
export const mapPoints: MapPoint[] = [
  {
    id: 'torre-del-oro',
    city: 'Sevilla',
    title: 'La Torre del Oro',
    x: 30,
    y: 62,
    duration: '3:42',
    blurb: 'El vigilante del río y la leyenda del oro que nunca existió.',
  },
  {
    id: 'giralda',
    city: 'Sevilla',
    title: 'La Giralda que mira al sur',
    x: 46,
    y: 52,
    duration: '4:15',
    blurb: 'De minarete a campanario: mil años mirando Sevilla desde lo alto.',
  },
  {
    id: 'plaza-espana',
    city: 'Sevilla',
    title: 'Plaza de España: un escenario de azulejos',
    x: 38,
    y: 80,
    duration: '5:10',
    blurb: 'La plaza-palacio que soñó Aníbal González para la Iberoamericana de 1929.',
  },
  {
    id: 'santa-cruz',
    city: 'Sevilla',
    title: 'Susurros del barrio de Santa Cruz',
    x: 56,
    y: 44,
    duration: '4:50',
    blurb: 'Callejones, patios y la Judería que inspiró a Bizet.',
  },
  {
    id: 'setas',
    city: 'Sevilla',
    title: 'Las Setas y el subsuelo romano',
    x: 52,
    y: 30,
    duration: '3:30',
    blurb: 'Metropol Parasol: lo más moderno de Sevilla sobre lo más antiguo.',
  },
];

// Genera una pista de audio silenciosa para el demo del reproductor
export const audioDemo = {
  src:
    'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=',
  defaultDuration: '0:00',
};
