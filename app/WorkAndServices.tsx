export function WorkAndServices() {
  return (
    <>
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Digital Programs & Solutions</p>
        <h2 className="text-2xl sm:text-5xl font-semibold text-white mb-10 sm:mb-14">Featured Courses & Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            ["Full-Stack Web Engineering Bootcamp", "Online Video Course • 40+ Modules", "/course1.png.jpg"],
            ["Digital Brand & E-Commerce Mastery", "Certification Program • Live Mentorship", "/course2.png.jpg"],
            ["AI & Automation for Modern Business", "Executive Workshop • Digital Toolkit", "/course3.png.jpg"],
            ["UI/UX Product Design Systems", "Hands-On Course • Figma & Next.js", "/course4.png.jpg"],
          ].map(([title, cat, img]) => (
            <div key={title} className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40">
              <img src={img} alt={title} className="w-full h-56 sm:h-68 object-cover group-hover:scale-105 transition duration-700" />
              <div className="p-5 sm:p-6 flex justify-between items-center gap-2">
                <div>
                  <p className="text-[11px] sm:text-xs text-amber-400 uppercase">{cat}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">{title}</h3>
                </div>
                <span className="shrink-0 px-3 py-1 rounded-full border border-white/15 text-[11px] text-zinc-300">Digital</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-t border-white/10 py-16 sm:py-20 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Capabilities</p>
          <h2 className="text-2xl sm:text-5xl font-semibold text-white mb-10 sm:mb-12">Digital Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              ["01", "Online Courses & Training", "Self-paced video courses and certification programs in web & digital growth."],
              ["02", "Custom Web Development", "High-performance Next.js websites and learning platforms built for scale."],
              ["03", "UI/UX & Brand Systems", "Modern digital brand identity and user-centric interface design."],
              ["04", "Digital Marketing Strategy", "Conversion funnels, technical SEO, and paid acquisition roadmaps."],
              ["05", "E-Commerce & Stripe Setup", "Complete online storefronts with secure global payment processing."],
              ["06", "1-on-1 Digital Consulting", "Dedicated advisory for founders launching digital products and agencies."],
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
