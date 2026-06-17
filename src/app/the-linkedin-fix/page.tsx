"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Service } from "@/components/ServiceCheckoutModal";

const ServiceCheckoutModal = dynamic(
  () => import("@/components/ServiceCheckoutModal"),
  { ssr: false }
);

export default function TheLinkedInFixPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBookService = (name: string, price: number) => {
    setSelectedService({ name, price });
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
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 selection:bg-[#0077b5] selection:text-foreground">
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
          <p className="text-foreground/90 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
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
          <div className="border border-foreground/10 p-8 md:p-12 relative overflow-hidden bg-background/30 backdrop-blur-sm rounded-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077b5]/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="font-serif text-3xl md:text-4xl mb-2">Profile Optimization</h2>
            <p className="text-[#0077b5] text-xl mb-8 font-serif italic">¢250 <span className="text-sm text-foreground/70 not-italic font-sans">/ 48h Delivery</span></p>
            
            <p className="text-foreground/90 font-light mb-8 text-lg">
              A bespoke profile overhaul to position you as an industry leader.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {optimizationServices.map((service, i) => (
                <li key={i} className="flex items-start text-sm font-light text-foreground">
                  <Check size={16} className="text-[#0077b5] mr-4 mt-0.5 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
            <p className="text-sm font-light text-foreground/70 italic mb-8">
              * Additional services like CV writing available at an extra fee.
            </p>

            <button
              onClick={() => handleBookService("Profile Optimization", 250)}
              className="w-full md:w-auto px-12 py-4 border border-[#0077b5] text-[#0077b5] uppercase tracking-widest text-sm hover:bg-[#0077b5] hover:text-foreground transition-colors rounded-sm"
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
          className="pt-16 border-t border-foreground/10"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Account & Engagement Management</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-4">
              Consistent content. Meaningful engagement. Stronger personal brand. Real results.
            </p>
            <p className="text-[#0077b5] uppercase tracking-widest text-sm font-medium">
              We handle it all, so you focus on what you do best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="border border-foreground/10 p-8 flex flex-col relative bg-background/30 backdrop-blur-sm rounded-xl hover:border-foreground/20 transition-colors">
              <h3 className="uppercase tracking-widest text-sm text-[#0077b5] mb-2">Starter</h3>
              <p className="text-foreground/80 text-sm font-light mb-6 h-10">Build consistency if you&apos;re getting started.</p>
              <p className="font-serif text-4xl mb-8">¢700 <span className="text-base text-foreground/70 font-sans">/ month</span></p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> 2 Posts per week</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Content calendar</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Comment engagement (3x weekly)</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Basic profile visibility support</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Monthly performance report</li>
              </ul>
              <button onClick={() => handleBookService("Starter Plan", 700)} className="w-full py-3 border border-foreground/20 hover:border-[#0077b5] hover:text-[#0077b5] transition-colors text-sm uppercase tracking-widest rounded-sm">Select Plan</button>
            </div>

            {/* Professional */}
            <div className="border border-[#0077b5] p-8 flex flex-col relative bg-background/40 backdrop-blur-sm rounded-xl transform md:-translate-y-4 shadow-2xl shadow-[#0077b5]/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0077b5] text-foreground text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-sm">Most Popular</div>
              <h3 className="uppercase tracking-widest text-sm text-[#0077b5] mb-2">Professional</h3>
              <p className="text-foreground/80 text-sm font-light mb-6 h-10">Ideal to grow visibility and authority.</p>
              <p className="font-serif text-4xl mb-8">¢1100 <span className="text-base text-foreground/70 font-sans">/ month</span></p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> 3 Posts per week</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Daily engagement (Mon-Fri)</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Thought leadership content</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Connection growth support</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Content strategy & planning</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Monthly report & call</li>
              </ul>
              <button onClick={() => handleBookService("Professional Plan", 1100)} className="w-full py-3 bg-[#0077b5] text-foreground hover:bg-[#005582] transition-colors text-sm uppercase tracking-widest font-medium rounded-sm">Select Plan</button>
            </div>

            {/* Executive */}
            <div className="border border-foreground/10 p-8 flex flex-col relative bg-background/30 backdrop-blur-sm rounded-xl hover:border-foreground/20 transition-colors">
              <h3 className="uppercase tracking-widest text-sm text-[#0077b5] mb-2">Executive</h3>
              <p className="text-foreground/80 text-sm font-light mb-6 h-10">For leaders who want maximum impact.</p>
              <p className="font-serif text-4xl mb-8">¢1800 <span className="text-base text-foreground/70 font-sans">/ month</span></p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> 5 Posts per week</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Daily engagement</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Personal brand strategy</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Advanced content planning</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Profile updates</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Priority connection building</li>
                <li className="flex items-start text-sm font-light text-foreground"><Check size={16} className="text-[#0077b5] mr-3 shrink-0" /> Monthly analytics & call</li>
              </ul>
              <button onClick={() => handleBookService("Executive Plan", 1800)} className="w-full py-3 border border-foreground/20 hover:border-[#0077b5] hover:text-[#0077b5] transition-colors text-sm uppercase tracking-widest rounded-sm">Select Plan</button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service Checkout Modal */}
      <ServiceCheckoutModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selectedService}
      />
    </main>
  );
}
