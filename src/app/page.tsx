import Hero from "@/components/Hero";
import About from "@/components/About";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 bg-background text-foreground selection:bg-accent selection:text-background">
      <Hero />
      <About />
      
      {/* Brief exploration portal to avoid overwhelming text on landing page */}
      <section className="py-32 max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight mb-6">
              Explore My Work & Impact
            </h2>
            <p className="text-foreground/70 font-light text-lg md:text-xl">
              Discover the ventures and experiences that shape my journey.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-16 h-[1px] bg-foreground/20 mb-3"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
          <Link href="/nbn-beauty" className="group relative block h-[450px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer">
            <img 
              src="/nbn_beauty.png" 
              alt="NBN Beauty" 
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:grayscale-0 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100 z-10">
              <svg className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></span>
                  <h3 className="font-serif text-3xl md:text-4xl">NBN Beauty</h3>
                </div>
                <div className="overflow-hidden">
                  <p className="font-light text-white/80 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-150 leading-relaxed">
                    Nature-inspired beauty for healthy hair and glowing skin.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/the-linkedin-fix" className="group relative block h-[450px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer lg:translate-y-12">
            <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110">
              <svg 
                className="w-32 h-32 md:w-40 md:h-40 text-white/30 transition-colors duration-1000 group-hover:text-[#0077b5]"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100 z-10">
              <svg className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#0077b5] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></span>
                  <h3 className="font-serif text-3xl md:text-4xl">The LinkedIn Fix</h3>
                </div>
                <div className="overflow-hidden">
                  <p className="font-light text-white/80 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-150 leading-relaxed">
                    Positioning you strategically to attract real opportunities.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/ministry-leadership" className="group relative block h-[450px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer">
            <img 
              src="/ministry.jpeg" 
              alt="Ministry" 
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:grayscale-0 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100 z-10">
              <svg className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></span>
                  <h3 className="font-serif text-3xl md:text-4xl">Ministry</h3>
                </div>
                <div className="overflow-hidden">
                  <p className="font-light text-white/80 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-150 leading-relaxed">
                    Servant leadership, pastoral care, and church administration.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/academic-professional-journey" className="group relative block h-[450px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer lg:translate-y-12">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop" 
              alt="Journey" 
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:grayscale-0 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100 z-10">
              <svg className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></span>
                  <h3 className="font-serif text-3xl md:text-4xl">Journey</h3>
                </div>
                <div className="overflow-hidden">
                  <p className="font-light text-white/80 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-150 leading-relaxed">
                    Academic background and professional experiences.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
