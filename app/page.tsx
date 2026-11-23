"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(
    "$999 - Brand & UI/UX Architecture"
  );

  const handleSelectPackage = (pkg: string) => {
    setSelectedPackage(pkg);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-x-hidden">
      {/* Subtle Ambient Luxury Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zinc-800/20 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050507]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-amber-500/20">
              Z
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-wider text-white uppercase">
                Zeyvion<span className="text-amber-400">Digital</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                Wyoming, USA
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#philosophy" className="hover:text-white transition">
              Studio
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#work" className="hover:text-white transition">
              Selected Work
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Packages
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-amber-300 transition shadow-md"
          >
            Start Project
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Accepting New Client Partnerships for 2026
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08]">
              Precision Engineered{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Digital Excellence.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              Zeyviondigital LLC designs and engineers bespoke web platforms,
              luxury brand identities, and high-converting digital ecosystems
              for ambitious global businesses.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 text-black font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-amber-500/20"
              >
                Explore Packages & Pricing
              </a>
              <a
                href="#work"
                className="px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.03] text-white font-medium text-sm hover:bg-white/[0.08] transition"
              >
                View Selected Work
              </a>
            </div>
          </div>

          {/* Hero Luxury Showcase Image */}
          <div className="mt-16 relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 shadow-2xl">
            <img
              src="https://unsplash.com"
              alt="Zeyviondigital LLC Luxury Abstract Architecture"
              className="w-full h-[340px] md:h-[520px] object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-300">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                U.S. Registered Digital Engineering Studio
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                Next.js • Brand Architecture • UI/UX Systems
              </span>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section
          id="philosophy"
          className="border-y border-white/[0.06] bg-white/[0.015] py-24"
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400 mb-3">
                Our Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                Where strategic architecture meets uncompromising craft.
              </h2>
            </div>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                At <strong className="text-white">Zeyviondigital LLC</strong>, we
                reject bloated templates and generic builds. Every interface,
                line of code, and brand touchpoint is custom-engineered for
                speed, security, and measurable business growth.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-2xl font-semibold text-white">99.9%</p>
                  <p className="text-xs text-zinc-500 mt-1">Uptime & Speed</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">100%</p>
                  <p className="text-xs text-zinc-500 mt-1">Bespoke Codebase</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">24/7</p>
                  <p className="text-xs text-zinc-500 mt-1">Client Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings / Services */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400 mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Core Digital Offerings
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Luxury Brand Identity",
                desc: "Complete visual identity systems, typography guidelines, custom logos, and brand positioning built for authority.",
              },
              {
                num: "02",
                title: "Custom Web Engineering",
                desc: "High-performance Next.js and React web applications engineered for instant load times, SEO, and global scalability.",
              },
              {
                num: "03",
                title: "UI/UX & Product Design",
                desc: "User-centric interface design, interactive prototypes, and conversion-focused digital storefronts.",
              },
              {
                num: "04",
                title: "Digital Growth Strategy",
                desc: "Data-backed market positioning, funnel optimization, and technical SEO roadmaps that turn traffic into revenue.",
              },
              {
                num: "05",
                title: "E-Commerce Architecture",
                desc: "Seamless checkout experiences, Stripe payment integrations, and custom storefront engineering.",
              },
              {
                num: "06",
                title: "Performance & Speed Audit",
                desc: "Core Web Vitals optimization, code refactoring, and enterprise security hardening for existing platforms.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="p-8 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-amber-400/40 hover:bg-zinc-900/60 transition group"
              >
                <span className="text-xs font-mono text-amber-400">
