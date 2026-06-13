"use client";

import { motion } from "framer-motion";

export default function NBNBeautyPage() {
  const products = [
    { name: "Hair Growth Oil", image: "/marvel-hair-growth-oil.jpeg" },
    { name: "Beard Booster Oil", image: "/marvel-beard-booster-oil.jpeg" },
    { name: "Body Glow Oil", image: "/marvel-body-glow-oil.jpeg" },
    { name: "Shea Butter", image: "/marvel-shea-butter.jpeg" },
    { name: "Hand Balm", image: "/marvel-hand-balm.jpeg", hoverImage: "/marvel-hand-balm2.jpeg" },
    { name: "Black Soap", image: "/marvel-black-soap.jpeg" },
    { name: "Shower Gel", image: "/marvel-shower-gel.jpeg" },
  ];

  return (
    <main className="min-h-screen bg-[#1a1816] text-[#f4efe9] pt-32 pb-24 selection:bg-[#c2a878] selection:text-[#1a1816]">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <p className="text-[#c2a878] uppercase tracking-[0.3em] text-xs font-semibold mb-6">
            NatureByNature
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 font-light">
            NBN Beauty
          </h1>
          <p className="text-[#f4efe9]/70 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
            Nature-inspired beauty for healthy hair, glowing skin, and lasting
            confidence. Glow. Grow. Marvel, Naturally.
          </p>
        </motion.div>

        {/* Product Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Now in stock</h2>
            <p className="text-[#f4efe9]/60 font-light">
              Explore our curated collection of natural formulations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col">
                <div className="aspect-[4/5] bg-[#22201d] mb-4 md:mb-6 overflow-hidden relative rounded-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.hoverImage && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} Alternate`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  )}
                </div>
                <h3 className="font-serif text-lg md:text-xl mb-3 text-center group-hover:text-[#c2a878] transition-colors">{product.name}</h3>
                
                <a 
                  href="https://wa.me/233553567191" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-auto mx-auto border border-[#c2a878] text-[#c2a878] hover:bg-[#c2a878] hover:text-[#1a1816] transition-colors text-xs tracking-widest uppercase px-6 py-2 rounded-sm"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center border-t border-white/5 pt-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-square relative overflow-hidden group rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/all-products.jpeg"
                alt="NBN Beauty All Products"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                onError={(e) => {
                  e.currentTarget.src = "/nbn_beauty.png";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-4xl">Our Story</h2>
            <div className="space-y-6 text-[#f4efe9]/80 font-light leading-relaxed text-lg">
              <p>
                NatureByNature Beauty (NBN Beauty) is a natural hair and
                skincare brand dedicated to creating simple, effective, and
                nature-inspired beauty solutions.
              </p>
              <p>
                Since its establishment in 2021, I have played a key role in
                developing the brand’s strategy, product positioning, marketing,
                customer engagement, and business growth initiatives. Through NBN
                Beauty, I have gained hands-on experience in entrepreneurship,
                branding, product development, digital marketing, customer
                relations, and business operations.
              </p>
              <p>
                Our mission is to help people care for their skin and hair
                confidently using carefully formulated products that combine the
                power of nature with everyday self-care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
