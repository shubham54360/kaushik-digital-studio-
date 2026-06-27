import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, HelpCircle, ArrowRight, Layers, Box, Cpu, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PackagesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const packages = [
    {
      name: 'Starter Website',
      price: '₹1999',
      icon: Box,
      features: [
        'Single Page Website',
        'Mobile Responsive Design',
        'WhatsApp Integration',
        'Contact Form',
        'Basic SEO Setup',
      ],
      accentColor: 'text-neon-blue',
      glow: 'hover:border-neon-blue/30 border-white/5',
      badge: null
    },
    {
      name: 'Business Website',
      price: '₹3499',
      icon: Layers,
      features: [
        'Up To 5 Pages',
        'Mobile Responsive Design',
        'WhatsApp Integration',
        'Contact Form & Inquiry Inbox',
        'Google Maps Integration',
        'Basic SEO Setup',
        'Fast Loading Speed',
      ],
      accentColor: 'text-neon-purple',
      glow: 'border-neon-purple/40 shadow-[0_0_30px_rgba(157,78,221,0.1)]',
      badge: 'Most Popular'
    },
    {
      name: 'Premium Website',
      price: '₹5999',
      icon: Cpu,
      features: [
        'Premium Custom Design',
        'Mobile Responsive Design',
        'WhatsApp Integration',
        'Contact Form & Inbox',
        'Google Maps Integration',
        'SEO Ready Architecture',
        'Google Business Profile Setup',
        'Domain Linkage Assistance',
        'Vip Priority Support',
      ],
      accentColor: 'text-neon-pink',
      glow: 'hover:border-neon-pink/30 border-white/5',
      badge: 'Best Value'
    }
  ];

  const customPlan = {
    name: 'Custom Business Solution',
    price: 'Starting ₹6999',
    desc: 'Everything required for advanced business web apps, e-commerce, dashboard configurations, and custom client flows.',
    features: [
      'Payment Gateway Integrations', 'Online Booking Systems', 'Admin Management Panels',
      'Secure User Account Portals', 'Automated Email Confirmations', 'Advanced API & Inventory Sync'
    ]
  };

  const steps = [
    { title: '1. Discovery & Planning', desc: 'We align on your requirements, color preferences, copy content, and final objectives.' },
    { title: '2. Design Preview Mockup', desc: 'We build a design prototype draft and present it to you (fully customizable/adjustable).' },
    { title: '3. Full Development', desc: 'Once the preview is approved, we write clean responsive code, configure APIs, maps, and SEO.' },
    { title: '4. Testing & Launch', desc: 'We run performance benchmarks, secure SSL certifications, map your domain, and go live.' }
  ];

  const faqs = [
    { q: 'Will my website work perfectly on smartphones?', a: 'Absolutely. Every single layout we develop is fully mobile-responsive and adjusts dynamically to look stunning on iPhones, Android devices, tablets, and desktop displays.' },
    { q: 'How long does it take to deliver the website?', a: 'Starter websites are usually completed in 2-3 business days. Business websites take 5-7 days, while custom solutions depend on the final list of integrated capabilities.' },
    { q: 'Are there any monthly or annual hidden charges?', a: 'No hidden charges. Our packages are absolute one-time development costs. Renewals for hosting and domain registrations are paid directly to third-party providers (typically ~₹1000-1500 per year).' },
    { q: 'Can I upgrade my package in the future?', a: 'Yes. You can start with the Starter package today and scale it into a fully-fledged multi-page Business website at any time.' }
  ];

  const comparison = [
    { feature: 'Number of Pages', starter: '1 Page', business: 'Up to 5 Pages', premium: 'Custom (Unlimited)', custom: 'Custom' },
    { feature: 'Mobile Optimized UI', starter: 'Yes', business: 'Yes', premium: 'Yes', custom: 'Yes' },
    { feature: 'WhatsApp Chat Integration', starter: 'Yes', business: 'Yes', premium: 'Yes', custom: 'Yes' },
    { feature: 'Contact Form', starter: 'Yes', business: 'Yes (Inbox sync)', premium: 'Yes (Inbox sync)', custom: 'Yes' },
    { feature: 'Google Maps Integration', starter: 'No', business: 'Yes', premium: 'Yes', custom: 'Yes' },
    { feature: 'SEO Configuration', starter: 'Basic Metadata', business: 'Basic Metadata', premium: 'Advanced Audit', custom: 'Advanced Audit' },
    { feature: 'Google Business Profile Setup', starter: 'No', business: 'No', premium: 'Yes', custom: 'Yes' },
    { feature: 'Admin Portal & Login', starter: 'No', business: 'No', premium: 'No', custom: 'Yes' },
    { feature: 'Payment Integrations', starter: 'No', business: 'No', premium: 'No', custom: 'Yes' },
    { feature: 'Support Tier', starter: 'Standard (Email)', starter: 'Priority (Chat)', premium: 'Vip (Call/Chat)', custom: 'Vip (Call/Chat)' }
  ];

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-[15%] left-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Transparent Pricing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">No Hidden Fees</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-4 leading-relaxed font-sans">
            Choose a plan that fits your business needs, or build a custom solution.
          </p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue to-neon-purple mt-6" />
        </div>

        {/* Standard Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-12">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="luxury-card p-8 rounded-xl relative flex flex-col justify-between"
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                    <div className="h-9 w-9 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className={`h-5 w-5 ${pkg.accentColor}`} />
                    </div>
                    <h3 className="text-white font-display font-bold text-lg">{pkg.name}</h3>
                  </div>

                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-display font-black text-white">{pkg.price}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1.5">/ One-Time</span>
                  </div>

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

                <Link
                  to="/contact"
                  state={{ selectedContext: `${pkg.name} (${pkg.price})`, message: `Hello Shubham, I would like to order the ${pkg.name} (${pkg.price}) for my business.` }}
                  className="w-full py-3 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 hover:border-neon-blue hover:bg-neon-blue/15 text-white text-xs font-bold uppercase tracking-widest rounded text-center transition-all duration-300"
                >
                  Start Project
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Business Solution Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto luxury-card p-8 sm:p-10 rounded-xl relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neon-pink px-2 py-0.5 rounded border border-neon-pink/20 bg-neon-pink/5 mb-3.5 inline-block">
                Tailored Systems
              </span>
              <h3 className="text-white font-display font-extrabold text-2xl sm:text-3xl mb-3">
                {customPlan.name}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                {customPlan.desc}
              </p>
              <div className="grid grid-cols-2 gap-3.5">
                {customPlan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-neon-pink flex-shrink-0" />
                    <span className="text-xs text-slate-300 font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 text-center flex-shrink-0">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Pricing Starts From</span>
              <span className="text-4xl font-display font-black text-white mb-6">{customPlan.price}</span>
              <Link
                to="/contact"
                state={{ selectedContext: 'Custom Business Solution (Starting ₹6999)', message: 'Hello Shubham, I would like to consult about building a Custom Business Solution for my business.' }}
                className="w-full max-w-xs py-3.5 bg-gradient-to-r from-neon-pink to-neon-purple text-white text-xs font-bold uppercase tracking-widest rounded hover:shadow-[0_0_20px_rgba(255,0,127,0.35)] transition-all duration-300 block"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Feature Comparison Table */}
        <div className="max-w-6xl mx-auto mb-24 overflow-x-auto">
          <h2 className="text-center font-display font-extrabold text-2xl text-white mb-10">
            Features Comparison Matrix
          </h2>
          <table className="w-full text-left border-collapse text-xs sm:text-sm text-slate-300 min-w-[600px] luxury-card rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-white/5 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/10">
                <th className="p-4 sm:p-5">Feature</th>
                <th className="p-4 sm:p-5">Starter</th>
                <th className="p-4 sm:p-5">Business</th>
                <th className="p-4 sm:p-5">Premium</th>
                <th className="p-4 sm:p-5">Custom</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, idx) => (
                <tr key={item.feature} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="p-4 font-bold text-white">{item.feature}</td>
                  <td className="p-4 text-slate-400">{item.starter}</td>
                  <td className="p-4 text-slate-400">{item.business}</td>
                  <td className="p-4 text-slate-400">{item.premium}</td>
                  <td className="p-4 text-slate-400">{item.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Client Process Timeline */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-center font-display font-extrabold text-2xl text-white mb-12">
            Our Collaboration Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="luxury-card p-6 rounded-xl relative">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple opacity-70" />
                <h3 className="text-white font-display font-bold text-sm sm:text-base mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-display font-extrabold text-2xl text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-xs sm:text-sm cursor-pointer hover:bg-white/2 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-4.5 w-4.5 text-neon-blue flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-350 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/5 bg-black/20"
                    >
                      <p className="p-5 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
