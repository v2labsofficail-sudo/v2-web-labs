import type { Metadata } from "next";

export const siteConfig = {
  name: "V2 Labs Global",
  shortName: "V2 Labs Global",
  url: "https://www.v2labsglobal.com",
  email: "contact@v2labsglobal.com",
  telephone: "+91-9022641867",
  locale: "en_US",
  region: "IN-MH",
  city: "Mira Bhayandar",
  locality: "Bhayandar East",
  postalCode: "401105",
  latitude: "19.3142",
  longitude: "72.8631",
  defaultTitle: "V2 Labs Global | Web & Software Development Company",
  defaultDescription: "V2 Labs Global builds custom websites, e-commerce platforms, AI automation, ERP and CRM solutions for growing businesses in Mumbai and India.",
  defaultKeywords: [
    "V2 Labs Global",
    "V2 Labs",
    "Website development company in Mira Bhayandar",
    "Website development company in Bhayandar",
    "Web development company in Bhayandar East",
    "Website designing company in Mira Bhayandar",
    "Website designer in Bhayandar",
    "Web development services in Mira Bhayandar",
    "Software development company in Mira Bhayandar",
    "Digital marketing agency in Mira Bhayandar",
    "SEO company in Mira Bhayandar",
    "IT company in Bhayandar",
    "Bhayandar West web development",
    "Kashimira software company",
    "Golden Nest website design",
    "Indralok IT solutions",
    "Navghar digital marketing agency",
    "AI automation company in Mira Bhayandar",
    "AI agent development company",
    "Custom ERP CRM software Bhayandar",
    "Shopify website development Mira Bhayandar",
    "WordPress development in Bhayandar",
    "SaaS MVP development company",
    "Mobile app development company in Mira Bhayandar",
    "Website development services in Mumbai",
    "Best web development company in Mumbai",
    "Custom software development Mumbai",
    "Performance marketing and lead generation Bhayandar",
    "Branding and UI UX design agency Mira Bhayandar",
    "Generative Engine Optimization GEO",
    "Answer Engine Optimization AEO",
    "Next.js Development Agency",
    "React Development Company",
    "Business process automation",
  ],
  ogImage: "/logo-cover-v2labs.jpeg",
  socialLinks: [
    "https://www.linkedin.com/company/v2labsco/",
    "https://x.com/v2labsglobal",
    "https://www.instagram.com/v2.labsglobal",
    "https://github.com/v2labsglobal",
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
  "/services/website-development",
  "/services/wordpress-development",
  "/services/shopify-development",
  "/services/ecommerce-development",
  "/services/ai-automation",
  "/services/erp-development",
  "/services/crm-development",
  "/services/saas-development",
  "/services/custom-software-development",
  "/services/seo-services",
  "/services/web-platform",
  "/services/video-motion",
  "/services/erp-crm",
  "/services/ui-ux-brand",
  "/services/saas-product",
  "/services/digital-marketing",
  "/locations/bhayandar",
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
    slogan: "Build. Innovate. Scale.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.telephone,
        contactType: "sales",
        email: siteConfig.email,
        areaServed: [
          "Mira Bhayandar",
          "Bhayandar East",
          "Bhayandar West",
          "Kashimira",
          "Thane",
          "Mumbai",
          "India",
          "Worldwide"
        ],
        availableLanguage: ["English", "Hindi", "Gujarati", "Marathi"],
      },
    ],
    areaServed: "Worldwide",
    knowsAbout: [
      "Website Design, UI/UX & Development",
      "WordPress Development",
      "Shopify & E-commerce Development",
      "Custom Software Development",
      "AI Automation & AI Agents",
      "ERP & CRM Solutions",
      "SaaS Product & MVP Development",
      "Social Media Management & Growth",
      "SEO & Digital Marketing",
      "Google & Meta Ads Management",
      "Video Editing, Reels & Advertisement Production",
      "Branding & Graphic Design",
      "Mobile App Development",
      "Generative Engine Optimization",
      "Answer Engine Optimization"
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
    telephone: siteConfig.telephone,
    description:
      "V2 Labs Global is a technology and digital growth company in Bhayandar East, Mira Bhayandar, providing website development, WordPress, Shopify, custom software, ERP/CRM, AI automation, and digital marketing services.",
    image: absoluteUrl("/logo-cover-v2labs.jpeg"),
    logo: absoluteUrl("/logo-cover-v2labs.jpeg"),
    areaServed: [
      { "@type": "City", name: "Mira Bhayandar" },
      { "@type": "AdministrativeArea", name: "Bhayandar East" },
      { "@type": "AdministrativeArea", name: "Bhayandar West" },
      { "@type": "AdministrativeArea", name: "Kashimira" },
      { "@type": "AdministrativeArea", name: "Golden Nest" },
      { "@type": "AdministrativeArea", name: "Indralok" },
      { "@type": "AdministrativeArea", name: "Navghar" },
      { "@type": "City", name: "Bhayandar" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Vasai" },
      { "@type": "City", name: "Virar" },
      { "@type": "City", name: "Naigaon" },
      { "@type": "City", name: "Nalasopara" },
      { "@type": "City", name: "Borivali" },
      { "@type": "City", name: "Kandivali" },
      { "@type": "City", name: "Malad" },
      { "@type": "City", name: "Andheri" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Chennai" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Philippines" },
      "Worldwide",
    ],
    priceRange: "$$$",
    serviceType: [
      "Website Design, UI/UX & Development",
      "WordPress Development",
      "Shopify & E-commerce Development",
      "Custom Software Development",
      "AI Automation & AI Agents",
      "ERP & CRM Solutions",
      "SaaS Product & MVP Development",
      "Social Media Management & Growth",
      "SEO & Digital Marketing",
      "Google & Meta Ads Management",
      "Video Editing, Reels & Advertisement Production",
      "Branding & Graphic Design",
      "Mobile App Development",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "V2 Labs Global Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design, UI/UX & Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "WordPress Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify & E-commerce Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation & AI Agents" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP & CRM Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product & MVP Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management & Growth" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Digital Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google & Meta Ads Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Editing, Reels & Advertisement Production" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding & Graphic Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
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
