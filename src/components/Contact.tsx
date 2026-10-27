import { useState } from 'react';
import { Mail, Send, MapPin, Instagram, Music2, Check } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    'w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-serif text-ink placeholder:text-ink/40 transition focus:border-dly focus:outline-none focus:ring-2 focus:ring-dly/20';

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-dly/30 blur-[120px]" />
      <div className="container-dly relative grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Info */}
        <div>
          <span className="section-eyebrow text-dly-300">Contacto</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Hablemos de tu ciudad
          </h2>
          <p className="mt-5 max-w-md font-serif text-lg leading-relaxed text-white/75">
            ¿Quieres proponer un punto, colaborar o llevarte DescubreLoTuyo a tu instituto o
            municipio? Escríbenos y te respondemos en menos de 48 horas.
          </p>

          <div className="mt-9 space-y-4">
            <a
              href="mailto:descubrelotuyo@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-dly/40 hover:bg-white/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-dly text-white">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-white/50">
                  Correo
                </span>
                <span className="font-display font-semibold">descubrelotuyo@gmail.com</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-dly text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-white/50">
                  Base
                </span>
                <span className="font-display font-semibold">Sevilla · Andalucía, España</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.tiktok.com/@descubrelotuyo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium transition hover:bg-dly"
              >
                <Music2 className="h-4 w-4" />
                TikTok
              </a>
              <a
                href="https://www.instagram.com/descubrelotuyo?xtok=MTcwa3RsdTF1cnQ2Zg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium transition hover:bg-dly"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
          {sent ? (
            <div className="grid h-full min-h-[360px] place-items-center text-center">
              <div>
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-dly text-white animate-fade-in">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">¡Mensaje enviado!</h3>
                <p className="mt-2 font-serif text-white/70">
                  Gracias por escribirnos. Te responderemos muy pronto.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-display text-sm font-semibold text-white/80">
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-display text-sm font-semibold text-white/80">
                    Correo electrónico
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@correo.es"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block font-display text-sm font-semibold text-white/80">
                  Asunto
                </label>
                <input
                  required
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="¿Sobre qué hablamos?"
                  className={field}
                />
              </div>
              <div>
                <label className="mb-1.5 block font-display text-sm font-semibold text-white/80">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Escríbenos lo que quieras contarnos..."
                  className={`${field} resize-none`}
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar mensaje
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
