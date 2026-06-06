"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";


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
    <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
    <svg className="w-5 h-5 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  Server: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
      <line x1="10" y1="6" x2="14" y2="6" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </svg>
  ),
  Key: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="M21 3L11.5 12.5" />
      <path d="M16 8l3 3" />
      <path d="M13 5l3 3" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Truck: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Users: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Wallet: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  ),
  Sync: () => (
    <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.57-1.19" />
    </svg>
  ),
  Alert: () => (
    <svg className="w-4 h-4 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
      <div className="absolute top-[45%] right-[-10%] w-[600px] h-[600px] bg-[#1161ed]/[0.02] rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse duration-[8s]" />

      <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
        
        
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20 md:mb-28">
          
          <div className="lg:col-span-7 flex flex-col text-left items-start">
            <div className="inline-flex items-center gap-2 bg-[#635BFF]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#635BFF] tracking-[0.15em] mb-8 border border-[#635BFF]/20 shadow-[0_2px_10px_rgba(99,91,255,0.05)]">
              <span className="w-2 h-2 bg-[#635BFF] rounded-full animate-ping"></span>
              Operational Control
            </div>
            <h1 className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-black leading-[1.1] text-[#0F172A] mb-8 tracking-tight">
              Intelligent ERP & CRM systems <span className="bg-gradient-to-r from-[#635BFF] to-[#1161ed] bg-clip-text text-transparent">engineered for operational dominance.</span>
            </h1>
            <p className="text-[#64748B] text-base sm:text-[1.1rem] leading-[1.7] max-w-[620px] mb-12">
              From workflow automation to secure database warehouses, V2 Labs designs, codes, and deploys high-performance internal tools that eliminate operational friction and save overhead.
            </p>
            
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4.5 bg-gradient-to-r from-[#635BFF] to-[#1161ed] hover:from-[#5145CD] hover:to-[#0c4ec3] shadow-[0_8px_25px_rgba(99,91,255,0.22)] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.02] text-[0.95rem] text-center cursor-pointer"
              >
                Start Your System
              </Link>
              <a 
                href="#architecture" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#635BFF]/20 hover:border-[#635BFF]/50 text-slate-800 font-extrabold rounded-full transition-all duration-300 hover:bg-slate-50 shadow-sm text-[0.95rem] text-center cursor-pointer"
              >
                View Data Architecture
              </a>
            </div>
          </div>

          
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-[#635BFF]/10 to-[#1161ed]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
            
            
            <div className="w-full max-w-[440px] rounded-3xl border border-[#635BFF]/10 bg-white shadow-[0_25px_60px_rgba(99,91,255,0.08)] overflow-hidden hover:-translate-y-1 transition-all duration-300">
              
              
              <div className="flex items-center justify-between bg-slate-50/80 border-b border-slate-100 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444] shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308] shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e] shadow-sm" />
                </div>
                <div className="w-[180px] bg-white border border-slate-200/50 rounded-lg py-1 px-3 text-[0.62rem] text-slate-400 font-medium text-center truncate shadow-inner">
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
                  <span className="text-[0.62rem] font-bold uppercase text-slate-400 tracking-widest block mb-2.5">Live Lead Ingestion Queue</span>
                  
                  
                  <div className="flex flex-col gap-2">
                    {leadList.map((lead) => (
                      <div key={lead.id} className="flex items-center justify-between text-xs border-b border-white/5 pb-1.5 last:border-b-0 last:pb-0">
                        <div className="flex flex-col min-w-0">
                          <span className="font-extrabold text-white truncate">{lead.name}</span>
                          <span className="text-[0.58rem] text-slate-400">{lead.source}</span>
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
                      className="inline-flex items-center gap-4 px-6.5 py-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:border-[#635BFF]/20 hover:bg-white transition-all duration-300"
                    >
                      <span className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">{tech.icon}</span>
                      <div className="text-left">
                        <span className="text-[0.88rem] font-black text-slate-850 block leading-tight">{tech.name}</span>
                        <span className="text-[0.68rem] font-bold text-slate-400 block mt-0.5">{tech.desc}</span>
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
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
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
                  <p className="text-[#64748B] text-xs leading-relaxed">{p.desc}</p>
                </div>
                
                
                <div className="h-[3px] w-0 bg-gradient-to-r from-[#635BFF] to-[#1161ed] rounded-full mt-5 group-hover:w-[40px] transition-all duration-300" />
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
              <p className="text-[#64748B] text-sm sm:text-base leading-[1.65] mb-10">
                Most agencies hide their technical designs. We map out robust databases engineered to scale. Our platforms feature isolated local variables, automated rate limit rules, TLS encrypted Postgres replication tunnels, and AWS virtual isolated clouds.
              </p>

              
              <div className="flex flex-wrap gap-2.5">
                {["Encrypted Logs", "PostgreSQL Replicas", "JWT Verification", "AWS VPC Isolations", "Bulk Query Optimization"].map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full border border-slate-100 bg-white text-[0.68rem] font-extrabold uppercase text-slate-600 tracking-wider">
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
                      : "bg-white/80 border-slate-100 hover:border-[#635BFF]/30"
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
                    
                    <div className={`text-[#64748B] text-xs transition-all duration-300 ${
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
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
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
                  <p className="text-[#64748B] text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section id="showcase" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Internal Products</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              Systems Showcase
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              We deploy real, working enterprise platforms. Here are detailed visual outlines of operational suites.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1100px] mx-auto">
            
            
            <div className="p-8 rounded-[32px] border border-black/[0.03] bg-white shadow-sm hover:shadow-[0_30px_60px_rgba(99,91,255,0.08)] hover:border-[#635BFF]/20 transition-all duration-500 group flex flex-col justify-between overflow-hidden relative text-left">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#635BFF]/5 rounded-bl-full pointer-events-none -z-10" />
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[0.62rem] font-extrabold uppercase text-[#635BFF] bg-[#635BFF]/[0.08] px-3 py-1 rounded-full tracking-widest flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-ping" />
                    Automated CRM Lead Hub
                  </span>
                  <div className="flex gap-1.5">
                    {["Next.js", "FastAPI", "HubSpot API"].map((tag, i) => (
                      <span key={i} className="text-[0.55rem] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-3">V2 OpsSuite</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-6">
                  An advanced operations CRM built with rapid automated HubSpot two-way database webhooks. Eliminates sync drops and maps incoming leads instantly to account managers.
                </p>

                
                <div className="rounded-2xl border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.02)] overflow-hidden mb-6 bg-white select-none">
                  
                  
                  <div className="bg-slate-50/80 border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-sm" />
                    </div>
                    <div className="w-[140px] bg-white border border-slate-200/50 rounded py-0.5 px-2 text-[0.55rem] text-slate-400 truncate shadow-inner text-center">
                      opssuite.v2labs.co/leads
                    </div>
                    <div className="w-3.5 h-3.5" />
                  </div>

                  
                  <div className="p-4 font-sans">
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-3">
                      <span className="text-[0.68rem] font-extrabold text-[#0F172A] tracking-tight flex items-center gap-2">
                        <SVG.Users />
                        Total Active Lead Pipeline
                      </span>
                      <span className="text-[0.58rem] font-bold text-[#635BFF] bg-[#635BFF]/[0.05] px-1.5 py-0.5 rounded">HubSpot Webhook Healthy</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 flex items-center justify-between text-[0.62rem]">
                        <span className="font-bold text-slate-800">Acme Corporation (SaaS Integration)</span>
                        <span className="font-black text-[#635BFF]">$95,000</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 flex items-center justify-between text-[0.62rem]">
                        <span className="font-bold text-slate-800">Zenith Retailers (Custom ERP Bridge)</span>
                        <span className="font-black text-[#635BFF]">$42,500</span>
                      </div>
                    </div>
                  </div>

                </div>

                
                <div className="flex flex-col gap-2.5 mb-8">
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#635BFF] font-extrabold">✓</span>
                    <span>Multi-tenant secure dashboard portals</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#635BFF] font-extrabold">✓</span>
                    <span>Two-way Salesforce & HubSpot database synchronization</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#635BFF] font-extrabold">✓</span>
                    <span>Automated Slack webhooks for incoming lead values</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="block text-center bg-slate-900 group-hover:bg-[#635BFF] text-white py-3.5 rounded-xl font-bold text-sm transition-colors duration-300 shadow-sm cursor-pointer">
                Inquire About V2 OpsSuite
              </Link>
            </div>

            
            <div className="p-8 rounded-[32px] border border-black/[0.03] bg-white shadow-sm hover:shadow-[0_30px_60px_rgba(99,91,255,0.08)] hover:border-[#635BFF]/20 transition-all duration-500 group flex flex-col justify-between overflow-hidden relative text-left">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#635BFF]/5 rounded-bl-full pointer-events-none -z-10" />
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[0.62rem] font-extrabold uppercase text-[#635BFF] bg-[#635BFF]/[0.08] px-3 py-1 rounded-full tracking-widest flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-ping" />
                    Automated Inventory System
                  </span>
                  <div className="flex gap-1.5">
                    {["Next.js", "Django", "Redis DB"].map((tag, i) => (
                      <span key={i} className="text-[0.55rem] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-3">StockFlow</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-6">
                  An automated inventory tracker connecting supply chains and warehouses. Maps real-time stock deficits and automates vendor ordering webhooks under preset thresholds.
                </p>

                
                <div className="rounded-2xl border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.02)] overflow-hidden mb-6 bg-white select-none">
                  
                  
                  <div className="bg-slate-50/80 border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-sm" />
                    </div>
                    <div className="w-[140px] bg-white border border-slate-200/50 rounded py-0.5 px-2 text-[0.55rem] text-slate-400 truncate shadow-inner text-center">
                      stockflow.co/warehouse-1
                    </div>
                    <div className="w-3.5 h-3.5" />
                  </div>

                  
                  <div className="p-4 font-sans">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                      <span className="text-[0.68rem] font-extrabold text-[#0F172A] tracking-tight flex items-center gap-2">
                        <SVG.Truck />
                        Active Stock Shortages
                      </span>
                      <span className="text-[0.58rem] font-black text-[#ef4444] bg-[#ef4444]/[0.05] px-1.5 py-0.5 rounded flex items-center gap-1">
                        <SVG.Alert />
                        2 Reorders Triggered
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-2 rounded bg-red-500/[0.03] border border-red-500/10 flex flex-col justify-between text-[0.6rem] text-left">
                        <span className="font-extrabold text-slate-800">Processor Microchips</span>
                        <div className="flex justify-between items-center mt-2.5">
                          <span className="text-red-550 font-black">Stock: 14 units</span>
                          <span className="text-[0.48rem] font-bold uppercase text-white bg-red-550 px-1 rounded shadow-inner">Alert</span>
                        </div>
                      </div>
                      <div className="p-2 rounded bg-[#F8FAFC] border border-slate-100 flex flex-col justify-between text-[0.6rem] text-left">
                        <span className="font-extrabold text-slate-800">Operational Server Cases</span>
                        <div className="flex justify-between items-center mt-2.5">
                          <span className="text-slate-500 font-bold">Stock: 248 units</span>
                          <span className="text-[0.48rem] font-extrabold uppercase text-[#22c55e] bg-[#22c55e]/[0.08] px-1 rounded">Stable</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                
                <div className="flex flex-col gap-2.5 mb-8">
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#635BFF] font-extrabold">✓</span>
                    <span>Low-stock automated supplier webhooks</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#635BFF] font-extrabold">✓</span>
                    <span>Barcode & hardware scanner API hook integrations</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                    <span className="text-[#635BFF] font-extrabold">✓</span>
                    <span>Automated PDF invoice generation and Stripe triggers</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="block text-center bg-slate-900 group-hover:bg-[#635BFF] text-white py-3.5 rounded-xl font-bold text-sm transition-colors duration-300 shadow-sm cursor-pointer">
                Inquire About StockFlow
              </Link>
            </div>

          </div>
        </section>

        
        <section id="saas-features" className="mb-20 md:mb-28">
          <div className="text-center mb-20">
            <p className="text-[#635BFF] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-4">Technical Checklist</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-none">
              System Capabilities
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-[600px] mx-auto mt-5 leading-relaxed">
              We construct all essential structural database features and compliance audits into our enterprise setups.
            </p>
          </div>

          
          <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-[900px] mx-auto">
            {capabilities.map((feat, idx) => (
              <div 
                key={idx} 
                className="px-6 py-4 rounded-[20px] bg-white border border-slate-100 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#635BFF]/30 hover:shadow-[0_15px_30px_rgba(99,91,255,0.06)] group flex items-center gap-3.5 animate-fade-in"
              >
                <div className="h-[4px] w-[50%] absolute top-0 left-0 bg-gradient-to-r from-[#635BFF] to-[#1161ed] rounded-tr group-hover:w-full transition-all duration-300" />
                
                
                <div className="w-5.5 h-5.5 rounded-full bg-[#635BFF]/[0.08] flex items-center justify-center text-[0.62rem] font-black text-[#635BFF] shadow-inner select-none shrink-0 group-hover:bg-[#635BFF] group-hover:text-white transition-all duration-300">
                  ✓
                </div>
                <span className="text-slate-800 font-extrabold text-[0.84rem] sm:text-[0.92rem] tracking-tight">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        
        <section id="credibility" className="py-12 border-t border-black/[0.04] mb-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-center justify-center">
            {stats.map((st, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                <span className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-2 block bg-gradient-to-r from-[#635BFF] to-[#1161ed] bg-clip-text text-transparent">{st.value}</span>
                <span className="text-[0.68rem] font-extrabold uppercase text-slate-400 tracking-wider block max-w-[140px] leading-tight">{st.label}</span>
              </div>
            ))}
          </div>
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
