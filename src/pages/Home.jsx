import { motion } from 'framer-motion';
import { ArrowRight, Send, MessageCircle, Check, Shield, Zap, Sparkles, Smartphone, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import shubhamPortrait from '../assets/shubham_portrait.png';
import { agencyConfig } from '../config/agency';
import SpecialOffer from '../components/SpecialOffer';
import { trackButtonClick } from '../utils/analytics';

export default function Home() {
  const stats = [
    { value: '4+', label: 'Live Websites', icon: Sparkles, color: 'text-neon-blue' },
    { value: '100%', label: 'Responsive', icon: Zap, color: 'text-neon-purple' },
    { value: 'Fast', label: 'Delivery', icon: Send, color: 'text-neon-pink' },
    { value: '24/7', label: 'Support', icon: Shield, color: 'text-emerald-400' }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-12 overflow-hidden">
      {/* Soft backlight glows */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] bg-neon-blue/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-xl sm:text-2xl font-display font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink uppercase block leading-none">
              {agencyConfig.brand.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-bold mt-2 block">
              Founded By {agencyConfig.brand.founder}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4 leading-tight"
          >
            Professional Websites <br />
            For <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Local Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mb-6 leading-relaxed font-sans"
          >
            Helping businesses build premium websites that attract customers, build trust, and grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Link
              to="/contact"
              onClick={() => trackButtonClick('start_project_hero', 'Home')}
              className="px-5 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold uppercase tracking-wider rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center gap-2 group"
            >
              Start Project
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              onClick={() => trackButtonClick('view_projects_hero', 'Home')}
              className="px-5 py-3 bg-white/5 border border-white/10 hover:border-neon-purple/50 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <Send className="h-3.5 w-3.5" />
            </Link>

            <a
              href={agencyConfig.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-600/20 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 flex items-center gap-2"
            >
              WhatsApp Me
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-90 lg:h-90"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-[20px] opacity-20 pointer-events-none" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue/30 via-neon-purple/30 to-neon-pink/30 rounded-2xl opacity-40 pointer-events-none" />

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
      </div>

      {/* Trust Badges Bar */}
      <div className="max-w-6xl mx-auto px-6 mb-20 border-t border-b border-white/5 py-6 bg-white/1">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-6 justify-items-center items-center text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest text-center">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4.5 w-4.5 text-neon-blue flex-shrink-0" />
            <span>Mobile Responsive</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4.5 w-4.5 text-neon-blue flex-shrink-0" />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4.5 w-4.5 text-neon-purple flex-shrink-0" />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4.5 w-4.5 text-neon-pink flex-shrink-0" />
            <span>Secure Dev</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center gap-2">
            <CheckCircle className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
            <span>Support Included</span>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-bold mb-3 block">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Premium <span className="text-neon-blue">Services</span>
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {agencyConfig.services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="luxury-card p-6 rounded-2xl flex flex-col justify-between hover:shadow-[0_0_20px_rgba(0,210,255,0.05)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                    <Icon className={`h-5 w-5 ${service.color}`} />
                  </div>
                  <h3 className="text-white font-display font-bold text-sm sm:text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            to="/services"
            className="text-xs font-mono font-bold uppercase tracking-widest text-neon-purple hover:text-neon-blue transition-colors flex items-center gap-1.5"
          >
            View All Services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-bold mb-3 block">
            Recent Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Featured <span className="text-neon-purple">Projects</span>
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {agencyConfig.projects.slice(0, 2).map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="luxury-card rounded-2xl overflow-hidden group hover:shadow-[0_0_20px_rgba(157,78,221,0.05)] transition-all duration-300"
            >
              <div className="h-44 w-full overflow-hidden bg-black/40 relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-display font-bold text-base mb-1.5">{proj.title}</h3>
                <p className="text-slate-400 text-xs mb-4 line-clamp-2 font-sans">{proj.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-neon-purple">{proj.category}</span>
                  <a
                    href={proj.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-wider text-neon-blue flex items-center gap-1"
                  >
                    Visit Site <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/projects"
            className="text-xs font-mono font-bold uppercase tracking-widest text-neon-purple hover:text-neon-blue transition-colors flex items-center gap-1.5"
          >
            View All Projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 block">
            Flexible & Transparent
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Pricing <span className="text-neon-purple">Packages</span>
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {agencyConfig.pricing.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`luxury-card p-6 rounded-2xl flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
                i === 1
                  ? 'border-neon-purple/40 shadow-[0_0_30px_rgba(157,78,221,0.15)] hover:shadow-[0_0_40px_rgba(157,78,221,0.25)]'
                  : 'hover:shadow-[0_0_25px_rgba(0,210,255,0.08)] border-white/5'
              }`}
            >
              {i === 1 && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-white px-2.5 py-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_15px_rgba(157,78,221,0.4)]">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-white font-display font-bold text-sm sm:text-base mb-2">{pkg.name}</h3>
                <span className="text-2xl font-display font-black text-white block mb-4">{pkg.price}</span>
                <ul className="space-y-2 mb-6">
                  {pkg.features.slice(0, 4).map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-slate-400 font-sans">
                      <Check className={`h-3 w-3 ${pkg.accentColor}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                state={{ selectedContext: `${pkg.name} (${pkg.price})`, message: `Hello Shubham, I would like to order the ${pkg.name} (${pkg.price}) for my business.` }}
                className="w-full py-2.5 bg-white/5 border border-white/10 hover:border-neon-blue text-center text-[10px] font-bold uppercase rounded block transition-all cursor-pointer"
              >
                Select Package
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/packages"
            className="text-xs font-mono font-bold uppercase tracking-widest text-neon-blue hover:text-neon-pink transition-colors flex items-center gap-1.5"
          >
            View Full Pricing <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* ₹99 Website Preview Offer */}
      <div className="mb-24">
        <SpecialOffer />
      </div>

      {/* Book Free Strategy Session (Final CTA) */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="luxury-card p-8 sm:p-12 rounded-2xl text-center relative overflow-hidden bg-gradient-to-br from-neon-blue/8 via-neon-purple/5 to-neon-pink/10 border-neon-purple/20 shadow-[0_0_30px_rgba(157,78,221,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent pointer-events-none" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neon-purple px-3 py-1 border border-neon-purple/20 bg-neon-purple/5 rounded-full mb-4 inline-block">
            15 Minute Free Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-3">
            Book a Free Strategy Session
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed font-sans">
            Let's discuss your business objectives and design a website structure tailored to generate sales. No purchase obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              state={{ selectedContext: '15 Min Free Consultation', message: 'Hello Shubham, I would like to book a 15-minute free Strategy Session to discuss a website for my business.' }}
              onClick={() => trackButtonClick('book_free_session_cta', 'Home')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon-purple to-neon-pink text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded hover:shadow-[0_0_25px_rgba(138,43,226,0.35)] transition-all duration-300 cursor-pointer"
            >
              Book Free Session
              <ArrowRight className="h-4 w-4" />
            </Link>
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
    </div>
  );
}
