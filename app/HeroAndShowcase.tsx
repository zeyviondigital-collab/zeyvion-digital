export function HeroAndShowcase() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-[11px] sm:text-xs mb-5">● Accepting Client Partnerships 2026</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.12]">
            Precision Engineered <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Digital Excellence.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">Zeyviondigital LLC designs and engineers bespoke web applications, luxury brand identities, and high-converting digital ecosystems.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#pricing" className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300">Explore Packages</a>
            <a href="#work" className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full border border-white/15 text-white text-sm hover:bg-white/10">View Showcase</a>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
          <img src="https://unsplash.com" alt="Luxury Architecture" className="w-full h-[240px] sm:h-[380px] md:h-[520px] object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex justify-between items-center text-[10px] sm:text-xs">
            <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-amber-300 font-medium">★ Bespoke Studio — Sheridan, WY</span>
          </div>
        </div>
      </section>

      <section id="studio" className="border-y border-white/10 bg-white/[0.02] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <img src="https://unsplash.com" alt="Executive Studio" className="w-full h-[240px] sm:h-[360px] object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-amber-400">Our Studio</p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white">Strategic architecture meets uncompromising craft.</h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">At <strong className="text-white">Zeyviondigital LLC</strong>, every interface and line of code is custom-engineered for speed, visual prestige, and measurable growth.</p>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div><p className="text-xl sm:text-2xl font-bold text-amber-300">99.9%</p><p className="text-[11px] text-zinc-500">Uptime</p></div>
              <div><p className="text-xl sm:text-2xl font-bold text-amber-300">100%</p><p className="text-[11px] text-zinc-500">Custom Code</p></div>
              <div><p className="text-xl sm:text-2xl font-bold text-amber-300">24/7</p><p className="text-[11px] text-zinc-500">Support</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
