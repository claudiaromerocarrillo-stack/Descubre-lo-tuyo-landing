import { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { supabase } from '../lib/supabase';

const EMAILJS_SERVICE_ID = 'service_4mgow1k';
const EMAILJS_TEMPLATE_ID = 'template_vd3hqxg';
const EMAILJS_PUBLIC_KEY = 'kZxO479m3dOfsPwC6';

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');

  useEffect(() => {
    const dismissed = localStorage.getItem('dly_newsletter_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('dly_newsletter_dismissed', 'true');
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'loading') return;

    const cleanEmail = email.trim().toLowerCase();
    setStatus('loading');

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email: cleanEmail }]);

    if (!error) {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { to_email: cleanEmail },
          EMAILJS_PUBLIC_KEY
        );
      } catch (emailErr) {
        console.error('Error enviando correo de bienvenida:', emailErr);
      }

      setStatus('success');
      setEmail('');
      localStorage.setItem('dly_newsletter_dismissed', 'true');
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    } else if (error.code === '23505') {
      setStatus('duplicate');
      localStorage.setItem('dly_newsletter_dismissed', 'true');
    } else {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fade-up">
      <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-ink p-7 text-white shadow-2xl">
        <button
          onClick={handleClose}
          aria-label="Cerrar ventana"
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-dly/20 text-dly-300">
          <Mail className="h-6 w-6" />
        </div>

        <h3 className="mt-4 text-center font-display text-2xl font-bold leading-tight">
          Únete a <span className="text-dly-300">DescubreLoTuyo</span>
        </h3>
        <p className="mt-2 text-center font-serif text-sm leading-relaxed text-white/75">
          Déjanos tu correo para recibir nuevas audioguías, rutas secretas por Sevilla y novedades antes que nadie.
        </p>

        {status === 'success' ? (
          <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3.5 text-center text-sm font-medium text-emerald-300">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            ¡Gracias por suscribirte! Revisa tu bandeja de entrada.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-6 space-y-3">
            <input
              type="email"
              required
              placeholder="Tu correo electrónico..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-dly-300 focus:bg-white/15 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center py-3 disabled:opacity-50"
            >
              {status === 'loading' ? 'Registrando...' : 'Suscribirme gratis'}
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}

        {status === 'duplicate' && (
          <p className="mt-3 text-center text-xs text-amber-300">
            Este correo ya estaba registrado en nuestra newsletter.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-center text-xs text-red-400">
            Hubo un problema al registrar tu correo. Inténtalo de nuevo.
          </p>
        )}

        {status !== 'success' && (
          <button
            onClick={handleClose}
            className="mt-4 block w-full text-center text-xs text-white/40 hover:text-white/70 transition"
          >
            No, gracias · Seguir explorando
          </button>
        )}
      </div>
    </div>
  );
}
