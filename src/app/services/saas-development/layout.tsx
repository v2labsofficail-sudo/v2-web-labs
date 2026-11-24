import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SaaS Application Development Company",
  description:
    "Full-cycle SaaS application development company in Mumbai. Multi-tenant cloud architectures, subscription billing, MVP engineering, and scalable REST/GraphQL APIs.",
  path: "/services/saas-development",
  keywords: [
    "SaaS Application Development Company",
    "SaaS MVP development Mumbai",
    "Multi-tenant SaaS development",
    "Cloud application development",
    "Custom SaaS engineering Bhayandar",
    "Subscription software development",
  ],
});

const faqs = [
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
];

export default function SaasDevelopmentLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SaaS Development", path: "/services/saas-development" },
  ]);

  const faqJson = buildFaqJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
