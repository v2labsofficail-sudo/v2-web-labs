"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";
import AlternatingText from "@/components/AlternatingText";
import Image from "next/image";

const ECO_ICONS = {
  Whatsapp: () => (
    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 720 720">
      <path d="M360,0C161.18,0,0,161.18,0,360c0,65.41,17.45,126.75,47.94,179.61L0,720l187.02-44.21c51.34,28.18,110.28,44.21,172.98,44.21,198.82,0,360-161.18,360-360S558.82,0,360,0ZM360,655.52c-60.17,0-116.13-17.98-162.82-48.87l-110.49,28.14,30.99-105.61c-33.53-47.93-53.2-106.26-53.2-169.19,0-163.21,132.31-295.52,295.52-295.52s295.52,132.31,295.52,295.52-132.31,295.52-295.52,295.52Z" />
      <path d="M444.35,407.52l87.1,41.06c4,1.88,6.56,5.94,6.2,10.34-.94,11.46-5.54,34.43-26.13,55.02-58.12,58.12-162.49-7.64-166.74-10.18-25.67-13.79-50.06-32.24-73.19-55.36-23.12-23.12-41.58-47.52-55.37-73.19-2.55-4.24-68.31-108.61-10.18-166.74,20.59-20.59,43.56-25.19,55.02-26.13,4.41-.36,8.46,2.2,10.34,6.2l41.07,87.1c1.94,4.12,1.09,9.02-2.13,12.24l-30.61,30.61c-6.62,6.62-8.56,16.93-4,25.11,11.17,20.03,26.19,39.32,43.59,57.07,17.75,17.4,37.04,32.43,57.07,43.59,8.18,4.56,18.48,2.62,25.11-4l30.61-30.61c3.22-3.22,8.12-4.08,12.24-2.13Z" />
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
    <svg className="w-6 h-6 text-[#10A37F]" fill="currentColor" viewBox="0 0 720 720">
      <path d="M304.246 294.611V249.028C304.246 245.189 305.687 242.309 309.044 240.392L400.692 187.612C413.167 180.415 428.042 177.058 443.394 177.058C500.971 177.058 537.44 221.682 537.44 269.182C537.44 272.54 537.44 276.379 536.959 280.218L441.954 224.558C436.197 221.201 430.437 221.201 424.68 224.558L304.246 294.611ZM518.245 472.145V363.224C518.245 356.505 515.364 351.707 509.608 348.349L389.174 278.296L428.519 255.743C431.877 253.826 434.757 253.826 438.115 255.743L529.762 308.523C556.154 323.879 573.905 356.505 573.905 388.171C573.905 424.636 552.315 458.225 518.245 472.141V472.145ZM275.937 376.182L236.592 353.152C233.235 351.235 231.794 348.354 231.794 344.515V238.956C231.794 187.617 271.139 148.749 324.4 148.749C344.555 148.749 363.264 155.468 379.102 167.463L284.578 222.164C278.822 225.521 275.942 230.319 275.942 237.039V376.186L275.937 376.182ZM360.626 425.122L304.246 393.455V326.283L360.626 294.616L417.002 326.283V393.455L360.626 425.122ZM396.852 570.989C376.698 570.989 357.989 564.27 342.151 552.276L436.674 497.574C442.431 494.217 445.311 489.419 445.311 482.699V343.552L485.138 366.582C488.495 368.499 489.936 371.379 489.936 375.219V480.778C489.936 532.117 450.109 570.985 396.852 570.985V570.989ZM283.134 463.99L191.486 411.211C165.094 395.854 147.343 363.229 147.343 331.562C147.343 294.616 169.415 261.509 203.48 247.593V356.991C203.48 363.71 206.361 368.508 212.117 371.866L332.074 441.437L292.729 463.99C289.372 465.907 286.491 465.907 283.134 463.99ZM277.859 542.68C223.639 542.68 183.813 501.895 183.813 451.514C183.813 447.675 184.294 443.836 184.771 439.997L279.295 494.698C285.051 498.056 290.812 498.056 296.568 494.698L417.002 425.127V470.71C417.002 474.549 415.562 477.429 412.204 479.346L320.557 532.126C308.081 539.323 293.206 542.68 277.854 542.68H277.859ZM396.852 599.776C454.911 599.776 503.37 558.513 514.41 503.812C568.149 489.896 602.696 439.515 602.696 388.176C602.696 354.587 588.303 321.962 562.392 298.45C564.791 288.373 566.231 278.296 566.231 268.224C566.231 199.611 510.571 148.267 446.274 148.267C433.322 148.267 420.846 150.184 408.37 154.505C386.775 133.392 357.026 119.958 324.4 119.958C266.342 119.958 217.883 161.22 206.843 215.921C153.104 229.837 118.557 280.218 118.557 331.557C118.557 365.146 132.95 397.771 158.861 421.283C156.462 431.36 155.022 441.437 155.022 451.51C155.022 520.123 210.682 571.466 274.978 571.466C287.931 571.466 300.407 569.549 312.883 565.228C334.473 586.341 364.222 599.776 396.852 599.776Z" />
    </svg>
  ),
  OpenAIModel: () => (
    <svg className="w-6 h-6 text-[#10A37F]" fill="currentColor" viewBox="0 0 720 720">
      <path d="M304.246 294.611V249.028C304.246 245.189 305.687 242.309 309.044 240.392L400.692 187.612C413.167 180.415 428.042 177.058 443.394 177.058C500.971 177.058 537.44 221.682 537.44 269.182C537.44 272.54 537.44 276.379 536.959 280.218L441.954 224.558C436.197 221.201 430.437 221.201 424.68 224.558L304.246 294.611ZM518.245 472.145V363.224C518.245 356.505 515.364 351.707 509.608 348.349L389.174 278.296L428.519 255.743C431.877 253.826 434.757 253.826 438.115 255.743L529.762 308.523C556.154 323.879 573.905 356.505 573.905 388.171C573.905 424.636 552.315 458.225 518.245 472.141V472.145ZM275.937 376.182L236.592 353.152C233.235 351.235 231.794 348.354 231.794 344.515V238.956C231.794 187.617 271.139 148.749 324.4 148.749C344.555 148.749 363.264 155.468 379.102 167.463L284.578 222.164C278.822 225.521 275.942 230.319 275.942 237.039V376.186L275.937 376.182ZM360.626 425.122L304.246 393.455V326.283L360.626 294.616L417.002 326.283V393.455L360.626 425.122ZM396.852 570.989C376.698 570.989 357.989 564.27 342.151 552.276L436.674 497.574C442.431 494.217 445.311 489.419 445.311 482.699V343.552L485.138 366.582C488.495 368.499 489.936 371.379 489.936 375.219V480.778C489.936 532.117 450.109 570.985 396.852 570.985V570.989ZM283.134 463.99L191.486 411.211C165.094 395.854 147.343 363.229 147.343 331.562C147.343 294.616 169.415 261.509 203.48 247.593V356.991C203.48 363.71 206.361 368.508 212.117 371.866L332.074 441.437L292.729 463.99C289.372 465.907 286.491 465.907 283.134 463.99ZM277.859 542.68C223.639 542.68 183.813 501.895 183.813 451.514C183.813 447.675 184.294 443.836 184.771 439.997L279.295 494.698C285.051 498.056 290.812 498.056 296.568 494.698L417.002 425.127V470.71C417.002 474.549 415.562 477.429 412.204 479.346L320.557 532.126C308.081 539.323 293.206 542.68 277.854 542.68H277.859ZM396.852 599.776C454.911 599.776 503.37 558.513 514.41 503.812C568.149 489.896 602.696 439.515 602.696 388.176C602.696 354.587 588.303 321.962 562.392 298.45C564.791 288.373 566.231 278.296 566.231 268.224C566.231 199.611 510.571 148.267 446.274 148.267C433.322 148.267 420.846 150.184 408.37 154.505C386.775 133.392 357.026 119.958 324.4 119.958C266.342 119.958 217.883 161.22 206.843 215.921C153.104 229.837 118.557 280.218 118.557 331.557C118.557 365.146 132.95 397.771 158.861 421.283C156.462 431.36 155.022 441.437 155.022 451.51C155.022 520.123 210.682 571.466 274.978 571.466C287.931 571.466 300.407 569.549 312.883 565.228C334.473 586.341 364.222 599.776 396.852 599.776Z" />
    </svg>
  ),
  GeminiModel: () => (
    <svg className="w-6 h-6 text-[#1a73e8]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  ClaudeModel: () => (
    <svg className="w-6 h-6 text-[#D97706]" fill="currentColor" viewBox="0 0 24 24">
      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
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

    return () => {
      clearInterval(tickerTimer);
      clearInterval(streamTimer);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Animated Floating Luminous Mesh Background Orbs (Premium Light Theme!) */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#111111]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10 animate-float" />
      <div className="absolute top-[32%] right-[5%] w-[550px] h-[550px] bg-[#2A2A2A]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10 animate-pulse duration-[12s]" />
      <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-[#8b5cf6]/[0.02] rounded-full blur-[130px] pointer-events-none select-none -z-10 animate-float-reverse" />

      {/* Luminous Dotted Grid Background Pattern */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#111111_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.15] -z-10 pointer-events-none select-none" />

      {/* 1. Refined Light Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden text-center px-6 pt-12 mb-20 select-none">
        
        {/* Centerpiece: Animated Light Neural Core System */}
        <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center mb-10 select-none">
          {/* External Spinning Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#111111]/20 animate-spin duration-[25s]" />
          
          {/* Middle Counter-rotating Ring */}
          <div className="absolute inset-[25px] rounded-full border border-[#8b5cf6]/20 border-t-2 border-b-2 border-t-[#8b5cf6]/60 border-b-[#8b5cf6]/60 animate-spin duration-[15s] [animation-direction:reverse]" />
          
          {/* Glowing Neural Core */}
          <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#111111] p-[1.5px] shadow-[0_8px_35px_rgba(0, 85, 218,0.15)] flex items-center justify-center animate-pulse duration-[3.5s]">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-[#111111] animate-spin duration-[40s]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
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
          <div className="inline-flex items-center gap-2 bg-[#111111]/[0.08] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase text-[#111111] tracking-[0.18em] mb-6 border border-[#111111]/20 shadow-[0_2px_10px_rgba(0, 85, 218,0.05)]">
            <span className="w-1.5 h-1.5 bg-[#111111] rounded-full animate-ping"></span>
            Autonomous AI Focus
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.05] text-slate-900 tracking-tight mb-6 max-w-[850px] mx-auto">
            AI Systems That Run Operations <AlternatingText>Automatically.</AlternatingText>
          </h1>
          
          <p className="text-[#111111] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[760px] mx-auto font-medium mb-8">
            We blueprint custom intelligent workflows, internal database integrations, RAG pipelines, and automated logic hooks to scale business operations with zero manual bottlenecks.
          </p>

          {/* Typewriter active ticker */}
          <div className="h-[36px] flex items-center justify-center mb-10">
            <span className="text-[#111111] font-extrabold text-xs sm:text-sm tracking-widest uppercase animate-pulse">
              {tickerTexts[tickerIndex]}
            </span>
          </div>

          {/* Hero Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#0055DA] hover:bg-[#0044B3] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-[0_6px_25px_rgba(0, 85, 218,0.15)] hover:shadow-[0_10px_30px_rgba(0, 85, 218,0.25)] text-xs uppercase tracking-widest text-center"
            >
              Start Automated Pipeline
            </Link>
            <a 
              href="#operations-center" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white  border border-slate-200 hover:border-slate-350 hover:bg-white text-slate-700 font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm text-xs uppercase tracking-widest text-center"
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
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Real-Time Ingestion Loop
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Live Operations Center
            </h2>
            <p className="text-[#111111] text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              Ditch static diagrams. Watch our automated pipeline actively ingest data, analyze tasks via custom brains, and commit actions in real-time.
            </p>
          </div>

          {/* Fake Live Dashboard Grid */}
          <div className="w-full bg-white  border border-slate-200/80 rounded-[40px] p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden min-h-[460px] flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#111111]/[0.03] rounded-full blur-[110px] pointer-events-none" />
            
            {/* LEFT: Ingest Cards */}
            <div className="w-full lg:w-[320px] shrink-0 z-10 flex flex-col gap-4 font-Outfit">
              <span className="text-[0.62rem] font-extrabold uppercase text-[#111111] tracking-wider block mb-1">Inbound Events Ingestion</span>
              {operationsStream.map((item, idx) => {
                const isActive = activeStreamIndex === idx;
                return (
                  <div 
                    key={`in-${item.id}`}
                    className={`p-4.5 rounded-2xl border text-left transition-all duration-500 flex justify-between items-center ${
                      isActive 
                        ? "bg-white border-[#111111]/40 shadow-[0_12px_25px_rgba(0, 85, 218,0.04)] -translate-y-0.5 scale-[1.01]" 
                        : "bg-white border-slate-100/60 opacity-60"
                    }`}
                  >
                    <div>
                      <span className={`text-[0.55rem] font-black uppercase px-2 py-0.5 rounded-full mb-1.5 inline-block ${isActive ? "bg-[#111111]/10 text-[#111111] font-extrabold" : "bg-slate-100 text-[#111111]"}`}>
                        Event Ingested
                      </span>
                      <h4 className="font-extrabold text-sm text-[#0F172A]">{item.input.label}</h4>
                      <p className="text-[0.68rem] text-[#111111] mt-0.5 font-medium">{item.input.desc}</p>
                    </div>
                    <span className="font-black text-xs text-[#0F172A]">{item.input.value}</span>
                  </div>
                );
              })}
            </div>

            {/* CENTER: AI Neural Processor Brain */}
            <div className="flex-1 w-full flex flex-col items-center justify-center p-8 bg-white border border-slate-200/60 rounded-[32px] shadow-inner relative overflow-hidden min-h-[340px] z-10">
              <div className="absolute w-[200px] h-[200px] rounded-full border border-[#111111]/5 animate-ping duration-[3.5s] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* SVG Brain Processor icon */}
                <div className="w-15 h-15 rounded-2xl bg-white border border-[#111111]/10 flex items-center justify-center mb-6 shadow-sm animate-pulse duration-[2.5s]">
                  <svg className="w-8 h-8 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <line x1="12" y1="2" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                
                <span className="text-[0.62rem] font-extrabold uppercase text-[#111111] tracking-[0.18em] mb-1">V2 AI Neural Core</span>
                
                {/* Dynamic Brain State */}
                <div className="min-h-[70px] mt-2.5 flex flex-col items-center">
                  <p className="font-black text-slate-800 text-[0.88rem] leading-snug px-3 max-w-[220px] transition-all duration-300">
                    {operationsStream[activeStreamIndex].brain.text}
                  </p>
                  <span className="text-[0.58rem] font-bold text-[#111111] bg-[#111111]/5 border border-[#111111]/10 px-2.5 py-0.5 rounded mt-3.5 block uppercase tracking-wider font-mono">
                    {operationsStream[activeStreamIndex].brain.model}
                  </span>
                </div>

                {/* Progress bar wave simulation */}
                <div className="w-[140px] h-[3px] bg-slate-200 rounded-full mt-6 overflow-hidden">
                  <div className="h-full bg-[#0055DA] hover:bg-[#0044B3] rounded-full animate-marquee" style={{ width: "60%" }} />
                </div>
              </div>
            </div>

            {/* RIGHT: Actions Outputs */}
            <div className="w-full lg:w-[320px] shrink-0 z-10 flex flex-col gap-4 font-Outfit">
              <span className="text-[0.62rem] font-extrabold uppercase text-[#111111] tracking-wider block mb-1">Automated Operations Output</span>
              {operationsStream.map((item, idx) => {
                const isActive = activeStreamIndex === idx;
                return (
                  <div 
                    key={`out-${item.id}`}
                    className={`p-4.5 rounded-2xl border text-left transition-all duration-500 flex justify-between items-center ${
                      isActive 
                        ? "bg-white border-[#22c55e]/45 shadow-[0_12px_25px_rgba(34,197,94,0.04)] -translate-y-0.5 scale-[1.01]" 
                        : "bg-white border-slate-100/60 opacity-60"
                    }`}
                  >
                    <div>
                      <span className={`text-[0.55rem] font-black uppercase px-2 py-0.5 rounded-full mb-1.5 inline-block ${isActive ? "bg-green-500/10 text-[#22c55e] font-extrabold" : "bg-slate-100 text-[#111111]"}`}>
                        Output Sync
                      </span>
                      <h4 className="font-extrabold text-sm text-[#0F172A]">{item.output.label}</h4>
                      <p className="text-[0.68rem] text-[#111111] mt-0.5 font-medium">{item.output.desc}</p>
                    </div>
                    <span className={`text-[0.55rem] font-black px-2 py-0.5 rounded-full ${isActive ? "bg-[#22c55e] text-white" : "bg-slate-100 text-[#111111]"}`}>
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
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Pipeline Story
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Workflow Pipeline Builder
            </h2>
            <p className="text-[#111111] text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              Watch how our structural integration builds itself step-by-step from raw inquiry to verified business analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-[1100px] mx-auto select-none relative z-10">
            {/* Left selector steps */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[0.62rem] font-extrabold uppercase text-[#111111] tracking-wider block mb-1">Click to trigger workflow steps</span>
              {workflowSteps.map((s, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer ${
                    activeWorkflowStep === idx 
                      ? "bg-white border-[#111111]/30 shadow-[0_12px_25px_rgba(0, 85, 218,0.03)] -translate-x-0.5 font-bold" 
                      : "bg-white border-slate-100/60 hover:bg-white hover:border-slate-250"
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
                    activeWorkflowStep === idx ? "bg-[#111111] text-white" : "bg-[#111111]/10 text-[#111111]"
                  }`}>
                    {s.step}
                  </div>
                  <span className="text-[0.85rem] text-[#0F172A] tracking-tight truncate font-extrabold">{s.label}</span>
                </button>
              ))}
            </div>

            {/* Right display card displaying active flow details */}
            <div className="lg:col-span-7 z-10">
              <div className="bg-white rounded-[36px] border border-slate-200/40 p-8 shadow-[0_8px_30px_rgba(0, 85, 218,0.01)] min-h-[340px] flex flex-col justify-between relative group hover:shadow-[0_25px_50px_rgba(0, 85, 218,0.04)] hover:border-[#111111]/20 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-[5px] bg-[#0055DA] hover:bg-[#0044B3] rounded-t-[36px]" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[0.62rem] font-black uppercase text-[#111111] bg-[#111111]/10 px-3.5 py-1 rounded-full tracking-widest shadow-sm">
                      Pipeline State #0{activeWorkflowStep + 1}
                    </span>
                    <span className="text-[0.58rem] font-bold text-[#111111] tracking-wider">ACTIVE SYNC</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                    {workflowSteps[activeWorkflowStep].label}
                  </h3>
                  <p className="text-[#111111] text-xs sm:text-sm leading-relaxed mb-6 font-semibold">
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
                            ? "bg-[#0055DA] hover:bg-[#0044B3]" 
                            : "bg-slate-100"
                        }`} 
                      />
                      {idx < 5 && (
                        <span className={`text-[0.55rem] font-black transition-colors ${idx < activeWorkflowStep ? "text-[#111111]" : "text-slate-200"}`}>
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



        {/* 5. Dynamic Ecosystem Map */}
        <section id="ecosystem" className="py-16 border-t border-slate-200/50 mb-28 select-none relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Integration Hub
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Dynamic Ecosystem Map
            </h2>
            <p className="text-[#111111] text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              Hover over float nodes to trace secure, zero-latency webhook connections linking back to the core V2 AI Automation Engine.
            </p>
          </div>

          {/* Interactive Floating Diagram Container */}
          <div className="relative w-full max-w-[750px] aspect-[4/3] mx-auto border border-slate-200/80 bg-white  rounded-[36px] shadow-[0_15px_40px_rgba(0,0,0,0.015)] overflow-hidden flex items-center justify-center p-6 z-10">
            
            {/* Grid Overlay background lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
            
            {/* Center Node (V2 AI Engine Core) */}
            <div className="relative z-20 w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#111111] p-[1.5px] shadow-[0_8px_30px_rgba(0, 85, 218,0.12)] animate-pulse duration-[3s] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center text-slate-800 text-center shadow-inner">
                <span className="text-[0.45rem] font-black uppercase text-[#111111] tracking-widest mb-0.5">V2 Core</span>
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
                    isHovered ? "border-[#111111] shadow-[0_8px_25px_rgba(0, 85, 218,0.08)]" : "border-slate-100"
                  }`}>
                    {node.icon}
                  </div>
                  <span className={`text-[0.58rem] font-black uppercase tracking-wider mt-2 px-2 py-0.5 rounded transition-all duration-300 ${
                    isHovered ? "bg-[#111111] text-white" : "bg-white text-[#111111]"
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
                        stroke="#111111" 
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
            <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
              Foundation Models
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-[#0F172A] tracking-tight">
              Integrated LLM Engines
            </h2>
            <p className="text-[#111111] text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
              We connect your workflows to state-of-the-art neural engines, matching tasks to their ideal model strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto select-none">
            {/* OpenAI */}
            <div className="p-8 rounded-3xl bg-white  border border-slate-200/40 shadow-[0_8px_30px_rgba(0, 85, 218,0.01)] flex flex-col justify-between hover:border-[#10A37F]/30 hover:shadow-[0_25px_50px_rgba(0, 85, 218,0.04)] hover:bg-white transition-all duration-500 group text-left min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-[#10A37F]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <ECO_ICONS.OpenAIModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-1 group-hover:text-[#10A37F] transition-colors font-Outfit">OpenAI GPT-4o</h3>
                <p className="text-[0.62rem] text-[#111111] font-extrabold uppercase tracking-wider mb-4">Elite Reasoning & Planning</p>
                <p className="text-[#111111] text-xs leading-relaxed mb-6 font-semibold font-Outfit">
                  Perfect for multi-step agent decisions, complex software writing, structured JSON outputs, and high-intensity logic pipelines.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-[#0055DA] group-hover:bg-[#10A37F] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm cursor-pointer uppercase tracking-widest font-Outfit">
                Deploy GPT Agent
              </Link>
            </div>

            {/* Google Gemini */}
            <div className="p-8 rounded-3xl bg-white  border border-slate-200/40 shadow-[0_8px_30px_rgba(0, 85, 218,0.01)] flex flex-col justify-between hover:border-[#1a73e8]/30 hover:shadow-[0_25px_50px_rgba(0, 85, 218,0.04)] hover:bg-white transition-all duration-500 group text-left min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-[#1a73e8]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <ECO_ICONS.GeminiModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-1 group-hover:text-[#1a73e8] transition-colors font-Outfit">Google Gemini 1.5</h3>
                <p className="text-[0.62rem] text-[#111111] font-extrabold uppercase tracking-wider mb-4">Massive Context & Multimodal</p>
                <p className="text-[#111111] text-xs leading-relaxed mb-6 font-semibold font-Outfit">
                  Perfect for processing hours of video, massive databases, whole PDF manuals, and high-volume image analysis pipelines.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-[#0055DA] group-hover:bg-[#1a73e8] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm cursor-pointer uppercase tracking-widest font-Outfit">
                Deploy Gemini Engine
              </Link>
            </div>

            {/* Anthropic Claude */}
            <div className="p-8 rounded-3xl bg-white  border border-slate-200/40 shadow-[0_8px_30px_rgba(0, 85, 218,0.01)] flex flex-col justify-between hover:border-[#D97706]/30 hover:shadow-[0_25px_50px_rgba(0, 85, 218,0.04)] hover:bg-white transition-all duration-500 group text-left min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-[#D97706]/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <ECO_ICONS.ClaudeModel />
                </div>
                <h3 className="text-lg font-black text-slate-850 mb-1 group-hover:text-[#D97706] transition-colors font-Outfit">Anthropic Claude 3.5</h3>
                <p className="text-[0.62rem] text-[#111111] font-extrabold uppercase tracking-wider mb-4">Precise Logic & Writing</p>
                <p className="text-[#111111] text-xs leading-relaxed mb-6 font-semibold font-Outfit">
                  Perfect for precise document parsing, mathematical code vetting, enterprise writing styles, and safe, guardrailed automations.
                </p>
              </div>
              <Link href="/contact" className="w-full text-center bg-[#0055DA] group-hover:bg-[#D97706] text-white py-3.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm cursor-pointer uppercase tracking-widest font-Outfit">
                Deploy Claude Pipeline
              </Link>
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
              <p className="text-[#111111] text-sm max-w-[550px] mx-auto mt-2 leading-relaxed font-semibold">
                We design and engineer enterprise automation scripts using industry-defining frameworks. Custom REST hooks, secure RAG indexing, and seamless operations.
              </p>
            </div>

            {/* Two-Column Tool Stack Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 flex justify-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-[#111111]/10 to-[#8b5cf6]/10 rounded-full blur-[80px] -z-10 animate-float" />
                
                <div className="p-4 bg-white  border border-slate-200/80 rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.04)] hover:shadow-[0_35px_80px_rgba(0, 85, 218,0.06)] hover:scale-[1.01] transition-all duration-500 relative overflow-hidden group aspect-square max-w-[460px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  <Image
                    src="/ai_automation_showcase.png"
                    alt="AI Automation & Pipeline Illustration Artwork"
                    fill
                    sizes="(max-width: 640px) 90vw, 460px"
                    loading="lazy"
                    className="object-cover rounded-[28px] shadow-sm transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute bottom-6 right-6 bg-slate-900/90 text-white font-mono text-[0.62rem] tracking-wider px-3.5 py-2 rounded-xl  shadow-md border border-white/10 z-20">
                    ◇ ENGINE: ACTIVE
                  </div>
                </div>
              </div>

              {/* Right Column: Creative floating presentation of AI Tools */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                {/* OpenAI / Anthropic */}
                <div className="flex items-center gap-5 p-5 bg-white  border border-slate-200/50 rounded-3xl hover:border-[#10A37F]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(16,163,127,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7 text-[#10A37F]" fill="currentColor" viewBox="0 0 720 720">
                      <path d="M304.246 294.611V249.028C304.246 245.189 305.687 242.309 309.044 240.392L400.692 187.612C413.167 180.415 428.042 177.058 443.394 177.058C500.971 177.058 537.44 221.682 537.44 269.182C537.44 272.54 537.44 276.379 536.959 280.218L441.954 224.558C436.197 221.201 430.437 221.201 424.68 224.558L304.246 294.611ZM518.245 472.145V363.224C518.245 356.505 515.364 351.707 509.608 348.349L389.174 278.296L428.519 255.743C431.877 253.826 434.757 253.826 438.115 255.743L529.762 308.523C556.154 323.879 573.905 356.505 573.905 388.171C573.905 424.636 552.315 458.225 518.245 472.141V472.145ZM275.937 376.182L236.592 353.152C233.235 351.235 231.794 348.354 231.794 344.515V238.956C231.794 187.617 271.139 148.749 324.4 148.749C344.555 148.749 363.264 155.468 379.102 167.463L284.578 222.164C278.822 225.521 275.942 230.319 275.942 237.039V376.186L275.937 376.182ZM360.626 425.122L304.246 393.455V326.283L360.626 294.616L417.002 326.283V393.455L360.626 425.122ZM396.852 570.989C376.698 570.989 357.989 564.27 342.151 552.276L436.674 497.574C442.431 494.217 445.311 489.419 445.311 482.699V343.552L485.138 366.582C488.495 368.499 489.936 371.379 489.936 375.219V480.778C489.936 532.117 450.109 570.985 396.852 570.985V570.989ZM283.134 463.99L191.486 411.211C165.094 395.854 147.343 363.229 147.343 331.562C147.343 294.616 169.415 261.509 203.48 247.593V356.991C203.48 363.71 206.361 368.508 212.117 371.866L332.074 441.437L292.729 463.99C289.372 465.907 286.491 465.907 283.134 463.99ZM277.859 542.68C223.639 542.68 183.813 501.895 183.813 451.514C183.813 447.675 184.294 443.836 184.771 439.997L279.295 494.698C285.051 498.056 290.812 498.056 296.568 494.698L417.002 425.127V470.71C417.002 474.549 415.562 477.429 412.204 479.346L320.557 532.126C308.081 539.323 293.206 542.68 277.854 542.68H277.859ZM396.852 599.776C454.911 599.776 503.37 558.513 514.41 503.812C568.149 489.896 602.696 439.515 602.696 388.176C602.696 354.587 588.303 321.962 562.392 298.45C564.791 288.373 566.231 278.296 566.231 268.224C566.231 199.611 510.571 148.267 446.274 148.267C433.322 148.267 420.846 150.184 408.37 154.505C386.775 133.392 357.026 119.958 324.4 119.958C266.342 119.958 217.883 161.22 206.843 215.921C153.104 229.837 118.557 280.218 118.557 331.557C118.557 365.146 132.95 397.771 158.861 421.283C156.462 431.36 155.022 441.437 155.022 451.51C155.022 520.123 210.682 571.466 274.978 571.466C287.931 571.466 300.407 569.549 312.883 565.228C334.473 586.341 364.222 599.776 396.852 599.776Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[1.05rem] font-black text-slate-800">OpenAI & LLMs</h4>
                      <span className="text-[0.58rem] font-bold bg-[#10A37F]/10 text-[#10A37F] px-2 py-0.5 rounded-md uppercase tracking-wider">Cognitive Brain</span>
                    </div>
                    <p className="text-[#111111] text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Integrating advanced models (GPT-4o, Claude 3.5, Gemini 1.5) for intent classification, visual analysis, and semantic data extraction.
                    </p>
                  </div>
                </div>

                {/* n8n / Make */}
                <div className="flex items-center gap-5 p-5 bg-white  border border-slate-200/50 rounded-3xl hover:border-orange-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(255,109,90,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <circle cx="6" cy="12" r="3" fill="#FF6D5A" />
                      <circle cx="18" cy="6" r="3" fill="#111111" />
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
                    <p className="text-[#111111] text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Developing secure internal webhook listeners, visual node logic, loops, conditional routers, and CRM sync gateways.
                    </p>
                  </div>
                </div>

                {/* LangChain / Python */}
                <div className="flex items-center gap-5 p-5 bg-white  border border-slate-200/50 rounded-3xl hover:border-blue-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(48,105,152,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
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
                    <p className="text-[#111111] text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Coding autonomous database agents, document semantic RAG retrieval arrays, serverless cloud runners, and secure Python cron scripts.
                    </p>
                  </div>
                </div>

                {/* SQL & Redis */}
                <div className="flex items-center gap-5 p-5 bg-white  border border-slate-200/50 rounded-3xl hover:border-purple-300/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(139,92,246,0.03)] hover:-translate-y-0.5 transition-all duration-300 group">
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
                    <p className="text-[#111111] text-xs sm:text-[0.8rem] leading-relaxed mt-1 font-semibold">
                      Storing qualified event logs in ACID-compliant SQL nodes, caching system logic in rapid Redis pipelines, and syncing transactional ledgers.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Premium Light CTA Section with glowing grid borders (NO MORE NAVY DARK BLUE BOX!) */}
        <section className="relative rounded-[40px] bg-gradient-to-tr from-[#111111]/[0.06] via-[#8b5cf6]/[0.03] to-white p-10 sm:p-20 text-center text-slate-800 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.01)] z-10 mt-16 max-w-[1100px] mx-auto border border-slate-200/60 animate-fade-in">
          {/* Luminous soft mesh bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#111111] opacity-5 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6] opacity-5 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 max-w-[650px] mx-auto">
            <h2 className="text-3xl sm:text-[2.8rem] font-black tracking-tight leading-tight mb-5 text-slate-900">
              {"Let's Automate Your Business Systems"}
            </h2>
            <p className="text-[#111111] max-w-[540px] mx-auto text-[0.92rem] leading-relaxed mb-10 font-semibold">
              Our AI workflow architects are ready to blueprint custom LLM integrations, operational event triggers, and secure database bridges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-[#0055DA] hover:bg-[#0044B3] shadow-[0_6px_25px_rgba(0, 85, 218,0.15)] hover:shadow-[0_10px_35px_rgba(0, 85, 218,0.3)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-widest"
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
