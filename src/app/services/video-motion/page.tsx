"use client";

import React, { useState } from "react";
import Link from "next/link";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";
import AlternatingText from "@/components/AlternatingText";
import Image from "next/image";

const PORTFOLIO_VIDEOS = [
  {
    id: "short1",
    title: "Retention Editing Showcase 1",
    desc: "Vertical short-form video featuring high-retention editing styles, dynamic typography, sound design, and custom graphic transitions.",
    badge: "Retention Pacing",
    videoId: "Ph9kQsIoPeY"
  },
  {
    id: "short2",
    title: "Retention Editing Showcase 2",
    desc: "A fast-paced engaging sequence optimized for mobile feeds, loops, and maximum average watch-time metrics.",
    badge: "Fast Visuals",
    videoId: "NPhOP54fgOQ"
  },
  {
    id: "short3",
    title: "Retention Editing Showcase 3",
    desc: "Kinetic caption loops and sound effects configured to capture viewer attention within the first 3 seconds.",
    badge: "Hook Design",
    videoId: "OmlZ0WGlKRU"
  }
];

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
    gradient: "from-[#0055DA] to-[#111111]",
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
      <div className="w-full h-full border border-slate-200 bg-white p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-[#111111] shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
          <span className="font-extrabold text-[#111111]">
            ◇ STORYBOARD_TIMELINE
          </span>
          <span className="text-[0.6rem] px-2 py-0.5 rounded bg-[#111111]/10 text-[#111111] border border-[#111111]/20 font-black animate-pulse">
            PLANNED
          </span>
        </div>

        <div className="flex flex-col gap-1 text-[0.62rem] bg-white p-2.5 rounded-xl border border-slate-200/40 relative z-10">
          <div className="flex justify-between font-bold text-slate-800">
            <span>0:00 - 0:03</span>
            <span className="text-[#111111]">Ultra High Hook Pacing</span>
          </div>
          <div className="flex justify-between">
            <span>0:03 - 0:15</span>
            <span>B-Roll Context Cuts + SFX</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[0.6rem] text-[#111111] relative z-10 pt-1.5 border-t border-slate-200/40">
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
      <div className="w-full h-full border border-slate-200 rounded-2xl bg-white p-4 flex flex-col gap-3 font-mono text-[0.68rem] text-[#111111] relative overflow-hidden shadow-inner">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
        <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />

        <div className="h-6 bg-white border border-slate-200 rounded-lg flex items-center justify-between px-3 text-[#111111] shadow-sm z-10">
          <span className="text-[0.6rem]">Kinetic Subtitle Node</span>
          <div className="w-3 h-3 border border-[#111111]/30 rounded-full animate-ping bg-[#111111]/20" />
        </div>

        <div className="grid grid-cols-3 gap-3 flex-1 z-10">
          <div className="border border-dashed border-slate-300 rounded-xl flex items-center justify-center p-1 bg-white">
            Dialogue
          </div>
          <div className="col-span-2 border border-dashed border-[#111111]/30 rounded-xl flex flex-col justify-between p-3 bg-white">
            <div className="h-2 bg-slate-200 rounded-full w-2/3" />
            <div className="h-8 bg-[#111111]/5 border border-dashed border-[#111111]/20 rounded-lg flex items-center justify-center text-[#111111] text-[0.6rem] font-bold">
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
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-50 to-white p-4 flex flex-col justify-between text-slate-850 relative overflow-hidden shadow-inner border border-slate-200/50">
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-slate-200 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-slate-100 rounded-full blur-2xl" />

        <div className="flex justify-between items-center relative z-10">
          <span className="text-[0.62rem] uppercase tracking-widest text-[#0055DA] font-extrabold">
            Rendering Engine
          </span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[0.58rem] font-mono text-emerald-600 font-bold">
              RENDER_SUCCESS
            </span>
          </div>
        </div>

        <div className="my-auto relative z-10 text-left">
          <div className="text-[0.62rem] text-slate-500 uppercase tracking-wider mb-1 font-semibold">
            ProRes High bit-rate Format
          </div>
          <div className="text-sm font-black tracking-tight mb-2 text-slate-900">
            Color Checked & Equalized
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300/30">
            <div className="h-full bg-[#0055DA] hover:bg-[#0044B3] w-[100%] rounded-full shadow-[0_0_10px_rgba(0, 85, 218,0.2)]" />
          </div>
        </div>

        <div className="flex justify-between items-center text-[0.6rem] text-slate-650 relative z-10 pt-2 border-t border-slate-200/50">
          <span>Video Resolution Rating</span>
          <span className="text-emerald-600 font-black">ProRes 4K</span>
        </div>
      </div>
    ),
  },
];

