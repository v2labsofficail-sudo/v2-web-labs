"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import AlternatingText from "@/components/AlternatingText";
import FaqSection from "@/components/FaqSection";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, ChevronRight, Server, Database, Globe, HelpCircle, ShieldCheck } from "lucide-react";

export default function MiraBhayandarPage() {
  const LOCAL_SERVICES = [
    {
      title: "Enterprise Custom Software",
      desc: "Custom database portals, ERP suites, CRM tools, and internal automation systems programmed with React, Next.js, Node.js, and PostgreSQL for maximum security and uptime.",
      link: "/services/erp-crm",
      anchorText: "Software Engineering"
    },
    {
      title: "Speed-Optimized Web Platforms",
      desc: "Static and server-side pre-compiled web systems configured with edge CDN caching, structured local schemas, and Brotli compression maps.",
      link: "/services/web-platform",
      anchorText: "Web Platforms"
    },
    {
      title: "AI Solutions & Integrations",
      desc: "Autonomous workflow tools, LLM embeddings, custom AI chatbots, and semantic vector database lookups to automate manual administrative roles.",
      link: "/services/ai-automation",
      anchorText: "AI Agent Solutions"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Mesh gradients */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#111111]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10 animate-float" />
      <div className="absolute top-[32%] right-[5%] w-[550px] h-[550px] bg-[#2A2A2A]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10 animate-pulse" />

      {/* Dotted grid */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#111111_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.15] -z-10 pointer-events-none select-none" />

      <div className="max-w-[1100px] mx-auto px-6 pt-16">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2.5 text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest relative z-10">
          <Link href="/" className="hover:text-[#0055DA] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-500">Locations</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800">Mira-Bhayandar</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#111111]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#111111] tracking-[0.18em] mb-6 border border-[#111111]/20 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#111111] rounded-full animate-ping"></span>
            IT & SOFTWARE COMPANY
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.08] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            Software Development & <AlternatingText>IT Company in Mira-Bhayandar</AlternatingText>
          </h1>

          <p className="text-[#111111] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[800px] font-medium mb-8">
            V2Labs Global is a premium IT and software engineering agency serving the entire Mira-Bhayandar region. We engineer custom enterprise software, mobile apps, scalable SaaS products, and conversion-ready websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0055DA] hover:bg-[#0044B3] shadow-[0_8px_25px_rgba(0,85,218,0.2)] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] text-sm text-center"
            >
              Consult Our Engineers
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 hover:border-slate-400 text-slate-800 font-extrabold rounded-full transition-all duration-300 shadow-sm text-sm text-center"
            >
              See Case Studies
            </Link>
          </div>
        </header>

        {/* Narrative & Location Card Section */}
        <ScrollReveal>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24 relative z-10">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight mb-5 leading-tight">
                Enterprise IT and Systems Integration in Mira-Bhayandar
              </h2>
              <p className="text-[#111111] text-sm sm:text-base leading-relaxed mb-6 font-medium">
                V2Labs Global serves the full municipal region of **Mira-Bhayandar**, including industrial zones in **Kashigaon** and corporate hubs in **Kashimira**. We build systems designed to increase operational control and save administrative overhead. We write custom Next.js web applications, build secure databases, and automate workflows.
              </p>
              <p className="text-[#111111] text-sm sm:text-base leading-relaxed font-medium mb-6">
                Instead of slow, boilerplate templates, we custom-code type-safe structures using React and TypeScript. We keep your systems secure, fast, and optimized for search engine crawlers.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Relational database normalizations and API gateways.",
                  "Edge hosting distribution on AWS and Vercel CDNs.",
                  "Comprehensive Breadcrumbs and LocalBusiness schemas.",
                  "Continuous deployment monitoring and version auditing."
                ].map((spec, idx) => (
                  <div key={idx} className="flex gap-2.5 items-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-800 font-extrabold text-[0.84rem] tracking-tight">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Verified Business Data (NAP Alignment) */}
            <div className="lg:col-span-5 flex items-stretch">
              <div className="relative rounded-[36px] bg-[#020713] p-8 sm:p-10 text-left text-white overflow-hidden shadow-2xl flex flex-col justify-between border border-white/5 w-full">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#0055DA] opacity-15 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block bg-white/[0.08] text-white border border-white/10 font-extrabold text-[0.62rem] uppercase tracking-wider px-3.5 py-1 rounded-md mb-6">
                    Mira-Bhayandar Entity Info
                  </span>
                  <h3 className="text-2xl font-black tracking-tight leading-tight mb-6 text-white">
                    V2Labs Global Studio
                  </h3>
                  
                  <div className="space-y-4 text-xs font-semibold text-slate-350">
                    <div className="flex flex-col gap-1 border-b border-white/5 pb-3">
                      <span className="text-[0.62rem] text-slate-450 uppercase tracking-widest block">Address</span>
                      <span className="text-white text-sm">Bhayandar East, Thane, Maharashtra, 401105, India</span>
                    </div>
                    <div className="flex flex-col gap-1 border-b border-white/5 pb-3">
                      <span className="text-[0.62rem] text-slate-450 uppercase tracking-widest block">Email</span>
                      <span className="text-white text-sm">contact@v2labsglobal.com</span>
                    </div>
                    <div className="flex flex-col gap-1 pb-1">
                      <span className="text-[0.62rem] text-slate-450 uppercase tracking-widest block">Contact Phone</span>
                      <span className="text-white text-sm">+91-9022641867</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/5">
                  <p className="text-[0.68rem] text-slate-400 leading-relaxed font-semibold">
                    *Registered Service Area Business serving the entire Bhayandar, Mira-Bhayandar, and Mumbai Metropolitan areas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Localized Services Section */}
        <section className="mb-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Capabilities
            </div>
            <h2 className="text-3xl md:text-[2.4rem] font-black text-[#0F172A] tracking-tight">
              Our Core Technology Verticals
            </h2>
            <p className="text-[#111111] text-sm max-w-[500px] mx-auto mt-2 font-semibold">
              High-performance implementations customized for our regional partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LOCAL_SERVICES.map((serv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#0055DA]/30 flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-[1.2rem] text-slate-900 mb-3.5 font-black group-hover:text-[#0055DA] transition-colors leading-tight">
                    {serv.title}
                  </h3>
                  <p className="text-[#111111] leading-relaxed text-[0.84rem] mb-6">
                    {serv.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100/60">
                  <Link
                    href={serv.link}
                    className="text-xs font-bold text-[#0055DA] hover:underline flex items-center gap-1.5"
                  >
                    Explore {serv.anchorText} ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="mb-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              FAQ
            </div>
            <h2 className="text-3xl md:text-[2.4rem] font-black text-[#0F172A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#111111] text-sm max-w-[500px] mx-auto mt-2 font-semibold">
              Answering local technology and web design development concerns.
            </p>
          </div>

          <FaqSection items={[
            {
              question: "Are you a registered IT company in Mira-Bhayandar?",
              answer: "Yes, V2Labs Global is an elite software engineering agency and IT consulting studio located in Bhayandar East, operating across the full Mira-Bhayandar Municipal Corporation limits."
            },
            {
              question: "What industries do you serve in the Mira-Bhayandar area?",
              answer: "We support retail stores, factories, manufacturing units in Kashigaon, warehousing services, real estate developers, and global startups requiring custom administrative software."
            },
            {
              question: "Do you develop custom ERP and CRM applications?",
              answer: "Yes, we custom-engineer operational portals, timesheet controls, client pipelines, automated billing ledgers, and API integrations with platforms like HubSpot and Salesforce."
            },
            {
              question: "Do you offer post-production support and hosting services?",
              answer: "Yes, we deploy application assets to globally scalable CDN edge networks (Vercel, AWS, Cloudflare) and provide server health checks and version audits."
            }
          ]} />
        </section>

        {/* High-Converting CTA Box */}
        <section className="relative z-10">
          <div className="relative rounded-[40px] bg-[#020713] p-10 sm:p-16 text-center text-white overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#111111] opacity-15 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0055DA] opacity-10 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />

            <div className="relative z-10 max-w-[680px] mx-auto">
              <span className="inline-block bg-white/[0.06] text-white border border-white/10 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-lg mb-6">
                Start Your Tech Blueprint
              </span>

              <h2 className="text-2xl sm:text-[2.2rem] font-black tracking-tight leading-tight mb-4 text-white">
                Launch Your Custom Platform Today
              </h2>

              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-10 font-semibold">
                Work directly with our software engineers to architect static web interfaces, database syncs, or custom CRM portals. Schedule a free quote.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 bg-[#0055DA] hover:bg-[#0044B3] shadow-[0_6px_25px_rgba(0,85,218,0.3)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-xs uppercase tracking-widest"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/work"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 bg-white/5 border border-white/10 hover:border-white/30 text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-xs uppercase tracking-widest"
                >
                  See Our Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
