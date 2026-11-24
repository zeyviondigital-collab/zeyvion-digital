import Link from "next/link";
import { HeroAndShowcase } from "./HeroAndShowcase";
import { WorkAndServices } from "./WorkAndServices";
import { PackagesAndContact } from "./Sections";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#050507] text-zinc-100 flex flex-col justify-between">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050507]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-amber-200 to-amber-500 flex items-center justify-center text-black font-bold text-base sm:text-lg">Z</div>
            <div>
              <span className="text-sm sm:text-base font-semibold tracking-wider text-white uppercase block">Zeyvion<span className="text-amber-400">Digital</span></span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-zinc-500 uppercase block">Wyoming, USA</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#studio" className="hover:text-white">Studio</a>
            <a href="#work" className="hover:text-white">Showcase</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Packages</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase bg-white text-black hover:bg-amber-300 transition">Start Project</a>
        </div>
      </header>

      <main className="w-full">
        <HeroAndShowcase />
        <WorkAndServices />
        <PackagesAndContact />
      </main>

      <footer className="border-t border-white/10 bg-[#030304] py-10 sm:py-12 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <p className="text-white font-semibold uppercase text-sm">Zeyviondigital LLC</p>
            <p className="mt-1">30 N Gould St Ste R, Sheridan, WY 82801, USA • osama@zeyviondigital.com</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
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
