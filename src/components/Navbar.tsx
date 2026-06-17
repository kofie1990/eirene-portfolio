"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesDropdownOpen, setBusinessesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? "bg-background/90 backdrop-blur-md border-foreground/10 py-4"
          : "bg-transparent border-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity">
            EIRENE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
            <Link href="/#about" className="hover:text-accent transition-colors">
              About
            </Link>

            {/* Businesses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setBusinessesDropdownOpen(true)}
              onMouseLeave={() => setBusinessesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-accent transition-colors py-2">
                <span>Businesses</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${businessesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {businessesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-md border border-foreground/10 rounded-sm shadow-xl py-2 flex flex-col"
                  >
                    <Link href="/nbn-beauty" className="px-6 py-3 hover:bg-foreground/5 hover:text-accent transition-colors">
                      NBN Beauty
                    </Link>
                    <Link href="/the-linkedin-fix" className="px-6 py-3 hover:bg-foreground/5 hover:text-accent transition-colors">
                      The LinkedIn Fix
                    </Link>
                    <Link href="/go1218" className="px-6 py-3 hover:bg-foreground/5 hover:text-accent transition-colors">
                      GO1218
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/ministry-leadership" className="hover:text-accent transition-colors">
              Ministry
            </Link>
            <Link href="/academic-professional-journey" className="hover:text-accent transition-colors">
              Journey
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="#booking"
              className="px-6 py-2 border border-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-xs uppercase tracking-widest font-medium"
            >
              Let&apos;s Connect
            </Link>
          </div>

          <button
            className="lg:hidden z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center pt-20 pb-10 overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-8 text-lg md:text-xl tracking-widest uppercase font-serif w-full px-6">
              <Link href="/#about" className="hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>

              <div className="w-full max-w-xs border-t border-b border-foreground/10 py-6 my-4 flex flex-col items-center space-y-6">
                <span className="text-sm text-accent tracking-[0.3em] font-sans font-semibold">BUSINESSES</span>
                <Link href="/nbn-beauty" className="hover:text-accent transition-colors text-base">NBN Beauty</Link>
                <Link href="/the-linkedin-fix" className="hover:text-accent transition-colors text-base">The LinkedIn Fix</Link>
                <Link href="/go1218" className="hover:text-accent transition-colors text-base">GO1218</Link>
              </div>

              <Link href="/ministry-leadership" className="hover:text-accent transition-colors text-center leading-relaxed">
                Ministry & <br /> Leadership
              </Link>
              <Link href="/academic-professional-journey" className="hover:text-accent transition-colors text-center leading-relaxed">
                Academic & <br /> Professional Journey
              </Link>

              <Link
                href="#booking"
                className="mt-8 px-8 py-3 border border-foreground hover:bg-foreground hover:text-background transition-all text-sm font-sans"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
