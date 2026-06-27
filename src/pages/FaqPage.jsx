import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search, Info } from 'lucide-react';

const faqData = [
  {
    q: "What is included in the website package?",
    a: "Each package includes the features mentioned on the pricing page. Depending on your selected plan, your website may include a responsive design, contact form, WhatsApp integration, Google Maps, basic SEO setup and other listed features. Custom features are quoted separately."
  },
  {
    q: "Who purchases the domain?",
    a: "The client purchases the domain in their own name. If needed, Kaushik Digital Studio will assist with domain registration and setup at no additional service charge. Domain registration fees are paid by the client."
  },
  {
    q: "Who pays for hosting?",
    a: "Hosting charges are paid by the client. We help you choose the best hosting provider and complete the setup. Hosting plans vary depending on your business requirements."
  },
  {
    q: "How long does it take to build a website?",
    a: "Typical delivery time:\n\n• Starter Website: 2–4 Business Days\n• Business Website: 4–7 Business Days\n• Premium Website: 7–10 Business Days\n• Custom Business Solutions: Delivery depends on project scope and features.\n\nDelivery starts after all required content and advance payment are received."
  },
  {
    q: "What do you need from me to start the project?",
    a: "To begin development, we require:\n\n• Business Name\n• Logo (if available)\n• Contact Details\n• WhatsApp Number\n• Business Information\n• Images (if available)\n• Services or Products Details\n\nIf you don't have these ready, we can guide you through the process."
  },
  {
    q: "How does the payment process work?",
    a: "Payment Terms:\n\n• 50% Advance Before Development\n• Remaining 50% Before Final Website Delivery\n\nFor larger custom projects, milestone-based payments may be used."
  },
  {
    q: "Can I request changes during development?",
    a: "Yes. Reasonable revisions related to the approved design are included during development. Major design changes, additional pages or new features requested after approval may require additional charges."
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Yes. Every website is fully responsive and optimized for mobile, tablet and desktop devices."
  },
  {
    q: "Can I upgrade my website later?",
    a: "Absolutely. Additional pages, payment gateways, booking systems, admin panels and other advanced features can be added later through a separate quotation."
  },
  {
    q: "Do you provide support after delivery?",
    a: "Yes. Free support is included with every package:\n\n• Starter Website: 15 Days\n• Business Website: 1 Month\n• Premium Website: 3 Months\n• Custom Business Solutions: 6 Months\n\nSupport includes bug fixes, text updates, image replacements and minor adjustments. Major feature additions or redesigns are quoted separately."
  },
  {
    q: "Can you add online payment options?",
    a: "Yes. We can integrate Razorpay, PhonePe, UPI, Credit/Debit Card payments and other payment gateways as part of a Custom Business Solution."
  },
  {
    q: "Will my website appear on Google?",
    a: "Yes. Every website is built with a search-engine-friendly structure and includes basic SEO setup. Google indexing may take some time and rankings depend on multiple factors beyond website development."
  },
  {
    q: "Who owns the website after completion?",
    a: "Once the final payment is completed, the website belongs to the client. The client owns their domain, hosting account and website files."
  },
  {
    q: "Do you provide source code?",
    a: "Yes. If the project agreement includes source code delivery, it will be provided after the final payment is completed."
  },
  {
    q: "Can you maintain my website after the free support period?",
    a: "Yes. Monthly maintenance plans are available for businesses that require regular updates, monitoring and technical assistance."
  },
  {
    q: "What is NOT included in free support?",
    a: "Free support does NOT include:\n\n• New Pages\n• Complete Website Redesign\n• Payment Gateway Added Later\n• Admin Panel Development\n• Major UI Changes\n• New Features\n• E-commerce Conversion\n• Large Content Uploads\n\nThese services require a separate quotation."
  }
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(null);

  const filteredFaqs = faqData.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-[15%] right-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neon-purple font-bold mb-3 block">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mt-3 font-sans leading-relaxed">
            Find immediate answers regarding pricing, domain hosting setups, timelines, support limits, and copyright ownership.
          </p>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-neon-blue to-neon-purple mt-5" />
        </div>

        {/* FAQ Search Bar */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
            <Search className="h-4.5 w-4.5" />
          </div>
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors text-xs font-sans placeholder-slate-500"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              // Find the original index from faqData
              const originalIndex = faqData.findIndex(f => f.q === faq.q);
              const isOpen = activeIdx === originalIndex;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="luxury-card rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveIdx(isOpen ? null : originalIndex)}
                    className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-xs sm:text-sm cursor-pointer hover:bg-white/2 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-4.5 w-4.5 text-neon-blue flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-350 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/5 bg-black/20"
                      >
                        <p className="p-5 text-slate-300 text-xs leading-relaxed font-sans whitespace-pre-line">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="luxury-card p-8 rounded-xl text-center text-slate-500 flex flex-col items-center gap-2">
              <Info className="h-8 w-8 text-slate-600" />
              <p className="text-xs font-sans">No questions found matching your search. Please reach out to us directly!</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
