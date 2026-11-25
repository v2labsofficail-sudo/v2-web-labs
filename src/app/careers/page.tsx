"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Video, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight, 
  MapPin, 
  Briefcase, 
  Clock, 
  Award, 
  Laptop, 
  MessageSquare,
  Sparkles
} from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/kMoAvfYPaiPvgYmB6";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<"all" | "video" | "marketing">("all");

  const roles = [
    {
      id: "video",
      title: "Video Editor & Motion Designer",
      exp: "1–2 Years Experience",
      department: "Creative & Media Production",
      location: "Mira Bhayandar / Mumbai (Hybrid/On-site)",
      type: "Full-Time",
      salary: "Competitive Salary + Performance Bonuses",
      image: "/images/services/video-motion.jpg",
      tags: ["Premiere Pro", "After Effects", "Short-Form Reels", "Motion Design", "Sound Design"],
      summary:
        "We are looking for a creative Video Editor with 1 to 2 years of experience who understands viral short-form hooks, dynamic pacing, cinematic sound design, and high-retention video storytelling.",
      responsibilities: [
        "Edit high-converting short-form reels, YouTube shorts, and promotional brand videos.",
        "Craft clean motion graphics, animated text kinetic overlays, and visual effects in After Effects.",
        "Execute precision sound design, sound effects (SFX), and music sync to maintain maximum viewer retention.",
        "Collaborate with the marketing and creative team to turn raw hooks and scripts into engaging visual assets.",
        "Deliver polished cuts optimized for multiple aspect ratios (9:16, 16:9, 1:1).",
      ],
      requirements: [
        "1–2 years of active video editing experience with a verified showreel or portfolio of published reels.",
        "Proficiency in Adobe Premiere Pro, After Effects, DaVinci Resolve, or equivalent editing tools.",
        "Strong understanding of hook retention, pacing, and modern social media aesthetics.",
        "Good visual taste in typography, color grading, and motion rhythm.",
        "Ability to deliver projects within committed sprint deadlines.",
      ],
    },
    {
      id: "marketing",
      title: "Digital Marketer & Growth Strategist",
      exp: "2–3 Years Experience",
      department: "Growth & Performance Marketing",
      location: "Mira Bhayandar / Mumbai (Hybrid/On-site)",
      type: "Full-Time",
      salary: "Competitive Salary + High Growth Trajectory",
      image: "/images/services/digital-marketing.jpg",
      tags: ["Meta Ads", "Google Ads", "Technical SEO", "Lead Generation", "GA4 & Funnels"],
      summary:
        "We are looking for an analytical, results-driven Digital Marketer with 2 to 3 years of hands-on experience in paid advertising (Meta & Google Ads), SEO, conversion rate optimization, and brand growth.",
      responsibilities: [
        "Plan, launch, and optimize high-ROAS paid advertising campaigns across Meta (Facebook & Instagram) and Google Ads.",
        "Implement technical SEO, keyword mapping, on-page optimization, and local search strategies to drive organic leads.",
        "Design and execute lead generation funnels, automated WhatsApp/email drip workflows, and conversion landing pages.",
        "Perform A/B creative testing, audience segmentation, and conversion rate optimization (CRO) audits.",
        "Track weekly campaign metrics and deliver clear reports on ROAS, CAC, CTR, and qualified inbound leads.",
      ],
      requirements: [
        "2–3 years of proven experience managing paid ad budgets and delivering measurable organic growth.",
        "Deep expertise with Meta Ads Manager, Google Ads, Google Analytics 4 (GA4), and Google Search Console.",
        "Solid understanding of marketing funnels, copy testing, and landing page conversions.",
        "Familiarity with SEO research tools such as Semrush, Ahrefs, or Screaming Frog is a plus.",
        "Proactive problem solver with clear written and verbal communication skills.",
      ],
    },
  ];

  const filteredRoles = roles.filter((role) => {
    if (selectedRole === "all") return true;
    return role.id === selectedRole;
  });

  return (
    <div className="bg-white min-h-screen text-slate-900 font-Outfit">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (CLEAN & SIMPLE) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-700 mb-6 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            We Are Hiring &bull; 2 Openings
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-5">
            Careers at V2 Labs Global
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We are looking for talented creators and marketers to join our team in Bhayandar East, Mira Bhayandar. Work on ambitious brand projects, viral videos, and high-impact digital campaigns.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#openings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-950 hover:bg-black text-white font-bold text-sm rounded-full shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>View Openings</span>
              <span className="w-5 h-5 rounded-full bg-white/20 text-xs flex items-center justify-center">2</span>
            </a>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm rounded-full border border-slate-300 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>Application Form</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Simple Info Pills */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-slate-700" /> 2 Active Roles
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-700" /> Bhayandar East, Mumbai
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-700" /> Full-Time Roles
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SIMPLE PHOTO SHOWCASE */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Life &amp; Work at V2 Labs
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                A focused, creative environment where great work gets recognized and rewarded.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Photo 1: Video Editing */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/services/video-motion.jpg"
                    alt="Video Editing Workspace"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900 mb-1">Video Editing &amp; Motion</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Editing dynamic short-form reels, typography overlays, and performance video ads.
                  </p>
                </div>
              </div>

              {/* Photo 2: Digital Marketing */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/services/digital-marketing.jpg"
                    alt="Digital Marketing and Analytics"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900 mb-1">Marketing &amp; Growth</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Managing paid ad campaigns, SEO strategies, and conversion funnels.
                  </p>
                </div>
              </div>

              {/* Photo 3: Team Collaboration */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/hero_collaboration.jpg"
                    alt="Team Collaboration"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900 mb-1">Direct Collaboration</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Work directly with founders and senior colleagues without corporate red tape.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 3. PERKS (SIMPLE & CLEAN) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Why Work With Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Award className="w-5 h-5 text-slate-800" />,
                  title: "Competitive Salary",
                  desc: "Fair compensation with performance incentives on client deliverables.",
                },
                {
                  icon: <Laptop className="w-5 h-5 text-slate-800" />,
                  title: "Modern Tools",
                  desc: "High-spec workstations, licensed editing software, and asset libraries.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-slate-800" />,
                  title: "Real Career Growth",
                  desc: "Fast promotions based on execution quality and initiative.",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-slate-800" />,
                  title: "Bhayandar East Location",
                  desc: "Convenient office easily accessible via local train station and Metro.",
                },
              ].map((perk, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                    {perk.icon}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1.5">{perk.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 4. CURRENT OPENINGS (EXACTLY 2 ROLES - SIMPLE & CLEAN) */}
      {/* ========================================================================= */}
      <section id="openings" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100 scroll-mt-10">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Current Openings (2)
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                We are actively hiring for these two positions.
              </p>
            </div>

            {/* Simple Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-sm self-start sm:self-auto">
              <button
                onClick={() => setSelectedRole("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedRole === "all"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All (2)
              </button>
              <button
                onClick={() => setSelectedRole("video")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedRole === "video"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Video Editor (1)
              </button>
              <button
                onClick={() => setSelectedRole("marketing")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedRole === "marketing"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Digital Marketer (1)
              </button>
            </div>
          </div>

          {/* Role Cards */}
          <div className="space-y-8">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Image Thumbnail */}
                  <div className="lg:col-span-4 relative aspect-[16/10] lg:aspect-auto min-h-[220px] bg-slate-100">
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                        {role.id === "video" ? <Video className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
                        {role.department}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2.5 py-1 bg-slate-900 text-white rounded-md text-xs font-bold mb-1">
                        {role.exp}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Role Details */}
                  <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                    
                    <div>
                      {/* Title & Top Action */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                            {role.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-medium text-slate-500">
                            <span className="font-bold text-slate-900">{role.exp}</span>
                            <span>&bull;</span>
                            <span>{role.type}</span>
                            <span>&bull;</span>
                            <span className="text-slate-700">{role.location}</span>
                          </div>
                        </div>

                        <a
                          href={GOOGLE_FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all self-start sm:self-auto shrink-0"
                        >
                          <span>Apply</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Summary */}
                      <p className="text-slate-600 text-sm leading-relaxed my-5">
                        {role.summary}
                      </p>

                      {/* Grid: Responsibilities & Requirements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                        
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {role.responsibilities.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {role.requirements.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Tags */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {role.tags.map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Apply Bar */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs text-slate-500 text-center sm:text-left">
                        Submit resume &amp; portfolio link via our official application form.
                      </span>

                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                      >
                        <span>Submit Application</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SIMPLE APPLICATION PORTAL (NO DARK BLUE - CLEAN LIGHT CARD) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-[850px] mx-auto px-5 sm:px-8 text-center">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
              
              <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-slate-900" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-3">
                Ready to Apply?
              </h2>

              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed mb-6">
                Please complete our official Google Form to submit your profile. Make sure your portfolio or showreel link has public viewing permissions enabled.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto mb-8 text-left text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">1. Resume / CV</span>
                  <span className="text-slate-500">Updated PDF file</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">2. Live Portfolio</span>
                  <span className="text-slate-500">Reels or ad samples</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">3. Location</span>
                  <span className="text-slate-500">Mumbai / Bhayandar</span>
                </div>
              </div>

              {/* Main Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-950 hover:bg-black text-white font-bold text-sm rounded-full shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <span>Open Application Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919022641867?text=Hi%20V2%20Labs%20Team,%20I%20have%20a%20query%20about%20the%20careers%20opening"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full border border-slate-300 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>

              <p className="text-xs text-slate-400 mt-5 font-mono">
                Form link: <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-slate-700 underline">{GOOGLE_FORM_URL}</a>
              </p>

            </div>

          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
