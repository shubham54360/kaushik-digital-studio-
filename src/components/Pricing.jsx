import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { agencyConfig } from '../config/agency';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-bg-darker/40">
      {/* Background soft ambient glows */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
              Flexible & Transparent
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            Website <span className="text-neon-purple">Packages</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {agencyConfig.pricing.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-panel p-8 rounded relative flex flex-col justify-between transition-all duration-300 ${pkg.glow} border`}
            >
              {/* Highlight badge for popular business plan */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 shadow-lg">
                  Most Popular
                </div>
              )}

              <div>
                {/* Header */}
                <div className="text-center mb-6 border-b border-white/5 pb-6">
                  <h3 className="text-slate-300 font-display font-bold text-lg mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1.5 mt-4">
                    <span className="text-3xl sm:text-4xl font-display font-black text-white">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      / One-Time
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8 text-xs text-slate-400">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className="h-4.5 w-4.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className={`h-3 w-3 ${pkg.accentColor}`} />
                      </div>
                      <span className="leading-tight text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Action Button */}
              <a
                href="#contact"
                className={`w-full py-3 rounded text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${pkg.buttonBg}`}
              >
                <Send className="h-3.5 w-3.5" />
                Start Project
              </a>

            </motion.div>
          ))}
        </div>

        {/* Disclaimer / Billing Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-[10px] sm:text-xs text-slate-500 font-mono tracking-wider max-w-xl mx-auto"
        >
          *Domain, hosting and third-party service charges are paid separately by the client.
        </motion.div>

      </div>
    </section>
  );
}
