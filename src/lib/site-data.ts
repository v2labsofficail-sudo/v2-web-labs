export type ServiceItem = {
  slug: string;
  href: string;
  navLabel: string;
  title: string;
  summary: string;
  blogCategory: string;
  image: string;
  tags: string[];
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
    image: "/images/services/web-platform.jpg",
    tags: ["Next.js & React", "SEO & Web Vitals", "Headless CMS", "Performance Dev"],
  },
  {
    slug: "ai-automation",
    href: "/services/ai-automation",
    navLabel: "AI Solutions",
    title: "AI Solutions Services",
    summary:
      "LLM-powered systems, automation workflows, AI agents, copilots, and operational intelligence.",
    blogCategory: "ai-automation",
    image: "/images/services/ai-automation.jpg",
    tags: ["LLMs & AI Agents", "Workflow Automation", "Semantic Search", "RAG Systems"],
  },
  {
    slug: "ui-ux-brand",
    href: "/services/ui-ux-brand",
    navLabel: "Branding",
    title: "Branding and UI UX Services",
    summary:
      "Brand systems, product design, visual identity, and conversion-led user experience design.",
    blogCategory: "branding",
    image: "/ui_ux_tools_showcase.png",
    tags: ["Visual Identity", "UI Design System", "Conversion UX", "Interactive Prototyping"],
  },
  {
    slug: "erp-crm",
    href: "/services/erp-crm",
    navLabel: "ERP CRM",
    title: "ERP CRM Services",
    summary:
      "Custom ERP, CRM, workflow automation, business dashboards, and connected internal tools.",
    blogCategory: "erp-crm",
    image: "/images/services/erp-crm.jpg",
    tags: ["Custom CRM/ERP", "HubSpot Integrations", "Database Architecture", "Admin Portals"],
  },
  {
    slug: "saas-product",
    href: "/services/saas-product",
    navLabel: "SaaS Product",
    title: "SaaS Product Development",
    summary:
      "MVPs, SaaS platforms, multi-tenant systems, analytics products, and subscription software.",
    blogCategory: "web-development",
    image: "/images/services/saas-product.jpg",
    tags: ["MVP Development", "Multi-Tenant SaaS", "Stripe & Subscriptions", "Analytics Dashboards"],
  },
  {
    slug: "video-motion",
    href: "/services/video-motion",
    navLabel: "Video and Motion",
    title: "Video and Motion Design Services",
    summary:
      "Cinematic post-production, motion assets, branded reels, and campaign-ready video content.",
    blogCategory: "digital-marketing",
    image: "/images/services/video-motion.jpg",
    tags: ["Post-Production", "Motion Graphics", "Branded Reels", "Campaign Creatives"],
  },
  {
    slug: "digital-marketing",
    href: "/services/digital-marketing",
    navLabel: "Digital Marketing",
    title: "Digital Marketing Services",
    summary:
      "SEO, content strategy, landing-page optimization, performance campaigns, and demand generation.",
    blogCategory: "digital-marketing",
    image: "/images/services/digital-marketing.jpg",
    tags: ["SEO & Rank Growth", "B2B Lead Generation", "Ad Campaigns", "Content Growth Engine"],
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
