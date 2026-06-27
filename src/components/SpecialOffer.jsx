import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { agencyConfig } from '../config/agency';

export default function SpecialOffer() {
  const whatsappOfferLink = `https://wa.me/91${agencyConfig.contacts.whatsappNum}?text=Hello%20Shubham,%20I%20would%20like%20to%20get%20a%20%E2%82%B999%20website%20preview%20for%20my%20business.`;

  return (
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="luxury-card p-8 sm:p-10 rounded-2xl relative overflow-hidden bg-gradient-to-br from-neon-blue/10 via-neon-purple/5 to-neon-pink/10 border-neon-blue/30 shadow-[0_0_40px_rgba(0,210,255,0.08)] flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Floating animated sparkles/elements */}
        <div className="absolute top-4 left-4 text-neon-blue/20 animate-pulse">
          <Sparkles className="h-5 w-5" />
        </div>

        {/* Details column */}
        <div className="flex-grow text-center md:text-left">
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neon-pink px-2.5 py-1 rounded bg-neon-pink/10 border border-neon-pink/20 mb-4 inline-block">
            Preview Service
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3 leading-tight">
            See Your Website Before You Invest
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
            Get a professional homepage preview designed specifically for your business before purchasing a complete website.
          </p>
        </div>

        {/* Action column */}
        <div className="flex flex-col items-center flex-shrink-0 bg-black/40 border border-white/10 rounded-xl p-6 text-center w-full md:w-auto min-w-[240px]">
          <span className="text-[10px] font-mono text-neon-blue uppercase tracking-widest font-bold mb-1">
            Exclusive Price
          </span>
          <div className="flex items-baseline justify-center gap-1 mb-5">
            <span className="text-4xl font-display font-black text-white">₹99</span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Only</span>
          </div>
          
          <div className="w-full flex flex-col gap-2.5">
            <a
              href={whatsappOfferLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold uppercase tracking-widest rounded hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:scale-102 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              Get My Preview
            </a>
            <Link
              to="/contact"
              state={{ selectedContext: '₹99 Website Preview', message: 'Hello Shubham, I would like to learn more about the ₹99 website homepage preview service.' }}
              className="w-full py-3 bg-white/5 border border-white/10 hover:border-neon-purple text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-1"
            >
              Learn More
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
