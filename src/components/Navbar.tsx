import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyecto', label: 'El Proyecto' },
  { href: '#equipo', label: 'Quiénes Somos' },
  { href: '#blog', label: 'Noticias' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(0,0,0,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-dly flex h-16 items-center justify-between md:h-20">
        <a
          href="#inicio"
          className={`flex items-center gap-2 font-display text-lg font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-ink' : 'text-white'
          }`}
        >
          <img
            src="/logo.jpeg"
            alt="Logotipo de DescubreLoTuyo"
            className="h-10 w-10 rounded-xl object-cover shadow-lg shadow-dly/40"
          />
          <span>
            Descubre
            <span className={scrolled ? 'text-dly' : 'text-dly-300'}>LoTuyo</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-full px-4 py-2 font-display text-sm font-medium transition-colors hover:text-dly-300 ${
                  scrolled ? 'text-ink/80' : 'text-white/85'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#proyecto" className="btn-primary">
            Explorar
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-xl border md:hidden ${
            scrolled
              ? 'border-black/10 bg-white/70 text-ink'
              : 'border-white/25 bg-white/10 text-white backdrop-blur'
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-dly border-t border-black/10 bg-white/95 backdrop-blur-md">
          <ul className="flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-display text-base font-medium text-ink/80 transition-colors hover:bg-dly/5 hover:text-dly"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pb-5">
            <a href="#proyecto" onClick={() => setOpen(false)} className="btn-primary w-full">
              Explorar la plataforma
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
