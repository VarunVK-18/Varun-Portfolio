import React, { useState } from 'react';
import Loader from './components/Loader/Loader';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TechMarquee from './components/TechMarquee/TechMarquee';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Activate scroll-triggered fade animations
  useScrollReveal();

  return (
    <>
      {/* Multicolor Morphing Blob Loader — 3 second intro */}
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      <div className="portfolio-app">
        {/* Top Reading Progress Bar */}
        <ScrollProgress />

        {/* Sticky Blur Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          {/* Dual Auto-Sliding Marquee (Left & Right) */}
          <TechMarquee />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
