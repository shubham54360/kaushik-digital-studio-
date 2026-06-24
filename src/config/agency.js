import { 
  Building, UserCheck, Coffee, BookOpen, Dumbbell, Rocket, RefreshCw, Server, MapPin,
  Smartphone, MessageCircle, DollarSign, Sparkles, MessageSquare, Search, Palette, TrendingUp,
  Scissors, Home, Droplet, Stethoscope, Store, Mail, Phone, Library
} from 'lucide-react';

import kaushikDairyImg from '../assets/kaushik_dairy.png';
import achieversLibraryImg from '../assets/achievers_library.png';
import forestCafeImg from '../assets/forest_cafe.png';
import collegeFinderImg from '../assets/college_finder.png';
import weddingRsvpImg from '../assets/wedding_rsvp.png';

export const agencyConfig = {
  // Brand details
  brand: {
    name: 'KAUSHIK DIGITAL STUDIO',
    founder: 'Shubham Kaushik',
    tagline: 'Professional Websites For Local Businesses',
    location: 'Delhi, India',
    availability: 'Available For Freelance Projects',
  },

  // Contact details
  contacts: {
    phone: '9540311172',
    email: 'sk1513217@gmail.com',
    whatsappNum: '9540311172',
    whatsappLink: 'https://wa.me/919540311172?text=Hello%20Shubham,%20I%20would%20like%20to%20discuss%20a%20website%20project.',
    emailSubject: 'Website%20Inquiry',
  },

  // Why Choose Us trust factors (6 points)
  trust: [
    {
      icon: Rocket,
      title: 'Fast Delivery',
      desc: 'Getting your business online quickly with efficient workflows, fast turnaround times, and immediate launching.',
      accent: 'text-neon-blue',
      hoverBorder: 'hover:border-neon-blue/30',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      desc: 'Ensuring your website looks beautiful, loads quickly, and operates smoothly on smartphones, tablets, and desktops.',
      accent: 'text-neon-purple',
      hoverBorder: 'hover:border-neon-purple/30',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      desc: 'Delivering agency-grade professional coding, high-quality visuals, and secure hosting at small-business friendly rates.',
      accent: 'text-neon-pink',
      hoverBorder: 'hover:border-neon-pink/30',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Integration',
      desc: 'Connecting you instantly with your website visitors by channeling inquiries directly to your personal WhatsApp chat.',
      accent: 'text-emerald-400',
      hoverBorder: 'hover:border-emerald-500/30',
    },
    {
      icon: Search,
      title: 'Google Friendly',
      desc: 'Optimized with modern SEO standards, metadata, and fast loading metrics so local customers can find you on Google Search.',
      accent: 'text-neon-purple',
      hoverBorder: 'hover:border-neon-purple/30',
    },
    {
      icon: Palette,
      title: 'Professional Design',
      desc: 'Applying premium aesthetics, custom glassmorphism panels, high-end layouts, and clean visual typography.',
      accent: 'text-neon-blue',
      hoverBorder: 'hover:border-neon-blue/30',
    },
  ],

  // Services offered (7 core services)
  services: [
    {
      icon: Building,
      title: 'Business Websites',
      desc: 'High-converting custom sites designed to showcase services, build brand trust, and generate direct inquiries.',
      color: 'text-neon-blue',
    },
    {
      icon: BookOpen,
      title: 'Coaching Websites',
      desc: 'Structured portals showing course directories, batch timings, staff profiles, and student registration forms.',
      color: 'text-neon-purple',
    },
    {
      icon: Library,
      title: 'Library Websites',
      desc: 'Professional platforms designed to let students explore study facilities and book sitting spaces or memberships.',
      color: 'text-neon-pink',
    },
    {
      icon: Coffee,
      title: 'Cafe Websites',
      desc: 'Immersive layouts showcasing cafe menus, booking tables, customer reviews, and local search integrations.',
      color: 'text-neon-blue',
    },
    {
      icon: Rocket,
      title: 'Landing Pages',
      desc: 'Highly focused single-page layouts optimized for product launches, ad campaigns, and maximizing conversion rates.',
      color: 'text-neon-purple',
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      desc: 'Upgrading older sites with premium visual aesthetics, clean mobile layouts, and modern load speeds.',
      color: 'text-neon-pink',
    },
    {
      icon: MapPin,
      title: 'Google Business Profile Assistance',
      desc: 'Optimizing local business listings to rank higher on Google Maps, drive local search clicks, and connect to your site.',
      color: 'text-neon-blue',
    },
  ],

  // Pricing packages
  pricing: [
    {
      name: 'Starter Website',
      price: '₹1999',
      features: [
        'Single Page Website',
        'Mobile Responsive Design',
        'WhatsApp Integration',
        'Contact Form',
        'Basic SEO Setup',
      ],
      accentColor: 'text-neon-blue',
      buttonBg: 'bg-white/5 border border-white/10 hover:border-neon-blue hover:bg-neon-blue/10',
      glow: 'hover:border-neon-blue/30 border-white/5',
    },
    {
      name: 'Business Website',
      price: '₹3499',
      features: [
        'Up To 5 Pages',
        'WhatsApp Integration',
        'Contact Form',
        'Google Maps Integration',
        'Basic SEO',
        'Fast Loading Design',
      ],
      popular: true,
      accentColor: 'text-neon-purple',
      buttonBg: 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]',
      glow: 'border-neon-purple/40 shadow-neon-purple/5',
    },
    {
      name: 'Premium Website',
      price: '₹5999',
      features: [
        'Premium Custom Design',
        'Domain Setup Assistance',
        'Google Business Profile Setup',
        'SEO Ready Structure',
        'Priority Support',
        'Advanced Business Layout',
      ],
      accentColor: 'text-neon-pink',
      buttonBg: 'bg-white/5 border border-white/10 hover:border-neon-pink hover:bg-neon-pink/10',
      glow: 'hover:border-neon-pink/30 border-white/5',
    },
  ],

  // Featured projects list (4 real projects with correct categories)
  projects: [
    {
      title: 'Kaushik Dairy Farm',
      desc: 'Modern dairy business website designed to showcase products, build customer trust and provide seamless contact access.',
      techs: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      webLink: 'https://kaushik-dairy.netlify.app',
      image: kaushikDairyImg,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
      badgeColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
      category: 'Business Website',
    },
    {
      title: 'Achievers Library',
      desc: 'Professional library website designed to help students explore services, memberships and learning resources.',
      techs: ['React', 'Vite', 'Tailwind CSS'],
      webLink: 'https://achievers-portal.netlify.app/',
      image: achieversLibraryImg,
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'group-hover:border-cyan-500/40 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      badgeColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
      category: 'Education Website',
    },
    {
      title: 'Forest House Cafe',
      desc: 'Premium cafe website featuring menu presentation, customer engagement and modern business branding.',
      techs: ['React', 'Tailwind CSS', 'Framer Motion'],
      webLink: 'https://forest-house-cafe.netlify.app',
      image: forestCafeImg,
      color: 'from-rose-500/20 to-pink-500/20',
      borderColor: 'group-hover:border-rose-500/40 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.25)]',
      badgeColor: 'text-rose-400 border-rose-400/20 bg-rose-400/5',
      category: 'Cafe & Restaurant Website',
    },
    {
      title: 'Wedding Invitation Website',
      desc: 'Elegant digital wedding invitation experience with RSVP functionality and modern interactive design.',
      techs: ['HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
      webLink: 'https://wedding-invitation-rsvp.netlify.app',
      image: weddingRsvpImg,
      color: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'group-hover:border-indigo-500/40 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]',
      badgeColor: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
      category: 'Event Website',
    },
  ],

  // Targeted industries
  industries: [
    { name: 'Coaching Institutes', icon: BookOpen },
    { name: 'Libraries', icon: Library },
    { name: 'Restaurants & Cafes', icon: Coffee },
    { name: 'Dairy Businesses', icon: Droplet },
    { name: 'Salons', icon: Scissors },
    { name: 'Gyms', icon: Dumbbell },
    { name: 'Medical Clinics', icon: Stethoscope },
    { name: 'Local Shops & Stores', icon: Store },
  ],
};
