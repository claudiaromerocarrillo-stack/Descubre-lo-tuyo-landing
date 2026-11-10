import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthenticated(!!session);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-ink flex items-center justify-center text-white">Cargando...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
