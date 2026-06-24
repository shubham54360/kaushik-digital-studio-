import { motion } from 'framer-motion';
import { MessageCircle, Send, ArrowRight, Check } from 'lucide-react';
import shubhamPortrait from '../assets/shubham_portrait.png';
import { agencyConfig } from '../config/agency';

export default function Hero() {
  const trustIndicators = [
    'Fast Delivery',
    'Mobile Responsive',
    'WhatsApp Integration',
    'Affordable Pricing',
  ];

  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-12 overflow-hidden">
      {/* Soft backlights */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-neon-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Agency Pitch */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            {/* Agency Brand Name */}
            <span className="text-xl sm:text-2xl font-display font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink uppercase block leading-none">
              {agencyConfig.brand.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-bold mt-2 block">
              Founded By {agencyConfig.brand.founder}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4 leading-tight"
          >
            Professional Websites <br />
            For <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Local Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mb-3 leading-relaxed font-sans"
          >
            {agencyConfig.brand.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xs sm:text-sm text-slate-400 max-w-xl mb-5 leading-relaxed font-sans"
          >
            Helping coaching institutes, cafes, restaurants, libraries, dairy businesses, salons, gyms and local businesses establish a powerful online presence and attract more customers.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6"
          >
            <a
              href="#projects"
              className="px-5 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold uppercase tracking-wider rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-5 py-3 bg-white/5 border border-white/10 hover:border-neon-purple/50 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Start Project
              <Send className="h-3.5 w-3.5" />
            </a>

            <a
              href={agencyConfig.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-600/20 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 flex items-center gap-2"
            >
              WhatsApp Me
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Trust Checkmarks */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 border-t border-white/5 pt-8 w-full max-w-xl">
            {trustIndicators.map((indicator, i) => (
              <motion.div
                key={indicator}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-2 text-xs font-mono tracking-wide text-slate-300"
              >
                <div className="h-5 w-5 rounded-full bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-neon-blue font-bold" />
                </div>
                <span>{indicator}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Portrait Image */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-90 lg:h-90"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-[20px] opacity-20 pointer-events-none" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue/30 via-neon-purple/30 to-neon-pink/30 rounded-2xl opacity-40 pointer-events-none" />

            <div className="absolute inset-1 rounded-[12px] overflow-hidden bg-bg-dark border border-white/10 shadow-2xl">
              <img
                src={shubhamPortrait}
                alt="Shubham Kaushik Portrait"
                className="w-full h-full object-cover contrast-[1.02] hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute -top-1 -left-1 h-3.5 w-3.5 border-t-2 border-l-2 border-neon-blue/80 z-20" />
            <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 border-b-2 border-r-2 border-neon-purple/80 z-20" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
