import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { agencyConfig } from '../config/agency';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-darker text-white font-display select-none"
    >
      {/* Background Soft Glow */}
      <div className="absolute w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink uppercase mb-3"
        >
          {agencyConfig.brand.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          className="text-[10px] sm:text-xs text-slate-400 tracking-widest font-sans uppercase"
        >
          {agencyConfig.brand.tagline}
        </motion.p>
      </div>
    </motion.div>
  );
}
