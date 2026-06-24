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
import Contact from './components/Contact';
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
              <Services />
              <Pricing />
              <Projects />
              <Trust />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp Button */}
            <a
              href="https://wa.me/919540311172?text=Hello%20Shubham,%20I%20would%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group cursor-pointer"
            >
              <svg
                className="h-7 w-7 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.112-2.905-6.989-1.875-1.875-4.37-2.907-7.01-2.907-5.438 0-9.864 4.426-9.869 9.87-.001 1.636.429 3.23 1.246 4.673l-.994 3.634 3.72-.977zm11.233-5.263c-.3-.149-1.772-.875-2.046-.975-.276-.102-.476-.15-.676.15-.199.3-.775.975-.95 1.174-.176.201-.351.226-.651.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.076-.176-.3-.019-.462.13-.611.135-.133.3-.349.45-.523.15-.174.2-.3.3-.499.1-.2.05-.375-.025-.524-.075-.15-.676-1.63-.926-2.228-.244-.589-.493-.51-.676-.519-.174-.007-.375-.01-.575-.01-.2 0-.525.075-.8.376-.276.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.11 4.52.714.31 1.272.495 1.708.634.717.228 1.37.195 1.887.119.576-.085 1.772-.725 2.022-1.425.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.349z" />
              </svg>
            </a>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
