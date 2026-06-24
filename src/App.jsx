import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import BackgroundParticles from './components/BackgroundParticles';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative bg-bg-darker min-h-screen text-slate-200 overflow-x-hidden">
      {/* Global Futuristic Scanline Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.12)_50%)] bg-[length:100%_4px] pointer-events-none z-30 opacity-30" />

      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="main-content" className="relative min-h-screen">
            {/* Dynamic Backgrounds */}
            <BackgroundParticles />
            <MouseGlow />

            {/* Navigation Header */}
            <Navbar />

            {/* Main Page Content */}
            <main className="relative z-10">
              <Hero />
              <Trust />
              <Services />
              <Pricing />
              <Projects />
              <About />
              <Industries />
              <Contact />
              <CTA />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
