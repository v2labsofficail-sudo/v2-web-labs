import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd, siteConfig, absoluteUrl } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Web Development & Software Company in Bhayandar",
  description:
    "Partner with V2Labs Global, a premium web development & software solutions company in Bhayandar. We build Next.js websites, custom ERP/CRM databases, and AI systems.",
  path: "/locations/bhayandar",
  keywords: [
    "web development company bhayandar",
    "website development company bhayandar",
    "software company bhayandar",
    "web design company bhayandar",
    "website developer bhayandar",
    "IT company bhayandar",
    "AI automation company bhayandar",
  ],
});

export default function BhayandarLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: "Bhayandar", path: "/locations/bhayandar" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "Are you located in Bhayandar?",
      answer: "Yes, V2Labs Global operates from Bhayandar East (401105). We are a local technology and software engineering team serving startups and business owners across Bhayandar East, Bhayandar West, Mira Road, and the wider Mumbai area."
    },
    {
      question: "What services do you offer for local businesses in Bhayandar?",
      answer: "We provide professional website development (Next.js, React), custom software and ERP/CRM systems, SaaS product engineering, AI chatbot and automation integrations, and performance-led SEO/marketing solutions."
    },
    {
      question: "How much does a website cost in Bhayandar?",
      answer: "Website costs vary based on page counts, features, and custom designs. We offer transparent pricing structures starting from essential corporate landing pages to complex e-commerce or SaaS integrations."
    },
    {
      question: "Can you design a mobile app for my Bhayandar business?",
      answer: "Yes. We develop cross-platform Android and iOS mobile applications using React Native, fully integrated with secure cloud databases and administrative dashboard web views."
    }
  ]);

  // LocalBusiness structured schema specific to Bhayandar entity matching
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/locations/bhayandar/#local-business`,
    "name": "V2Labs Global - Bhayandar Software Studio",
    "url": absoluteUrl("/locations/bhayandar"),
    "telephone": siteConfig.telephone,
    "email": siteConfig.email,
    "image": absoluteUrl("/logo-cover-v2labs.jpeg"),
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhayandar East",
      "addressLocality": "Mira-Bhayandar",
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
