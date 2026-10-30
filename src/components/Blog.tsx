import { useMemo, useState } from 'react';
import { ArrowUpRight, Clock, Filter } from 'lucide-react';
import {
  blogEntries,
  categoryMeta,
  allCategories,
  type BlogCategory,
} from '@/data/blog';

export default function Blog() {
  const [filter, setFilter] = useState<BlogCategory | 'Todas'>('Todas');

  const visible = useMemo(
    () => (filter === 'Todas' ? blogEntries : blogEntries.filter((b) => b.category === filter)),
    [filter],
  );

  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container-dly">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="section-eyebrow">Noticias / Blog</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Historia que se cuenta de mil formas
            </h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-ink/70">
              Ocho formatos, una misma misión. Filtra por categoría y descubre cómo sonamos.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-ink/50">
            <Filter className="h-4 w-4" />
            {visible.length} entradas
          </div>
        </div>

        {/* Filtros */}
        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip
            label="Todas"
            active={filter === 'Todas'}
            onClick={() => setFilter('Todas')}
          />
          {allCategories.map((c) => (
            <FilterChip
              key={c}
              label={categoryMeta[c].label}
              icon={categoryMeta[c].icon}
              active={filter === c}
              onClick={() => setFilter(c)}
            />
          ))}
        </div>

        {/* Grid de noticias interactivas */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((entry, i) => {
            const meta = categoryMeta[entry.category];
            const Icon = meta.icon;
            return (
              <a
                key={entry.id}
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {/* Cabecera de color */}
                <div
                  className={`relative h-28 bg-gradient-to-br ${entry.accent} p-4 text-white`}
                >
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                    <Icon className="h-3 w-3" />
                    {entry.category}
                  </span>
                  <span className="absolute bottom-3 right-3 text-3xl">{entry.emoji}</span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-dly">
                    {entry.title}
                  </h3>
                  <p className="mt-2 flex-1 font-serif text-sm leading-relaxed text-ink/70 line-clamp-3">
                    {entry.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3 text-xs text-ink/50">
                    <span>{entry.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {entry.readTime}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-ink/60">{entry.author}</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-dly/10 text-dly transition-all group-hover:bg-dly group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`chip border ${
        active
          ? 'border-dly bg-dly text-white shadow-md shadow-dly/30'
          : 'border-black/10 bg-white text-ink/70 hover:border-dly/40 hover:text-dly'
      }`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {label}
    </button>
  );
}
