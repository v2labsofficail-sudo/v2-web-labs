import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd, siteConfig, absoluteUrl } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Web Development & Software Company in Mira Road",
  description:
    "Looking for a professional web development company in Mira Road? V2Labs Global engineers custom software, scalable SaaS products, and conversion-focused websites for startups.",
  path: "/locations/mira-road",
  keywords: [
    "web development company mira road",
    "software development company mira road",
    "digital marketing agency mira road",
    "SEO company mira road",
    "website development company mira road",
    "web design company mira road",
    "website developer mira road",
    "software company mira road",
  ],
});

export default function MiraRoadLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: "Mira Road", path: "/locations/mira-road" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "Do you offer web development services in Mira Road?",
      answer: "Yes, V2Labs Global serves startups, retail outlets, and agencies across Mira Road, including regions like Shanti Nagar, Beverly Park, Naya Nagar, and Kanakia. We provide clean, fast web systems built on React and Next.js."
    },
    {
      question: "Can you help optimize my Mira Road business website for local SEO?",
      answer: "Absolutely. We build SEO configurations directly into our website architectures, using semantic HTML structures, structured data schemas, fast loading frameworks, and locally-optimized content paths."
    },
    {
      question: "How long does custom software development take?",
      answer: "Simple MVPs and custom pipelines take around 4 to 6 weeks, while more complex multi-system ERP configurations or SaaS dashboards require 8 to 12 weeks of development and QA verification."
    },
    {
      question: "What is your development stack?",
      answer: "We primarily write type-safe components using React, Next.js, and TypeScript, backed by Node.js, Express, NestJS, and relational PostgreSQL databases hosted on secure cloud providers like AWS."
    }
  ]);

  // LocalBusiness structured schema specific to Mira Road entity matching
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/locations/mira-road/#local-business`,
    "name": "V2Labs Global - Mira Road IT Solutions",
    "url": absoluteUrl("/locations/mira-road"),
    "telephone": siteConfig.telephone,
    "email": siteConfig.email,
    "image": absoluteUrl("/logo-cover-v2labs.jpeg"),
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mira Road",
      "addressLocality": "Mira-Bhayandar",
      "addressRegion": "Maharashtra",
      "postalCode": "401107",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.2812",
      "longitude": "72.8561"
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
