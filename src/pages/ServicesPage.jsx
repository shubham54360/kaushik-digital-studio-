import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, ShoppingCart, Calendar, Mail, Shield, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const serviceList = [
    { title: "Business Websites", price: "₹1999+", desc: "Professional web presence for local shops, showrooms, consultants, and freelance service providers.", icon: Shield, accent: "text-neon-blue" },
    { title: "Coaching Institute Websites", price: "₹2499+", desc: "Structured student platforms presenting course catalogs, batch details, and inquiry registration forms.", icon: Star, accent: "text-neon-purple" },
    { title: "Library Websites", price: "₹2499+", desc: "Interactive student portals allowing study centers and libraries to showcase study halls, book seating slots, and accept bookings.", icon: Zap, accent: "text-neon-pink" },
    { title: "Gym Websites", price: "₹2999+", desc: "Modern fitness websites presenting plans, trainer qualifications, gallery showcases, and physical schedules.", icon: Smartphone, accent: "text-neon-blue" },
    { title: "Restaurant & Cafe Websites", price: "₹2999+", desc: "Immersive food-service menus, table bookings listings, review integrations, and Google Maps local search setup.", icon: ShoppingCart, accent: "text-neon-purple" },
    { title: "Advanced Business Websites", price: "₹6999+", desc: "Complex dynamic websites containing dashboards, user accounts, checkout portals, and automation.", icon: Calendar, accent: "text-neon-pink" }
  ];

  const features = [
    "Payment Gateway Integration", "Auto Email Confirmation", "Booking System",
    "Appointment System", "Admin Dashboard", "User Login",
    "Customer Portal", "Google Maps Integration", "Google Business Profile Setup",
    "WhatsApp Chat Integration", "Order Management", "Inventory Management",
    "API Integration", "Business Process Automation", "SEO Optimization",
    "Analytics Integration", "Blog System", "Image Gallery & Portfolios",
    "Customer Reviews Section", "Custom Multi-field Forms", "Newsletter Integration",
    "SSL Certificate Setup", "Hosting Server Setup", "Domain Linkage Setup"
  ];

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[10%] right-[-15%] w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-bold mb-3 block">
            Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Premium Services For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Your Local Business</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-4 leading-relaxed font-sans">
            Explore pricing and capabilities built to give your business a modern edge.
          </p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue to-neon-purple mt-6" />
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {serviceList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="luxury-card p-6 sm:p-8 rounded-xl relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Accent glow corner */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-10 w-10 rounded border border-white/10 bg-white/5 flex items-center justify-center">
                      <Icon className={`h-5.5 w-5.5 ${service.accent}`} />
                    </div>
                    <span className="text-sm font-mono font-bold text-white px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      Starting {service.price}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-display font-bold text-lg mb-2 group-hover:text-neon-blue transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <Link
                  to="/contact"
                  state={{ selectedContext: `Website Preview - ${service.title}`, message: `Hello Shubham, I would like to request a preview draft for my business using the ${service.title} plan.` }}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-neon-purple hover:text-neon-blue transition-colors flex items-center gap-1.5 self-start mt-4"
                >
                  Request Preview <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Checklist of Interactive features */}
        <div className="max-w-4xl mx-auto luxury-card p-8 sm:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-pink/5" />
          
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white text-center mb-2">
            Integrated Features Matrix
          </h2>
          <p className="text-slate-400 text-xs text-center mb-10 max-w-lg mx-auto">
            These essential technologies can be configured and integrated based on your selected website package.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
            {features.map((feat) => (
              <div key={feat} className="flex items-center gap-3">
                <div className="h-4.5 w-4.5 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue flex-shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-[11px] sm:text-xs text-slate-300 font-sans">{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center border-t border-white/5 pt-8">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              Check Website Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
