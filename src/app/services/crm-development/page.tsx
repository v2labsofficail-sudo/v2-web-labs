import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CrmDevelopmentPage() {
  return (
    <ServiceDetailTemplate
      badge="Custom CRM Architecture"
      h1="Custom CRM Software Development Services in Mumbai"
      subtitle="Bespoke Customer Relationship Management software featuring automated sales pipelines, WhatsApp API integration, and real-time deal closing analytics."
      intro="Losing track of inbound leads, forgetting follow-ups, and managing client histories across fragmented chat threads directly limits sales revenue. V2 Labs Global develops bespoke CRM software tailored for B2B service agencies, real estate developers, educational institutes, and manufacturing sales teams across Mumbai and Mira Bhayandar, engineering streamlined pipelines that close more deals faster."
      capabilities={[
        {
          title: "Multi-Channel Lead Ingestion",
          desc: "Automatically capture and deduplicate leads from Facebook/Instagram Ads, Google Ads, website inquiry forms, Indiamart, Justdial, and phone calls.",
          badge: "Lead Capture"
        },
        {
          title: "Visual Kanban Sales Pipelines",
          desc: "Drag-and-drop opportunity tracking customized to your exact sales stages: initial call, demo scheduled, quotation sent, negotiation, and closed-won.",
          badge: "Pipeline Control"
        },
        {
          title: "Native WhatsApp Cloud API Integration",
          desc: "Send automated instant welcome templates, quotation PDFs, payment reminders, and chat with leads directly through a shared multi-agent inbox.",
          badge: "WhatsApp Business"
        },
        {
          title: "Automated Follow-Up Sequences",
          desc: "Never let a prospect go cold with automated SMS, WhatsApp, and email drip reminders triggered when deals remain idle for more than 48 hours.",
          badge: "Automated Drip"
        },
        {
          title: "Quotation & Proposal Generator",
          desc: "Generate professional, GST-compliant PDF quotations and proposals in under 60 seconds with digital signature capture and client viewing analytics.",
          badge: "Fast Quotes"
        },
        {
          title: "Sales Rep Performance & Commission Tracking",
          desc: "Real-time leaderboards, call volume logs, target achievement percentages, and automated monthly sales commission calculations.",
          badge: "Team Accountability"
        }
      ]}
      benefits={[
        {
          title: "Zero Per-Seat Monthly Fees",
          desc: "Empower your entire sales and support team without worrying about escalating monthly subscription bills."
        },
        {
          title: "Instant Response Time (<60 Seconds)",
          desc: "Automated WhatsApp and SMS notifications assign new inquiries to active sales reps instantly, increasing conversion probability by up to 391%."
        },
        {
          title: "Total Client History Visibility",
          desc: "Every call note, WhatsApp interaction, past quotation, and payment status stored in one unified timeline."
        },
        {
          title: "Customized for Indian Sales Workflows",
          desc: "Built-in support for Hindi/Marathi/Gujarati communication preferences, Indian mobile number verification, and local payment links."
        }
      ]}
      process={[
        { step: "01", title: "Sales Funnel Audit", desc: "Mapping your current lead sources, qualification criteria, and follow-up stages." },
        { step: "02", title: "Pipeline & Data Modeling", desc: "Structuring database schemas, custom fields, and role-based permissions." },
        { step: "03", title: "Development & Integrations", desc: "Building the CRM dashboard and connecting Meta Ads, WhatsApp API, and telephony webhooks." },
        { step: "04", title: "Pilot Sales Team Testing", desc: "Running a controlled test with your top sales reps to refine UI speed and notification alerts." },
        { step: "05", title: "Company-Wide Rollout", desc: "Migrating legacy contacts, conducting staff training, and enabling executive monitoring dashboards." }
      ]}
      techStack={["Next.js", "React 19", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Prisma ORM", "Redis", "Tailwind CSS"]}
      faqs={[
        {
          question: "Why choose custom CRM software over Salesforce or HubSpot?",
          answer: "Salesforce and HubSpot charge steep monthly per-user subscriptions that escalate rapidly as your sales team expands. A custom CRM built by V2 Labs Global gives you unlimited users, tailored pipeline stages, direct WhatsApp API automations, and zero recurring seat fees."
        },
        {
          question: "Can your custom CRM integrate with WhatsApp for automated lead follow-ups?",
          answer: "Yes, we integrate official WhatsApp Business Cloud APIs directly into the CRM. When a lead submits an inquiry, an automated personalized message is dispatched, and your sales reps can chat directly from inside the CRM inbox."
        },
        {
          question: "How does the CRM capture leads from Meta Ads, Google Ads, and our website?",
          answer: "We connect instant webhooks from Meta Lead Forms, Google Ads, Indiamart, Justdial, and your website forms so incoming leads land in the CRM within seconds with automated sales executive assignment."
        },
        {
          question: "Can field sales executives use the CRM on their smartphones?",
          answer: "Yes, our custom CRM is fully responsive and mobile-friendly, with geo-tagged check-ins, click-to-call recording logs, and instant quotation dispatch on mobile devices."
        }
      ]}
      currentSlug="crm-development"
    />
  );
}
