import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd, siteConfig, absoluteUrl } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Software Development & IT Company in Mira-Bhayandar",
  description:
    "V2Labs Global is a premium IT & software development company serving the entire Mira-Bhayandar region. We engineer custom enterprise software, mobile apps, and business automations.",
  path: "/locations/mira-bhayandar",
  keywords: [
    "software development company mira bhayandar",
    "IT company mira bhayandar",
    "web design company mira bhayandar",
    "AI solutions mira bhayandar",
    "web development company mira bhayandar",
    "website development company mira bhayandar",
    "software company mira bhayandar",
  ],
});

export default function MiraBhayandarLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: "Mira-Bhayandar", path: "/locations/mira-bhayandar" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "Are you a registered IT company in Mira-Bhayandar?",
      answer: "Yes, V2Labs Global is an elite software engineering agency and IT consulting studio located in Bhayandar East, operating across the full Mira-Bhayandar Municipal Corporation limits."
    },
    {
      question: "What industries do you serve in the Mira-Bhayandar area?",
      answer: "We support retail stores, factories, manufacturing units in Kashigaon, warehousing services, real estate developers, and global startups requiring custom administrative software."
    },
    {
      question: "Do you develop custom ERP and CRM applications?",
      answer: "Yes, we custom-engineer operational portals, timesheet controls, client pipelines, automated billing ledgers, and API integrations with platforms like HubSpot and Salesforce."
    },
    {
      question: "Do you offer post-production support and hosting services?",
      answer: "Yes, we deploy application assets to globally scalable CDN edge networks (Vercel, AWS, Cloudflare) and provide server health checks and version audits."
    }
  ]);

  // LocalBusiness structured schema specific to Mira-Bhayandar municipal area
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/locations/mira-bhayandar/#local-business`,
    "name": "V2Labs Global - Mira-Bhayandar HQ",
    "url": absoluteUrl("/locations/mira-bhayandar"),
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
