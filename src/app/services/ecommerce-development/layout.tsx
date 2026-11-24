import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "E-commerce Website Development Services",
  description:
    "Custom e-commerce website development company in Mumbai. Next.js headless storefronts, custom shopping carts, secure payments, and ERP inventory synchronization.",
  path: "/services/ecommerce-development",
  keywords: [
    "E-commerce Website Development",
    "Ecommerce website development company",
    "Custom ecommerce portal Mumbai",
    "Headless ecommerce development",
    "B2B ecommerce platform",
    "Online store development Bhayandar",
  ],
});

const faqs = [
  {
    question: "Should we build a custom e-commerce platform or use Shopify/WooCommerce?",
    answer: "For standard consumer retail, Shopify or WooCommerce is usually fastest and most cost-effective. For complex wholesale (B2B), custom pricing tiers, bespoke configuration tools, or multi-vendor marketplaces, a custom Next.js e-commerce architecture is far superior and eliminates platform revenue share."
  },
  {
    question: "Can you build B2B e-commerce portals with custom credit terms and bulk pricing?",
    answer: "Yes, we engineer specialized B2B e-commerce platforms featuring tiered wholesale pricing, minimum order quantities (MOQs), GST invoice generation, custom credit limits, and purchase order approvals."
  },
  {
    question: "How do you ensure transaction security on e-commerce stores?",
    answer: "We employ PCI-DSS compliant checkout tokenization, end-to-end SSL/TLS encryption, automated fraud detection heuristics, and secure webhooks so sensitive credit card numbers never touch your application database."
  },
  {
    question: "Do you integrate with Indian shipping aggregators like Shiprocket and Delhivery?",
    answer: "Yes, we configure automated order dispatch, real-time AWB tracking number generation, automated WhatsApp delivery updates, and automated return pickup workflows."
  }
];

export default function EcommerceDevelopmentLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "E-commerce Development", path: "/services/ecommerce-development" },
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
