import { 
  Building, UserCheck, Coffee, BookOpen, Dumbbell, Rocket, RefreshCw, Server, MapPin,
  Smartphone, MessageCircle, DollarSign, Sparkles, MessageSquare, Search, Palette, TrendingUp,
  Scissors, Home, Droplet, Stethoscope, Store, Mail, Phone, Library
} from 'lucide-react';

import kaushikDairyImg from '../assets/kaushik_dairy.png';
import achieversLibraryImg from '../assets/achievers_library.png';
import forestCafeImg from '../assets/forest_cafe.png';
import collegeFinderImg from '../assets/college_finder.png';

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

  // Why Choose Us trust factors (8 points)
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
      title: 'Mobile Responsive Design',
      desc: 'Ensuring your website looks beautiful, loads quickly, and operates smoothly on iPhones, Androids, tablets, and desktops.',
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
      icon: TrendingUp,
      title: 'Business Focused Design',
      desc: 'Creating interfaces tailored specifically to generate inquiries, catalog your offerings, and turn traffic into paying clients.',
      accent: 'text-neon-blue',
      hoverBorder: 'hover:border-neon-blue/30',
    },
    {
      icon: Search,
      title: 'Google Friendly Structure',
      desc: 'Optimized with modern SEO standards, metadata, and fast loading metrics so local customers can find you on Google Search.',
      accent: 'text-neon-purple',
      hoverBorder: 'hover:border-neon-purple/30',
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      desc: 'No middleman or sales reps. Deal directly with Shubham Kaushik for absolute transparency, design updates, and support.',
      accent: 'text-neon-pink',
      hoverBorder: 'hover:border-neon-pink/30',
    },
    {
      icon: Palette,
      title: 'Modern Professional UI',
      desc: 'Applying premium 2026 aesthetics, custom glassmorphism panels, high-end layouts, and clean visual typography.',
      accent: 'text-neon-blue',
      hoverBorder: 'hover:border-neon-blue/30',
    },
  ],

  // Services offered (9 cards)
  services: [
    {
      icon: Building,
      title: 'Business Websites',
      desc: 'High-converting custom sites designed to showcase your services, build brand trust, and generate direct customer inquiries.',
      color: 'text-neon-blue',
    },
    {
      icon: BookOpen,
      title: 'Coaching Institute Websites',
      desc: 'Structured portals showing courses directories, batch timings, staff profiles, and student registration forms.',
      color: 'text-neon-purple',
    },
    {
      icon: Library,
      title: 'Library Websites',
      desc: 'Professional platforms designed to let students explore sitting spaces, check study facilities, and book memberships.',
      color: 'text-neon-pink',
    },
    {
      icon: Coffee,
      title: 'Restaurant & Cafe Websites',
      desc: 'Immersive cafe sites featuring menu presentation, table bookings, customer engagement, and local SEO integrations.',
      color: 'text-neon-blue',
    },
    {
      icon: UserCheck,
      title: 'Portfolio Websites',
      desc: 'High-fidelity digital portfolios designed to display skills, build credibility, and generate booking inquiries.',
      color: 'text-neon-purple',
    },
    {
      icon: Rocket,
      title: 'Landing Pages',
      desc: 'Single-page layouts optimized for product launches, ad campaigns, lead captures, and high visitor conversions.',
      color: 'text-neon-pink',
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      desc: 'Upgrading older websites with modern cinematic visual styling, mobile responsiveness, and faster load times.',
      color: 'text-neon-blue',
    },
    {
      icon: Server,
      title: 'Website Deployment',
      desc: 'Seamless domain hosting configurations, server setups (Netlify, Vercel), and SSL security integrations.',
      color: 'text-neon-purple',
    },
    {
      icon: MapPin,
      title: 'Google Business Profile Setup Assistance',
      desc: 'Optimizing local business profiles to rank higher in local map packs, link to your website, and gather reviews.',
      color: 'text-neon-pink',
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
      title: 'College Finder',
      desc: 'Interactive college finder and discovery platform helping students search, filter, and compare universities based on courses, fees, and location.',
      techs: ['React', 'Vite', 'Tailwind CSS'],
      webLink: 'https://college-discoveryplatform.netlify.app/',
      image: collegeFinderImg,
      color: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'group-hover:border-indigo-500/40 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]',
      badgeColor: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
      category: 'Education Website',
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
