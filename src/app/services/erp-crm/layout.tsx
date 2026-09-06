import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd, siteConfig, absoluteUrl } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Custom ERP & CRM Development Company Mumbai Thane | V2 Labs Global",
  description:
    "V2 Labs Global engineers custom ERP and CRM software for SMEs and mid-market enterprises. Zero per-seat licensing, automated operational workflows, GST/inventory sync, and full data ownership.",
  path: "/services/erp-crm",
  keywords: [
    "custom ERP development company Mumbai",
    "custom CRM development company Thane",
    "ERP software developers Bhayandar",
    "manufacturing ERP development India",
    "SME ERP software solutions",
    "custom sales CRM development",
    "business workflow automation software",
    "enterprise database engineering",
    "inventory management ERP system",
  ],
});

export default function ErpCrmLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Custom ERP & CRM Development", path: "/services/erp-crm" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "What is custom ERP and CRM software development?",
      answer:
        "Custom ERP and CRM development involves engineering bespoke, proprietary software architectures designed specifically around an organization's unique operational workflows, data structures, and business logic. Unlike off-the-shelf software with rigid templates, custom systems offer zero per-seat licensing fees, total data ownership, and seamless integration with existing tools."
    },
    {
      question: "How much does custom ERP/CRM development cost for an enterprise or SME?",
      answer:
        "Custom ERP and CRM investments depend on scope, database complexity, workflow automation, and third-party integrations. Foundational modular systems typically range between ₹1,50,000 to ₹3,50,000, while multi-warehouse, automated enterprise platforms with advanced role-based access control and legacy migrations range from ₹5,00,000 to ₹15,00,000+ with zero ongoing user license penalties."
    },
    {
      question: "Why choose custom ERP/CRM over off-the-shelf platforms like Zoho, Salesforce, or SAP?",
      answer:
        "Off-the-shelf platforms impose compounding monthly per-user subscription fees, lock proprietary data inside third-party ecosystems, and force teams to adapt to rigid interfaces. A custom ERP/CRM engineered by V2 Labs Global eliminates recurring per-seat licensing, adapts 100% to your company's Standard Operating Procedures (SOPs), and provides complete IP and source code ownership."
    },
    {
      question: "Can custom ERP integrate with GST, e-invoicing, and Indian accounting workflows?",
      answer:
        "Yes. V2 Labs Global builds native integrations with GST portals, automated e-invoicing, E-way bill generation, Tally data synchronization, and payment gateways like Razorpay, ensuring seamless regulatory compliance for Indian and international trade."
    },
    {
      question: "How long does it take to deploy a custom ERP or CRM system?",
      answer:
        "Development typically follows an agile, phased delivery model. Core functional modules (MVP) are deployed within 4 to 6 weeks for user validation. Complete enterprise-wide multi-module architectures with data migration, QA stress testing, and staff onboarding are deployed in 10 to 16 weeks."
    },
    {
      question: "Who owns the source code and database in a custom V2 Labs Global deployment?",
      answer:
        "The client retains 100% intellectual property (IP), source code, and database ownership. Systems are deployed directly inside the client's private cloud infrastructure (AWS, DigitalOcean, or private VPC), guaranteeing zero vendor lock-in."
    }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/erp-crm/#service`,
    name: "Custom ERP & CRM Software Development",
    serviceType: "Enterprise Software & Database Engineering",
    description:
      "Full-cycle engineering of custom ERP and CRM systems, warehouse inventory databases, automated sales pipelines, and business process automation.",
    url: absoluteUrl("/services/erp-crm"),
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Bhayandar" },
      { "@type": "City", name: "Mira Road" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "Country", name: "India" },
      "Worldwide",
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "SMEs, Manufacturing Enterprises, Wholesale Distributors, and High-Growth Service Companies",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom ERP and CRM Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manufacturing & SME ERP Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Velocity Sales & Lead Management CRM",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Warehouse & Multi-Godown Inventory Systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GST & Business Process Automation Pipelines",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}

