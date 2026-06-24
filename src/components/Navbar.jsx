import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { agencyConfig } from '../config/agency';

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
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const nameParts = agencyConfig.brand.name.split(' ');
  const firstWord = nameParts[0] || 'KAUSHIK';
  const restOfName = nameParts.slice(1).join(' ') || 'DIGITAL STUDIO';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-4 bg-bg-darker/70 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Branding */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded border border-neon-blue/30 flex items-center justify-center relative overflow-hidden bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-neon-blue font-bold font-mono group-hover:scale-110 transition-transform duration-300">SK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-widest text-white leading-tight uppercase">
              {firstWord} <span className="text-neon-purple">{restOfName}</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-sans text-[10px] uppercase tracking-widest text-slate-300 hover:text-neon-blue transition-colors duration-300 font-semibold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 group"
          >
            Start Project
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-300"
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
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-sans text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-neon-blue transition-colors duration-300 py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[10px] font-bold uppercase py-3 rounded hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
                >
                  Start Project
                  <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
