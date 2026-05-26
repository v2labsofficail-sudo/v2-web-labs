"use client";

import React from "react";
import Link from "next/link";

export default function WebPlatformPage() {
  const capabilities = [
    {
      title: "Sub-Second Static Assets",
      desc: "Architected on Next.js, implementing CDN edge-caching and asset compression layers that guarantee sub-second initial page load times.",
    },
    {
      title: "Clean Semantic SEO",
      desc: "Optimized HTML5 structure, schema.org injections, index tags, and 100/100 Core Web Vitals to command strong organic search indexing.",
    },
    {
      title: "Dynamic Operational APIs",
      desc: "Constructing robust backend endpoints in Django, Node.js, or serverless functions prepared for millions of monthly API queries.",
    },
  ];

  const steps = [
    { num: "01", title: "Technical Discovery", desc: "Understanding routing rules, backend dependencies, SEO criteria, and operational scopes." },
    { num: "02", title: "Interactive Engineering", desc: "Developing with Next.js, styling templates, and connecting secure APIs." },
    { num: "03", title: "Edge Deployment", desc: "Hosting on stable CDN environments (Vercel, AWS), configuring SSL keys, and final build optimization." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 md:py-24 relative overflow-hidden select-none">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-[#1161ed]/[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#3b82f6]/[0.02] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-[1100px]">
        {/* Back navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#1161ed] tracking-wider mb-8 hover:translate-x-[-4px] transition-transform duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-180">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          Back to Home
        </Link>

        {/* Hero Section */}
        <header className="mb-16">
          <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-3">Service Focus</p>
          <h1 className="text-[2.2rem] sm:text-[3.2rem] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            Web Platform Development
          </h1>
          <p className="text-[#64748B] text-base sm:text-lg max-w-[700px] leading-relaxed">
            We build high-performance web systems utilizing React, Next.js, and clean web engineering. Your web platform isn't just a brochure; it's a fast operational system designed to scale.
          </p>
        </header>

        {/* Capabilities Grid */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-8 tracking-tight">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-[24px] border border-black/[0.03] bg-white shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(17,97,237,0.05)] hover:border-[#1161ed]/20 group">
                <div className="h-[4px] w-full absolute top-0 left-0 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-t-[24px]" />
                <h3 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#1161ed] transition-colors duration-200">{cap.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Roadmap */}
        <section className="py-12 border-t border-[rgba(0,0,0,0.05)] mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-10 tracking-tight">How We Execute</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 rounded-full border-2 border-[#1161ed] bg-white flex items-center justify-center font-black text-[#1161ed] text-sm shadow-[0_4px_12px_rgba(17,97,237,0.1)]">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5">{step.title}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Card */}
        <section className="p-8 sm:p-12 rounded-[32px] bg-white border border-[#1161ed]/10 shadow-[0_20px_50px_rgba(17,97,237,0.05)] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1161ed]/5 rounded-bl-full pointer-events-none -z-10" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-4">Ready to Launch a High-Velocity Web Platform?</h2>
          <p className="text-[#64748B] text-sm max-w-[550px] mx-auto mb-8 leading-relaxed">
            Our Next.js developers are prepared to design and code your web platform from mockup to CDN edge. Reach out to coordinate today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_15px_rgba(17,97,237,0.15)] hover:shadow-[0_6px_22px_rgba(17,97,237,0.25)]"
          >
            Start Your Project
          </Link>
        </section>
      </div>
    </div>
  );
}
