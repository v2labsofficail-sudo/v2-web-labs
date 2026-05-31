"use client";

import React, { useState } from "react";
import Link from "next/link";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";

export default function UiUxBrandPage() {
  // Figma Sandbox interactive mode
  const [sandboxMode, setSandboxMode] = useState<
    "wireframe" | "tokens" | "hifi"
  >("hifi");

  // Interactive Timeline active step
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      title: "Atomic Figma Design Systems",
      desc: "Architecting enterprise-grade Figma workspaces. We construct bulletproof nested variables, automatic fluid grids, responsive components, and dark/light mode UI tokens.",
      badge: "Production Ready",
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
            d="M9.53 16.122l.188-.188a1.75 1.75 0 00-2.474-2.474l-.188.188a1.75 1.75 0 002.474 2.474zM9.53 16.122L12 18.586l4.03-4.03m-9.06 1.566L5.03 14.18a1.75 1.75 0 012.474-2.474l.188.188A1.75 1.75 0 015.03 14.18z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7"
          />
        </svg>
      ),
    },
    {
      title: "Interactive High-Fi Prototypes",
      desc: "Constructing click-through user flows that perfectly simulate production system speeds and animations. This enables rapid client alignment and user feedback loop.",
      badge: "User Validated",
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
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      ),
    },
    {
      title: "Cohesive Corporate Branding",
      desc: "Forging premium, high-impact visual languages. We define spacing scales, typography variables, guidelines systems, and comprehensive vector kits.",
      badge: "Brand Identity",
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
            d="M9.53 16.122l.188-.188a1.75 1.75 0 00-2.474-2.474l-.188.188a1.75 1.75 0 002.474 2.474z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.304 14.304a1.75 1.75 0 01-2.474 0l-1.121-1.12a1.75 1.75 0 010-2.475l1.12-1.12a1.75 1.75 0 012.475 0l1.12 1.12a1.75 1.75 0 010 2.474l-1.121 1.121z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.07 19.07a1.75 1.75 0 01-2.474 0l-1.121-1.12a1.75 1.75 0 010-2.475l1.12-1.12a1.75 1.75 0 012.475 0l1.12 1.12a1.75 1.75 0 010 2.474l-1.12 1.12z"
          />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discovery & User Pathways",
      subtitle: "Securing Client Flow",
      desc: "Creating solid, logical user navigation frameworks. We design flow connections and map exactly how clients complete actions before drawing any visual vectors.",
      tools: ["FigJam", "Miro Workspace", "Notion Studio"],
      preview: (
        <div className="w-full h-full border border-slate-200 bg-slate-50/70 p-4 rounded-2xl flex flex-col justify-between text-[0.68rem] font-mono text-slate-500 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 relative z-10">
            <span className="font-extrabold text-[#1161ed]">
              ◇ MAP_USER_ROUTE
            </span>
            <span className="text-[0.6rem] px-2 py-0.5 rounded bg-[#1161ed]/10 text-[#1161ed] border border-[#1161ed]/20 font-black animate-pulse">
              ACTIVE FLOW
            </span>
          </div>
          <div className="flex gap-2 items-center justify-center relative z-10">
            <span className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-600">
              Home Page
            </span>
            <span className="text-[#1161ed] font-black animate-ping text-[0.6rem]">
              ➔
            </span>
            <span className="px-2.5 py-1.5 bg-[#1161ed] text-white rounded-xl shadow-[0_4px_10px_rgba(17,97,237,0.2)] font-black">
              Configure Service
            </span>
            <span className="text-slate-400">➔</span>
            <span className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-600">
              Estimate
            </span>
          </div>
          <div className="flex justify-between items-center text-[0.6rem] text-slate-400 relative z-10 pt-1.5 border-t border-slate-200/40">
            <span>Conversion Predictor: High</span>
            <span>Completion: 92%</span>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Atomic Wireframing",
      subtitle: "Designing the Layout Core",
      desc: "Constructing high-contrast skeleton structures. This step maps proper element ratios, typographic layout priorities, and clear visual hooks.",
      tools: ["Figma Variables", "Structural Guides", "Atomic Assets"],
      preview: (
        <div className="w-full h-full border border-slate-200 rounded-2xl bg-slate-50/70 p-4 flex flex-col gap-3 font-mono text-[0.68rem] text-slate-400 relative overflow-hidden shadow-inner">
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
          <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-200/60 border-dashed" />
          <div className="h-6 bg-white border border-slate-200 rounded-lg flex items-center justify-between px-3 text-slate-500 shadow-sm z-10">
            <span className="text-[0.6rem]">Header [H: 48px]</span>
            <div className="w-3 h-3 border border-[#1161ed]/30 rounded-full" />
          </div>
          <div className="grid grid-cols-3 gap-3 flex-1 z-10">
            <div className="border border-dashed border-slate-300 rounded-xl flex items-center justify-center p-1 bg-white/40">
              Side Spec
            </div>
            <div className="col-span-2 border border-dashed border-[#1161ed]/30 rounded-xl flex flex-col justify-between p-3 bg-white/60">
              <div className="h-2 bg-slate-200 rounded-full w-2/3" />
              <div className="h-8 bg-[#1161ed]/5 border border-dashed border-[#1161ed]/20 rounded-lg flex items-center justify-center text-[#1161ed] text-[0.6rem] font-bold">
                Grid Anchor [W: 100%]
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "High-Fidelity Interface",
      subtitle: "Convergence of Aesthetics",
      desc: "Applying corporate brand gradients, micro-animations, glassmorphic filters, and interactive styles. Ready for flawless developer implementation.",
      tools: ["Tailwind v4", "Spline 3D", "Lottie Animations", "NextJS"],
      preview: (
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-4 flex flex-col justify-between text-slate-700 relative overflow-hidden shadow-inner border border-slate-200/60">
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#1161ed]/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-[#3b82f6]/5 rounded-full blur-2xl" />
          <div className="flex justify-between items-center relative z-10">
            <span className="text-[0.62rem] uppercase tracking-widest text-[#1161ed] font-extrabold">
              Studio Output
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[0.58rem] font-mono text-slate-400">
                SYNC_OK
              </span>
            </div>
          </div>
          <div className="my-auto relative z-10">
            <div className="text-[0.62rem] text-slate-400 uppercase tracking-wider mb-1 font-semibold">
              Active Gradient Shader
            </div>
            <div className="text-sm font-black tracking-tight mb-2 text-slate-800">
              Neon Conversion Dashboard
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300/40">
              <div className="h-full bg-gradient-to-r from-[#1161ed] to-[#3b82f6] w-[88%] rounded-full shadow-[0_0_10px_rgba(17,97,237,0.15)]" />
            </div>
          </div>
          <div className="flex justify-between items-center text-[0.6rem] text-slate-400 relative z-10 pt-2 border-t border-slate-200/40">
            <span>Visual Rating</span>
            <span className="text-[#1161ed] font-black">9.8/10</span>
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
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#1161ed_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.15] -z-10 pointer-events-none select-none" />

      <div className="max-w-[1100px] mx-auto px-6 pt-16">
        {/* Hero Section with premium typographic depth */}
        <header className="mb-24 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#1161ed] tracking-[0.18em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
            <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
            UI/UX Studio Focus
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.05] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            High-Fidelity Interfaces &{" "}
            <span className="bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-sm">
              Brand Systems
            </span>
          </h1>

          <p className="text-[#64748B] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[780px] font-medium">
            We blueprint immersive experiences, user pathways, atomic design
            tokens, and cohesive brand systems. We balance visual wow factor
            with frictionless usability.
          </p>
        </header>

        {/* Light-Themed Interactive Sandbox Workspace Section */}
        <section className="mb-28 relative z-10">
          {/* Header Controls for Sandbox */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                Live Interactive Sandbox
              </div>
              <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight">
                Responsive Design Blueprint
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 font-semibold">
                Interact with the selectors below to view how figma wireframe
                models map directly to spacing variables and production-ready
                visual modules.
              </p>
            </div>

            {/* Premium Selector Switchers */}
            <div className="flex p-1.5 bg-slate-200/50 backdrop-blur-md border border-slate-200/60 rounded-[20px] w-full md:w-auto shadow-inner">
              {(["wireframe", "tokens", "hifi"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSandboxMode(mode)}
                  className={`flex-1 md:flex-initial px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    sandboxMode === mode
                      ? "bg-white text-[#1161ed] shadow-[0_8px_20px_rgba(17,97,237,0.08)] scale-[1.02]"
                      : "text-slate-600 hover:text-[#1161ed]"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Master Interactive Workspace Container - Completely Redesigned as Light glassmorphism */}
          <div className="w-full bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[40px] p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden min-h-[460px] flex flex-col md:flex-row gap-10 items-center justify-between">
            {/* Luminous Inner Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1161ed]/[0.05] rounded-full blur-[110px] pointer-events-none" />

            {/* Sidebar Code Variable Panel */}
            <div className="w-full md:w-[330px] shrink-0 z-10 flex flex-col gap-4 font-mono text-[0.72rem] text-slate-500">
              <div className="pb-3 border-b border-slate-200 flex justify-between items-center">
                <span className="text-[#1161ed] font-extrabold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1161ed] animate-ping" />
                  figma_design_variables.json
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[0.6rem] font-bold text-slate-500">
                  v5.2 Engine
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-slate-55/80 backdrop-blur-md border border-slate-200/60 flex flex-col gap-3.5 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Interface Type</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[#1161ed] font-bold">
                    Interactive Viewport
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Border Radius Spec</span>
                  <span className="text-[#1161ed] font-bold">
                    {sandboxMode === "wireframe"
                      ? "0px (Blueprint Square)"
                      : "28px (Adaptive Glass)"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Active Spacing Scale</span>
                  <span className="text-[#1161ed] font-bold">
                    {sandboxMode === "wireframe"
                      ? "None (Unbound Layout)"
                      : "4px/8px Core Grid Alignment"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Background Style</span>
                  <span className="text-[#1161ed] font-bold">
                    {sandboxMode === "hifi"
                      ? "Glassmorphism Mesh Shader"
                      : sandboxMode === "tokens"
                        ? "Slate-50 / Border Highlight"
                        : "Static Transparent Grid"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Active Colors State</span>
                  <span className="text-purple-600 font-bold">
                    {sandboxMode === "hifi"
                      ? "Brand Gradient Blend"
                      : sandboxMode === "tokens"
                        ? "Tokens Palette"
                        : "Draft-Gray Blueprint"}
                  </span>
                </div>
              </div>

              {/* Dynamic JSON / CSS Tagging panel */}
              <div className="p-5 rounded-3xl bg-slate-55 border border-dashed border-slate-200 flex flex-col gap-2">
                <div className="text-[0.62rem] text-slate-400">
                  {"/* active active CSS variable tags */"}
                </div>
                <code className="text-[#1161ed] font-bold text-[0.68rem] leading-relaxed whitespace-pre-line">
                  {sandboxMode === "wireframe" &&
                    `.viewport-view { \n  outline: 2px dashed #94a3b8;\n  border-radius: 0px;\n}`}
                  {sandboxMode === "tokens" &&
                    `:root { \n  --padding-core: var(--space-8);\n  --glow-blur: 24px;\n  --radius-main: 28px;\n}`}
                  {sandboxMode === "hifi" &&
                    `.dashboard-card { \n  background: rgba(255,255,255,0.7);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 20px 50px rgba(17,97,237,0.06);\n}`}
                </code>
              </div>
            </div>

            {/* Sandbox Visual Output Container */}
            <div className="w-full flex-1 flex items-center justify-center p-2 z-10">
              {/* Output Frame Mockup */}
              <div
                className={`w-full max-w-[420px] transition-all duration-500 p-8 ${
                  sandboxMode === "wireframe"
                    ? "bg-transparent border-[2.2px] border-dashed border-slate-300 rounded-none shadow-none text-slate-400"
                    : sandboxMode === "tokens"
                      ? "bg-purple-50/20 border border-purple-300/60 rounded-[28px] text-purple-900 shadow-lg relative"
                      : "bg-white/90 backdrop-blur-xl border border-slate-200 rounded-[32px] text-slate-800 shadow-[0_25px_60px_rgba(17,97,237,0.06)] relative"
                }`}
              >
                {/* Token Overlays tags in Tokens mode */}
                {sandboxMode === "tokens" && (
                  <>
                    <div className="absolute top-0 left-1/2 -translate-y-1/2 bg-purple-500 text-white font-mono text-[0.58rem] px-2.5 py-0.5 rounded shadow-md z-20">
                      w-full [100%]
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 bg-purple-500 text-white font-mono text-[0.58rem] px-2 py-0.5 rounded shadow-md z-20 rotate-90">
                      r-28 [28px]
                    </div>
                  </>
                )}

                {/* Inside Component Rendering */}
                <div className="flex flex-col gap-6">
                  {/* Dashboard Header */}
                  <div
                    className={`flex justify-between items-center pb-4 ${
                      sandboxMode === "wireframe"
                        ? "border-b border-slate-300 border-dashed"
                        : sandboxMode === "tokens"
                          ? "border-b border-purple-200"
                          : "border-b border-slate-100"
                    }`}
                  >
                    {sandboxMode === "wireframe" ? (
                      <>
                        <div className="w-24 h-4 bg-slate-200 rounded-none" />
                        <div className="w-8 h-8 rounded-none border border-slate-300 border-dashed" />
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col">
                          <span
                            className={`text-[0.62rem] font-mono tracking-[0.2em] uppercase ${sandboxMode === "tokens" ? "text-purple-600 font-bold" : "text-[#1161ed] font-black"}`}
                          >
                            Studio Viewport
                          </span>
                          <span className="text-sm font-black tracking-tight mt-0.5">
                            Custom Analytics
                          </span>
                        </div>
                        <div
                          className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm ${sandboxMode === "tokens" ? "bg-purple-100 text-purple-700 border border-purple-200" : "bg-slate-100 text-slate-700"}`}
                        >
                          SV
                        </div>
                      </>
                    )}
                  </div>

                  {/* Body Content simulation */}
                  {sandboxMode === "wireframe" ? (
                    <div className="flex flex-col gap-4">
                      <div className="h-6 w-full bg-slate-200/60 border border-dashed border-slate-300" />
                      <div className="h-20 w-full bg-slate-100/40 border border-dashed border-slate-300" />
                      <div className="h-10 w-2/3 bg-slate-200/60 border border-dashed border-slate-300" />
                    </div>
                  ) : sandboxMode === "tokens" ? (
                    <div className="flex flex-col gap-4">
                      {/* Spacing tokens indicator line */}
                      <div className="relative border border-dashed border-purple-300 p-4 rounded-xl bg-purple-50/50">
                        <div className="absolute top-0 right-3 bg-purple-500 text-white text-[0.5rem] font-mono px-1 rounded shadow">
                          gap-4 [16px]
                        </div>
                        <span className="text-[0.65rem] text-purple-700 block mb-1 font-bold">
                          Design Spacing Tokens
                        </span>
                        <div className="flex gap-2 mt-1">
                          <div className="w-5 h-5 rounded-md bg-[#1161ed] border border-white/10" />
                          <div className="w-5 h-5 rounded-md bg-[#3b82f6] border border-white/10" />
                          <div className="w-5 h-5 rounded-md bg-[#8b5cf6] border border-white/10" />
                          <div className="w-5 h-5 rounded-md bg-[#d946ef] border border-white/10" />
                        </div>
                      </div>
                      <div className="h-2 w-full bg-purple-100 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[78%]" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5">
                      {/* Beautiful Neon glassmorphic details pane inside HIFI dashboard preview */}
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between relative overflow-hidden shadow-inner">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#1161ed]/5 rounded-full blur-lg" />
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[0.68rem] font-bold text-slate-400 tracking-wider">
                            Estimated Traffic Lift
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[0.58rem] font-black uppercase tracking-widest border border-emerald-200">
                            Active (+18.2%)
                          </span>
                        </div>
                        <span className="text-[1.9rem] font-black tracking-tight leading-none text-slate-800">
                          $62,810
                        </span>

                        {/* Dynamic Neon Visual SVG Path Line Graph */}
                        <div className="mt-5 h-16 w-full relative">
                          <svg
                            className="w-full h-full overflow-visible"
                            viewBox="0 0 100 30"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id="neonGlow"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                              >
                                <stop offset="0%" stopColor="#1161ed" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                              </linearGradient>
                            </defs>
                            {/* Area Fill */}
                            <path
                                d="M0,30 L10,24 L25,28 L40,15 L60,20 L75,8 L90,12 L100,2 L100,30 Z"
                                fill="url(#neonGlow)"
                                fillOpacity="0.08"
                            />
                            {/* Stroke Path */}
                            <path
                              d="M0,30 L10,24 L25,28 L40,15 L60,20 L75,8 L90,12 L100,2"
                              fill="none"
                              stroke="url(#neonGlow)"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              className="animate-svg-draw"
                            />
                            {/* Pulsing indicator node */}
                            <circle
                              cx="100"
                              cy="2"
                              r="3.5"
                              fill="#8b5cf6"
                              className="animate-ping"
                            />
                            <circle cx="100" cy="2" r="2" fill="#fff" />
                          </svg>
                        </div>
                      </div>

                      {/* Interactive compiler button with neon drop-shadow */}
                      <button className="w-full py-3.5 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] rounded-xl text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(17,97,237,0.15)] hover:shadow-[0_8px_30px_rgba(17,97,237,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                        Launch Figma Hifi Blueprint
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
              Design Architecture Toolkit
            </h2>
            <p className="text-slate-500 text-sm max-w-[500px] mx-auto mt-2 leading-relaxed font-semibold">
              We compile highly robust layout constructs and graphic systems
              tailored directly to your startup goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] border border-slate-200/40 bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(17,97,237,0.01)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(17,97,237,0.05)] hover:border-[#1161ed]/30 hover:bg-white group flex flex-col justify-between min-h-[290px]"
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
                  <p className="text-slate-500 leading-relaxed text-[0.82rem] font-medium">
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
            <p className="text-slate-500 text-sm max-w-[520px] mx-auto mt-2 leading-relaxed font-semibold">
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
                        ? "bg-white shadow-[0_20px_40px_rgba(17,97,237,0.04)] border-[#1161ed]/20 scale-[1.03]"
                        : "bg-transparent border-transparent hover:border-slate-200"
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
              <div className="bg-white rounded-[36px] border border-slate-200/40 p-8 shadow-[0_8px_30px_rgba(17,97,237,0.01)] min-h-[390px] flex flex-col justify-between relative group hover:shadow-[0_25px_50px_rgba(17,97,237,0.04)] hover:border-[#1161ed]/20 transition-all duration-500">
                {/* Visual Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] rounded-t-[36px]" />

                <div>
                  <span className="text-[0.62rem] font-black tracking-widest text-[#1161ed] uppercase block mb-1">
                    Methodology Stage {steps[activeStep].num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 font-semibold">
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

        {/* ========================================================================= */}
        {/* NEW DESIGN TOOLING STACK & SHOWCASE SECTION (COMMISSIONED BY USER) */}
        {/* ========================================================================= */}
        <section className="py-24 border-t border-slate-200/50 relative z-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#8b5cf6]/[0.08] text-[#8b5cf6] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 border border-[#8b5cf6]/15">
                CREATIVE TOOLSTACK
              </div>
              <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
                Our Creative Pipeline
              </h2>
              <p className="text-slate-500 text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
                We craft state-of-the-art designs leveraging industry-defining tools. No templates, no generic boxes—pure customized visual systems.
              </p>
            </div>

            {/* Two-Column Tool Stack Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Unique Generated Illustration */}
              <div className="lg:col-span-6 flex justify-center relative">
                {/* Floating Luminous Glow Background behind the image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-[#1161ed]/10 to-[#8b5cf6]/10 rounded-full blur-[80px] -z-10 animate-float" />
                
                {/* Premium floating glass framework holding our generated artwork */}
                <div className="p-4 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.04)] hover:shadow-[0_35px_80px_rgba(17,97,237,0.06)] hover:scale-[1.01] transition-all duration-500 relative overflow-hidden group aspect-square max-w-[460px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  <img
                    src="/ui_ux_tools_showcase.png"
                    alt="Creative UI/UX Branding Illustration Artwork"
                    className="w-full h-full object-cover rounded-[28px] shadow-sm transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle float tag */}
                  <div className="absolute bottom-6 right-6 bg-slate-900/90 text-white font-mono text-[0.62rem] tracking-wider px-3.5 py-2 rounded-xl backdrop-blur-sm shadow-md border border-white/10 z-20">
                    ◇ SHADER: ACTIVE
                  </div>
                </div>
              </div>

              {/* Right Column: Creative floating presentation of Figma, Photoshop, Canva, Illustrator */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                {/* Figma Tool Element */}
                <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl hover:border-[#1161ed]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(17,97,237,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7" viewBox="0 0 100 150" fill="none">
                      <path d="M25 37.5C25 51.3 36.2 62.5 50 62.5C50 48.7 38.8 37.5 25 37.5Z" fill="#F24E1E"/>
                      <path d="M25 87.5C25 73.7 36.2 62.5 50 62.5V87.5C50 101.3 38.8 112.5 25 112.5C11.2 112.5 0 101.3 0 87.5C0 73.7 11.2 62.5 25 62.5" fill="#A259FF"/>
                      <path d="M50 12.5C50 26.3 61.2 37.5 75 37.5C88.8 37.5 100 26.3 100 12.5C100 -1.3 88.8 -12.5 75 -12.5C61.2 -12.5 50 -1.3 50 12.5Z" transform="translate(0, 25)" fill="#FF7262"/>
                      <path d="M50 62.5C50 48.7 61.2 37.5 75 37.5C88.8 37.5 100 48.7 100 62.5C100 76.3 88.8 87.5 75 87.5C61.2 87.5 50 76.3 50 62.5Z" fill="#1ABCFE"/>
                      <path d="M50 112.5C50 126.3 61.2 137.5 75 137.5C88.8 137.5 100 126.3 100 112.5C100 98.7 88.8 87.5 75 87.5C61.2 87.5 50 98.7 50 112.5Z" fill="#0ACF83"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">Figma Studio</h4>
                      <span className="text-[0.58rem] font-bold bg-[#1161ed]/10 text-[#1161ed] px-2 py-0.5 rounded-md uppercase tracking-wider">Interface Core</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Architecting atomic design tokens, interactive prototypes, fluid layouts, and production-ready component libraries.
                    </p>
                  </div>
                </div>

                {/* Photoshop Tool Element */}
                <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl hover:border-blue-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,196,255,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#001C3D"/>
                      <text x="5.2" y="16.5" fill="#00C8FF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11" letterSpacing="-0.5px">Ps</text>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">Adobe Photoshop</h4>
                      <span className="text-[0.58rem] font-bold bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-md uppercase tracking-wider">Raster Graphics</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Advanced picture composition, luxury image editing, custom texture shading, and ultra-high-fidelity product showcases.
                    </p>
                  </div>
                </div>

                {/* Illustrator Tool Element */}
                <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl hover:border-amber-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(255,154,0,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#1b1202"/>
                      <text x="5.5" y="16.5" fill="#FF9A00" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11" letterSpacing="-0.5px">Ai</text>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">Adobe Illustrator</h4>
                      <span className="text-[0.58rem] font-bold bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-md uppercase tracking-wider">Vector Assets</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Designing sleek logos, custom scale iconography, complex path illustrations, and scalable branding guides.
                    </p>
                  </div>
                </div>

                {/* Canva Tool Element */}
                <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl hover:border-purple-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(125,42,232,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="url(#canvaGrad)"/>
                      <path d="M14.5 15.5C13.5 16.5 11.8 16.8 10.5 16.2C8.8 15.4 8.2 13.2 9.0 11.5C9.8 9.8 11.8 9.0 13.5 9.8C14.5 10.3 15.2 11.2 15.2 12.2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="canvaGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#00C4CC"/>
                          <stop offset="100%" stopColor="#7D2AE8"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">Canva Design</h4>
                      <span className="text-[0.58rem] font-bold bg-purple-500/10 text-purple-600 px-2 py-0.5 rounded-md uppercase tracking-wider">Rapid Collateral</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Sleek marketing banners, ready-to-post social layouts, editable corporate decks, and fast team collateral.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Premium Light CTA Section with glowing grid borders (NO MORE NAVY DARK BLUE BOX!) */}
        <section className="relative rounded-[40px] bg-gradient-to-tr from-[#1161ed]/[0.06] via-[#8b5cf6]/[0.03] to-white p-10 sm:p-20 text-center text-slate-800 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.01)] z-10 mt-16 max-w-[1100px] mx-auto border border-slate-200/60">
          {/* Luminous soft mesh bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1161ed] opacity-5 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6] opacity-5 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 max-w-[650px] mx-auto">
            <h2 className="text-3xl sm:text-[2.8rem] font-black tracking-tight leading-tight mb-5 text-slate-900">
              {"Let's Design Your Future Identity"}
            </h2>
            <p className="text-slate-500 max-w-[540px] mx-auto text-[0.92rem] leading-relaxed mb-10 font-semibold">
              Our UI/UX specialists are ready to architect responsive wireframe
              modules, custom variables guidelines, or interactive vector
              components.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] hover:from-[#0c4ec3] hover:to-[#7c3aed] shadow-[0_6px_25px_rgba(17,97,237,0.15)] hover:shadow-[0_10px_35px_rgba(17,97,237,0.3)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-widest"
            >
              Initiate Blueprint Estimate
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
      <div className="max-w-[1200px] mx-auto px-6 pb-12">
        <RelatedServiceLinks
          currentSlug="ui-ux-brand"
          heading="Support branding intent with service-cluster links"
          description="Branding pages should naturally feed visitors toward web development, SaaS, AI, and marketing pages because those projects usually overlap in real buying journeys."
        />
      </div>
    </div>
  );
}
