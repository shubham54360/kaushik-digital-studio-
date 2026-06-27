import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Calculator, Send } from 'lucide-react';

const businessTypes = [
  { id: 'business', label: 'Business Website', basePrice: 1999 },
  { id: 'coaching', label: 'Coaching Institute', basePrice: 2499 },
  { id: 'library', label: 'Library Website', basePrice: 2499 },
  { id: 'gym', label: 'Gym Website', basePrice: 2999 },
  { id: 'cafe', label: 'Cafe Website', basePrice: 2999 },
  { id: 'custom', label: 'Custom Business', basePrice: 3999 }
];

const pageOptions = [
  { id: '1', label: '1 Page', extraPrice: 0 },
  { id: '3', label: '3 Pages', extraPrice: 500 },
  { id: '5', label: '5 Pages', extraPrice: 1000 },
  { id: '8', label: '8+ Pages', extraPrice: 2000 }
];

const featureOptions = [
  { id: 'whatsapp', label: 'WhatsApp Integration', price: 200 },
  { id: 'contact', label: 'Contact Form', price: 300 },
  { id: 'maps', label: 'Google Maps', price: 200 },
  { id: 'seo', label: 'Basic SEO', price: 400 },
  { id: 'payment', label: 'Payment Gateway', price: 1500 },
  { id: 'emailConf', label: 'Auto Email Confirmation', price: 500 },
  { id: 'booking', label: 'Booking System', price: 1200 },
  { id: 'login', label: 'User Login', price: 1500 },
  { id: 'admin', label: 'Admin Dashboard', price: 2000 },
  { id: 'gmb', label: 'Google Business Setup', price: 500 },
  { id: 'blog', label: 'Blog Section', price: 800 },
  { id: 'gallery', label: 'Gallery / Portfolio', price: 300 },
  { id: 'customForms', label: 'Custom Application Forms', price: 500 }
];

const timelineOptions = [
  { id: 'standard', label: 'Standard Delivery', extraPrice: 0 },
  { id: 'fast', label: 'Fast Delivery', extraPrice: 999 }
];

