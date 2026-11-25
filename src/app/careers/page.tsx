"use client";

import React, { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Video, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight, 
  Globe, 
  Briefcase, 
  Clock, 
  Award, 
  Laptop, 
  MessageSquare,
  Sparkles,
  Sliders,
  Play,
  BarChart3,
  Flame,
  Zap,
  Terminal,
  Calendar
} from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/kMoAvfYPaiPvgYmB6";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<"all" | "video" | "marketing">("all");

  return (
    <div className="bg-white min-h-screen text-slate-900 font-Outfit">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (100% REMOTE & MINIMALIST) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
          
          {/* Remote Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-800 mb-6 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            100% Remote Roles &bull; Work From Anywhere
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-5">
            Remote Careers at V2 Labs Global
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We are a distributed technology and digital growth studio. Work from anywhere in India with complete creative autonomy, flexible working hours, and high-impact brand projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#openings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-950 hover:bg-black text-white font-bold text-sm rounded-full shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>View Remote Roles</span>
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

          {/* Quick Remote Facts */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-emerald-600" /> 100% Remote (India)
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-slate-700" /> 2 Active Openings
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-700" /> Flexible Hours
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" /> Results Over Desk Hours
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. UNIQUE REMOTE-FIRST DNA (BESPOKE UI CARDS - NO STOCK PHOTOS) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">Our Working Style</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                How We Work Remotely
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Feature 1: Async & Deep Work */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                      ● Async First
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-950 mb-2">Deep Work, Minimal Meetings</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We eliminate unnecessary video calls. Clear briefs, Loom video handoffs, and organized Notion/Slack threads let you focus on executing quality work.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-slate-500">
                  Daily standup: <span className="text-slate-800 font-bold">Slack text check-in</span>
                </div>
              </div>

              {/* Feature 2: High Autonomy */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-bold">
                      Self-Scheduled
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-950 mb-2">Own Your Schedule</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Early bird or night owl? Structure your work hours around your peak creative energy. What matters to us is meeting sprint milestones and delivering polished output.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-slate-500">
                  Location: <span className="text-slate-800 font-bold">Anywhere in India</span>
                </div>
              </div>

              {/* Feature 3: Modern Tech Stack & Tools */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Laptop className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 rounded-full font-bold">
                      Licensed Tools
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-950 mb-2">Premium Production Tools</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We equip our team with official licenses for Adobe Creative Cloud, Envato/Storyblocks asset libraries, modern AI acceleration suites, and fast cloud storage.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-slate-500">
                  Tooling: <span className="text-slate-800 font-bold">Full software stack provided</span>
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
                Remote Perks &amp; Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Award className="w-5 h-5 text-slate-800" />,
                  title: "Competitive Pay",
                  desc: "Timely monthly direct bank deposits with performance bonuses on top-performing campaigns.",
                },
                {
                  icon: <Globe className="w-5 h-5 text-slate-800" />,
                  title: "Zero Commuting",
                  desc: "Save 2-3 hours of daily traffic stress. Work comfortably from your home workstation.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-slate-800" />,
                  title: "Rapid Career Growth",
                  desc: "Fast promotion tracks based on execution quality, output speed, and creative initiative.",
                },
                {
                  icon: <Sparkles className="w-5 h-5 text-slate-800" />,
                  title: "High-Impact Portfolio",
                  desc: "Work on genuine client campaigns and viral videos that build a standout professional portfolio.",
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
      {/* 4. CURRENT OPENINGS (EXACTLY 2 ROLES - 100% REMOTE WITH BESPOKE UI VISUALS) */}
      {/* ========================================================================= */}
      <section id="openings" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100 scroll-mt-10">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                2 Open Remote Roles
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Current Remote Openings
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                We are actively hiring for these two remote positions.
              </p>
            </div>

            {/* Filter Pills */}
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

          {/* Role Cards List */}
          <div className="space-y-8">
            
            {/* ================================================================= */}
            {/* ROLE 1: VIDEO EDITOR (1-2 YRS EXP) */}
            {/* ================================================================= */}
            {(selectedRole === "all" || selectedRole === "video") && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Unique Video Timeline Scrubber Widget */}
                  <div className="lg:col-span-4 bg-slate-950 p-6 flex flex-col justify-between text-white border-b lg:border-b-0 lg:border-r border-slate-800">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-400 text-[10px] font-mono font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          100% REMOTE
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">9:16 Vertical 4K</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <Video className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Video &amp; Motion Lab</div>
                          <div className="text-[10px] text-slate-400 font-mono">1–2 Yrs Experience</div>
                        </div>
                      </div>

                      {/* Mockup Timeline Graphic */}
                      <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-2 font-mono text-[10px]">
                        <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800 text-[9px]">
                          <span>TIMELINE TRACKS</span>
                          <span className="text-emerald-400">00:00:24 / 00:00:50</span>
                        </div>
                        
                        {/* Track 1: Hook */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 w-5">V2</span>
                          <div className="flex-1 bg-purple-600/30 border border-purple-500/40 text-purple-200 rounded px-2 py-1 text-[9px] flex justify-between">
                            <span>Kinetic Hook (0-3s)</span>
                            <span>⚡ High Drop-Off Fix</span>
                          </div>
                        </div>

                        {/* Track 2: B-Roll Cuts */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 w-5">V1</span>
                          <div className="flex-1 bg-blue-600/30 border border-blue-500/40 text-blue-200 rounded px-2 py-1 text-[9px] flex justify-between">
                            <span>B-Roll 4K Overlay</span>
                            <span>Pacing 1.2s Cuts</span>
                          </div>
                        </div>

                        {/* Track 3: Audio & SFX */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 w-5">A1</span>
                          <div className="flex-1 bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 rounded px-2 py-1 text-[9px] flex justify-between">
                            <span>Sound Design &amp; Whooshes</span>
                            <span>Equalized</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
                      <span>Stack: Premiere &bull; AE &bull; DaVinci</span>
                      <span className="text-white font-bold">Full-Time</span>
                    </div>
                  </div>

                  {/* Right Column: Role Content */}
                  <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                            Video Editor &amp; Motion Designer
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-medium text-slate-500">
                            <span className="font-bold text-slate-900">1–2 Years Experience</span>
                            <span>&bull;</span>
                            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">100% Remote (India)</span>
                            <span>&bull;</span>
                            <span className="text-slate-700">Full-Time</span>
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
                        We are looking for an energetic, remote Video Editor with 1 to 2 years of experience who understands viral short-form hooks, dynamic pacing, cinematic sound design, and high-retention video storytelling for modern tech brands.
                      </p>

                      {/* Responsibilities & Requirements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {[
                              "Edit high-converting short-form reels, YouTube shorts, and brand video ads.",
                              "Craft clean motion graphics, animated text kinetic overlays, and visual effects.",
                              "Execute precision sound design, sound effects (SFX), and music sync for maximum viewer retention.",
                              "Collaborate asynchronously with marketing leads to turn raw scripts into viral visual assets.",
                              "Deliver fast, polished cuts optimized for multiple aspect ratios (9:16, 16:9).",
                            ].map((item, idx) => (
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
                            {[
                              "1–2 years of active video editing experience with a verified showreel or portfolio of published reels.",
                              "Proficiency in Adobe Premiere Pro, After Effects, DaVinci Resolve, or equivalent tools.",
                              "Strong understanding of hook retention, pacing, and modern social media aesthetics.",
                              "Good visual taste in typography, color grading, and motion rhythm.",
                              "Reliable computer setup and high-speed internet connection for remote asset transfers.",
                            ].map((item, idx) => (
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
                        {["Premiere Pro", "After Effects", "Short-Form Reels", "Motion Design", "Sound Design"].map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs text-slate-500 text-center sm:text-left">
                        Location: <strong className="text-slate-800">100% Remote</strong> &bull; Submit portfolio link via Google Form.
                      </span>

                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                      >
                        <span>Apply For Video Editor</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ================================================================= */}
            {/* ROLE 2: DIGITAL MARKETER (2-3 YRS EXP) */}
            {/* ================================================================= */}
            {(selectedRole === "all" || selectedRole === "marketing") && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Unique Live Growth Dashboard Widget */}
                  <div className="lg:col-span-4 bg-slate-950 p-6 flex flex-col justify-between text-white border-b lg:border-b-0 lg:border-r border-slate-800">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-400 text-[10px] font-mono font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          100% REMOTE
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Performance &amp; SEO</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Growth &amp; Paid Ads Hub</div>
                          <div className="text-[10px] text-slate-400 font-mono">2–3 Yrs Experience</div>
                        </div>
                      </div>

                      {/* Mockup Analytics Graphic */}
                      <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-2.5 font-mono text-[10px]">
                        <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800 text-[9px]">
                          <span>CAMPAIGN PERFORMANCE</span>
                          <span className="text-emerald-400">Live &bull; Active</span>
                        </div>

                        {/* Metric 1: ROAS */}
                        <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded border border-slate-800/80">
                          <span className="text-slate-400">Meta + Google ROAS</span>
                          <span className="text-emerald-400 font-bold">4.82x ▲</span>
                        </div>

                        {/* Metric 2: CAC Reduction */}
                        <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded border border-slate-800/80">
                          <span className="text-slate-400">Customer Acq. Cost</span>
                          <span className="text-blue-400 font-bold">-36% (Optimized)</span>
                        </div>

                        {/* Metric 3: Organic Traffic */}
                        <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded border border-slate-800/80">
                          <span className="text-slate-400">SEO Keyword Rank</span>
                          <span className="text-purple-400 font-bold">Top 3 Google Pack</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
                      <span>Stack: Meta &bull; Google &bull; GA4 &bull; SEO</span>
                      <span className="text-white font-bold">Full-Time</span>
                    </div>
                  </div>

                  {/* Right Column: Role Content */}
                  <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                            Digital Marketer &amp; Growth Strategist
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-medium text-slate-500">
                            <span className="font-bold text-slate-900">2–3 Years Experience</span>
                            <span>&bull;</span>
                            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">100% Remote (India)</span>
                            <span>&bull;</span>
                            <span className="text-slate-700">Full-Time</span>
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
                        We are looking for an analytical, results-driven remote Digital Marketer with 2 to 3 years of hands-on experience in managing profitable paid ad campaigns (Meta &amp; Google Ads), SEO, conversion rate optimization, and brand lead generation.
                      </p>

                      {/* Responsibilities & Requirements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {[
                              "Plan, launch, and optimize high-ROAS campaigns on Meta Ads (Facebook & Instagram) and Google Ads.",
                              "Execute technical SEO, keyword mapping, on-page optimization, and local map-pack strategies.",
                              "Build lead generation funnels, automated WhatsApp/email drip workflows, and conversion landing pages.",
                              "Perform A/B creative testing, audience persona segmentation, and conversion rate optimization (CRO) audits.",
                              "Track weekly campaign metrics and deliver clear reports on ROAS, CAC, CTR, and inbound leads.",
                            ].map((item, idx) => (
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
                            {[
                              "2–3 years of proven experience managing paid ad budgets and delivering measurable organic growth.",
                              "Deep expertise with Meta Ads Manager, Google Ads, Google Analytics 4 (GA4), and Google Search Console.",
                              "Solid understanding of marketing funnels, copy testing, and landing page conversions.",
                              "Familiarity with SEO research tools such as Semrush, Ahrefs, or Screaming Frog is a plus.",
                              "Self-starter mindset with reliable remote communication habits.",
                            ].map((item, idx) => (
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
                        {["Meta Ads", "Google Ads", "Technical SEO", "Lead Generation", "GA4 & Funnels"].map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs text-slate-500 text-center sm:text-left">
                        Location: <strong className="text-slate-800">100% Remote</strong> &bull; Submit resume &amp; case study via Google Form.
                      </span>

                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                      >
                        <span>Apply For Digital Marketer</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 4-STAGE REMOTE HIRING PROCESS */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">Fast &bull; 7–10 Days</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Our Remote Hiring Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  step: "01",
                  title: "Form Submission",
                  desc: "Complete the official Google Form with your resume and public portfolio or case study link.",
                },
                {
                  step: "02",
                  title: "Work Review",
                  desc: "We review your edited video reel or paid ads case studies for pacing, quality, and methodology.",
                },
                {
                  step: "03",
                  title: "Virtual Conversation",
                  desc: "A 30-minute Google Meet call discussing your remote workflow, tools, and mutual culture fit.",
                },
                {
                  step: "04",
                  title: "Offer & Onboarding",
                  desc: "Receive your remote offer letter, get provisioned on our Slack & tools, and start shipping.",
                },
              ].map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-2xl font-black text-slate-300 block mb-2 font-mono">{step.step}</span>
                  <h3 className="font-bold text-sm text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 6. CLEAN LIGHT APPLICATION CARD (GOOGLE FORM LINK) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-[850px] mx-auto px-5 sm:px-8 text-center">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
              
              <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-slate-900" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-3">
                Ready to Join V2 Labs Remotely?
              </h2>

              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed mb-6">
                Submit your profile via our official Google Form. Please ensure your video showreel or marketing portfolio link has public view permissions enabled.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto mb-8 text-left text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">1. Updated Resume</span>
                  <span className="text-slate-500">PDF file format</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">2. Live Portfolio</span>
                  <span className="text-slate-500">Reels or ad case studies</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">3. Remote Readiness</span>
                  <span className="text-slate-500">Laptop &amp; stable internet</span>
                </div>
              </div>

              {/* Action Buttons */}
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
                  href="https://wa.me/917021827910?text=Hi%20V2%20Labs%20Team,%20I%20have%20a%20query%20about%20the%20remote%20careers%20opening"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full border border-slate-300 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>

              <p className="text-xs text-slate-400 mt-5 font-mono">
                Direct Form URL: <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-slate-700 underline">{GOOGLE_FORM_URL}</a>
              </p>

            </div>

          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
