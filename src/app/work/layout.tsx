import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Work & Case Studies | Premium AI & Software Portfolio",
  description:
    "Explore V2 Labs Global engineering portfolio and custom case studies across AI solutions, high-performance web platforms, and SaaS products.",
  path: "/work",
  keywords: [
    "V2Labs portfolio",
    "software case studies",
    "headless commerce projects",
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
