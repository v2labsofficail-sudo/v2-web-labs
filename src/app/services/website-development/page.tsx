import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function WebsiteDevelopmentPage() {
  return (
    <ServiceDetailTemplate
      badge="Custom Website Architecture"
      h1="Custom Website Development Company in Mumbai"
      subtitle="Engineered with Next.js, React & TypeScript for sub-second page speed, flawless responsive layouts, and organic search engine dominance."
      intro="At V2 Labs Global, we design and build bespoke business websites that combine modern aesthetics with high-velocity web engineering. Based in Bhayandar East, Mira Bhayandar, we help small businesses, established enterprises, and growing startups across Mumbai and Maharashtra transform their web presence into high-converting revenue drivers."
      capabilities={[
        {
          title: "Next.js & React Engineering",
          desc: "Server-side rendered (SSR) and statically generated (SSG) web applications built for blazing-fast speed and effortless Google crawlability.",
          badge: "Modern Architecture"
        },
        {
          title: "Responsive Mobile-First UI/UX",
          desc: "Precision mobile layouts crafted with Tailwind CSS that look stunning and convert visitors smoothly across smartphones, tablets, and desktops.",
          badge: "Conversion Design"
        },
        {
          title: "Technical SEO & Schema Integration",
          desc: "Semantic HTML5, automated XML sitemaps, structured JSON-LD schemas, and Open Graph metadata built in from day one.",
          badge: "Search Dominance"
        },
        {
          title: "Headless CMS Integration",
          desc: "Connect your frontend to Sanity, Strapi, or headless WordPress, giving your marketing team intuitive content editing without sacrificing performance.",
          badge: "Content Velocity"
        },
        {
          title: "High-Converting Landing Pages",
          desc: "Bespoke campaign funnels engineered for maximum lead generation, integrating directly with your CRM and analytics dashboards.",
          badge: "Lead Funnels"
        },
        {
          title: "Core Web Vitals Optimization",
          desc: "Sub-second LCP, zero layout shifts (CLS < 0.1), and rapid user interaction (INP < 200ms) for superior Google ranking signals.",
          badge: "Performance First"
        }
      ]}
      benefits={[
        {
          title: "Sub-Second Loading Speeds",
          desc: "Faster websites rank higher on Google and keep visitors engaged. Our clean React code avoids bloated plugins and slow third-party scripts."
        },
        {
          title: "Full Source Code Ownership",
          desc: "No proprietary lock-in. You own 100% of your code repository, digital assets, and hosting configurations."
        },
        {
          title: "Direct Access to Senior Engineers",
          desc: "Work directly with full-stack engineers and designers located in Mira Bhayandar, ensuring seamless collaboration and rapid sprint cycles."
        },
        {
          title: "Scalable Cloud Architecture",
          desc: "Deploy on AWS, Vercel, or custom VPS with automated CI/CD pipelines, SSL encryption, and global CDN edge distribution."
        }
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "Aligning on brand vision, target audience, technical specifications, and key conversion metrics." },
        { step: "02", title: "UI/UX Wireframes", desc: "Interactive Figma prototypes and responsive design systems built for approval." },
        { step: "03", title: "Development", desc: "Clean TypeScript and React development with API integrations and database wiring." },
        { step: "04", title: "QA & SEO Audit", desc: "Rigorous cross-browser testing, accessibility validation, and technical SEO verification." },
        { step: "05", title: "Launch & Support", desc: "Zero-downtime production deployment, Google Search Console submission, and ongoing maintenance." }
      ]}
      techStack={["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Node.js", "PostgreSQL", "Vercel", "Cloudflare"]}
      faqs={[
        {
          question: "What technologies do you use for custom website development?",
          answer: "We engineer websites using modern, high-performance frameworks including Next.js (React 19), TypeScript, Tailwind CSS, and Node.js backend APIs, ensuring sub-second page loads and zero technical debt."
        },
        {
          question: "Will my website be mobile-responsive and optimized for Core Web Vitals?",
          answer: "Yes, every website we build is 100% mobile-first and strictly adheres to Google Core Web Vitals standards with LCP under 2.5s, CLS below 0.1, and sub-200ms INP response times."
        },
        {
          question: "Can you migrate our existing slow website to Next.js without losing search rankings?",
          answer: "Absolutely. We manage zero-downtime migrations with rigorous 301 URL redirect mapping, canonical preservation, and structured schema implementation to protect and increase your search traffic."
        },
        {
          question: "How long does a custom business website take to build?",
          answer: "Standard business websites typically launch within 2 to 4 weeks. Complex enterprise web platforms with custom databases and API integrations take 4 to 8 weeks."
        }
      ]}
      currentSlug="website-development"
    />
  );
}
