import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Forum from './components/Forum';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import type { MapPoint } from '@/data/map';

function MainLanding() {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);

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
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing pública principal */}
        <Route path="/" element={<MainLanding />} />
        
        {/* Pantalla de acceso administrador */}
        <Route path="/login" element={<Login />} />
        
        {/* Panel privado protegido */}
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
