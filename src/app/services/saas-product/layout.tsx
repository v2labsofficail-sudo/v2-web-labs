import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SaaS Product Development Company | Custom SaaS MVPs",
  description:
    "Scale from MVP to multi-tenant SaaS application architecture. Custom SaaS product development services, subscription billing, and dashboard analytics.",
  path: "/services/saas-product",
  keywords: [
    "SaaS development company",
    "SaaS product development",
    "SaaS MVP development",
    "custom SaaS development",
    "multi tenant SaaS development",
    "SaaS application development",
    "SaaS platform development",
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
      question: "How much does SaaS development cost?",
      answer: "The cost depends on system complexity, integration count, data pipelines, and timeline. We develop scalable MVPs starting from fixed rates and customized enterprise quotes."
    },
    {
      question: "Can you build a multi-tenant SaaS application?",
      answer: "Yes, we specialize in multi-tenant SaaS architectures, ensuring strict tenant data isolation, secure authentication, customized subdomains routing, and scalable API access."
    },
    {
      question: "Can you develop an MVP?",
      answer: "Yes, we prioritize rapid prototyping and MVP engineering to help startups launch in as little as 4 to 6 weeks with core functional features, clean UI, and scalable databases."
    },
    {
      question: "Can you integrate subscription billing?",
      answer: "Absolutely. We integrate Stripe, Razorpay, or Paddle subscription billing engines, including automated recurring invoices, customer portals, billing webhooks, and dunning workflows."
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

