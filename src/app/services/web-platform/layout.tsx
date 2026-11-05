import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Design, WordPress, Shopify & Web Development Services",
  description:
    "V2 Labs Global delivers custom website design, responsive web development, WordPress solutions, and Shopify e-commerce platforms engineered for speed, conversions, and high search ranking.",
  path: "/services/web-platform",
  keywords: [
    "Website development company in Mira Bhayandar",
    "Website development company in Bhayandar",
    "Web development company in Bhayandar East",
    "Website designing company in Mira Bhayandar",
    "Website designer in Bhayandar",
    "WordPress development company",
    "Shopify development company",
    "custom website development",
    "responsive website design",
    "corporate website development",
    "small business website design",
    "landing page development",
    "Next.js development company",
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
      question: "Which technologies do you use for website development?",
      answer: "We develop on modern frameworks including Next.js (React 19), TypeScript, Tailwind CSS, Node.js, as well as customized WordPress CMS and Shopify e-commerce platforms based on your project requirements."
    },
    {
      question: "Will my website be mobile-friendly and search engine optimized?",
      answer: "Yes, every website we build is 100% mobile-responsive, engineered for sub-second Core Web Vitals, and built with semantic HTML5, localized schema markup, and metadata structured for Google and AI search engines."
    },
    {
      question: "Do you build custom WordPress and Shopify stores?",
      answer: "Yes, we build bespoke WordPress themes and plugins for corporate brands, as well as high-converting Shopify stores with custom liquid sections, checkout optimizations, and inventory sync."
    },
    {
      question: "Can you redesign our existing business website without losing SEO rankings?",
      answer: "Absolutely. We execute structured website redesigns with complete 301 redirect mappings, canonical link preservation, and improved page speeds, ensuring you retain and grow your organic traffic."
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
