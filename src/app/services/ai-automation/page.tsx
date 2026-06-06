"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";
import Image from "next/image";

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
  OpenAIModel: () => (
    <svg className="w-6 h-6 text-[#10A37F]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M4.5 16.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5h15c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5H4.5z" />
      <circle cx="7" cy="14" r="1.5" fill="currentColor" />
      <circle cx="17" cy="14" r="1.5" fill="currentColor" />
      <path d="M12 3v18" />
    </svg>
  ),
  GeminiModel: () => (
    <svg className="w-6 h-6 text-[#1a73e8]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  ClaudeModel: () => (
    <svg className="w-6 h-6 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 3L4 9v8l8 4 8-4V9l-8-6z" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="4" y1="9" x2="20" y2="17" />
      <line x1="20" y1="9" x2="4" y2="17" />
    </svg>
  )
};
const tickerTexts = [
  "Automating workflows...",
  "Connecting platforms...",
  "Processing operations...",
  "Reducing manual tasks..."
];

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

const workflowSteps = [
  { step: 1, label: "Customer inquiry submitted", desc: "An inbound email, lead form, or chat query triggers a webhook listener in sub-second time." },
  { step: 2, label: "AI analyzes request intent", desc: "V2 Labs neural filters run semantic analysis via OpenAI/Gemini to extract user goals and budget parameters." },
  { step: 3, label: "Lead routed automatically", desc: "The analyzed record is instantly routed to the optimal sales rep based on territory rules." },
  { step: 4, label: "CRM updated instantly", desc: "Customer records in HubSpot or Salesforce are populated with direct intent tags and transcript summaries." },
  { step: 5, label: "Team notified in real-time", desc: "A beautifully formatted rich Slack or MS Teams alert tags team members with action items." },
  { step: 6, label: "Analytics dashboard updated", desc: "Telemetry charts and pipeline numbers update dynamically with zero latency." }
];

