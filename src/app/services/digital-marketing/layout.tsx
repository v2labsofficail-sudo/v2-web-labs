import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SEO, Performance Marketing, Google Ads & Digital Marketing Agency",
  description:
    "Data-driven SEO, GEO, AEO, Google & Meta Ads management, and social media growth marketing engineered by V2 Labs Global to drive qualified local and global leads.",
  path: "/services/digital-marketing",
  keywords: [
    "Digital marketing agency in Mira Bhayandar",
    "Digital marketing company in Mira Bhayandar",
    "Digital marketing agency in Bhayandar",
    "SEO services in Bhayandar",
    "SEO company in Mira Bhayandar",
    "Local SEO services",
    "SEO agency in Mumbai",
    "Social media marketing agency",
    "Google Ads management",
    "Meta Ads management",
    "Performance marketing agency",
    "Lead generation services",
    "Generative Engine Optimization GEO",
    "Answer Engine Optimization AEO",
  ],
});

export default function DigitalMarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "How does V2 Labs Global approach SEO and digital marketing?",
      answer: "We engineer a full-funnel approach combining technical SEO, localized keyword architecture, content authority, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and performance-focused paid acquisition (Google Ads and Meta Ads)."
    },
    {
      question: "What is Answer Engine Optimization (AEO) and GEO?",
      answer: "AEO prepares your website to be directly extracted and featured as answers in AI search tools like Google AI Overviews and Perplexity. GEO structures your brand entities, citations, and schemas so generative LLMs (ChatGPT, Gemini, Claude) accurately recognize and recommend your business."
    },
    {
      question: "How quickly can we see results from organic SEO?",
      answer: "Technical and local SEO fixes often generate initial ranking movement and impression gains within 30 to 60 days. Comprehensive competitive keyword dominance and sustained organic leads typically accelerate significantly between months 3 to 6."
    },
    {
      question: "Do you manage Google Ads and Meta Ads campaigns?",
      answer: "Yes, we run high-ROI performance marketing campaigns with dedicated conversion tracking, negative keyword filtering, audience segmentation, and custom-designed landing pages to maximize qualified lead generation."
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
