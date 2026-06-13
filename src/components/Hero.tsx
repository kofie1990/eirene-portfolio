"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">
      {/* High-res background video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/60 z-10" /> {/* Overlay for text readability */}
        <video
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* <p className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              Welcome t
            </p> */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-medium">
              Hi,<br />
              <span className="italic font-light text-accent/80">I'm Eirene.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
              Communicator. Entrepreneur. Creative. Woman of Faith. Building brands, telling stories, and helping people show up confidently in the world.
            </p>

            <a
              href="#about"
              className="group inline-flex items-center space-x-4 pb-2 border-b border-accent hover:border-foreground transition-colors"
            >
              <span className="uppercase tracking-widest text-sm font-medium">Explore My World</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
