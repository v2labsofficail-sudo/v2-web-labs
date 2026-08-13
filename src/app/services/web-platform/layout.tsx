import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Web Development Company | Custom Web Platforms & Next.js",
  description:
    "Custom web development company building high-performance Next.js platforms, React web applications, and headless commerce systems. Get a project estimate.",
  path: "/services/web-platform",
  keywords: [
    "web development company",
    "custom web development",
    "Next.js development company",
    "React development company",
    "web application development",
    "enterprise web development",
    "high performance web development",
    "headless commerce development",
  ],
});

export default function WebPlatformLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Web Development Services", path: "/services/web-platform" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "What technologies do you use for web development?",
      answer: "We primarily utilize React 19, Next.js (App Router), TypeScript, Tailwind CSS, Node.js, Express, NestJS, and PostgreSQL to construct secure, type-safe, and search-optimized web applications."
    },
    {
      question: "Will my website be mobile-friendly and search engine optimized?",
      answer: "Yes, every platform we deploy is custom-coded using semantic HTML5, lazy loading, lightweight styling sheets, and responsive flex grid containers. This ensures 100/100 Lighthouse performance and flawless mobile renders."
    },
    {
      question: "Do you provide headless e-commerce development?",
      answer: "Yes, we specialize in building headless e-commerce systems by integrating Shopify, Strapi, or custom content engines with Next.js frontends to deliver sub-second product pages and frictionless checkout."
    },
    {
      question: "Can you migrate a legacy website to a modern tech stack?",
      answer: "Absolutely. We migrate legacy WordPress, PHP, or React sites to Next.js while preserving indexing value using proper 301 redirection maps and canonical headers alignment."
    }
  ]);

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