export default function AiAutomationPage() {
  // --- Hero State ---
  const [tickerIndex, setTickerIndex] = useState(0);

  // --- Live Operations Dashboard State ---
  const [activeStreamIndex, setActiveStreamIndex] = useState(0);

  // --- Stepper State ---
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // --- Command Terminal State ---
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Initializing AI automation engine...",
    "Connecting secure internal CRM bridges...",
    "Syncing company customer databases...",
    "V2 active workflow pipeline status: Healthy",
    "182 operations automated today."
  ]);
  const logGeneratorInterval = useRef<NodeJS.Timeout | null>(null);

  // --- Ecosystem Map State ---
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

  // --- Chaos Slider State ---
  const [transformationSlider, setTransformationSlider] = useState(0);

  // Intervals for Hero and Dashboard Simulation
  useEffect(() => {
    // 1. Ticker Loop
    const tickerTimer = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % tickerTexts.length);
    }, 2800);

    // 2. Live Operations loop
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
    <div className="bg-slate-50/60 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Animated Floating Luminous Mesh Background Orbs (Premium Light Theme!) */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#1161ed]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10 animate-float" />
      <div className="absolute top-[32%] right-[5%] w-[550px] h-[550px] bg-[#3b82f6]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10 animate-pulse duration-[12s]" />
      <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-[#8b5cf6]/[0.02] rounded-full blur-[130px] pointer-events-none select-none -z-10 animate-float-reverse" />

      {/* Luminous Dotted Grid Background Pattern */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#1161ed_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.15] -z-10 pointer-events-none select-none" />

      {/* 1. Refined Light Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden text-center px-6 pt-12 mb-20 select-none">
        
        {/* Centerpiece: Animated Light Neural Core System */}
        <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center mb-10 select-none">
          {/* External Spinning Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#1161ed]/20 animate-spin duration-[25s]" />
          
          {/* Middle Counter-rotating Ring */}
          <div className="absolute inset-[25px] rounded-full border border-[#8b5cf6]/20 border-t-2 border-b-2 border-t-[#8b5cf6]/60 border-b-[#8b5cf6]/60 animate-spin duration-[15s] [animation-direction:reverse]" />
          
          {/* Glowing Neural Core */}
          <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#1161ed] p-[1.5px] shadow-[0_8px_35px_rgba(17,97,237,0.15)] flex items-center justify-center animate-pulse duration-[3.5s]">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-[#1161ed] animate-spin duration-[40s]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20M12 12m-5 0a5 5 0 1010 0 5 5 0 10-10 0" />
                <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(45 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-45 12 12)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="max-w-[850px] relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#1161ed] tracking-[0.18em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
            <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
            Autonomous AI Focus
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.05] text-slate-900 tracking-tight mb-6 max-w-[850px] mx-auto">
            AI Systems That Run Operations <span className="bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-sm">Automatically.</span>
          </h1>
          
          <p className="text-[#64748B] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[760px] mx-auto font-medium mb-8">
            We blueprint custom intelligent workflows, internal database integrations, RAG pipelines, and automated logic hooks to scale business operations with zero manual bottlenecks.
          </p>

          {/* Typewriter active ticker */}
          <div className="h-[36px] flex items-center justify-center mb-10">
            <span className="text-slate-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase animate-pulse">
              {tickerTexts[tickerIndex]}
            </span>
          </div>

          {/* Hero Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-[0_6px_25px_rgba(17,97,237,0.15)] hover:shadow-[0_10px_30px_rgba(17,97,237,0.25)] text-xs uppercase tracking-widest text-center"
            >
              Start Automated Pipeline
            </Link>
            <a 
              href="#operations-center" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-350 hover:bg-white text-slate-700 font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm text-xs uppercase tracking-widest text-center"
            >
              View Operations Loop
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 relative">
        
        {/* 2. Live Operations Center Dashboard (Polished as light glassmorphism!) */}
        <section id="operations-center" className="py-16 border-b border-slate-200/50 mb-28 scroll-mt-20">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Real-Time Ingestion Loop
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Live Operations Center
            </h2>
            <p className="text-slate-500 text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              Ditch static diagrams. Watch our automated pipeline actively ingest data, analyze tasks via custom brains, and commit actions in real-time.
            </p>
          </div>

          {/* Fake Live Dashboard Grid */}
          <div className="w-full bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[40px] p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden min-h-[460px] flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1161ed]/[0.03] rounded-full blur-[110px] pointer-events-none" />
            
            {/* LEFT: Ingest Cards */}
            <div className="w-full lg:w-[320px] shrink-0 z-10 flex flex-col gap-4 font-Outfit">
              <span className="text-[0.62rem] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">Inbound Events Ingestion</span>
              {operationsStream.map((item, idx) => {
                const isActive = activeStreamIndex === idx;
                return (
                  <div 
                    key={`in-${item.id}`}
                    className={`p-4.5 rounded-2xl border text-left transition-all duration-500 flex justify-between items-center ${
                      isActive 
                        ? "bg-white border-[#1161ed]/40 shadow-[0_12px_25px_rgba(17,97,237,0.04)] -translate-y-0.5 scale-[1.01]" 
                        : "bg-white/40 border-slate-100/60 opacity-60"
                    }`}
                  >
                    <div>
                      <span className={`text-[0.55rem] font-black uppercase px-2 py-0.5 rounded-full mb-1.5 inline-block ${isActive ? "bg-[#1161ed]/10 text-[#1161ed] font-extrabold" : "bg-slate-100 text-slate-500"}`}>
                        Event Ingested
                      </span>
                      <h4 className="font-extrabold text-sm text-[#0F172A]">{item.input.label}</h4>
                      <p className="text-[0.68rem] text-slate-400 mt-0.5 font-medium">{item.input.desc}</p>
                    </div>
                    <span className="font-black text-xs text-[#0F172A]">{item.input.value}</span>
                  </div>
                );
              })}
            </div>

            {/* CENTER: AI Neural Processor Brain */}
            <div className="flex-1 w-full flex flex-col items-center justify-center p-8 bg-slate-50/50 border border-slate-200/60 rounded-[32px] shadow-inner relative overflow-hidden min-h-[340px] z-10">
              <div className="absolute w-[200px] h-[200px] rounded-full border border-[#1161ed]/5 animate-ping duration-[3.5s] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* SVG Brain Processor icon */}
                <div className="w-15 h-15 rounded-2xl bg-white border border-[#1161ed]/10 flex items-center justify-center mb-6 shadow-sm animate-pulse duration-[2.5s]">
                  <svg className="w-8 h-8 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
                  <p className="font-black text-slate-800 text-[0.88rem] leading-snug px-3 max-w-[220px] transition-all duration-300">
                    {operationsStream[activeStreamIndex].brain.text}
                  </p>
                  <span className="text-[0.58rem] font-bold text-[#1161ed] bg-[#1161ed]/5 border border-[#1161ed]/10 px-2.5 py-0.5 rounded mt-3.5 block uppercase tracking-wider font-mono">
                    {operationsStream[activeStreamIndex].brain.model}
                  </span>
                </div>

                {/* Progress bar wave simulation */}
                <div className="w-[140px] h-[3px] bg-slate-200 rounded-full mt-6 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-full animate-marquee" style={{ width: "60%" }} />
                </div>
              </div>
            </div>

            {/* RIGHT: Actions Outputs */}
            <div className="w-full lg:w-[320px] shrink-0 z-10 flex flex-col gap-4 font-Outfit">
              <span className="text-[0.62rem] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">Automated Operations Output</span>
              {operationsStream.map((item, idx) => {
                const isActive = activeStreamIndex === idx;
                return (
                  <div 
                    key={`out-${item.id}`}
                    className={`p-4.5 rounded-2xl border text-left transition-all duration-500 flex justify-between items-center ${
                      isActive 
                        ? "bg-white border-[#22c55e]/45 shadow-[0_12px_25px_rgba(34,197,94,0.04)] -translate-y-0.5 scale-[1.01]" 
                        : "bg-white/40 border-slate-100/60 opacity-60"
                    }`}
                  >
                    <div>
                      <span className={`text-[0.55rem] font-black uppercase px-2 py-0.5 rounded-full mb-1.5 inline-block ${isActive ? "bg-green-500/10 text-[#22c55e] font-extrabold" : "bg-slate-100 text-slate-500"}`}>
                        Output Sync
                      </span>
                      <h4 className="font-extrabold text-sm text-[#0F172A]">{item.output.label}</h4>
                      <p className="text-[0.68rem] text-slate-400 mt-0.5 font-medium">{item.output.desc}</p>
                    </div>
                    <span className={`text-[0.55rem] font-black px-2 py-0.5 rounded-full ${isActive ? "bg-[#22c55e] text-white" : "bg-slate-100 text-slate-400"}`}>
                      {item.output.status}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 3. Workflow Story (Stepper Section) */}
        <section id="workflow-story" className="mb-28 border-t border-slate-200/50 pt-16 relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Pipeline Story
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Workflow Pipeline Builder
            </h2>
            <p className="text-slate-500 text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              Watch how our structural integration builds itself step-by-step from raw inquiry to verified business analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-[1100px] mx-auto select-none relative z-10">
            {/* Left selector steps */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[0.62rem] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">Click to trigger workflow steps</span>
              {workflowSteps.map((s, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer ${
                    activeWorkflowStep === idx 
                      ? "bg-white border-[#1161ed]/30 shadow-[0_12px_25px_rgba(17,97,237,0.03)] -translate-x-0.5 font-bold" 
                      : "bg-white/40 border-slate-100/60 hover:bg-white hover:border-slate-250"
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
                    activeWorkflowStep === idx ? "bg-[#1161ed] text-white" : "bg-[#1161ed]/10 text-[#1161ed]"
                  }`}>
                    {s.step}
                  </div>
                  <span className="text-[0.85rem] text-[#0F172A] tracking-tight truncate font-extrabold">{s.label}</span>
                </button>
              ))}
            </div>

            {/* Right display card displaying active flow details */}
            <div className="lg:col-span-7 z-10">
              <div className="bg-white rounded-[36px] border border-slate-200/40 p-8 shadow-[0_8px_30px_rgba(17,97,237,0.01)] min-h-[340px] flex flex-col justify-between relative group hover:shadow-[0_25px_50px_rgba(17,97,237,0.04)] hover:border-[#1161ed]/20 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] rounded-t-[36px]" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[0.62rem] font-black uppercase text-[#1161ed] bg-[#1161ed]/10 px-3.5 py-1 rounded-full tracking-widest shadow-sm">
                      Pipeline State #0{activeWorkflowStep + 1}
                    </span>
                    <span className="text-[0.58rem] font-bold text-slate-400 tracking-wider">ACTIVE SYNC</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                    {workflowSteps[activeWorkflowStep].label}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 font-semibold">
                    {workflowSteps[activeWorkflowStep].desc}
                  </p>
                </div>

                {/* Animated graphic builder trail representing pipeline progress */}
                <div className="flex gap-2.5 items-center border-t border-slate-100 pt-6 mt-8">
                  {workflowSteps.map((s, idx) => (
                    <div key={idx} className="flex-1 flex items-center gap-1.5">
                      <div 
                        className={`h-[5px] rounded-full transition-all duration-500 flex-1 ${
                          idx <= activeWorkflowStep 
                            ? "bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6]" 
                            : "bg-slate-100"
                        }`} 
                      />
                      {idx < 5 && (
                        <span className={`text-[0.55rem] font-black transition-colors ${idx < activeWorkflowStep ? "text-[#1161ed]" : "text-slate-200"}`}>
                          ➔
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. AI Command Terminal Section (Premium High-Contrast Shell) */}
        <section id="command-terminal" className="py-20 border-t border-slate-200/50 mb-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left description */}
            <div className="lg:col-span-5 flex flex-col text-left items-start">
              <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                Command Console
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-black text-[#0F172A] tracking-tight leading-none mb-6">
                Technical AI Command Terminal.
              </h2>
              <p className="text-slate-500 text-sm leading-[1.65] font-semibold mb-8">
                Watch raw actions stream instantly through our database gates. We code robust serverless handlers designed to secure role validation keys and sync operations with zero downtime.
              </p>

              <div className="flex flex-wrap gap-2">
                {["REST Bridges", "SSO Audited", "Safe Webhooks", "Zero Latency Logs"].map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-xl border border-slate-200/60 bg-white/70 backdrop-blur-sm text-[0.68rem] font-extrabold uppercase text-slate-600 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Terminal shell UI */}
            <div className="lg:col-span-7 w-full flex flex-col select-none">
              <div className="w-full rounded-3xl border border-slate-800 bg-[#070a13] shadow-[0_20px_50px_rgba(9,13,26,0.15)] overflow-hidden">
                
                {/* Header terminal tabs */}
                <div className="bg-[#03050a] border-b border-slate-800/80 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-sm" />
                  </div>
                  <span className="text-[0.62rem] font-bold text-slate-500 uppercase tracking-widest font-mono">
                    v2-logger@sh - active
                  </span>
                  <div className="w-4 h-4" />
                </div>

                {/* Console logs output */}
                <div className="p-6 font-mono text-left text-[0.72rem] text-slate-400 min-h-[220px] flex flex-col gap-2.5">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className={`leading-relaxed ${idx === terminalLogs.length - 1 ? "text-white font-extrabold" : "opacity-75"}`}>
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
        <section id="ecosystem" className="py-16 border-t border-slate-200/50 mb-28 select-none relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Integration Hub
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Dynamic Ecosystem Map
            </h2>
            <p className="text-slate-500 text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              Hover over float nodes to trace secure, zero-latency webhook connections linking back to the core V2 AI Automation Engine.
            </p>
          </div>

          {/* Interactive Floating Diagram Container */}
          <div className="relative w-full max-w-[750px] aspect-[4/3] mx-auto border border-slate-200/80 bg-white/70 backdrop-blur-xl rounded-[36px] shadow-[0_15px_40px_rgba(0,0,0,0.015)] overflow-hidden flex items-center justify-center p-6 z-10">
            
            {/* Grid Overlay background lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
            
            {/* Center Node (V2 AI Engine Core) */}
            <div className="relative z-20 w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#1161ed] p-[1.5px] shadow-[0_8px_30px_rgba(17,97,237,0.12)] animate-pulse duration-[3s] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center text-slate-800 text-center shadow-inner">
                <span className="text-[0.45rem] font-black uppercase text-[#1161ed] tracking-widest mb-0.5">V2 Core</span>
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
                    isHovered ? "border-[#1161ed] shadow-[0_8px_25px_rgba(17,97,237,0.08)]" : "border-slate-100"
                  }`}>
                    {node.icon}
                  </div>
                  <span className={`text-[0.58rem] font-black uppercase tracking-wider mt-2 px-2 py-0.5 rounded transition-all duration-300 ${
                    isHovered ? "bg-[#1161ed] text-white" : "bg-slate-50 text-slate-500"
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
                        stroke="#1161ed" 
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

        {/* 6. Integrated LLM Engines */}
        <section id="ai-models" className="mb-28 border-t border-slate-200/50 pt-16 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Foundation Models
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Integrated LLM Engines
            </h2>
            <p className="text-slate-500 text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              We connect your workflows to state-of-the-art neural engines, matching tasks to their ideal model strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto select-none">
            {/* OpenAI */}
            <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/40 shadow-[0_8px_30px_rgba(17,97,237,0.01)] flex flex-col justify-between hover:border-[#10A37F]/30 hover:shadow-[0_25px_50px_rgba(17,97,237,0.04)] hover:bg-white transition-all duration-500 group text-left min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-[#10A37F]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <ECO_ICONS.OpenAIModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-1 group-hover:text-[#10A37F] transition-colors font-Outfit">OpenAI GPT-4o</h3>
                <p className="text-[0.62rem] text-slate-400 font-extrabold uppercase tracking-wider mb-4">Elite Reasoning & Planning</p>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 font-semibold font-Outfit">
                  Perfect for multi-step agent decisions, complex software writing, structured JSON outputs, and high-intensity logic pipelines.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-slate-900 group-hover:bg-[#10A37F] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm cursor-pointer uppercase tracking-widest font-Outfit">
                Deploy GPT Agent
              </Link>
            </div>

            {/* Google Gemini */}
            <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/40 shadow-[0_8px_30px_rgba(17,97,237,0.01)] flex flex-col justify-between hover:border-[#1a73e8]/30 hover:shadow-[0_25px_50px_rgba(17,97,237,0.04)] hover:bg-white transition-all duration-500 group text-left min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-[#1a73e8]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <ECO_ICONS.GeminiModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-1 group-hover:text-[#1a73e8] transition-colors font-Outfit">Google Gemini 1.5</h3>
                <p className="text-[0.62rem] text-slate-400 font-extrabold uppercase tracking-wider mb-4">Massive Context & Multimodal</p>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 font-semibold font-Outfit">
                  Perfect for processing hours of video, massive databases, whole PDF manuals, and high-volume image analysis pipelines.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-slate-900 group-hover:bg-[#1a73e8] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm cursor-pointer uppercase tracking-widest font-Outfit">
                Deploy Gemini Engine
              </Link>
            </div>

            {/* Anthropic Claude */}
            <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/40 shadow-[0_8px_30px_rgba(17,97,237,0.01)] flex flex-col justify-between hover:border-[#D97706]/30 hover:shadow-[0_25px_50px_rgba(17,97,237,0.04)] hover:bg-white transition-all duration-500 group text-left min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-[#D97706]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <ECO_ICONS.ClaudeModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-1 group-hover:text-[#D97706] transition-colors font-Outfit">Anthropic Claude 3.5</h3>
                <p className="text-[0.62rem] text-slate-400 font-extrabold uppercase tracking-wider mb-4">Precise Logic & Writing</p>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 font-semibold font-Outfit">
                  Perfect for precise document parsing, mathematical code vetting, enterprise writing styles, and safe, guardrailed automations.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-slate-900 group-hover:bg-[#D97706] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm cursor-pointer uppercase tracking-widest font-Outfit">
                Deploy Claude Pipeline
              </Link>
            </div>
          </div>
        </section>

        {/* 7. "Chaos to Automation" Transformation */}
        <section id="chaos-transformation" className="py-20 border-t border-slate-200/50 mb-20 select-none relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Operations Shift
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Chaos to Automation
            </h2>
            <p className="text-slate-500 text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              Use the sliding controller directly below to witness messy operations transform into centralized, systemized, and automated V2 pipelines.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.015)] overflow-hidden p-6 md:p-10 text-left">
            
            {/* Side-by-side split layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative">
              
              {/* CHAOS PANEL (LEFT) */}
              <div 
                className="flex flex-col justify-between p-6 rounded-2xl bg-red-500/[0.015] border border-red-500/10 min-h-[300px] transition-opacity duration-300"
                style={{ opacity: 1 - transformationSlider / 100 }}
              >
                <div>
                  <span className="text-[0.62rem] font-black uppercase text-red-500 bg-red-500/10 px-2.5 py-1 rounded-full tracking-wider mb-5 inline-block shadow-sm">
                    Messy Legacy Operations
                  </span>
                  <h3 className="text-lg font-black text-[#0F172A] mb-4">Disconnected Manual Bottlenecks</h3>
                  
                  <ul className="flex flex-col gap-3 text-xs text-slate-650">
                    <li className="flex gap-2 items-center">
                      <span className="text-red-500 font-extrabold">✕</span>
                      <span className="font-semibold">Cluttered offline spreadsheets prone to user overwrite errors</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-red-500 font-extrabold">✕</span>
                      <span className="font-semibold">Repetitive administrative copy-paste tasks between platforms</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-red-500 font-extrabold">✕</span>
                      <span className="font-semibold">Hours of delayed lead responses due to manual qualification</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-red-500 font-extrabold">✕</span>
                      <span className="font-semibold">Disconnected isolated tools requiring custom manual exports</span>
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
                  <span className="text-[0.62rem] font-black uppercase text-[#1161ed] bg-[#1161ed]/10 px-2.5 py-1 rounded-full tracking-wider mb-5 inline-block shadow-sm">
                    ✓ Clean V2 Pipeline
                  </span>
                  <h3 className="text-lg font-black text-[#0F172A] mb-4">Centralized Systemized Ecosystem</h3>
                  
                  <ul className="flex flex-col gap-3 text-xs text-slate-600">
                    <li className="flex gap-2 items-center">
                      <span className="text-[#1161ed] font-extrabold">✓</span>
                      <span className="font-semibold">Direct bidirectional live API webhook connections</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-[#1161ed] font-extrabold">✓</span>
                      <span className="font-semibold">Qualify and segment leads on the fly using OpenAI models</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-[#1161ed] font-extrabold">✓</span>
                      <span className="font-semibold">Instant automated Slack alarms and customer alerts</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-[#1161ed] font-extrabold">✓</span>
                      <span className="font-semibold">One centralized database dashboard showing real-time logs</span>
                    </li>
                  </ul>
                </div>
                <span className="text-[0.58rem] font-bold text-[#1161ed] uppercase tracking-widest mt-6 font-Outfit">Zero manual copy-paste action</span>
              </div>

            </div>

            {/* Slider controller */}
            <div className="mt-10 border-t border-slate-150 pt-6 flex flex-col items-center">
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
                className="w-full max-w-md h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1161ed]"
              />
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DESIGN TOOLING STACK & SHOWCASE SECTION (AI & AUTOMATION PIPELINE) */}
        {/* ========================================================================= */}
        <section className="py-24 border-t border-slate-200/50 relative z-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#8b5cf6]/[0.08] text-[#8b5cf6] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 border border-[#8b5cf6]/15">
                CREATIVE TOOLSTACK
              </div>
              <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
                Our Automation Stack
              </h2>
              <p className="text-slate-500 text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
                We design and engineer enterprise automation scripts using industry-defining frameworks. Custom REST hooks, secure RAG indexing, and seamless operations.
              </p>
            </div>

            {/* Two-Column Tool Stack Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 flex justify-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-[#1161ed]/10 to-[#8b5cf6]/10 rounded-full blur-[80px] -z-10 animate-float" />
                
                <div className="p-4 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.04)] hover:shadow-[0_35px_80px_rgba(17,97,237,0.06)] hover:scale-[1.01] transition-all duration-500 relative overflow-hidden group aspect-square max-w-[460px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  <Image
                    src="/ai_automation_showcase.png"
                    alt="AI Automation & Pipeline Illustration Artwork"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    loading="lazy"
                    className="object-cover rounded-[28px] shadow-sm transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute bottom-6 right-6 bg-slate-900/90 text-white font-mono text-[0.62rem] tracking-wider px-3.5 py-2 rounded-xl backdrop-blur-sm shadow-md border border-white/10 z-20">
                    ◇ ENGINE: ACTIVE
                  </div>
                </div>
              </div>

              {/* Right Column: Creative floating presentation of AI Tools */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                {/* OpenAI / Anthropic */}
                <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl hover:border-[#10A37F]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(16,163,127,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7 text-[#10A37F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2v20M2 12h20M12 12m-5 0a5 5 0 1010 0 5 5 0 10-10 0" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">OpenAI & LLMs</h4>
                      <span className="text-[0.58rem] font-bold bg-[#10A37F]/10 text-[#10A37F] px-2 py-0.5 rounded-md uppercase tracking-wider">Cognitive Brain</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Integrating advanced models (GPT-4o, Claude 3.5, Gemini 1.5) for intent classification, visual analysis, and semantic data extraction.
                    </p>
                  </div>
                </div>

                {/* n8n / Make */}
                <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl hover:border-orange-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(255,109,90,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <circle cx="6" cy="12" r="3" fill="#FF6D5A" />
                      <circle cx="18" cy="6" r="3" fill="#1161ed" />
                      <circle cx="18" cy="18" r="3" fill="#8b5cf6" />
                      <line x1="9" y1="11" x2="15" y2="7" stroke="#FF6D5A" strokeWidth="2" />
                      <line x1="9" y1="13" x2="15" y2="17" stroke="#FF6D5A" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">n8n & Make</h4>
                      <span className="text-[0.58rem] font-bold bg-orange-500/10 text-orange-600 px-2 py-0.5 rounded-md uppercase tracking-wider">Workflow Orchestration</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Developing secure internal webhook listeners, visual node logic, loops, conditional routers, and CRM sync gateways.
                    </p>
                  </div>
                </div>

                {/* LangChain / Python */}
                <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl hover:border-blue-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(48,105,152,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#306998" />
                      <path d="M12 4v16M4 12h16" stroke="#FFD43B" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="3" fill="#fff" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">LangChain & Python</h4>
                      <span className="text-[0.58rem] font-bold bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-md uppercase tracking-wider">Cognitive Scripts</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Coding autonomous database agents, document semantic RAG retrieval arrays, serverless cloud runners, and secure Python cron scripts.
                    </p>
                  </div>
                </div>

                {/* SQL & Redis */}
                <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl hover:border-purple-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(139,92,246,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#336791" />
                      <path d="M7 6h10M7 12h10M7 18h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">PostgreSQL & Redis</h4>
                      <span className="text-[0.58rem] font-bold bg-purple-500/10 text-purple-650 px-2 py-0.5 rounded-md uppercase tracking-wider">Storage & Caching</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Storing qualified event logs in ACID-compliant SQL nodes, caching system logic in rapid Redis pipelines, and syncing transactional ledgers.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Premium Light CTA Section with glowing grid borders (NO MORE NAVY DARK BLUE BOX!) */}
        <section className="relative rounded-[40px] bg-gradient-to-tr from-[#1161ed]/[0.06] via-[#8b5cf6]/[0.03] to-white p-10 sm:p-20 text-center text-slate-800 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.01)] z-10 mt-16 max-w-[1100px] mx-auto border border-slate-200/60 animate-fade-in">
          {/* Luminous soft mesh bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1161ed] opacity-5 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6] opacity-5 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#1161ed_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 max-w-[650px] mx-auto">
            <h2 className="text-3xl sm:text-[2.8rem] font-black tracking-tight leading-tight mb-5 text-slate-900">
              {"Let's Automate Your Business Systems"}
            </h2>
            <p className="text-slate-500 max-w-[540px] mx-auto text-[0.92rem] leading-relaxed mb-10 font-semibold">
              Our AI workflow architects are ready to blueprint custom LLM integrations, operational event triggers, and secure database bridges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-gradient-to-r from-[#1161ed] via-[#3b82f6] to-[#8b5cf6] hover:from-[#0c4ec3] hover:to-[#7c3aed] shadow-[0_6px_25px_rgba(17,97,237,0.15)] hover:shadow-[0_10px_35px_rgba(17,97,237,0.3)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-widest"
            >
              Initiate Pipeline Estimate
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
          currentSlug="ai-automation"
          heading="Move AI visitors into the broader solution cluster"
          description="AI pages should feed traffic into web development, SaaS delivery, ERP CRM implementation, branding, and marketing pages so the intent path keeps expanding instead of ending."
        />
      </div>
    </div>
  );
}
