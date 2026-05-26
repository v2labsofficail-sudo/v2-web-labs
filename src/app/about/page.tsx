"use client";

import React from "react";
import Link from "next/link";
import TeamCarousel from "@/components/TeamCarousel";

export default function AboutPage() {
  const stats = [
    { value: "120+", label: "Projects Completed" },
    { value: "45+", label: "Active Startups Launched" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "15+", label: "Design Awards" },
  ];

  const values = [
    {
      title: "Modern Design",
      desc: "We build gorgeous, high-fidelity user layouts. Every pixel is deliberately crafted to stun your audiences.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      ),
    },
    {
      title: "Clean Code",
      desc: "Our systems are built on Next.js, Django, and clean engineering principles. Speed, safety, and scale are guaranteed.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      title: "Scalable Solutions",
      desc: "Whether you represent a local shop or a global corporate hub, our architectures scale alongside your daily users.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="21" y1="9" x2="3" y2="9" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: "Timely Delivery",
      desc: "We understand that speed to market defines startup survival. We deliver projects on schedule without cutting corners.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: "Vandan Darji",
      role: "Full Stack Developer + Market Strategy Builder",
      initials: "VD",
      quote: "Compiles bulletproof, sub-second architectures.",
      gradient: "from-[#1161ed] to-[#3b82f6]",
      linkedin: "https://www.linkedin.com/in/vandan-darji-3b282931a/",
      github: "https://github.com/Vandann-1/",
      bio: "Oversees core systems scaling, cloud sync grids, and security layers. Focused on TypeScript and React performance.",
      img: "/Vandan Darji.png",
    },
    {
      name: "Jevin Kalathiya",
      role: "PHP & Laravel Developer",
      initials: "JK",
      quote:
        "Building scalable backend systems and efficient web applications.",
      gradient: "from-[#ec4899] to-[#f43f5e]",
      linkedin: "https://www.linkedin.com/in/jevinkalathiya/",
      github: "https://github.com/JevinKalathiya",
      bio: "PHP and Laravel developer focused on building secure, scalable, and high-performance web applications. Experienced in REST APIs, database design, authentication systems, and backend architecture.",
      img: "/Jevin Kalathiya.jpeg",
    },
    {
      name: "Rishabh Tiwari",
      role: "Social media manager/ and wordpress desinger & developer",
      initials: "RT",
      quote: "Transforms abstract ideas into bold visual stories.",
      gradient: "from-[#10b981] to-[#059669]",
      linkedin: "#",
      github: "#",
      bio: "Social media manager and wordpress designer & developer focused on building secure, scalable, and high-performance web applications. Experienced in REST APIs, database design, authentication systems, and backend architecture.",
      img: "/Rishabh Tiwari.png",
    },
    {
      name: "Rohan Malhotra",
      role: "Creative Director",
      initials: "RM",
      quote: "Transforms abstract ideas into bold visual stories.",
      gradient: "from-[#8b5cf6] to-[#d946ef]",
      linkedin: "#",
      github: "#",
      bio: "Guides brand visual directions, customized assets, and cross-channel campaign media. Focused on bringing emotional warmth to digital products.",
      img: "/team_rohan.png",
    },
    {
      name: "Sarah Jenkins",
      role: "AI Operations Lead",
      initials: "SJ",
      quote: "Leverages machine intelligence for hyper-efficient workflows.",
      gradient: "from-[#f59e0b] to-[#ec4899]",
      linkedin: "#",
      github: "#",
      bio: "Designs custom multi-agent LLM systems, prompt chains, and predictive analytics modules. Specializes in automating studio operational tasks.",
      img: "/team_sarah.png",
    },
  ];

  return (
    <div className="bg-slate-50/60 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Background Soft Mesh Gradients for Premium Studio Feel */}
      <div className="absolute top-[8%] left-[5%] w-[400px] h-[400px] bg-[#1161ed]/[0.03] rounded-full blur-[130px] pointer-events-none select-none -z-10" />
      <div className="absolute top-[35%] right-[5%] w-[500px] h-[500px] bg-[#1161ed]/[0.02] rounded-full blur-[150px] pointer-events-none select-none -z-10 animate-pulse duration-[10s]" />

      {/* Luminous Dotted Grid Background Pattern */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#1161ed_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.25] -z-10 pointer-events-none select-none" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 max-w-[1100px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-[0.15em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
          <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
          Who We Are
        </div>

        <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.1] text-slate-900 max-w-[850px] mx-auto mb-6 tracking-tight">
          Pioneering Premium{" "}
          <span className="bg-gradient-to-r from-[#1161ed] to-[#3b82f6] bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </h1>

        <p className="text-[#64748B] text-sm sm:text-base lg:text-[1.05rem] leading-[1.75] max-w-[720px] mx-auto">
          V2 Labs is a modern digital agency and collaborative engineering
          studio. We partner with visionary startups and global brands to
          architect gorgeous websites, scalable software products, customized
          ERP/CRM integrations, and AI workflow automation platforms.
        </p>
      </section>

      {/* Stats Counter Section (Highly Visual Glassmorphism Grid) */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24 max-w-[1100px] mx-auto px-6 relative z-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="group relative p-6 sm:p-8 rounded-[24px] border border-[#1161ed]/10 bg-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(17,97,237,0.02)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#1161ed]/25 hover:bg-white hover:shadow-[0_20px_40px_rgba(17,97,237,0.08)] flex flex-col justify-center items-center text-center"
          >
            {/* Top Accent Gradient Strip */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="text-[2.2rem] sm:text-[2.8rem] font-black tracking-tight text-[#1161ed] mb-1.5 leading-none">
              {stat.value}
            </span>
            <span className="text-slate-500 font-extrabold text-[0.8rem] sm:text-[0.88rem] tracking-tight leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* Split Section: Our Story & DNA */}
      <section className="py-12 border-t border-slate-200/50 mb-24 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              Our DNA
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Built for Velocity and Design Integrity
            </h2>
            <p className="text-[#64748B] text-sm sm:text-[0.96rem] leading-relaxed mb-5">
              At V2 Labs, we believe outstanding interfaces shouldn't take
              months to deploy. We have streamlined the classic development
              bottlenecks by keeping design and engineering closely tied.
            </p>
            <p className="text-[#64748B] text-sm sm:text-[0.96rem] leading-relaxed">
              We focus on building performant frontend experiences that sit on
              clean architecture models. When you partner with us, you are
              working directly with specialized engineers dedicated to scaling
              your product conversion speeds and ensuring bulletproof code
              delivery.
            </p>
          </div>

          {/* Right Cards Stack Column */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {[
              {
                title: "Sub-Second Performance",
                desc: "Every system is custom-compiled for maximum speeds and optimized Core Web Vitals.",
                icon: (
                  <svg
                    className="w-5 h-5"
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
                title: "Figma-to-Code Precision",
                desc: "We respect every pixel. Spacing patterns, grids, and typography sync perfectly to clean layouts.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                ),
              },
              {
                title: "Scale-Ready Abstractions",
                desc: "Modular TypeScript code ensures your frontend infrastructure remains adaptable as users expand.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582"
                    />
                  </svg>
                ),
              },
            ].map((dna, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl border border-black/[0.03] bg-white shadow-sm hover:shadow-[0_15px_30px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/20 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Left Line Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#1161ed] to-[#3b82f6]" />

                <div className="w-10 h-10 rounded-xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 shadow-sm">
                  {dna.icon}
                </div>
                <div>
                  <h4 className="text-[0.94rem] font-black text-slate-900 mb-1 group-hover:text-[#1161ed] transition-colors">
                    {dna.title}
                  </h4>
                  <p className="text-[0.82rem] text-slate-500 leading-relaxed">
                    {dna.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Studio Principles Section */}
      <section className="py-12 border-t border-slate-200/50 mb-24 max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            Our Foundation
          </div>
          <h2 className="text-3xl md:text-[2.4rem] font-black text-[#0F172A] tracking-tight">
            Core Studio Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[24px] border border-black/[0.03] bg-white shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(17,97,237,0.07)] hover:border-[#1161ed]/20 group flex flex-col justify-between"
            >
              {/* Premium Top Border Strip in Brand Gradient */}
              <div className="h-[5px] w-full absolute top-0 left-0 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-t-[24px]" />

              <div>
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-12 h-12 rounded-xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center border border-[#1161ed]/10 group-hover:scale-110 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 shadow-sm">
                    {val.icon}
                  </div>
                </div>
                <h3 className="text-[1.2rem] text-slate-900 mb-3 font-extrabold group-hover:text-[#1161ed] transition-colors duration-200">
                  {val.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 border-t border-slate-200/50 mb-24 max-w-[1100px] mx-auto px-6 overflow-visible">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            Our Crew
          </div>
          <h2 className="text-3xl md:text-[2.4rem] font-black text-[#0F172A] tracking-tight">
            Meet the Builders
          </h2>
          <p className="text-slate-500 text-sm max-w-[500px] mx-auto mt-2">
            The design-obsessed partners and engineering minds behind V2 Labs.
          </p>
        </div>

        <TeamCarousel team={team} />
      </section>

      {/* Dark Navy Slate Call to Action Section */}
      <section className="relative rounded-[32px] bg-[#020B1C] p-10 sm:p-16 text-center text-white overflow-hidden shadow-2xl z-10 mt-16 max-w-[1100px] mx-auto mx-6">
        {/* Background Soft Orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1161ed] opacity-10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3b82f6] opacity-5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-[650px] mx-auto">
          <h2 className="text-3xl sm:text-[2.5rem] font-black tracking-tight leading-tight mb-4 text-white">
            Let's Build Your Digital Future
          </h2>
          <p className="text-[#94A3B8] max-w-[520px] mx-auto text-[0.92rem] leading-relaxed mb-8">
            Our engineering team is ready to map your code architectures, visual
            guidelines, or motion sequences. Reach out for a free quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] hover:from-[#0c4ec3] hover:to-[#2563EB] shadow-[0_4px_20px_rgba(17,97,237,0.25)] hover:shadow-[0_8px_30px_rgba(17,97,237,0.4)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
          >
            Initiate Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
