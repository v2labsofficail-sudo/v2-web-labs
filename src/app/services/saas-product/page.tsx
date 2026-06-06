"use client";

import React, { useState } from "react";
import Link from "next/link";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";
import Image from "next/image";

const SVG = {
  Nextjs: () => (
    <svg className="w-5 h-5 text-[#00D8FF]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  Django: () => (
    <svg className="w-5 h-5 text-[#092E20]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M17 17l-5 2.5L7 17M2 17l10 5 10-5" />
    </svg>
  ),
  Stripe: () => (
    <svg className="w-5 h-5 text-[#635BFF]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  ),
  AWS: () => (
    <svg className="w-5 h-5 text-[#FF9900]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Redis: () => (
    <svg className="w-5 h-5 text-[#D82C20]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Postgres: () => (
    <svg className="w-5 h-5 text-[#336791]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  OpenAI: () => (
    <svg className="w-5 h-5 text-[#10A37F]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20M12 12m-4 0a4 4 0 108 0 4 4 0 10-8 0" />
    </svg>
  ),
  Docker: () => (
    <svg className="w-5 h-5 text-[#2496ED]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="6" y1="21" x2="18" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Gemini: () => (
    <svg className="w-5 h-5 text-[#1a73e8]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  TypeScript: () => (
    <svg className="w-5 h-5 text-[#3178C6]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 7h8M12 7v10" />
    </svg>
  ),
  Database: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  )
};

