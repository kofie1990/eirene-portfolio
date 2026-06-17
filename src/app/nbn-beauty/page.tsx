"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Product } from "@/components/CheckoutModal";

const CheckoutModal = dynamic(() => import("@/components/CheckoutModal"), { ssr: false });

export default function NBNBeautyPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { name: "Hair Growth Oil", image: "/marvel-hair-growth-oil.jpeg", price: 60 },
    { name: "Beard Booster Oil", image: "/marvel-beard-booster-oil.jpeg", price: 70 },
    { name: "Body Glow Oil", image: "/marvel-body-glow-oil.jpeg", price: 50 },
    { name: "Shea Butter", image: "/marvel-shea-butter.jpeg", price: 40 },
    { name: "Hand Balm", image: "/marvel-hand-balm.jpeg", hoverImage: "/marvel-hand-balm2.jpeg", price: 20 },
    { name: "Black Soap", image: "/marvel-black-soap.jpeg", price: 60 },
    { name: "Shower Gel", image: "/marvel-shower-gel.jpeg", price: 60 },
  ];

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 selection:bg-accent selection:text-background">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">
            NatureByNature
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 font-light">
            NBN Beauty
          </h1>
          <p className="text-foreground/90 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
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
            <p className="text-foreground/80 font-light">
              Explore our curated collection of natural formulations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col">
                <div className="aspect-[4/5] bg-foreground/5 mb-4 md:mb-6 overflow-hidden relative rounded-sm">
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
                <div className="text-center mb-4">
                  <h3 className="font-serif text-lg md:text-xl mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-foreground/90 font-light">¢{product.price}</p>
                </div>
                
                <button 
                  onClick={() => handleBuyNow(product)}
                  className="mt-auto mx-auto border border-accent text-accent hover:bg-accent hover:text-background transition-colors text-xs tracking-widest uppercase px-6 py-2 rounded-sm"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center border-t border-foreground/5 pt-32">
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
            <div className="space-y-6 text-foreground font-light leading-relaxed text-lg">
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
      
      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct} 
      />
    </main>
  );
}
