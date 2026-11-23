"use client";
import React, { useState } from "react";

export function PackagesAndContact() {
  const [submitted, setSubmitted] = useState(false);
  const [pkg, setPkg] = useState("$999 - Brand & UI/UX Architecture");

  const pickPkg = (val: string) => {
    setPkg(val);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Transparent Pricing</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Service Packages</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Starter Web Presence", price: "$499", desc: "Sleek 5-page custom Next.js site with SEO & contact form.", list: ["Up to 5 Custom Pages", "Responsive Luxury UI", "Technical SEO Setup", "7-Day Delivery"], pop: false },
            { name: "Brand & UI/UX Architecture", price: "$999", desc: "Complete brand identity and 10-page bespoke web platform.", list: ["Full Brand & Logo Suite", "Up to 10 Bespoke Pages", "Stripe Payment Integration", "30-Day Priority Support"], pop: true },
            { name: "Full Custom Web Application", price: "$1,999", desc: "Scalable full-stack web application or e-commerce system.", list: ["Custom Full-Stack Build", "API & Database Setup", "Admin Dashboard", "60-Day Maintenance"], pop: false },
          ].map((p) => (
            <div key={p.name} className={`p-8 rounded-3xl border flex flex-col justify-between ${p.pop ? "border-amber-400 bg-amber-500/10" : "border-white/10 bg-zinc-900/40"}`}>
              <div>
                {p.pop && <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-amber-400 text-black uppercase mb-3">Most Popular</span>}
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="text-4xl font-bold text-white mt-3">{p.price} <span className="text-xs font-normal text-zinc-400">USD</span></p>
                <p className="text-sm text-zinc-400 mt-3">{p.desc}</p>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-sm text-zinc-300">
                  {p.list.map((f) => <li key={f}>✓ {f}</li>)}
                </ul>
              </div>
              <button onClick={() => pickPkg(`${p.price} - ${p.name}`)} className={`mt-8 w-full py-3 rounded-full text-sm font-semibold cursor-pointer ${p.pop ? "bg-amber-400 text-black" : "bg-white/10 text-white hover:bg-white hover:text-black"}`}>Select Package</button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Contact Us</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">Start Your Project</h2>
            <p className="text-zinc-400 mt-4">Reach out to our Wyoming headquarters. We respond within 24 hours.</p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <p className="text-xs text-zinc-500">LEGAL ENTITY & ADDRESS</p>
                <p className="text-white font-medium mt-1">Zeyviondigital LLC — 30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <p className="text-xs text-zinc-500">EMAIL & PHONE</p>
                <p className="text-amber-300 font-medium mt-1">support@zeyviondigital.com • +1 (307) 205-8490</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50">
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-3xl text-amber-400 mb-2">✓</p>
                <h3 className="text-2xl font-semibold text-white">Inquiry Received</h3>
                <p className="text-sm text-zinc-400 mt-2">Thank you for contacting Zeyviondigital LLC. We will reply shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 px-5 py-2 rounded-full border border-white/15 text-xs text-white">Send Another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <input type="text" required placeholder="Full Name *" className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm" />
                <input type="email" required placeholder="Business Email *" className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm" />
                <select value={pkg} onChange={(e) => setPkg(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm">
                  <option value="$499 - Starter Web Presence">$499 - Starter Web Presence</option>
                  <option value="$999 - Brand & UI/UX Architecture">$999 - Brand & UI/UX Architecture</option>
                  <option value="$1,999 - Full Custom Web Application">$1,999 - Full Custom Web Application</option>
                  <option value="$3,000+ - Enterprise Solution">$3,000+ - Enterprise Solution</option>
                </select>
                <textarea rows={4} required placeholder="Project Brief *" className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm" />
                <button type="submit" className="w-full py-3.5 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 cursor-pointer">Submit Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
