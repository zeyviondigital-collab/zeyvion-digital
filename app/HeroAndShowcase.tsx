export function HeroAndShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-16 sm:pb-24">
      <div className="max-w-4xl">
        <span className="inline-block px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-[11px] sm:text-xs mb-5">● Digital Education & Growth Solutions 2026</span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.12]">
          Master Digital Skills & <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Scale Your Brand.</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">Zeyviondigital LLC provides executive digital courses, online learning systems, and custom web solutions for modern entrepreneurs.</p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#pricing" className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300">Explore Courses & Packages</a>
          <a href="#work" className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full border border-white/15 text-white text-sm hover:bg-white/10">View Digital Programs</a>
        </div>
      </div>

      <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
        <img src="/hero.png.jpg" alt="Zeyviondigital Academy" className="w-full h-[240px] sm:h-[400px] md:h-[520px] object-cover block" />
      </div>
    </section>
  );
}
