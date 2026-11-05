import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Branding, UI/UX Design & Graphic Design Agency",
  description:
    "Premium branding identity design, UI/UX product design, logo creation, and Figma design systems engineered by V2 Labs Global for conversion and brand authority.",
  path: "/services/ui-ux-brand",
  keywords: [
    "Branding agency in Mira Bhayandar",
    "Graphic design services",
    "Logo design company",
    "Brand identity design",
    "Social media post design",
    "UI UX design services",
    "UI UX design agency Mumbai",
    "product design",
    "SaaS UI UX design",
    "web application UI UX",
    "design systems",
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
      question: "What branding and design services does V2 Labs Global provide?",
      answer: "We offer comprehensive brand identity creation: custom logo design, color typography schemes, brand guidelines, social media creative templates, packaging design, and complete UI/UX Figma design systems."
    },
    {
      question: "Do you build complete Figma design systems?",
      answer: "Yes, we construct atomic design systems in Figma with standardized design tokens, accessible color contrasts, auto-layout responsive components, and clickable interaction prototypes."
    },
    {
      question: "Why is UX design important for conversion rates?",
      answer: "A well-architected user experience reduces cognitive load, clarifies value propositions, guides visitors directly to high-intent actions, and significantly lowers bounce rates."
    },
    {
      question: "Do we get full rights to the brand assets?",
      answer: "Yes, upon project completion you receive 100% intellectual property ownership and all production-ready source files (Figma, SVG, EPS, PNG, PDF)."
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
