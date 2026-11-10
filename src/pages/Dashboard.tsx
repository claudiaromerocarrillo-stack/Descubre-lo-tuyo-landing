import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-ink text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <button 
            onClick={handleLogout}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">Gestión de Audioguías</h2>
            <p className="text-white/60 text-sm mb-4">Administra los puntos sonoros activos en el mapa.</p>
            <span className="text-xs bg-dly/20 text-dly-300 px-3 py-1 rounded-full font-bold">6 Puntos Activos</span>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">Métricas de Uso</h2>
            <p className="text-white/60 text-sm mb-4">Consulta el estado del servicio y los archivos cargados.</p>
            <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-bold">Servicio Operativo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
