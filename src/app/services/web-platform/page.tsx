"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WebPlatformPage() {
  // Performance Sandbox interactive mode
  const [performanceMode, setPerformanceMode] = useState<
    "unoptimized" | "caching" | "edge"
  >("edge");

  // Interactive Timeline active step
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      title: "Sub-Second Static Assets",
      desc: "Architected on Next.js, implementing CDN edge-caching and asset compression layers that guarantee sub-second initial page load times.",
      badge: "Core Performance",
      gradient: "from-[#8b5cf6] to-[#d946ef]",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    {
      title: "Clean Semantic SEO",
      desc: "Optimized HTML5 structure, schema.org injections, index tags, and 100/100 Core Web Vitals to command strong organic search indexing.",
      badge: "Search Authority",
      gradient: "from-[#1161ed] to-[#3b82f6]",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
          />
        </svg>
      ),
    },
    {
      title: "Dynamic Operational APIs",
      desc: "Constructing robust backend endpoints in Django, Node.js, or serverless functions prepared for millions of monthly API queries.",
      badge: "Enterprise API",
      gradient: "from-[#f59e0b] to-[#ec4899]",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Technical Discovery & Routing",
      subtitle: "Blueprint Stage",
      desc: "Analyzing edge routing rules, API backend payload structures, database caching options, semantic metadata keys, and critical rendering paths.",
      tools: [
        "Sitemap Specs",
        "Database Cache Profiling",
        "Figma Web Blueprint",
      ],
      preview: (
        <div className="w-full h-full border border-slate-200 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#1161ed]">
              ◇ ROUTING_MANIFEST
            </span>
            <span className="text-[0.6rem] px-2 py-0.5 rounded bg-[#1161ed]/10 text-[#1161ed] border border-[#1161ed]/20 font-black animate-pulse">
              ANALYZED
            </span>
          </div>

          <div className="flex flex-col gap-1 text-[0.62rem] bg-white/60 p-2.5 rounded-xl border border-slate-200/40 relative z-10">
            <div className="flex justify-between">
              <span className="text-slate-400">GET /api/v2/services/</span>
              <span className="text-emerald-500 font-bold">
                ➔ Cache Hit [Edge]
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">GET /api/v2/performance/</span>
              <span className="text-[#1161ed] font-bold">
                ➔ Query Optimized
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[0.6rem] text-slate-400 relative z-10 pt-1.5 border-t border-slate-200/40">
            <span>Payload Size: 1.8KB</span>
            <span>Static Cache: Active</span>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Interactive Web Engineering",
      subtitle: "Interactive Development",
      desc: "Coding robust layout structures, fluid styling tokens, responsive web modules, server actions, and deep query caches inside standard Next.js architectures.",
      tools: [
        "Next.js App Router",
        "Tailwind CSS",
        "TypeScript Engines",
        "Core Web Vitals",
      ],
      preview: (
        <div className="w-full h-full border border-slate-200 rounded-2xl bg-slate-50/70 p-4 flex flex-col gap-3 font-mono text-[0.68rem] text-slate-400 relative overflow-hidden shadow-inner">
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
          <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />

          <div className="h-6 bg-white border border-slate-200 rounded-lg flex items-center justify-between px-3 text-slate-500 shadow-sm z-10">
            <span className="text-[0.6rem]">Platform State Engine</span>
            <div className="w-3 h-3 border border-[#1161ed]/30 rounded-full animate-ping bg-[#1161ed]/20" />
          </div>

          <div className="grid grid-cols-3 gap-3 flex-1 z-10">
            <div className="border border-dashed border-slate-300 rounded-xl flex items-center justify-center p-1 bg-white/40">
              SSR Hook
            </div>
            <div className="col-span-2 border border-dashed border-[#1161ed]/30 rounded-xl flex flex-col justify-between p-3 bg-white/60">
              <div className="h-2 bg-slate-200 rounded-full w-2/3" />
              <div className="h-8 bg-[#1161ed]/5 border border-dashed border-[#1161ed]/20 rounded-lg flex items-center justify-center text-[#1161ed] text-[0.6rem] font-bold">
                {"export const runtime = 'edge';"}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Global Edge CDN Deployment",
      subtitle: "Production Optimization",
      desc: "Incorporate global serverless runtime caching, register secure SSL certificates, optimize build payload bundling, and verify sub-second loading indexes.",
      tools: [
        "Vercel Edge Platform",
        "Cloudflare CDN Router",
        "Brotli Compression",
      ],
      preview: (
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#080d19] to-[#162238] p-4 flex flex-col justify-between text-white relative overflow-hidden shadow-xl border border-white/5">
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#1161ed]/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-[#3b82f6]/20 rounded-full blur-2xl" />

          <div className="flex justify-between items-center relative z-10">
            <span className="text-[0.62rem] uppercase tracking-widest text-[#3b82f6] font-extrabold">
              Edge Engine Log
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              <span className="text-[0.58rem] font-mono text-emerald-400 font-bold">
                DEPLOY_OK
              </span>
            </div>
          </div>

          <div className="my-auto relative z-10">
            <div className="text-[0.62rem] text-slate-400 uppercase tracking-wider mb-1 font-semibold">
              Brotli Asset Compression
            </div>
            <div className="text-sm font-black tracking-tight mb-2">
              CDN Edge Caching Global
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-[#1161ed] to-[#3b82f6] w-[100%] rounded-full shadow-[0_0_10px_rgba(17,97,237,0.5)]" />
            </div>
          </div>

          <div className="flex justify-between items-center text-[0.6rem] text-slate-400 relative z-10 pt-2 border-t border-white/5">
            <span>Core Web Vitals Rating</span>
            <span className="text-emerald-400 font-black">100/100</span>
          </div>
        </div>
      ),
    },
  ];

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

        {/* Hero Section with premium typographic depth */}
        <header className="mb-24 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#1161ed] tracking-[0.18em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
            <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
            Performance Engine
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.05] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            Enterprise Scale Web{" "}
            <span className="bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-sm">
              Architecture
            </span>
          </h1>

          <p className="text-[#64748B] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[780px] font-medium">
            We build high-performance web systems utilizing React, Next.js, and
            clean web engineering. Your web platform isn&apos;t just a brochure;
            it&apos;s a fast operational system designed to scale.
          </p>
        </header>

        {/* Dynamic Performance Sandbox Workspace Section */}
        <section className="mb-28 relative z-10">
          {/* Header Controls for Sandbox */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                Live Interactive Benchmarks
              </div>
              <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight">
                Edge Loading & SEO Simulator
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Interact with the selectors below to view how direct origin
                routing compares directly to global serverless caching and
                Brotli compression.
              </p>
            </div>

            {/* Premium Selector Switchers */}
            <div className="flex p-1.5 bg-slate-200/50 backdrop-blur-md border border-slate-200/60 rounded-[20px] w-full md:w-auto shadow-inner">
              {(["unoptimized", "caching", "edge"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setPerformanceMode(mode)}
                  className={`flex-1 md:flex-initial px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                    performanceMode === mode
                      ? "bg-white text-[#1161ed] shadow-[0_8px_20px_rgba(17,97,237,0.08)] scale-[1.02]"
                      : "text-slate-600 hover:text-[#1161ed]"
                  }`}
                >
                  {mode === "unoptimized"
                    ? "Direct Node"
                    : mode === "caching"
                      ? "Origin Cache"
                      : "Global Edge"}
                </button>
              ))}
            </div>
          </div>

          {/* Master Interactive Workspace Container */}
          <div className="w-full bg-[#05080f] border border-slate-800/80 rounded-[40px] p-6 sm:p-12 shadow-2xl relative overflow-hidden min-h-[460px] flex flex-col md:flex-row gap-10 items-center justify-between">
            {/* Luminous Inner Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1161ed]/[0.18] rounded-full blur-[110px] pointer-events-none" />

            {/* Sidebar Code Variable Panel */}
            <div className="w-full md:w-[330px] shrink-0 z-10 flex flex-col gap-4 font-mono text-[0.72rem] text-slate-400">
              <div className="pb-3 border-b border-slate-800 flex justify-between items-center">
                <span className="text-[#1161ed] font-extrabold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1161ed] animate-ping" />
                  speed_metrics_config.json
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[0.6rem] font-bold text-slate-500">
                  NextJS Engine
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 flex flex-col gap-3.5 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Server Caching Layer</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/50 text-[#1161ed] font-bold">
                    {performanceMode === "edge"
                      ? "Brotli + Edge Global"
                      : performanceMode === "caching"
                        ? "Origin Region Memory"
                        : "No Cache Layer"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Lighthouse SEO Score</span>
                  <span
                    className={`font-bold ${performanceMode === "edge" ? "text-emerald-400" : performanceMode === "caching" ? "text-yellow-400" : "text-red-400"}`}
                  >
                    {performanceMode === "edge"
                      ? "100 / 100 Perfect"
                      : performanceMode === "caching"
                        ? "88 / 100 Stable"
                        : "34 / 100 Critical"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Initial Page Load</span>
                  <span className="text-[#3b82f6] font-bold">
                    {performanceMode === "edge"
                      ? "0.18s (Instant)"
                      : performanceMode === "caching"
                        ? "1.2s (Moderate)"
                        : "4.8s (Delayed)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">API Response Speed</span>
                  <span className="text-[#3b82f6] font-bold">
                    {performanceMode === "edge"
                      ? "12ms Latency"
                      : performanceMode === "caching"
                        ? "85ms Latency"
                        : "480ms Latency"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Total Blocking Time</span>
                  <span className="text-yellow-400 font-bold">
                    {performanceMode === "edge"
                      ? "10ms Optimal"
                      : performanceMode === "caching"
                        ? "120ms Medium"
                        : "1,200ms Blocking"}
                  </span>
                </div>
              </div>

              {/* Dynamic JSON / CSS Tagging panel */}
              <div className="p-5 rounded-3xl bg-slate-900/40 border border-dashed border-slate-800 flex flex-col gap-2">
                <div className="text-[0.62rem] text-slate-500">
                  {"/* routing compiler configuration */"}
                </div>
                <code className="text-[#1161ed] font-bold text-[0.68rem] leading-relaxed whitespace-pre-wrap">
                  {performanceMode === "unoptimized" &&
                    "// Direct origin request routing\nexport const dynamic = 'force-dynamic';\n// Payload unfiltered server fetch\nconst data = await db.fetch();"}
                  {performanceMode === "caching" &&
                    "// Static with periodic cache reload\nexport const revalidate = 3600;\n// Local region server cached fetches\nconst data = await memoryCache.get();"}
                  {performanceMode === "edge" &&
                    "// Serverless edge deployment router\nexport const runtime = 'edge';\n// Multi-zone global CDN cache broker\nexport const headers = { 'Cache-Control': 's-maxage=31536000' };"}
                </code>
              </div>
            </div>

            {/* Sandbox Visual Output Container */}
            <div className="w-full flex-1 flex items-center justify-center p-2 z-10">
              {/* Output Frame Mockup */}
              <div
                className={`w-full max-w-[420px] transition-all duration-500 p-8 ${
                  performanceMode === "unoptimized"
                    ? "bg-transparent border-[2.2px] border-dashed border-slate-700 rounded-none shadow-none text-slate-500"
                    : performanceMode === "caching"
                      ? "bg-[#0b0f19] border border-purple-500/40 rounded-[28px] text-purple-200 shadow-xl relative"
                      : "bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[32px] text-white shadow-[0_25px_60px_rgba(17,97,237,0.2)] relative"
                }`}
              >
                {/* Visual state overlays in Caching mode */}
                {performanceMode === "caching" && (
                  <div className="absolute top-0 left-1/2 -translate-y-1/2 bg-purple-500 text-white font-mono text-[0.58rem] px-2.5 py-0.5 rounded shadow-md z-20">
                    static_cache: warm
                  </div>
                )}

                {/* Inside Component Rendering */}
                <div className="flex flex-col gap-6">
                  {/* Dashboard Header */}
                  <div
                    className={`flex justify-between items-center pb-4 ${
                      performanceMode === "unoptimized"
                        ? "border-b border-slate-700 border-dashed"
                        : performanceMode === "caching"
                          ? "border-b border-purple-900/50"
                          : "border-b border-white/10"
                    }`}
                  >
                    {performanceMode === "unoptimized" ? (
                      <>
                        <div className="w-24 h-4 bg-slate-800 rounded-none" />
                        <div className="w-8 h-8 rounded-none border border-slate-700 border-dashed" />
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col">
                          <span
                            className={`text-[0.62rem] font-mono tracking-[0.2em] uppercase ${performanceMode === "caching" ? "text-purple-400 font-bold" : "text-[#1161ed] font-black"}`}
                          >
                            Edge Node Viewport
                          </span>
                          <span className="text-sm font-black tracking-tight mt-0.5">
                            Core Web Vitals
                          </span>
                        </div>
                        <div
                          className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm ${performanceMode === "caching" ? "bg-purple-900/40 border border-purple-500/30 text-purple-300" : "bg-white/10 text-white"}`}
                        >
                          E1
                        </div>
                      </>
                    )}
                  </div>

                  {/* Body Content simulation */}
                  {performanceMode === "unoptimized" ? (
                    <div className="flex flex-col gap-4">
                      <div className="h-6 w-full bg-slate-800/60 border border-dashed border-slate-700 flex items-center justify-center text-[0.6rem] text-red-400 font-bold">
                        [ERROR] Blocking Thread Render (FCP: 4.8s)
                      </div>
                      <div className="h-20 w-full bg-slate-800/40 border border-dashed border-slate-700 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-dashed border-slate-600 rounded-full animate-spin" />
                      </div>
                    </div>
                  ) : performanceMode === "caching" ? (
                    <div className="flex flex-col gap-4">
                      <div className="relative border border-dashed border-purple-500/30 p-4 rounded-xl bg-purple-950/20">
                        <span className="text-[0.65rem] text-purple-300 block mb-1 font-bold">
                          Average Page Metrics
                        </span>
                        <div className="flex justify-between text-white text-[0.8rem] font-bold mt-1">
                          <span>FCP: 1.2s</span>
                          <span className="text-yellow-400">Moderate Load</span>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-purple-950/60 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[78%]" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5">
                      {/* Beautiful Neon glassmorphic details pane inside HIFI dashboard preview */}
                      <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col justify-between relative overflow-hidden shadow-inner">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#1161ed]/15 rounded-full blur-lg" />
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[0.68rem] font-bold text-slate-400 tracking-wider">
                            CDN Response Rating
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-[0.58rem] font-black uppercase tracking-widest animate-pulse border border-emerald-400/10">
                            Excellent (100)
                          </span>
                        </div>
                        <span className="text-[1.9rem] font-black tracking-tight leading-none text-white">
                          0.18s
                        </span>

                        {/* Dynamic Neon Visual SVG Path Line Graph */}
                        <div className="mt-5 h-16 w-full relative">
                          <svg
                            className="w-full h-full overflow-visible"
                            viewBox="0 0 100 30"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id="neonGlow"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                              >
                                <stop offset="0%" stopColor="#1161ed" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                              </linearGradient>
                            </defs>
                            {/* Area Fill */}
                            <path
                              d="M0,30 L15,10 L30,22 L45,6 L60,18 L75,2 L90,8 L100,0 L100,30 Z"
                              fill="url(#neonGlow)"
                              fillOpacity="0.08"
                            />
                            {/* Stroke Path */}
                            <path
                              d="M0,30 L15,10 L30,22 L45,6 L60,18 L75,2 L90,8 L100,0"
                              fill="none"
                              stroke="url(#neonGlow)"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              className="animate-svg-draw"
                            />
                            {/* Pulsing indicator node */}
                            <circle
                              cx="100"
                              cy="0"
                              r="3.5"
                              fill="#8b5cf6"
                              className="animate-ping"
                            />
                            <circle cx="100" cy="0" r="2" fill="#fff" />
                          </svg>
                        </div>
                      </div>

                      {/* Interactive compiler button with neon drop-shadow */}
                      <button className="w-full py-3.5 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] rounded-xl text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(17,97,237,0.35)] hover:shadow-[0_8px_30px_rgba(17,97,237,0.5)] hover:-translate-y-0.5 active:scale-98 transition-all duration-300">
                        Compile Build Optimization
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upgraded Capabilities Grid in premium frosted-glass design */}
        <section className="mb-28 border-t border-slate-200/50 pt-16 relative">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Capabilities
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Web Engineering Excellence
            </h2>
            <p className="text-slate-500 text-sm max-w-[500px] mx-auto mt-2 leading-relaxed">
              We compile highly robust static structures, API gateways, and
              routing layers tailored to global startup scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] border border-slate-200/40 bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(17,97,237,0.02)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(17,97,237,0.09)] hover:border-[#1161ed]/30 hover:bg-white group flex flex-col justify-between min-h-[290px]"
              >
                {/* Premium Accent Top Border in Brand Gradient */}
                <div
                  className={`h-[5px] w-full absolute top-0 left-0 bg-gradient-to-r ${cap.gradient} rounded-t-[32px]`}
                />

                <div>
                  {/* Icon Container with radial backdrop shine */}
                  <div className="mb-8 relative">
                    <div className="w-13 h-13 rounded-2xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center border border-[#1161ed]/10 group-hover:scale-110 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-500 shadow-sm">
                      {cap.icon}
                    </div>
                  </div>
                  <span className="text-[0.62rem] font-black uppercase text-[#1161ed] tracking-[0.15em] mb-2 block">
                    {cap.badge}
                  </span>
                  <h3 className="text-[1.2rem] text-slate-900 mb-3 font-black group-hover:text-[#1161ed] transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[0.82rem]">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Roadmap Section (Dynamic, click-interactive step selector) */}
        <section className="py-20 border-t border-slate-200/50 mb-24 relative">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Studio Methodology
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Frictionless Execution Map
            </h2>
            <p className="text-slate-500 text-sm max-w-[520px] mx-auto mt-2 leading-relaxed">
              Click each milestone phase below to review our specific
              activities, tools used, and structural preview deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1100px] mx-auto items-center relative z-10">
            {/* Left Steps selectors with hover transforms */}
            <div className="lg:col-span-5 flex flex-col gap-4.5">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex gap-5 p-5 rounded-[24px] border transition-all duration-300 cursor-pointer relative group overflow-hidden ${
                      isActive
                        ? "bg-white shadow-[0_20px_40px_rgba(17,97,237,0.06)] border-[#1161ed]/20 scale-[1.03]"
                        : "bg-transparent border-transparent hover:border-slate-300/40"
                    }`}
                  >
                    {/* Left Brand Line accent */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#1161ed] via-[#3b82f6] to-[#8b5cf6]" />
                    )}

                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 font-black text-sm shadow-sm ${
                        isActive
                          ? "bg-[#1161ed] text-white"
                          : "bg-[#1161ed]/[0.08] text-[#1161ed] group-hover:bg-[#1161ed]/[0.15]"
                      }`}
                    >
                      {step.num}
                    </div>
                    <div>
                      <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#64748B] block mb-0.5">
                        {step.subtitle}
                      </span>
                      <h4
                        className={`text-[0.98rem] font-black transition-colors ${isActive ? "text-[#1161ed]" : "text-slate-900 group-hover:text-[#1161ed]"}`}
                      >
                        {step.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Active Step visual preview box */}
            <div className="lg:col-span-7 z-10">
              <div className="bg-white rounded-[36px] border border-slate-200/40 p-8 shadow-[0_8px_30px_rgba(17,97,237,0.01)] min-h-[390px] flex flex-col justify-between relative group hover:shadow-[0_25px_50px_rgba(17,97,237,0.07)] hover:border-[#1161ed]/20 transition-all duration-500">
                {/* Visual Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] rounded-t-[36px]" />

                <div>
                  <span className="text-[0.62rem] font-black tracking-widest text-[#1161ed] uppercase block mb-1">
                    Methodology Stage {steps[activeStep].num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {steps[activeStep].desc}
                  </p>

                  {/* Interactive Phase Preview component */}
                  <div className="w-full h-40 mb-6 group-hover:scale-[1.01] transition-transform duration-300">
                    {steps[activeStep].preview}
                  </div>
                </div>

                {/* System Tools Used Badger bar */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 text-[0.65rem] font-bold text-slate-400">
                  <span>STAGE TOOLKIT:</span>
                  {steps[activeStep].tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-600 rounded-lg transition-colors font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Navy CTA Section with glowing grid borders */}
        <section className="relative rounded-[40px] bg-[#020713] p-10 sm:p-20 text-center text-white overflow-hidden shadow-2xl z-10 mt-16 max-w-[1100px] mx-auto border border-white/5">
          {/* Luminous soft mesh bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1161ed] opacity-15 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6] opacity-10 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

          <div className="relative z-10 max-w-[650px] mx-auto">
            <h2 className="text-3xl sm:text-[2.8rem] font-black tracking-tight leading-tight mb-5 text-white">
              Ready to Launch a High-Velocity Web Platform?
            </h2>
            <p className="text-[#94A3B8] max-w-[540px] mx-auto text-[0.92rem] leading-relaxed mb-10 font-medium">
              Our Next.js developers are prepared to design and code your web
              platform from mockup to CDN edge. Reach out to coordinate today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] hover:from-[#0c4ec3] hover:to-[#7c3aed] shadow-[0_6px_25px_rgba(17,97,237,0.3)] hover:shadow-[0_10px_35px_rgba(17,97,237,0.55)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-widest"
            >
              Start Your Project
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
        @keyframes svgDraw {
          from {
            stroke-dashoffset: 200;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 9s ease-in-out infinite;
        }
        .animate-svg-draw {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: svgDraw 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards infinite;
        }
      `}</style>
    </div>
  );
}
