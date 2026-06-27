import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, Calculator, MessageSquare, X } from 'lucide-react';
import { agencyConfig } from '../config/agency';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Calculator,
      label: 'Get Quote',
      to: '/quote',
      color: 'bg-neon-pink shadow-[0_0_15px_rgba(255,0,85,0.4)]',
      textColor: 'text-neon-pink'
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${agencyConfig.contacts.email}?subject=Agency%20Inquiry`,
      color: 'bg-neon-purple shadow-[0_0_15px_rgba(138,43,226,0.4)]',
      textColor: 'text-neon-purple'
    },
    {
      icon: Phone,
      label: 'Call',
      href: `tel:${agencyConfig.contacts.phone}`,
      color: 'bg-neon-blue shadow-[0_0_15px_rgba(0,210,255,0.4)]',
      textColor: 'text-neon-blue'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: `https://wa.me/919540311172?text=Hello%20Shubham,%20I%20would%20like%20to%20discuss%20a%20website%20project.`,
      target: '_blank',
      rel: 'noopener noreferrer',
      color: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]',
      textColor: 'text-emerald-400'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5">
      {/* Sub Actions Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {actions.map((act, i) => (
              <motion.div
                key={act.label}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="flex items-center gap-2.5 group"
              >
                {/* Floating Tooltip Label */}
                <span className="text-[9.5px] font-mono font-bold uppercase tracking-widest text-slate-300 bg-bg-darker/90 backdrop-blur border border-white/5 px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none">
                  {act.label}
                </span>

                {/* Sub FAB Button */}
                {act.to ? (
                  <Link
                    to={act.to}
                    onClick={() => setIsOpen(false)}
                    className={`h-11 w-11 rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:scale-108 cursor-pointer ${act.color}`}
                  >
                    <act.icon className="h-4.5 w-4.5" />
                  </Link>
                ) : (
                  <a
                    href={act.href}
                    target={act.target}
                    rel={act.rel}
                    onClick={() => setIsOpen(false)}
                    className={`h-11 w-11 rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:scale-108 cursor-pointer ${act.color}`}
                  >
                    <act.icon className="h-4.5 w-4.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink hover:shadow-[0_0_25px_rgba(0,210,255,0.45)] flex items-center justify-center text-white transition-all duration-300 hover:scale-108 cursor-pointer relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse radar glow when closed */}
        {!isOpen && (
          <span className="absolute -inset-0.5 rounded-full bg-neon-blue/20 animate-ping opacity-35 pointer-events-none" />
        )}
      </button>
    </div>
  );
}
