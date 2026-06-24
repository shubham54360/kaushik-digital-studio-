import { motion } from 'framer-motion';
import { agencyConfig } from '../config/agency';

export default function Industries() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-bg-darker/40">
      {/* Ambient background glows */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-bold mb-3 block">
              Market Specialties
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            Businesses We <span className="text-neon-blue">Help</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto"
        >
          {agencyConfig.industries.map((ind) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-panel p-5 rounded border border-white/5 flex flex-col items-center justify-center text-center group hover:border-neon-blue/20 transition-all duration-300 cursor-default"
              >
                {/* Icon circle */}
                <div className="h-10 w-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="h-5 w-5 text-neon-blue group-hover:text-neon-purple transition-colors" />
                </div>

                {/* Industry Name */}
                <span className="text-slate-300 font-display font-bold text-xs sm:text-sm group-hover:text-white transition-colors">
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
