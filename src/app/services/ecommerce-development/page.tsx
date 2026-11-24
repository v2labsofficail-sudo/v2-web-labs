import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function EcommerceDevelopmentPage() {
  return (
    <ServiceDetailTemplate
      badge="Custom E-Commerce Architecture"
      h1="E-commerce Website Development Services in Mumbai"
      subtitle="Custom online shopping platforms, headless commerce storefronts, B2B wholesale portals, and automated checkout infrastructure."
      intro="Whether launching an ambitious direct-to-consumer brand, scaling a multi-category retail catalog, or building a high-volume B2B wholesale portal, you need an e-commerce platform that never crashes under flash sales, handles complex shipping calculations, and provides an effortless buying experience. V2 Labs Global engineers bespoke e-commerce solutions tailored for growing businesses in Mumbai, Thane, and across India."
      capabilities={[
        {
          title: "Custom E-Commerce Portals",
          desc: "Full-stack e-commerce platforms engineered with Next.js and Node.js with zero monthly platform licensing fees, custom product builders, and unlimited catalog scale.",
          badge: "Full Ownership"
        },
        {
          title: "Headless E-Commerce Frontends",
          desc: "Decoupled frontend shopping experiences connected to Medusa.js, Shopify, or custom backends delivering sub-500ms page transitions and instant cart updates.",
          badge: "Headless Speed"
        },
        {
          title: "B2B Wholesale & Distributor Portals",
          desc: "Tiered customer pricing, credit approval workflows, bulk order CSV uploads, automated GST invoicing, and minimum order quantity enforcement.",
          badge: "B2B Wholesale"
        },
        {
          title: "Payment Gateway & Logistics Hub",
          desc: "Pre-integrated with Razorpay, Cashfree, Stripe, PayU, and shipping aggregators like Shiprocket, Pickrr, and Delhivery with real-time tracking.",
          badge: "Unified Logistics"
        },
        {
          title: "Automated Abandoned Cart Recovery",
          desc: "Intelligent recovery pipelines powered by WhatsApp and automated transactional emails that recover up to 25% of dropped checkouts.",
          badge: "Revenue Maximizer"
        },
        {
          title: "Multi-Store & Omnichannel Sync",
          desc: "Synchronize inventory across your website, physical retail outlets, Amazon, and Flipkart from one centralized operational backend.",
          badge: "Omnichannel"
        }
      ]}
      benefits={[
        {
          title: "Zero Revenue-Share Penalties",
          desc: "Avoid paying 1-2% platform commissions on your hard-earned gross sales with our custom, self-hosted e-commerce architecture."
        },
        {
          title: "High-Concurrency Flash-Sale Stability",
          desc: "Scalable cloud databases that handle thousands of simultaneous checkout attempts during festive sales without server crashes."
        },
        {
          title: "Tailored to Indian Customer Habits",
          desc: "Integrated COD verification, UPI 1-click checkouts, pin code delivery validation, and WhatsApp order status notifications."
        },
        {
          title: "Complete Data Sovereignty",
          desc: "Your customer data, order history, and product analytics belong entirely to you, securely housed in encrypted PostgreSQL databases."
        }
      ]}
      process={[
        { step: "01", title: "Catalog & Workflow Discovery", desc: "Mapping your SKU structure, pricing rules, tax requirements, and inventory logistics." },
        { step: "02", title: "High-Converting UI/UX Design", desc: "Designing intuitive product detail pages, instant search filters, and 2-step checkout flows." },
        { step: "03", title: "Full-Stack Development", desc: "Developing secure cart logic, database schemas, inventory synchronization, and API bridges." },
        { step: "04", title: "Payment & Security QA", desc: "End-to-end sandbox payment testing, fraud heuristic checks, and load stress testing." },
        { step: "05", title: "Go-Live & Growth", desc: "Production cutover, automated backup routines, analytics tracking setup, and ongoing support." }
      ]}
      techStack={["Next.js", "React 19", "Node.js", "PostgreSQL", "Prisma ORM", "Redis", "Razorpay / Stripe", "Shiprocket"]}
      faqs={[
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
      ]}
      currentSlug="ecommerce-development"
    />
  );
}