export default function QuotePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Selection States
  const [selectedBusiness, setSelectedBusiness] = useState(businessTypes[0]);
  const [selectedPages, setSelectedPages] = useState(pageOptions[1]); // Default 3 pages
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[0]);
  
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Recalculate estimated price
  useEffect(() => {
    let price = selectedBusiness.basePrice;
    price += selectedPages.extraPrice;
    
    selectedFeatures.forEach(featId => {
      const option = featureOptions.find(f => f.id === featId);
      if (option) price += option.price;
    });

    price += selectedTimeline.extraPrice;
    setEstimatedPrice(price);
  }, [selectedBusiness, selectedPages, selectedFeatures, selectedTimeline]);

  const handleFeatureToggle = (id) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const getFormSummaryText = () => {
    const listFeatures = selectedFeatures
      .map(id => featureOptions.find(f => f.id === id)?.label)
      .filter(Boolean)
      .join(', ');
      
    return `Business Type: ${selectedBusiness.label} | Pages: ${selectedPages.label} | Features: [${listFeatures || 'None'}] | Timeline: ${selectedTimeline.label} | Estimated Cost: ₹${estimatedPrice}`;
  };

  const handleWhatsAppQuote = () => {
    const summary = getFormSummaryText();
    const message = `Hello Shubham,\n\nI have configured my website requirements using your Quote Calculator.\n\n*Configuration details:*\n- ${summary}\n\nPlease send me the final quotation.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919540311172?text=${encoded}`, '_blank');
  };

  const handleEmailQuote = () => {
    const summary = getFormSummaryText();
    navigate('/contact', {
      state: {
        selectedContext: `Quote Configuration (Est. ₹${estimatedPrice})`,
        message: `Hello Shubham,\n\nI have configured my website requirements using your Quote Calculator (Est. Price: ₹${estimatedPrice}).\n\n- Business Type: ${selectedBusiness.label}\n- Pages: ${selectedPages.label}\n- Features: ${selectedFeatures.map(id => featureOptions.find(f => f.id === id)?.label).join(', ') || 'None'}\n- Delivery Timeline: ${selectedTimeline.label}\n\nPlease send me the final quotation.`
      }
    });
  };

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-[10%] left-[-15%] w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
            Instant Estimate
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Calculate Your Website Cost
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mt-3 font-sans leading-relaxed">
            Configure your design requirements and get an instant transparent quote in real-time.
          </p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue to-neon-purple mt-5" />
        </div>

        {/* Main Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step Form Card */}
          <div className="lg:col-span-8">
            <div className="luxury-card p-6 sm:p-8 rounded-2xl relative min-h-[420px] flex flex-col justify-between">
              
              {/* Steps Progress Indicator */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Step {currentStep} of 4
                </span>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4].map(step => (
                    <div
                      key={step}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        step === currentStep 
                          ? 'w-6 bg-gradient-to-r from-neon-blue to-neon-purple' 
                          : step < currentStep 
                            ? 'w-2 bg-neon-blue/60' 
                            : 'w-2 bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Steps Content wrapper */}
              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h2 className="text-white font-display font-bold text-base sm:text-lg mb-4">
                        Step 1: Select Business Type
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {businessTypes.map(type => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setSelectedBusiness(type)}
                            className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                              selectedBusiness.id === type.id
                                ? 'border-neon-blue bg-neon-blue/5 text-white shadow-[0_0_15px_rgba(0,210,255,0.1)]'
                                : 'border-white/5 bg-white/2 hover:border-white/15 text-slate-400 hover:text-white'
                            }`}
                          >
                            <span className="text-xs font-bold font-sans">{type.label}</span>
                            {selectedBusiness.id === type.id && (
                              <Check className="h-4 w-4 text-neon-blue" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h2 className="text-white font-display font-bold text-base sm:text-lg mb-4">
                        Step 2: Number of Pages
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                        {pageOptions.map(opt => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setSelectedPages(opt)}
                            className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                              selectedPages.id === opt.id
                                ? 'border-neon-blue bg-neon-blue/5 text-white shadow-[0_0_15px_rgba(0,210,255,0.1)]'
                                : 'border-white/5 bg-white/2 hover:border-white/15 text-slate-400 hover:text-white'
                            }`}
                          >
                            <span className="text-sm font-display font-bold">{opt.label}</span>
                            {opt.extraPrice > 0 ? (
                              <span className="text-[9px] font-mono text-neon-blue">+₹{opt.extraPrice}</span>
                            ) : (
                              <span className="text-[9px] font-mono text-slate-500">Base</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h2 className="text-white font-display font-bold text-base sm:text-lg mb-4">
                        Step 3: Choose Features
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[250px] overflow-y-auto pr-2">
                        {featureOptions.map(feat => {
                          const isSelected = selectedFeatures.includes(feat.id);
                          return (
                            <button
                              key={feat.id}
                              type="button"
                              onClick={() => handleFeatureToggle(feat.id)}
                              className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'border-neon-purple bg-neon-purple/5 text-white'
                                  : 'border-white/5 bg-white/2 hover:border-white/15 text-slate-400 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`h-4 w-4 rounded flex items-center justify-center border transition-all ${
                                  isSelected ? 'border-neon-purple bg-neon-purple text-white' : 'border-white/10'
                                }`}>
                                  {isSelected && <Check className="h-3 w-3" />}
                                </div>
                                <span className="text-xs font-sans">{feat.label}</span>
                              </div>
                              <span className="text-[9px] font-mono text-neon-purple">+₹{feat.price}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h2 className="text-white font-display font-bold text-base sm:text-lg mb-4">
                        Step 4: Delivery Timeline
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {timelineOptions.map(timeline => (
                          <button
                            key={timeline.id}
                            type="button"
                            onClick={() => setSelectedTimeline(timeline)}
                            className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                              selectedTimeline.id === timeline.id
                                ? 'border-neon-pink bg-neon-pink/5 text-white shadow-[0_0_15px_rgba(255,0,85,0.1)]'
                                : 'border-white/5 bg-white/2 hover:border-white/15 text-slate-400 hover:text-white'
                            }`}
                          >
                            <div>
                              <span className="text-xs font-bold font-sans block">{timeline.label}</span>
                              <span className="text-[9px] text-slate-500 block font-mono">
                                {timeline.id === 'standard' ? 'Deliver in 4-7 days' : 'Priority delivery in 2-3 days'}
                              </span>
                            </div>
                            {timeline.extraPrice > 0 ? (
                              <span className="text-[9px] font-mono text-neon-pink">+₹{timeline.extraPrice}</span>
                            ) : (
                              <span className="text-[9px] font-mono text-slate-500">Free</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Action Footer */}
              <div className="flex justify-between items-center border-t border-white/5 pt-5 mt-6">
                <button
                  type="button"
                  disabled={currentStep === 1}
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-4 py-2 text-xs font-bold font-mono tracking-widest text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold font-mono uppercase tracking-wider rounded border border-white/10 flex items-center gap-1 cursor-pointer hover:shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    Configuration Complete
                  </span>
                )}
              </div>

            </div>
          </div>

          {/* Right: Live Estimation Pricing Card */}
          <div className="lg:col-span-4">
            <div className="luxury-card p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between border-neon-blue/20">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Calculator className="h-5 w-5 text-neon-blue" />
                  <h3 className="text-white font-display font-bold text-sm tracking-wide uppercase">Estimation Box</h3>
                </div>

                <div className="border-b border-white/5 pb-4 mb-4">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Live Estimated Price</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-display font-black text-white">₹{estimatedPrice}</span>
                  </div>
                </div>

                {/* Selection details overview */}
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">Business Type</span>
                    <span className="text-xs text-white font-bold">{selectedBusiness.label}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">Page Count</span>
                    <span className="text-xs text-white font-bold">{selectedPages.label}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">Timeline</span>
                    <span className="text-xs text-white font-bold">{selectedTimeline.label}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">Features Selected</span>
                    <span className="text-xs text-neon-purple font-bold">
                      {selectedFeatures.length} Added
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 leading-relaxed font-sans mb-6">
                  *This is an estimated price. Final quotation depends on project requirements.
                </p>
              </div>

              {/* Action buttons to get quote */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleEmailQuote}
                  className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] text-white text-xs font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                >
                  <Send className="h-3.5 w-3.5" />
                  GET FINAL QUOTE
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-white text-xs font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 font-mono"
                >
                  WHATSAPP NOW
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
