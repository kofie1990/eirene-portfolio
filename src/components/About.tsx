"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative border-t border-foreground/5 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-3 leading-tight">
              Crafting narratives. <br />
              <span className="text-accent italic">Building brands.</span>
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl mb-8 leading-tight font-serif">
              <span className="text-accent italic">Serving with purpose.</span>
            </h3>
            <div className="space-y-6 text-foreground font-light text-lg leading-relaxed">
              <p>Hi, I&apos;m Eirene Nana Ama Serwaa Adjei.</p>
              <p>
                I&apos;m a communications professional, entrepreneur, creative
                strategist, and believer, passionate about helping people and
                brands communicate with clarity, confidence, and authenticity.
              </p>
              <p>
                Professionally, I work at the intersection of communication,
                stakeholder engagement, branding, and administration,
                transforming ideas into compelling stories and meaningful
                experiences. My academic background in Public Relations and my
                experience supporting corporate and leadership environments have
                equipped me with a strong foundation in strategic communication,
                organization, and relationship management.
              </p>
              <p>
                Beyond my career, I am deeply passionate about people, beauty,
                personal branding, and purposeful living. This passion has led
                me to build ventures that reflect different parts of who I am.
              </p>
              <p>
                Through NBN Beauty, I help people care for their hair and skin
                naturally with products crafted to promote healthy growth and
                confidence. Through The LinkedIn Fix, I help professionals
                position themselves strategically, communicate their value
                effectively, and build LinkedIn profiles that attract
                opportunities.
              </p>
              <p>
                At my core, I am a Christian whose faith shapes how I lead,
                serve, and build. I believe excellence is worship, relationships
                matter, and every person has a story worth telling.
              </p>
              <p>
                Whether I&apos;m supporting executives, building brands, hosting
                events, mentoring young people, or creating memorable
                experiences, my goal remains the same: to make an impact, add
                value, and leave people better than I found them.
              </p>
              <p>
                Welcome to my world, where communication meets creativity,
                purpose meets excellence, and every story matters.
              </p>
            </div>

            <div className="mt-12 font-serif text-2xl italic text-accent opacity-80">
              Eirene.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFHobsCzMDYfw/profile-displayphoto-crop_800_800/B4DZmf0XQdJUAI-/0/1759322931397?e=1782950400&v=beta&t=-RiJ6yw5PZuXDHrif78FyQKFnDxtDxCiZmMAHfHiyjM"
              alt="Eirene Portrait"
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute -inset-4 border border-accent/30 -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
