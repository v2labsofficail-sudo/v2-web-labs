import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Custom CRM Software Development Services",
  description:
    "Custom CRM software development company in Mumbai & Mira Bhayandar. Automated sales pipelines, lead management, WhatsApp integrations, and deal analytics.",
  path: "/services/crm-development",
  keywords: [
    "CRM Software Development",
    "Custom CRM Development",
    "CRM software company Mumbai",
    "Lead management software Bhayandar",
    "Sales pipeline CRM",
    "WhatsApp integrated CRM",
  ],
});

const faqs = [
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
];

export default function CrmDevelopmentLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "CRM Development", path: "/services/crm-development" },
  ]);

  const faqJson = buildFaqJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
