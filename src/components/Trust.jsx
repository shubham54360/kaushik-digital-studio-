import { motion } from 'framer-motion';
import { agencyConfig } from '../config/agency';

export default function Trust() {
  return (
    <section id="trust" className="py-24 relative overflow-hidden bg-bg-darker/60">
      {/* Glow shapes */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-purple font-bold mb-3 block">
              Value Proposition
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            Why Businesses Choose <span className="text-neon-blue">{agencyConfig.brand.name}</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        {/* Grid of Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {agencyConfig.trust.map((point, i) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`glass-panel p-6 rounded border border-white/5 relative overflow-hidden group transition-all duration-300 flex flex-col justify-between ${point.hoverBorder}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent pointer-events-none" />
                
                <div>
                  {/* Icon circle */}
                  <div className="h-10 w-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className={`h-6 w-6 ${point.accent}`} />
                  </div>

                  <h3 className="text-white font-display font-bold text-sm sm:text-base mb-2 group-hover:text-neon-blue transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
