import type { Metadata } from "next";

export const siteConfig = {
  name: "V2 Labs Global",
  shortName: "V2 Labs",
  url: "https://www.v2labsglobal.com",
  email: "contact@v2labsglobal.com",
  telephone: "+91-9022641867",
  locale: "en_US",
  region: "IN-MH",
  city: "Mumbai",
  locality: "Bhayandar East",
  postalCode: "401105",
  latitude: "19.3142",
  longitude: "72.8631",
  defaultTitle: "V2 Labs Global | Enterprise AI Solutions & Software Development Agency",
  defaultDescription: "V2 Labs Global is an enterprise software engineering agency specializing in custom AI Solutions, automation agents, high-performance web platforms, SaaS products, custom ERP/CRM engines, and conversion-focused digital marketing.",
  defaultKeywords: [
    "V2 Labs Global",
    "V2 Labs",
    "AI Solutions Company",
    "Web Development Company",
    "Enterprise AI Solutions",
    "AI Automation Agency",
    "Custom Software Development",
    "AI Agent Development",
    "SaaS Development Company",
    "Custom ERP CRM Development",
    "Next.js Development Company",
    "React Development Company",
    "Product Design Services",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AEO Optimization Agency",
    "GEO Optimization Agency",
    "Technical SEO Agency",
    "UI UX Design Agency",
    "AI chatbot development",
    "LLM Integration Services",
    "RAG systems development",
    "Business process automation",
    "API development company",
    "NodeJS development company",
    "TypeScript software company",
    "B2B software engineering agency",
    "custom software development mumbai",
    "ai solutions company mumbai",
    "web development company mumbai",
    "erp crm developers thane",
    "ui ux design agency mumbai",
    "SaaS product development",
    "MVP development company",
    "custom CRM solutions",
    "custom ERP solutions",
    "headless commerce development",
    "high performance web development",
  ],
  ogImage: "/logo-cover-v2labs.jpeg",
  socialLinks: [
    "https://www.linkedin.com/company/v2labsco/",
    "https://x.com/v2labsglobal",
    "https://www.instagram.com/v2.labsglobal",
  ],
} as const;

export type PageMetadataInput = {
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
  "/plans",
  "/plans/web-development",
  "/plans/branding",
  "/plans/ecommerce",
  "/plans/erp-crm",
  "/terms",
  "/services/web-platform",
  "/services/video-motion",
  "/services/erp-crm",
  "/services/ai-automation",
  "/services/ui-ux-brand",
  "/services/saas-product",
  "/services/digital-marketing",
  "/locations/bhayandar",
  "/locations/mira-road",
  "/locations/mira-bhayandar",
] as const;

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
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
        "en-GB": url,
        "en-CA": url,
        "en-IN": url,
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder-1234567890",
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
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: siteConfig.socialLinks,
    logo: {
      "@type": "ImageObject",
      "url": absoluteUrl("/logo-cover-v2labs.jpeg"),
      "width": "512",
      "height": "512"
    },
    image: absoluteUrl("/logo-cover-v2labs.jpeg"),
    description: siteConfig.defaultDescription,
    slogan: "AI systems, SEO-ready platforms, and conversion-led digital experiences.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.telephone,
        contactType: "sales",
        email: siteConfig.email,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi", "Gujarati"],
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
      "V2 Labs Global provides AI solutions, web development, branding, ERP CRM implementation, SaaS engineering, digital marketing, SEO, GEO, and AEO services for growth-focused companies.",
    image: absoluteUrl("/logo-cover-v2labs.jpeg"),
    logo: absoluteUrl("/logo-cover-v2labs.jpeg"),
    areaServed: [
      { "@type": "City", name: "Bhayandar" },
      { "@type": "City", name: "Mira Road" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      "Worldwide",
    ],
    priceRange: "$$$",
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
      target: `${siteConfig.url}/search?q={search_term_string}`,
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
