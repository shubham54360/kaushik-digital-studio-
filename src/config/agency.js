import { 
  Building, BookOpen, Dumbbell, Library, Rocket, DollarSign, Smartphone, MessageCircle, TrendingUp, MessageSquare
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
    tagline: 'Helping businesses build a strong online presence through modern, responsive and professional websites.',
    location: 'Delhi, India',
    availability: 'Available For Freelance Projects',
  },

  // Contact details
  contacts: {
    phone: '9540311172',
    email: 'digitalstudiokaushik@gmail.com',
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
      icon: DollarSign,
      title: 'Affordable Pricing',
      desc: 'Delivering agency-grade professional coding, high-quality visuals, and secure hosting at small-business friendly rates.',
      accent: 'text-neon-pink',
      hoverBorder: 'hover:border-neon-pink/30',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive Design',
      desc: 'Ensuring your website looks beautiful, loads quickly, and operates smoothly on smartphones, tablets, and desktops.',
      accent: 'text-neon-purple',
      hoverBorder: 'hover:border-neon-purple/30',
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
      icon: MessageSquare,
      title: 'Direct Communication',
      desc: 'No middleman or sales reps. Deal directly with Shubham Kaushik for absolute transparency, design updates, and support.',
      accent: 'text-neon-pink',
      hoverBorder: 'hover:border-neon-pink/30',
    },
  ],

  // Services offered (4 core services)
  services: [
    {
      icon: Building,
      title: 'Business Websites',
      desc: 'Professional websites for local businesses, shops, restaurants, cafes and service providers.',
      color: 'text-neon-blue',
    },
    {
      icon: BookOpen,
      title: 'Coaching Institute Websites',
      desc: 'Websites for coaching centers, tuition institutes and educational organizations.',
      color: 'text-neon-purple',
    },
    {
      icon: Dumbbell,
      title: 'Gym Websites',
      desc: 'Modern fitness websites with membership, trainer and contact information.',
      color: 'text-neon-pink',
    },
    {
      icon: Library,
      title: 'Library Websites',
      desc: 'Professional websites for libraries, study centers and educational facilities.',
      color: 'text-neon-blue',
    },
  ],

  // Pricing packages (3 packages)
  pricing: [
    {
      name: 'Starter Website',
      price: '₹1999',
      features: [
        'Single Page Website',
        'Mobile Responsive',
        'WhatsApp Integration',
        'Contact Form',
        'Basic SEO',
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
        'Google Maps',
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
      desc: 'Modern dairy business website designed to showcase products and improve customer engagement.',
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
      desc: 'Professional educational website created for library services and student engagement.',
      techs: ['React', 'Vite', 'Tailwind CSS'],
      webLink: 'https://achievers-portal.netlify.app/',
      image: achieversLibraryImg,
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'group-hover:border-cyan-500/40 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      badgeColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
      category: 'Library Website',
    },
    {
      title: 'Forest House Cafe',
      desc: 'Premium cafe website featuring menu presentation and modern branding.',
      techs: ['React', 'Tailwind CSS', 'Framer Motion'],
      webLink: 'https://forest-house-cafe.netlify.app',
      image: forestCafeImg,
      color: 'from-rose-500/20 to-pink-500/20',
      borderColor: 'group-hover:border-rose-500/40 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.25)]',
      badgeColor: 'text-rose-400 border-rose-400/20 bg-rose-400/5',
      category: 'Business Website',
    },
    {
      title: 'College Finder',
      desc: 'A platform designed to help students discover and explore colleges through a simple and user-friendly experience.',
      techs: ['React', 'Vite', 'Tailwind CSS'],
      webLink: 'https://college-discoveryplatform.netlify.app/',
      image: collegeFinderImg,
      color: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'group-hover:border-indigo-500/40 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]',
      badgeColor: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
      category: 'Education Platform',
    },
  ],
};
