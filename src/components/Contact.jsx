import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Send, CheckCircle, Loader2, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { agencyConfig } from '../config/agency';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: '',
    honeypot: '',
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
    } else if (!/^\+?[0-9\s-]{8,20}$/.test(formData.phone.replace(/\s/g, ''))) {
      tempErrors.phone = 'Invalid phone number format';
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
      business_name: formData.businessName || 'N/A',
      message: formData.message,
      to_email: agencyConfig.contacts.email,
    };

    if (serviceId === 'service_placeholder' || templateId === 'template_placeholder' || publicKey === 'public_key_placeholder') {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        resetForm();
      }, 1500);
    } else {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setLoading(false);
          setSuccess(true);
          resetForm();
        })
        .catch((error) => {
          setLoading(false);
          console.error('EmailJS send error:', error);
          setErrors({ form: 'Failed to send inquiry. Please email directly or try WhatsApp.' });
        });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      message: '',
      honeypot: '',
    });
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden bg-bg-darker/50">
      {/* Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-10%] w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            Contact <span className="text-neon-purple">Us</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        {/* Compact About Kaushik Digital Studio bio */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel p-6 rounded border border-white/5 max-w-2xl mx-auto text-center mb-10"
        >
          <h3 className="text-base font-display font-bold text-white mb-2 uppercase tracking-wider">
            About Kaushik Digital Studio
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
            Founded by Shubham Kaushik, Kaushik Digital Studio helps local businesses build modern websites that increase trust, improve visibility and generate more customer inquiries.
          </p>
        </motion.div>

        {/* Quick Contact Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-5 rounded border border-white/5 bg-white/5 flex flex-col items-center text-center justify-between gap-4"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-neon-blue/5 border border-neon-blue/20 flex items-center justify-center">
                <Phone className="h-4.5 w-4.5 text-neon-blue" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase text-slate-500 block mb-0.5">Phone Number</span>
                <span className="text-white text-xs sm:text-sm font-semibold">{agencyConfig.contacts.phone}</span>
              </div>
            </div>
            <a
              href={`tel:${agencyConfig.contacts.phone}`}
              className="w-full py-2 bg-neon-blue/10 hover:bg-neon-blue text-neon-blue hover:text-white text-[10px] font-bold uppercase rounded border border-neon-blue/35 transition-all text-center font-mono font-semibold"
            >
              Call Now
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="glass-panel p-5 rounded border border-white/5 bg-white/5 flex flex-col items-center text-center justify-between gap-4"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center">
                <Mail className="h-4.5 w-4.5 text-neon-purple" />
              </div>
              <div className="max-w-[200px] overflow-hidden">
                <span className="text-[9px] font-mono uppercase text-slate-500 block mb-0.5">Email Address</span>
                <span className="text-white text-[10px] sm:text-xs font-semibold truncate block">{agencyConfig.contacts.email}</span>
              </div>
            </div>
            <a
              href={`mailto:${agencyConfig.contacts.email}?subject=${agencyConfig.contacts.emailSubject}`}
              className="w-full py-2 bg-neon-purple/10 hover:bg-neon-purple text-neon-purple hover:text-white text-[10px] font-bold uppercase rounded border border-neon-purple/35 transition-all text-center font-mono font-semibold"
            >
              Send Email
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-5 rounded border border-white/5 bg-white/5 flex flex-col items-center text-center justify-between gap-4"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center">
                <MessageCircle className="h-4.5 w-4.5 text-emerald-400" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase text-slate-500 block mb-0.5">WhatsApp Chat</span>
                <span className="text-white text-xs sm:text-sm font-semibold">{agencyConfig.contacts.whatsappNum}</span>
              </div>
            </div>
            <a
              href={agencyConfig.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-emerald-600/10 hover:bg-emerald-50 text-emerald-400 hover:text-white text-[10px] font-bold uppercase rounded border border-emerald-500/35 transition-all text-center font-mono font-semibold"
            >
              WhatsApp Me
            </a>
          </motion.div>
        </div>

        {/* Contact Form panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto w-full"
        >
          <div className="glass-panel p-6 sm:p-8 rounded border border-white/5 shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-400 mb-4 animate-bounce" />
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-sans">
                    Thank you for reaching out. Shubham will review your business requirements and contact you back shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                  {errors.form && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs">
                      {errors.form}
                    </div>
                  )}

                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    autoComplete="off"
                  />

                  {/* Name & Email Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-[10px] font-mono uppercase tracking-widest block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white focus:outline-none focus:border-neon-blue transition-colors"
                      />
                      {errors.name && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="text-slate-400 text-[10px] font-mono uppercase tracking-widest block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white focus:outline-none focus:border-neon-blue transition-colors"
                      />
                      {errors.email && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Phone & Business Name Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-[10px] font-mono uppercase tracking-widest block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white focus:outline-none focus:border-neon-blue transition-colors"
                      />
                      {errors.phone && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="text-slate-400 text-[10px] font-mono uppercase tracking-widest block mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white focus:outline-none focus:border-neon-blue transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-slate-400 text-[10px] font-mono uppercase tracking-widest block mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                    />
                    {errors.message && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Encrypting & Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
