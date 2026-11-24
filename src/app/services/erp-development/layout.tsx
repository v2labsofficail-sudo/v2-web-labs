import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Custom ERP Software Development Services",
  description:
    "Custom ERP software development company in Mumbai & Mira Bhayandar. Tailored ERP systems for manufacturing, inventory, accounting, and supply chain management.",
  path: "/services/erp-development",
  keywords: [
    "ERP Software Development",
    "Custom ERP Development",
    "ERP software company in Mira Bhayandar",
    "Enterprise resource planning software",
    "Manufacturing ERP software Mumbai",
    "Custom inventory management software",
  ],
});

const faqs = [
  {
    question: "Why should we build custom ERP software instead of using off-the-shelf software like SAP?",
    answer: "Off-the-shelf ERP platforms charge exorbitant per-user monthly licenses, take months to customize, and force your team into rigid workflows. A bespoke ERP built by V2 Labs Global matches your exact operational processes, has zero recurring per-user fees, and scales infinitely."
  },
  {
    question: "Can custom ERP integrate with Tally and GST portals in India?",
    answer: "Yes, our ERP systems generate GST-compliant e-invoices, e-way bills, and integrate seamlessly with Tally, banking APIs, and barcode scanning systems."
  },
  {
    question: "How long does it take to develop and deploy custom ERP software?",
    answer: "Core ERP operational modules (e.g., inventory + procurement + invoicing) typically deploy within 6 to 10 weeks. We follow an agile phase-by-phase rollout so your team sees value immediately."
  },
  {
    question: "Is our business data secure in a custom ERP system?",
    answer: "Yes, we implement bank-grade PostgreSQL encryption, role-based access control (RBAC), multi-factor authentication, audit logs for every transaction, and automated daily encrypted off-site cloud backups."
  }
];

export default function ErpDevelopmentLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "ERP Development", path: "/services/erp-development" },
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
