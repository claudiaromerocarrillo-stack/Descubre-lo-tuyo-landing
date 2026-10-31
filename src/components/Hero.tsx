import { useState } from 'react';
import { MapPin, Play, Headphones, ArrowDown, Radio } from 'lucide-react';
import { type MapPoint } from '@/data/map';
import AudioPlayer from './AudioPlayer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icono rojo corporativo (#9c0000)
const redIcon = new L.DivIcon({
  className: 'custom-pin',
  html: `<div style="background-color: #9c0000; width: 24px; height: 24px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); cursor: pointer;"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

// Puntos fijos vinculados a tus imágenes subidas a public/
const puntosLocales: any[] = [
  {
    id: 'giralda',
    title: 'Catedral y Giralda',
    subtitle: 'El corazón sonoro del casco histórico.',
    image: '/Giralda.jpg',
    lat: 37.3861,
    lng: -5.9926,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'real-alcazar',
    title: 'Real Alcázar de Sevilla',
    subtitle: 'El palacio real en uso más antiguo de Europa.',
    image: '/alcazar.jpg',
    lat: 37.3838,
    lng: -5.9913,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 'torre-del-oro',
    title: 'Torre del Oro',
    subtitle: 'Historias y leyendas a orillas del Guadalquivir.',
    image: '/torredeloro.jpg',
    lat: 37.3824,
    lng: -5.9963,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'plaza-espana',
    title: 'Plaza de España',
    subtitle: 'Un paseo por la arquitectura de 1929.',
    image: '/plazadeespaña.jpg',
    lat: 37.3772,
    lng: -5.9869,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'triana',
    title: 'Puente de Triana',
    subtitle: 'Arte, tradición y alma alfarera.',
    image: '/triana.jpg',
    lat: 37.3858,
    lng: -6.0024,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 'setas',
    title: 'Setas de Sevilla',
    subtitle: 'Mirador contemporáneo sobre la ciudad.',
    image: '/Setas.jpg',
    lat: 37.3934,
    lng: -5.9917,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  }
];

interface HeroProps {
  activePoint: MapPoint | null;
  setActivePoint: (p: MapPoint | null) => void;
}

export default function Hero({ activePoint, setActivePoint }: HeroProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pt-16 text-white md:pt-20">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/15202383/pexels-photo-15202383.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Tejados históricos de Granada"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-dly/30 blur-[120px]" />
      </div>

      <div className="container-dly relative grid items-center gap-12 pb-20 pt-14 md:pt-20 lg:grid-cols-2 lg:pb-32">
        {/* Columna texto */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white
