import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { agencyConfig } from '../config/agency';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Projects', path: '/projects' },
    { name: 'Quote', path: '/quote' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const nameParts = agencyConfig.brand.name.split(' ');
  const firstWord = nameParts[0] || 'KAUSHIK';
  const restOfName = nameParts.slice(1).join(' ') || 'DIGITAL STUDIO';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-4 bg-bg-darker/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Branding */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-9 flex items-center justify-center relative overflow-hidden">
            <img src={logoImg} alt="KDS Logo" className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-widest text-white leading-tight uppercase">
              {firstWord} <span className="text-neon-purple">{restOfName}</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-sans text-[10px] uppercase tracking-widest transition-colors duration-300 font-semibold ${
                      isActive ? 'text-neon-blue font-bold' : 'text-slate-300 hover:text-neon-blue'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            state={{ selectedContext: 'Start Custom Website Project', message: 'Hello Shubham, I would like to start a custom website project for my business.' }}
            className="flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 group"
          >
            Start Project
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-bg-darker/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block font-sans text-xs font-semibold uppercase tracking-wider py-2 border-b border-white/5 transition-colors duration-300 ${
                        isActive ? 'text-neon-blue font-bold' : 'text-slate-300 hover:text-neon-blue'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  state={{ selectedContext: 'Start Custom Website Project', message: 'Hello Shubham, I would like to start a custom website project for my business.' }}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[10px] font-bold uppercase py-3 rounded hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
                >
                  Start Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
