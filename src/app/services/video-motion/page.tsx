"use client";

import React, { useState } from "react";
import Link from "next/link";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";
import Image from "next/image";

const PORTFOLIO_VIDEOS = [
  {
    id: "car",
    title: "Automotive Motion (Supercar Cinematic)",
    desc: "High-speed professional track drifting graded with ultra-warm custom Rec.709 lut filters for deep luxury brand appeal.",
    badge: "Automotive Motion",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    img: "/cinematic_supercar.png",
    aspect: "video", // 16:9
    gradient: "from-[#1161ed] to-[#3b82f6]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    id: "social",
    title: "High-Retention Shortform Reels",
    desc: "Fast-cut social hook vertical reels with animated glowing outline text layers designed for maximum mobile conversion and watch-time.",
    badge: "Social Retention",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    img: "/cinematic_shortform.png",
    aspect: "9/16",
    gradient: "from-[#8b5cf6] to-[#d946ef]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.008v.008H12V18zm0-6h.008v.008H12V12zm0-6h.008v.008H12V6z" />
      </svg>
    )
  },
  {
    id: "drone",
    title: "Rec.709 Landscape Drone Grading",
    desc: "Breathtaking landscape drone tracking shots compiled with complex color balancing and cinematic ambient soundscapes.",
    badge: "Drone Cinematic",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    img: "/cinematic_drone.png",
    aspect: "video",
    gradient: "from-[#f59e0b] to-[#ec4899]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    )
  },
  {
    id: "abstract",
    title: "Dynamic Abstract Motion Graphics",
    desc: "Fluid, high-framerate vector simulations configured with spring dynamics, custom paths, and mathematical geometry outlines.",
    badge: "Abstract Physics",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    img: "/cinematic_abstract.png",
    aspect: "video",
    gradient: "from-[#10b981] to-[#059669]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.3 10.3a5.9 5.9 0 11-6.6 0M12 21v-3.5m0-11V3" />
      </svg>
    )
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

