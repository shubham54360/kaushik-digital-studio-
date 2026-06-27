import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import BackgroundParticles from './components/BackgroundParticles';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingActions from './components/FloatingActions';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import FaqPage from './pages/FaqPage';

// Mounting redirect helper to always start on home `/` on fresh session
function HomeRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="relative bg-bg-darker min-h-screen text-slate-200 overflow-x-hidden">
        {/* Global Futuristic Scanline Overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.12)_50%)] bg-[length:100%_4px] pointer-events-none z-30 opacity-30" />

        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" onComplete={() => setLoading(false)} />
          ) : (
            <div key="main-content" className="relative min-h-screen flex flex-col justify-between">
              {/* Dynamic Backgrounds */}
              <BackgroundParticles />
              <MouseGlow />

              {/* Scroll Position Reset */}
              <ScrollToTop />

              {/* Home Redirect Mount */}
              <HomeRedirect />

              {/* Navigation Header */}
              <Navbar />

              {/* Main Routing Content */}
              <main className="relative z-10 flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/packages" element={<PackagesPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/quote" element={<QuotePage />} />
                  <Route path="/faq" element={<FaqPage />} />
                </Routes>
              </main>

              {/* Footer */}
              <Footer />

              {/* Floating Expandable Quick Actions FAB */}
              <FloatingActions />
            </div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
