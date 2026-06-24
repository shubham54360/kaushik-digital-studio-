import { motion } from 'framer-motion';
import { agencyConfig } from '../config/agency';

export default function Services() {
  const industries = [
    'Coaching Institutes',
    'Libraries',
    'Cafes',
    'Restaurants'
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-16 relative overflow-hidden">
      {/* Background neon soft blur */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-bold mb-3 block">
              What I Deliver
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            Premium <span className="text-neon-blue">Services</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {agencyConfig.services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel p-6 sm:p-8 rounded border border-white/5 shadow-2xl relative overflow-hidden group hover:border-neon-blue/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Internal glow aura on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  {/* Service Icon Box */}
                  <div className="h-10 w-10 rounded border border-white/10 bg-white/5 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 relative z-10">
                    <IconComponent className={`h-5.5 w-5.5 ${service.color}`} />
                  </div>

                  <h3 className="text-white font-display font-bold text-base sm:text-lg mb-2 relative z-10 group-hover:text-neon-blue transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed relative z-10">
                    {service.desc}
                  </p>
                </div>

                {/* Glowing Corner lines */}
                <div className="absolute top-0 right-0 h-[1px] w-0 bg-neon-blue group-hover:w-12 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 h-0 w-[1px] bg-neon-purple group-hover:h-12 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industries We Serve Badge Row */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <h3 className="text-center text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-6">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {industries.map((ind, idx) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(0,240,255,0.4)', color: '#fff' }}
                className="px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-neon-blue/30 rounded text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-all duration-300 cursor-default"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
