import { motion } from 'framer-motion';
import { Shield, Target, Cpu, MessageSquare } from 'lucide-react';
import shubhamPortrait from '../assets/shubham_portrait.png';
import { agencyConfig } from '../config/agency';

export default function AboutPage() {
  const values = [
    { title: 'Transparency First', desc: 'No complex jargon or hidden platform monthly premiums. We deal directly with you, offering transparent packages.', icon: Shield, color: 'text-neon-blue' },
    { title: 'High Performance Coding', desc: 'Every line of code is optimized so that your website loads instantly, ranks higher on search engines, and remains secure.', icon: Cpu, color: 'text-neon-purple' },
    { title: 'Conversion Oriented UI', desc: 'We build interfaces structured to turn visitors into leads and direct WhatsApp or phone inquiries.', icon: Target, color: 'text-neon-pink' },
    { title: 'Direct Communication', desc: 'No middle managers or client reps. You work directly with founder Shubham Kaushik for design adjustments and assistance.', icon: MessageSquare, color: 'text-emerald-400' }
  ];

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-[15%] right-[-10%] w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            The Vision Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Kaushik Digital Studio</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-4 leading-relaxed font-sans">
            Learn more about our agency mission and coding values.
          </p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue to-neon-purple mt-6" />
        </div>

        {/* Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 max-w-5xl mx-auto">
          {/* Portrait Photo Container */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-64 h-64 sm:w-76 sm:h-76"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-[20px] opacity-20 pointer-events-none" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-2xl opacity-40 pointer-events-none" />

              <div className="absolute inset-1 rounded-[12px] overflow-hidden bg-bg-dark border border-white/10 shadow-2xl">
                <img
                  src={shubhamPortrait}
                  alt="Shubham Kaushik Portrait"
                  className="w-full h-full object-cover contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute -top-1 -left-1 h-3.5 w-3.5 border-t-2 border-l-2 border-neon-blue/80 z-20" />
              <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 border-b-2 border-r-2 border-neon-purple/80 z-20" />
            </motion.div>
          </div>

          {/* Bio Description */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest font-extrabold mb-1">
              Founder Profile
            </span>
            <h2 className="text-white font-display font-extrabold text-2xl sm:text-3xl mb-4">
              {agencyConfig.brand.founder}
            </h2>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
              Kaushik Digital Studio helps local businesses establish a strong online presence through premium websites that build trust, optimize user experiences, and generate direct inquiries.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              We focus on building websites that load instantly and work seamlessly on mobile phones. By eliminating unnecessary layers and middlemen, we provide premium agency-level code quality at prices small business owners can actually afford.
            </p>
          </div>
        </div>

        {/* Agency Values Checklist */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center font-display font-extrabold text-2xl text-white mb-12">
            Our Core Quality Standards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-panel p-6 rounded-xl border border-white/5 flex gap-4 hover:border-white/10 transition-colors"
                >
                  <div className="h-10 w-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className={`h-5.5 w-5.5 ${val.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-sm sm:text-base mb-1">
                      {val.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
