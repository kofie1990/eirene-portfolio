"use client";

import { motion } from "framer-motion";

export default function GO1218Page() {
  return (
    <main className="min-h-screen bg-[#1c1c1c] text-[#f0f0f0] pt-32 pb-24 selection:bg-[#ff4500] selection:text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#ff4500] uppercase tracking-[0.3em] text-xs font-bold mb-6">
              Automotive Solutions
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 font-bold tracking-tight">
              GO1218
            </h1>
            <div className="space-y-6 text-[#f0f0f0]/80 font-light text-lg leading-relaxed">
              <p>
                GO1218 is a practical automotive solutions venture focused on
                providing essential car care and convenience products for
                everyday drivers.
              </p>
              <p>
                The idea was born from recognising that many vehicle owners
                struggle to find affordable, reliable, and easily accessible car
                accessories and maintenance essentials. Through this venture, I
                aim to bridge that gap by offering carefully selected products
                that enhance vehicle care, safety, convenience, and the overall
                driving experience.
              </p>
              <p>
                Beyond selling products, this venture reflects my interest in
                identifying everyday challenges and building simple,
                customer-focused solutions that create value.
              </p>
            </div>

            <button className="mt-12 px-8 py-4 bg-[#ff4500] text-white uppercase tracking-widest text-sm font-medium hover:bg-[#cc3700] transition-colors rounded-sm">
              Explore Products
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square md:aspect-[4/5] w-full max-w-lg mx-auto"
          >
            {/* Abstract/Automotive aesthetic placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2a2a2a] to-[#111111] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
               <div className="text-[#ff4500] font-serif text-3xl font-bold tracking-widest relative z-10 opacity-50">
                 GO1218
               </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#ff4500]/50 rounded-br-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#ff4500]/50 rounded-tl-3xl"></div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
