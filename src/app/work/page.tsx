"use client";

import React from "react";
import Link from "next/link";

export default function WorkPage() {
  const PROJECTS = [
    {
      title: "Placfy AI",
      category: "AI & Platform Engineering",
      badge: "AI-Powered Systems",
      desc: "Full custom engineering of an autonomous talent recruitment matching platform. Implemented advanced semantic vector database search filters and real-time applicant indexing pipelines.",
      stat: "45% Match Speed Optimization",
      gradient: "from-[#1161ed] to-[#3b82f6]",
      tools: ["Next.js App Router", "FastAPI", "VectorDB", "Tailwind CSS"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096L9 21zm0 0h4.906M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707-.707m2.828 9.9a5 5 0 113.626 0" />
        </svg>
      ),
    },
    {
      title: "ThinknShop",
      category: "Headless E-Commerce",
      badge: "thinknshop.in",
      desc: "Architected a high-velocity headless Shopify storefront, integrating sub-second static page generation (ISR), customized inventory grids, and frictionless checkout pipelines.",
      stat: "2.4s Average Load Time Reduction",
      gradient: "from-[#8b5cf6] to-[#d946ef]",
      tools: ["Next.js (React 19)", "Shopify Storefront API", "Tailwind CSS v4"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-75 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
    },
    {
      title: "Naya-Job",
      category: "Full-Stack Portal",
      badge: "Job Search Engine",
      desc: "Designed and engineered a robust digital jobs board engine and applicant management system. Optimized high-concurrency database queries for rapid candidate screening.",
      stat: "Sub-Second Database Query Loads",
      gradient: "from-[#f59e0b] to-[#ec4899]",
      tools: ["React 19", "TypeScript", "Express Backend", "PostgreSQL"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0a9.003 9.003 0 00-16.5 0m16.5 0c0-.18-.009-.36-.027-.539M3.75 14.15c0-.18.017-.36.053-.539m16.42 0a4.5 4.5 0 00-16.42 0" />
        </svg>
      ),
    },
    {
      title: "Caldreplus",
      category: "Custom SaaS System",
      badge: "Calendar & Scheduling",
      desc: "Developed a premium scheduling workflow utility, integrating advanced multi-timezone calendar hooks, drag-and-drop booking slots, and automated meeting notification triggers.",
      stat: "99.9% System Notification Uptime",
      gradient: "from-[#10b981] to-[#059669]",
      tools: ["Next.js App Router", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
      ),
    },
    {
      title: "WebProArts",
      category: "Creative Media Portal",
      badge: "Custom Brand & Identity",
      desc: "Designed an atomic digital brand identity and developed a high-fidelity media portfolio hub featuring high-concurrency vector asset downloads and fluid animations.",
      stat: "100/100 Lighthouse Performance",
      gradient: "from-[#ef4444] to-[#f97316]",
      tools: ["Figma Systems", "Next.js", "TypeScript", "Framer Motion"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
        {/* SECTION 1: HERO HEADER (Simplified, No Back Button) */}
        {/* ========================================================================= */}
        <header className="mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#1161ed] tracking-[0.18em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
            <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
            OUR PORTFOLIO
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.08] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            Selected{" "}
            <span className="bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-sm">
              Studio Projects
            </span>
          </h1>

          <p className="text-[#64748B] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[800px] font-medium">
            Explore how we partner with forward-thinking brands and startups to design, build, and deploy custom web solutions. From custom SaaS engines to high-velocity headless commerce platforms, we build digital products engineered to perform.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* SECTION 2: FEATURED CLIENT CASE STUDIES GRID */}
        {/* ========================================================================= */}
        <section className="mb-24 relative z-10">
          <div className="text-center md:text-left mb-12">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-3">
              Case Studies
            </div>
            <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight">
              Real Work, Measured Results
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-[650px]">
              Review the detailed specifications of systems we have coded and shipped to production for active startup networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] border border-slate-200/40 bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(17,97,237,0.02)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(17,97,237,0.09)] hover:border-[#1161ed]/30 hover:bg-white group flex flex-col justify-between min-h-[360px]"
              >
                {/* Premium Gradient Top Border Strip */}
                <div className={`h-[5px] w-full absolute top-0 left-0 bg-gradient-to-r ${proj.gradient} rounded-t-[32px]`} />

                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[0.62rem] font-black uppercase text-[#1161ed] tracking-[0.15em]">
                      {proj.category}
                    </span>
                    <span className="text-[0.6rem] px-2.5 py-1 rounded-lg bg-slate-100/90 font-Outfit text-slate-500 font-bold border border-slate-200/50 shadow-sm">
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="text-[1.28rem] text-slate-900 mb-3.5 font-black group-hover:text-[#1161ed] transition-colors duration-300 leading-tight">
                    {proj.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed text-[0.84rem] mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100/60">
                  {/* Toolkits */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-100/80 hover:bg-slate-100 font-mono text-[0.64rem] font-bold text-slate-600 rounded-md transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Pulsing Uptime Stat Highlight */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-2 h-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="text-[0.72rem] font-extrabold text-slate-800 tracking-tight uppercase">
                      {proj.stat}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: ARCHITECTURAL PERFORMANCE STANDARDS & CTA */}
        {/* ========================================================================= */}
        <section className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Technical Guidelines */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-3.5 w-fit">
                Production Standards
              </div>
              
              <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight mb-5">
                Our Architectural Benchmarks
              </h2>

              <p className="text-[#64748B] text-sm leading-relaxed mb-6 font-medium">
                We approach design and systems development with mathematical rigor. Every case study displayed represents thousands of lines of optimized code formulated to operate under direct compliance with modern web metrics:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Bespoke System Integrations",
                    desc: "Skip legacy agency boilerplate. We custom-code layouts, database configurations, and automation structures mapped exactly to client needs.",
                  },
                  {
                    title: "Lightning Core Web Vitals",
                    desc: "Engineered from day one for sub-second visual renders, clean layout stability, and zero render-blocking bundle payloads.",
                  },
                  {
                    title: "Rigorous Code Optimization",
                    desc: "Writing semantic schemas and modular components using TypeScript engines to completely prevent system type mismatches.",
                  },
                  {
                    title: "Global CDN Content Edge",
                    desc: "Deploying production builds onto edge serverless brokers to guarantee complete layout caching and zero latency drag.",
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
                    Have a custom project request?
                  </h3>
                  
                  <p className="text-[#94A3B8] text-[0.84rem] leading-relaxed mb-10 font-semibold">
                    Coordinate with our engineering and visual design studio to launch high-performance digital products designed to scale from prototype to CDN edge.
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
