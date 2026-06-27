import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { agencyConfig } from '../config/agency';

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-purple font-bold mb-3 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Case Studies & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Featured Work</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-4 leading-relaxed font-sans">
            Explore live responsive websites crafted to accelerate conversions for local business owners.
          </p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue to-neon-purple mt-6" />
        </div>

        {/* Projects Showcase Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {agencyConfig.projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="luxury-card rounded-2xl relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Screenshot Area */}
                <div className="h-56 sm:h-64 w-full relative overflow-hidden bg-black/40 border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-transparent to-transparent pointer-events-none z-10" />
                  <img
                    src={proj.image}
                    alt={`${proj.title} Screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neon-purple px-2.5 py-1 border border-neon-purple/20 bg-neon-purple/90 rounded-full backdrop-blur-md">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-white font-display font-extrabold text-xl sm:text-2xl mb-3 group-hover:text-neon-blue transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
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

              {/* Action Button Footer */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <a
                  href={proj.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 hover:from-neon-blue/35 hover:to-neon-purple/35 border border-neon-blue/35 hover:border-neon-blue/60 rounded text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-neon-blue" />
                  Visit Website
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
