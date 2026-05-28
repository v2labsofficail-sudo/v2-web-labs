"use client";

import React from "react";
import Link from "next/link";

export default function WebPlatformPage() {
  const STACKS = [
    {
      title: "Frontend Engineering",
      badge: "User Interface & Experience",
      desc: "Pixel-perfect conversion of designs into blazing-fast, responsive web interfaces. We construct semantic, accessible React layouts with flawless Core Web Vitals.",
      techs: ["Next.js (App Router)", "React 19 & TypeScript", "Tailwind CSS v4", "Framer Motion Animations"],
      gradient: "from-[#1161ed] to-[#3b82f6]",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      title: "Backend & Systems",
      badge: "Database & Core API",
      desc: "High-concurrency database schemas and robust API endpoints built to serve millions of monthly requests with sub-millisecond database response times.",
      techs: ["Node.js & Express / NestJS", "PostgreSQL & Prisma ORM", "RESTful & GraphQL APIs", "Redis Caching Layers"],
      gradient: "from-[#8b5cf6] to-[#d946ef]",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75" />
        </svg>
      ),
    },
    {
      title: "Headless CMS & Commerce",
      badge: "Decoupled Content Brokerage",
      desc: "Empowering content editors with flexible interfaces while keeping the frontend static, ultra-secure, and isolated from server-side database vulnerabilities.",
      techs: ["Headless WordPress & GraphQL", "Strapi / Sanity.io CMS", "Shopify Storefront API", "Next.js Static Revalidation (ISR)"],
      gradient: "from-[#f59e0b] to-[#ec4899]",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="bg-slate-50/60 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Background Soft Mesh Gradients for Premium Studio Feel */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#1161ed]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10 animate-float" />
      <div className="absolute top-[32%] right-[5%] w-[550px] h-[550px] bg-[#3b82f6]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10 animate-pulse duration-[12s]" />
      
      {/* Premium Dotted Grid Background */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#1161ed_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.18] -z-10 pointer-events-none select-none" />

      <div className="max-w-[1100px] mx-auto px-6 pt-16">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & CORE HEADING STATEMENT */}
        {/* ========================================================================= */}
        <header className="mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#1161ed] tracking-[0.18em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
            <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
            Performance Engine
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.08] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            High-Performance Web{" "}
            <span className="bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-sm">
              Engineering
            </span>
          </h1>

          <p className="text-[#64748B] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[800px] font-medium">
            We architect and develop enterprise-level web platforms prioritizing speed, SEO, and structural integrity. Utilizing React, Next.js, and secure backend systems, we construct highly polished digital experiences built to convert visitors and scale effortlessly.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* SECTION 2: DEVELOPMENT PILLARS & TECH STACKS */}
        {/* ========================================================================= */}
        <section className="mb-24 relative z-10">
          <div className="text-center md:text-left mb-12">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-3">
              Capabilities
            </div>
            <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight">
              Web Development Frameworks & Solutions
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-[650px]">
              Proper, production-ready technological choices designed to eliminate system lag, protect client data, and secure organic search indexing authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STACKS.map((stack, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] border border-slate-200/40 bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(17,97,237,0.02)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(17,97,237,0.09)] hover:border-[#1161ed]/30 hover:bg-white group flex flex-col justify-between min-h-[360px]"
              >
                {/* Premium Gradient Top Border Strip */}
                <div className={`h-[5px] w-full absolute top-0 left-0 bg-gradient-to-r ${stack.gradient} rounded-t-[32px]`} />

                <div>
                  {/* Icon emblem */}
                  <div className="mb-6 relative">
                    <div className="w-12 h-12 rounded-2xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center border border-[#1161ed]/10 group-hover:scale-110 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-500 shadow-sm">
                      {stack.icon}
                    </div>
                  </div>

                  <span className="text-[0.62rem] font-black uppercase text-[#1161ed] tracking-[0.15em] mb-2.5 block">
                    {stack.badge}
                  </span>
                  
                  <h3 className="text-[1.28rem] text-slate-900 mb-3.5 font-black group-hover:text-[#1161ed] transition-colors duration-300">
                    {stack.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed text-[0.84rem] mb-6">
                    {stack.desc}
                  </p>
                </div>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100/60">
                  {stack.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100/80 hover:bg-slate-100 font-mono text-[0.64rem] font-bold text-slate-600 rounded-md transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: UNDER-THE-HOOD PERFORMANCE FRAMEWORK & CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Informative Technical Benchmarks */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-3.5 w-fit">
                Performance Sweep
              </div>
              
              <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight mb-5">
                Our Core Web Performance Standards
              </h2>

              <p className="text-[#64748B] text-sm leading-relaxed mb-6 font-medium">
                We believe premium aesthetics must be supported by bulletproof technical implementations. Every web platform leaving our studio is calibrated to hit elite technical benchmarks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Brotli Compression Layers",
                    desc: "Asset packages are heavily compressed before network transfers, shrinking file payloads by up to 80% to ensure instantaneous loading.",
                  },
                  {
                    title: "Static Cache Brokerage",
                    desc: "Leveraging static incremental regeneration (ISR) and Edge server CDNs to serve page payloads within 150ms from anywhere in the world.",
                  },
                  {
                    title: "100/100 Lighthouse & SEO Metrics",
                    desc: "Engineered with semantic HTML5 hierarchies, structured metadata injections, and optimized image compression to secure top search rankings.",
                  },
                  {
                    title: "Safe Serverless API Gateways",
                    desc: "Decoupling standard routing layouts from backend APIs to prevent database injections and maintain 100% platform uptime.",
                  },
                ].map((spec, i) => (
                  <div key={i} className="p-5 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/40 shadow-[0_4px_12px_rgba(17,97,237,0.01)] hover:border-[#1161ed]/15 transition-all duration-300">
                    <h4 className="text-slate-900 font-extrabold text-[0.84rem] tracking-tight mb-1.5">{spec.title}</h4>
                    <p className="text-slate-500 text-[0.72rem] leading-relaxed font-semibold">{spec.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Glowing CTA Card */}
            <div className="lg:col-span-5 flex items-stretch">
              <div className="relative rounded-[40px] bg-[#020713] p-8 sm:p-12 text-left text-white overflow-hidden shadow-2xl flex flex-col justify-between border border-white/5 w-full">
                {/* Luminous soft mesh bubbles */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#1161ed] opacity-15 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b5cf6] opacity-10 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block bg-[#1161ed]/[0.15] text-[#3b82f6] border border-[#1161ed]/20 font-extrabold text-[0.62rem] uppercase tracking-wider px-3 py-1 rounded-md mb-6">
                    Connect With Engineers
                  </span>
                  
                  <h3 className="text-2xl sm:text-[1.8rem] font-black tracking-tight leading-tight mb-4 text-white">
                    Let&apos;s build a high-velocity web platform.
                  </h3>
                  
                  <p className="text-[#94A3B8] text-[0.84rem] leading-relaxed mb-10 font-semibold">
                    We compile modern designs into lightning-fast static systems. Partner with our developers and design studio to accelerate your platform growth.
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center py-4 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] hover:from-[#0c4ec3] hover:to-[#7c3aed] shadow-[0_6px_25px_rgba(17,97,237,0.3)] hover:shadow-[0_10px_35px_rgba(17,97,237,0.55)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-xs uppercase tracking-widest"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Embedded CSS Custom Keyframe animations for elite visual float */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
