import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd, siteConfig, absoluteUrl } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Development & Software Company in Mira Bhayandar",
  description:
    "V2 Labs Global is the leading website development, AI solutions, and software engineering company in Mira Bhayandar. We build Next.js websites, ERP/CRM portals, and growth marketing.",
  path: "/locations/mira-bhayandar",
  keywords: [
    "website development company in mira bhayandar",
    "web development company in mira bhayandar",
    "website designing company in mira bhayandar",
    "software development company in mira bhayandar",
    "digital marketing agency in mira bhayandar",
    "SEO company in mira bhayandar",
    "IT company in bhayandar",
    "web development services in mira bhayandar",
    "AI automation company in mira bhayandar",
    "Shopify website development in mira bhayandar",
    "WordPress development in bhayandar",
    "mobile app development company mira bhayandar",
    "ERP CRM solutions mira bhayandar",
  ],
});

export default function MiraBhayandarLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/mira-bhayandar" },
    { name: "Mira Bhayandar", path: "/locations/mira-bhayandar" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "Which company develops websites in Mira Bhayandar?",
      answer: "V2 Labs Global is a premier technology and digital growth company located in Bhayandar East, providing modern website development, Next.js web applications, WordPress, and Shopify stores across the Mira Bhayandar Municipal Corporation (MBMC) region."
    },
    {
      question: "Are you a registered IT & software company in Mira Bhayandar?",
      answer: "Yes, V2 Labs Global is a professional technology agency with engineering headquarters in Bhayandar East, serving businesses across Bhayandar East, Bhayandar West, Kashimira, Golden Nest, Indralok, Navghar, and the Mumbai metropolitan area."
    },
    {
      question: "What industries do you serve in the Mira Bhayandar area?",
      answer: "We support retail companies, manufacturing units in Bhayandar and Kashigaon, industrial suppliers, real estate firms, diagnostic clinics, healthcare practices, and global startups requiring custom websites and administrative software."
    },
    {
      question: "Do you develop custom ERP and CRM applications?",
      answer: "Yes, we build custom enterprise ERP and CRM platforms, customer management pipelines, automated billing systems, stock and inventory management tools, and seamless API integrations."
    },
    {
      question: "How can I improve my business website's Google ranking in Mira Bhayandar?",
      answer: "We implement full-funnel local SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), technical SEO audits, Core Web Vitals acceleration, schema markup, and high-intent localized keyword optimization to rank in local search and AI search engines."
    }
  ]);

  // LocalBusiness structured schema specific to Mira Bhayandar municipal area
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/locations/mira-bhayandar/#local-business`,
    "name": "V2 Labs Global - Mira Bhayandar HQ",
    "url": absoluteUrl("/locations/mira-bhayandar"),
    "telephone": siteConfig.telephone,
    "email": siteConfig.email,
    "image": absoluteUrl("/logo-cover-v2labs.jpeg"),
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhayandar East",
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
