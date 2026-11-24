import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Development Company in Mumbai",
  description:
    "V2 Labs Global builds high-speed custom websites in Mumbai & Mira Bhayandar using Next.js, React, and TypeScript. Sub-second Core Web Vitals and top SEO ranking.",
  path: "/services/website-development",
  keywords: [
    "Website Development Company in Mumbai",
    "Web Development Company in Mira Bhayandar",
    "Custom Website Development",
    "Next.js Development Company",
    "React Web Development",
    "Corporate Website Design",
    "Small Business Website Development",
  ],
});

const faqs = [
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
];

export default function WebsiteDevelopmentLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Website Development", path: "/services/website-development" },
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
