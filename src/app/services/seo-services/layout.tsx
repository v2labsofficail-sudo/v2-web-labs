import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SEO Services & Organic Growth Mumbai",
  description:
    "Performance SEO company in Mira Bhayandar & Mumbai. Technical SEO audits, local Google Map pack optimization, schema markup, and organic lead generation.",
  path: "/services/seo-services",
  keywords: [
    "SEO Services",
    "SEO company in Mira Bhayandar",
    "Best web development company in Mumbai",
    "Technical SEO audit",
    "Local SEO Mumbai",
    "Generative Engine Optimization GEO",
    "Answer Engine Optimization AEO",
  ],
});

const faqs = [
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
];

export default function SeoServicesLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SEO Services", path: "/services/seo-services" },
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
