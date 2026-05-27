"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WorkPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Aura Premium Apparel",
      category: "ecommerce",
      categoryLabel: "Shopify E-Commerce",
      desc: "Full custom Shopify store setup, product template optimizations, custom animations, and lightning checkout speed integration.",
      stat: "40% conversion increase",
      badge: "E-Com Elite",
      gradient: "from-[#8b5cf6] to-[#d946ef]",
      tools: ["Shopify Liquid", "Tailwind CSS", "Alpine.js"],
      preview: (
        <div className="w-full h-full border border-slate-200/50 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#d946ef_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#d946ef]">AURA_CORE_V2</span>
            <span className="text-[0.6rem] px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-black">IN_STOCK</span>
          </div>
          <div className="flex justify-between items-center z-10 bg-white/60 p-2.5 rounded-xl border border-slate-200/40">
            <div className="flex flex-col gap-0.5">
              <span className="font-black text-slate-800">Classic Cashmere Hoodie</span>
              <span className="text-slate-400 text-[0.6rem]">$240.00</span>
            </div>
            <button className="px-2.5 py-1 bg-[#d946ef] text-white rounded-lg text-[0.55rem] font-black uppercase hover:bg-[#c084fc] transition-colors">
              Add To Cart
            </button>
          </div>
          <div className="flex justify-between text-[0.58rem] text-slate-400 pt-1.5 border-t border-slate-200/40 z-10">
            <span>Server Latency: 120ms</span>
            <span className="font-bold text-[#d946ef]">Checkout Sync: OK</span>
          </div>
        </div>
      )
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "webapp",
      categoryLabel: "Web Application",
      desc: "Real-time analytics portal featuring complex charts, secure Django user authentication, and Next.js frontend state caches.",
      stat: "Sub-second database query loads",
      badge: "Active Portal",
      gradient: "from-[#1161ed] to-[#3b82f6]",
      tools: ["Next.js", "Django REST", "PostgreSQL", "Recharts"],
      preview: (
        <div className="w-full h-full border border-slate-200 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#1161ed]">◇ SYS_ANALYTICS</span>
            <span className="text-[0.55rem] px-2 py-0.5 rounded bg-[#1161ed]/10 text-[#1161ed] font-black animate-pulse">2,840 NOW</span>
          </div>
          <div className="flex gap-1.5 items-end justify-center h-14 z-10">
            <div className="w-3 bg-slate-200 rounded-t h-[40%]" />
            <div className="w-3 bg-slate-200 rounded-t h-[65%]" />
            <div className="w-3 bg-[#1161ed] rounded-t h-[85%] shadow-[0_2px_8px_rgba(17,97,237,0.3)]" />
            <div className="w-3 bg-slate-300 rounded-t h-[50%]" />
            <div className="w-3 bg-[#3b82f6] rounded-t h-[92%] shadow-[0_2px_8px_rgba(59,130,246,0.3)] animate-pulse" />
          </div>
          <div className="flex justify-between items-center text-[0.58rem] text-slate-400 pt-1.5 border-t border-slate-200/40 z-10">
            <span>DB latency: 14ms</span>
            <span>Query cache: 99.4%</span>
          </div>
        </div>
      )
    },
    {
      title: "Apex Venture Capital",
      category: "webdev",
      categoryLabel: "Website Development",
      desc: "High-end corporate portfolio website built with premium typography, elegant scrolling gestures, and headless CMS capabilities.",
      stat: "Perfect 100/100 Lighthouse performance",
      badge: "Lighthouse 100",
      gradient: "from-[#f59e0b] to-[#ec4899]",
      tools: ["Next.js", "Framer Motion", "Sanity CMS"],
      preview: (
        <div className="w-full h-full border border-slate-200 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#ec4899]">APEX_PORTFOLIO</span>
            <div className="flex gap-1 font-Outfit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[0.55rem] font-black text-emerald-600">SEO_SECURE</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 z-10 py-1">
            <div className="text-[0.62rem] font-extrabold text-slate-700 tracking-tight leading-tight uppercase font-Outfit">
              Backing visionary founders.
            </div>
            <div className="flex gap-1.5">
              <span className="px-2 py-0.5 rounded bg-slate-200/80 text-[0.55rem] text-slate-500">Fund IV</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/80 text-[0.55rem] text-slate-500">$500M+ AUM</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[0.58rem] text-slate-400 pt-1.5 border-t border-slate-200/40 z-10">
            <span>Aesthetics: Premium</span>
            <span className="text-emerald-600 font-extrabold">LIGHTHOUSE: 100/100</span>
          </div>
        </div>
      )
    },
    {
      title: "Zenith Logo & Brand Book",
      category: "design",
      categoryLabel: "Logo & Brand Design",
      desc: "Modern minimalist logo configuration, font standard guides, brand identity color templates, and vector assets set.",
      stat: "Premium brand launch ready",
      badge: "Vector Master",
      gradient: "from-[#10b981] to-[#059669]",
      tools: ["Adobe Illustrator", "Figma", "Brand Standards"],
      preview: (
        <div className="w-full h-full border border-slate-200 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:14px_14px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#10b981]">ZENITH_BRAND_KIT</span>
            <span className="text-[0.58rem] px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] font-black">SVG_VECTOR</span>
          </div>
          <div className="flex items-center justify-center gap-3 z-10 py-1.5">
            <div className="relative w-11 h-11 border border-dashed border-slate-300 rounded-full flex items-center justify-center">
              <div className="absolute w-8 h-8 border border-dashed border-[#10b981]/40 rounded-full" />
              <div className="w-5 h-5 bg-gradient-to-tr from-[#10b981] to-emerald-400 rounded-lg rotate-45 shadow-[0_0_12px_rgba(16,185,129,0.3)]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-black text-slate-800 tracking-wider">ZENITH CORP.</span>
              <span className="text-[0.55rem] text-slate-400">Outfit Black / Kern 1.25</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[0.58rem] text-slate-400 pt-1.5 border-t border-slate-200/40 z-10">
            <span>Golden Ratio: Valid</span>
            <span>Palette: HSL-Balanced</span>
          </div>
        </div>
      )
    },
    {
      title: "Hyperion Product Launch Film",
      category: "video",
      categoryLabel: "Video Editing",
      desc: "Cinematic promotional launch clip combining expert cuts, premium sound layout, and sleek motion graphics overlay.",
      stat: "500K+ organic social impressions",
      badge: "Cinematic 4K",
      gradient: "from-[#ef4444] to-[#f97316]",
      tools: ["DaVinci Resolve", "After Effects", "Sound Design"],
      preview: (
        <div className="w-full h-full border border-slate-200 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#ef4444]">HYPERION_LAUNCH_FILM</span>
            <span className="text-[0.55rem] px-2 py-0.5 rounded bg-red-100 text-red-600 font-black animate-pulse">4K UHD</span>
          </div>
          <div className="flex flex-col gap-1.5 z-10">
            <div className="h-6 w-full bg-slate-900 rounded-lg flex items-center justify-between px-2.5 text-slate-400">
              <span className="text-[0.55rem] text-emerald-400">▶ PLAYING</span>
              <div className="flex gap-0.5">
                <span className="w-[1.5px] h-3 bg-red-500 animate-bounce" />
                <span className="w-[1.5px] h-2.5 bg-red-400 animate-bounce delay-75" />
                <span className="w-[1.5px] h-3.5 bg-red-500 animate-bounce delay-150" />
                <span className="w-[1.5px] h-2 bg-red-300 animate-bounce delay-300" />
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-[62%] rounded-full" />
            </div>
          </div>
          <div className="flex justify-between items-center text-[0.58rem] text-slate-400 pt-1.5 border-t border-slate-200/40 z-10">
            <span>Duration: 01:30</span>
            <span className="font-bold text-[#ef4444]">Render Cache: OK</span>
          </div>
        </div>
      )
    },
    {
      title: "Vapor Running Shoes",
      category: "ecommerce",
      categoryLabel: "Shopify E-Commerce",
      desc: "High-performance shoe catalog building, Shopify checkout integrations, custom filter options, and mobile-first gestures.",
      stat: "2.1s average page load speed",
      badge: "Shopify Performance",
      gradient: "from-[#06b6d4] to-[#3b82f6]",
      tools: ["Shopify Liquid", "Tailwind CSS", "JavaScript SDK"],
      preview: (
        <div className="w-full h-full border border-slate-200 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient-[#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#06b6d4]">VAPOR_SHOES_V2</span>
            <span className="text-[0.6rem] px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-black">FAST_LOAD</span>
          </div>
          <div className="flex flex-col gap-2 z-10">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800">Vapor Swift-X Sneaker</span>
              <span className="text-slate-400 font-bold">$185</span>
            </div>
            <div className="flex gap-1 justify-start">
              <span className="px-2 py-0.5 rounded border border-slate-200 text-[0.55rem]">Size 9</span>
              <span className="px-2 py-0.5 rounded border border-[#06b6d4] text-[0.55rem] text-[#06b6d4] font-bold">Size 10</span>
              <span className="px-2 py-0.5 rounded border border-slate-200 text-[0.55rem]">Size 11</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[0.58rem] text-slate-400 pt-1.5 border-t border-slate-200/40 z-10">
            <span>Mobile FPS: 60/60</span>
            <span className="font-bold text-[#06b6d4]">Page Speed: 2.1s</span>
          </div>
        </div>
      )
    }
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "webdev", label: "Websites" },
    { id: "webapp", label: "Web Apps" },
    { id: "ecommerce", label: "Shopify" },
    { id: "design", label: "Brand Design" },
    { id: "video", label: "Video Editing" }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-slate-50/60 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Animated Floating Luminous Mesh Background Orbs */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#1161ed]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10 animate-float" />
      <div className="absolute top-[32%] right-[5%] w-[550px] h-[550px] bg-[#3b82f6]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10 animate-pulse duration-[12s]" />
      <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-[#8b5cf6]/[0.02] rounded-full blur-[130px] pointer-events-none select-none -z-10 animate-float-reverse" />

      {/* Luminous Dotted Grid Background Pattern */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#1161ed_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.22] -z-10 pointer-events-none select-none" />

      <div className="max-w-[1100px] mx-auto px-6 pt-16">
        {/* Back navigation with enhanced micro-animations */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 bg-white/80 hover:bg-white backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-wider mb-14 border border-slate-200/50 shadow-[0_4px_15px_rgba(17,97,237,0.02)] hover:shadow-[0_8px_25px_rgba(17,97,237,0.06)] transition-all duration-300 hover:-translate-x-1"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="rotate-180 transition-transform"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          Services Hub
        </Link>

        {/* Hero Header Section */}
        <header className="mb-16 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#1161ed] tracking-[0.18em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
            <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
            OUR PORTFOLIO
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.05] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            Selected{" "}
            <span className="bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-sm">
              Studio Projects
            </span>
          </h1>

          <p className="text-[#64748B] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[780px] font-medium">
            Explore how we partner with global startup brands to build custom web applications, high performance websites, Shopify hubs, branding visual systems, and motion media assets.
          </p>
        </header>

        {/* Premium Filter Tabs Switcher */}
        <div className="flex p-1.5 bg-slate-200/50 backdrop-blur-md border border-slate-200/60 rounded-[24px] max-w-full overflow-x-auto gap-1 mb-14 shadow-inner no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-3 rounded-xl font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                filter === cat.id
                  ? "bg-white text-[#1161ed] shadow-[0_8px_20px_rgba(17,97,237,0.08)] scale-[1.02]"
                  : "text-slate-600 hover:text-[#1161ed]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] z-10 relative">
          {filteredProjects.map((proj, idx) => (
            <article
              key={idx}
              className="p-6 rounded-[32px] border border-slate-200/40 bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(17,97,237,0.02)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(17,97,237,0.09)] hover:border-[#1161ed]/30 hover:bg-white group flex flex-col justify-between min-h-[440px]"
            >
              {/* Premium Gradient Top Stripe */}
              <div
                className={`h-[5px] w-full absolute top-0 left-0 bg-gradient-to-r ${proj.gradient} rounded-t-[32px]`}
              />

              <div className="flex flex-col gap-5 flex-grow">
                {/* Header Information */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[0.62rem] font-black uppercase text-[#1161ed] tracking-[0.15em]">
                      {proj.categoryLabel}
                    </span>
                    <span className="text-[0.6rem] px-2 py-0.5 rounded bg-slate-100 font-mono text-slate-500 font-bold border border-slate-200/50">
                      {proj.badge}
                    </span>
                  </div>
                  <h3 className="text-[1.25rem] text-slate-900 font-black group-hover:text-[#1161ed] transition-colors duration-300 leading-tight">
                    {proj.title}
                  </h3>
                </div>

                {/* Simulated Custom Live Interactive Preview Container */}
                <div className="h-36 w-full relative">
                  {proj.preview}
                </div>

                {/* Description details */}
                <p className="text-slate-500 leading-relaxed text-[0.82rem] font-medium">
                  {proj.desc}
                </p>
              </div>

              {/* Bottom section with tools and statistics highlights */}
              <div className="mt-5 flex flex-col gap-4.5 pt-4 border-t border-slate-100/80">
                {/* Tool Badges */}
                <div className="flex flex-wrap gap-1">
                  {proj.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 font-mono text-[0.58rem] text-slate-500 rounded border border-slate-200/40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Animated Pulsing Status Stat Box */}
                <div className="flex items-center gap-2.5 relative">
                  <div className="flex items-center justify-center w-2 h-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-[0.72rem] font-extrabold text-slate-800 tracking-tight uppercase">
                    {proj.stat}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Premium Navy CTA Section with glowing grid borders */}
        <section className="relative rounded-[40px] bg-[#020713] p-10 sm:p-20 text-center text-white overflow-hidden shadow-2xl z-10 mt-28 max-w-[1100px] mx-auto border border-white/5">
          {/* Luminous soft mesh bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1161ed] opacity-15 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6] opacity-10 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

          <div className="relative z-10 max-w-[650px] mx-auto">
            <h2 className="text-3xl sm:text-[2.8rem] font-black tracking-tight leading-tight mb-5 text-white">
              Have a Custom Project in Mind?
            </h2>
            <p className="text-[#94A3B8] max-w-[540px] mx-auto text-[0.92rem] leading-relaxed mb-10 font-medium">
              We are ready to build a high-performance web setup for your company. Fill out our budget and project estimator.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] hover:from-[#0c4ec3] hover:to-[#7c3aed] shadow-[0_6px_25px_rgba(17,97,237,0.3)] hover:shadow-[0_10px_35px_rgba(17,97,237,0.55)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-widest"
            >
              Estimate Project Now
            </Link>
          </div>
        </section>
      </div>

      {/* Embedded CSS Custom Keyframe animations for elite visual wow factors */}
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
        @keyframes float-reverse {
          0% {
            transform: translateY(0px) scale(1.05);
          }
          50% {
            transform: translateY(20px) scale(1);
          }
          100% {
            transform: translateY(0px) scale(1.05);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 9s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
