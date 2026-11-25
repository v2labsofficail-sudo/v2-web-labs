import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd, siteConfig, absoluteUrl } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Web Development & Software Company in Bhayandar",
  description:
    "Partner with V2 Labs Global, a premier web development & software solutions company based in Mira Bhayandar. We build custom Next.js websites, Shopify stores, ERP/CRM systems, and AI automation.",
  path: "/locations/bhayandar",
  keywords: [
    "web development company bhayandar",
    "website development company bhayandar",
    "web development company in mira bhayandar",
    "website designer in bhayandar",
    "website designing company in bhayandar west",
    "software company bhayandar",
    "IT company bhayandar",
    "digital marketing agency in bhayandar",
    "SEO services in bhayandar",
    "AI automation company bhayandar",
    "WordPress website development in bhayandar",
    "custom software development bhayandar",
  ],
});

export default function BhayandarLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/mira-bhayandar" },
    { name: "Bhayandar", path: "/locations/bhayandar" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "Are you located in Bhayandar?",
      answer: "Yes, V2 Labs Global is based in Mira Bhayandar (401105). We are a local technology and software engineering team serving startups, businesses, and industrial units across Bhayandar, Mira Road, and the wider Mumbai region."
    },
    {
      question: "What services do you offer for local businesses in Bhayandar?",
      answer: "We provide professional website development (Next.js, React, WordPress, Shopify), custom software and ERP/CRM systems, SaaS product engineering, AI chatbot and automation integrations, and performance-led SEO and digital marketing solutions."
    },
    {
      question: "How much does website development cost in Bhayandar?",
      answer: "Website development costs depend on project scope, custom UI/UX requirements, database integrations, and feature complexity. We offer transparent packages starting from essential business landing pages to comprehensive custom web platforms and e-commerce stores."
    },
    {
      question: "Can you design a custom mobile app for my Bhayandar business?",
      answer: "Yes. We develop cross-platform Android and iOS mobile applications using React Native and Flutter, fully integrated with secure cloud databases and administrative dashboard web views."
    }
  ]);

  // LocalBusiness structured schema specific to Bhayandar entity matching
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/locations/bhayandar/#local-business`,
    "name": "V2 Labs Global - Bhayandar Software Studio",
    "url": absoluteUrl("/locations/bhayandar"),
    "telephone": siteConfig.telephone,
    "email": siteConfig.email,
    "image": absoluteUrl("/logo-cover-v2labs.jpeg"),
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mira Bhayandar",
      "addressLocality": "Mira Bhayandar",
      "addressRegion": "Maharashtra",
      "postalCode": "401105",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.latitude,
      "longitude": siteConfig.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
