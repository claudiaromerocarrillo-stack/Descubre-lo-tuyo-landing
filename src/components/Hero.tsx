import { useState } from 'react';
import { MapPin, Play, Headphones, ArrowDown, Radio } from 'lucide-react';
import { mapPoints, type MapPoint } from '@/data/map';
import AudioPlayer from './AudioPlayer';

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
            Redescubrimos Sevilla,
            <span className="relative mt-2 block text-white">
              de{' '}
              <span className="relative text-dly-300">
                todos
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
              para todos.
            </span>
          </h1>
          <p className="mt-7 max-w-xl font-serif text-lg leading-relaxed text-white/80">
            Relatos sonoros cortos, en lenguaje fresco y de acceso libre, para que el
            patrimonio de Sevilla se escuche, se sienta y se comparta como nunca antes,
          a cualquier edad.</p>
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

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-dly/10 ring-1 ring-black/5">
              {/* Trazo del río Guadalquivir */}
              <svg
                viewBox="0 0 100 125"
                className="absolute inset-0 h-full w-full text-dly/15"
                preserveAspectRatio="none"
              >
                <path
                  d="M20 10 C 24 30 18 44 26 58 C 34 72 30 92 38 120"
                  stroke="rgba(156,0,0,0.3)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M15 95 Q 50 98 88 92"
                  stroke="rgba(156,0,0,0.15)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              {/* Etiqueta de distrito */}
              <span className="absolute right-2 top-2 rounded-md bg-white/70 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-dly/80 backdrop-blur">
                Casco antiguo
              </span>

              {/* Puntos */}
              {mapPoints.map((p) => {
                const isActive = hovered === p.id || activePoint?.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePoint(p)}
                    onMouseEnter={() => setHovered(p.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    aria-label={`Punto: ${p.title} en ${p.city}`}
                  >
                    {/* Anillo */}
                    <span
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                        isActive ? 'h-10 w-10 bg-dly/30' : 'h-7 w-7 bg-dly/15'
                      } animate-pulse-soft`}
                    />
                    <span
                      className={`relative grid h-7 w-7 place-items-center rounded-full border-2 border-white shadow-lg transition-all ${
                        isActive
                          ? 'scale-125 bg-dly text-white'
                          : 'bg-dly text-white'
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                    </span>

                    {/* Tooltip */}
                    <div
                      className={`pointer-events-none absolute left-1/2 top-9 z-10 w-44 -translate-x-1/2 rounded-xl bg-white p-2.5 text-left shadow-xl transition-all duration-200 ${
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                      }`}
                    >
                      <p className="font-display text-[11px] font-bold uppercase tracking-wide text-dly">
                        {p.city}
                      </p>
                      <p className="text-xs font-semibold text-ink">{p.title}</p>
                      <p className="mt-0.5 text-[10px] text-ink/60">
                        Audioguía · {p.duration}
                      </p>
                    </div>
                  </button>
                );
              })}

              {/* Leyenda esquina */}
              <div className="absolute bottom-2 left-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-[10px] font-medium text-ink/70 backdrop-blur">
                Toca un punto para escuchar
              </div>
            </div>

            <button
              onClick={() => setActivePoint(mapPoints[1])}
              className="mt-3 flex w-full items-center justify-between rounded-2xl bg-dly px-4 py-3 text-white transition hover:bg-dly-700"
            >
              <span className="flex items-center gap-2 font-display text-sm font-semibold">
                <Play className="h-4 w-4" />
                Reproducir demo "{mapPoints[1].title}"
              </span>
              <span className="text-xs text-white/70">{mapPoints[1].duration}</span>
            </button>
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
