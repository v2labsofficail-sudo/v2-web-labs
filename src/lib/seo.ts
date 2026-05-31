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
  ],
  ogImage: "/logo-cover-v2labs.jpeg",
  socialLinks: [
    "https://www.linkedin.com/company/v2labsco/",
    "https://x.com/v2labsglobal",
  ],
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const publicRoutes = [
  "/",
  "/about",
  "/work",
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
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} brand cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
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
    "@context": "https://schema.org",
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
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
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
    ],
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    inLanguage: "en",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  },
};
