"use client";

import { motion } from "framer-motion";

export default function MinistryLeadershipPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 selection:bg-[#d4af37] selection:text-black">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-5/12 order-2 md:order-1"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-t-full rounded-b-md shadow-2xl">
              {/* Aesthetic placeholder */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="./ministry.jpeg"
                alt="Ministry & Leadership"
                className="w-full h-full object-cover opacity-90 sepia-[0.2]"
              />
              <div className="absolute inset-0 border-[8px] border-background/20 rounded-t-full rounded-b-md"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-7/12 order-1 md:order-2"
          >
            <p className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold mb-6">
              Servant Leadership
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight">
              Ministry & <br /> Leadership
            </h1>

            <div className="space-y-6 text-foreground font-light text-lg leading-relaxed">
              <p>
                Ministry is one of the most meaningful aspects of my life and
                leadership journey.
              </p>
              <p>
                I serve within my local church as a pastor, administrator,
                worship team member, events volunteer, and executive support
                assistant. In these roles, I have the privilege of praying with
                people, providing pastoral care, visiting members, offering
                guidance and counselling, and supporting individuals in their
                spiritual growth.
              </p>
              <p>
                Beyond direct ministry, I contribute to the operational life of
                the church through database management, member follow-up,
                attendance accountability, event support, and administrative
                coordination. These responsibilities have strengthened my
                leadership, empathy, organisation, communication, and
                people-management skills.
              </p>
              <p className="font-serif text-xl md:text-2xl italic text-[#d4af37] mt-8">
                &quot;More than a position, ministry has taught me the value of
                servant leadership, leading with compassion, excellence, and a
                genuine commitment to helping others grow.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
