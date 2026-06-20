import type { Metadata } from "next";

export const siteConfig = {
  name: "V2Labs Global",
  shortName: "V2Labs",
  url: "https://v2labsglobal.com",
  email: "contact@v2labsglobal.com",
  locale: "en_US",
  region: "IN-MH",
  city: "Thane",
  locality: "Bhayandar East",
  postalCode: "401105",
  latitude: "19.3142",
  longitude: "72.8631",
  defaultTitle:
    "V2Labs Global | AI Solutions, Web Development, Branding, SEO & Automation Agency in Mumbai",
  defaultDescription:
    "V2Labs Global is a digital engineering agency in Mumbai and Thane that builds AI solutions, automation systems, high-performance websites, SaaS products, ERP and CRM platforms, branding systems, and SEO-ready digital experiences.",
  defaultKeywords: [
    "V2Labs Global",
    "V2Labs",
    "AI Solutions Company",
    "Web Development Company",
    "Branding Agency",
    "SEO Agency Mumbai",
    "AEO Optimization Agency",
    "GEO Optimization Agency",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "ERP CRM Solutions",
    "SaaS Product Development",
    "UI UX Design Agency",
    "Next.js Development Company",
    "Automation Agency",
    "ai automation agency thane",
    "web development company mumbai",
    "web development company bhayandar",
    "digital marketing agency mumbai",
    "digital marketing agency thane",
    "ai solutions company mumbai",
    "erp crm developers thane",
    "ui ux design agency mumbai",
    "branding agency mumbai",
    "seo services mumbai",
    "technical seo agency",
    "local seo thane",
    "web development services mumbai",
    "custom software development mumbai",
    "nextjs development company mumbai",
    "ai agency mumbai",
    "near me web development company",
    "near me digital marketing agency",
    "near me ai solutions company",
    "near me branding agency",
    "near me seo services",
    "near me ui ux design agency",
    "near me erp crm developers",
    "just at 999",
    "ERP CRM Solutions",
    "SaaS Product Development",
    "UI UX Design Agency",
    "Next.js Development Company",
    "Automation Agency",
    "ai automation agency thane",
    "web development company mumbai",
    "web development company bhayandar",
    "digital marketing agency mumbai",
    "digital marketing agency thane",
    "ai solutions company mumbai",
    "erp crm developers thane",
    "ui ux design agency mumbai",
    "branding agency mumbai",
    "seo services mumbai",
    "technical seo agency",
    "local seo thane",
    " v2 labs global",

    
  ],
  ogImage: "/logo-cover-v2labs.jpeg",
  socialLinks: [
    "https://www.linkedin.com/company/v2labsco/",
    "https://x.com/v2labsglobal",
    "https://www.instagram.com/v2.labsglobal?igsh=bmd5ZzJrcHl4NGls",
  ],
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/work",
  "/blog",
  "/contact",
  "/careers",
  "/privacy",
  "/terms",
  "/services/web-platform",
  "/services/video-motion",
  "/services/erp-crm",
  "/services/ai-automation",
  "/services/ui-ux-brand",
  "/services/saas-product",
  "/services/digital-marketing",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildOgImageUrl(title: string, description: string) {
  const params = new URLSearchParams({
    title,
    description,
  });

  return absoluteUrl(`/og?${params.toString()}`);
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const ogImage = buildOgImageUrl(title, description);

  return {
    title: title,
    description,
    keywords: [...siteConfig.defaultKeywords, ...keywords],
    applicationName: siteConfig.name,
    category: "Technology",
    creator: siteConfig.name,
    publisher: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${fullTitle} open graph image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@v2labsglobal",
      site: "@v2labsglobal",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": siteConfig.region,
      "geo.placename": `${siteConfig.city}, Maharashtra, India`,
      "geo.position": `${siteConfig.latitude};${siteConfig.longitude}`,
      ICBM: `${siteConfig.latitude}, ${siteConfig.longitude}`,
    },
  };
}

export const structuredData = {
  organization: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: siteConfig.socialLinks,
    logo: absoluteUrl("/logo-cover-v2labs.jpeg"),
    description: siteConfig.defaultDescription,
    slogan: "AI systems, SEO-ready platforms, and conversion-led digital experiences.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        url: siteConfig.url,
        availableLanguage: ["English"],
      },
    ],
    areaServed: "Worldwide",
    knowsAbout: [
      "AI Solutions",
      "Web Development",
      "Branding",
      "Search Engine Optimization",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "ERP CRM Solutions",
      "SaaS Product Development",
      "Automation",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.locality,
      addressLocality: siteConfig.city,
      addressRegion: "Maharashtra",
      postalCode: siteConfig.postalCode,
      addressCountry: "IN",
    },
  },
  professionalService: {
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professional-service`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description:
      "V2Labs Global provides AI solutions, web development, branding, ERP CRM implementation, SaaS engineering, digital marketing, SEO, GEO, and AEO services for growth-focused companies.",
    image: absoluteUrl("/logo-cover-v2labs.jpeg"),
    logo: absoluteUrl("/logo-cover-v2labs.jpeg"),
    areaServed: [
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
      "Worldwide",
    ],
    priceRange: "$$",
    serviceType: [
      "AI Solutions",
      "Web Development",
      "Branding",
      "ERP CRM Solutions",
      "UI UX Design",
      "SaaS Product Development",
      "Digital Marketing",
      "SEO",
      "AEO",
      "GEO",
    ],
    sameAs: siteConfig.socialLinks,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.locality,
      addressLocality: siteConfig.city,
      addressRegion: "Maharashtra",
      postalCode: siteConfig.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "V2Labs Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding and UI UX" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP CRM Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO, GEO and AEO" } },
      ],
    },
  },
  website: {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    inLanguage: "en",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
};

export function buildBreadcrumbJsonLd(segments: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": segments.map((seg, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": seg.name,
      "item": absoluteUrl(seg.path),
    })),
  };
}

export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}
