import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Shopify Website Development Services",
  description:
    "Custom Shopify development services in Mira Bhayandar & Mumbai. Liquid theme customization, custom apps, ERP inventory sync, and high-converting checkout flows.",
  path: "/services/shopify-development",
  keywords: [
    "Shopify Development Services",
    "Shopify website development Mira Bhayandar",
    "Custom Shopify theme development",
    "Shopify Plus agency Mumbai",
    "Shopify app development",
    "Shopify store redesign",
  ],
});

const faqs = [
  {
    question: "Can you build custom Shopify Liquid sections that match our exact design?",
    answer: "Yes, we code bespoke Shopify 2.0 Liquid sections and blocks that integrate directly into the Shopify visual theme editor, allowing you to reorder, customize, and add banners easily without touching code."
  },
  {
    question: "Do you integrate Indian payment gateways with Shopify?",
    answer: "Yes, we integrate and configure Razorpay, Cashfree, PayU, PhonePe, Paytm, and COD with automated OTP verification to prevent fake orders and lower RTO rates."
  },
  {
    question: "Can you sync Shopify inventory with our offline warehouse or custom ERP?",
    answer: "Absolutely. We engineer custom Shopify apps and webhooks that automatically synchronize product stock, order status, customer data, and GST invoices between Shopify and your ERP/CRM systems."
  },
  {
    question: "How do you improve Shopify page speed scores?",
    answer: "We audit and eliminate unused third-party JavaScript apps, optimize images with next-gen formats, implement lazy loading, and inline critical CSS to achieve top mobile page speed scores."
  }
];

export default function ShopifyDevelopmentLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Shopify Development", path: "/services/shopify-development" },
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
