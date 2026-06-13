"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";

export default function TheLinkedInFixPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSimulate = (action: string) => {
    setModalContent(action);
    setModalOpen(true);
  };

  const optimizationServices = [
    "LinkedIn headline rewrite",
    "Bio/About section optimization",
    "Profile photo guidance",
    "Experience optimization",
    "CV Alignment with LinkedIn",
    "Profile banner design"
  ];

  return (
    <main className="min-h-screen bg-[#0d1218] text-[#e1e7ef] pt-32 pb-24 selection:bg-[#0077b5] selection:text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <p className="text-[#0077b5] uppercase tracking-[0.3em] text-xs font-semibold mb-6">
            Bespoke Branding
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 font-light">
            The LinkedIn Fix
          </h1>
          <p className="text-[#e1e7ef]/70 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
            Positioning you strategically to communicate your value and build a profile that attracts real opportunities.
          </p>
        </motion.div>

        {/* Profile Optimization Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 max-w-4xl mx-auto"
        >
          <div className="border border-white/10 p-8 md:p-12 relative overflow-hidden bg-background/30 backdrop-blur-sm rounded-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077b5]/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="font-serif text-3xl md:text-4xl mb-2">Profile Optimization</h2>
            <p className="text-[#0077b5] text-xl mb-8 font-serif italic">¢250 <span className="text-sm text-white/50 not-italic font-sans">/ 48h Delivery</span></p>
            
            <p className="text-white/70 font-light mb-8 text-lg">
              A bespoke profile overhaul to position you as an industry leader.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {optimizationServices.map((service, i) => (
                <li key={i} className="flex items-start text-sm font-light text-white/80">
                  <Check size={16} className="text-[#0077b5] mr-4 mt-0.5 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
            <p className="text-sm font-light text-white/50 italic mb-8">
              * Additional services like CV writing available at an extra fee.
            </p>

            <button
              onClick={() => handleSimulate("Booking Profile Optimization...")}
              className="w-full md:w-auto px-12 py-4 border border-[#0077b5] text-[#0077b5] uppercase tracking-widest text-sm hover:bg-[#0077b5] hover:text-white transition-colors rounded-sm"
            >
              Book Optimization
            </button>
          </div>
        </motion.div>

        {/* Account & Engagement Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 border-t border-white/10"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Account & Engagement Management</h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-4">
              Consistent content. Meaningful engagement. Stronger personal brand. Real results.
            </p>
            <p className="text-[#0077b5] uppercase tracking-widest text-sm font-medium">
              We handle it all, so you focus on what you do best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="border border-white/10 p-8 flex flex-col relative bg-background/30 backdrop-blur-sm rounded-xl hover:border-white/20 transition-colors">
              <h3 className="uppercase tracking-widest text-sm text-[#0077b5] mb-2">Starter</h3>
              <p className="text-white/60 text-sm font-light mb-6 h-10">Build consistency if you&apos;re getting started.</p>
              <p className="font-serif text-4xl mb-8">¢700 <span className="text-base text-white/50 font-sans">/ month</span></p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> 2 Posts per week</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Content calendar</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Comment engagement (3x weekly)</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Basic profile visibility support</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Monthly performance report</li>
              </ul>
              <button onClick={() => handleSimulate("Subscribing to Starter Plan...")} className="w-full py-3 border border-white/20 hover:border-[#0077b5] hover:text-[#0077b5] transition-colors text-sm uppercase tracking-widest rounded-sm">Select Plan</button>
            </div>

            {/* Professional */}
            <div className="border border-[#0077b5] p-8 flex flex-col relative bg-background/40 backdrop-blur-sm rounded-xl transform md:-translate-y-4 shadow-2xl shadow-[#0077b5]/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0077b5] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Most Popular</div>
              <h3 className="uppercase tracking-widest text-sm text-[#0077b5] mb-2">Professional</h3>
              <p className="text-white/60 text-sm font-light mb-6 h-10">Ideal to grow visibility and authority.</p>
              <p className="font-serif text-4xl mb-8">¢1100 <span className="text-base text-white/50 font-sans">/ month</span></p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> 3 Posts per week</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Daily engagement (Mon-Fri)</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Thought leadership content</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Connection growth support</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Content strategy & planning</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Monthly report & call</li>
              </ul>
              <button onClick={() => handleSimulate("Subscribing to Professional Plan...")} className="w-full py-3 bg-[#0077b5] text-white hover:bg-[#005582] transition-colors text-sm uppercase tracking-widest font-medium rounded-sm">Select Plan</button>
            </div>

            {/* Executive */}
            <div className="border border-white/10 p-8 flex flex-col relative bg-background/30 backdrop-blur-sm rounded-xl hover:border-white/20 transition-colors">
              <h3 className="uppercase tracking-widest text-sm text-[#0077b5] mb-2">Executive</h3>
              <p className="text-white/60 text-sm font-light mb-6 h-10">For leaders who want maximum impact.</p>
              <p className="font-serif text-4xl mb-8">¢1800 <span className="text-base text-white/50 font-sans">/ month</span></p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> 5 Posts per week</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Daily engagement</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Personal brand strategy</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Advanced content planning</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Profile updates</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Priority connection building</li>
                <li className="flex items-start text-sm font-light text-white/80"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Monthly analytics & call</li>
              </ul>
              <button onClick={() => handleSimulate("Subscribing to Executive Plan...")} className="w-full py-3 border border-white/20 hover:border-[#0077b5] hover:text-[#0077b5] transition-colors text-sm uppercase tracking-widest rounded-sm">Select Plan</button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Simulation Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0d1218] border border-white/10 p-12 max-w-md w-full relative text-center rounded-xl"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white"
              >
                <X size={20} />
              </button>
              <div className="w-12 h-12 border-2 border-[#0077b5] border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
              <h4 className="font-serif text-2xl mb-4 text-white">Processing</h4>
              <p className="text-white/60 font-light">
                {modalContent} <br /><br />
                <span className="text-[#0077b5] text-sm italic">Simulated flow. Paystack integration coming soon.</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
