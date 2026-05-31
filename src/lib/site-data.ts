export type ServiceItem = {
  slug: string;
  href: string;
  navLabel: string;
  title: string;
  summary: string;
  blogCategory: string;
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "web-platform",
    href: "/services/web-platform",
    navLabel: "Web Development",
    title: "Web Development Services",
    summary:
      "High-performance websites, Next.js platforms, headless commerce, and scalable web experiences.",
    blogCategory: "web-development",
  },
  {
    slug: "ai-automation",
    href: "/services/ai-automation",
    navLabel: "AI Solutions",
    title: "AI Solutions Services",
    summary:
      "LLM-powered systems, automation workflows, AI agents, copilots, and operational intelligence.",
    blogCategory: "ai-automation",
  },
  {
    slug: "ui-ux-brand",
    href: "/services/ui-ux-brand",
    navLabel: "Branding",
    title: "Branding and UI UX Services",
    summary:
      "Brand systems, product design, visual identity, and conversion-led user experience design.",
    blogCategory: "branding",
  },
  {
    slug: "erp-crm",
    href: "/services/erp-crm",
    navLabel: "ERP CRM",
    title: "ERP CRM Services",
    summary:
      "Custom ERP, CRM, workflow automation, business dashboards, and connected internal tools.",
    blogCategory: "erp-crm",
  },
  {
    slug: "saas-product",
    href: "/services/saas-product",
    navLabel: "SaaS Product",
    title: "SaaS Product Development",
    summary:
      "MVPs, SaaS platforms, multi-tenant systems, analytics products, and subscription software.",
    blogCategory: "web-development",
  },
  {
    slug: "video-motion",
    href: "/services/video-motion",
    navLabel: "Video and Motion",
    title: "Video and Motion Design Services",
    summary:
      "Cinematic post-production, motion assets, branded reels, and campaign-ready video content.",
    blogCategory: "digital-marketing",
  },
  {
    slug: "digital-marketing",
    href: "/services/digital-marketing",
    navLabel: "Digital Marketing",
    title: "Digital Marketing Services",
    summary:
      "SEO, content strategy, landing-page optimization, performance campaigns, and demand generation.",
    blogCategory: "digital-marketing",
  },
];

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  relatedServiceHref: string;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "ai-automation",
    name: "AI Automation",
    description:
      "Guides on AI agents, LLM workflows, automation systems, and practical operations use cases.",
    relatedServiceHref: "/services/ai-automation",
  },
  {
    slug: "web-development",
    name: "Web Development",
    description:
      "Technical posts on Next.js, platform architecture, performance engineering, and conversion-focused builds.",
    relatedServiceHref: "/services/web-platform",
  },
  {
    slug: "branding",
    name: "Branding",
    description:
      "Articles about identity systems, UX foundations, design systems, and product storytelling.",
    relatedServiceHref: "/services/ui-ux-brand",
  },
  {
    slug: "erp-crm",
    name: "ERP CRM",
    description:
      "Content focused on internal software, operations visibility, connected data, and business automation.",
    relatedServiceHref: "/services/erp-crm",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    description:
      "Posts on SEO, conversion paths, content strategy, campaign landing pages, and growth loops.",
    relatedServiceHref: "/services/digital-marketing",
  },
];

export const blogStructureNotes = [
  "/blog/[slug]",
  "/blog/category/[category]",
  "/blog/tag/[tag]",
] as const;
