import type { Metadata } from "next";

export const siteConfig = {
  name: "V2Labs Global",
  shortName: "V2Labs",
  url: "https://v2labsglobal.com",
  email: "v2labsglobal@gmail.com",
  locale: "en_US",
  defaultTitle:
    "V2Labs Global | AI Solutions Company, Web Development Company & Branding Agency",
  defaultDescription:
    "V2Labs Global is a digital agency delivering AI solutions, web development, branding, SaaS product engineering, and ERP CRM solutions for modern businesses.",
  defaultKeywords: [
    "V2Labs Global",
    "V2Labs",
    "V2Labs Digital Agency",
    "AI Solutions Company",
    "Web Development Company",
    "Branding Agency",
    "ERP CRM Solutions",
    "SaaS Product Development",
    "UI UX Design Agency",
    "Next.js Development Company",
    "Automation Agency",
    "V2Labs Services",
    "V2Labs Portfolio",
    "V2Labs Contact",
    "v2 labs global ai solutions",
    "v2 labs global web development",
    "v2 labs global branding",
    "v2 labs global erp crm",
    "v2 labs global saas product",
    "v2 labs global ui ux design",
    "v2 labs global automation",
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
  "/blog/category/ai-automation",
  "/blog/category/web-development",
  "/blog/category/branding",
  "/blog/category/erp-crm",
  "/blog/category/digital-marketing",
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
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: [...siteConfig.defaultKeywords, ...keywords],
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
      "ERP CRM Solutions",
      "SaaS Product Development",
      "Automation",
    ],
  },
  professionalService: {
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professional-service`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description:
      "V2Labs Global provides AI solutions, web development, branding, ERP CRM implementation, SaaS engineering, and digital marketing services for growth-focused companies.",
    image: absoluteUrl("/logo-cover-v2labs.jpeg"),
    logo: absoluteUrl("/logo-cover-v2labs.jpeg"),
    areaServed: "Worldwide",
    priceRange: "$$",
    serviceType: [
      "AI Solutions",
      "Web Development",
      "Branding",
      "ERP CRM Solutions",
      "UI UX Design",
      "SaaS Product Development",
      "Digital Marketing",
    ],
    sameAs: siteConfig.socialLinks,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
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