export default function VideoMotionPage() {
  // Video Sandbox interactive mode
  const [editorMode, setEditorMode] = useState<
    "shortform" | "cinematic" | "motion"
  >("cinematic");

  // Interactive Timeline active step
  const [activeStep, setActiveStep] = useState(0);

  // Video portfolio active index
  const [activeIndex, setActiveIndex] = useState(1);
  const [playingMap, setPlayingMap] = useState<Record<string, boolean>>({});

  const handlePrev = () => {
    setPlayingMap({});
    setActiveIndex((prev) => (prev - 1 + PORTFOLIO_VIDEOS.length) % PORTFOLIO_VIDEOS.length);
  };

  const handleNext = () => {
    setPlayingMap({});
    setActiveIndex((prev) => (prev + 1) % PORTFOLIO_VIDEOS.length);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Animated Floating Luminous Mesh Background Orbs */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#111111]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10 animate-float" />
      <div className="absolute top-[32%] right-[5%] w-[550px] h-[550px] bg-[#2A2A2A]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10 animate-pulse duration-[12s]" />
      <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-[#8b5cf6]/[0.02] rounded-full blur-[130px] pointer-events-none select-none -z-10 animate-float-reverse" />

      {/* Luminous Dotted Grid Background Pattern */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#111111_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.22] -z-10 pointer-events-none select-none" />

      <div className="max-w-[1100px] mx-auto px-6 pt-16">


        {/* Hero Section with premium typographic depth */}
        <header className="mb-24 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#111111]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#111111] tracking-[0.18em] mb-6 border border-[#111111]/20 shadow-[0_2px_10px_rgba(0, 85, 218,0.05)]">
            <span className="w-1.5 h-1.5 bg-[#111111] rounded-full animate-ping"></span>
            Motion Media Focus
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.05] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            Cinematic Post-Production & <AlternatingText>Motion Design</AlternatingText>
          </h1>

          <p className="text-[#111111] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[780px] font-medium">
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
              <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                Live Interactive Post Workspace
              </div>
              <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight">
                Subtitle & Cinematic Timeline
              </h2>
              <p className="text-[#111111] text-xs sm:text-sm mt-1">
                Interact with the selectors below to view how dynamic subtitles
                and color profiles are custom configured for cinematic media.
              </p>
            </div>

            {/* Premium Selector Switchers */}
            <div className="flex p-1.5 bg-white  border border-slate-200/60 rounded-[20px] w-full md:w-auto shadow-inner">
              {(["shortform", "cinematic", "motion"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setEditorMode(mode)}
                  className={`flex-1 md:flex-initial px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                    editorMode === mode
                      ? mode === "shortform"
                        ? "bg-white text-[#8b5cf6] shadow-[0_8px_20px_rgba(139,92,246,0.12)] scale-[1.02] border border-[#8b5cf6]/10"
                        : mode === "motion"
                          ? "bg-white text-[#10b981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] scale-[1.02] border border-[#10b981]/10"
                          : "bg-white text-[#111111] shadow-[0_8px_20px_rgba(0, 85, 218,0.12)] scale-[1.02] border border-[#111111]/10"
                      : "text-[#111111] hover:text-[#111111]"
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
          <div className="w-full bg-white border border-slate-200/80 rounded-[40px] p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden min-h-[460px] flex flex-col md:flex-row gap-10 items-center justify-between">
            {/* Luminous Inner Gradient Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[110px] pointer-events-none transition-colors duration-500 ${
              editorMode === "shortform"
                ? "bg-[#8b5cf6]/[0.05]"
                : editorMode === "motion"
                  ? "bg-[#10b981]/[0.05]"
                  : "bg-[#111111]/[0.05]"
            }`} />

            {/* Sidebar Code Variable Panel */}
            <div className="w-full md:w-[330px] shrink-0 z-10 flex flex-col gap-4 font-mono text-[0.72rem] text-[#111111] text-left">
              <div className="pb-3 border-b border-slate-200 flex justify-between items-center">
                <span className={`font-extrabold flex items-center gap-1.5 transition-colors duration-350 ${
                  editorMode === "shortform"
                    ? "text-[#8b5cf6]"
                    : editorMode === "motion"
                      ? "text-[#10b981]"
                      : "text-[#111111]"
                }`}>
                  <span className={`w-2 h-2 rounded-full animate-ping ${
                    editorMode === "shortform"
                      ? "bg-[#8b5cf6]"
                      : editorMode === "motion"
                        ? "bg-[#10b981]"
                        : "bg-[#111111]"
                  }`} />
                  post_timeline_variables.json
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[0.6rem] font-bold text-[#111111]">
                  Davinci Resolve
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-slate-50/50  border border-slate-200/60 flex flex-col gap-3.5 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-[#111111]">Video Aspect Ratio</span>
                  <span className={`px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-bold transition-colors duration-300 ${
                    editorMode === "shortform"
                      ? "text-[#8b5cf6]"
                      : editorMode === "motion"
                        ? "text-[#10b981]"
                        : "text-[#111111]"
                  }`}>
                    {editorMode === "shortform"
                      ? "9:16 (Social Vertical)"
                      : editorMode === "cinematic"
                        ? "2.39:1 (Widescreen)"
                        : "1:1 (Square Vector)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#111111]">Target Retention Lift</span>
                  <span className={`font-bold transition-colors duration-300 ${
                    editorMode === "shortform"
                      ? "text-[#8b5cf6]"
                      : editorMode === "motion"
                        ? "text-[#10b981]"
                        : "text-[#111111]"
                  }`}>
                    {editorMode === "shortform"
                      ? "+82% Initial View"
                      : editorMode === "cinematic"
                        ? "98% Visual Quality"
                        : "Smooth Physics Render"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#111111]">Audio Sample Rate</span>
                  <span className="text-[#111111] font-bold">
                    {editorMode === "cinematic"
                      ? "48.0 kHz 24-bit"
                      : "44.1 kHz Standard"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#111111]">Color LUT Range</span>
                  <span className={`font-bold transition-colors duration-300 ${
                    editorMode === "shortform"
                      ? "text-[#8b5cf6]"
                      : editorMode === "motion"
                        ? "text-[#10b981]"
                        : "text-[#111111]"
                  }`}>
                    {editorMode === "cinematic"
                      ? "Bespoke Rec.709 Warm"
                      : editorMode === "shortform"
                        ? "High Saturation Pop"
                        : "None (Raw Vectors)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#111111]">Subtitles Layout</span>
                  <span className="text-[#111111] font-bold">
                    {editorMode === "shortform"
                      ? "Kinetic Yellow Pop"
                      : editorMode === "cinematic"
                        ? "Standard White Lower-Thirds"
                        : "Vector Guide Labeling"}
                  </span>
                </div>
              </div>

              {/* Dynamic JSON / CSS Tagging panel */}
              <div className="p-5 rounded-3xl bg-slate-50/30 border border-dashed border-slate-200 flex flex-col gap-2">
                <div className="text-[0.62rem] text-[#111111]">
                  {"/* active timeline track data specs */"}
                </div>
                <code className={`font-bold text-[0.68rem] leading-relaxed whitespace-pre-wrap transition-colors duration-300 ${
                  editorMode === "shortform"
                    ? "text-[#8b5cf6]"
                    : editorMode === "motion"
                      ? "text-[#10b981]"
                      : "text-[#111111]"
                }`}>
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
                className="w-full max-w-[450px] flex items-center justify-center transition-all duration-500"
              >
                {/* Inside Component Rendering */}
                {editorMode === "shortform" ? (
                  /* Mobile shortform vertical player mockup */
                  <div className="w-[230px] h-[408px] bg-slate-950 border-[8px] border-slate-800 rounded-[32px] shadow-2xl relative overflow-hidden flex items-center justify-center transition-all duration-300">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Subtitle kinetic pop text overlay */}
                    <div className="absolute bottom-[20%] left-0 right-0 text-center px-4 z-20">
                      <span className="text-yellow-300 font-extrabold text-[0.72rem] uppercase tracking-wide px-2.5 py-1 bg-yellow-950/70 rounded border border-yellow-500/20 shadow-[0_0_12px_rgba(234,179,8,0.3)] animate-pulse inline-block">
                        UNLEASH POTENTIAL
                      </span>
                    </div>
                    {/* Floating icons overlay */}
                    <div className="absolute right-2.5 bottom-12 flex flex-col gap-3.5 z-20 text-xs">
                      <div className="w-7 h-7 rounded-full bg-black/40  flex items-center justify-center text-white cursor-pointer hover:bg-black/60 shadow">❤️</div>
                      <div className="w-7 h-7 rounded-full bg-black/40  flex items-center justify-center text-white cursor-pointer hover:bg-black/60 shadow">💬</div>
                      <div className="w-7 h-7 rounded-full bg-black/40  flex items-center justify-center text-white cursor-pointer hover:bg-black/60 shadow">✈️</div>
                    </div>
                    {/* Top pill bar */}
                    <div className="absolute top-2 w-16 h-3 bg-black/40  rounded-full z-20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-[#111111] rounded-full animate-ping"></span>
                    </div>
                  </div>
                ) : editorMode === "cinematic" ? (
                  /* Widescreen pro-cinematic supercar timeline player mockup */
                  <div className="w-full aspect-video bg-slate-950 border-4 border-slate-800 rounded-[24px] shadow-[0_20px_50px_rgba(0, 85, 218,0.15)] relative overflow-hidden flex flex-col items-center justify-center transition-all duration-300">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Rec.709 Active Badge */}
                    <div className="absolute top-3 left-4 bg-black/60  px-2.5 py-0.5 rounded text-[0.55rem] text-emerald-400 font-mono border border-emerald-400/20 font-bold z-20">
                      REC.709 ACTIVE
                    </div>
                    {/* Cinematic Letterboxes */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-black z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-black z-10" />
                  </div>
                ) : (
                  /* Abstract motion geometry physics guide loop mockup */
                  <div className="w-full aspect-video bg-slate-950 border-4 border-dashed border-[#111111]/30 rounded-[24px] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center transition-all duration-300">
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Geometric overlays */}
                    <div className="absolute inset-0 border border-[#111111]/10 pointer-events-none flex items-center justify-center z-10">
                      <div className="w-32 h-32 border border-dashed border-[#111111]/30 rounded-full animate-spin duration-[12s]" />
                      <div className="absolute w-24 h-24 border border-dashed border-[#8b5cf6]/20 -rotate-45" />
                    </div>
                    <div className="absolute bottom-2.5 right-3 bg-black/50  px-2 py-0.5 rounded text-[0.55rem] text-[#111111] font-mono z-20">
                      SPRING_CONSTRAINT: 180
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Upgraded Capabilities Grid in premium frosted-glass design */}
        <section className="mb-28 border-t border-slate-200/50 pt-16 relative">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Capabilities
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Motion Architecture Toolkit
            </h2>
            <p className="text-[#111111] text-sm max-w-[500px] mx-auto mt-2 leading-relaxed">
              We compile highly robust visual cuts, kinetic elements, and audio
              environments tailored directly to content goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] border border-slate-200/40 bg-white  shadow-[0_8px_30px_rgba(0, 85, 218,0.02)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0, 85, 218,0.09)] hover:border-[#111111]/30 hover:bg-white group flex flex-col justify-between min-h-[290px]"
              >
                {/* Premium Accent Top Border in Brand Gradient */}
                <div
                  className={`h-[5px] w-full absolute top-0 left-0 bg-gradient-to-r ${cap.gradient} rounded-t-[32px]`}
                />

                <div>
                  {/* Icon Container with radial backdrop shine */}
                  <div className="mb-8 relative">
                    <div className="w-13 h-13 rounded-2xl bg-[#111111]/[0.08] text-[#111111] flex items-center justify-center border border-[#111111]/10 group-hover:scale-110 group-hover:bg-[#111111] group-hover:text-white transition-all duration-500 shadow-sm">
                      {cap.icon}
                    </div>
                  </div>
                  <span className="text-[0.62rem] font-black uppercase text-[#111111] tracking-[0.15em] mb-2 block">
                    {cap.badge}
                  </span>
                  <h3 className="text-[1.2rem] text-slate-900 mb-3 font-black group-hover:text-[#111111] transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-[#111111] leading-relaxed text-[0.82rem]">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cinematic & Motion Portfolio Showcase Section (3D Perspective Mobile Carousel) */}
        <section className="mb-28 border-t border-slate-200/50 pt-16 relative overflow-hidden">
          <div className="text-center mb-10 relative z-10">
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Studio Portfolio
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Cinematic & Motion Portfolio
            </h2>
            <p className="text-[#111111] text-sm max-w-[580px] mx-auto mt-2 leading-relaxed font-semibold">
              Explore our vertical short-form editing showcases. Click play on the active center mockup below to start playback.
            </p>
          </div>

          {/* 3D Perspective Carousel Container */}
          <div className="relative w-full max-w-[900px] mx-auto flex items-center justify-center min-h-[540px] z-10 select-none">
            
            {/* Left Navigation Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 shadow-lg flex items-center justify-center text-slate-800 hover:text-slate-950 transition-all duration-200 cursor-pointer z-40 active:scale-95"
              aria-label="Previous slide"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div 
              className="relative flex items-center justify-center w-full h-[500px]"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
              {PORTFOLIO_VIDEOS.map((video, idx) => {
                let diff = idx - activeIndex;
                if (diff < -1) diff += PORTFOLIO_VIDEOS.length;
                if (diff > 1) diff -= PORTFOLIO_VIDEOS.length;

                const isActive = diff === 0;
                const isLeft = diff === -1;
                const isRight = diff === 1;

                let transformStyle = "";
                let zIndex = 0;
                let opacity = 0;
                let filter = "blur(4px)";
                let pointerEvents: "auto" | "none" = "none";

                if (isActive) {
                  transformStyle = "translateX(0) scale(1.05) rotateY(0deg) skewY(0deg)";
                  zIndex = 30;
                  opacity = 1;
                  filter = "blur(0px)";
                  pointerEvents = "auto";
                } else if (isLeft) {
                  transformStyle = "translateX(-60%) scale(0.82) rotateY(28deg) skewY(3deg)";
                  zIndex = 10;
                  opacity = 0.55;
                  filter = "blur(1.5px)";
                } else if (isRight) {
                  transformStyle = "translateX(60%) scale(0.82) rotateY(-28deg) skewY(-3deg)";
                  zIndex = 10;
                  opacity = 0.55;
                  filter = "blur(1.5px)";
                }

                return (
                  <div
                    key={video.id}
                    className="absolute w-[240px] sm:w-[270px] h-[420px] sm:h-[480px] bg-slate-950 border-[6px] sm:border-[8px] border-slate-900 rounded-[32px] sm:rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.22)] overflow-hidden flex flex-col justify-between transition-all duration-700 ease-out"
                    style={{
                      transform: transformStyle,
                      zIndex: zIndex,
                      opacity: opacity,
                      filter: filter,
                      pointerEvents: pointerEvents,
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden"
                    }}
                  >
                    {playingMap[video.id] ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=0&loop=1&playlist=${video.videoId}&controls=1`}
                        className="w-full h-full object-cover border-0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full group">
                        <img
                          src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Play Button Overlay */}
                        <div 
                          onClick={() => {
                            if (isActive) {
                              setPlayingMap({ [video.id]: true });
                            }
                          }}
                          className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                        >
                          <div className="w-16 h-16 rounded-full bg-white/95 border border-white/20 flex items-center justify-center text-slate-900 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#0055DA] hover:text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                              <polygon points="5 3 19 12 5 21" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 shadow-lg flex items-center justify-center text-slate-800 hover:text-slate-950 transition-all duration-200 cursor-pointer z-40 active:scale-95"
              aria-label="Next slide"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

          </div>

          {/* Active video metadata display below carousel */}
          <div className="max-w-[600px] mx-auto text-center mt-6 px-6 transition-all duration-500 relative z-10 min-h-[120px]">
            <span className="text-[0.62rem] font-black uppercase text-[#0055DA] bg-[#0055DA]/10 px-3.5 py-1 rounded-full tracking-widest shadow-sm">
              {PORTFOLIO_VIDEOS[activeIndex].badge}
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-3 mb-2">
              {PORTFOLIO_VIDEOS[activeIndex].title}
            </h3>
            <p className="text-[#111111] leading-relaxed text-xs sm:text-[0.85rem] font-semibold">
              {PORTFOLIO_VIDEOS[activeIndex].desc}
            </p>
          </div>
        </section>

        {/* Process Roadmap Section (Dynamic, click-interactive step selector) */}
        <section className="py-20 border-t border-slate-200/50 mb-24 relative">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Studio Methodology
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Frictionless Execution Map
            </h2>
            <p className="text-[#111111] text-sm max-w-[520px] mx-auto mt-2 leading-relaxed">
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
                        ? "bg-white shadow-[0_20px_40px_rgba(0, 85, 218,0.06)] border-[#111111]/20 scale-[1.03]"
                        : "bg-transparent border-transparent hover:border-slate-300/40"
                    }`}
                  >
                    {/* Left Brand Line accent */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#0055DA] via-[#111111] to-[#8b5cf6]" />
                    )}

                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 font-black text-sm shadow-sm ${
                        isActive
                          ? "bg-[#111111] text-white"
                          : "bg-[#111111]/[0.08] text-[#111111] group-hover:bg-[#111111]/[0.15]"
                      }`}
                    >
                      {step.num}
                    </div>
                    <div>
                      <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#111111] block mb-0.5">
                        {step.subtitle}
                      </span>
                      <h4
                        className={`text-[0.98rem] font-black transition-colors ${isActive ? "text-[#111111]" : "text-slate-900 group-hover:text-[#111111]"}`}
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
              <div className="bg-white rounded-[36px] border border-slate-200/40 p-8 shadow-[0_8px_30px_rgba(0, 85, 218,0.01)] min-h-[390px] flex flex-col justify-between relative group hover:shadow-[0_25px_50px_rgba(0, 85, 218,0.07)] hover:border-[#111111]/20 transition-all duration-500">
                {/* Visual Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-[5px] bg-[#0055DA] hover:bg-[#0044B3] rounded-t-[36px]" />

                <div>
                  <span className="text-[0.62rem] font-black tracking-widest text-[#111111] uppercase block mb-1">
                    Methodology Stage {steps[activeStep].num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-[#111111] text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {steps[activeStep].desc}
                  </p>

                  {/* Interactive Phase Preview component */}
                  <div className="w-full h-40 mb-6 group-hover:scale-[1.01] transition-transform duration-300">
                    {steps[activeStep].preview}
                  </div>
                </div>

                {/* System Tools Used Badger bar */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 text-[0.65rem] font-bold text-[#111111]">
                  <span>STAGE TOOLKIT:</span>
                  {steps[activeStep].tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 text-[#111111] rounded-lg transition-colors font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Light CTA Section */}
        <section className="relative rounded-[40px] bg-gradient-to-tr from-[#111111]/[0.06] via-[#8b5cf6]/[0.03] to-white p-10 sm:p-20 text-center text-slate-800 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.01)] z-10 mt-16 max-w-[1100px] mx-auto border border-slate-200/60">
          {/* Luminous soft mesh bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#111111] opacity-5 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6] opacity-5 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 max-w-[650px] mx-auto">
            <h2 className="text-3xl sm:text-[2.8rem] font-black tracking-tight leading-tight mb-5 text-slate-900">
              Want Cinematic Video & Motion Cuts?
            </h2>
            <p className="text-[#111111] max-w-[540px] mx-auto text-[0.92rem] leading-relaxed mb-10 font-semibold">
              Our post-production team is prepared to edit your social assets, product ads, or custom outlines. Get in touch to schedule a project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-[#0055DA] hover:bg-[#0044B3] shadow-[0_6px_25px_rgba(0, 85, 218,0.15)] hover:shadow-[0_10px_35px_rgba(0, 85, 218,0.3)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-widest"
            >
              Start Your Project
            </Link>
          </div>
        </section>
        <RelatedServiceLinks
          currentSlug="video-motion"
          heading="Tie motion content back to service and marketing pages"
          description="Video content can support branding, campaigns, SEO landing pages, and product launches, so it should point back into those revenue-driving service pages."
        />
      </div>
    </div>
  );
}
