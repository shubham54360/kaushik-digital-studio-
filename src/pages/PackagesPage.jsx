import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, HelpCircle, ArrowRight, Layers, Box, Cpu, ChevronDown, CheckCircle, Loader2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function PackagesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  // Form State for Custom Quote Request
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email Address is invalid';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (formData.honeypot) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        resetForm();
      }, 1000);
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      business_name: 'N/A',
      message: `[CUSTOM QUOTE REQUEST FROM PACKAGES PAGE]\n\n${formData.message}`,
      to_email: 'sk1513217@gmail.com'
    };

    if (serviceId === 'service_placeholder' || templateId === 'template_placeholder' || publicKey === 'public_key_placeholder') {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        resetForm();
      }, 1500);
    } else {
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setLoading(false);
          setSuccess(true);
          resetForm();
        })
        .catch((error) => {
          setLoading(false);
          console.error('EmailJS send error:', error);
          setErrors({ form: 'Failed to send inquiry. Please try again or WhatsApp us.' });
        });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      honeypot: ''
    });
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

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
    { title: '1. Requirement Discussion', desc: 'Consultation to align on business requirements, feature lists, and branding.' },
    { title: '2. UI Design', desc: 'Crafting the visual layout mockups, color palettes, and typography structure.' },
    { title: '3. Website Development', desc: 'Writing high-performance code, configuring integrations, and compiling build configurations.' },
    { title: '4. Client Review', desc: 'Demonstrating draft previews on actual mobile, tablet, and desktop screens for feedback.' },
    { title: '5. Website Launch', desc: 'Domain mapping, hosting deployment, final SEO indexing, and search engine integration.' },
    { title: '6. Free Support', desc: 'Activating post-delivery complimentary support coverage (15 Days to 6 Months) for peace of mind.' }
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

        {/* Custom Website Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto luxury-card p-8 sm:p-10 rounded-xl relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Details */}
            <div className="lg:col-span-6">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neon-pink px-2 py-0.5 rounded border border-neon-pink/20 bg-neon-pink/5 mb-3.5 inline-block">
                Tailored Solutions
              </span>
              <h3 className="text-white font-display font-extrabold text-2xl sm:text-3xl mb-4">
                Custom Website Solutions
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Need something beyond our standard packages? We build fully customized websites tailored to your business requirements. Every project is quoted based on its features, complexity, and development time.
              </p>
              
              <div className="p-4 rounded border border-white/5 bg-white/5 mb-6">
                <h4 className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest mb-1.5">
                  Pricing Notice
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  Standard packages cover only the listed features. Advanced features and custom integrations are priced separately after discussing your project requirements.
                </p>
              </div>

              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-neon-pink to-neon-purple text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded hover:shadow-[0_0_20px_rgba(255,0,127,0.35)] hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer"
              >
                Request a Custom Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right Column: Custom features list */}
            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-xs font-mono font-bold text-neon-blue uppercase tracking-widest mb-4">
                Example Custom Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Payment Gateway Integration',
                  'Auto Email Confirmation',
                  'Contact Form Integration',
                  'Booking & Appointment System',
                  'Admin Dashboard',
                  'User Login & Authentication',
                  'Database Integration',
                  'Custom API Integration',
                  'WhatsApp Integration',
                  'Multi-step Forms',
                  'SEO Optimization',
                  'Blog System',
                  'Analytics Integration',
                  'E-commerce Features',
                  'Custom Business Logic'
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-neon-pink flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs text-slate-350 font-sans">{feat}</span>
                  </div>
                ))}
              </div>
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

        {/* Free Support Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
              Complimentary Policy
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
              Free Support Included With Every Website
            </h2>
            <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-3 font-sans">
              Every website includes complimentary post-delivery support to ensure everything runs smoothly.
            </p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Starter Support */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-card p-6 rounded-xl relative flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono text-neon-blue uppercase tracking-widest block mb-1">Starter Website</span>
                <h3 className="text-white font-display font-extrabold text-xl mb-3">15 Days Support</h3>
                <ul className="space-y-2 text-[11px] text-slate-400 font-sans">
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-blue" /> Bug Fixes</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-blue" /> Text Updates</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-blue" /> Image Replacement</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-blue" /> Contact Details Update</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-blue" /> WhatsApp Link Update</li>
                </ul>
              </div>
            </motion.div>

            {/* Business Support */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-card p-6 rounded-xl relative flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono text-neon-purple uppercase tracking-widest block mb-1">Business Website</span>
                <h3 className="text-white font-display font-extrabold text-xl mb-3">1 Month Support</h3>
                <ul className="space-y-2 text-[11px] text-slate-400 font-sans">
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-purple" /> Everything in Starter</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-purple" /> Minor Content Updates</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-purple" /> Minor Design Adjustments</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-purple" /> Technical Assistance</li>
                </ul>
              </div>
            </motion.div>

            {/* Premium Support */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-card p-6 rounded-xl relative flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono text-neon-pink uppercase tracking-widest block mb-1">Premium Website</span>
                <h3 className="text-white font-display font-extrabold text-xl mb-3">3 Months Support</h3>
                <ul className="space-y-2 text-[11px] text-slate-400 font-sans">
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-pink" /> Priority Support</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-pink" /> Bug Fixes</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-pink" /> Content Updates</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-pink" /> Minor UI Improvements</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-neon-pink" /> Technical Assistance</li>
                </ul>
              </div>
            </motion.div>

            {/* Custom Support */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-card p-6 rounded-xl relative flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">Custom Business</span>
                <h3 className="text-white font-display font-extrabold text-xl mb-3">6 Months Support</h3>
                <ul className="space-y-2 text-[11px] text-slate-400 font-sans">
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Priority Support</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Technical Assistance</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Bug Fixes</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Content Updates</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Minor Improvements</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-emerald-400" /> Business Guidance</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Important Notice Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-card p-6 sm:p-10 rounded-xl relative overflow-hidden mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-transparent pointer-events-none" />
            <h3 className="text-white font-display font-extrabold text-lg mb-6 border-b border-white/5 pb-3">Important Notice: Support Boundaries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold mb-3">Support Includes:</h4>
                <ul className="space-y-2 text-xs text-slate-300 font-sans">
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Bug Fixes</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Content Updates</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Image Replacement</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Contact Information Changes</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" /> WhatsApp Number Changes</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Email Address Changes</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Minor Layout Adjustments</li>
                </ul>
              </div>
              <div>
                <h4 className="text-neon-pink font-mono text-xs uppercase tracking-widest font-bold mb-3">Support Does NOT Include:</h4>
                <ul className="space-y-2 text-xs text-slate-400 font-sans">
                  <li className="flex items-start gap-2"><span className="text-neon-pink font-bold flex-shrink-0 leading-none">✘</span> New Pages</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink font-bold flex-shrink-0 leading-none">✘</span> Complete Website Redesign</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink font-bold flex-shrink-0 leading-none">✘</span> Payment Gateway Added Later</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink font-bold flex-shrink-0 leading-none">✘</span> Admin Panel Development</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink font-bold flex-shrink-0 leading-none">✘</span> Large Feature Requests</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink font-bold flex-shrink-0 leading-none">✘</span> Major Design Changes</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink font-bold flex-shrink-0 leading-none">✘</span> New Custom Modules</li>
                </ul>
                <p className="text-[10px] text-slate-500 font-mono mt-4 italic">
                  Note: These unsupported services require a separate custom quotation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Website Maintenance Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-bold mb-3 block">
              Continuous Care
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
              Website Maintenance Plans
            </h2>
            <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-3 font-sans">
              Keep your website optimized, secure, and up-to-date with our low-cost monthly plans.
            </p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            {/* Basic Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-card p-6 sm:p-8 rounded-xl relative flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white font-display font-bold text-lg mb-2">Monthly Website Maintenance</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-display font-black text-white">₹499</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1.5">/ Month</span>
                </div>
                <ul className="space-y-3 mb-8 text-xs text-slate-400">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-blue flex-shrink-0" /> Website Health Check</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-blue flex-shrink-0" /> Monthly Content Updates</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-blue flex-shrink-0" /> Bug Fixes</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-blue flex-shrink-0" /> Basic Technical Support</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-blue flex-shrink-0" /> Backup Assistance</li>
                </ul>
              </div>
              <Link
                to="/contact"
                state={{ selectedContext: 'Monthly Website Maintenance (₹499/Mo)', message: 'Hello Shubham, I would like to get started with the Monthly Website Maintenance plan (₹499/Mo) for my business.' }}
                className="w-full py-3 bg-gradient-to-r from-neon-blue/15 to-neon-purple/15 hover:from-neon-blue/30 hover:to-neon-purple/30 border border-neon-blue/30 text-white text-xs font-bold uppercase tracking-widest rounded text-center transition-all duration-300 cursor-pointer"
              >
                GET MAINTENANCE PLAN
              </Link>
            </motion.div>

            {/* Premium Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-card p-6 sm:p-8 rounded-xl relative flex flex-col justify-between border-neon-purple/20"
            >
              <div>
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 shadow-lg">
                  Recommended
                </div>
                <h3 className="text-white font-display font-bold text-lg mb-2">Premium Website Maintenance</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-display font-black text-white">₹999</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1.5">/ Month</span>
                </div>
                <ul className="space-y-3 mb-8 text-xs text-slate-400">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-purple flex-shrink-0" /> Everything in Basic</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-purple flex-shrink-0" /> Priority Support</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-purple flex-shrink-0" /> Unlimited Minor Updates</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-purple flex-shrink-0" /> Security Monitoring</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-purple flex-shrink-0" /> Performance Optimization</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-purple flex-shrink-0" /> Monthly Website Review</li>
                </ul>
              </div>
              <Link
                to="/contact"
                state={{ selectedContext: 'Premium Website Maintenance (₹999/Mo)', message: 'Hello Shubham, I would like to get started with the Premium Website Maintenance plan (₹999/Mo) for my business.' }}
                className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] text-white text-xs font-bold uppercase tracking-widest rounded text-center transition-all duration-300 cursor-pointer"
              >
                CONTACT NOW
              </Link>
            </motion.div>
          </div>

          {/* Final Message Note */}
          <div className="max-w-3xl mx-auto text-center p-6 border-t border-white/5 mt-8">
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic font-sans max-w-2xl mx-auto">
              "We don't just build websites—we support your business even after launch. Every project includes free support based on the selected package, ensuring your website continues to perform smoothly."
            </p>
          </div>
        </div>

        {/* Client Process Timeline */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-center font-display font-extrabold text-2xl text-white mb-12">
            Our Collaboration Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="luxury-card p-6 rounded-xl relative">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple opacity-70" />
                <h3 className="text-white font-display font-bold text-sm sm:text-base mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Contact / Custom Quote Request Section */}
        <div id="contact" className="max-w-4xl mx-auto mb-24 pt-12">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-purple font-bold mb-3 block">
              Inquiry Form
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Request a Custom Quote
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mt-2 leading-relaxed font-sans">
              Describe your project requirements, integrations, or specific business goals to receive a personalized quote.
            </p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
          </div>

          <div className="luxury-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="h-14 w-14 text-emerald-400 mb-4 animate-bounce" />
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-sans">
                    Thank you. We will evaluate your custom integrations list and follow up with a detailed quotation within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  {errors.form && (
                    <div className="p-3.5 rounded border border-red-500/20 bg-red-500/5 text-red-400 text-center font-mono">
                      {errors.form}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-slate-400 text-[9px] font-mono uppercase tracking-widest block mb-1.5 font-bold">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                      />
                      {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-slate-400 text-[9px] font-mono uppercase tracking-widest block mb-1.5 font-bold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                      />
                      {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-slate-400 text-[9px] font-mono uppercase tracking-widest block mb-1.5 font-bold">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                      />
                      {errors.phone && <span className="text-[10px] text-red-400 mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    className="hidden"
                  />

                  {/* Message */}
                  <div>
                    <label className="text-slate-400 text-[9px] font-mono uppercase tracking-widest block mb-1.5 font-bold">Project Details (Custom Requirements)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Please specify which integrations you require (e.g. Razorpay payment, user auth, dynamic map feeds)..."
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors resize-none placeholder-slate-650"
                    />
                    {errors.message && <span className="text-[10px] text-red-400 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-white" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-white" />
                          Send Custom Quote Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
