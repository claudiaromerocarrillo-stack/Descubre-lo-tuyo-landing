import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Credenciales incorrectas');
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center p-4">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Acceso Administrador</h1>
        
        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-dly"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-dly"
            required
          />
        </div>

        <button type="submit" className="w-full bg-[#9c0000] text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
