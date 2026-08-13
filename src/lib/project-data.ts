export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  badge: string;
  desc: string;
  stat: string;
  gradient: string;
  tools: string[];
  serviceLink: string;
  serviceName: string;
  seoTitle: string;
  seoDescription: string;
  clientProblem: string;
  businessChallenge: string;
  solution: string;
  architecture: string[];
  techStack: Record<string, string[]>;
  process: string[];
  features: string[];
  performance: string[];
  outcomes: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "placfy-ai",
    title: "Placfy AI",
    category: "AI & Platform Engineering",
    badge: "AI-Powered Systems",
    desc: "Full custom engineering of an autonomous talent recruitment matching platform. Implemented advanced semantic vector database search filters and real-time applicant indexing pipelines.",
    stat: "45% Match Speed Optimization",
    gradient: "from-[#0055DA] to-[#111111]",
    tools: ["Next.js App Router", "FastAPI", "VectorDB", "Tailwind CSS"],
    serviceLink: "/services/ai-automation",
    serviceName: "AI Automation",
    seoTitle: "Placfy AI Case Study | AI Talent Recruitment Platform",
    seoDescription: "Explore how V2 Labs Global engineered Placfy AI, an autonomous talent recruitment platform utilizing vector search, LLMs, and high-velocity semantic filtering.",
    clientProblem: "The client was struggling with legacy keyword-based applicant matching systems. Recruiters spent hours manually parsing PDF resumes, resulting in slow placement cycles and high mismatch rates.",
    businessChallenge: "Building a high-throughput semantic search index that could accurately parse thousands of complex resumes and match them against diverse job descriptions in real-time, under 150ms.",
    solution: "We designed a decoupled architecture with a Next.js frontend and a FastAPI microservice. Resumes are ingested, OCR-parsed, embedded into high-dimensional vectors, and stored in a specialized vector database. The matching engine utilizes customized cosine similarity algorithms to recommend top candidates instantaneously.",
    architecture: [
      "User uploads resumes via client-side Next.js portal.",
      "Asynchronous background workers parse and clean documents.",
      "FastAPI service generates embedding vectors using state-of-the-art semantic models.",
      "Vectors are indexed inside VectorDB with customized search filters.",
      "Recruiters receive a sorted list of matches ranked by semantic relevance in under 150ms."
    ],
    techStack: {
      "Frontend & Portal": ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
      "AI & Vector Search": ["FastAPI", "OpenAI Embeddings", "VectorDB / Pinecone", "LangChain"],
      "Data & Storage": ["PostgreSQL", "Supabase", "Redis Caching"]
    },
    process: [
      "Discovery & Data Structuring: Mapped semantic entities and recruiter workflows.",
      "Pipeline Development: Built the OCR extraction engine and vector embedding scripts.",
      "API Integration: Developed FastAPI endpoints for search indexing and ranking filters.",
      "Frontend Implementation: Designed the matching dashboard in Next.js.",
      "Performance Tuning: Calibrated vector index parameters to optimize query times."
    ],
    features: [
      "Semantic Candidate Matching: Search candidates using natural language instead of strict keywords.",
      "Real-Time PDF Ingestion: Drag-and-drop resume parser with accurate layout mapping.",
      "Recruiter Collaboration Hub: Share and vote on candidate shortlists.",
      "Automated Match Summaries: GenAI-generated paragraphs explaining why a candidate fits a role."
    ],
    performance: [
      "45% reduction in time-to-match for talent managers.",
      "Average query response time of 120ms across 50,000 candidate profiles.",
      "100% accuracy in parsing multi-column resume layouts."
    ],
    outcomes: [
      "Recruitment pipelines accelerated, shortening hire cycles from 14 days to 4 days.",
      "Increased placement success rates due to semantic intent matching.",
      "Zero manual parsing overhead for the operations team."
    ]
  },
  {
    slug: "thinknshop",
    title: "ThinknShop",
    category: "Headless E-Commerce",
    badge: "thinknshop.in",
    desc: "Architected a high-velocity headless Shopify storefront, integrating sub-second static page generation (ISR), customized inventory grids, and frictionless checkout pipelines.",
    stat: "2.4s Average Load Time Reduction",
    gradient: "from-[#8b5cf6] to-[#d946ef]",
    tools: ["Next.js (React 19)", "Shopify Storefront API", "Tailwind CSS v4"],
    serviceLink: "/services/web-platform",
    serviceName: "Web Development",
    seoTitle: "ThinknShop Headless Shopify Storefront Case Study",
    seoDescription: "Read how V2 Labs Global engineered a headless Shopify storefront for ThinknShop, achieving sub-second load times and increasing conversion rates.",
    clientProblem: "ThinknShop's monolithic Shopify theme was slow, heavy, and bloated with third-party tracking scripts. High load times on mobile devices were causing a 60% bounce rate on product detail pages.",
    businessChallenge: "Migrating to a headless architecture without losing Shopify's robust checkout and order management systems, while ensuring real-time inventory synchronization across dynamic product variants.",
    solution: "We decoupled the storefront using Next.js 15 and React 19. By query-optimizing the Shopify Storefront API and utilizing Incremental Static Regeneration (ISR), product pages load instantly. Dynamic inventory quantities and cart data are updated client-side using optimized React hooks.",
    architecture: [
      "Storefront decoupled from Shopify admin using Next.js static layouts.",
      "Next.js fetches product details from Shopify GraphQL API during build time.",
      "Incremental Static Regeneration updates pages when products change.",
      "Dynamic cart state managed client-side via React context and local storage.",
      "Secure checkout redirected directly to optimized Shopify Checkout pages."
    ],
    techStack: {
      "Storefront Architecture": ["Next.js (React 19)", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
      "Commerce Engine": ["Shopify Storefront API", "GraphQL Code Generator"],
      "Deployment & Edge": ["Vercel CDN Edge", "Cloudflare DNS Optimization"]
    },
    process: [
      "Site Audit & Benchmarking: Identified core render-blocking scripts in the legacy theme.",
      "Schema Design: Drafted optimal GraphQL queries for batching products and collections.",
      "Storefront Engineering: Programmed responsive layouts and responsive image sets.",
      "Inventory Linkage: Integrated webhooks to trigger page revalidation on inventory changes.",
      "SEO Calibration: Configured canonical structures, semantic product schema, and meta attributes."
    ],
    features: [
      "Sub-Second Page Swaps: Native browser prefetching makes page changes feel instant.",
      "Custom Variant Selector: Frictionless variant swapping without page reload lags.",
      "Optimized Search Grid: Instant search filtering across thousands of SKUs.",
      "Frictionless Payment Flow: Single-click Razorpay and international credit card gateway integration."
    ],
    performance: [
      "2.4s average page load time reduction compared to the old theme.",
      "98/100 Mobile Lighthouse Performance score.",
      "Bounce rate decreased from 60% to 28% within 30 days."
    ],
    outcomes: [
      "34% increase in mobile conversion rates.",
      "Organic search impressions grew by 42% due to improved Core Web Vitals.",
      "Editorial team can publish and edit content blocks without affecting performance."
    ]
  },
  {
    slug: "naya-job",
    title: "Naya-Job",
    category: "Full-Stack Portal",
    badge: "Job Search Engine",
    desc: "Designed and engineered a robust digital jobs board engine and applicant management system. Optimized high-concurrency database queries for rapid candidate screening.",
    stat: "Sub-Second Database Query Loads",
    gradient: "from-[#f59e0b] to-[#ec4899]",
    tools: ["React 19", "TypeScript", "Express Backend", "PostgreSQL"],
    serviceLink: "/services/saas-product",
    serviceName: "SaaS Product",
    seoTitle: "Naya-Job Case Study | Custom Full-Stack Job Portal",
    seoDescription: "Discover how V2 Labs Global engineered Naya-Job, a full-stack job board portal, optimizing PostgreSQL queries to handle high concurrency.",
    clientProblem: "The client needed a custom job board application capable of hosting millions of monthly job listings. Existing off-the-shelf software struggled with slow query responses when searching complex job categories.",
    businessChallenge: "Optimizing database index layouts and query execution plans in PostgreSQL to prevent server lockups during high-concurrency search spikes.",
    solution: "We engineered a clean full-stack application using React, Express, and PostgreSQL. We implemented full-text search index grids, material views, and query caching via Redis, keeping response times under 100ms even under heavy loads.",
    architecture: [
      "React single-page application handles interactive layouts.",
      "Express REST API handles authentication and query routing.",
      "PostgreSQL acts as the primary data store with full-text search indexes.",
      "Redis manages cache invalidation structures for common search queries.",
      "Third-party job boards synchronized nightly via automated cron scripts."
    ],
    techStack: {
      "Client Layouts": ["React 19", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      "Backend Framework": ["Node.js & Express", "Prisma ORM", "Redis"],
      "Database & Infrastructure": ["PostgreSQL", "Docker Containers", "Nginx Proxy Server"]
    },
    process: [
      "Database Schema Design: Normalized tables and defined index boundaries.",
      "API Construction: Programmed clean REST routing with query parameters validation.",
      "Search Tuning: Configured PostgreSQL full-text search lexers and rank multipliers.",
      "Cache Configuration: Established Redis cache keys for trending job categories.",
      "Frontend Build: Built a responsive, clean candidate layout dashboard."
    ],
    features: [
      "Full-Text Search Engine: Fast matching across job titles, descriptions, and companies.",
      "Applicant Tracker (ATS): Simple pipeline view for recruiters to move candidates.",
      "Automated Job Alert Crons: Sends daily email highlights to matching candidates.",
      "Bespoke Dashboard Analytics: Live visual chart tracking candidate engagement metrics."
    ],
    performance: [
      "Sub-second (85ms) average database query load time under simulated concurrent users.",
      "Capable of parsing and indexing 5,000 new job listings per minute.",
      "99.95% system uptime maintained during monthly traffic surges."
    ],
    outcomes: [
      "Reduced candidate drop-off rate by 22% due to instant search results.",
      "Recruiters report a 30% speedup in daily applicant evaluations.",
      "Seamless horizontal scaling enabled, allowing future database expansions."
    ]
  },
  {
    slug: "calendar-plus",
    title: "Calendar Plus",
    category: "Custom SaaS System",
    badge: "Calendar & Scheduling",
    desc: "Developed a premium scheduling workflow utility, integrating advanced multi-timezone calendar hooks, drag-and-drop booking slots, and automated meeting notification triggers.",
    stat: "99.9% System Notification Uptime",
    gradient: "from-[#10b981] to-[#059669]",
    tools: ["Next.js App Router", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    serviceLink: "/services/saas-product",
    serviceName: "SaaS Product",
    seoTitle: "Calendar Plus Case Study | Custom Booking SaaS Platform",
    seoDescription: "Read the case study of Calendar Plus, a custom scheduling SaaS platform designed and coded by V2 Labs Global for global teams.",
    clientProblem: "Global teams were experiencing scheduling conflicts and timezone mismatches when using generic calendar tools. Subscription costs for existing booking tools were scaling unsustainably.",
    businessChallenge: "Handling complex timezone calculations, daylight savings shifts, and concurrent booking locks to completely prevent double-booking issues.",
    solution: "We engineered Calendar Plus, a custom SaaS platform. Using Next.js, Prisma, and PostgreSQL, we implemented a custom booking engine that performs timezone offsets server-side. Real-time booking slots are synchronized with Google Calendar and Microsoft Outlook APIs.",
    architecture: [
      "User configures availability windows inside Next.js dashboard.",
      "Client requests available slots; server calculates timezone differences in real-time.",
      "Booking request locked atomically in PostgreSQL database using transaction pipelines.",
      "Webhooks push events to Google / Outlook calendar platforms.",
      "Automated emails and WhatsApp alerts dispatched via messaging cron loops."
    ],
    techStack: {
      "Web Engine": ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
      "Database Layer": ["PostgreSQL", "Prisma ORM", "Redis Locks"],
      "Integrations": ["Google Calendar API", "Microsoft Graph API", "Twilio WhatsApp API"]
    },
    process: [
      "Timezone Blueprinting: Outlined the logic for handling server-side UTC offsets.",
      "API Synchronization: Integrated Google OAuth and calendar calendar sync bridges.",
      "Concurrency Testing: Simulated simultaneous bookings to test database transaction blocks.",
      "Notification Setup: Configured automated reminder pipelines.",
      "Billing Integration: Set up Stripe subscription tiers and coupon codes."
    ],
    features: [
      "Intelligent Timezone Sync: Auto-detects visitor timezone and shifts slots.",
      "Dynamic Availability Rules: Configure custom work hours, buffers, and meeting limits.",
      "Multi-Tenant Tenant Isolation: Individual workspaces with isolated databases.",
      "Integrated Payment Capture: Charge clients directly before booking confirmation."
    ],
    performance: [
      "99.9% message notification dispatch uptime.",
      "Zero double-booking conflicts reported across 10,000+ scheduled sessions.",
      "Visual page interaction load time under 250ms."
    ],
    outcomes: [
      "Client saved over 70% in monthly software licensing fees by moving off off-the-shelf tools.",
      "Reduced meeting no-show rates by 40% due to automated SMS/WhatsApp alerts.",
      "Enhanced business workflow visibility with unified calendar grids."
    ]
  },
  {
    slug: "webproarts",
    title: "WebProArts",
    category: "Creative Media Portal",
    badge: "Custom Brand & Identity",
    desc: "Designed an atomic digital brand identity and developed a high-fidelity media portfolio hub featuring high-concurrency vector asset downloads and fluid animations.",
    stat: "100/100 Lighthouse Performance",
    gradient: "from-[#ef4444] to-[#f97316]",
    tools: ["Figma Systems", "Next.js", "TypeScript", "Framer Motion"],
    serviceLink: "/services/ui-ux-brand",
    serviceName: "UI/UX & Branding",
    seoTitle: "WebProArts Brand Design & Media Portal Case Study",
    seoDescription: "Read how V2 Labs Global created the visual branding system and engineered the high-performance media portfolio portal for WebProArts.",
    clientProblem: "WebProArts' digital presence did not match their creative pedigree. Their legacy portfolio was sluggish, non-responsive, and failed to showcase their premium visual assets effectively.",
    businessChallenge: "Creating a highly interactive website filled with heavy images and motion graphics while maintaining top performance scores and fast rendering speeds.",
    solution: "We designed a custom brand identity system in Figma. We then built a Next.js frontend utilizing Framer Motion for premium, GPU-accelerated micro-animations. Images and videos are dynamically served using modern responsive formats (AVIF/WebP) and optimized for layouts.",
    architecture: [
      "Visual assets designed in Figma and exported into a unified design system.",
      "Frontend built in Next.js using static assets and localized layouts.",
      "Heavy assets cached at edge servers on CDN nodes.",
      "Dynamic interactive grids animated with Framer Motion layout animations.",
      "Responsive image elements utilizing Next.js layout properties."
    ],
    techStack: {
      "Design System": ["Figma", "Atomic Design Framework"],
      "Frontend Portal": ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"],
      "Asset Edge": ["Vercel Edge CDN", "Cloudinary Media Optimization"]
    },
    process: [
      "Brand Exploration: Defined color typography systems, and visual logos.",
      "UI UX Design: Created detailed Figma prototypes for all page variations.",
      "Frontend Coding: Coded clean Next.js layouts with custom CSS grid blocks.",
      "Animation Tuning: Configured smooth spring animations for a responsive, interactive feel.",
      "Performance Audit: Compressed visual assets to guarantee fast load times."
    ],
    features: [
      "GPU-Accelerated Transitions: Interactive pages glide smoothly without visual lag.",
      "Asset Showcase Grid: Dynamic filtering of creative categories with smooth layouts.",
      "Responsive Media Layouts: Optimized layout responsiveness from smartphones to ultra-wide displays.",
      "Integrated Contact Portals: Conversion paths connected to automated email workflows."
    ],
    performance: [
      "100/100 Lighthouse Performance, Accessibility, and SEO scores.",
      "Page load time under 300ms on high-speed connections.",
      "Asset download latency reduced by 60% using CDN endpoints."
    ],
    outcomes: [
      "Brand image elevated, attracting high-profile corporate clients.",
      "User session duration increased by 80% due to the engaging design.",
      "High rankings achieved for brand entity keywords in organic search results."
    ]
  }
];
