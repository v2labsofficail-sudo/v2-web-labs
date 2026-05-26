"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- Vector SVGs for floating ecosystem nodes and models ---
const ECO_ICONS = {
  Whatsapp: () => (
    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.015 14.07 1.015 11.5 1.015c-5.44 0-9.866 4.372-9.87 9.802 0 1.772.483 3.502 1.396 5.042l-1.01 3.686 3.813-.989z" />
    </svg>
  ),
  Stripe: () => (
    <svg className="w-6 h-6 text-[#635BFF]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  ),
  Slack: () => (
    <svg className="w-6 h-6 text-[#4A154B]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.135 3.78a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.78a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.78 10.135a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z" />
    </svg>
  ),
  Google: () => (
    <svg className="w-6 h-6 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  ),
  Crm: () => (
    <svg className="w-6 h-6 text-[#FF7A59]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Email: () => (
    <svg className="w-6 h-6 text-[#EA4335]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Apis: () => (
    <svg className="w-6 h-6 text-[#00D8FF]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Openai: () => (
    <svg className="w-6 h-6 text-[#10A37F]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20M12 12m-4 0a4 4 0 108 0 4 4 0 10-8 0" />
    </svg>
  ),
  // OpenAI Logo Vector
  OpenAIModel: () => (
    <svg className="w-6 h-6 text-[#10A37F]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M4.5 16.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5h15c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5H4.5z" />
      <circle cx="7" cy="14" r="1.5" fill="currentColor" />
      <circle cx="17" cy="14" r="1.5" fill="currentColor" />
      <path d="M12 3v18" />
    </svg>
  ),
  // Gemini Star Logo Vector
  GeminiModel: () => (
    <svg className="w-6 h-6 text-[#1a73e8]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  // Claude Geometric Logo Vector
  ClaudeModel: () => (
    <svg className="w-6 h-6 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 3L4 9v8l8 4 8-4V9l-8-6z" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="4" y1="9" x2="20" y2="17" />
      <line x1="20" y1="9" x2="4" y2="17" />
    </svg>
  )
};

export default function AiAutomationPage() {
  // --- Section 1: Hero State variables ---
  const [tickerIndex, setTickerIndex] = useState(0);
  const tickerTexts = [
    "Automating workflows...",
    "Connecting platforms...",
    "Processing operations...",
    "Reducing manual tasks..."
  ];

  // --- Section 2: Live Operations Center State variables ---
  const [activeStreamIndex, setActiveStreamIndex] = useState(0);
  const operationsStream = [
    {
      id: 0,
      input: { label: "Incoming Lead", desc: "HubSpot Form Ingested", value: "$42,500" },
      brain: { text: "Qualifying Intent & Sentiment", model: "OpenAI GPT-4o" },
      output: { label: "CRM Lead Active", desc: "Auto Routed & Slack Notified", status: "Completed" }
    },
    {
      id: 1,
      input: { label: "Payment Received", desc: "Stripe Invoice Successful", value: "$12,400" },
      brain: { text: "Drafting PDF Receipt & Ledger Record", model: "V2 Finance Agent" },
      output: { label: "Invoice Emailed", desc: "QuickBooks Synced & Archived", status: "Synced" }
    },
    {
      id: 2,
      input: { label: "Support Ticket", desc: "API Sync Failure Logged", value: "Severity 2" },
      brain: { text: "Analyzing Trace Logs & Diagnostic Codes", model: "V2 Debug Engine" },
      output: { label: "Slack Warning Alert", desc: "Jira Task Ingested", status: "Alert Sent" }
    },
    {
      id: 3,
      input: { label: "New Product Order", desc: "Headless Checkout Catalog", value: "$1,899" },
      brain: { text: "Verifying Inventory & Dispatch Schedule", model: "Logistics Router" },
      output: { label: "Warehouse Dispatched", desc: "Delivery Webhooks Hooked", status: "Dispatched" }
    }
  ];

  // --- Section 3: Scroll-Based Stepper state ---
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const workflowSteps = [
    { step: 1, label: "Customer inquiry submitted", desc: "An inbound email, lead form, or chat query triggers a webhook listener in sub-second time." },
    { step: 2, label: "AI analyzes request intent", desc: "V2 Labs neural filters run semantic analysis via OpenAI/Gemini to extract user goals and budget parameters." },
    { step: 3, label: "Lead routed automatically", desc: "The analyzed record is instantly routed to the optimal sales rep based on territory rules." },
    { step: 4, label: "CRM updated instantly", desc: "Customer records in HubSpot or Salesforce are populated with direct intent tags and transcript summaries." },
    { step: 5, label: "Team notified in real-time", desc: "A beautifully formatted rich Slack or MS Teams alert tags team members with action items." },
    { step: 6, label: "Analytics dashboard updated", desc: "Telemetry charts and pipeline numbers update dynamically with zero latency." }
  ];

  // --- Section 4: Command Terminal state ---
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Initializing AI automation engine...",
    "Connecting secure internal CRM bridges...",
    "Syncing company customer databases...",
    "V2 active workflow pipeline status: Healthy",
    "182 operations automated today."
  ]);
  const logGeneratorInterval = useRef<NodeJS.Timeout | null>(null);

  // --- Section 5: Ecosystem Map hover state ---
  const [activeEcoNode, setActiveEcoNode] = useState<string | null>(null);
  const ecosystemNodes = [
    { id: "Whatsapp", label: "WhatsApp API", x: "15%", y: "15%", icon: <ECO_ICONS.Whatsapp /> },
    { id: "Stripe", label: "Stripe Checkout", x: "85%", y: "15%", icon: <ECO_ICONS.Stripe /> },
    { id: "Slack", label: "Slack Alerter", x: "15%", y: "85%", icon: <ECO_ICONS.Slack /> },
    { id: "Google", label: "Google Suite", x: "85%", y: "85%", icon: <ECO_ICONS.Google /> },
    { id: "Crm", label: "HubSpot / SF CRM", x: "50%", y: "10%", icon: <ECO_ICONS.Crm /> },
    { id: "Email", label: "SendGrid Webhooks", x: "50%", y: "90%", icon: <ECO_ICONS.Email /> },
    { id: "Apis", label: "Custom REST APIs", x: "10%", y: "50%", icon: <ECO_ICONS.Apis /> },
    { id: "Openai", label: "OpenAI GPT-4", x: "90%", y: "50%", icon: <ECO_ICONS.Openai /> },
  ];

  // --- Section 6: Chaos to Automation Slider state ---
  const [transformationSlider, setTransformationSlider] = useState(0);

  // Interval loops for Hero Ticker & Live Ingest streams
  useEffect(() => {
    // 1. Ticker Loop
    const tickerTimer = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % tickerTexts.length);
    }, 2800);

    // 2. Live Operations center loop
    const streamTimer = setInterval(() => {
      setActiveStreamIndex(prev => (prev + 1) % operationsStream.length);
    }, 4500);

    // 3. Command Terminal logs writer simulation
    const terminalLogsPool = [
      "[SYSTEM] Trigger received: webhook.inbound_lead (200 OK)",
      "[AI Brain] Running prompt qualification pipeline...",
      "[AI Brain] Qualification score: 0.94 - HIGH INTENT detected",
      "[HubSpot] Connecting database gateway...",
      "[HubSpot] Lead created successfully: ID_482910",
      "[Slack] Formatting rich webhook alert...",
      "[Slack] Dispatching operational alert to channel #sales-leads",
      "[SYSTEM] Batch scheduled task executed successfully (0.02s)",
      "[Stripe] Payment invoice webhook verified - Stripe Secure",
      "[Database] Caching system latency parameters in Redis Cache",
      "[AI Brain] Analyzing customer inquiry sentiment... Positive",
    ];

    logGeneratorInterval.current = setInterval(() => {
      const randomLine = terminalLogsPool[Math.floor(Math.random() * terminalLogsPool.length)];
      setTerminalLogs(prev => [...prev.slice(1), randomLine]);
    }, 2200);

    return () => {
      clearInterval(tickerTimer);
      clearInterval(streamTimer);
      if (logGeneratorInterval.current) clearInterval(logGeneratorInterval.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden select-none">
      
      {/* 1. Immersive Fullscreen Hero Scene */}
      <section className="min-h-[92vh] bg-[#090D1A] flex flex-col items-center justify-center relative overflow-hidden text-center px-6">
        
        {/* Soft Glowing Mesh Grid Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] bg-[#1161ed]/[0.06] rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-[#635BFF]/[0.05] rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse duration-[7s]" />

        {/* Floating Drifting Background Particles (Pure CSS) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-bounce"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 95}%`,
                animationDelay: `${i * 450}ms`,
                animationDuration: `${4 + Math.random() * 6}s`,
                opacity: 0.15 + Math.random() * 0.4
              }}
            />
          ))}
        </div>

        {/* Centerpiece: Animated AI Core Orb / Neural System */}
        <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] flex items-center justify-center mb-10 select-none">
          {/* External Spinning Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#1161ed]/35 animate-spin duration-[25s]" />
          
          {/* Middle Counter-rotating Ring */}
          <div className="absolute inset-[30px] rounded-full border border-[#635BFF]/25 border-t-2 border-b-2 border-t-[#635BFF] border-b-[#635BFF] animate-spin duration-[15s] [animation-direction:reverse]" />
          
          {/* Glowing Neural SVG Orb Core */}
          <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-tr from-[#635BFF] to-[#1161ed] p-1 shadow-[0_0_50px_rgba(99,91,255,0.4)] flex items-center justify-center animate-pulse duration-[3.5s]">
            <div className="w-full h-full bg-[#090D1A] rounded-full flex items-center justify-center">
              <svg className="w-14 h-14 md:w-20 md:h-20 text-[#1161ed] animate-spin duration-[40s]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20M12 12m-5 0a5 5 0 1010 0 5 5 0 10-10 0" />
                <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(45 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-45 12 12)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Headline */}
        <div className="max-w-[850px] relative z-10">
          <p className="text-[#635BFF] font-black uppercase text-xs md:text-sm tracking-[0.25em] mb-4">Autonomous Systems</p>
          <h1 className="text-3xl sm:text-5xl md:text-[3.8rem] font-black text-white tracking-tight leading-[1.1] mb-6">
            AI Systems That Run Operations <span className="bg-gradient-to-r from-[#635BFF] to-[#1161ed] bg-clip-text text-transparent">Automatically.</span>
          </h1>
          
          {/* Below Live Text Typewriter */}
          <div className="h-[36px] flex items-center justify-center mb-10">
            <span className="text-slate-400 font-extrabold text-sm md:text-lg tracking-wide uppercase transition-opacity duration-500 animate-pulse">
              {tickerTexts[tickerIndex]}
            </span>
          </div>

          {/* Start Project actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#635BFF] to-[#1161ed] text-white font-black rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgba(99,91,255,0.3)] text-sm text-center"
            >
              Start Automated Pipeline
            </Link>
            <a 
              href="#operations-center" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 hover:border-white/30 text-white font-black rounded-full transition-all duration-300 hover:bg-white/10 text-sm text-center"
            >
              View Operations Loop
            </a>
          </div>
        </div>

      </section>

      {/* Main light site wrap with roomy spacing */}
      <div className="container mx-auto px-6 max-w-[1240px] relative">
        
        {/* 2. Live Operations Center Dashboard */}
        <section id="operations-center" className="py-24 border-b border-black/[0.04] mb-20 md:mb-28 text-center scroll-mt-20">
          <div className="text-center mb-16">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Real-Time Ingestion Loop</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              Live Operations Center
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              Ditch static diagrams. Watch our automated pipeline actively ingest data, analyze tasks via custom brains, and commit actions in real-time.
            </p>
          </div>

          {/* Fake Live Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-[1100px] mx-auto select-none">
            
            {/* LEFT: Ingest Cards */}
            <div className="lg:col-span-4 flex flex-col gap-4.5">
              <span className="text-[0.62rem] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">Inbound Events Ingestion</span>
              {operationsStream.map((item, idx) => {
                const isActive = activeStreamIndex === idx;
                return (
                  <div 
                    key={`in-${item.id}`}
                    className={`p-4.5 rounded-2xl border text-left transition-all duration-500 flex justify-between items-center ${
                      isActive 
                        ? "bg-white border-[#1161ed] shadow-[0_12px_25px_rgba(17,97,237,0.06)] -translate-y-0.5 scale-[1.01]" 
                        : "bg-white/80 border-slate-100 opacity-60"
                    }`}
                  >
                    <div>
                      <span className={`text-[0.55rem] font-black uppercase px-2 py-0.5 rounded-full mb-1.5 inline-block ${isActive ? "bg-[#1161ed]/[0.08] text-[#1161ed]" : "bg-slate-100 text-slate-500"}`}>
                        Event Ingested
                      </span>
                      <h4 className="font-extrabold text-sm text-[#0F172A]">{item.input.label}</h4>
                      <p className="text-[0.68rem] text-slate-400 mt-0.5">{item.input.desc}</p>
                    </div>
                    <span className="font-black text-xs text-[#0F172A]">{item.input.value}</span>
                  </div>
                );
              })}
            </div>

            {/* CENTER: AI Neural Processor Brain */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden min-h-[340px]">
              {/* Pulsing visual connection rings */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-[#1161ed]/5 animate-ping duration-[3.5s] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* SVG Brain Processor icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#1161ed]/[0.08] flex items-center justify-center border border-[#1161ed]/10 mb-6 shadow-inner animate-pulse duration-[2.5s]">
                  <svg className="w-9 h-9 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <line x1="12" y1="2" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                
                <span className="text-[0.62rem] font-extrabold uppercase text-[#1161ed] tracking-[0.18em] mb-1">V2 AI Neural Core</span>
                
                {/* Dynamic Brain State */}
                <div className="min-h-[70px] mt-2.5 flex flex-col items-center">
                  <p className="font-black text-slate-850 text-[0.88rem] leading-snug px-3 max-w-[220px] transition-all duration-300">
                    {operationsStream[activeStreamIndex].brain.text}
                  </p>
                  <span className="text-[0.58rem] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded mt-3 block">
                    {operationsStream[activeStreamIndex].brain.model}
                  </span>
                </div>

                {/* Progress bar wave simulation */}
                <div className="w-[140px] h-[3px] bg-slate-100 rounded-full mt-6 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-full animate-marquee" style={{ width: "60%" }} />
                </div>
              </div>
            </div>

            {/* RIGHT: Actions Outputs */}
            <div className="lg:col-span-4 flex flex-col gap-4.5">
              <span className="text-[0.62rem] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">Automated Operations Output</span>
              {operationsStream.map((item, idx) => {
                const isActive = activeStreamIndex === idx;
                return (
                  <div 
                    key={`out-${item.id}`}
                    className={`p-4.5 rounded-2xl border text-left transition-all duration-500 flex justify-between items-center ${
                      isActive 
                        ? "bg-white border-[#22c55e] shadow-[0_12px_25px_rgba(34,197,94,0.06)] -translate-y-0.5 scale-[1.01]" 
                        : "bg-white/80 border-slate-100 opacity-60"
                    }`}
                  >
                    <div>
                      <span className={`text-[0.55rem] font-black uppercase px-2 py-0.5 rounded-full mb-1.5 inline-block ${isActive ? "bg-green-500/[0.08] text-[#22c55e]" : "bg-slate-100 text-slate-500"}`}>
                        Output Sync
                      </span>
                      <h4 className="font-extrabold text-sm text-[#0F172A]">{item.output.label}</h4>
                      <p className="text-[0.68rem] text-slate-400 mt-0.5">{item.output.desc}</p>
                    </div>
                    <span className={`text-[0.55rem] font-black px-2 py-0.5 rounded-full ${isActive ? "bg-green-500 text-white" : "bg-slate-100 text-slate-400"}`}>
                      {item.output.status}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 3. Scroll-Based Workflow Story */}
        <section id="workflow-story" className="mb-20 md:mb-28">
          <div className="text-center mb-16">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Pipeline Story</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              Workflow Pipeline Builder
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              Watch how our structural integration builds itself step-by-step from raw inquiry to verified business analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-[1100px] mx-auto select-none">
            {/* Left selector steps */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[0.62rem] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">Click to trigger workflow steps</span>
              {workflowSteps.map((s, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer ${
                    activeWorkflowStep === idx 
                      ? "bg-white border-[#635BFF] shadow-sm -translate-x-0.5 font-bold" 
                      : "bg-white/60 border-slate-100 hover:bg-white hover:border-[#635BFF]/30"
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
                    activeWorkflowStep === idx ? "bg-[#635BFF] text-white" : "bg-[#635BFF]/[0.08] text-[#635BFF]"
                  }`}>
                    {s.step}
                  </div>
                  <span className="text-[0.85rem] text-[#0F172A] tracking-tight truncate">{s.label}</span>
                </button>
              ))}
            </div>

            {/* Right card visual displaying the flow */}
            <div className="lg:col-span-7 h-full flex flex-col gap-6">
              <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm min-h-[320px] flex flex-col justify-between relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#635BFF]/5 rounded-bl-full pointer-events-none -z-10" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[0.65rem] font-black uppercase text-[#635BFF] bg-[#635BFF]/[0.08] px-3 py-1 rounded-full tracking-widest shadow-sm">
                      Pipeline State #0{activeWorkflowStep + 1}
                    </span>
                    <span className="text-xs font-black text-slate-400 tracking-tighter">Active Sync</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-4 leading-snug">
                    {workflowSteps[activeWorkflowStep].label}
                  </h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed max-w-[520px]">
                    {workflowSteps[activeWorkflowStep].desc}
                  </p>
                </div>

                {/* Animated graphic builder trail representing pipeline state */}
                <div className="flex gap-2.5 items-center border-t border-slate-100 pt-6 mt-8">
                  {workflowSteps.map((s, idx) => (
                    <div key={idx} className="flex-1 flex items-center gap-1.5">
                      <div 
                        className={`h-[5px] rounded-full transition-all duration-500 flex-1 ${
                          idx <= activeWorkflowStep 
                            ? "bg-gradient-to-r from-[#635BFF] to-[#1161ed]" 
                            : "bg-slate-100"
                        }`} 
                      />
                      {idx < 5 && (
                        <span className={`text-[0.55rem] font-black transition-colors ${idx < activeWorkflowStep ? "text-[#635BFF]" : "text-slate-200"}`}>
                          ↓
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. AI Command Terminal Section */}
        <section id="command-terminal" className="py-16 md:py-24 border-t border-b border-black/[0.04] mb-20 md:mb-28 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#1161ed]/[0.015] rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-[1100px] mx-auto">
            
            {/* Left description */}
            <div className="lg:col-span-5 flex flex-col text-left items-start">
              <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Command Console</p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-[#0F172A] tracking-tight leading-none mb-6">
                Technical AI Command Terminal.
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-[1.65] mb-8">
                Watch raw actions stream instantly through our database gates. We code robust serverless handlers designed to secure role validation keys and sync operations with zero downtime.
              </p>

              <div className="flex flex-wrap gap-2">
                {["REST Bridges", "SSO Audited", "Safe Webhooks", "Zero Latency Logs"].map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full border border-slate-100 bg-white text-[0.68rem] font-extrabold uppercase text-slate-600 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Terminal shell UI */}
            <div className="lg:col-span-7 w-full flex flex-col select-none">
              <div className="w-full rounded-2xl border border-slate-800 bg-[#0F172A] shadow-[0_20px_50px_rgba(9,13,26,0.25)] overflow-hidden">
                
                {/* Header terminal tabs */}
                <div className="bg-[#090D1A] border-b border-slate-800/80 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-sm" />
                  </div>
                  <span className="text-[0.62rem] font-bold text-slate-500 uppercase tracking-widest">
                    v2-logger@sh - active
                  </span>
                  <div className="w-4 h-4" />
                </div>

                {/* Console logs output */}
                <div className="p-6 font-mono text-left text-xs text-slate-350 min-h-[220px] flex flex-col gap-2.5">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className={`leading-relaxed ${idx === terminalLogs.length - 1 ? "text-white font-extrabold" : "opacity-80"}`}>
                      <span className="text-[#1161ed] mr-2">&gt;</span>
                      {log}
                    </div>
                  ))}
                  <div className="flex items-center gap-1">
                    <span className="text-[#1161ed] mr-2">&gt;</span>
                    <span className="w-2 h-4 bg-[#22c55e] animate-ping" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 5. Dynamic Ecosystem Map */}
        <section id="ecosystem" className="mb-20 md:mb-28 select-none">
          <div className="text-center mb-20">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Integration Hub</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              Dynamic Ecosystem Map
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              Hover over float nodes to trace secure, zero-latency webhook connections linking back to the core V2 AI Automation Engine.
            </p>
          </div>

          {/* Interactive Floating Diagram Container */}
          <div className="relative w-full max-w-[750px] aspect-[4/3] mx-auto border border-slate-100 bg-white rounded-[36px] shadow-sm overflow-hidden flex items-center justify-center p-6">
            
            {/* Grid Overlay background lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
            
            {/* Center Node (V2 AI Engine Core) */}
            <div className="relative z-20 w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-[#635BFF] to-[#1161ed] p-1.5 shadow-[0_8px_30px_rgba(99,91,255,0.22)] animate-pulse duration-[3s] flex items-center justify-center">
              <div className="w-full h-full bg-[#0F172A] rounded-full flex flex-col items-center justify-center text-white text-center">
                <span className="text-[0.45rem] font-black uppercase text-[#635BFF] tracking-widest mb-0.5">V2 Core</span>
                <span className="text-[0.92rem] font-black leading-none">AI ENGINE</span>
              </div>
            </div>

            {/* Orbiting Ecosystem Nodes */}
            {ecosystemNodes.map((node) => {
              const isHovered = activeEcoNode === node.id;
              return (
                <div 
                  style={{ top: node.y, left: node.x }}
                  onMouseEnter={() => setActiveEcoNode(node.id)}
                  onMouseLeave={() => setActiveEcoNode(null)}
                  key={node.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer flex flex-col items-center transition-all duration-300 ${
                    isHovered ? "scale-[1.12]" : "hover:scale-[1.05]"
                  }`}
                >
                  {/* Floating Circular Node */}
                  <div className={`w-14 h-14 rounded-2xl bg-white border flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.02)] transition-all duration-300 ${
                    isHovered ? "border-[#635BFF] shadow-[0_8px_25px_rgba(99,91,255,0.12)]" : "border-slate-100"
                  }`}>
                    {node.icon}
                  </div>
                  <span className={`text-[0.58rem] font-black uppercase tracking-wider mt-2 px-2 py-0.5 rounded transition-all duration-300 ${
                    isHovered ? "bg-[#635BFF] text-white" : "bg-slate-50 text-slate-500"
                  }`}>
                    {node.label}
                  </span>

                  {/* Pulsing connection beam to center when hovered */}
                  {isHovered && (
                    <svg className="absolute w-[800px] h-[800px] pointer-events-none -z-10" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                      <line 
                        x1="400" 
                        y1="400" 
                        x2="400" 
                        y2="400" 
                        stroke="#635BFF" 
                        strokeWidth="3.5" 
                        strokeDasharray="6 6" 
                        className="animate-ping" 
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* NEW SECTION: Integrated LLM Engines */}
        <section id="ai-models" className="mb-20 md:mb-28">
          <div className="text-center mb-16">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Foundation Models</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              Integrated LLM Engines
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              We connect your workflows to state-of-the-art neural engines, matching tasks to their ideal model strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto select-none">
            {/* OpenAI */}
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:border-[#10A37F]/30 hover:shadow-md transition-all duration-300 group text-left">
              <div>
                <div className="w-12 h-12 bg-[#10A37F]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <ECO_ICONS.OpenAIModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-3 group-hover:text-[#10A37F] transition-colors">OpenAI GPT-4o</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">Elite Reasoning & Planning</p>
                <p className="text-[#64748B] text-xs leading-relaxed mb-6">
                  Perfect for multi-step agent decisions, complex software writing, structured JSON outputs, and high-intensity logic.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-slate-900 group-hover:bg-[#10A37F] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm">
                Deploy GPT Agent
              </Link>
            </div>

            {/* Google Gemini */}
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:border-[#1a73e8]/30 hover:shadow-md transition-all duration-300 group text-left">
              <div>
                <div className="w-12 h-12 bg-[#1a73e8]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <ECO_ICONS.GeminiModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-3 group-hover:text-[#1a73e8] transition-colors">Google Gemini 1.5</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">Massive Context & Multimodal</p>
                <p className="text-[#64748B] text-xs leading-relaxed mb-6">
                  Perfect for processing hours of video, massive databases, whole PDF manuals, and high-volume image analysis pipelines.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-slate-900 group-hover:bg-[#1a73e8] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm">
                Deploy Gemini Engine
              </Link>
            </div>

            {/* Anthropic Claude */}
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:border-[#D97706]/30 hover:shadow-md transition-all duration-300 group text-left">
              <div>
                <div className="w-12 h-12 bg-[#D97706]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <ECO_ICONS.ClaudeModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-3 group-hover:text-[#D97706] transition-colors">Anthropic Claude 3.5</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">Precise Logic & Writing</p>
                <p className="text-[#64748B] text-xs leading-relaxed mb-6">
                  Perfect for precise document parsing, mathematical code vetting, enterprise writing styles, and safe, guardrailed automations.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-slate-900 group-hover:bg-[#D97706] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm">
                Deploy Claude Pipeline
              </Link>
            </div>
          </div>
        </section>

        {/* 6. "Chaos to Automation" Transformation */}
        <section id="chaos-transformation" className="mb-20 md:mb-28 select-none">
          <div className="text-center mb-16">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Operations Shift</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              Chaos to Automation
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              Use the sliding controller directly below to witness messy operations transform into centralized, systemized, and automated V2 pipelines.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto bg-white border border-slate-100 rounded-[32px] shadow-sm overflow-hidden p-6 md:p-10 text-left">
            
            {/* Side-by-side split layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative">
              
              {/* CHAOS PANEL (LEFT) */}
              <div 
                className="flex flex-col justify-between p-6 rounded-2xl bg-red-500/[0.015] border border-red-500/10 min-h-[300px] transition-opacity duration-300"
                style={{ opacity: 1 - transformationSlider / 100 }}
              >
                <div>
                  <span className="text-[0.62rem] font-black uppercase text-red-550 bg-red-550/[0.08] px-2.5 py-1 rounded-full tracking-wider mb-5 inline-block shadow-sm">
                    ✘ Messy Legacy Operations
                  </span>
                  <h3 className="text-lg font-black text-[#0F172A] mb-4">Disconnected Manual Bottlenecks</h3>
                  
                  <ul className="flex flex-col gap-3 text-xs text-slate-600">
                    <li className="flex gap-2 items-center">
                      <span className="text-red-500 font-extrabold">✕</span>
                      <span>Cluttered offline spreadsheets prone to user overwrite errors</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-red-550 font-extrabold">✕</span>
                      <span>Repetitive administrative copy-paste tasks between platforms</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-red-550 font-extrabold">✕</span>
                      <span>Hours of delayed lead responses due to manual qualification</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-red-550 font-extrabold">✕</span>
                      <span>Disconnected isolated tools requiring custom exports</span>
                    </li>
                  </ul>
                </div>
                <span className="text-[0.58rem] font-bold text-red-500 uppercase tracking-widest mt-6">40+ hours wasted per week</span>
              </div>

              {/* AUTOMATION PANEL (RIGHT) */}
              <div 
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#1161ed]/[0.015] border border-[#1161ed]/10 min-h-[300px] transition-opacity duration-300"
                style={{ opacity: transformationSlider / 100 }}
              >
                <div>
                  <span className="text-[0.62rem] font-black uppercase text-[#1161ed] bg-[#1161ed]/[0.08] px-2.5 py-1 rounded-full tracking-wider mb-5 inline-block shadow-sm">
                    ✓ Clean V2 Pipeline
                  </span>
                  <h3 className="text-lg font-black text-[#0F172A] mb-4">Centralized Systemized Ecosystem</h3>
                  
                  <ul className="flex flex-col gap-3 text-xs text-slate-600">
                    <li className="flex gap-2 items-center">
                      <span className="text-[#1161ed] font-extrabold">✓</span>
                      <span>Direct bidirectional live API webhook connections</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-[#1161ed] font-extrabold">✓</span>
                      <span>Qualify and segment leads on the fly using OpenAI models</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-[#1161ed] font-extrabold">✓</span>
                      <span>Instant automated Slack alarms and customer alerts</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-[#1161ed] font-extrabold">✓</span>
                      <span>One centralized database dashboard showing real-time logs</span>
                    </li>
                  </ul>
                </div>
                <span className="text-[0.58rem] font-bold text-[#1161ed] uppercase tracking-widest mt-6">Zero manual copy-paste action</span>
              </div>

            </div>

            {/* Slider controller */}
            <div className="mt-10 border-t border-slate-100 pt-6 flex flex-col items-center">
              <label htmlFor="slider" className="text-[0.68rem] font-extrabold uppercase text-slate-400 tracking-wider mb-3 block">
                Slide to Automate: {transformationSlider}%
              </label>
              <input 
                id="slider"
                type="range" 
                min="0" 
                max="100" 
                value={transformationSlider}
                onChange={(e) => setTransformationSlider(Number(e.target.value))}
                className="w-full max-w-[400px] h-2.5 bg-slate-100 rounded-full appearance-none cursor-pointer outline-none accent-[#1161ed] hover:shadow-inner"
              />
              <div className="flex justify-between w-full max-w-[400px] mt-1.5 text-[0.58rem] font-black text-slate-400 uppercase tracking-widest">
                <span>Chaos</span>
                <span>Automation</span>
              </div>
            </div>

          </div>
        </section>

        {/* Dynamic CTA bottom section */}
        <section className="p-8 sm:p-12 rounded-[32px] bg-white border border-[#1161ed]/10 shadow-[0_20px_50px_rgba(17,97,237,0.05)] text-center relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1161ed]/5 rounded-bl-full pointer-events-none -z-10" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-4">Ready to Automate Your Operations?</h2>
          <p className="text-[#64748B] text-sm max-w-[550px] mx-auto mb-8 leading-relaxed">
            Our AI integration experts are ready to map out your database tables and write stable, robust webhooks. Let's build your pipeline.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_15px_rgba(17,97,237,0.15)] hover:shadow-[0_6px_22px_rgba(17,97,237,0.25)]"
          >
            Start Your Project
          </Link>
        </section>

      </div>
    </div>
  );
}
