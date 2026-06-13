"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Instagram, Linkedin } from "./icons";

export default function Footer() {
  return (
    <footer id="booking" className="py-24 md:py-32 border-t border-white/10 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide">
            Let&apos;s Connect
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-8">
            <a href="mailto:nanaamaadjei13@gmail.com" className="group flex items-center space-x-3 text-white/70 hover:text-accent transition-colors">
              <Mail size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              <span className="font-light text-lg">nanaamaadjei13@gmail.com</span>
            </a>
            
            <a href="https://wa.me/233553567191" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-white/70 hover:text-accent transition-colors">
              <Phone size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              <span className="font-light text-lg">055 356 7191</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-8 pt-8">
            <a href="https://www.linkedin.com/in/eirenenanaamaadjei/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2 hover:text-accent transition-colors text-white/50">
              <div className="p-4 rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <span className="text-xs uppercase tracking-widest">LinkedIn</span>
            </a>
            
            <a href="https://www.instagram.com/ei.renee/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2 hover:text-accent transition-colors text-white/50">
              <div className="p-4 rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span className="text-xs uppercase tracking-widest">Instagram</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-white/5 text-xs text-white/30 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Eirene. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
