import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { MapPoint } from '@/data/map';

export default function App() {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero activePoint={activePoint} setActivePoint={setActivePoint} />
        <About />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
