import { Users } from 'lucide-react';
import { team } from '@/data/team';

export default function Team() {
  return (
    <section id="equipo" className="relative bg-neutral-50 py-20 md:py-28">
      <div className="container-dly">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Quiénes somos</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            El equipo detrás de DescubreLoTuyo
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-ink/70">
            Cuatro personas convencidas de que el patrimonio se cuenta mejor cuando lo cuenta
            quien lo vive. Esto es el equipo promotor del proyecto.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="font-display text-lg font-bold leading-tight">{m.name}</p>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 rounded-full bg-dly px-2.5 py-1 text-[11px] font-semibold">
                    <Users className="h-3 w-3" />
                    {m.role}
                  </p>
                </div>
              </div>
              <p className="px-4 py-4 font-serif text-sm leading-relaxed text-ink/70">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
