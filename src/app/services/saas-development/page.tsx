import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function SaasDevelopmentPage() {
  return (
    <ServiceDetailTemplate
      badge="Full-Lifecycle SaaS Engineering"
      h1="SaaS Application Development Company in Mumbai"
      subtitle="Engineering high-scale multi-tenant cloud software, robust APIs, automated subscription billing, and investor-ready MVPs."
      intro="Turning a software concept into a reliable, scalable Software-as-a-Service (SaaS) business requires resilient cloud engineering, clean modular code, and high-converting onboarding flows. V2 Labs Global partners with startup founders, bootstrapped entrepreneurs, and enterprise spin-offs across Mumbai and Mira Bhayandar, architecting production-grade SaaS products built for global scale."
      capabilities={[
        {
          title: "Multi-Tenant Cloud Architecture",
          desc: "Secure, horizontally scalable cloud systems with strict row-level security (RLS), isolated database schemas, and global CDN caching.",
          badge: "Multi-Tenant"
        },
        {
          title: "SaaS MVP Development (6-10 Weeks)",
          desc: "Fast, disciplined MVP engineering focusing on core value delivery, rapid user feedback collection, and investor demo readiness.",
          badge: "Rapid MVP"
        },
        {
          title: "Recurring Subscription Billing & Tax",
          desc: "Automated recurring payments via Stripe, Lemon Squeezy, or Razorpay with tier upgrades, usage-based metering, coupon codes, and global tax compliance.",
          badge: "Subscription Engine"
        },
        {
          title: "Authentication & Role-Based Access (RBAC)",
          desc: "OAuth2, Google/GitHub social logins, SAML SSO for enterprise tiers, two-factor authentication (2FA), and granular permission control.",
          badge: "Security & Auth"
        },
        {
          title: "API-First & Microservices Design",
          desc: "RESTful and GraphQL APIs equipped with rate-limiting, comprehensive Swagger/OpenAPI documentation, and webhook delivery infrastructure.",
          badge: "Developer APIs"
        },
        {
          title: "Real-Time Telemetry & Analytics",
          desc: "Integrated user behavior tracking, error logging with Sentry, churn rate analytics, and real-time operational health dashboards.",
          badge: "Product Intelligence"
        }
      ]}
      benefits={[
        {
          title: "Rapid Time-to-Market",
          desc: "Launch your functional MVP in 6 to 10 weeks using our pre-built, production-tested authentication, billing, and notification boilerplates."
        },
        {
          title: "Zero Architectural Technical Debt",
          desc: "Clean TypeScript and Next.js codebase that your internal engineering team or future hires can easily understand, maintain, and expand."
        },
        {
          title: "Infinitely Scalable Infrastructure",
          desc: "Cloud-native architectures that automatically scale to handle surges from 1,000 to 1,000,000 daily active users without latency spikes."
        },
        {
          title: "100% IP & Code Ownership",
          desc: "All source code, Docker configs, database schemas, and intellectual property remain 100% yours with zero vendor lock-in."
        }
      ]}
      process={[
        { step: "01", title: "Product Scope & Wireframing", desc: "Defining user stories, database models, technical requirements, and core feature boundaries." },
        { step: "02", title: "High-Fidelity UI/UX Design", desc: "Crafting modern dashboard interfaces, interactive state prototypes, and responsive components." },
        { step: "03", title: "Sprint Development", desc: "Bi-weekly development sprints with live staging demo environments and continuous code reviews." },
        { step: "04", title: "Security & Stress Testing", desc: "Penetration tests, simulated tenant data leaks, load concurrency tests, and automated QA." },
        { step: "05", title: "Launch & Growth Scaling", desc: "Production cloud cutover, monitoring setup, customer feedback integration, and feature roadmap execution." }
      ]}
      techStack={["Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Prisma ORM", "Stripe / Lemon Squeezy", "AWS / Vercel"]}
      faqs={[
        {
          question: "How long does it take to develop a market-ready SaaS MVP?",
          answer: "A focused, functional SaaS Minimum Viable Product (MVP) with core user authentication, multi-tenant databases, Stripe/Razorpay subscription billing, and main feature logic typically launches within 6 to 10 weeks."
        },
        {
          question: "How do you ensure data isolation in multi-tenant SaaS architecture?",
          answer: "We implement rigorous multi-tenant data isolation using tenant-aware database schemas or isolated row-level security (RLS) in PostgreSQL, ensuring no customer can ever access another tenant's private records."
        },
        {
          question: "Can you help integrate international recurring subscription payments?",
          answer: "Yes, we integrate Stripe Billing, Lemon Squeezy, Paddle, and Razorpay Subscriptions with automated recurring billing, proration, failed payment dunning sequences, and customer billing portals."
        },
        {
          question: "Who owns the intellectual property (IP) and code of the SaaS product?",
          answer: "You own 100% of the intellectual property, code repository, database schemas, and digital assets. We sign strict non-disclosure agreements (NDAs) before discovery."
        }
      ]}
      currentSlug="saas-development"
    />
  );
}
