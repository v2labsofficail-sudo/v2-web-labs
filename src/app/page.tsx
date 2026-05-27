"use client";

import React from "react";
import Link from "next/link";


const TESTIMONIALS = [
  {
    name: "Aris Thorne",
    role: "Founder, SynthFlow AI",
    initials: "AT",
    quote:
      "V2Labs shipped our MVP in just 18 days. The speed, clarity, and finish quality gave our launch a serious edge.",
  },
  {
    name: "Sarah Chen",
    role: "Co-Founder, MedLink",
    initials: "SC",
    quote:
      "The product feels premium on every screen. Their mobile-first thinking helped us convert more users from day one.",
  },
  {
    name: "Devin Patel",
    role: "Founder, GrowthPilot",
    initials: "DP",
    quote:
      "They made the frontend incredibly smooth and fast. Our landing page conversion rate jumped within the first week.",
  },
  {
    name: "Maya Verma",
    role: "CEO, NovaDesk",
    initials: "MV",
    quote:
      "Design and development finally felt aligned. Every detail was thoughtful, and the final experience matched our brand perfectly.",
  },
  {
    name: "Nikhil Rao",
    role: "Founder, FleetOps",
    initials: "NR",
    quote:
      "We needed clean execution without agency drag. V2Labs moved like an in-house product team and delivered with confidence.",
  },
  {
    name: "Laura Winters",
    role: "Product Lead, CoreStack",
    initials: "LW",
    quote:
      "The UI feels modern, calm, and trustworthy. Our customers noticed the polish immediately after the redesign went live.",
  },
  {
    name: "Jason Reed",
    role: "Founder, PulseCart",
    initials: "JR",
    quote:
      "Their structure, communication, and delivery speed were excellent. We always knew what was happening and what came next.",
  },
  {
    name: "Priya Malhotra",
    role: "Co-Founder, SkillMint",
    initials: "PM",
    quote:
      "They turned a rough concept into a sharp product experience. The responsive layouts feel especially good on smaller devices.",
  },
  {
    name: "Cory Zamora",
    role: "Marketing Specialist, Influx",
    initials: "CZ",
    quote:
      "The final product looks elevated and performs beautifully. It gave our team a much stronger foundation to scale from.",
  },
  {
    name: "Alex Rivera",
    role: "Founder, ApexLabs",
    initials: "AR",
    quote:
      "V2Labs exceeded all expectations. The custom animations are fluid, and the page loading speeds are absolutely blazing fast.",
  },
] as const;

