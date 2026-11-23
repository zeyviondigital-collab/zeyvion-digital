export function HeroAndShowcase() {
  return (
    <>
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

        <div className="mt-10 sm:mt-14 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-900">
          <img
            src="https://pexels.com"
            alt="Digital Learning and Web Engineering"
            className="w-full h-[240px] sm:h-[380px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <span className="px-3 py-1.5 rounded-full bg-black/80 border border-white/15 text-amber-300 text-[10px] sm:text-xs font-medium">★ Digital Courses • Web Systems • Consulting</span>
          </div>
        </div>
      </section>

      <section id="studio" className="border-y border-white/10 bg-white/[0.02] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
            <img
              src="https://pexels.com"
              alt="Digital Strategy Team"
              className="w-full h-[240px] sm:h-[340px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-amber-400">About Zeyviondigital</p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white">Empowering creators and businesses in the digital economy.</h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">At <strong className="text-white">Zeyviondigital LLC</strong>, we combine practical digital education with custom software and marketing execution to help clients scale globally.</p>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div><p className="text-xl sm:text-2xl font-bold text-amber-300">100%</p><p className="text-[11px] text-zinc-500">Digital Access</p></div>
              <div><p className="text-xl sm:text-2xl font-bold text-amber-300">4.9/5</p><p className="text-[11px] text-zinc-500">Client Rating</p></div>
              <div><p className="text-xl sm:text-2xl font-bold text-amber-300">24/7</p><p className="text-[11px] text-zinc-500">Support</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
