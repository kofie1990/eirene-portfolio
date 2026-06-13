import Hero from "@/components/Hero";
import About from "@/components/About";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 bg-background text-foreground selection:bg-accent selection:text-background">
      <Hero />
      <About />
      
      {/* Brief exploration portal to avoid overwhelming text on landing page */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide">
            Explore My Work & Impact
          </h2>
          <p className="text-white/60 mt-4 font-light text-lg">
            Discover the ventures and experiences that shape my journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/nbn-beauty" className="group block p-8 border border-white/5 hover:border-[#c2a878]/50 hover:bg-white/5 transition-all">
            <h3 className="font-serif text-2xl mb-4 group-hover:text-[#c2a878] transition-colors">NBN Beauty</h3>
            <p className="text-white/50 font-light text-sm">Nature-inspired beauty for healthy hair and glowing skin.</p>
          </Link>
          <Link href="/the-linkedin-fix" className="group block p-8 border border-white/5 hover:border-[#0077b5]/50 hover:bg-white/5 transition-all">
            <h3 className="font-serif text-2xl mb-4 group-hover:text-[#0077b5] transition-colors">The LinkedIn Fix</h3>
            <p className="text-white/50 font-light text-sm">Positioning you strategically to attract real opportunities.</p>
          </Link>
          <Link href="/ministry-leadership" className="group block p-8 border border-white/5 hover:border-[#d4af37]/50 hover:bg-white/5 transition-all">
            <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors">Ministry</h3>
            <p className="text-white/50 font-light text-sm">Servant leadership, pastoral care, and church administration.</p>
          </Link>
          <Link href="/academic-professional-journey" className="group block p-8 border border-white/5 hover:border-accent/50 hover:bg-white/5 transition-all">
            <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">Journey</h3>
            <p className="text-white/50 font-light text-sm">Academic background and professional experiences.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
