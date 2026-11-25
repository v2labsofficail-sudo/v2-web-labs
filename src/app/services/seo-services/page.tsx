import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function SeoServicesPage() {
  return (
    <ServiceDetailTemplate
      badge="Search Engine Optimization (SEO)"
      h1="Performance SEO & Search Optimization in Mumbai"
      subtitle="Technical SEO audits, local Google 3-Pack optimization, schema markup architecture, and Generative Engine Optimization (GEO)."
      intro="Having a modern website is only half the battle. If potential clients cannot find your services on Google, your competitors win the business. V2 Labs Global delivers performance-driven SEO and search engine optimization in Mira Bhayandar, Mumbai, and pan-India, turning organic search into your most consistent, cost-effective customer acquisition channel."
      capabilities={[
        {
          title: "Technical SEO Audits & Remediation",
          desc: "Resolving crawl anomalies, broken redirects, canonical conflicts, duplicate hreflang tags, schema errors, and Core Web Vitals bottlenecks.",
          badge: "Technical SEO"
        },
        {
          title: "Local SEO & Google Business Profile (GBP)",
          desc: "Dominating local search in Mira Bhayandar, Thane, and Mumbai with optimized GBP listings, local citations, and geo-targeted schema.",
          badge: "Local 3-Pack"
        },
        {
          title: "Structured Data & JSON-LD Schemas",
          desc: "Implementing Organization, LocalBusiness, Service, Breadcrumb, and FAQ schemas to capture rich Google snippets and search visibility.",
          badge: "Schema Engineering"
        },
        {
          title: "Generative Engine Optimization (GEO & AEO)",
          desc: "Optimizing your content structure, entity relationships, and authoritativeness so AI engines like ChatGPT, Perplexity, and Google AI Overviews cite you.",
          badge: "AI Search Ready"
        },
        {
          title: "Commercial Keyword Research & Content Strategy",
          desc: "Identifying high-intent, bottom-of-funnel keywords that target customers actually searching to buy your services right now.",
          badge: "Revenue Keywords"
        },
        {
          title: "Ethical Backlink & Digital PR Outreach",
          desc: "Earning genuine, editorial backlinks from industry directories, tech publications, and regional business associations without spam link schemes.",
          badge: "Authority Building"
        }
      ]}
      benefits={[
        {
          title: "Sustainable Long-Term Leads",
          desc: "Unlike paid ads that stop delivering the moment your daily ad budget runs out, strong organic search rankings generate qualified leads 24/7."
        },
        {
          title: "Lower Customer Acquisition Cost (CAC)",
          desc: "Organic search leads boast higher conversion rates and near-zero marginal cost per acquisition compared to pay-per-click bidding wars."
        },
        {
          title: "Local Search Dominance Across Mumbai",
          desc: "Capture high-intent queries across Mira Bhayandar, Vasai, Virar, Borivali, Andheri, and South Mumbai with precision local targeting."
        },
        {
          title: "Transparent Weekly KPI Reporting",
          desc: "Direct access to Google Search Console analytics, rank movements, organic impression gains, and verified inbound lead conversions."
        }
      ]}
      process={[
        { step: "01", title: "Comprehensive SEO Audit", desc: "Crawling your entire website to pinpoint technical errors, thin content, missing tags, and indexation gaps." },
        { step: "02", title: "Keyword & Entity Mapping", desc: "Discovering high-value search queries and assigning them to dedicated, high-intent landing pages." },
        { step: "03", title: "On-Page & Schema Implementation", desc: "Optimizing H1s, meta tags, heading hierarchies, content depth, image alt tags, and JSON-LD markup." },
        { step: "04", title: "Local Citations & Authority", desc: "Verifying Google Business Profile and establishing consistent NAP citations across top business portals." },
        { step: "05", title: "Rank Tracking & Optimization", desc: "Monitoring Google Search Console performance, evaluating CTR improvements, and iterating." }
      ]}
      techStack={["Google Search Console", "Google Analytics 4", "Schema.org JSON-LD", "Ahrefs / Semrush", "Screaming Frog", "PageSpeed Insights"]}
      faqs={[
        {
          question: "How long does it take to see tangible organic traffic results from SEO?",
          answer: "Technical fixes (fixing crawl errors, sitemaps, indexation, Core Web Vitals) often produce positive ranking signals within 2 to 4 weeks. Sustained keyword dominance and organic lead generation typically take 3 to 6 months of systematic content and authority building."
        },
        {
          question: "What is Technical SEO and why is it essential?",
          answer: "Technical SEO ensures search engines can crawl, render, index, and understand your website effortlessly. It covers server response speed, mobile responsiveness, semantic HTML structure, canonical integrity, XML sitemaps, and JSON-LD structured data."
        },
        {
          question: "How do you optimize our business for local searches in Mira Bhayandar and Mumbai?",
          answer: "We optimize your Google Business Profile (GBP), ensure consistent Name-Address-Phone (NAP) citations across local directories, embed localized LocalBusiness schema, and target geographic search queries across Mumbai, Thane, and Maharashtra."
        },
        {
          question: "What is Generative Engine Optimization (GEO) & Answer Engine Optimization (AEO)?",
          answer: "GEO and AEO optimize your digital presence so AI answer engines like Google AI Overviews, Perplexity, and ChatGPT recognize and cite your brand as an authoritative reference in AI-generated answers."
        }
      ]}
      currentSlug="seo-services"
    />
  );
}
