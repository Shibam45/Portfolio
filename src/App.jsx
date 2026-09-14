import React, { useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: '#060913' }}>
      <CanvasBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
