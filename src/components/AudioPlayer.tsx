import { useState } from 'react';
import { Play, Pause, Volume2, SkipForward, SkipBack, X } from 'lucide-react';
import { audioDemo, type MapPoint } from '@/data/map';

interface AudioPlayerProps {
  active: MapPoint | null;
  onClose: () => void;
}

export default function AudioPlayer({ active, onClose }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const title = active?.title ?? 'Demo — Susurros de Sevilla';
  const city = active?.city ?? 'Recorrido sonoro';
  const duration = active?.duration ?? audioDemo.defaultDuration;

  // Barra de progreso simulada: avanza mientras se "reproduce"
  const togglePlay = () => {
    setPlaying((p) => {
      const next = !p;
      if (next) {
        window.clearInterval((window as unknown as { __dlyTimer?: number }).__dlyTimer);
        const t = window.setInterval(() => {
          setProgress((pr) => (pr >= 100 ? 0 : pr + 0.4));
        }, 80);
        (window as unknown as { __dlyTimer?: number }).__dlyTimer = t;
      } else {
        window.clearInterval(
          (window as unknown as { __dlyTimer?: number }).__dlyTimer,
        );
      }
      return next;
    });
  };

  if (!active) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[60] w-[min(92vw,560px)] -translate-x-1/2 animate-fade-up rounded-3xl border border-black/10 bg-white/95 p-4 shadow-2xl backdrop-blur-lg sm:p-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => { onClose(); }}
          aria-label="Cerrar reproductor"
          className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-ink text-white shadow-md md:right-0 md:top-0"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-dly text-white shadow-lg">
          <div className="absolute inset-0 grid place-items-center">
            {playing ? (
              <div className="flex h-6 items-end gap-[3px]">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-white animate-wave"
                    style={{ height: '100%', animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>
            ) : (
              <Play className="h-6 w-6" />
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-dly">
            <span className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-dly" />
            Reproductor sonoro
          </div>
          <p className="truncate font-display text-sm font-bold text-ink">{title}</p>
          <p className="truncate text-xs text-ink/60">{city} · Audioguía DLY</p>
        </div>

        <div className="hidden sm:block">
          <Volume2 className="h-5 w-5 text-ink/40" />
        </div>
      </div>

      {/* Barra */}
      <div className="mt-3 flex items-center gap-3">
        <span className="font-display text-[11px] tabular-nums text-ink/50">
          0:{Math.floor((progress / 100) * 60)
            .toString()
            .padStart(2, '0')}
        </span>
        <div
          className="relative h-1.5 flex-1 rounded-full bg-black/10"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setProgress(((e.clientX - rect.left) / rect.width) * 100);
          }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-dly"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white ring-2 ring-dly shadow"
            style={{ left: `calc(${progress}% - 6px)` }}
          />
        </div>
        <span className="font-display text-[11px] tabular-nums text-ink/50">{duration}</span>
      </div>

      {/* Controles */}
      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          aria-label="Anterior"
          className="grid h-9 w-9 place-items-center rounded-full text-ink/70 transition hover:bg-black/5 hover:text-dly"
        >
          <SkipBack className="h-4 w-4" />
        </button>
        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pausar' : 'Reproducir'}
          className="grid h-12 w-12 place-items-center rounded-full bg-dly text-white shadow-lg shadow-dly/40 transition hover:-translate-y-0.5 hover:bg-dly-700"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-0.5" />}
        </button>
        <button
          aria-label="Siguiente"
          className="grid h-9 w-9 place-items-center rounded-full text-ink/70 transition hover:bg-black/5 hover:text-dly"
        >
          <SkipForward className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
