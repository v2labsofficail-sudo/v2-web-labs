import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SaaS Product & Custom Software Engineering",
  description:
    "Scale from concept to multi-tenant SaaS architecture. Custom SaaS product development, MVP engineering, subscription billing, and web software in Mumbai.",
  path: "/services/saas-product",
  keywords: [
    "SaaS development company",
    "SaaS application development",
    "SaaS MVP development",
    "Startup software development",
    "Custom software development company",
    "Software development company in Mira Bhayandar",
    "Web application development",
    "Product development agency",
    "Multi-tenant SaaS development",
    "Custom software development Mumbai",
  ],
});

export default function SaasProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SaaS Product Development", path: "/services/saas-product" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "How long does it take to develop a SaaS MVP?",
      answer: "We engineer lean, production-ready SaaS MVPs in 2 to 4 weeks with core user journeys, secure authentication, Stripe/Razorpay billing, and scalable PostgreSQL database schemas."
    },
    {
      question: "Can you build multi-tenant SaaS applications?",
      answer: "Yes, we specialize in multi-tenant SaaS architectures, ensuring strict tenant data isolation, role-based access control, customized subdomain routing, and high-performance API endpoints."
    },
    {
      question: "Who owns the SaaS product intellectual property (IP)?",
      answer: "You do. We transfer 100% ownership of source code, design systems, and database configurations upon project completion with zero vendor lock-in."
    },
    {
      question: "Can you integrate automated subscription billing?",
      answer: "Yes, we implement complete subscription monetization using Stripe Billing, Razorpay Subscriptions, and Lemon Squeezy with automated webhook handling, invoice generation, and tier upgrade flows."
    }
  ]);

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