export default function SaasProductPage() {
  const [activeArchStep, setActiveArchStep] = useState<number | null>(null);

  // Stats / Credibility Section
  const stats = [
    { value: "8+", label: "SaaS Products Built" },
    { value: "64+", label: "Multi-Platform Syncs" },
    { value: "99.95%", label: "System Service Uptime" },
    { value: "100%", label: "API-Driven Architecture" },
    { value: "Sub-1s", label: "Initial Page Latency" },
  ];

  // Marquee tech stack data with clean SVG icons
  const marqueeTech = [
    { name: "Next.js 16", desc: "React Framework", icon: <SVG.Nextjs /> },
    { name: "Django API", desc: "Secure Backend", icon: <SVG.Django /> },
    { name: "Stripe", desc: "Billing Pipeline", icon: <SVG.Stripe /> },
    { name: "AWS Cloud", desc: "Scalable Infrastructure", icon: <SVG.AWS /> },
    { name: "Redis Cache", desc: "Sub-second Queries", icon: <SVG.Redis /> },
    { name: "PostgreSQL", desc: "Relational Storage", icon: <SVG.Postgres /> },
    { name: "OpenAI", desc: "Agentic Automation", icon: <SVG.OpenAI /> },
    { name: "Docker", desc: "Container Registry", icon: <SVG.Docker /> },
    { name: "Google Gemini", desc: "AI Inference Models", icon: <SVG.Gemini /> },
    { name: "TypeScript", desc: "Secure Typings", icon: <SVG.TypeScript /> },
  ];

  // "What We Build" Grid
  const productsWeBuild = [
    {
      title: "SaaS Platforms",
      desc: "Robust, multi-tenant subscription software platforms built for infinite organic scaling.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <path d="M7 2v20M17 2v20M2 7h20M2 17h20" />
        </svg>
      )
    },
    {
      title: "AI Products",
      desc: "Agentic AI engines, large language model integrations, and semantic vector data systems.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="18" r="2.5" />
          <circle cx="19" cy="18" r="2.5" />
          <line x1="12" y1="7.5" x2="5" y2="15.5" />
          <line x1="12" y1="7.5" x2="19" y2="15.5" />
          <line x1="7.5" y1="18" x2="16.5" y2="18" />
        </svg>
      )
    },
    {
      title: "CRM Systems",
      desc: "Custom database pipelines, lead routing rules, and high-legibility operations dashboards.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
    },
    {
      title: "Multi-tenant Applications",
      desc: "Highly secure workspace partition networks, organization parameters, and isolated state structures.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: "Internal Business Tools",
      desc: "Automated billing bridges, inventory managers, tracking layers, and administrative panels.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="9" x2="15" y2="15" />
          <line x1="15" y1="9" x2="9" y2="15" />
        </svg>
      )
    },
    {
      title: "Analytics Dashboards",
      desc: "Real-time charts, conversion trackers, tracking pixels, and sub-second metrics generators.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: "Subscription Platforms",
      desc: "Stripe checkouts, billing cycles, automated coupon models, and webhook pipelines.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      )
    },
    {
      title: "Marketplace Systems",
      desc: "Scalable buyer-seller relation networks, secure escrow bridges, and payout schedules.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10" />
        </svg>
      )
    },
  ];

  // Architecture flowchart steps
  const archSteps = [
    {
      id: 1,
      title: "Frontend UI Layer",
      tech: "Next.js 16, React, Tailwind CSS",
      desc: "Renders visual-first layouts with zero initial latency, edge caches static pages, and supports smooth interactive micro-animations."
    },
    {
      id: 2,
      title: "API Ingestion Gateway",
      tech: "GraphQL, JWT Auth, CORS Filters",
      desc: "Secures external entries, routes parameters, filters request payloads, and handles high-velocity data transfers."
    },
    {
      id: 3,
      title: "Backend Core Services",
      tech: "Django API, Node.js queue workers",
      desc: "Coordinates atomic database actions, formats API return payloads, and schedules background worker tasks."
    },
    {
      id: 4,
      title: "Database & Cache Layers",
      tech: "Postgres RDS, Redis, Pinecone vector",
      desc: "Caches database logs, indexes structural relations, and handles sub-second semantic search vectors queries."
    },
    {
      id: 5,
      title: "Cloud Infrastructure Setup",
      tech: "AWS Elastic Container, Docker, Edge CDN",
      desc: "Hosts containerized environments, balances traffic load spikes, and distributes assets globally."
    }
  ];

  // timeline UI steps
  const timelineSteps = [
    { phase: "01", name: "Product Discovery", desc: "blueprinting product requirements, database parameters, and target user paths." },
    { phase: "02", name: "UX & Wireframing", desc: "Constructing atomic layout frameworks and interactive design systems inside Figma." },
    { phase: "03", name: "System Architecture", desc: "Structuring relational databases, backend APIs boundaries, and server queue setups." },
    { phase: "04", name: "MVP Development", desc: "Developing with Next.js + Django, connecting webhooks, and integrating payments." },
    { phase: "05", name: "Testing & Optimization", desc: "Running compiler audits, testing security vectors, and tuning Core Web Vitals to 100." },
    { phase: "06", name: "Deployment", desc: "Launching containerized systems to stable clouds with automated CDN edge rules." },
    { phase: "07", name: "Scaling & Support", desc: "Monitoring uptime counters, optimizing query lag times, and pushing visual support updates." }
  ];

  // SaaS visual features
  const saasFeatures = [
    "Authentication Systems",
    "Subscription Billing",
    "Real-time Notifications",
    "Admin Dashboards",
    "API Integrations",
    "AI Workflows",
    "Analytics",
    "Role-Based Access",
    "Cloud Deployment",
    "Payment Gateways"
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 md:py-24 relative overflow-hidden select-none">
      {/* Background Soft Mesh Gradients - Premium Blue Themes */}
      <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-[#1161ed]/[0.035] rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[45%] right-[-10%] w-[600px] h-[600px] bg-[#3b82f6]/[0.02] rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse duration-[8s]" />

      <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
        
        {/* 1. Hero Section - WIDE GAP */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20 md:mb-28">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col text-left items-start">
            <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-[0.15em] mb-8 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-ping"></span>
              SaaS Engine Studio
            </div>
            <h1 className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-black leading-[1.1] text-[#0F172A] mb-8 tracking-tight">
              Building scalable SaaS products <span className="bg-gradient-to-r from-[#1161ed] to-[#3b82f6] bg-clip-text text-transparent">engineered for growth.</span>
            </h1>
            <p className="text-[#64748B] text-base sm:text-[1.1rem] leading-[1.7] max-w-[620px] mb-12">
              From MVPs to enterprise-grade platforms, V2 Labs develops high-performance software products with modern architecture, automation, and scalable infrastructure.
            </p>
            
            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4.5 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] hover:from-[#0c4ec3] hover:to-[#2563EB] shadow-[0_8px_25px_rgba(17,97,237,0.22)] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] text-[0.95rem] text-center cursor-pointer"
              >
                Start Your Product
              </Link>
              <a 
                href="#showcase" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#1161ed]/20 hover:border-[#1161ed]/50 text-slate-800 font-extrabold rounded-full transition-all duration-300 hover:bg-slate-50 shadow-sm text-[0.95rem] text-center cursor-pointer"
              >
                View Live Mockups
              </a>
            </div>
          </div>

          {/* Right Column - Premium Browser-framed High-Fidelity Dashboard Screenshot */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Background Glow Orb */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-[#1161ed]/10 to-[#3b82f6]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
            
            {/* Dashboard UI panel with mock browser framework */}
            <div className="w-full max-w-[460px] rounded-3xl border border-[#1161ed]/10 bg-white shadow-[0_25px_60px_rgba(17,97,237,0.12)] overflow-hidden hover:-translate-y-1 transition-all duration-300">
              
              {/* Browser bar header */}
              <div className="flex items-center justify-between bg-slate-50/80 border-b border-slate-100 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444] shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308] shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e] shadow-sm" />
                </div>
                <div className="w-[180px] bg-white border border-slate-200/50 rounded-lg py-1 px-3 text-[0.62rem] text-slate-400 font-medium text-center truncate shadow-inner">
                  v2labs.co/saas-dashboard
                </div>
                <div className="w-3 h-3" />
              </div>

              <div className="relative bg-slate-900 overflow-hidden group">
                <Image 
                  src="/saas_dashboard.png" 
                  alt="High-fidelity SaaS analytics dashboard interface mockup" 
                  width={460}
                  height={320}
                  sizes="(max-width: 640px) 90vw, 460px"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                  className="object-cover select-none transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                  <Image 
                    src="/hero_man.png" 
                    alt="AWS Certified Architect avatar" 
                    width={28}
                    height={28}
                    sizes="28px"
                    loading="lazy"
                    className="rounded-full object-cover filter grayscale border border-[#1161ed]/30"
                  />
                  <div className="text-left">
                    <p className="text-[0.62rem] font-black text-white leading-none mb-0.5">Architecture Verified</p>
                    <p className="text-[0.52rem] font-bold text-slate-400 uppercase tracking-widest">AWS Cloud Architect</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Client/Integration Tech Marquee Section - WIDER SPACING */}
        <section className="w-[100vw] relative left-1/2 right-1/2 -mx-[50vw] py-10 bg-white border-y border-slate-100 overflow-hidden select-none mb-20 md:mb-28">
          <div className="relative flex max-w-[100vw] overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-8">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex shrink-0 gap-8">
                  {marqueeTech.map((tech, idx) => (
                    <div 
                      key={`${tech.name}-${i}-${idx}`} 
                      className="inline-flex items-center gap-4 px-6.5 py-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:border-[#1161ed]/20 hover:bg-white transition-all duration-300"
                    >
                      <span className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">{tech.icon}</span>
                      <div className="text-left">
                        <span className="text-[0.88rem] font-black text-slate-850 block leading-tight">{tech.name}</span>
                        <span className="text-[0.68rem] font-bold text-slate-400 block mt-0.5">{tech.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. "What We Build" Section - EXPANDED SPACE */}
        <section id="what-we-build" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Product Engineering</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              What We Build
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              We specialize in custom SaaS platforms and structural data layers built to command market authority.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsWeBuild.map((p, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-[24px] border border-black/[0.03] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/20 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-[#1161ed]/[0.08] flex items-center justify-center border border-[#1161ed]/10 group-hover:scale-105 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 mb-5 shadow-sm">
                    <div className="[&>svg]:stroke-current text-[#1161ed] group-hover:text-white transition-colors duration-300">
                      {p.icon}
                    </div>
                  </div>
                  <h3 className="text-[1.05rem] text-[#0F172A] font-black tracking-tight mb-2 group-hover:text-[#1161ed] transition-colors">{p.title}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{p.desc}</p>
                </div>
                
                {/* Subtle card bottom line accent */}
                <div className="h-[3px] w-0 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-full mt-5 group-hover:w-[40px] transition-all duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* 3. Trust-Building Architecture Section - EXPANDED SPACE */}
        <section id="architecture" className="py-12 md:py-16 border-t border-b border-black/[0.04] mb-20 md:mb-28 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1161ed]/[0.015] rounded-full blur-[130px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Description */}
            <div className="lg:col-span-5 flex flex-col text-left items-start">
              <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Technical Integrity</p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-[#0F172A] tracking-tight leading-none mb-6">
                Built with scalable architecture from day one.
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-[1.65] mb-10">
                Most agencies never explain their software design. We engineer production-ready environments structured to scale. Our platforms feature modular components, API-first interfaces, secure authentication tokens, and advanced load-balancing caches.
              </p>

              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-2.5">
                {["Modular Systems", "API-First", "Token Authentication", "Security Grids", "Performance Tuning"].map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full border border-slate-100 bg-white text-[0.68rem] font-extrabold uppercase text-slate-600 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column Flowchart */}
            <div className="lg:col-span-7 w-full flex flex-col gap-3 relative">
              <span className="text-[0.62rem] font-extrabold uppercase text-[#94A3B8] tracking-widest text-center block mb-3">Interactive Pipeline (Hover to inspect)</span>
              
              {archSteps.map((step, idx) => (
                <div 
                  key={step.id}
                  onMouseEnter={() => setActiveArchStep(step.id)}
                  onMouseLeave={() => setActiveArchStep(null)}
                  className={`p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center gap-4.5 ${
                    activeArchStep === step.id 
                      ? "bg-white border-[#1161ed] shadow-[0_12px_30px_rgba(17,97,237,0.06)] -translate-y-0.5" 
                      : "bg-white/80 border-slate-100 hover:border-[#1161ed]/30"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
                    activeArchStep === step.id ? "bg-[#1161ed] text-white" : "bg-[#1161ed]/[0.08] text-[#1161ed]"
                  }`}>
                    {step.id}
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-extrabold text-[0.88rem] text-[#0F172A] tracking-tight">{step.title}</h3>
                      <span className="text-[0.62rem] font-bold text-[#1161ed] bg-[#1161ed]/[0.05] px-1.5 py-0.5 rounded">{step.tech}</span>
                    </div>
                    {/* Collapsible descriptions */}
                    <div className={`text-[#64748B] text-xs transition-all duration-300 ${
                      activeArchStep === step.id ? "max-h-[100px] opacity-100 mt-2 leading-relaxed" : "max-h-0 opacity-0 overflow-hidden"
                    }`}>
                      {step.desc}
                    </div>
                  </div>
                  
                  {/* Visual Connection Arrow with Animated Pulsing Data Dot */}
                  {idx < 4 && (
                    <div className="absolute bottom-[-16px] left-[32px] w-[2px] h-[16px] bg-[#1161ed]/15 pointer-events-none z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1161ed] absolute left-[-2px] animate-ping" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. "From Idea to Product" Process - EXPANDED SPACE */}
        <section id="process" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Our Methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              From Idea to Product
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              A streamlined, highly structured development cycle that skips confusion and drives results.
            </p>
          </div>

          {/* Timeline UI */}
          <div className="relative pl-6 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:border-l-2 before:border-dashed before:border-[#1161ed]/30 max-w-[850px] mx-auto">
            {timelineSteps.map((s, idx) => (
              <div key={idx} className="relative flex items-start gap-4 mb-8 last:mb-0 group">
                
                {/* Timeline Circle Bullet */}
                <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#1161ed] flex items-center justify-center shadow-[0_0_12px_rgba(17,97,237,0.12)] z-10">
                  <span className="text-[0.75rem] font-black text-[#1161ed] tracking-tighter">{s.phase}</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-5 rounded-2xl border border-black/[0.03] bg-white shadow-sm hover:shadow-[0_15px_30px_rgba(17,97,237,0.05)] hover:border-[#1161ed]/20 transition-all duration-300 flex flex-col text-left">
                  <h3 className="text-[0.95rem] font-extrabold text-[#0F172A] tracking-tight mb-1 group-hover:text-[#1161ed] transition-colors">{s.name}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Product Showcase (Calendar Plus & ThinkNShop) - EXPANDED SPACE */}
        <section id="showcase" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Live Projects</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              Product Showcase
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              We build real, scalable software systems. Here are high-fidelity mockups of actual projects in active development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1100px] mx-auto">
            
            {/* Card 1: Calendar Plus */}
            <div className="p-8 rounded-[32px] border border-black/[0.03] bg-white shadow-sm hover:shadow-[0_30px_60px_rgba(17,97,237,0.08)] hover:border-[#1161ed]/20 transition-all duration-500 group flex flex-col justify-between overflow-hidden relative text-left">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#1161ed]/5 rounded-bl-full pointer-events-none -z-10" />
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[0.62rem] font-extrabold uppercase text-[#1161ed] bg-[#1161ed]/[0.08] px-3 py-1 rounded-full tracking-widest flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-ping" />
                    Interactive Booking
                  </span>
                  <div className="flex gap-1.5">
                    {["Next.js", "Node.js", "Redis"].map((tag, i) => (
                      <span key={i} className="text-[0.55rem] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-3">Calendar Plus</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-6">
                  An automated multi-timezone meeting scheduler built with dynamic webhook syncing. Solves scheduling latency by automating user invitations and time blocks across platforms.
                </p>

                {/* Calendar Plus browser UI mockup using generated high-fidelity asset */}
                <div className="rounded-2xl border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.02)] overflow-hidden mb-6 bg-slate-50 relative group/mockup">
                  
                  {/* Browser bar */}
                  <div className="bg-slate-50/80 border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-sm" />
                    </div>
                    <div className="w-[140px] bg-white border border-slate-200/50 rounded py-0.5 px-2 text-[0.55rem] text-slate-400 truncate shadow-inner text-center">
                      calendarplus.app/book
                    </div>
                    <div className="w-3.5 h-3.5" />
                  </div>

                  <Image 
                    src="/calendar_mockup.png" 
                    alt="High-fidelity Calendar Plus meeting scheduler UI mockup" 
                    width={460}
                    height={320}
                    sizes="(max-width: 640px) 90vw, 460px"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                    className="object-cover select-none transition-transform duration-500 group-hover/mockup:scale-102"
                  />

                </div>

                {/* Features List */}
                <div className="flex flex-col gap-2.5 mb-8">
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#1161ed] font-extrabold">✓</span>
                    <span>Multi-timezone smart synchronization</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#1161ed] font-extrabold">✓</span>
                    <span>Direct Google Calendar & Outlook webhook syncs</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#1161ed] font-extrabold">✓</span>
                    <span>Automated transactional email notification pipelines</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="block text-center bg-slate-900 group-hover:bg-[#1161ed] text-white py-3.5 rounded-xl font-bold text-sm transition-colors duration-300 shadow-sm cursor-pointer">
                Inquire About Calendar Plus
              </Link>
            </div>

            {/* Card 2: ThinkNShop */}
            <div className="p-8 rounded-[32px] border border-black/[0.03] bg-white shadow-sm hover:shadow-[0_30px_60px_rgba(17,97,237,0.08)] hover:border-[#1161ed]/20 transition-all duration-500 group flex flex-col justify-between overflow-hidden relative text-left">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#1161ed]/5 rounded-bl-full pointer-events-none -z-10" />
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[0.62rem] font-extrabold uppercase text-[#1161ed] bg-[#1161ed]/[0.08] px-3 py-1 rounded-full tracking-widest flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-ping" />
                    Checkout Engine
                  </span>
                  <div className="flex gap-1.5">
                    {["Next.js", "Stripe", "Postgres"].map((tag, i) => (
                      <span key={i} className="text-[0.55rem] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-3">ThinkNShop</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-6">
                  A high-velocity headless commerce storefront integrated with Stripe API checkouts. Solves catalog latency speeds by pre-compiling inventory pages on the edge.
                </p>

                {/* ThinkNShop browser UI mockup using generated high-fidelity asset */}
                <div className="rounded-2xl border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.02)] overflow-hidden mb-6 bg-slate-50 relative group/mockup">
                  
                  {/* Browser bar */}
                  <div className="bg-slate-50/80 border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-sm" />
                    </div>
                    <div className="w-[140px] bg-white border border-slate-200/50 rounded py-0.5 px-2 text-[0.55rem] text-slate-400 truncate shadow-inner text-center">
                      thinknshop.co/cart
                    </div>
                    <div className="w-3.5 h-3.5" />
                  </div>

                  <Image 
                    src="/shop_mockup.png" 
                    alt="High-fidelity ThinkNShop headless commerce checkout interface mockup" 
                    width={460}
                    height={320}
                    sizes="(max-width: 640px) 90vw, 460px"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                    className="object-cover select-none transition-transform duration-500 group-hover/mockup:scale-102"
                  />

                </div>

                {/* Features List */}
                <div className="flex flex-col gap-2.5 mb-8">
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#1161ed] font-extrabold">✓</span>
                    <span>Edge catalog pre-compilation</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#1161ed] font-extrabold">✓</span>
                    <span>Stripe API checkout pipeline</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#1161ed] font-extrabold">✓</span>
                    <span>Real-time inventory database hooks</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="block text-center bg-slate-900 group-hover:bg-[#1161ed] text-white py-3.5 rounded-xl font-bold text-sm transition-colors duration-300 shadow-sm cursor-pointer">
                Inquire About ThinkNShop
              </Link>
            </div>

          </div>
        </section>

        {/* 6. SaaS Features Section - EXPANDED SPACE */}
        <section id="saas-features" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Feature Library</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              SaaS Features
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              We implement comprehensive technical parameters into our SaaS architectures.
            </p>
          </div>

          {/* Grid of visual feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-[900px] mx-auto">
            {saasFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                className="px-6 py-4 rounded-[20px] bg-white border border-slate-100 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#1161ed]/30 hover:shadow-[0_15px_30px_rgba(17,97,237,0.06)] group flex items-center gap-3.5"
              >
                <div className="h-[4px] w-[50%] absolute top-0 left-0 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-tr group-hover:w-full transition-all duration-300" />
                
                {/* Glowing Bullet Node */}
                <div className="w-5.5 h-5.5 rounded-full bg-[#1161ed]/[0.08] flex items-center justify-center text-[0.62rem] font-black text-[#1161ed] shadow-inner select-none shrink-0 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300">
                  ✓
                </div>
                <span className="text-slate-800 font-extrabold text-[0.84rem] sm:text-[0.92rem] tracking-tight">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Metrics / Credibility Section - FINAL CLEAN FINISH */}
        <section id="credibility" className="py-12 border-t border-black/[0.04] mb-6 select-none">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[2.2rem] md:text-[2.8rem] font-black text-[#1161ed] tracking-tight mb-1 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] bg-clip-text text-transparent">{stat.value}</span>
                <span className="text-[#64748B] text-[0.68rem] md:text-[0.75rem] font-black uppercase tracking-widest leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <RelatedServiceLinks
          currentSlug="saas-product"
          heading="Keep SaaS demand connected to the rest of the service architecture"
          description="SaaS buyers often compare platform builds, AI features, ERP integrations, and brand systems. These links help both users and crawlers understand that relationship."
        />
      </div>
    </div>
  );
}
