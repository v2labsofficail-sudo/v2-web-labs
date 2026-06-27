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

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  contactSubject: string;
};

export type PricingCategory = {
  id: string;
  name: string;
  description: string;
  plans: PricingTier[];
};

export const pricingCategories: PricingCategory[] = [
  {
    id: "web-development",
    name: "Website Development",
    description: "Modern, fast, responsive web systems that build trust and generate leads.",
    plans: [
      {
        name: "Starter Plan",
        price: "₹999",
        description: "Perfect for Personal Brands & Startups.",
        features: [
          "Up to 4 Pages",
          "Responsive Design",
          "Contact Form Integration",
          "Basic SEO Setup",
          "30 Days Support"
        ],
        ctaText: "Choose Starter Plan",
        contactSubject: "Inquiry: Web Dev Starter Plan (₹999)"
      },
      {
        name: "Business Plan",
        price: "₹2,999",
        description: "Ideal for Growing Businesses.",
        popular: true,
        features: [
          "Up to 7 Pages",
          "Premium UI Design",
          "Mobile Optimized Layouts",
          "SEO Ready Architecture",
          "Google Analytics Integration",
          "Speed Optimized Build",
          "SSL Certificate Integration",
          "WhatsApp Chat Sync",
          "30 Days Support"
        ],
        ctaText: "Choose Business Plan",
        contactSubject: "Inquiry: Web Dev Business Plan (₹2,999)"
      },
      {
        name: "Premium Plan",
        price: "₹4,999",
        description: "Best for Brands That Want to Scale.",
        features: [
          "Up to 10 Pages",
          "Fully Custom Design",
          "Blog Integration",
          "Dynamic Interactive Sections",
          "Advanced SEO Optimization",
          "Search Console Setup",
          "Performance Optimization",
          "3 Months Priority Support"
        ],
        ctaText: "Choose Premium Plan",
        contactSubject: "Inquiry: Web Dev Premium Plan (₹4,999)"
      }
    ]
  },
  {
    id: "branding",
    name: "Branding Package",
    description: "Everything your new startup needs to launch, grow, and stand out.",
    plans: [
      {
        name: "Starter Plan",
        price: "₹9,999",
        description: "Launch Your Brand The Right Way.",
        features: [
          "Professional Logo Design",
          "Brand Name Ideas (Optional)",
          "Tagline & Brand Concept",
          "Color Palette & Typography",
          "Business Card Design",
          "5 Social Media Post Designs",
          "2 Banner / Cover Designs",
          "Brand Guidelines (Basic)",
          "1 Promo Video (Up to 30 sec)",
          "1 Month Social Media Support",
          "3 Revisions"
        ],
        ctaText: "Choose Starter Plan",
        contactSubject: "Inquiry: Branding Starter Plan (₹9,999)"
      },
      {
        name: "Growth Plan",
        price: "₹19,999",
        description: "Build, Brand & Grow Your Startup.",
        popular: true,
        features: [
          "Everything in Starter Plan",
          "Advanced Logo & Brand Identity",
          "Brand Guidelines (Advanced)",
          "10 Social Media Post Designs",
          "5 Story / Highlight Covers",
          "3 Banner / Web Designs",
          "2 Promo Videos (Up to 45 sec)",
          "Website Design (Up to 5 Pages)",
          "Basic SEO Setup",
          "Social Media Setup (1 Platform)",
          "Content Calendar (15 Days)",
          "1 Month Social Media Management",
          "Priority Support",
          "5 Revisions"
        ],
        ctaText: "Choose Growth Plan",
        contactSubject: "Inquiry: Branding Growth Plan (₹19,999)"
      },
      {
        name: "Premium Plan",
        price: "₹29,999",
        description: "Complete Branding & Growth Solution.",
        features: [
          "Everything in Growth Plan",
          "Premium Logo & Brand Identity",
          "Brand Strategy & Positioning",
          "Unlimited Social Media Post Designs",
          "Reel Covers & Thumbnail Designs",
          "5 Banner / Web / Ad Designs",
          "3 Promo Videos (Up to 60 sec)",
          "Website Design (Up to 10 Pages)",
          "E-commerce / Landing Page",
          "SEO Setup + Google Analytics",
          "Social Media Setup (All Platforms)",
          "Content Calendar (30 Days)",
          "1 Month Social Media Management",
          "Priority Support",
          "Unlimited Revisions"
        ],
        ctaText: "Choose Premium Plan",
        contactSubject: "Inquiry: Branding Premium Plan (₹29,999)"
      }
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce Development",
    description: "Sell more, manage easily, and grow faster with conversion-optimized storefronts.",
    plans: [
      {
        name: "Starter Store",
        price: "₹4,999",
        description: "Perfect for New Businesses.",
        features: [
          "Up to 20 Products",
          "Mobile Responsive Store",
          "Secure Checkout",
          "Razorpay / Payment Gateway Integration",
          "WhatsApp Order Button",
          "Basic Product Categories",
          "Basic SEO Setup",
          "30 Days Support"
        ],
        ctaText: "Choose Starter Store",
        contactSubject: "Inquiry: E-Commerce Starter Store (₹4,999)"
      },
      {
        name: "Growth Store",
        price: "₹9,999",
        description: "Best for Growing Brands.",
        popular: true,
        features: [
          "Up to 105 Products",
          "Premium UI/UX Design",
          "Shopping Cart & Wishlist",
          "Secure Payment Gateway Integration",
          "Coupon System Configuration",
          "Order Management Dashboard",
          "Inventory Management Sync",
          "Customer Login System",
          "WhatsApp Chat Support",
          "Speed Optimization Setup",
          "SEO Optimized Build",
          "60 Days Support"
        ],
        ctaText: "Choose Growth Store",
        contactSubject: "Inquiry: E-Commerce Growth Store (₹9,999)"
      },
      {
        name: "Enterprise Store",
        price: "₹19,999",
        description: "For Advanced Businesses.",
        features: [
          "Unlimited Products listing",
          "Custom UI/UX Design",
          "Advanced Filters & Search",
          "Multi-Category Store Layout",
          "Inventory Automation Flow",
          "Customer Account Dashboard",
          "Order Tracking Integration",
          "Automatic Invoice Generation",
          "Advanced SEO Optimization",
          "Google Analytics Integration",
          "Performance Optimization",
          "3 Months Support"
        ],
        ctaText: "Choose Enterprise Store",
        contactSubject: "Inquiry: E-Commerce Enterprise Store (₹19,999)"
      }
    ]
  },
  {
    id: "erp-crm",
    name: "ERP & CRM Solutions",
    description: "Automate operations, manage customers, and grow faster with smart business platforms.",
    plans: [
      {
        name: "Essential ERP",
        price: "₹15,000",
        description: "Perfect for Startups & Small Businesses.",
        features: [
          "Customer Management",
          "Lead Management Pipeline",
          "Employee Management Portal",
          "Attendance Tracking System",
          "Invoice & Billing Engine",
          "Expense Tracking Panel",
          "Dashboard Reports",
          "30 Days Support"
        ],
        ctaText: "Choose Essential ERP",
        contactSubject: "Inquiry: Essential ERP Plan (₹15,000)"
      },
      {
        name: "Professional ERP",
        price: "₹35,000",
        description: "Best for Growing Businesses.",
        popular: true,
        features: [
          "Everything in Essential ERP",
          "CRM Management Suite",
          "Sales Pipeline Customization",
          "Inventory Management Module",
          "Purchase Management Flow",
          "Vendor Management Dashboard",
          "HR & Payroll Integration",
          "Task Management System",
          "Quotation System Module",
          "Advanced Analytics Dashboard",
          "Email Notification Service",
          "API Integration Ready",
          "60 Days Support"
        ],
        ctaText: "Choose Professional ERP",
        contactSubject: "Inquiry: Professional ERP Plan (₹35,000)"
      },
      {
        name: "Enterprise ERP",
        price: "Custom",
        description: "For Advanced & Large Enterprises.",
        features: [
          "Everything in Professional ERP",
          "Multi-Branch System Management",
          "Advanced Role-based Permissions",
          "Production Management Suite",
          "Asset Management Dashboard",
          "Customer Support Helpdesk",
          "Workflow Automation Engine",
          "Custom Advanced Reports",
          "Advanced Sales Telemetry",
          "Third-Party Software Integrations",
          "Priority SLA Support",
          "3 Months Priority Support"
        ],
        ctaText: "Choose Enterprise ERP",
        contactSubject: "Inquiry: Enterprise ERP Plan (Custom)"
      }
    ]
  }
];

