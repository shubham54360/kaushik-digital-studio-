import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Send, CheckCircle, Loader2, Phone, Clock, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { agencyConfig } from '../config/agency';

export default function ContactPage() {
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

  const contactOptions = [
    { title: "Phone Number", val: agencyConfig.contacts.phone, href: `tel:${agencyConfig.contacts.phone}`, text: "Call Now", icon: Phone, color: "text-neon-blue", border: "border-neon-blue/20 bg-neon-blue/5 hover:bg-neon-blue" },
    { title: "Email Address", val: agencyConfig.contacts.email, href: `mailto:${agencyConfig.contacts.email}?subject=Agency%20Inquiry`, text: "Send Email", icon: Mail, color: "text-neon-purple", border: "border-neon-purple/20 bg-neon-purple/5 hover:bg-neon-purple" },
    { title: "WhatsApp Chat", val: agencyConfig.contacts.whatsappNum, href: agencyConfig.contacts.whatsappLink, text: "WhatsApp Me", icon: MessageCircle, color: "text-emerald-400", border: "border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-600" }
  ];

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Start Your Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Agency Project</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-4 leading-relaxed font-sans">
            Ready to scale your business online? Fill out the form or reach out directly.
          </p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue to-neon-purple mt-6" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contactOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.title}
                className="glass-panel p-6 rounded-xl border border-white/5 bg-white/5 flex flex-col items-center text-center justify-between gap-4"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className={`h-4.5 w-4.5 ${opt.color}`} />
                  </div>
                  <div className="max-w-[200px] overflow-hidden">
                    <span className="text-[9px] font-mono uppercase text-slate-500 block mb-0.5">{opt.title}</span>
                    <span className="text-white text-xs font-semibold truncate block">{opt.val}</span>
                  </div>
                </div>
                <a
                  href={opt.href}
                  target={opt.text.includes("WhatsApp") ? "_blank" : undefined}
                  rel={opt.text.includes("WhatsApp") ? "noopener noreferrer" : undefined}
                  className={`w-full py-2 ${opt.border} text-white text-[10px] font-bold uppercase rounded border transition-all text-center font-mono`}
                >
                  {opt.text}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Form and Hours/Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/5 shadow-2xl relative h-full flex flex-col justify-center">
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

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
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
          </div>

          {/* Right Side: Hours & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Hours panel */}
            <div className="glass-panel p-6 rounded-xl border border-white/5 flex gap-4 items-start">
              <Clock className="h-5.5 w-5.5 text-neon-blue flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-display font-bold text-sm sm:text-base mb-2">Business Hours</h3>
                <div className="space-y-1.5 text-xs text-slate-400 font-mono">
                  <div className="flex justify-between w-60 gap-4">
                    <span>Monday - Saturday:</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between w-60 gap-4">
                    <span>Sunday:</span>
                    <span className="text-neon-pink">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map panel */}
            <div className="glass-panel rounded-xl border border-white/5 overflow-hidden flex-1 min-h-[220px] relative">
              <div className="absolute top-4 left-4 z-20 bg-bg-darker/90 backdrop-blur border border-white/10 rounded px-3 py-1 flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                <MapPin className="h-3.5 w-3.5 text-neon-pink" />
                Delhi, India
              </div>
              <iframe
                title="Google Map location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.97130283085!2d77.06889754707172!3d28.527280327318042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0xd39f60fe496458b!2sDelhi%20NCR%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-none filter invert grayscale opacity-60 hover:opacity-85 transition-opacity"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
