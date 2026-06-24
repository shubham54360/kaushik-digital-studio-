import { motion } from 'framer-motion';
import { Cpu, Terminal, Layout } from 'lucide-react';
import { agencyConfig } from '../config/agency';

export default function About() {
  const points = [
    {
      icon: <Terminal className="h-5 w-5 text-neon-blue" />,
      title: 'Computer Science Foundation',
      desc: 'Pursuing a Diploma in Computer Science, applying systems architecture and database logic directly to web performance.',
    },
    {
      icon: <Cpu className="h-5 w-5 text-neon-purple" />,
      title: 'Business-Centered Solutions',
      desc: 'Building websites configured specifically to convert traffic into calls, form submissions, and direct sales.',
    },
    {
      icon: <Layout className="h-5 w-5 text-neon-pink" />,
      title: 'Agency Quality Code',
      desc: 'Creating custom-coded experiences that exceed standard pre-made site builders in speed, security, and aesthetics.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-darker/20">
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

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
              Meet The Founder
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            About <span className="text-neon-blue">Kaushik Digital Studio</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel p-8 rounded border border-white/5 shadow-2xl relative">
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4 text-[10px] font-mono text-slate-500">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-2 select-none">founder_bio.sh</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                About Kaushik Digital Studio
              </h3>

              <p className="text-slate-300 leading-relaxed mb-4 text-xs sm:text-sm font-sans">
                I am Shubham Kaushik, founder of Kaushik Digital Studio and a Diploma in Computer Science student. I help local businesses build professional websites that increase trust, improve visibility and generate more customer inquiries.
              </p>
              
              <p className="text-neon-blue font-bold text-xs sm:text-sm leading-relaxed border-l-2 border-neon-purple pl-3 my-4 italic font-sans">
                "My mission is simple: Create modern websites that help businesses grow online."
              </p>

              <div className="flex items-center gap-6 mt-8 border-t border-white/5 pt-6">
                <div>
                  <div className="text-neon-blue font-mono font-extrabold text-lg">STUDENT</div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1">CS Diploma</div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div>
                  <div className="text-neon-purple font-mono font-extrabold text-lg">FOUNDER</div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1">Kaushik Studio</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards list */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {points.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-panel p-6 rounded border border-white/5 flex gap-5 hover:border-neon-blue/20 transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {pt.icon}
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base mb-1.5 group-hover:text-neon-blue transition-colors">
                    {pt.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
