import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ShopifyDevelopmentPage() {
  return (
    <ServiceDetailTemplate
      badge="Custom Shopify Engineering"
      h1="Shopify Website Development Services in Mumbai"
      subtitle="Bespoke Shopify 2.0 theme development, custom Liquid sections, ERP inventory integration, and checkout optimization that drives real revenue."
      intro="Selling online requires more than just an out-of-the-box template. Modern direct-to-consumer (D2C) brands and multi-channel retailers need high-speed storefronts, smooth mobile checkout funnels, and automated inventory logistics. V2 Labs Global delivers premier Shopify development in Mira Bhayandar and Mumbai, transforming storefronts into high-converting digital shopping engines."
      capabilities={[
        {
          title: "Custom Shopify 2.0 Themes",
          desc: "Bespoke storefronts engineered with modular Liquid sections, allowing your marketing team to customize banners, collections, and layouts on the fly.",
          badge: "Shopify OS 2.0"
        },
        {
          title: "Conversion-Rate Optimization (CRO)",
          desc: "Strategic checkout flows, 1-click upsells, sticky add-to-cart bars, trust badges, and lightning-fast product pages designed to boost average order value (AOV).",
          badge: "Higher Conversions"
        },
        {
          title: "ERP, CRM & Warehouse Integration",
          desc: "Automated two-way inventory sync, ERP connectors, Tally/Zoho accounting synchronization, and multi-location warehouse management.",
          badge: "Operations Sync"
        },
        {
          title: "Indian Payment Gateway Setup",
          desc: "Flawless integration of Razorpay, Cashfree, PayU, PhonePe, and COD with automated SMS/WhatsApp OTP verification to minimize RTO losses.",
          badge: "Payment Architecture"
        },
        {
          title: "Custom Shopify App Development",
          desc: "Private and public Shopify apps built with Node.js and React to extend store capabilities with tailored pricing algorithms, B2B portals, and custom calculators.",
          badge: "Bespoke Apps"
        },
        {
          title: "Store Speed & Core Web Vitals Tuning",
          desc: "Eliminating app clutter, optimizing script loading order, compressing visual assets, and boosting mobile Lighthouse scores for superior search indexing.",
          badge: "Fast Storefront"
        }
      ]}
      benefits={[
        {
          title: "Increased Conversion Rates",
          desc: "Frictionless mobile navigation, rapid product filtering, and streamlined checkouts convert casual visitors into paying customers."
        },
        {
          title: "Reduced Return-to-Origin (RTO)",
          desc: "Automated COD verification via WhatsApp and SMS eliminates fake and fraudulent orders before fulfillment."
        },
        {
          title: "No App Overload",
          desc: "We code critical features natively into your theme instead of stacking dozens of expensive, page-slowing third-party apps."
        },
        {
          title: "Dedicated Mumbai Development Team",
          desc: "Work directly with local developers in Bhayandar East who understand the Indian retail market, festive campaigns, and local customer psychology."
        }
      ]}
      process={[
        { step: "01", title: "Strategy & SKU Analysis", desc: "Reviewing your product catalog, target demographic, shipping workflows, and competitor stores." },
        { step: "02", title: "Custom UI/UX Mockups", desc: "Creating high-converting desktop and mobile storefront designs in Figma." },
        { step: "03", title: "Liquid & Section Coding", desc: "Developing bespoke Shopify 2.0 components with native Theme Customizer controls." },
        { step: "04", title: "Apps & Gateway Sync", desc: "Connecting payment gateways, logistics partners (Shiprocket, Delhivery), and analytics." },
        { step: "05", title: "Launch & Growth Support", desc: "Complete testing, DNS cutover, conversion tracking verification, and post-launch support." }
      ]}
      techStack={["Shopify Plus", "Liquid 2.0", "JavaScript / TypeScript", "Tailwind CSS", "Shopify Storefront API", "Node.js", "Razorpay / Cashfree", "Shiprocket"]}
      faqs={[
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
      ]}
      currentSlug="shopify-development"
    />
  );
}
