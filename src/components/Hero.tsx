import { useState } from 'react';
import { MapPin, Play, Headphones, ArrowDown, Radio } from 'lucide-react';
import { mapPoints, type MapPoint } from '@/data/map';
import AudioPlayer from './AudioPlayer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icono rojo corporativo
const redIcon = new L.DivIcon({
  className: 'custom-pin',
  html: `<div style="background-color: #9c0000; width: 24px; height: 24px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); cursor: pointer;"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Radio className="h-3.5 w-3.5 text-dly-300" />
            Proyecto cultural transmedia · Sevilla
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Conecta con Sevilla.
            <span className="relative mt-2 block text-white">
              <span className="relative text-dly-300">
                Redescubre lo tuyo.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-dly"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7 C 60 2, 140 2, 198 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
            </span>
          </h1>
          <p className="mt-7 max-w-xl font-serif text-lg leading-relaxed text-white/80">
            Relatos sonoros cortos, en lenguaje fresco y de acceso libre, para que el
            patrimonio de Sevilla se escuche, se sienta y se comparta como nunca antes,
            a cualquier edad.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#proyecto" className="btn-primary">
              Explora la plataforma
              <ArrowDown className="h-4 w-4" />
            </a>
            <button
              onClick={() => setActivePoint(mapPoints[1])}
              className="btn-light"
            >
              <Headphones className="h-4 w-4" />
              Escucha una demo
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            {[
              { n: '1', l: 'Ciudad' },
              { n: '40+', l: 'Audioguías' },
              { n: '100%', l: 'Acceso libre' },
            ].map((s) => (
              <div key={s.l} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-dly-300">{s.n}</span>
                <span className="text-white/60">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna mapa */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-md lg:max-w-none">
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
                <MapPin className="h-4 w-4 text-dly-300" />
                Mapa sonoro · Sevilla
              </div>
              <span className="rounded-full bg-dly/20 px-2.5 py-1 text-[10px] font-bold text-dly-200">
                5 puntos · DEMO
              </span>
            </div>

            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border border-white/10 relative z-10">
              <MapContainer
                center={[37.3891, -5.9845]}
                zoom={14}
                scrollWheelZoom={true}
                className="w-full h-full"
              >
                <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

                {mapPoints.map((punto: any) => (
                  <Marker
                    key={punto.id}
                    position={[
                      punto.lat || punto.coordinates?.[0] || 37.3891,
                      punto.lng || punto.coordinates?.[1] || -5.9845,
                    ]}
                    icon={redIcon}
                    eventHandlers={{
                      click: () => setActivePoint(punto),
                    }}
                  >
                    <Popup>
                      <div className="p-1 text-slate-900 font-sans">
                        <h3 className="font-bold text-base mb-1 text-[#9c0000]">
                          {punto.title || punto.name}
                        </h3>
                        <p className="text-xs text-slate-600 mb-2">
                          {punto.description || punto.subtitle}
                        </p>
                        <button
                          onClick={() => setActivePoint(punto)}
                          className="w-full bg-[#9c0000] text-white text-xs py-1.5 px-3 rounded-full font-semibold hover:opacity-90 transition"
                        >
                          🎧 Escuchar relato
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-white/10 bg-ink/40 py-4">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 font-display text-sm uppercase tracking-widest text-white/40">
            {[
              'Torre del Oro',
              'Giralda',
              'Plaza de España',
              'Santa Cruz',
              'Las Setas',
              'Triana',
              'Archivo de Indias',
              'Museo de Bellas Artes',
            ].map((c, i) => (
              <span key={i} className="flex items-center gap-10">
                {c} <span className="text-dly">✦</span>
              </span>
            ))}
          </div>
          <div
            aria-hidden
            className="flex shrink-0 animate-marquee items-center gap-10 pr-10 font-display text-sm uppercase tracking-widest text-white/40"
          >
            {[
              'Torre del Oro',
              'Giralda',
              'Plaza de España',
              'Santa Cruz',
              'Las Setas',
              'Triana',
              'Archivo de Indias',
              'Museo de Bellas Artes',
            ].map((c, i) => (
              <span key={i} className="flex items-center gap-10">
                {c} <span className="text-dly">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <AudioPlayer active={activePoint} onClose={() => setActivePoint(null)} />
    </section>
  );
}
