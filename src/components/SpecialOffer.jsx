import { motion } from 'framer-motion';
import { Check, MessageCircle, AlertCircle } from 'lucide-react';
import { agencyConfig } from '../config/agency';

export default function SpecialOffer() {
  const previewFeatures = [
    "Custom Website Design Preview",
    "Homepage Design",
    "Mobile View Preview",
    "Business Information Integration",
    "Contact Information Section",
    "WhatsApp Button Preview",
    "Service Showcase Section",
    "Professional Business Layout",
    "Brand Colors & Styling",
    "Basic Navigation Preview",
    "Business Specific Design"
  ];

  const whatsappOfferLink = `https://wa.me/91${agencyConfig.contacts.whatsappNum}?text=Hello%20Shubham,%20I%20would%20like%20to%20get%20a%20%E2%82%B999%20website%20preview%20for%20my%20business.`;

  return (
    <section id="special-offer" className="py-16 relative overflow-hidden bg-bg-darker/50">
      {/* Background neon soft glows */}
      <div className="absolute top-[15%] left-[-15%] w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-15%] w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-extrabold mb-3 block px-3 py-1 bg-neon-pink/10 rounded-full border border-neon-pink/20 shadow-[0_0_15px_rgba(255,0,127,0.15)] animate-pulse">
              LIMITED OFFER
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-3xl leading-tight"
          >
            Not Sure Yet? <br />
            Get Your Business Website Preview For Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">₹99</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-xs sm:text-base max-w-xl mt-3 font-sans"
          >
            See how your future website will look before placing a full website order.
          </motion.p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mt-5" />
        </div>

        {/* Offer Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 rounded-xl border border-neon-purple/35 relative overflow-hidden shadow-[0_0_50px_rgba(157,78,221,0.15)]"
        >
          {/* Internal diagonal accent aura */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-pink/5 pointer-events-none" />

          {/* Pricing Design Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-8 mb-8 gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-display font-bold text-xl sm:text-2xl uppercase tracking-wider mb-2">
                Website Draft Preview
              </h3>
              <p className="text-slate-400 text-xs font-sans">
                A custom live interactive mockup tailored exclusively to your business needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center sm:items-end flex-shrink-0 bg-white/5 border border-white/10 rounded-lg p-4 sm:px-6 sm:py-3.5 shadow-inner">
              <span className="text-[10px] font-mono text-neon-pink uppercase tracking-widest font-extrabold mb-1">
                Special Price
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                  ₹99
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                  Only
                </span>
              </div>
            </div>
          </div>

          {/* What's Included Grid */}
          <div className="mb-8">
            <h4 className="text-slate-300 font-mono text-xs uppercase tracking-[0.2em] mb-4 font-bold border-l-2 border-neon-blue pl-2.5">
              What's Included:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
              {previewFeatures.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-neon-blue" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note Callout */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-neon-blue to-neon-purple" />
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-neon-purple flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-1.5">
                  Important Note
                </h5>
                <p className="text-slate-400 text-xs leading-relaxed font-sans mb-3.5">
                  This is a preview version created specifically for your business to help you visualize the final website.
                  The <strong className="text-white">₹99 amount will be fully adjusted</strong> in the final website cost if you decide to proceed with any full website package.
                </p>
                
                {/* Math breakdown example */}
                <div className="bg-black/35 rounded border border-white/5 p-3 text-[11px] font-mono text-slate-400 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div>
                    <span className="block text-slate-500 uppercase text-[9px] tracking-wider mb-0.5">Business Package</span>
                    <span className="text-white font-bold text-sm">₹3499</span>
                  </div>
                  <div className="flex items-center justify-center text-neon-pink font-bold">
                    − Preview Paid (₹99)
                  </div>
                  <div>
                    <span className="block text-slate-500 uppercase text-[9px] tracking-wider mb-0.5">Final Payment</span>
                    <span className="text-neon-blue font-bold text-sm">₹3400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <a
              href={whatsappOfferLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group scale-100 hover:scale-102"
            >
              <MessageCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              GET MY ₹99 WEBSITE PREVIEW
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
