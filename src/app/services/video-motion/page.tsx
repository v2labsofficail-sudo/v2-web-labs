"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function VideoMotionPage() {
  // Video Sandbox interactive mode
  const [editorMode, setEditorMode] = useState<
    "shortform" | "cinematic" | "motion"
  >("cinematic");

  // Interactive Timeline active step
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      title: "High-Retention Hook Pacing",
      desc: "Structuring dynamic video intro visual offsets and typography animations customized for short-form retention metrics.",
      badge: "Social Retention",
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
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      title: "Cinematic Post-Production",
      desc: "Crafting bespoke color grading ranges that perfectly match your visual identity guidelines and establish content authority.",
      badge: "Studio Cinematic",
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
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
      ),
    },
    {
      title: "Frame-By-Frame Motion Assets",
      desc: "Creating detailed SVG vectors and custom typographic motion layouts to keep viewers highly engaged throughout the video.",
      badge: "Dynamic Physics",
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
            d="M9.813 15.904L9 21l8.982-11.795M10.89 3L18 8.152l-8.982 11.795M10.89 3L3.75 8.152l8.982 11.795m0 0a8.25 8.25 0 11-13.5-3"
          />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Story Outline & Subtitle Plan",
      subtitle: "Pre-Production",
      desc: "Structuring target viewer flow charts, writing interactive outlines, matching vector graphics hooks, and creating modern visual standard guidelines.",
      tools: [
        "Story Map Studio",
        "Notion Asset Sync",
        "Typography Spec Sheets",
      ],
      preview: (
        <div className="w-full h-full border border-slate-200 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#1161ed]">
              ◇ STORYBOARD_TIMELINE
            </span>
            <span className="text-[0.6rem] px-2 py-0.5 rounded bg-[#1161ed]/10 text-[#1161ed] border border-[#1161ed]/20 font-black animate-pulse">
              PLANNED
            </span>
          </div>

          <div className="flex flex-col gap-1 text-[0.62rem] bg-white/60 p-2.5 rounded-xl border border-slate-200/40 relative z-10">
            <div className="flex justify-between font-bold text-slate-800">
              <span>0:00 - 0:03</span>
              <span className="text-[#1161ed]">Ultra High Hook Pacing</span>
            </div>
            <div className="flex justify-between">
              <span>0:03 - 0:15</span>
              <span>B-Roll Context Cuts + SFX</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[0.6rem] text-slate-400 relative z-10 pt-1.5 border-t border-slate-200/40">
            <span>Subtitles: Dynamic-Outfit</span>
            <span>Target Retention: 85%+</span>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Dialogue Motion & Audio Sync",
      subtitle: "Active Editing",
      desc: "Assembling multi-cam tracks, mapping modern kinetic subtitles, introducing deep physical sound assets, and aligning key visual elements.",
      tools: ["DaVinci Resolve Studio", "After Effects", "Adobe Audition"],
      preview: (
        <div className="w-full h-full border border-slate-200 rounded-2xl bg-slate-50/70 p-4 flex flex-col gap-3 font-mono text-[0.68rem] text-slate-400 relative overflow-hidden shadow-inner">
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
          <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />

          <div className="h-6 bg-white border border-slate-200 rounded-lg flex items-center justify-between px-3 text-slate-500 shadow-sm z-10">
            <span className="text-[0.6rem]">Kinetic Subtitle Node</span>
            <div className="w-3 h-3 border border-[#1161ed]/30 rounded-full animate-ping bg-[#1161ed]/20" />
          </div>

          <div className="grid grid-cols-3 gap-3 flex-1 z-10">
            <div className="border border-dashed border-slate-300 rounded-xl flex items-center justify-center p-1 bg-white/40">
              Dialogue
            </div>
            <div className="col-span-2 border border-dashed border-[#1161ed]/30 rounded-xl flex flex-col justify-between p-3 bg-white/60">
              <div className="h-2 bg-slate-200 rounded-full w-2/3" />
              <div className="h-8 bg-[#1161ed]/5 border border-dashed border-[#1161ed]/20 rounded-lg flex items-center justify-center text-[#1161ed] text-[0.6rem] font-bold">
                {"scale(1.1) ease-out;"}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Color Match & Sound Finish",
      subtitle: "Fine Rendering",
      desc: "Balancing final visual tones, executing custom LUT mappings, blending ambient sound fields, and rendering top-spec files.",
      tools: ["Rec.709 Lut Node", "Wwise Audio Sync", "ProRes 422 HQ"],
      preview: (
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#080d19] to-[#162238] p-4 flex flex-col justify-between text-white relative overflow-hidden shadow-xl border border-white/5">
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#1161ed]/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-[#3b82f6]/20 rounded-full blur-2xl" />

          <div className="flex justify-between items-center relative z-10">
            <span className="text-[0.62rem] uppercase tracking-widest text-[#3b82f6] font-extrabold">
              Rendering Engine
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              <span className="text-[0.58rem] font-mono text-emerald-400 font-bold">
                RENDER_SUCCESS
              </span>
            </div>
          </div>

          <div className="my-auto relative z-10">
            <div className="text-[0.62rem] text-slate-400 uppercase tracking-wider mb-1 font-semibold">
              ProRes High bit-rate Format
            </div>
            <div className="text-sm font-black tracking-tight mb-2">
              Color Checked & Equalized
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-[#1161ed] to-[#3b82f6] w-[100%] rounded-full shadow-[0_0_10px_rgba(17,97,237,0.5)]" />
            </div>
          </div>

          <div className="flex justify-between items-center text-[0.6rem] text-slate-400 relative z-10 pt-2 border-t border-white/5">
            <span>Video Resolution Rating</span>
            <span className="text-emerald-400 font-black">ProRes 4K</span>
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
            Motion Media Focus
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.05] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            Cinematic Post-Production &{" "}
            <span className="bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-sm">
              Motion Design
            </span>
          </h1>

          <p className="text-[#64748B] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[780px] font-medium">
            We deliver highly polished cinematic cuts, typographic motion
            graphics, and frame-by-frame sound engineering. We don&apos;t just
            cut clips together; we build visual retention systems.
          </p>
        </header>

        {/* Dynamic Video Sandbox Workspace Section */}
        <section className="mb-28 relative z-10">
          {/* Header Controls for Sandbox */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                Live Interactive Post Workspace
              </div>
              <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight">
                Subtitle & Cinematic Timeline
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Interact with the selectors below to view how dynamic subtitles
                and color profiles are custom configured for cinematic media.
              </p>
            </div>

            {/* Premium Selector Switchers */}
            <div className="flex p-1.5 bg-slate-200/50 backdrop-blur-md border border-slate-200/60 rounded-[20px] w-full md:w-auto shadow-inner">
              {(["shortform", "cinematic", "motion"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setEditorMode(mode)}
                  className={`flex-1 md:flex-initial px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                    editorMode === mode
                      ? "bg-white text-[#1161ed] shadow-[0_8px_20px_rgba(17,97,237,0.08)] scale-[1.02]"
                      : "text-slate-600 hover:text-[#1161ed]"
                  }`}
                >
                  {mode === "shortform"
                    ? "Social Hook"
                    : mode === "cinematic"
                      ? "Pro Cinematic"
                      : "Motion Guide"}
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
                  post_timeline_variables.json
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[0.6rem] font-bold text-slate-500">
                  Davinci Resolve
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 flex flex-col gap-3.5 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Video Aspect Ratio</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/50 text-[#1161ed] font-bold">
                    {editorMode === "shortform"
                      ? "9:16 (Social Vertical)"
                      : editorMode === "cinematic"
                        ? "2.39:1 (Widescreen)"
                        : "1:1 (Square Vector)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Target Retention Lift</span>
                  <span className="text-[#3b82f6] font-bold">
                    {editorMode === "shortform"
                      ? "+82% Initial View"
                      : editorMode === "cinematic"
                        ? "98% Visual Quality"
                        : "Smooth Physics Render"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Audio Sample Rate</span>
                  <span className="text-[#3b82f6] font-bold">
                    {editorMode === "cinematic"
                      ? "48.0 kHz 24-bit"
                      : "44.1 kHz Standard"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Color LUT Range</span>
                  <span className="text-[#3b82f6] font-bold">
                    {editorMode === "cinematic"
                      ? "Bespoke Rec.709 Warm"
                      : editorMode === "shortform"
                        ? "High Saturation Pop"
                        : "None (Raw Vectors)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Subtitles Layout</span>
                  <span className="text-yellow-400 font-bold">
                    {editorMode === "shortform"
                      ? "Kinetic Yellow Pop"
                      : editorMode === "cinematic"
                        ? "Standard White Lower-Thirds"
                        : "Vector Guide Labeling"}
                  </span>
                </div>
              </div>

              {/* Dynamic JSON / CSS Tagging panel */}
              <div className="p-5 rounded-3xl bg-slate-900/40 border border-dashed border-slate-800 flex flex-col gap-2">
                <div className="text-[0.62rem] text-slate-500">
                  {"/* active timeline track data specs */"}
                </div>
                <code className="text-[#1161ed] font-bold text-[0.68rem] leading-relaxed whitespace-pre-wrap">
                  {editorMode === "shortform" &&
                    '// Social hook caption overlay\nconst caption = {\n  text: "UNLEASH_POTENTIAL",\n  font: "Outfit Black",\n  color: "#facc15"\n};'}
                  {editorMode === "cinematic" &&
                    "// Master LUT grading settings\nexport const lutNode = {\n  gamma: 2.2,\n  exposure: 1.05,\n  contrast: 1.15\n};"}
                  {editorMode === "motion" &&
                    "// Geometric curve constraints\nconst scaleMotion = {\n  spring: 180,\n  friction: 20,\n  velocity: 1.25\n};"}
                </code>
              </div>
            </div>

            {/* Sandbox Visual Output Container */}
            <div className="w-full flex-1 flex items-center justify-center p-2 z-10">
              {/* Output Frame Mockup */}
              <div
                className={`w-full max-w-[420px] transition-all duration-500 p-8 ${
                  editorMode === "motion"
                    ? "bg-transparent border-[2.2px] border-dashed border-slate-700 rounded-none shadow-none text-slate-500"
                    : editorMode === "cinematic"
                      ? "bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[32px] text-white shadow-[0_25px_60px_rgba(17,97,237,0.2)] relative"
                      : "bg-[#0b0f19] border border-purple-500/40 rounded-[28px] text-purple-200 shadow-xl relative"
                }`}
              >
                {/* Visual state overlays in Short Form mode */}
                {editorMode === "shortform" && (
                  <div className="absolute top-0 left-1/2 -translate-y-1/2 bg-purple-500 text-white font-mono text-[0.58rem] px-2.5 py-0.5 rounded shadow-md z-20">
                    retention: 94% (optimal)
                  </div>
                )}

                {/* Inside Component Rendering */}
                <div className="flex flex-col gap-6">
                  {/* Video Player Header */}
                  <div
                    className={`flex justify-between items-center pb-4 ${
                      editorMode === "motion"
                        ? "border-b border-slate-700 border-dashed"
                        : editorMode === "cinematic"
                          ? "border-b border-white/10"
                          : "border-b border-purple-900/50"
                    }`}
                  >
                    {editorMode === "motion" ? (
                      <>
                        <div className="w-24 h-4 bg-slate-800 rounded-none" />
                        <div className="w-8 h-8 rounded-none border border-slate-700 border-dashed" />
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col">
                          <span
                            className={`text-[0.62rem] font-mono tracking-[0.2em] uppercase ${editorMode === "cinematic" ? "text-[#1161ed] font-black" : "text-purple-400 font-bold"}`}
                          >
                            Timeline Viewport
                          </span>
                          <span className="text-sm font-black tracking-tight mt-0.5">
                            Post Production Active
                          </span>
                        </div>
                        <div
                          className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm ${editorMode === "cinematic" ? "bg-white/10 text-white" : "bg-purple-900/40 border border-purple-500/30 text-purple-300"}`}
                        >
                          V1
                        </div>
                      </>
                    )}
                  </div>

                  {/* Body Content simulation */}
                  {editorMode === "motion" ? (
                    <div className="flex flex-col gap-4">
                      {/* Geometric guiding illustration */}
                      <div className="relative border border-dashed border-slate-700 p-6 rounded-none flex items-center justify-center min-h-[120px]">
                        <div className="w-14 h-14 border border-dashed border-[#1161ed]/50 rounded-full flex items-center justify-center animate-spin duration-[6s]">
                          <div className="w-9 h-9 border border-[#1161ed] rotate-45 flex items-center justify-center">
                            <span className="text-[0.45rem] font-bold text-white">
                              V2
                            </span>
                          </div>
                        </div>
                        <span className="absolute bottom-1 right-2 text-[0.48rem] text-slate-500 font-mono">
                          GUIDE_MODE_ON
                        </span>
                      </div>
                    </div>
                  ) : editorMode === "shortform" ? (
                    <div className="flex flex-col gap-4">
                      <div className="relative border border-dashed border-purple-500/30 p-4 rounded-xl bg-purple-950/20 text-center">
                        <span className="text-[0.55rem] text-purple-400 block mb-1.5 uppercase font-black tracking-wider">
                          Dialogue caption pop
                        </span>
                        <span className="text-yellow-300 font-extrabold text-sm uppercase tracking-wide px-3 py-1 bg-yellow-950/50 rounded-lg inline-block border border-yellow-500/20 shadow-[0_0_12px_rgba(234,179,8,0.2)] scale-[1.05] transition-all">
                          UNLEASH POTENTIAL
                        </span>
                      </div>
                      <div className="flex gap-0.5 justify-center h-6 items-end">
                        <span className="w-[2px] bg-purple-500 h-[30%] animate-bounce" />
                        <span className="w-[2px] bg-purple-400 h-[65%] animate-bounce delay-75" />
                        <span className="w-[2px] bg-purple-500 h-[85%] animate-bounce delay-150" />
                        <span className="w-[2px] bg-purple-300 h-[40%] animate-bounce" />
                        <span className="w-[2px] bg-purple-400 h-[95%] animate-bounce delay-300" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5">
                      {/* Beautiful Neon glassmorphic details pane inside Pro Cinematic dashboard preview */}
                      <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col justify-between relative overflow-hidden shadow-inner">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#1161ed]/15 rounded-full blur-lg" />
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[0.68rem] font-bold text-slate-400 tracking-wider">
                            LUT Contrast Grading
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-[0.58rem] font-black uppercase tracking-widest border border-emerald-400/10">
                            Rec.709 Sync
                          </span>
                        </div>

                        {/* Simulated player overlay */}
                        <div className="w-full h-16 bg-[#040810]/80 rounded-xl relative overflow-hidden border border-white/5 flex items-center justify-between px-4">
                          <div className="flex gap-2 items-center">
                            <button className="w-6 h-6 rounded-full bg-[#1161ed] text-white flex items-center justify-center shadow-md">
                              <span className="text-[0.5rem]">▶</span>
                            </button>
                            <span className="text-[0.58rem] font-bold text-slate-400">
                              00:42 / 01:30
                            </span>
                          </div>

                          {/* Pulsing visual waves */}
                          <div className="flex gap-0.5">
                            <span className="w-[1.5px] h-3 bg-red-500 animate-bounce" />
                            <span className="w-[1.5px] h-4.5 bg-red-400 animate-bounce delay-75" />
                            <span className="w-[1.5px] h-2.5 bg-red-500 animate-bounce delay-150" />
                          </div>
                        </div>
                      </div>

                      {/* Interactive compiler button with neon drop-shadow */}
                      <button className="w-full py-3.5 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] rounded-xl text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(17,97,237,0.35)] hover:shadow-[0_8px_30px_rgba(17,97,237,0.5)] hover:-translate-y-0.5 active:scale-98 transition-all duration-300">
                        Render Cinematic ProRes
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
              Motion Architecture Toolkit
            </h2>
            <p className="text-slate-500 text-sm max-w-[500px] mx-auto mt-2 leading-relaxed">
              We compile highly robust visual cuts, kinetic elements, and audio
              environments tailored directly to content goals.
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
              Want Cinematic Video & Motion Cuts?
            </h2>
            <p className="text-[#94A3B8] max-w-[540px] mx-auto text-[0.92rem] leading-relaxed mb-10 font-medium">
              Our post-production team is prepared to edit your social assets,
              product ads, or custom outlines. Get in touch to schedule a
              project.
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
