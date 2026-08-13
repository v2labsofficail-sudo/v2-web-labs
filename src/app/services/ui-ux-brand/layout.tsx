import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "UI UX Design Services | Product Design & Design Systems",
  description:
    "Premium UI UX design services, visual identity systems, and Figma prototyping. We build conversion-led user interfaces optimized for web applications.",
  path: "/services/ui-ux-brand",
  keywords: [
    "UI UX design services",
    "product design",
    "SaaS UI UX design",
    "web application UI UX",
    "UX design services",
    "design systems",
    "digital product design",
    "Figma prototyping",
  ],
});

export default function UiUxBrandLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "UI/UX & Branding", path: "/services/ui-ux-brand" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "What does your UI UX design process look like?",
      answer: "We follow a 4-step workflow: research and wireframing, high-fidelity UI design in Figma, clickable prototyping, and asset compilation ready for front-end engineers."
    },
    {
      question: "Do you build custom design systems?",
      answer: "Yes, we construct scalable design systems in Figma including spacing rules, color palettes, typography, responsive grids, and modular button/input component libraries."
    },
    {
      question: "Do you design responsive web applications?",
      answer: "Absolutely. Every interface we design is responsive and optimized for touch interactions on mobile as well as hover triggers on desktop."
    },
    {
      question: "Can you prototype using Figma?",
      answer: "Yes, we create clickable, high-fidelity prototypes in Figma to let you simulate user journeys and animations before writing a single line of code."
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

