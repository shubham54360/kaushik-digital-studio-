import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp, MapPin } from 'lucide-react';
import { agencyConfig } from '../config/agency';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Split name for styling
  const nameParts = agencyConfig.brand.name.split(' ');
  const firstWord = nameParts[0] || 'KAUSHIK';
  const restOfName = nameParts.slice(1).join(' ') || 'DIGITAL STUDIO';

  return (
    <footer className="border-t border-white/5 bg-bg-darker py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Brand */}
        <div className="text-center md:text-left">
          <span className="font-display font-black text-sm sm:text-base tracking-widest text-white block uppercase">
            {firstWord} <span className="text-neon-purple">{restOfName}</span>
          </span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500 mt-1 block">
            Founded By {agencyConfig.brand.founder}
          </span>
          <span className="text-[9px] font-sans text-slate-600 mt-1.5 flex items-center justify-center md:justify-start gap-1">
            <MapPin className="h-3 w-3 text-neon-pink" />
            {agencyConfig.brand.location}
          </span>
        </div>

        {/* Middle: Quick Links, Contact Info & Status */}
        <div className="flex flex-col items-center gap-3.5 text-center">
          {/* Quick links row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
            <Link to="/" className="hover:text-neon-blue transition-colors">Home</Link>
            <Link to="/services" className="hover:text-neon-blue transition-colors">Services</Link>
            <Link to="/packages" className="hover:text-neon-blue transition-colors">Packages</Link>
            <Link to="/projects" className="hover:text-neon-blue transition-colors">Projects</Link>
            <Link to="/quote" className="hover:text-neon-blue transition-colors">Quote</Link>
            <Link to="/faq" className="hover:text-neon-blue transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-neon-blue transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs font-mono text-slate-400 mt-1">
            <a
              href={`tel:${agencyConfig.contacts.phone}`}
              className="flex items-center gap-2 hover:text-neon-blue transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-neon-blue" />
              {agencyConfig.contacts.phone}
            </a>

            <div className="hidden sm:block h-3 w-[1px] bg-white/10" />

            <a
              href={`mailto:${agencyConfig.contacts.email}`}
              className="flex items-center gap-2 hover:text-neon-purple transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-neon-purple" />
              {agencyConfig.contacts.email}
            </a>
          </div>
          
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/5">
            {agencyConfig.brand.availability}
          </span>
        </div>

        {/* Right Side: Scroll to top & credit */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <button
            onClick={scrollToTop}
            className="h-8 w-8 rounded bg-white/5 border border-white/10 hover:border-neon-blue flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <span className="text-[10px] text-slate-500 font-sans">
            Designed & Developed by {agencyConfig.brand.founder}
          </span>
        </div>

      </div>
    </footer>
  );
}
