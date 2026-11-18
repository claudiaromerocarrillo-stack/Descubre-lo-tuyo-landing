import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Forum from './components/Forum';
import Newsletter from './components/Newsletter';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { supabase } from './lib/supabase';
import type { MapPoint } from '@/data/map';

function MainLanding() {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);

  useEffect(() => {
    const trackVisit = async () => {
      await supabase.from('analytics_events').insert([
        { event_type: 'page_view', item_name: 'Visita Web' },
      ]);
    };
    trackVisit();
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero activePoint={activePoint} setActivePoint={setActivePoint} />
        <About />
        <Team />
        <Blog />
        <Forum />
        <Contact />
      </main>
      <Footer />
      <Newsletter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
