import { Zap, Clock, Unlock, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Clock,
    title: 'Formatos cortos',
    desc: 'Audioguías de 2 a 5 minutos, pensadas para escucharse caminando, en un solo momento.',
  },
  {
    icon: Zap,
    title: 'Lenguaje fresco',
    desc: 'Sin tecnicismos ni monólogos densos. Historia contada como te la contaría un amigo que sabe.',
  },
  {
    icon: Unlock,
    title: 'Acceso libre e inmediato',
    desc: 'Sin códigos, sin apps que descargar. Escanea, toca y escucha. Punto.',
  },
  {
    icon: MapPin,
    title: 'Identidad local',
    desc: 'Cada relato nace del barrio y de quien lo vive. No de un guion genérico para turistas.',
  },
];

export default function About() {
  return (
    <section id="proyecto" className="relative py-20 md:py-28">
      <div className="container-dly grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Columna Izquierda: Texto e Imagen */}
        <div>
          <span className="section-eyebrow">Sobre el proyecto</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            El patrimonio no aburre.{' '}
            <span className="text-dly">La forma de contarlo, sí.</span>
          </h2>
          <p className="mt-6 font-serif text-lg leading-relaxed text-ink/80">
            DescubreLoTuyo nace de una pregunta sencilla: ¿por qué las audioguías tradicionales
            hablan a un público que ya casi no existe? Textos largos, voces monótonas y
            información enciclopédica que convierte el patrimonio en deberes.
          </p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-ink/80">
            Nosotros proponemos lo contrario: relatos sonoros breves, en lenguaje cercano y de
            acceso libre, pensados para cualquier persona que quiera redescubrir Sevilla a su
            ritmo. Porque la historia de una ciudad también es la historia de la gente que la
            camina.
          </p>

          <figure className="mt-8 overflow-hidden rounded-3xl border border-black/10 shadow-xl text-center bg-slate-50">
            <img
              src="https://images.pexels.com/photos/17606509/pexels-photo-17606509.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Edificio emblemático en el entorno del Salvador, Sevilla"
              className="h-56 w-full object-cover sm:h-72"
              loading="lazy"
            />
            <figcaption className="p-3 font-serif text-xs italic text-slate-700 bg-slate-100 border-t border-black/5">
              Edificio emblemático en el entorno del Salvador, Sevilla.
            </figcaption>
          </figure>
        </div>

        {/* Columna Derecha: Comparativa + pilares */}
        <div>
          <div className="rounded-3xl bg-ink p-7 text-white shadow-xl sm:p-9">
            <h3 className="font-display text-lg font-bold">
              Audioguías tradicionales vs. DescubreLoTuyo
            </h3>
            <div className="mt-6 space-y-4">
              {[
                ['40 min de audio denso', '2–5 min, una historia por punto'],
                ['Voz institucional y fría', 'Voces jóvenes del barrio'],
                ['App o dispositivo de alquiler', 'Tu móvil, sin descargas'],
                ['Guion para turistas', 'Para quien vive o visita, por igual'],
                ['Pago por monumento', 'Acceso libre y gratuito'],
              ].map(([old, neu]) => (
                <div key={old} className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/55 line-through decoration-dly-300/60">
                    {old}
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-dly/20 px-3 py-2 text-sm font-medium text-white ring-1 ring-dly-300/30">
                    {neu}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-dly/30 hover:shadow-lg"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-dly/10 text-dly transition-colors group-hover:bg-dly group-hover:text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-ink">{p.title}</h4>
                <p className="mt-1.5 font-serif text-sm leading-relaxed text-ink/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
