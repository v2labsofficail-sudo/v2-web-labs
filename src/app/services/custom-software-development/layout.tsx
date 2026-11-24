import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Custom Software Development Company Mumbai",
  description:
    "Bespoke custom software development company in Mumbai & Mira Bhayandar. Scalable enterprise web applications, custom databases, workflow automation, and APIs.",
  path: "/services/custom-software-development",
  keywords: [
    "Custom Software Development",
    "Software development company in Mira Bhayandar",
    "Custom software development Mumbai",
    "Bespoke business software",
    "Enterprise web applications",
    "Custom API development",
  ],
});

const faqs = [
  {
    question: "What types of custom software does V2 Labs Global engineer?",
    answer: "We engineer bespoke enterprise web applications, operational database portals, custom CRM/ERP systems, automated workflow pipelines, customer self-service portals, and cloud integrations."
  },
  {
    question: "How do you ensure custom software aligns with our existing legacy systems?",
    answer: "We design robust API bridges and ETL data connectors that interface smoothly with your existing accounting tools, legacy SQL databases, third-party software, and hardware sensors."
  },
  {
    question: "Do you provide post-launch maintenance and feature expansion?",
    answer: "Yes, we provide flexible ongoing maintenance Service Level Agreements (SLAs), including security patch updates, server health monitoring, bug fixes, and continuous feature expansion."
  },
  {
    question: "How is pricing structured for custom software development?",
    answer: "We offer both fixed-price milestone delivery for well-defined scopes and dedicated sprint-based retainers for evolving, long-term product engineering."
  }
];

export default function CustomSoftwareDevelopmentLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Custom Software Development", path: "/services/custom-software-development" },
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
