import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, HelpCircle, ArrowRight, Layers, Box, Cpu, ChevronDown, CheckCircle, Loader2, Send, CreditCard, Settings, Calendar, Bot, Smartphone, MessageCircle, Mail, Zap, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { agencyConfig } from '../config/agency';

function NumberCounter({ value, duration = 1.5, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 25);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function PackagesPage() {
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
      to_email: agencyConfig.contacts.email
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
      glow: 'border-neon-purple/40 shadow-[0_0_30px_rgba(157,78,221,0.15)]',
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
        'Basic SEO Setup',
        'Google Business Profile Setup',
        '6 Months Free Support',
      ],
      accentColor: 'text-neon-pink',
      glow: 'hover:border-neon-pink/30 border-white/5',
      badge: null
    }
  ];

  const comparison = [
    { feature: 'Number of Pages', starter: '1 Page', business: 'Up to 5 Pages', premium: 'Custom (Unlimited)', custom: 'Custom' },
    { feature: 'Mobile Responsive', starter: 'Yes', business: 'Yes', premium: 'Yes', custom: 'Yes' },
    { feature: 'WhatsApp Integration', starter: 'Yes', business: 'Yes', premium: 'Yes', custom: 'Yes' },
    { feature: 'Contact Form', starter: 'Yes', business: 'Yes', premium: 'Yes', custom: 'Yes' },
    { feature: 'Basic SEO', starter: 'Yes', business: 'Yes', premium: 'Yes', custom: 'Yes' },
    { feature: 'Delivery Time', starter: '2-3 Days', business: '5-7 Days', premium: '10-12 Days', custom: 'Varies' },
    { feature: 'Support Duration', starter: '15 Days', business: '1 Month', premium: '3 Months', custom: '6 Months' },
    { feature: 'Custom Features Availability', starter: 'No', business: 'No', premium: 'Yes (Included)', custom: 'Yes' }
  ];

  const renderMatrixCell = (val) => {
    if (val === 'Yes' || val === 'Yes (Included)') {
      return <Check className="h-4 w-4 text-emerald-400 font-bold mx-auto lg:mx-0" />;
    }
    if (val === 'No') {
      return <span className="text-red-500 font-bold">✘</span>;
    }
    return <span className="font-sans text-xs text-slate-350">{val}</span>;
  };

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Transparent Pricing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">No Hidden Fees</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-4 leading-relaxed font-sans">
            Choose a plan that fits your business needs, or build a custom solution.
          </p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue to-neon-purple mt-5" />
        </div>

        {/* 1. Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch mb-20">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`luxury-card p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  i === 1
                    ? 'border-neon-purple/45 shadow-[0_0_40px_rgba(157,78,221,0.15)] hover:shadow-[0_0_50px_rgba(157,78,221,0.25)]'
                    : 'hover:shadow-[0_0_25px_rgba(0,210,255,0.08)] border-white/5'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-white/10 shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                    <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className={`h-5 w-5 ${pkg.accentColor}`} />
                    </div>
                    <h3 className="text-white font-display font-bold text-base sm:text-lg">{pkg.name}</h3>
                  </div>

                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl sm:text-4xl font-display font-black text-white">{pkg.price}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider ml-1.5">/ One-Time</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-450 font-sans">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className={`h-4 w-4 ${pkg.accentColor} flex-shrink-0 mt-0.5`} />
                        <span>{feat}</span>
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

        {/* 2. Custom Features & Add-ons Section */}
        <div className="max-w-6xl mx-auto mb-20 relative">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-bold mb-3 block">
              Advanced Add-ons
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
              Custom Features & Add-ons
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 leading-relaxed font-sans">
              Need advanced functionality? We offer custom development tailored to your business needs. These features are not included in standard website packages and are quoted separately based on project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Add-on 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="luxury-card p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_20px_rgba(0,210,255,0.05)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[2.5px] bg-neon-blue" />
              <div>
                <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                  <CreditCard className="h-5 w-5 text-neon-blue" />
                </div>
                <h3 className="text-white font-display font-bold text-sm mb-0.5">Payment Gateway</h3>
                <span className="text-[9px] font-mono font-bold text-neon-blue uppercase tracking-wider block mb-3">
                  Starting from ₹3,000
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                  Secure online payment integration using the client's preferred payment provider. Includes setup, testing, and integration.
                </p>
              </div>
            </motion.div>

            {/* Add-on 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="luxury-card p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_20px_rgba(138,43,226,0.05)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[2.5px] bg-neon-purple" />
              <div>
                <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                  <Settings className="h-5 w-5 text-neon-purple" />
                </div>
                <h3 className="text-white font-display font-bold text-sm mb-0.5">Admin Panel</h3>
                <span className="text-[9px] font-mono font-bold text-neon-purple uppercase tracking-wider block mb-3">
                  Starting from ₹8,000
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                  A secure admin dashboard to manage website content, products, services, or enquiries without editing code.
                </p>
              </div>
            </motion.div>

            {/* Add-on 3 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="luxury-card p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_20px_rgba(255,0,127,0.05)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[2.5px] bg-neon-pink" />
              <div>
                <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                  <Calendar className="h-5 w-5 text-neon-pink" />
                </div>
                <h3 className="text-white font-display font-bold text-sm mb-0.5">Booking System</h3>
                <span className="text-[9px] font-mono font-bold text-neon-pink uppercase tracking-wider block mb-3">
                  Starting from ₹5,000
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                  Allow customers to book appointments, consultations, or services directly from your website.
                </p>
              </div>
            </motion.div>

            {/* Add-on 4 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="luxury-card p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_20px_rgba(52,211,153,0.05)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[2.5px] bg-emerald-500" />
              <div>
                <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                  <Bot className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-white font-display font-bold text-sm mb-0.5">AI Chatbot</h3>
                <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-3">
                  Starting from ₹4,005
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                  An intelligent chatbot that can answer FAQs, capture leads, and assist visitors 24/7.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Highlighted Premium Card Note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-card p-5 sm:p-6 rounded-xl relative overflow-hidden bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-transparent border-neon-blue/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl text-center md:text-left">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neon-blue block mb-1">
                  Pricing Notice
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  Prices shown are starting estimates. Final pricing depends on project requirements, design complexity, and additional functionality.
                </p>
              </div>

              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                Request Custom Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* 3. Included Free With Every Website Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: 'rgba(18, 18, 24, 0.92)' }}
          className="max-w-6xl mx-auto p-8 sm:p-12 rounded-[28px] relative overflow-hidden mb-20 border border-white/8 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
        >
          {/* Subtle left/right border glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />

          {/* Floating animated badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex flex-col items-center bg-black/60 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-blue-500 before:to-purple-650 before:rounded-2xl before:-z-10 before:content-[''] shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <span className="text-[9px] font-mono font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              FREE BONUS
            </span>
            <span className="text-white text-xs sm:text-sm font-display font-black mt-0.5">
              Worth ₹4,000+
            </span>
          </motion.div>

          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-10 relative">
            {/* Very soft radial light behind heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[80px] bg-blue-500/5 rounded-full blur-[40px] pointer-events-none -z-10" />
            
            <span className="text-[10px] uppercase tracking-[0.25em] text-neon-blue font-mono font-bold mb-2 block">
              COMPLIMENTARY BENEFITS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-white mb-3 text-center flex flex-col items-center leading-tight">
              <span>🎁 Everything Included <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 font-black">FREE</span></span>
              <span className="text-lg sm:text-2xl font-bold text-slate-300 mt-1">With Every Website Package</span>
            </h2>
            <p className="text-[#C5C7D0] text-xs sm:text-sm max-w-xl mt-3 font-sans leading-relaxed">
              Every website package includes premium business features at absolutely no extra cost. <br className="hidden sm:inline" />
              Save thousands while getting everything required to launch your business online.
            </p>
          </div>

          {/* 3x2 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Mobile Responsive', desc: 'Looks perfect on every device.', icon: Smartphone, color: 'text-cyan-400', worth: '₹699', borderGlow: 'hover:border-cyan-500/30' },
              { title: 'WhatsApp Integration', desc: 'Direct customer communication.', icon: MessageCircle, color: 'text-emerald-400', worth: '₹499', borderGlow: 'hover:border-emerald-500/30' },
              { title: 'Contact Form', desc: 'Receive enquiries directly on your email.', icon: Mail, color: 'text-purple-400', worth: '₹499', borderGlow: 'hover:border-purple-500/30' },
              { title: 'Fast Loading', desc: 'Optimized for speed.', icon: Zap, color: 'text-orange-400', worth: '₹699', borderGlow: 'hover:border-orange-500/30' },
              { title: 'Basic SEO Setup', desc: 'Ready for Google Search.', icon: CheckCircle, color: 'text-blue-400', worth: '₹999', borderGlow: 'hover:border-blue-500/30' },
              { title: 'Free QR Code', desc: 'Professional QR for your website.', icon: QrCode, color: 'text-pink-400', worth: '₹399', borderGlow: 'hover:border-pink-500/30' }
            ].map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  style={{ background: 'rgba(20, 20, 28, 0.95)' }}
                  className={`p-5 rounded-[20px] border border-white/8 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:-translate-y-1 hover:scale-[1.01] min-h-[160px] ${feat.borderGlow}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:brightness-110">
                      <Icon className={`h-5 w-5 ${feat.color}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-display font-bold text-sm mb-1">{feat.title}</h3>
                      <p className="text-[#AEB5C4] text-xs leading-relaxed font-sans">{feat.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                      Worth {feat.worth}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Total Value Section (Bottom Banner) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-[20px] text-center relative bg-clip-padding before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-cyan-500/30 before:via-purple-500/30 before:to-pink-500/30 before:rounded-[20px] before:-z-10 before:content-[''] bg-black/60 shadow-[0_15px_30px_rgba(0,0,0,0.5)] mb-8 flex flex-col items-center justify-center"
          >
            <span className="text-[10px] font-mono font-bold text-neon-blue uppercase tracking-widest mb-1.5">
              🎉 Total Complimentary Value
            </span>
            <div className="text-3xl sm:text-5xl font-display font-black text-white mb-2 leading-none flex items-center justify-center">
              <NumberCounter value={4000} duration={1.8} prefix="₹" suffix="+" />
            </div>
            <p className="text-slate-300 font-sans text-xs sm:text-sm tracking-wide font-medium">
              Included FREE with every website package.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-400" /> No Hidden Charges</span>
              <span className="h-3 w-[1px] bg-white/10" />
              <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-400" /> No Extra Setup Fees</span>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              'No Hidden Charges',
              'Mobile Optimized',
              'Business Ready',
              'Professional Delivery'
            ].map((text) => (
              <span key={text} className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 shadow-sm">
                <Check className="h-3.5 w-3.5 text-emerald-400 font-bold flex-shrink-0" />
                <span>{text}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4. Feature Comparison Matrix */}
        <div className="max-w-6xl mx-auto mb-20 overflow-x-auto">
          <h2 className="text-center font-display font-extrabold text-2xl text-white mb-10">
            Features Comparison Matrix
          </h2>
          <table className="w-full text-left border-collapse text-xs sm:text-sm text-slate-350 min-w-[600px] luxury-card rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-white/5 text-[10px] font-mono uppercase tracking-wider text-slate-450 border-b border-white/10">
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
                  <td className="p-4 text-center lg:text-left">{renderMatrixCell(item.starter)}</td>
                  <td className="p-4 text-center lg:text-left">{renderMatrixCell(item.business)}</td>
                  <td className="p-4 text-center lg:text-left">{renderMatrixCell(item.premium)}</td>
                  <td className="p-4 text-center lg:text-left">{renderMatrixCell(item.custom)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5. Website Maintenance & Support (Single Premium Timeline Section) */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-bold mb-3 block">
              Support Policy
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
              Website Maintenance & Support
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-sans leading-relaxed">
              Every package includes complimentary post-delivery maintenance to keep your website running smoothly.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-card p-6 sm:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-transparent pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Support Timeline */}
              <div className="lg:col-span-6 space-y-6">
                <h4 className="text-xs font-mono font-bold text-neon-blue uppercase tracking-widest mb-4">
                  Free Support Duration
                </h4>
                
                <div className="relative pl-6 border-l border-white/10 space-y-6">
                  {/* Timeline Node 1 */}
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-4 w-4 rounded-full bg-neon-blue border-2 border-bg-dark flex items-center justify-center shadow-[0_0_10px_rgba(0,210,255,0.8)]" />
                    <h5 className="text-white font-display font-bold text-sm">Starter Website</h5>
                    <p className="text-neon-blue font-mono text-[10px] uppercase tracking-wider mt-0.5">15 Days Support Included</p>
                  </div>

                  {/* Timeline Node 2 */}
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-4 w-4 rounded-full bg-neon-purple border-2 border-bg-dark flex items-center justify-center shadow-[0_0_10px_rgba(157,78,221,0.8)]" />
                    <h5 className="text-white font-display font-bold text-sm">Business Website</h5>
                    <p className="text-neon-purple font-mono text-[10px] uppercase tracking-wider mt-0.5">1 Month Support Included</p>
                  </div>

                  {/* Timeline Node 3 */}
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-4 w-4 rounded-full bg-neon-pink border-2 border-bg-dark flex items-center justify-center shadow-[0_0_10px_rgba(255,0,127,0.8)]" />
                    <h5 className="text-white font-display font-bold text-sm">Premium Website</h5>
                    <p className="text-neon-pink font-mono text-[10px] uppercase tracking-wider mt-0.5">3 Months Support Included</p>
                  </div>

                  {/* Timeline Node 4 */}
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-4 w-4 rounded-full bg-emerald-400 border-2 border-bg-dark flex items-center justify-center shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <h5 className="text-white font-display font-bold text-sm">Custom Solutions</h5>
                    <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-wider mt-0.5">6 Months Support Included</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Support Scope */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
                {/* Included */}
                <div>
                  <h4 className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-1.5">
                    <span>✓</span> Support Includes:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-350 font-sans">
                    <li className="flex items-center gap-2">✓ Bug Fixes</li>
                    <li className="flex items-center gap-2">✓ Content Updates</li>
                    <li className="flex items-center gap-2">✓ Minor Design Adjustments</li>
                  </ul>
                </div>

                {/* Not Included */}
                <div>
                  <h4 className="text-neon-pink font-mono text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-1.5">
                    <span>✗</span> Support Does NOT Include:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-450 font-sans">
                    <li className="flex items-center gap-2 text-slate-500">✗ New Pages</li>
                    <li className="flex items-center gap-2 text-slate-500">✗ New Features</li>
                    <li className="flex items-center gap-2 text-slate-500">✗ Major Redesign</li>
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* 6. Our Collaboration Process (Horizontal Timeline) */}
        <div className="max-w-6xl mx-auto mb-20 relative z-10">
          <h2 className="text-center font-display font-extrabold text-2xl md:text-3xl text-white mb-12">
            Our Collaboration Process
          </h2>
          
          <div className="relative">
            {/* Horizontal Connecting Line for Desktop */}
            <div className="absolute top-[28px] left-8 right-8 h-[1px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink -z-10 hidden lg:block opacity-40" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { step: '1', title: 'Discussion', emoji: '📞', desc: 'Requirements alignment' },
                { step: '2', title: 'Planning', emoji: '📝', desc: 'Design sitemap' },
                { step: '3', title: 'UI Design', emoji: '🎨', desc: 'Visual mockups' },
                { step: '4', title: 'Development', emoji: '💻', desc: 'Writing premium code' },
                { step: '5', title: 'Testing', emoji: '🧪', desc: 'Optimization & audit' },
                { step: '6', title: 'Launch', emoji: '🚀', desc: 'Hosting & domain live' }
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="luxury-card p-5 rounded-2xl relative text-center flex flex-col items-center hover:border-neon-blue/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Step Badge */}
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-[0_0_10px_rgba(0,210,255,0.4)] mb-3">
                    {step.step}
                  </div>
                  
                  <span className="text-2xl mb-2.5 block">{step.emoji}</span>
                  <h3 className="text-white font-display font-bold text-xs sm:text-sm mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-[10px] font-sans leading-normal">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 7. Request Custom Quote (Final CTA banner + Contact form below it) */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-card p-8 sm:p-10 rounded-2xl relative overflow-hidden bg-gradient-to-br from-neon-blue/8 via-neon-purple/5 to-neon-pink/10 border-neon-purple/20 shadow-[0_0_30px_rgba(157,78,221,0.1)]"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed font-sans">
              Get in touch to receive a personalized quote or consult about your advanced business website requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon-pink to-neon-purple text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded hover:shadow-[0_0_20px_rgba(255,0,127,0.35)] transition-all duration-300 cursor-pointer"
              >
                Request Custom Quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={agencyConfig.contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-emerald-500 hover:bg-emerald-500/10 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
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
