import { Instagram, Music2, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-white/60">
      <div className="container-dly flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2 font-display text-base font-bold text-white">
          <img
            src="/logo.jpeg"
            alt="Logotipo de DescubreLoTuyo"
            className="h-8 w-8 rounded-lg object-cover"
          />
          Descubre<span className="text-dly-300">LoTuyo</span>
        </div>
        <p className="font-serif text-sm">
          Relatos sonoros del patrimonio de Sevilla. De todos para todos.
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:hola@descubrelotuyo.es" aria-label="Correo" className="transition hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="transition hover:text-white">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="TikTok" className="transition hover:text-white">
            <Music2 className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center font-serif text-xs text-white/40">
        © {new Date().getFullYear()} DescubreLoTuyo · Hecho en Sevilla
      </p>
    </footer>
  );
}
