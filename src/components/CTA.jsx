import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-darker/70">
      {/* Cinematic backing glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(112,0,255,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Visual Line Accent */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Ready To Take Your <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Business Online?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Let's build a professional website that helps your business attract more customers and stand out from competitors.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold uppercase tracking-wider rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center gap-2 group"
          >
            Get Started
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://wa.me/919540311172?text=Hello%20Shubham,%20I%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-600/20 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 flex items-center gap-2"
          >
            WhatsApp Me
            <MessageCircle className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
