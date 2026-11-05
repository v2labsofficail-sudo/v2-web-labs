import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Work & Case Studies | Website Development & Software Portfolio",
  description:
    "Explore V2 Labs Global's engineering portfolio and client case studies across web platforms, Shopify stores, custom ERP/CRM engines, and AI automation systems.",
  path: "/work",
  keywords: [
    "V2 Labs Global portfolio",
    "website development case studies",
    "software project portfolio",
    "custom ERP case studies",
    "AI automation systems portfolio",
  ],
});

export default function WorkLayout({ children }: { children: ReactNode }) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
