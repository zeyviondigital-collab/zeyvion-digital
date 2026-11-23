export function WorkAndServices() {
  return (
    <>
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Visual Showcase</p>
        <h2 className="text-2xl sm:text-5xl font-semibold text-white mb-10 sm:mb-14">Selected Luxury Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            ["Aurelia Motors Digital", "Luxury Automotive Web", "https://unsplash.com"],
            ["Maison Noir Paris", "High-Fashion E-Commerce", "https://unsplash.com"],
            ["Vanguard Wealth Portal", "Private Fintech UI/UX", "https://unsplash.com"],
            ["Obsidian Hospitality", "5-Star Resort Booking", "https://unsplash.com"],
          ].map(([title, cat, img]) => (
            <div key={title} className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40">
              <img src={img} alt={title} className="w-full h-56 sm:h-72 object-cover group-hover:scale-105 transition duration-700" />
              <div className="p-5 sm:p-6 flex justify-between items-center gap-2">
                <div>
                  <p className="text-[11px] sm:text-xs text-amber-400 uppercase">{cat}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">{title}</h3>
                </div>
                <span className="shrink-0 px-3 py-1 rounded-full border border-white/15 text-[11px] text-zinc-300">Case Study</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-t border-white/10 py-16 sm:py-20 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Capabilities</p>
          <h2 className="text-2xl sm:text-5xl font-semibold text-white mb-10 sm:mb-12">Core Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              ["01", "Luxury Brand Identity", "Complete visual identity systems, typography, and brand positioning."],
              ["02", "Custom Web Engineering", "High-performance Next.js & React applications built for speed and SEO."],
              ["03", "UI/UX Product Design", "User-centric interface design and conversion-focused storefronts."],
              ["04", "Digital Growth Strategy", "Data-backed funnel optimization and technical SEO roadmaps."],
              ["05", "E-Commerce Architecture", "Seamless checkout systems and Stripe payment integrations."],
              ["06", "Speed & Security Audit", "Core Web Vitals optimization and enterprise security hardening."],
            ].map(([num, title, desc]) => (
              <div key={num} className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-zinc-900/40 hover:border-amber-400/40 transition">
                <span className="text-xs font-mono text-amber-400">[{num}]</span>
                <h3 className="text-lg sm:text-xl font-semibold text-white mt-3">{title}</h3>
                <p className="text-sm text-zinc-400 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