function PortfolioVideoCard({
  video,
  isMuted,
  onMuteToggle,
}: {
  video: typeof PORTFOLIO_VIDEOS[number];
  isMuted: boolean;
  onMuteToggle: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group p-2 rounded-[32px] border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-[0_12px_40px_rgba(17,97,237,0.02)] relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(17,97,237,0.08)] hover:border-[#1161ed]/20 hover:bg-white flex flex-col min-h-[360px]"
    >
      {/* Widescreen Video Player Wrapper */}
      <div className="relative w-full aspect-video rounded-[24px] bg-slate-950 shadow-inner overflow-hidden flex items-center justify-center border border-black/5">
        {isHovered ? (
          <video
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700"
            src={video.url}
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
        ) : (
          <div className="absolute inset-0 w-full h-full transition-all duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
            {video.img ? (
              <Image
                src={video.img}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                loading="lazy"
                className="object-cover brightness-[0.55] transition-all duration-500 group-hover:scale-105"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-90`} />
            )}
            
            {/* Play Button Overlay */}
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1161ed] cursor-pointer z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21" />
              </svg>
            </div>
            <span className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/80 mt-4 leading-none z-10">Hover to Play Clip</span>
          </div>
        )}

        {/* High Quality Badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-[0.55rem] text-white font-mono border border-white/10 font-bold z-20 shadow-sm flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1161ed] animate-ping" />
          1080P HD
        </div>

        {/* Sound Toggle Playback Control */}
        {isHovered && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onMuteToggle();
            }}
            className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 backdrop-blur-md text-white flex items-center justify-center border border-white/10 shadow-lg transition-all duration-200 z-20 cursor-pointer"
            title={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? (
              /* Mute SVG */
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              /* Unmute SVG */
              <svg className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </button>
        )}

        {/* Dark Vignette Bottom Overlay */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Card Info Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[0.62rem] font-black uppercase text-[#1161ed] tracking-[0.15em] mb-2 block">
            {video.badge}
          </span>
          <h3 className="text-[1.15rem] text-slate-900 mb-2 font-black group-hover:text-[#1161ed] transition-colors duration-300">
            {video.title}
          </h3>
          <p className="text-slate-500 leading-relaxed text-[0.8rem] font-medium">
            {video.desc}
          </p>
        </div>
        
        {/* Micro interaction CTA */}
        <div className="flex items-center gap-1.5 text-[0.68rem] font-black uppercase text-[#1161ed] mt-5 cursor-pointer select-none">
          <span>Explore Editing Tech</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover:translate-x-1 transition-transform duration-300">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function VideoMotionPage() {
  // Video Sandbox interactive mode
  const [editorMode, setEditorMode] = useState<
    "shortform" | "cinematic" | "motion"
  >("cinematic");

  // Interactive Timeline active step
  const [activeStep, setActiveStep] = useState(0);

  // Video portfolio sound muting states
  const [mutedMap, setMutedMap] = useState<Record<string, boolean>>({
    car: true,
    social: true,
    drone: true,
    abstract: true,
  });

  return (
    <div className="bg-slate-50/60 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Animated Floating Luminous Mesh Background Orbs */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#1161ed]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10 animate-float" />
      <div className="absolute top-[32%] right-[5%] w-[550px] h-[550px] bg-[#3b82f6]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10 animate-pulse duration-[12s]" />
      <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-[#8b5cf6]/[0.02] rounded-full blur-[130px] pointer-events-none select-none -z-10 animate-float-reverse" />

      {/* Luminous Dotted Grid Background Pattern */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#1161ed_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.22] -z-10 pointer-events-none select-none" />

      <div className="max-w-[1100px] mx-auto px-6 pt-16">


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
                      ? mode === "shortform"
                        ? "bg-white text-[#8b5cf6] shadow-[0_8px_20px_rgba(139,92,246,0.12)] scale-[1.02] border border-[#8b5cf6]/10"
                        : mode === "motion"
                          ? "bg-white text-[#10b981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] scale-[1.02] border border-[#10b981]/10"
                          : "bg-white text-[#1161ed] shadow-[0_8px_20px_rgba(17,97,237,0.12)] scale-[1.02] border border-[#1161ed]/10"
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
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[110px] pointer-events-none transition-colors duration-500 ${
              editorMode === "shortform"
                ? "bg-[#8b5cf6]/[0.12]"
                : editorMode === "motion"
                  ? "bg-[#10b981]/[0.12]"
                  : "bg-[#1161ed]/[0.18]"
            }`} />

            {/* Sidebar Code Variable Panel */}
            <div className="w-full md:w-[330px] shrink-0 z-10 flex flex-col gap-4 font-mono text-[0.72rem] text-slate-400">
              <div className="pb-3 border-b border-slate-800 flex justify-between items-center">
                <span className={`font-extrabold flex items-center gap-1.5 transition-colors duration-350 ${
                  editorMode === "shortform"
                    ? "text-[#8b5cf6]"
                    : editorMode === "motion"
                      ? "text-[#10b981]"
                      : "text-[#1161ed]"
                }`}>
                  <span className={`w-2 h-2 rounded-full animate-ping ${
                    editorMode === "shortform"
                      ? "bg-[#8b5cf6]"
                      : editorMode === "motion"
                        ? "bg-[#10b981]"
                        : "bg-[#1161ed]"
                  }`} />
                  post_timeline_variables.json
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[0.6rem] font-bold text-slate-500">
                  Davinci Resolve
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 flex flex-col gap-3.5 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Video Aspect Ratio</span>
                  <span className={`px-2 py-0.5 rounded bg-slate-800 border border-slate-700/50 font-bold transition-colors duration-300 ${
                    editorMode === "shortform"
                      ? "text-[#8b5cf6]"
                      : editorMode === "motion"
                        ? "text-[#10b981]"
                        : "text-[#1161ed]"
                  }`}>
                    {editorMode === "shortform"
                      ? "9:16 (Social Vertical)"
                      : editorMode === "cinematic"
                        ? "2.39:1 (Widescreen)"
                        : "1:1 (Square Vector)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Target Retention Lift</span>
                  <span className={`font-bold transition-colors duration-300 ${
                    editorMode === "shortform"
                      ? "text-[#c084fc]"
                      : editorMode === "motion"
                        ? "text-[#34d399]"
                        : "text-[#3b82f6]"
                  }`}>
                    {editorMode === "shortform"
                      ? "+82% Initial View"
                      : editorMode === "cinematic"
                        ? "98% Visual Quality"
                        : "Smooth Physics Render"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Audio Sample Rate</span>
                  <span className="text-slate-400 font-bold">
                    {editorMode === "cinematic"
                      ? "48.0 kHz 24-bit"
                      : "44.1 kHz Standard"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Color LUT Range</span>
                  <span className={`font-bold transition-colors duration-300 ${
                    editorMode === "shortform"
                      ? "text-[#c084fc]"
                      : editorMode === "motion"
                        ? "text-[#34d399]"
                        : "text-[#3b82f6]"
                  }`}>
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
                <code className={`font-bold text-[0.68rem] leading-relaxed whitespace-pre-wrap transition-colors duration-300 ${
                  editorMode === "shortform"
                    ? "text-[#c084fc]"
                    : editorMode === "motion"
                      ? "text-[#34d399]"
                      : "text-[#3b82f6]"
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
                      src={PORTFOLIO_VIDEOS[1].url}
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
                      <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-black/60 shadow">❤️</div>
                      <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-black/60 shadow">💬</div>
                      <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-black/60 shadow">✈️</div>
                    </div>
                    {/* Top pill bar */}
                    <div className="absolute top-2 w-16 h-3 bg-black/40 backdrop-blur-md rounded-full z-20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
                    </div>
                  </div>
                ) : editorMode === "cinematic" ? (
                  /* Widescreen pro-cinematic supercar timeline player mockup */
                  <div className="w-full aspect-video bg-slate-950 border-4 border-slate-800 rounded-[24px] shadow-[0_20px_50px_rgba(17,97,237,0.15)] relative overflow-hidden flex flex-col items-center justify-center transition-all duration-300">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src={PORTFOLIO_VIDEOS[0].url}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Rec.709 Active Badge */}
                    <div className="absolute top-3 left-4 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded text-[0.55rem] text-emerald-400 font-mono border border-emerald-400/20 font-bold z-20">
                      REC.709 ACTIVE
                    </div>
                    {/* Cinematic Letterboxes */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-black z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-black z-10" />
                  </div>
                ) : (
                  /* Abstract motion geometry physics guide loop mockup */
                  <div className="w-full aspect-video bg-slate-950 border-4 border-dashed border-[#1161ed]/30 rounded-[24px] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center transition-all duration-300">
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                      src={PORTFOLIO_VIDEOS[3].url}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Geometric overlays */}
                    <div className="absolute inset-0 border border-[#1161ed]/10 pointer-events-none flex items-center justify-center z-10">
                      <div className="w-32 h-32 border border-dashed border-[#1161ed]/30 rounded-full animate-spin duration-[12s]" />
                      <div className="absolute w-24 h-24 border border-dashed border-[#8b5cf6]/20 -rotate-45" />
                    </div>
                    <div className="absolute bottom-2.5 right-3 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[0.55rem] text-slate-400 font-mono z-20">
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

        {/* Cinematic & Motion Portfolio Showcase Section */}
        <section className="mb-28 border-t border-slate-200/50 pt-16 relative">
          <div className="text-center mb-16 relative z-10">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Studio Portfolio
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Cinematic & Motion Portfolio
            </h2>
            <p className="text-slate-500 text-sm max-w-[580px] mx-auto mt-2 leading-relaxed">
              Explore our real, looping portfolio clips. Click the sound toggle icon on any card to unmute and hear our cinematic audio design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {PORTFOLIO_VIDEOS.map((video) => (
              <PortfolioVideoCard
                key={video.id}
                video={video}
                isMuted={mutedMap[video.id]}
                onMuteToggle={() =>
                  setMutedMap({
                    ...mutedMap,
                    [video.id]: !mutedMap[video.id],
                  })
                }
              />
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
        <RelatedServiceLinks
          currentSlug="video-motion"
          heading="Tie motion content back to service and marketing pages"
          description="Video content can support branding, campaigns, SEO landing pages, and product launches, so it should point back into those revenue-driving service pages."
        />
      </div>
    </div>
  );
}
