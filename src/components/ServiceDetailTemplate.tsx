import React from "react";
import Link from "next/link";
import AlternatingText from "@/components/AlternatingText";
import FaqSection, { FaqItem } from "@/components/FaqSection";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";

export type ServiceCapability = {
  title: string;
  desc: string;
  badge?: string;
};

export type ServiceBenefit = {
  title: string;
  desc: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceDetailProps = {
  badge: string;
  h1: string;
  subtitle: string;
  intro: string;
  capabilities: ServiceCapability[];
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  techStack: string[];
  faqs: FaqItem[];
  currentSlug: string;
};

export default function ServiceDetailTemplate({
  badge,
  h1,
  subtitle,
  intro,
  capabilities,
  benefits,
  process,
  techStack,
  faqs,
  currentSlug,
}: ServiceDetailProps) {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Background Soft Mesh Gradients */}
      <div className="absolute top-[6%] left-[4%] w-[450px] h-[450px] bg-[#0055DA]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10" />
      <div className="absolute top-[28%] right-[4%] w-[550px] h-[550px] bg-[#0055DA]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10" />
      
      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-6 pt-12 sm:pt-16">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO */}
        {/* ========================================================================= */}
        <header className="mb-20 relative z-10">
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0055DA] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0055DA] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{badge}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-[#0055DA]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#0055DA] tracking-[0.18em] mb-6 border border-[#0055DA]/20 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#0055DA] rounded-full animate-ping"></span>
            {badge}
          </div>

          <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-black leading-[1.08] text-slate-950 tracking-tight mb-6 max-w-[900px]">
            {h1}
          </h1>

          <p className="text-lg sm:text-xl font-bold text-slate-800 mb-5 max-w-[850px] leading-snug">
            {subtitle}
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-[1.8] max-w-[850px] mb-8 font-normal">
            {intro}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0055DA] hover:bg-[#0047C2] text-white font-black text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Start Your Project</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href="https://wa.me/917021827910"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm uppercase tracking-wider rounded-full border border-emerald-200 transition-all hover:-translate-y-0.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp Consultation</span>
            </a>

            <Link
              href="/plans"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-wider rounded-full border border-slate-300 transition-all hover:-translate-y-0.5"
            >
              Explore Packages
            </Link>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* SECTION 2: CAPABILITIES GRID */}
        {/* ========================================================================= */}
        <section className="mb-24 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-[#0055DA]/[0.08] text-[#0055DA] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-3 border border-[#0055DA]/20">
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-[2.25rem] font-black text-slate-950 tracking-tight leading-tight">
              What We Engineer For You
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-[700px]">
              Production-ready solutions designed to solve concrete business friction, eliminate system bottlenecks, and generate measurable revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:border-[#0055DA]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {cap.badge && (
                    <span className="inline-block text-[0.65rem] font-extrabold uppercase tracking-widest text-[#0055DA] bg-[#0055DA]/[0.08] px-3 py-1 rounded-full mb-4">
                      {cap.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: BUSINESS BENEFITS */}
        {/* ========================================================================= */}
        <section className="mb-24 relative z-10 bg-slate-50 p-8 sm:p-12 rounded-[32px] border border-slate-200/70">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-block bg-white text-[#0055DA] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-3 border border-slate-200">
              Strategic Value
            </div>
            <h2 className="text-2xl sm:text-[2.25rem] font-black text-slate-950 tracking-tight leading-tight">
              Why Choose Our Engineering Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#0055DA] text-white flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: DEVELOPMENT PROCESS */}
        {/* ========================================================================= */}
        <section className="mb-24 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-[#0055DA]/[0.08] text-[#0055DA] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-3 border border-[#0055DA]/20">
              Methodology
            </div>
            <h2 className="text-2xl sm:text-[2.25rem] font-black text-slate-950 tracking-tight leading-tight">
              Our 5-Stage Development Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-[700px]">
              Structured milestone tracking, weekly sprints, and clear communication every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#0055DA]/30 block mb-2">{step.step}</span>
                  <h3 className="text-base font-bold text-slate-950 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: TECH STACK BADGES */}
        {/* ========================================================================= */}
        <section className="mb-24 relative z-10 py-10 px-8 rounded-3xl bg-slate-950 text-white">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold mb-2">Technologies &amp; Frameworks</p>
            <h2 className="text-xl sm:text-2xl font-bold">Built With Modern, Production-Grade Standards</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FAQS */}
        {/* ========================================================================= */}
        <FaqSection items={faqs} />

        {/* ========================================================================= */}
        {/* SECTION 7: RELATED SERVICE LINKS (INTERNAL LINKING) */}
        {/* ========================================================================= */}
        <RelatedServiceLinks
          currentSlug={currentSlug}
          heading="Explore Connected Technology Services"
          description="Explore our full spectrum of web design, custom software engineering, and AI automation services to scale your operational footprint."
        />

        {/* ========================================================================= */}
        {/* SECTION 8: BOTTOM CTA */}
        {/* ========================================================================= */}
        <div className="mt-20 p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#0055DA] to-[#003899] text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">
            Ready to Build Your Solution?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule a free technical strategy call with our development team in Mira Bhayandar &amp; Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-slate-950 hover:bg-neutral-100 font-black text-sm uppercase tracking-wider rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Start Free Consultation
            </Link>
            <a
              href="https://wa.me/917021827910"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm uppercase tracking-wider rounded-full transition-transform hover:-translate-y-0.5"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
