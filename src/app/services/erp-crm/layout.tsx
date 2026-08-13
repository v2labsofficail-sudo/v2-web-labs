import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Custom ERP CRM Development | Enterprise Business Automation",
  description:
    "Design and develop custom ERP and CRM solutions, database connections, and business workflows to streamline operations. Start your project.",
  path: "/services/erp-crm",
  keywords: [
    "custom ERP CRM development",
    "ERP software development",
    "CRM software development",
    "custom ERP development",
    "custom CRM development",
    "ERP development company",
    "CRM development company",
    "business automation software",
  ],
});

export default function ErpCrmLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "ERP CRM Services", path: "/services/erp-crm" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "How much does custom ERP development cost?",
      answer: "Custom ERP development cost varies based on structural complexity, user counts, database volumes, and integration points. We offer fixed pricing starting from ₹15,000 for essentials up to Professional and Enterprise tiers."
    },
    {
      question: "Can ERP software be customized for a business?",
      answer: "Yes, our ERP CRM setups are built entirely from scratch around the workflows your business actually uses, rather than forcing you to fit into bloated off-the-shelf software."
    },
    {
      question: "Can you integrate CRM with ERP?",
      answer: "Yes, we connect customer relationship management databases with backend billing systems, inventory catalogs, and HR payroll grids using API interfaces."
    },
    {
      question: "Can ERP software include inventory management?",
      answer: "Yes, we build comprehensive inventory tracking sheets, automatic stock replenishment workflows, barcode scanner compatibility, and real-time dispatch dashboards."
    },
    {
      question: "How long does custom ERP development take?",
      answer: "An essential ERP system takes about 3 to 5 weeks to configure and deploy, while custom enterprise platforms require 8 to 12 weeks of engineering, testing, and training."
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