const TESTIMONIALS_ROW_1 = TESTIMONIALS.slice(0, 5);
const TESTIMONIALS_ROW_2 = TESTIMONIALS.slice(5, 10);

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <article className="w-[290px] sm:w-[340px] md:w-[380px] shrink-0 rounded-[22px] border border-[#1161ed]/10 bg-white/80 p-5 shadow-[0_10px_30px_rgba(17,97,237,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#1161ed]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(17,97,237,0.12)] sm:p-6">
      <div className="mb-3.5 flex items-center gap-1 text-[#f5b301]">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className="h-3.5 w-3.5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.75l2.86 5.79 6.39.93-4.62 4.5 1.09 6.36L12 17.32l-5.72 3.01 1.09-6.36-4.62-4.5 6.39-.93L12 2.75z" />
          </svg>
        ))}
      </div>

      <p className="text-[0.78rem] font-medium leading-[1.65] text-[#334155] sm:text-[0.84rem] md:text-[0.88rem] italic">
        "{testimonial.quote}"
      </p>

      <div className="mt-5 flex items-center gap-3.5 border-t border-slate-100 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1161ed] to-[#3b82f6] text-[0.72rem] font-extrabold text-white shadow-[0_4px_12px_rgba(17,97,237,0.2)]">
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[0.82rem] font-black tracking-tight text-[#0F172A] sm:text-[0.88rem]">
            {testimonial.name}
          </p>
          <p className="truncate text-[0.68rem] font-bold text-[#64748B] sm:text-[0.72rem]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const FAQS = [
    {
      question: "What core services does V2Labs specialize in?",
      answer: "V2Labs specializes in high-velocity SaaS & product development, custom ERP & CRM solutions, AI-ready automations, sub-second React/Next.js platforms, cinematic post-production video editing, and complete brand design systems."
    },
    {
      question: "How quickly can V2Labs deliver a production-ready MVP?",
      answer: "We move with startup speed. A standard MVP takes 2 to 4 weeks depending on the complexity. We launch fast, gather active user feedback, and iterate in rapid, continuous cycles."
    },
    {
      question: "Do you offer long-term support and maintenance post-launch?",
      answer: "Yes. We act as a dedicated engineering partner, providing ongoing feature updates, database scaling, server optimizations, and UX modifications as your product grows."
    },
    {
      question: "How does V2Labs collaborate with our internal team?",
      answer: "We operate with a founder's mindset. We communicate directly via Slack, collaborate in GitHub, maintain clear Linear boards, and eliminate typical agency overhead."
    },
    {
      question: "What technology stack does V2Labs build on?",
      answer: "We select and utilize the optimal technology stack according to each client's unique requirements, objectives, and existing infrastructure. While we have deep expertise in modern tools like Next.js, React, Tailwind CSS, TypeScript, Node.js, Django, PostgreSQL, and native AI SDKs (OpenAI, Gemini, Claude), we always prioritize the best fit for your specific project."
    },
    {
      question: "Can you build custom AI models and automations?",
      answer: "Yes. We specialize in building custom AI integrations, autonomous agentic grids, semantic vector database lookups, and specialized LLM pipelines tailored to your business needs."
    },
    {
      question: "Are your platforms optimized for Core Web Vitals and SEO?",
      answer: "Absolutely. Every platform we build is engineered for sub-second loading speeds, clean Core Web Vitals, semantic HTML structures, and immediate search index authority."
    },
    {
      question: "Who owns the project intellectual property (IP)?",
      answer: "You do. The client retains 100% ownership of the custom code, designs, and intellectual property from day one, with complete transfer upon project completion."
    },
    {
      question: "How do you handle pricing and project estimates?",
      answer: "We offer transparent, milestone-based pricing or flexible monthly retainer models depending on your startup's roadmap, ensuring complete budget clarity."
    },
    {
      question: "How do we kickstart our project with V2Labs today?",
      answer: "Simply reach out via hello@v2labs.co or click 'Get Started' to schedule a direct discovery consultation with our product and engineering team."
    }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const PROCESS_STEPS = [
    {
      step: "01",
      title: "Discovery & Consultation",
      isTop: true,
      icon: (
        <svg className="w-7 h-7 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <circle cx="10" cy="10" r="3" fill="#1161ed" opacity="0.15" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Planning & Roadmap",
      isTop: false,
      icon: (
        <svg className="w-7 h-7 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          <polygon points="9 7 15 4 15 17 9 20" fill="#1161ed" opacity="0.15" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Design & Prototyping",
      isTop: true,
      icon: (
        <svg className="w-7 h-7 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          <path d="M6.5 21.036H3v-3.572L14 7l3.5 3.5-11 10.536z" fill="#1161ed" opacity="0.15" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Development",
      isTop: false,
      icon: (
        <svg className="w-7 h-7 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      step: "05",
      title: "QA Testing & Launch",
      isTop: true,
      icon: (
        <svg className="w-7 h-7 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 3.84a14.98 14.98 0 00-6.16 12.12c0 2.3.52 4.49 1.46 6.45M18 10a2 2 0 11-4 0 2 2 0 014 0z" />
          <circle cx="16" cy="10" r="2" fill="#1161ed" opacity="0.15" />
        </svg>
      )
    },
    {
      step: "06",
      title: "Growth & Support",
      isTop: false,
      icon: (
        <svg className="w-7 h-7 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          <polygon points="13 7 21 7 21 15" fill="#1161ed" opacity="0.15" />
        </svg>
      )
    }
  ];

  return (
    <main className="container mx-auto px-6 relative overflow-hidden">
      {/* Background Soft Mesh Gradients for Premium Studio Feel */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#1161ed]/[0.03] rounded-full blur-[130px] pointer-events-none select-none -z-10" />
      <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-[#1161ed]/[0.02] rounded-full blur-[150px] pointer-events-none select-none -z-10 animate-pulse duration-[10s]" />

      {/* Hero Section */}
      <section id="hero" className="pt-10 pb-12 md:pt-14 md:pb-16 flex items-center relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
          
          {/* Left Text Column - Bottom on Mobile / Left on Desktop */}
          <div className="lg:col-span-7 flex flex-col text-left items-start order-2 lg:order-1 mt-6 lg:mt-0">
            <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-[0.15em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)] animate-fade-in">
              <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
              A trusted digital agency
            </div>
            <h1 className="text-[clamp(1.8rem,5.8vw,4.8rem)] font-black leading-[1.1] lg:leading-[1.05] text-[#0F172A] max-w-[650px] mb-4 lg:mb-6 tracking-tight">
              Quality digital <span className="bg-gradient-to-r from-[#1161ed] to-[#3b82f6] bg-clip-text text-transparent">services you</span> really want !
            </h1>
            <p className="text-[#64748B] text-sm lg:text-[1.05rem] leading-[1.7] max-w-[500px] mb-6 lg:mb-8">
              We are delivering top-level digital services with our best-experienced team. Just get started with us today and accelerate your growth.
            </p>
            
            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-9 py-4 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] hover:from-[#0c4ec3] hover:to-[#2563EB] shadow-[0_4px_20px_rgba(17,97,237,0.25)] hover:shadow-[0_8px_30px_rgba(17,97,237,0.4)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-[0.95rem] text-center"
              >
                Get Started
              </Link>
              <button 
                onClick={() => scrollTo("process")} 
                className="inline-flex items-center justify-center gap-3 font-extrabold text-[#0F172A] hover:text-[#1161ed] transition-colors duration-200 cursor-pointer group text-[0.95rem]"
              >
                <div className="w-12 h-12 rounded-full bg-[#1161ed]/[0.08] text-[#1161ed] border border-[#1161ed]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 transition-transform duration-300">
                    <polygon points="5 3 19 12 5 21" />
                  </svg>
                </div>
                <span>How it works</span>
              </button>
            </div>

            {/* Already a member */}
            <div className="mt-6 lg:mt-8 text-[0.85rem] text-[#64748B]">
              Already a member? <Link href="/contact" className="text-[#0F172A] font-bold hover:text-[#1161ed] transition-colors duration-200">Sign in.</Link>
            </div>
          </div>

          {/* Right Image/Graphics Column - Top on Mobile / Right on Desktop */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[260px] sm:h-[320px] lg:h-[500px] order-1 lg:order-2">
            {/* Background Glow Orb behind Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] bg-gradient-to-tr from-[#1161ed]/20 to-[#3b82f6]/20 rounded-full blur-[70px] lg:blur-[100px] z-0 pointer-events-none select-none animate-pulse duration-[8s]" />

            {/* Background Semicircle Shapes (Limited to Brand Colors) */}
            <div className="absolute left-[5%] top-[15%] w-[60px] h-[120px] lg:w-[100px] lg:h-[200px] rounded-r-full bg-[#1161ed]/[0.12] z-0 animate-pulse duration-[4s]" />
            <div className="absolute bottom-[10px] left-[15%] w-[110px] h-[55px] lg:bottom-[20px] lg:left-[15%] lg:w-[180px] lg:h-[90px] rounded-t-full bg-[#1161ed]/[0.18] z-0" />
            <div className="absolute right-[5%] top-[10%] w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] rounded-bl-full bg-[#1161ed]/[0.12] z-0" />
            
            {/* Luminous Dotted Grid Background Pattern (Top-Right) - Enlarged with Premium Drop Shadow */}
            <div className="absolute right-[-30px] top-[-20px] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] bg-[radial-gradient(#1161ed_3px,transparent_3px)] lg:bg-[radial-gradient(#1161ed_4.5px,transparent_4.5px)] [background-size:18px_18px] lg:[background-size:28px_28px] opacity-[0.4] lg:opacity-[0.55] z-0 pointer-events-none select-none drop-shadow-[0_10px_25px_rgba(17,97,237,0.22)]" />

            {/* Centered Grayscale Man Image */}
            <div className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[390px] z-10 relative flex justify-center items-end bottom-0 overflow-hidden rounded-b-full">
              <img 
                src="/hero_man.png" 
                alt="Digital Agency Professional"
                className="w-full h-auto object-contain filter grayscale select-none"
              />
            </div>

            {/* Floating Glassmorphic Semicircle Gauge Card */}
            <div className="absolute right-0 sm:right-[-20px] bottom-[4%] lg:bottom-[8%] bg-white/85 backdrop-blur-md rounded-2xl p-3 lg:p-5 shadow-[0_20px_50px_rgba(17,97,237,0.06)] border border-[#1161ed]/[0.12] max-w-[130px] lg:max-w-[210px] z-20 select-none hover:translate-y-[-6px] transition-all duration-300 group">
              <h3 className="text-[0.62rem] lg:text-[0.85rem] text-[#0F172A] font-extrabold mb-0.5 tracking-tight">Grow Your Business !</h3>
              <p className="text-[0.48rem] lg:text-[0.65rem] text-[#94A3B8] font-bold mb-1.5 lg:mb-3">V2 Labs Project Success</p>
              
              {/* Semicircular SVG Gauge */}
              <div className="relative w-full h-[40px] lg:h-[60px]">
                <svg viewBox="0 0 100 60" className="w-16 h-10 lg:w-[100px] lg:h-[55px] mx-auto">
                  {/* Semicircle track */}
                  <path d="M 15 50 A 35 35 0 0 1 85 50" fill="none" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
                  {/* Progress arc */}
                  <path d="M 15 50 A 35 35 0 0 1 76 25" fill="none" stroke="#1161ed" strokeWidth="8" strokeLinecap="round" strokeDasharray="110" strokeDashoffset="0" />
                  {/* Indicator dot */}
                  <circle cx="76" cy="25" r="3.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1" />
                </svg>
                <span className="absolute bottom-0 inset-x-0 text-center text-xs lg:text-lg text-[#0F172A] font-black leading-none mt-0.5 lg:mt-1">760</span>
              </div>
              <span className="text-[0.45rem] lg:text-[0.6rem] text-[#1161ed] font-black uppercase text-center block tracking-widest mt-0.5 lg:mt-1">Excellent</span>

              {/* Bottom Avatar / Mentor stack */}
              <div className="flex items-center gap-2 mt-1.5 pt-1.5 lg:mt-3 lg:pt-3 border-t border-slate-100/60 justify-between">
                <span className="text-[0.45rem] lg:text-[0.6rem] font-bold text-[#94A3B8] uppercase tracking-wider">Top Builders</span>
                <div className="flex -space-x-1.5">
                  <span className="w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full border border-white bg-slate-200 text-[0.4rem] lg:text-[0.55rem] font-bold flex items-center justify-center shadow-sm">👨‍💻</span>
                  <span className="w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full border border-white bg-slate-300 text-[0.4rem] lg:text-[0.55rem] font-bold flex items-center justify-center shadow-sm">👩‍🎨</span>
                  <span className="w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full border border-white bg-[#1161ed] text-[0.35rem] lg:text-[0.45rem] text-white font-extrabold flex items-center justify-center shadow-sm">+24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Solutions Marquee Section */}
      <section className="py-6 bg-white border-y border-black/[0.03] overflow-hidden select-none">
        <div className="relative flex max-w-[100vw] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-2">
            {[
              "CRM Softwares",
              "HR Recruitment Software",
              "ERP Solutions",
              "E-commerce Platforms",
              "Custom Software Solutions",
              "SaaS Architectures",
              // Duplicate items for seamless loop
              "CRM Softwares",
              "HR Recruitment Software",
              "ERP Solutions",
              "E-commerce Platforms",
              "Custom Software Solutions",
              "SaaS Architectures",
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="mx-12 text-2xl md:text-4xl font-bold tracking-tighter text-[#64748B]/[0.4] hover:text-[#1161ed] transition-colors duration-300 cursor-pointer">
                  {item}
                </span>
                <span className="text-[#1161ed]/[0.2] text-2xl font-black">/</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-12 md:py-16 border-t border-[rgba(0,0,0,0.05)] relative">
        <div className="text-center mb-[60px] relative z-10">
          <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-3">Exclusive Capabilities</p>
          <h2 className="text-[2.5rem] text-[#0F172A] font-extrabold tracking-tight">Our Premium Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] relative z-10">
          {[
            {
              title: "SaaS & Product Development",
              desc: "High-scale multi-tenant dashboards, secure billing portals, and fast analytical monitoring tools.",
              link: "/services/saas-product",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1161ed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              )
            },
            {
              title: "ERP & CRM Systems",
              desc: "Secure corporate operations database portals, HubSpot pipelines, and lead automations.",
              link: "/services/erp-crm",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1161ed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="21" y1="9" x2="3" y2="9" />
                  <line x1="21" y1="15" x2="3" y2="15" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                </svg>
              )
            },
            {
              title: "AI Automation Solutions",
              desc: "Autonomous workflow auto-agents, proprietary LLM integrations, and fast semantic lookups.",
              link: "/services/ai-automation",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1161ed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
              title: "Web Platform Development",
              desc: "Sub-second React & Next.js systems optimized for SEO authority and Core Web Vitals.",
              link: "/services/web-platform",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1161ed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              )
            },
            {
              title: "Video Editing & Motion Editing",
              desc: "Cinematic post-production cuts, sound design, hook tuning, and frame pacing.",
              link: "/services/video-motion",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1161ed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                  <line x1="7" y1="2" x2="7" y2="22" />
                  <line x1="17" y1="2" x2="17" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="2" y1="7" x2="7" y2="7" />
                  <line x1="2" y1="17" x2="7" y2="17" />
                  <line x1="17" y1="17" x2="22" y2="17" />
                  <line x1="17" y1="7" x2="22" y2="7" />
                </svg>
              )
            },
            {
              title: "UI/UX & Brand Systems",
              desc: "Atomic Figma layouts, interactive user pathways, design spacing tokens, and asset guides.",
              link: "/services/ui-ux-brand",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1161ed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              )
            },
          ].map((service, index) => (
            <Link 
              key={index}
              href={service.link}
              className="p-8 rounded-[24px] border border-black/[0.03] bg-gradient-to-br from-white to-[#1161ed]/[0.005] shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_50px_rgba(17,97,237,0.08)] hover:border-[#1161ed]/20 group flex flex-col justify-between"
            >
              <div>
                {/* Premium Top Border Strip in Brand Gradient */}
                <div className="h-[5px] w-full absolute top-0 left-0 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-t-[24px]" />
                
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="transform group-hover:scale-110 transition-transform duration-300 [&>svg]:stroke-[#1161ed]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-[1.3rem] text-[#0F172A] mb-3 font-bold group-hover:text-[#1161ed] transition-colors duration-200">{service.title}</h3>
                <p className="text-[#64748B] leading-relaxed text-sm">{service.desc}</p>
              </div>
              
              {/* Explore Service micro-action */}
              <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#1161ed] mt-6 cursor-pointer select-none">
                <span>Explore Service</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Work / Process Section */}
      <section id="process" className="py-14 md:py-20 border-t border-[rgba(0,0,0,0.05)] relative">
        {/* Soft Background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#1161ed]/[0.02] rounded-full blur-[120px] pointer-events-none select-none -z-10" />

        <div className="text-center mb-16 relative z-10">
          <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 select-none">
            Our Process
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#0F172A] mb-3 tracking-tight">
            How <span className="text-[#1161ed]">We Work</span>
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-[600px] mx-auto">
            A clear, step-by-step process that takes you from idea to launch without confusion.
          </p>
        </div>

        {/* Process Flow - Desktop alternating grid / Mobile stacked */}
        <div className="relative max-w-[1100px] mx-auto px-4 z-10">
          
          {/* Mobile Process Flow (Compact, Premium Vertical Timeline) */}
          <div className="flex flex-col lg:hidden gap-6 relative pl-6 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:border-l-2 before:border-dashed before:border-[#1161ed]/30">
            {PROCESS_STEPS.map((s, idx) => (
              <div key={idx} className="relative flex items-center gap-4 group">
                
                {/* Timeline Circle Bullet Node */}
                <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#1161ed] flex items-center justify-center shadow-[0_0_12px_rgba(17,97,237,0.12)] z-10 select-none">
                  <span className="text-[0.8rem] font-black text-[#1161ed] tracking-tighter">{s.step}</span>
                </div>

                {/* Glassmorphic Step Card on Right */}
                <div className="flex-1 p-4 pl-6 rounded-2xl border border-black/[0.03] bg-white shadow-sm hover:shadow-[0_15px_30px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/20 transition-all duration-300 relative overflow-hidden flex items-center gap-4">
                  {/* Left Premium Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#1161ed] to-[#3b82f6]" />

                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300">
                    <div className="w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current animate-pulse">
                      {s.icon}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col">
                    <span className="text-[0.62rem] font-black uppercase text-[#1161ed] tracking-wider block mb-0.5">Step {s.step}</span>
                    <h3 className="text-[0.88rem] font-extrabold text-[#0F172A] leading-tight tracking-tight">{s.title}</h3>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Desktop Process Flow (Horizontal Zig-Zag Alternating Grid with Diagonal Connector Arrows) */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4 pt-16 pb-20 relative">
            {PROCESS_STEPS.map((s, idx) => (
              <div key={idx} className="relative flex flex-col items-center justify-center">
                
                {/* Diagonal Arrow overlays absolutely positioned between steps */}
                {idx < 5 && (
                  <div className="absolute top-1/2 left-[80%] -translate-y-1/2 w-full max-w-[50px] z-20 text-[#1161ed] select-none pointer-events-none animate-pulse">
                    {s.isTop ? (
                      /* Down-Right Diagonal Arrow */
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-[25deg] translate-y-3">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    ) : (
                      /* Up-Right Diagonal Arrow */
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-[25deg] -translate-y-3">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    )}
                  </div>
                )}
 
                {/* Alternating Diamond Card positioning */}
                <div 
                  className={`relative w-[155px] h-[155px] flex items-center justify-center transition-all duration-300 ${
                    s.isTop ? "-translate-y-10" : "translate-y-10"
                  }`}
                >
                  {/* Rotated background box - Pure White Background with Solid Blue Dotted Border */}
                  <div className="absolute inset-0 rotate-45 border-[4px] border-dotted border-[#1161ed] bg-white shadow-[0_10px_30px_rgba(17,97,237,0.06)] rounded-2xl transition-all duration-500 ease-out hover:scale-105 hover:border-[#1161ed] hover:shadow-[0_18px_40px_rgba(17,97,237,0.22)]" />
                  {/* Rotated-back text container */}
                  <div className="relative -rotate-45 text-center flex flex-col items-center justify-center p-3 select-none">
                    <div className="mb-2 text-[#1161ed] transition-transform duration-300 group-hover:scale-110">
                      {s.icon}
                    </div>
                    <span className="text-[0.62rem] font-black uppercase text-white tracking-widest bg-[#1161ed] px-2.5 py-1 rounded-full mb-1.5 shadow-[0_2px_8px_rgba(17,97,237,0.25)]">Step {s.step}</span>
                    <h3 className="text-[0.78rem] font-black text-[#0F172A] leading-tight max-w-[105px]">{s.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Integrations Ecosystem Section */}
      <section id="ecosystem" className="py-16 md:py-24 border-t border-[rgba(0,0,0,0.05)] relative overflow-hidden">
        {/* Soft Glowing Orbs in Background */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#1161ed]/[0.02] rounded-full blur-[100px] pointer-events-none select-none -z-10 animate-pulse duration-[8s]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#1161ed]/[0.015] rounded-full blur-[100px] pointer-events-none select-none -z-10 animate-pulse duration-[6s]" />

        <div className="max-w-[1100px] mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-[0.15em] mb-4 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
              <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
              Universal Connectivity
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Connected With Your <span className="text-[#1161ed]">Entire Business Stack</span>
            </h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
              V2 Labs integrates flawlessly with all major service providers, automating raw data transfers and synchronizing your operational pipelines seamlessly.
            </p>
          </div>

          {/* Connected Categories Interactive Grid - Mobile Snap Carousel / Desktop Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 gap-4 px-6 -mx-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0">
            {[
              {
                category: "Payments",
                icon: (
                  <svg className="w-6 h-6 text-[#1161ed] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <rect x="2" y="5" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.08" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                ),
                integrations: [
                  { name: "Stripe", color: "hover:text-[#635BFF] hover:bg-[#635BFF]/5 hover:border-[#635BFF]/30", initial: "S", bg: "bg-gradient-to-tr from-[#635BFF] to-[#8b82ff]" },
                  { name: "Razorpay", color: "hover:text-[#0b72e7] hover:bg-[#0b72e7]/5 hover:border-[#0b72e7]/30", initial: "R", bg: "bg-gradient-to-tr from-[#0b72e7] to-[#4ba3ff]" },
                  { name: "PayPal", color: "hover:text-[#003087] hover:bg-[#003087]/5 hover:border-[#003087]/30", initial: "P", bg: "bg-gradient-to-tr from-[#003087] to-[#0079C1]" }
                ]
              },
              {
                category: "AI",
                icon: (
                  <svg className="w-6 h-6 text-[#1161ed] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 2v20M2 12h20M12 12m-4 0a4 4 0 108 0 4 4 0 10-8 0" fill="currentColor" fillOpacity="0.08" />
                  </svg>
                ),
                integrations: [
                  { name: "OpenAI", color: "hover:text-[#10A37F] hover:bg-[#10A37F]/5 hover:border-[#10A37F]/30", initial: "O", bg: "bg-gradient-to-tr from-[#10A37F] to-[#3cd3ab]" },
                  { name: "Gemini", color: "hover:text-[#1a73e8] hover:bg-[#1a73e8]/5 hover:border-[#1a73e8]/30", initial: "G", bg: "bg-gradient-to-tr from-[#1a73e8] to-[#60a5fa]" },
                  { name: "Claude", color: "hover:text-[#D97706] hover:bg-[#D97706]/5 hover:border-[#D97706]/30", initial: "C", bg: "bg-gradient-to-tr from-[#D97706] to-[#fbbf24]" }
                ]
              },
              {
                category: "CRM",
                icon: (
                  <svg className="w-6 h-6 text-[#1161ed] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity="0.08" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                integrations: [
                  { name: "HubSpot", color: "hover:text-[#FF7A59] hover:bg-[#FF7A59]/5 hover:border-[#FF7A59]/30", initial: "H", bg: "bg-gradient-to-tr from-[#FF7A59] to-[#ffaa85]" },
                  { name: "Zoho", color: "hover:text-[#E81C24] hover:bg-[#E81C24]/5 hover:border-[#E81C24]/30", initial: "Z", bg: "bg-gradient-to-tr from-[#E81C24] to-[#f46b70]" }
                ]
              },
              {
                category: "Communication",
                icon: (
                  <svg className="w-6 h-6 text-[#1161ed] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="currentColor" fillOpacity="0.08" />
                  </svg>
                ),
                integrations: [
                  { name: "WhatsApp", color: "hover:text-[#25D366] hover:bg-[#25D366]/5 hover:border-[#25D366]/30", initial: "W", bg: "bg-gradient-to-tr from-[#25D366] to-[#4ade80]" },
                  { name: "Twilio", color: "hover:text-[#F22F46] hover:bg-[#F22F46]/5 hover:border-[#F22F46]/30", initial: "T", bg: "bg-gradient-to-tr from-[#F22F46] to-[#f87171]" },
                  { name: "Slack", color: "hover:text-[#4A154B] hover:bg-[#4A154B]/5 hover:border-[#4A154B]/30", initial: "S", bg: "bg-gradient-to-tr from-[#4A154B] to-[#ec4899]" }
                ]
              },
              {
                category: "Database & Cloud",
                icon: (
                  <svg className="w-6 h-6 text-[#1161ed] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" fillOpacity="0.08" />
                    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
                  </svg>
                ),
                integrations: [
                  { name: "Firebase", color: "hover:text-[#FFCA28] hover:bg-[#FFCA28]/5 hover:border-[#FFCA28]/30", initial: "F", bg: "bg-gradient-to-tr from-[#FFCA28] to-[#fde047]" },
                  { name: "AWS", color: "hover:text-[#FF9900] hover:bg-[#FF9900]/5 hover:border-[#FF9900]/30", initial: "A", bg: "bg-gradient-to-tr from-[#FF9900] to-[#fbbf24]" },
                  { name: "MongoDB", color: "hover:text-[#47A248] hover:bg-[#47A248]/5 hover:border-[#47A248]/30", initial: "M", bg: "bg-gradient-to-tr from-[#47A248] to-[#86efac]" }
                ]
              },
              {
                category: "Productivity",
                icon: (
                  <svg className="w-6 h-6 text-[#1161ed] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.08" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
                integrations: [
                  { name: "Google Calendar", color: "hover:text-[#4285F4] hover:bg-[#4285F4]/5 hover:border-[#4285F4]/30", initial: "G", bg: "bg-gradient-to-tr from-[#4285F4] to-[#93c5fd]" },
                  { name: "Notion", color: "hover:text-[#000000] hover:bg-[#000000]/5 hover:border-[#000000]/30", initial: "N", bg: "bg-gradient-to-tr from-[#000000] to-[#4b5563]" },
                  { name: "Trello", color: "hover:text-[#0079BF] hover:bg-[#0079BF]/5 hover:border-[#0079BF]/30", initial: "T", bg: "bg-gradient-to-tr from-[#0079BF] to-[#60a5fa]" }
                ]
              }
            ].map((cat, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[80vw] sm:w-[280px] snap-center md:w-auto md:flex-shrink-0 p-8 rounded-[24px] border border-black/[0.03] bg-white shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/20 group"
              >
                {/* Visual Category Connection Accent */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#1161ed]/5 group-hover:bg-gradient-to-r group-hover:from-[#1161ed] group-hover:to-[#3b82f6] transition-colors duration-300" />
                
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center border border-[#1161ed]/10 group-hover:scale-105 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 shadow-sm">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight">{cat.category}</h3>
                </div>

                {/* Sub-Badges Integrations List */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.integrations.map((int, i) => (
                    <div 
                      key={i} 
                      className={`inline-flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F8FAFC] border border-slate-100/80 rounded-xl text-[0.82rem] font-bold text-[#475569] transition-all duration-200 cursor-pointer select-none ${int.color}`}
                    >
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[0.62rem] font-black text-white ${int.bg} shadow-sm select-none`}>
                        {int.initial}
                      </span>
                      <span>{int.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Help Note */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-[0.7rem] font-bold text-[#64748B] uppercase tracking-widest animate-pulse">
            <span>Swipe to explore stack</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>

          {/* Support Indicator Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3.5 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] px-8 py-4 rounded-full text-white font-extrabold shadow-[0_8px_30px_rgba(17,97,237,0.25)] hover:shadow-[0_12px_40px_rgba(17,97,237,0.4)] transition-all duration-300 hover:scale-[1.02]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span className="text-base uppercase tracking-wider">52+ integrations supported</span>
            </div>
          </div>

        </div>
      </section>

      {/* Why Startups Choose V2Labs Section */}
      <section id="why-us" className="py-16 md:py-24 border-t border-[rgba(0,0,0,0.05)] relative overflow-hidden">
        {/* Soft Glowing Orbs in Background */}
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-[#1161ed]/[0.02] rounded-full blur-[130px] pointer-events-none select-none -z-10 animate-pulse duration-[10s]" />
        
        <div className="max-w-[1100px] mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-3">Founders' Choice</p>
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Why Startups Choose <span className="text-[#1161ed]">V2Labs</span>
            </h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
              Engineered for absolute velocity. Architected for rapid enterprise scaling.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
            {[
              {
                title: "Startup-Focused Execution",
                desc: "High-velocity development cycles built for rapid pivot capabilities, continuous deployment, and immediate search engine indexing authority.",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
                    <polyline points="19 9 19 5 15 5" />
                  </svg>
                )
              },
              {
                title: "Fast MVP Delivery",
                desc: "Convert raw concepts into fully responsive, production-ready web platforms and native builds in weeks, completely skipping legacy agency lag times.",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <polyline points="13 5 20 12 13 19" />
                    <polyline points="4 5 11 12 4 19" />
                  </svg>
                )
              },
              {
                title: "Scalable Architecture",
                desc: "Sub-second load times built on optimized Next.js + Django APIs, prepared to support enterprise load spikes and millions of monthly operations.",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                    <path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
                    <path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
                    <path d="M4 15v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
                  </svg>
                )
              },
              {
                title: "Modern UI Systems",
                desc: "Bespoke, visual-first interactive aesthetics containing micro-interactions and harmonious color schemes that instantly establish industry dominance.",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                  </svg>
                )
              },
              {
                title: "AI-Ready Infrastructure",
                desc: "Native pipeline integrations configured for Large Language Models, agentic automation grids, vector databases, and responsive real-time AI widgets.",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
                title: "Product-First Thinking",
                desc: "We operate with a founder's mindset. We don't just ship lines of code; we build for retention, conversion metrics, and active product-led growth.",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707-.707m2.828 9.9a5 5 0 113.626 0" />
                  </svg>
                )
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="p-3.5 sm:p-5 md:p-9 rounded-2xl md:rounded-[30px] border border-black/[0.03] bg-gradient-to-br from-white to-[#1161ed]/[0.003] shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/20 group"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] md:h-[5px] bg-[#1161ed]/5 group-hover:bg-gradient-to-r group-hover:from-[#1161ed] group-hover:to-[#3b82f6] transition-colors duration-300" />
                
                {/* Visual Glassmorphic glow helper */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#1161ed]/[0.01] group-hover:bg-[#1161ed]/[0.05] rounded-full blur-xl transition-colors duration-300 pointer-events-none" />

                {/* Icon Container */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center border border-[#1161ed]/10 group-hover:scale-105 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 shadow-sm mb-3 md:mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-[0.78rem] sm:text-[0.95rem] md:text-[1.3rem] text-[#0F172A] font-black mb-1.5 md:mb-3.5 tracking-tight group-hover:text-[#1161ed] transition-colors duration-200 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-normal md:leading-relaxed text-[0.62rem] sm:text-[0.72rem] md:text-[0.92rem]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Auto-Moving Testimonials Wall */}
      <section id="testimonials" className="relative overflow-hidden border-t border-[rgba(0,0,0,0.05)] py-16 md:py-24">
        <div className="absolute left-[-5%] top-[20%] h-[350px] w-[350px] animate-pulse rounded-full bg-[#1161ed]/[0.02] blur-[110px] duration-[8s] pointer-events-none select-none -z-10" />

        <div className="relative z-10 mx-auto px-4 max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] border border-[#1161ed]/10 bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(239,246,255,0.96))] py-8 shadow-[0_30px_90px_rgba(17,97,237,0.08)] sm:py-12 md:rounded-[40px] md:py-16">
            <div className="pointer-events-none absolute left-[-40px] top-[-20px] h-36 w-36 rounded-full bg-[#1161ed]/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-30px] right-[-20px] h-40 w-40 rounded-full bg-[#60A5FA]/15 blur-3xl" />

            <div className="relative mb-8 text-center md:mb-12 px-4">
              <p className="mb-3 text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#1161ed]">
                Founder Proof
              </p>
              <h2 className="mx-auto max-w-[620px] text-[1.9rem] font-extrabold leading-[1.2] text-[#0F172A] sm:text-[2.2rem] md:text-[2.8rem]">
                What Our <span className="text-[#1161ed]">Founders Say</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-[#64748B] sm:text-base md:text-lg">
                Real feedback in a high-fidelity auto-sliding horizontal marquee, fully mobile-responsive and pausing on hover.
              </p>
            </div>

            {/* Double Row Horizontal Marquee */}
            <div className="relative flex flex-col gap-6 overflow-hidden py-4 select-none">
              {/* Fade masks */}
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-gradient-to-r from-[#f8fbff] to-transparent sm:w-24 md:w-36 lg:w-48" />
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-gradient-to-l from-[#eef6ff] to-transparent sm:w-24 md:w-36 lg:w-48" />

              {/* Row 1: Leftward Marquee */}
              <div className="relative flex w-full overflow-hidden">
                <div className="flex shrink-0 gap-6 animate-marquee hover:[animation-play-state:paused] py-2 cursor-pointer">
                  {/* Set 1 */}
                  <div className="flex gap-6 shrink-0">
                    {TESTIMONIALS_ROW_1.map((t, idx) => (
                      <TestimonialCard key={`row1-1-${idx}`} testimonial={t} />
                    ))}
                  </div>
                  {/* Set 2 (Duplicate) */}
                  <div className="flex gap-6 shrink-0" aria-hidden="true">
                    {TESTIMONIALS_ROW_1.map((t, idx) => (
                      <TestimonialCard key={`row1-2-${idx}`} testimonial={t} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Rightward Marquee */}
              <div className="relative flex w-full overflow-hidden">
                <div className="flex shrink-0 gap-6 animate-marquee-reverse hover:[animation-play-state:paused] py-2 cursor-pointer">
                  {/* Set 1 */}
                  <div className="flex gap-6 shrink-0">
                    {TESTIMONIALS_ROW_2.map((t, idx) => (
                      <TestimonialCard key={`row2-1-${idx}`} testimonial={t} />
                    ))}
                  </div>
                  {/* Set 2 (Duplicate) */}
                  <div className="flex gap-6 shrink-0" aria-hidden="true">
                    {TESTIMONIALS_ROW_2.map((t, idx) => (
                      <TestimonialCard key={`row2-2-${idx}`} testimonial={t} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#64748B] sm:text-[0.72rem]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1161ed] opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1161ed]"></span>
              </span>
              <span>Auto-moving founder feedback • Hover to Pause</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section id="story" className="py-16 md:py-24 border-t border-[rgba(0,0,0,0.03)] relative overflow-hidden">
        {/* Glowing Ambient Background Orb */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#1161ed]/[0.02] rounded-full blur-[110px] pointer-events-none select-none -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#1161ed]/[0.015] rounded-full blur-[110px] pointer-events-none select-none -z-10 animate-pulse duration-[8s]" />

        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Journey Visual Timeline */}
            <div className="lg:col-span-5 flex flex-col gap-8 relative pl-6 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#1161ed]/30 before:via-[#1161ed]/20 before:to-[#1161ed]/5">
              
              {/* Milestone 1 */}
              <div className="relative flex flex-col gap-2 group">
                <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#1161ed] flex items-center justify-center shadow-[0_0_12px_rgba(17,97,237,0.12)] z-10 group-hover:bg-[#1161ed] group-hover:border-transparent transition-all duration-300">
                  <span className="text-[0.8rem] font-black text-[#1161ed] group-hover:text-white transition-colors duration-300">01</span>
                </div>
                <div className="p-5 pl-6 rounded-2xl border border-black/[0.03] bg-[#F8FAFC]/80 backdrop-blur-sm group-hover:bg-white group-hover:shadow-[0_15px_30px_rgba(17,97,237,0.05)] group-hover:border-[#1161ed]/20 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#1161ed] opacity-70" />
                  <h4 className="text-[0.95rem] font-black text-[#0F172A] mb-1">Academics & College Struggle</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Balancing rigid curriculums, college exams, and attendance requirements while independently learning cutting-edge engineering.
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative flex flex-col gap-2 group">
                <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#1161ed] flex items-center justify-center shadow-[0_0_12px_rgba(17,97,237,0.12)] z-10 group-hover:bg-[#1161ed] group-hover:border-transparent transition-all duration-300">
                  <span className="text-[0.8rem] font-black text-[#1161ed] group-hover:text-white transition-colors duration-300">02</span>
                </div>
                <div className="p-5 pl-6 rounded-2xl border border-black/[0.03] bg-[#F8FAFC]/80 backdrop-blur-sm group-hover:bg-white group-hover:shadow-[0_15px_30px_rgba(17,97,237,0.05)] group-hover:border-[#1161ed]/20 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#1161ed] opacity-70" />
                  <h4 className="text-[0.95rem] font-black text-[#0F172A] mb-1">The Freelance Hustle</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Starting with lightweight freelance projects, delivering proper execution and high quality to build deep product expertise.
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex flex-col gap-2 group">
                <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#1161ed] flex items-center justify-center shadow-[0_0_12px_rgba(17,97,237,0.12)] z-10 group-hover:bg-[#1161ed] group-hover:border-transparent transition-all duration-300">
                  <span className="text-[0.8rem] font-black text-[#1161ed] group-hover:text-white transition-colors duration-300">03</span>
                </div>
                <div className="p-5 pl-6 rounded-2xl border border-black/[0.03] bg-[#F8FAFC]/80 backdrop-blur-sm group-hover:bg-white group-hover:shadow-[0_15px_30px_rgba(17,97,237,0.05)] group-hover:border-[#1161ed]/20 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#1161ed] to-[#3b82f6]" />
                  <h4 className="text-[0.95rem] font-black text-[#0F172A] mb-1">The Genesis of V2Labs</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Uniting the skills, ambition, and names of **Vishal** and **Vandan** into a proper, elite high-velocity digital agency.
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Compelling Narrative Copy */}
            <div className="lg:col-span-7 flex flex-col text-left items-start">
              <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-[0.15em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
                <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
                Success Story
              </div>
              <h2 className="text-[2.2rem] lg:text-[2.8rem] font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight">
                From College Workloads to <span className="bg-gradient-to-r from-[#1161ed] to-[#3b82f6] bg-clip-text text-transparent">Elite Engineering</span>
              </h2>
              <div className="flex flex-col gap-6 text-[#64748B] text-[1.05rem] leading-[1.75]">
                <p>
                  V2Labs wasn't born in a corporate boardroom—it was forged in college dorms, fueled by late-night coding sessions and a relentless ambition. Our founders, **Vishal** and **Vandan**, started with a simple belief: that digital experiences should be designed properly, built for extreme performance, and executed without compromise.
                </p>
                <p>
                  While struggling to manage rigid college curriculums, exams, and attendance workloads, they chose to invest every spare hour in learning the modern web architecture. What began as small, custom freelance projects for local businesses quickly evolved. Because of their sheer speed and quality, they won client trust and delivered flawless builds every single time.
                </p>
                <p className="font-medium text-[#334155] border-l-4 border-[#1161ed]/70 pl-4 italic">
                  "We operate with a founder's mindset because we've lived the struggle. We don't just ship lines of code; we build proper scalable assets that drive real conversion and growth."
                </p>
                <p>
                  Today, **V2Labs** represents the combined partnership and technical obsession of its two founders. We have scaled from simple freelance code into a proper engineering partner for startups globally, combining cutting-edge technology with visual excellence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Information & FAQ Section */}
      <section id="info" className="py-14 md:py-20 bg-[#F8FAFC] mb-10 md:mb-14 rounded-[40px] relative">
        {/* Soft Background glow-orb */}
        <div className="absolute right-[10%] top-[10%] w-[300px] h-[300px] bg-[#1161ed]/[0.015] rounded-full blur-[90px] pointer-events-none select-none -z-10" />

        <div className="max-w-[850px] mx-auto px-5 relative z-10 flex flex-col items-center">
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-3">FAQ</p>
            <h2 className="text-[2.2rem] lg:text-[2.8rem] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">Got Questions? We Have Answers.</h2>
            <p className="text-[1.05rem] text-[#64748B] max-w-[620px] mx-auto leading-[1.6]">
              Explore detailed, proper answers about our high-velocity development cycles, customized tech stack, AI capabilities, and client collaboration.
            </p>
          </div>
          
          {/* FAQ Accordions */}
          <div className="w-full flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-4 sm:p-5 transition-all duration-300 ${
                  openFaq === idx
                    ? "bg-white border-[#1161ed]/30 shadow-[0_15px_35px_rgba(17,97,237,0.06)]"
                    : "bg-white/60 border-black/[0.03] shadow-sm hover:border-[#1161ed]/20 hover:bg-white hover:shadow-[0_10px_25px_rgba(17,97,237,0.04)]"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-black text-[#0F172A] text-sm sm:text-base cursor-pointer select-none group"
                >
                  <span className="pr-4 group-hover:text-[#1161ed] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    openFaq === idx
                      ? "bg-[#1161ed] text-white border-transparent"
                      : "bg-[#1161ed]/[0.05] text-[#1161ed] border-transparent group-hover:bg-[#1161ed] group-hover:text-white"
                  }`}>
                    <svg
                      className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openFaq === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm leading-relaxed text-[#64748B] pt-3 pr-2 mt-3 border-t border-slate-100">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
