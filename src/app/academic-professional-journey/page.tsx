"use client";

import { motion } from "framer-motion";

export default function AcademicProfessionalJourneyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">
            The Journey
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Academic & <br /> Professional Journey
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* Left Column - Intro */}
          <div className="md:col-span-5 text-xl font-light leading-relaxed text-foreground/90 font-serif italic">
            <p>
              My academic and professional journey sits at the intersection of
              communication, leadership, administration, and international
              affairs.
            </p>
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-7 space-y-12">

            {/* Academic */}
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-6 pb-2 border-b border-white/10">
                Education
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl mb-1">Master&apos;s degree in International Relations and Diplomacy</h3>
                  <p className="text-foreground/60 font-light text-sm">Ghana Institute of Management and Public Administration (GIMPA)</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">First Class Honours, Media and Communication Studies (Public Relations)</h3>
                  <p className="text-foreground/60 font-light text-sm">Kwame Nkrumah University of Science and Technology (KNUST)</p>
                </div>
              </div>
            </div>

            {/* Professional */}
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-6 pb-2 border-b border-white/10">
                Experience
              </h2>
              <p className="text-foreground/80 font-light leading-relaxed mb-6">
                Professionally, I have built experience across corporate
                communications, stakeholder engagement, administration, customer
                experience, executive support, and strategic communication through
                opportunities with organisations such as:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* MTN Ghana */}
                <div className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors rounded-sm">
                  <div className="w-12 h-12 bg-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/mtn-logo.png"
                      alt="MTN Ghana Logo"
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="font-serif italic text-white/50 text-xs">MTN</span>';
                      }}
                    />
                  </div>
                  <span className="font-serif italic text-foreground/90">MTN Ghana</span>
                </div>

                {/* SLB */}
                <div className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors rounded-sm">
                  <div className="w-12 h-12 bg-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/slb-logo.png"
                      alt="SLB Logo"
                      className="w-full h-full object-cover p-1"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="font-serif italic text-white/50 text-xs">SLB</span>';
                      }}
                    />
                  </div>
                  <span className="font-serif italic text-foreground/90">SLB</span>
                </div>

                {/* Bandwidth Global */}
                <div className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors rounded-sm">
                  <div className="w-12 h-12 bg-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://pbs.twimg.com/profile_images/1768612508837756929/nUT1Lmax_400x400.jpg"
                      alt="Bandwidth Global Logo"
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="font-serif italic text-white/50 text-xs text-center leading-tight">BWG</span>';
                      }}
                    />
                  </div>
                  <span className="font-serif italic text-foreground/90">Bandwidth Global</span>
                </div>

                {/* Various Leadership Roles */}
                <div className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors rounded-sm">
                  <div className="w-12 h-12 bg-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                  </div>
                  <span className="font-serif italic text-foreground/90">Various Leadership Roles</span>
                </div>
              </div>
              <p className="text-foreground/80 font-light leading-relaxed">
                Whether supporting communication strategies, managing stakeholder
                relationships, coordinating projects, or building systems that
                improve efficiency, I am driven by a desire to create clarity,
                foster meaningful connections, and contribute to initiatives that
                make a lasting impact.
              </p>
            </div>

          </div>
        </motion.div>
      </section>
    </main>
  );
}
