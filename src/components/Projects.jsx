import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { agencyConfig } from '../config/agency';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Business', 'Education', 'Library'];

  // Match the filter against project categories
  const filteredProjects = activeFilter === 'All'
    ? agencyConfig.projects
    : agencyConfig.projects.filter(proj => {
        if (activeFilter === 'Business') return proj.category === 'Business Website';
        if (activeFilter === 'Education') return proj.category === 'Education Platform';
        if (activeFilter === 'Library') return proj.category === 'Library Website';
        return false;
      });

  return (
    <section id="projects" className="py-16 relative overflow-hidden bg-bg-darker/50">
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
              Case Studies
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-2"
          >
            Featured <span className="text-neon-purple">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-xs sm:text-sm max-w-md mt-2"
          >
            Real projects designed and developed by Kaushik Digital Studio.
          </motion.p>
          
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        {/* Filter Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto border-b border-white/5 pb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white border border-transparent shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`glass-panel rounded border border-white/5 relative overflow-hidden group transition-all duration-300 flex flex-col justify-between ${proj.borderColor}`}
              >
                <div>
                  {/* Screenshot Preview Area */}
                  <div className="h-48 sm:h-52 w-full relative overflow-hidden bg-black/40">
                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-transparent to-transparent pointer-events-none z-10" />

                    {/* Screenshot Image */}
                    <img
                      src={proj.image}
                      alt={`${proj.title} Screenshot`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-display font-bold text-lg group-hover:text-neon-blue transition-colors">
                        {proj.title}
                      </h3>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neon-purple px-2 py-0.5 border border-neon-purple/20 bg-neon-purple/5 rounded">
                        {proj.category}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 h-16 overflow-hidden">
                      {proj.desc}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.techs.map((t) => (
                        <span
                          key={t}
                          className={`text-[9px] font-mono px-2 py-0.5 rounded border ${proj.badgeColor}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center relative z-10 bg-black/10">
                  <a
                    href={proj.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-center bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 hover:from-neon-blue/35 hover:to-neon-purple/35 border border-neon-blue/35 hover:border-neon-blue/60 rounded text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-neon-blue" />
                    Visit Website
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
