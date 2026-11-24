import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "WordPress Development Company Mumbai",
  description:
    "Custom WordPress development company in Mira Bhayandar & Mumbai. Bespoke themes, secure plugin development, headless WordPress, and speed optimization.",
  path: "/services/wordpress-development",
  keywords: [
    "WordPress Development Company",
    "WordPress development in Bhayandar",
    "Custom WordPress development",
    "WordPress theme development Mumbai",
    "WooCommerce development company",
    "Headless WordPress development",
  ],
});

const faqs = [
  {
    question: "Do you use pre-made bloated WordPress themes or build custom themes?",
    answer: "We engineer custom, lightweight WordPress themes from scratch with clean PHP, modern CSS, and minimal plugin dependencies to ensure lightning-fast loading speeds and tight security."
  },
  {
    question: "Can you speed up our existing slow WordPress site?",
    answer: "Yes, we audit and optimize slow WordPress sites by streamlining database queries, implementing object caching (Redis), compressing assets, removing redundant plugins, and configuring high-speed CDN delivery."
  },
  {
    question: "Do you build custom WordPress plugins for specific business workflows?",
    answer: "Yes, we develop bespoke WordPress plugins tailored to your exact business logic, third-party API integrations, CRM synchronization, and payment gateways."
  },
  {
    question: "How do you protect WordPress sites from malware and security vulnerabilities?",
    answer: "We harden WordPress installations with firewall rules, role-based access restrictions, automated security patch updates, daily off-site backups, and SSL/TLS encryption."
  }
];

export default function WordPressDevelopmentLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "WordPress Development", path: "/services/wordpress-development" },
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
