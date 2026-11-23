import Link from "next/link";
import { PackagesAndContact } from "./Sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 flex flex-col justify-between">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050507]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-200 to-amber-500 flex items-center justify-center text-black font-bold text-lg">Z</div>
            <div>
              <span className="text-base font-semibold tracking-wider text-white uppercase block">Zeyvion<span className="text-amber-400">Digital</span></span>
              <span className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase block">Wyoming, USA</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#studio" className="hover:text-white">Studio</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#pricing" className="hover:text-white">Packages</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase bg-white text-black hover:bg-amber-300 transition">Start Project</a>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
          <div className="max-w-4xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-xs mb-6">● Accepting Client Partnerships 2026</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-tight">
              Precision Engineered <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Digital Excellence.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 max-w-2xl">Zeyviondigital LLC designs and engineers bespoke web applications, luxury brand identities, and high-converting digital ecosystems.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="px-7 py-3.5 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300">Explore Packages</a>
              <a href="#work" className="px-7 py-3.5 rounded-full border border-white/15 text-white text-sm hover:bg-white/10">Selected Work</a>
            </div>
          </div>
          <div className="mt-14 rounded-3xl overflow-hidden border border-white/10">
            <img src="https://unsplash.com" alt="Zeyviondigital Studio" className="w-full h-[360px] md:h-[480px] object-cover" />
          </div>
        </section>

        <section id="studio" className="border-y border-white/10 bg-white/[0.02] py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Our Studio</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">Strategic architecture meets uncompromising craft.</h2>
            </div>
            <div className="text-zinc-400 space-y-4">
              <p>At <strong className="text-white">Zeyviondigital LLC</strong>, every interface and line of code is custom-engineered for speed, security, and measurable growth.</p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-white">
                <div><p className="text-2xl font-bold">99.9%</p><p className="text-xs text-zinc-500">Uptime</p></div>
                <div><p className="text-2xl font-bold">100%</p><p className="text-xs text-zinc-500">Bespoke Code</p></div>
                <div><p className="text-2xl font-bold">24/7</p><p className="text-xs text-zinc-500">Support</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12">Core Offerings</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["01", "Luxury Brand Identity", "Complete visual identity systems, typography, and brand positioning."],
              ["02", "Custom Web Engineering", "High-performance Next.js & React applications built for speed and SEO."],
              ["03", "UI/UX Product Design", "User-centric interface design and conversion-focused storefronts."],
              ["04", "Digital Growth Strategy", "Data-backed funnel optimization and technical SEO roadmaps."],
              ["05", "E-Commerce Architecture", "Seamless checkout systems and Stripe payment integrations."],
              ["06", "Speed & Security Audit", "Core Web Vitals optimization and enterprise security hardening."],
            ].map(([num, title, desc]) => (
              <div key={num} className="p-7 rounded-2xl border border-white/10 bg-zinc-900/40 hover:border-amber-400/40 transition">
                <span className="text-xs font-mono text-amber-400">[{num}]</span>
                <h3 className="text-xl font-semibold text-white mt-3">{title}</h3>
                <p className="text-sm text-zinc-400 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-white/10 py-20 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12">Selected Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                ["Aurelia Motors", "Automotive Platform", "https://unsplash.com"],
                ["Maison Noir", "Luxury E-Commerce", "https://unsplash.com"],
                ["Vanguard Capital", "Fintech Web App", "https://unsplash.com"],
              ].map(([title, cat, img]) => (
                <div key={title}>
                  <img src={img} alt={title} className="w-full h-60 object-cover rounded-2xl border border-white/10" />
                  <p className="text-xs text-amber-400 uppercase mt-4">{cat}</p>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PackagesAndContact />
      </main>

      <footer className="border-t border-white/10 bg-[#030304] py-12 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-white font-semibold uppercase text-sm">Zeyviondigital LLC</p>
            <p className="mt-1">30 N Gould St Ste R, Sheridan, WY 82801, USA • support@zeyviondigital.com</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-amber-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-amber-300">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-amber-300">Refund Policy</Link>
          </div>
          <p>© 2026 Zeyviondigital LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
