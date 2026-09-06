"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";
import AlternatingText from "@/components/AlternatingText";
import FaqSection from "@/components/FaqSection";


const SVG = {
  Nextjs: () => (
    <svg className="w-5 h-5 text-[#00D8FF]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  Retool: () => (
    <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
    </svg>
  ),
  HubSpot: () => (
    <svg className="w-5 h-5 text-[#FF7A59]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
    </svg>
  ),
  Salesforce: () => (
    <svg className="w-5 h-5 text-[#00A1E0]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  Postgres: () => (
    <svg className="w-5 h-5 text-[#336791]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  SapApi: () => (
    <svg className="w-5 h-5 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Zoho: () => (
    <svg className="w-5 h-5 text-[#E61C24]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2.5" />
      <circle cx="15" cy="15" r="2.5" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  ),
  Redis: () => (
    <svg className="w-5 h-5 text-[#D82C20]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Stripe: () => (
    <svg className="w-5 h-5 text-[#635BFF]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  ),
  AWS: () => (
    <svg className="w-5 h-5 text-[#FF9900]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Database: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  Server: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
      <line x1="10" y1="6" x2="14" y2="6" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </svg>
  ),
  Key: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="M21 3L11.5 12.5" />
      <path d="M16 8l3 3" />
      <path d="M13 5l3 3" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Truck: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Users: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Wallet: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  ),
  Sync: () => (
    <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.57-1.19" />
    </svg>
  ),
  Alert: () => (
    <svg className="w-4 h-4 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
};

interface Lead {
  id: number;
  name: string;
  source: string;
  value: string;
  status: string;
  time: string;
}

export default function ErpCrmPage() {
  const [activeArchStep, setActiveArchStep] = useState<number | null>(null);
  const [leadList, setLeadList] = useState<Lead[]>([
    { id: 1, name: "Alexander Wright", source: "Enterprise Hub", value: "$45,200", status: "Synced", time: "12s ago" },
    { id: 2, name: "Sofia Martinez", source: "Salesforce Sync", value: "$18,500", status: "Active", time: "1m ago" },
    { id: 3, name: "Marcus Chen", source: "Stripe Webhook", value: "$128,000", status: "Synced", time: "3m ago" },
    { id: 4, name: "Emma Patterson", source: "HubSpot API", value: "$8,900", status: "Active", time: "5m ago" }
  ]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      const names = ["Olivia Taylor", "Liam Johnson", "Nora Bennett", "Lucas Miller", "Lucas Vance"];
      const sources = ["Stripe Webhook", "Salesforce Sync", "Zoho Lead API", "HubSpot API"];
      const values = ["$14,200", "$92,000", "$3,500", "$61,000", "$118,500"];
      
      const newLead: Lead = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        value: values[Math.floor(Math.random() * values.length)],
        status: Math.random() > 0.3 ? "Synced" : "Active",
        time: "Just now"
      };

      setLeadList(prev => [newLead, ...prev.slice(0, 3)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  
  const stats = [
    { value: "15+", label: "Systems Deployed" },
    { value: "1.2M+", label: "Daily Sync Actions" },
    { value: "99.99%", label: "Sync Accuracy Rate" },
    { value: "$500K+", label: "Client Overhead Saved" },
    { value: "Sub-200ms", label: "DB Query Latency" },
  ];

  
  const marqueeTech = [
    { name: "Next.js 16", desc: "Admin Interfaces", icon: <SVG.Nextjs /> },
    { name: "Retool Suite", desc: "Operations Dashboards", icon: <SVG.Retool /> },
    { name: "HubSpot API", desc: "Two-way Syncing", icon: <SVG.HubSpot /> },
    { name: "Salesforce CLI", desc: "Enterprise Lead pipelines", icon: <SVG.Salesforce /> },
    { name: "PostgreSQL", desc: "Encrypted Storages", icon: <SVG.Postgres /> },
    { name: "SAP Connector", desc: "Legacy Database Bridges", icon: <SVG.SapApi /> },
    { name: "Zoho API", desc: "Automation Workflows", icon: <SVG.Zoho /> },
    { name: "Redis DB", desc: "Worker Queues", icon: <SVG.Redis /> },
    { name: "Stripe Invoices", desc: "Financial billing bridges", icon: <SVG.Stripe /> },
    { name: "AWS Cloud", desc: "Secure Isolated VPCs", icon: <SVG.AWS /> },
  ];

  
  const systemsWeBuild = [
    {
      title: "Custom ERP Suites",
      desc: "Enterprise resource planning suites custom-crafted for specific, high-overhead internal operational workflows.",
      icon: <SVG.Database />
    },
    {
      title: "Lead Automation & CRMs",
      desc: "Instant Salesforce/HubSpot database sync tunnels, automated email drip sequencers, and lead score routers.",
      icon: <SVG.Users />
    },
    {
      title: "Inventory & Logistics",
      desc: "Real-time automated stock level monitoring, delivery tracking dispatch webhooks, and automatic parts ordering.",
      icon: <SVG.Truck />
    },
    {
      title: "HR & Payroll Portals",
      desc: "Role-based administrative permissions, digital timesheet audit approvals, and multi-tenant employee profiles.",
      icon: <SVG.Key />
    },
    {
      title: "Financial & Billing Engines",
      desc: "Automated custom PDF invoicing pipelines, Stripe subscription triggers, and company expense reporting grids.",
      icon: <SVG.Wallet />
    },
    {
      title: "Analytics Dashboards",
      desc: "High-legibility operations charts, daily active user monitors, and sub-second metrics ingestion pipelines.",
      icon: <SVG.Chart />
    },
    {
      title: "Customer Support Portals",
      desc: "Secure customer ticketing panels, automated response queue rules, and Gemini-based support assistants.",
      icon: <SVG.Shield />
    },
    {
      title: "Multi-system Data Syncs",
      desc: "Real-time sync networks linking legacy mainframes to modern administrative web portals on the edge.",
      icon: <SVG.Sync />
    },
  ];

  
  const archSteps = [
    {
      id: 1,
      title: "Client Interface",
      tech: "Next.js, Retool Custom, Tailwind CSS",
      desc: "Renders visual-first administrative portals, validates input parameters on client forms, and secures access with strict SSO triggers."
    },
    {
      id: 2,
      title: "API Gateway & Middleware",
      tech: "GraphQL, JWT Token Validation, Rate Limiters",
      desc: "Handles payload encryption, intercepts external webhooks, runs rate filters, and distributes tasks safely."
    },
    {
      id: 3,
      title: "Background Workers & Queues",
      tech: "Redis In-Memory, Node.js queue loops",
      desc: "Schedules heavy nightly sync audits, balances peak data spikes, and executes bulk CSV importing pipelines asynchronously."
    },
    {
      id: 4,
      title: "Database & Replication",
      tech: "PostgreSQL RDS, SSL Encrypted tunnels",
      desc: "Structures normalized tabular views, hosts replicas for secure analytics reading, and stores encrypted audit logs."
    },
    {
      id: 5,
      title: "Enterprise Cloud & Security",
      tech: "AWS VPC Isolation, HTTPS SSL, AWS KMS Keys",
      desc: "Runs systems inside highly secure virtual clouds with automated daily backups and locked IAM role keys."
    }
  ];

  
  const timelineSteps = [
    { phase: "01", name: "Operational Auditing", desc: "blueprinting existing database tables, identifying legacy operational bottlenecks, and mapping target API requirements." },
    { phase: "02", name: "Database Normalization", desc: "Designing robust relational ERDs, defining primary keys, and establishing data validation rules." },
    { phase: "03", name: "API & Webhook Design", desc: "Programming Zoho/HubSpot sync webhooks, setting up rate limits, and designing encrypted token headers." },
    { phase: "04", name: "Portal Development", desc: "Coding administrative layouts with high-legibility grids, permission toggles, and operations tables." },
    { phase: "05", name: "Safe Staging Data Migration", desc: "Running dry-run database migrations with strict checksum audits, verifying legacy historical imports." },
    { phase: "06", name: "Security Audit & Training", desc: "Executing role-based privilege checks, penetration testing data forms, and leading administrative staff training." },
    { phase: "07", name: "Zero-Downtime Deployment", desc: "Deploying secure AWS VPC containers, setting up webhook latency alarms, and tracking real-time status." }
  ];

  
  const capabilities = [
    "Webhook Automation",
    "Two-Way CRM Sync",
    "Role-Based Access (RBAC)",
    "Custom SQL Views",
    "Bulk CSV Importers",
    "PDF Invoice Engines",
    "Encrypted Databases",
    "SSO / SAML Logins",
    "Slack Alert Webhooks",
    "Audit Trail Logging"
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 md:py-24 relative overflow-hidden select-none">
      
      <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-[#635BFF]/[0.025] rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[45%] right-[-10%] w-[600px] h-[600px] bg-[#111111]/[0.02] rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse duration-[8s]" />

      <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
        
        
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20 md:mb-28">
          
          <div className="lg:col-span-7 flex flex-col text-left items-start">
            <div className="inline-flex items-center gap-2 bg-[#635BFF]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#635BFF] tracking-[0.15em] mb-6 border border-[#635BFF]/20 shadow-[0_2px_10px_rgba(99,91,255,0.05)]">
              <span className="w-2 h-2 bg-[#635BFF] rounded-full animate-ping"></span>
              Enterprise Software & Automation
            </div>
            <h1 className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-black leading-[1.1] text-[#0F172A] mb-6 tracking-tight">
              Custom ERP & CRM <AlternatingText>Software Development</AlternatingText>
            </h1>
            <p className="text-[#111111] text-base sm:text-[1.1rem] leading-[1.7] max-w-[620px] mb-8 font-medium">
              Eliminate compounding per-user licensing fees and fragmented spreadsheets. V2 Labs Global engineers custom ERP and CRM platforms designed around your exact Standard Operating Procedures—with native GST compliance, multi-warehouse sync, and 100% private database ownership.
            </p>

            {/* AEO DIRECT ANSWER BLOCK (Google AI Overviews / Perplexity Citation Target) */}
            <div className="mb-8 p-4.5 sm:p-5 rounded-2xl bg-white border border-[#635BFF]/25 shadow-[0_4px_25px_rgba(99,91,255,0.06)] text-left w-full max-w-[640px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#635BFF] animate-pulse" />
                <span className="text-[0.68rem] font-black uppercase text-[#635BFF] tracking-widest">AEO Direct Answer Summary</span>
              </div>
              <p className="text-slate-800 text-xs sm:text-[0.85rem] leading-relaxed font-normal">
                <strong>V2 Labs Global</strong> is an enterprise software development company delivering custom <strong>ERP (Enterprise Resource Planning)</strong> and <strong>CRM (Customer Relationship Management)</strong> systems for manufacturing, wholesale, and service enterprises across Mumbai, Thane, Bhayandar, and international markets. Our bespoke architectures provide zero per-seat licensing penalties, end-to-end workflow automation, and 100% proprietary code and data sovereignty.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0055DA] hover:bg-[#0044B3] shadow-[0_8px_25px_rgba(0,85,218,0.22)] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] text-[0.92rem] text-center cursor-pointer"
              >
                Schedule Scoping Call
              </Link>
              <a 
                href="https://wa.me/919022641867?text=Hello%20V2%20Labs%20Global,%20I%20would%20like%20to%20consult%20on%20a%20Custom%20ERP%20/%20CRM%20system%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_6px_20px_rgba(37,211,102,0.25)] text-[0.92rem] text-center cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp Us
              </a>
              <a 
                href="#architecture" 
                className="inline-flex items-center justify-center px-7 py-4 bg-white border border-[#0055DA]/20 hover:border-[#0055DA]/50 text-slate-800 font-extrabold rounded-full transition-all duration-300 hover:bg-slate-50 shadow-sm text-[0.92rem] text-center cursor-pointer"
              >
                Data Pipeline
              </a>
            </div>
          </div>

          
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-[#635BFF]/10 to-[#111111]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
            
            
            <div className="w-full max-w-[440px] rounded-3xl border border-[#635BFF]/10 bg-white shadow-[0_25px_60px_rgba(99,91,255,0.08)] overflow-hidden hover:-translate-y-1 transition-all duration-300">
              
              
              <div className="flex items-center justify-between bg-white border-b border-slate-100 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444] shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308] shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e] shadow-sm" />
                </div>
                <div className="w-[180px] bg-white border border-slate-200/50 rounded-lg py-1 px-3 text-[0.62rem] text-[#111111] font-medium text-center truncate shadow-inner">
                  v2ops.labs/dashboard
                </div>
                <div className="w-3 h-3" />
              </div>

              
              <div className="p-5 select-none text-left">
                
                
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <h3 className="text-[0.65rem] font-extrabold uppercase text-[#94A3B8] tracking-widest leading-none mb-1">Operational Telemetry</h3>
                    <span className="text-[#0F172A] font-black text-[1.1rem]">System Control Portal</span>
                  </div>
                  <span className="text-[0.6rem] font-bold text-white bg-[#635BFF] px-2.5 py-0.5 rounded-full shadow-sm animate-pulse">Sync Active</span>
                </div>

                
                <div className="grid grid-cols-2 gap-3.5 mb-4">
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <span className="text-[0.62rem] font-bold uppercase text-[#94A3B8] tracking-wider block mb-1">Database Queries</span>
                    <span className="text-xl font-black text-[#0F172A]">2.48M/day</span>
                    <span className="text-[0.58rem] font-bold text-[#22c55e] block mt-0.5">▲ Sub-200ms lag</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <span className="text-[0.62rem] font-bold uppercase text-[#94A3B8] tracking-wider block mb-1">Integration Nodes</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                      <span className="text-xl font-black text-[#0F172A]">9 Online</span>
                    </div>
                    <span className="text-[0.58rem] font-bold text-[#94A3B8] block mt-0.5">HubSpot & SF Connected</span>
                  </div>
                </div>

                
                <div className="p-4 rounded-2xl bg-slate-900 text-white mb-5 shadow-[0_10px_25px_rgba(99,91,255,0.18)] relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-28 h-28 bg-white/5 rounded-tl-full pointer-events-none" />
                  <span className="text-[0.62rem] font-bold uppercase text-[#111111] tracking-widest block mb-2.5">Live Lead Ingestion Queue</span>
                  
                  
                  <div className="flex flex-col gap-2">
                    {leadList.map((lead) => (
                      <div key={lead.id} className="flex items-center justify-between text-xs border-b border-white/5 pb-1.5 last:border-b-0 last:pb-0">
                        <div className="flex flex-col min-w-0">
                          <span className="font-extrabold text-white truncate">{lead.name}</span>
                          <span className="text-[0.58rem] text-[#111111]">{lead.source}</span>
                        </div>
                        <div className="text-right shrink-0 flex items-center gap-2">
                          <span className="font-black text-[#635BFF]">{lead.value}</span>
                          <span className={`text-[0.55rem] font-black px-1.5 py-0.2 rounded-full ${lead.status === "Synced" ? "bg-green-500/10 text-green-400" : "bg-blue-500/10 text-blue-400"}`}>{lead.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <Image 
                     src="/hero_man.png" 
                     alt="DevOps Lead verified professional" 
                     width={40}
                     height={40}
                     sizes="40px"
                     className="w-10 h-10 rounded-full object-cover filter grayscale border border-[#635BFF]/20 shadow-sm shrink-0"
                     loading="lazy"
                  />
                  <div>
                    <p className="text-[0.78rem] font-black text-[#0F172A]">Enterprise Database Architect</p>
                    <p className="text-[0.62rem] font-bold text-[#94A3B8] uppercase tracking-wider">Infrastructure Engineering</p>
                  </div>
                  <div className="ml-auto w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                </div>

              </div>

            </div>
          </div>
        </section>

        
        <section className="w-[100vw] relative left-1/2 right-1/2 -mx-[50vw] py-10 bg-white border-y border-slate-100 overflow-hidden select-none mb-20 md:mb-28">
          <div className="relative flex max-w-[100vw] overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-8">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex shrink-0 gap-8">
                  {marqueeTech.map((tech, idx) => (
                    <div 
                      key={`${tech.name}-${i}-${idx}`} 
                      className="inline-flex items-center gap-4 px-6.5 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-[#635BFF]/20 hover:bg-white transition-all duration-300"
                    >
                      <span className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">{tech.icon}</span>
                      <div className="text-left">
                        <span className="text-[0.88rem] font-black text-slate-850 block leading-tight">{tech.name}</span>
                        <span className="text-[0.68rem] font-bold text-[#111111] block mt-0.5">{tech.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section id="what-we-build" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Enterprise Modules</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              What We Build
            </h2>
            <p className="text-[#111111] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              We engineer custom database environments, lead pipelines, and internal tools tailored for operation clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemsWeBuild.map((p, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-[24px] border border-black/[0.03] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(99,91,255,0.06)] hover:border-[#635BFF]/20 group flex flex-col justify-between"
              >
                <div>
                  
                  <div className="w-11 h-11 rounded-xl bg-[#635BFF]/[0.08] flex items-center justify-center border border-[#635BFF]/10 group-hover:scale-105 group-hover:bg-[#635BFF] group-hover:text-white transition-all duration-300 mb-5 shadow-sm">
                    <div className="[&>svg]:stroke-current text-[#635BFF] group-hover:text-white transition-colors duration-300">
                      {p.icon}
                    </div>
                  </div>
                  <h3 className="text-[1.05rem] text-[#0F172A] font-black tracking-tight mb-2 group-hover:text-[#635BFF] transition-colors">{p.title}</h3>
                  <p className="text-[#111111] text-xs leading-relaxed">{p.desc}</p>
                </div>
                
                
                <div className="h-[3px] w-0 bg-gradient-to-r from-[#635BFF] to-[#111111] rounded-full mt-5 group-hover:w-[40px] transition-all duration-300" />
              </div>
            ))}
          </div>
        </section>

        
        <section id="architecture" className="py-12 md:py-16 border-t border-b border-black/[0.04] mb-20 md:mb-28 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#635BFF]/[0.015] rounded-full blur-[130px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            
            <div className="lg:col-span-5 flex flex-col text-left items-start">
              <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Technical Integrity</p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-[#0F172A] tracking-tight leading-none mb-6">
                Built with scalable data pipelines from day one.
              </h2>
              <p className="text-[#111111] text-sm sm:text-base leading-[1.65] mb-10">
                Most agencies hide their technical designs. We map out robust databases engineered to scale. Our platforms feature isolated local variables, automated rate limit rules, TLS encrypted Postgres replication tunnels, and AWS virtual isolated clouds.
              </p>

              
              <div className="flex flex-wrap gap-2.5">
                {["Encrypted Logs", "PostgreSQL Replicas", "JWT Verification", "AWS VPC Isolations", "Bulk Query Optimization"].map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full border border-slate-100 bg-white text-[0.68rem] font-extrabold uppercase text-[#111111] tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            
            <div className="lg:col-span-7 w-full flex flex-col gap-3 relative">
              <span className="text-[0.62rem] font-extrabold uppercase text-[#94A3B8] tracking-widest text-center block mb-3">Interactive Data Pipeline (Hover to inspect)</span>
              
              {archSteps.map((step, idx) => (
                <div 
                  key={step.id}
                  onMouseEnter={() => setActiveArchStep(step.id)}
                  onMouseLeave={() => setActiveArchStep(null)}
                  className={`p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center gap-4.5 ${
                    activeArchStep === step.id 
                      ? "bg-white border-[#635BFF] shadow-[0_12px_30px_rgba(99,91,255,0.06)] -translate-y-0.5" 
                      : "bg-white border-slate-100 hover:border-[#635BFF]/30"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
                    activeArchStep === step.id ? "bg-[#635BFF] text-white" : "bg-[#635BFF]/[0.08] text-[#635BFF]"
                  }`}>
                    {step.id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-extrabold text-[0.88rem] text-[#0F172A] tracking-tight">{step.title}</h3>
                      <span className="text-[0.62rem] font-bold text-[#635BFF] bg-[#635BFF]/[0.05] px-1.5 py-0.5 rounded">{step.tech}</span>
                    </div>
                    
                    <div className={`text-[#111111] text-xs transition-all duration-300 ${
                      activeArchStep === step.id ? "max-h-[100px] opacity-100 mt-2 leading-relaxed" : "max-h-0 opacity-0 overflow-hidden"
                    }`}>
                      {step.desc}
                    </div>
                  </div>
                  
                  
                  {idx < 4 && (
                    <div className="absolute bottom-[-16px] left-[32px] w-[2px] h-[16px] bg-[#635BFF]/15 pointer-events-none z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#635BFF] absolute left-[-2px] animate-ping" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        
        <section id="process" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Our Methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              From Idea to System
            </h2>
            <p className="text-[#111111] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              A highly normalized integration lifecycle designed to guarantee database security and zero data loss.
            </p>
          </div>

          
          <div className="relative pl-6 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:border-l-2 before:border-dashed before:border-[#635BFF]/30 max-w-[850px] mx-auto">
            {timelineSteps.map((s, idx) => (
              <div key={idx} className="relative flex items-start gap-4 mb-8 last:mb-0 group">
                
                
                <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#635BFF] flex items-center justify-center shadow-[0_0_12px_rgba(99,91,255,0.12)] z-10">
                  <span className="text-[0.75rem] font-black text-[#635BFF] tracking-tighter">{s.phase}</span>
                </div>

                
                <div className="flex-1 p-5 rounded-2xl border border-black/[0.03] bg-white shadow-sm hover:shadow-[0_15px_30px_rgba(99,91,255,0.05)] hover:border-[#635BFF]/20 transition-all duration-300 flex flex-col text-left">
                  <h3 className="text-[0.95rem] font-extrabold text-[#0F172A] tracking-tight mb-1 group-hover:text-[#635BFF] transition-colors">{s.name}</h3>
                  <p className="text-[#111111] text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        


        
        <section id="saas-features" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Technical Checklist</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              System Capabilities
            </h2>
            <p className="text-[#111111] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              We construct all essential structural database features and compliance audits into our enterprise setups.
            </p>
          </div>

          
          <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-[900px] mx-auto">
            {capabilities.map((feat, idx) => (
              <div 
                key={idx} 
                className="px-6 py-4 rounded-[20px] bg-white border border-slate-100 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#635BFF]/30 hover:shadow-[0_15px_30px_rgba(99,91,255,0.06)] group flex items-center gap-3.5 animate-fade-in"
              >
                <div className="h-[4px] w-[50%] absolute top-0 left-0 bg-gradient-to-r from-[#635BFF] to-[#111111] rounded-tr group-hover:w-full transition-all duration-300" />
                
                
                <div className="w-5.5 h-5.5 rounded-full bg-[#635BFF]/[0.08] flex items-center justify-center text-[0.62rem] font-black text-[#635BFF] shadow-inner select-none shrink-0 group-hover:bg-[#635BFF] group-hover:text-white transition-all duration-300">
                  ✓
                </div>
                <span className="text-slate-800 font-extrabold text-[0.84rem] sm:text-[0.92rem] tracking-tight">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        
        <section id="credibility" className="py-12 border-t border-black/[0.04] mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-center justify-center">
            {stats.map((st, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-white transition-colors duration-300">
                <span className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-2 block bg-gradient-to-r from-[#635BFF] to-[#111111] bg-clip-text text-transparent">{st.value}</span>
                <span className="text-[0.68rem] font-extrabold uppercase text-[#111111] tracking-wider block max-w-[140px] leading-tight">{st.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GEO COMPARISON MATRIX: Custom Architecture vs Off-the-Shelf SaaS */}
        <section id="comparison" className="mb-20 md:mb-28">
          <div className="text-center mb-16">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Total Cost of Ownership & ROI</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-black text-[#0F172A] tracking-tight leading-tight">
              Custom Architecture vs. Off-The-Shelf SaaS Platforms
            </h2>
            <p className="text-[#111111] text-sm sm:text-base max-w-[650px] mx-auto mt-4 leading-relaxed font-medium">
              Why scaling enterprises and manufacturing hubs transition away from escalating per-seat licenses (Salesforce, Zoho, SAP) to private, proprietary software.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-5 px-6 text-xs font-black text-slate-900 uppercase tracking-wider">Evaluation Vector</th>
                  <th className="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-wider">Off-the-Shelf SaaS (Zoho / Salesforce / SAP)</th>
                  <th className="py-5 px-6 text-xs font-black text-[#0055DA] uppercase tracking-wider bg-[#0055DA]/[0.04]">V2 Labs Global Custom Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4.5 px-6 font-black text-slate-900">Per-User Licensing Cost</td>
                  <td className="py-4.5 px-6 text-slate-600">Perpetual monthly per-seat fees that escalate rapidly as team headcount grows.</td>
                  <td className="py-4.5 px-6 font-bold text-slate-900 bg-[#0055DA]/[0.02]">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black">
                      ✓ ₹0 Per-Seat Fee.
                    </span>{" "}
                    Unlimited users with zero recurring license penalties.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4.5 px-6 font-black text-slate-900">Standard Operating Procedure Fit</td>
                  <td className="py-4.5 px-6 text-slate-600">Forces your operations to adapt to rigid, pre-built templates and generic modules.</td>
                  <td className="py-4.5 px-6 font-bold text-slate-900 bg-[#0055DA]/[0.02]">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black">
                      ✓ 100% Bespoke.
                    </span>{" "}
                    Code and database schemas are tailored specifically to your company workflows.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4.5 px-6 font-black text-slate-900">Data Ownership & Privacy</td>
                  <td className="py-4.5 px-6 text-slate-600">Company data resides in shared multi-tenant clouds subject to foreign data regulations.</td>
                  <td className="py-4.5 px-6 font-bold text-slate-900 bg-[#0055DA]/[0.02]">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black">
                      ✓ 100% Data Sovereignty.
                    </span>{" "}
                    Deployed in your private AWS VPC / cloud with full database access.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4.5 px-6 font-black text-slate-900">Indian Compliance & GST Sync</td>
                  <td className="py-4.5 px-6 text-slate-600">Requires expensive third-party connector plugins and manual monthly reconciliation.</td>
                  <td className="py-4.5 px-6 font-bold text-slate-900 bg-[#0055DA]/[0.02]">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black">
                      ✓ Native Automation.
                    </span>{" "}
                    Automated GST e-invoicing, E-way bills, and Tally synchronization built-in.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4.5 px-6 font-black text-slate-900">System Customization & APIs</td>
                  <td className="py-4.5 px-6 text-slate-600">Strict API rate limits, vendor sandboxes, and developer lock-in.</td>
                  <td className="py-4.5 px-6 font-bold text-slate-900 bg-[#0055DA]/[0.02]">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black">
                      ✓ Open Architecture.
                    </span>{" "}
                    High-throughput REST/GraphQL webhooks, custom microservices, and AI integrations.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4.5 px-6 font-black text-slate-900">Intellectual Property Rights</td>
                  <td className="py-4.5 px-6 text-slate-600">You rent software; the vendor owns the source code and platform features.</td>
                  <td className="py-4.5 px-6 font-bold text-slate-900 bg-[#0055DA]/[0.02]">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black">
                      ✓ Full IP Ownership.
                    </span>{" "}
                    All custom source code and database repositories belong to your business.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* REGIONAL & INDUSTRY SOLUTIONS */}
        <section id="industries" className="mb-20 md:mb-28">
          <div className="text-center mb-16">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Regional Business Solutions</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-black text-[#0F172A] tracking-tight leading-tight">
              Engineered for Core Industrial & Commercial Corridors
            </h2>
            <p className="text-[#111111] text-sm sm:text-base max-w-[650px] mx-auto mt-4 leading-relaxed font-medium">
              We understand the local operating realities of businesses across Bhayandar, Thane, and the Greater Mumbai Metropolitan Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-[#635BFF]/30 hover:shadow-md transition-all">
              <div>
                <span className="inline-block px-3 py-1 bg-[#635BFF]/[0.08] text-[#635BFF] text-[0.68rem] font-black uppercase tracking-wider rounded-md mb-4">
                  Bhayandar & Vasai Corridor
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-3">Manufacturing, Fabrication & Hardware</h3>
                <p className="text-[#111111] text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  Tailored solutions for local factories, sheet metal fabricators, plastics manufacturers, and export units.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-6">
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Multi-level Bill of Materials (BOM)</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Shop-floor batch production & job cards</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Multi-godown stock replenishment & scrap tracking</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Automated GST e-way bill & e-invoicing generation</li>
                </ul>
              </div>
              <Link href="/locations/bhayandar" className="text-xs font-bold text-[#0055DA] hover:underline flex items-center gap-1">
                Explore Local Manufacturing Systems ➔
              </Link>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-[#635BFF]/30 hover:shadow-md transition-all">
              <div>
                <span className="inline-block px-3 py-1 bg-[#0055DA]/[0.08] text-[#0055DA] text-[0.68rem] font-black uppercase tracking-wider rounded-md mb-4">
                  Thane & Mira Road Hubs
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-3">Real Estate, Clinics & Professional Services</h3>
                <p className="text-[#111111] text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  High-converting lead management and client operations engines designed for service agencies and high-velocity sales teams.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-6">
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Real-time multi-channel lead ingestion (Meta, Google Ads, Portals)</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Automated WhatsApp qualification & follow-up cadences</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Channel partner / broker commission management</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Strict role-based permissions (sales agent vs manager view)</li>
                </ul>
              </div>
              <Link href="/locations/mira-road" className="text-xs font-bold text-[#0055DA] hover:underline flex items-center gap-1">
                Explore Service & Sales CRM Systems ➔
              </Link>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-[#635BFF]/30 hover:shadow-md transition-all">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500/[0.08] text-emerald-600 text-[0.68rem] font-black uppercase tracking-wider rounded-md mb-4">
                  Greater Mumbai & Logistics
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-3">Wholesale, Trading & B2B Distribution</h3>
                <p className="text-[#111111] text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  High-throughput inventory synchronization and automated financial reconciliation for FMCG, pharmaceuticals, and industrial suppliers.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-6">
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Sub-second multi-warehouse inventory visibility</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Customer-specific pricing tiers and automated credit limits</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Dispatch order validation & courier API tracking</li>
                  <li className="flex items-center gap-2"><span className="text-[#0055DA]">✔</span> Tally ERP 9 / Prime two-way data reconciliation</li>
                </ul>
              </div>
              <Link href="/contact" className="text-xs font-bold text-[#0055DA] hover:underline flex items-center gap-1">
                Consult on Distribution Architecture ➔
              </Link>
            </div>
          </div>
        </section>

        {/* HIGH-CONVERTING ENTERPRISE CTA SECTION */}
        <section id="cta-enterprise" className="mb-20 md:mb-28 relative">
          <div className="relative rounded-[40px] bg-[#020713] p-10 sm:p-16 text-center text-white overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#635BFF] opacity-15 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0055DA] opacity-15 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />

            <div className="relative z-10 max-w-[720px] mx-auto">
              <span className="inline-block bg-white/[0.08] text-white border border-white/15 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Direct Engineering Partnership
              </span>

              <h2 className="text-2xl sm:text-[2.5rem] font-black tracking-tight leading-tight mb-5 text-white">
                Eliminate Software Lock-In & Automate Your Operations
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8 font-medium">
                Speak directly with an enterprise database architect. We evaluate your operational bottlenecks, calculate your 3-year Total Cost of Ownership savings, and outline a phased deployment roadmap.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-9 py-4 bg-[#0055DA] hover:bg-[#0044B3] shadow-[0_6px_25px_rgba(0,85,218,0.35)] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] text-xs uppercase tracking-widest"
                >
                  Book Technical Scoping Call
                </Link>
                <a
                  href="https://wa.me/919022641867?text=Hello%20V2%20Labs%20Global,%20I%20would%20like%20to%20consult%20on%20a%20Custom%20ERP%20/%20CRM%20system%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_6px_20px_rgba(37,211,102,0.3)] text-xs uppercase tracking-widest"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Instant WhatsApp Consultation
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[0.72rem] text-slate-400 font-semibold">
                <span>✓ Mutual Non-Disclosure Agreement (NDA) Protected</span>
                <span>✓ Direct Technical Architecture Lead (No Sales Middlemen)</span>
                <span>✓ Comprehensive Systems & Data Feasibility Audit</span>
              </div>
            </div>
          </div>
        </section>

        {/* AEO-OPTIMIZED FAQ SECTION (Exact Schema Match) */}
        <section id="faq" className="mb-20 md:mb-28">
          <div className="text-center mb-16">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Direct Answers</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-black text-[#0F172A] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#111111] text-sm sm:text-base max-w-[600px] mx-auto mt-4 leading-relaxed font-medium">
              Technical, architectural, and commercial insights into bespoke ERP and CRM engineering.
            </p>
          </div>

          <FaqSection items={[
            {
              question: "What is custom ERP and CRM software development?",
              answer: "Custom ERP and CRM development involves engineering bespoke, proprietary software architectures designed specifically around an organization's unique operational workflows, data structures, and business logic. Unlike off-the-shelf software with rigid templates, custom systems offer zero per-seat licensing fees, total data ownership, and seamless integration with existing tools."
            },
            {
              question: "How much does custom ERP/CRM development cost for an enterprise or SME?",
              answer: "Custom ERP and CRM investments depend on scope, database complexity, workflow automation, and third-party integrations. Foundational modular systems typically range between ₹1,50,000 to ₹3,50,000, while multi-warehouse, automated enterprise platforms with advanced role-based access control and legacy migrations range from ₹5,00,000 to ₹15,00,000+ with zero ongoing user license penalties."
            },
            {
              question: "Why choose custom ERP/CRM over off-the-shelf platforms like Zoho, Salesforce, or SAP?",
              answer: "Off-the-shelf platforms impose compounding monthly per-user subscription fees, lock proprietary data inside third-party ecosystems, and force teams to adapt to rigid interfaces. A custom ERP/CRM engineered by V2 Labs Global eliminates recurring per-seat licensing, adapts 100% to your company's Standard Operating Procedures (SOPs), and provides complete IP and source code ownership."
            },
            {
              question: "Can custom ERP integrate with GST, e-invoicing, and Indian accounting workflows?",
              answer: "Yes. V2 Labs Global builds native integrations with GST portals, automated e-invoicing, E-way bill generation, Tally data synchronization, and payment gateways like Razorpay, ensuring seamless regulatory compliance for Indian and international trade."
            },
            {
              question: "How long does it take to deploy a custom ERP or CRM system?",
              answer: "Development typically follows an agile, phased delivery model. Core functional modules (MVP) are deployed within 4 to 6 weeks for user validation. Complete enterprise-wide multi-module architectures with data migration, QA stress testing, and staff onboarding are deployed in 10 to 16 weeks."
            },
            {
              question: "Who owns the source code and database in a custom V2 Labs Global deployment?",
              answer: "The client retains 100% intellectual property (IP), source code, and database ownership. Systems are deployed directly inside the client's private cloud infrastructure (AWS, DigitalOcean, or private VPC), guaranteeing zero vendor lock-in."
            }
          ]} />
        </section>

        <RelatedServiceLinks
          currentSlug="erp-crm"
          heading="Guide ERP and CRM visitors into neighboring commercial pages"
          description="Operations-focused users often need CRM delivery, AI automation, SaaS layers, and digital marketing support together. This cross-link block keeps those paths visible."
        />
      </div>
    </div>
  );
}
