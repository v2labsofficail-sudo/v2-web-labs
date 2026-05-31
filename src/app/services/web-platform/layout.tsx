import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Web Development Services",
  description:
    "V2Labs Global is a web development company building high-performance Next.js platforms, enterprise websites, headless commerce, and scalable digital experiences.",
  path: "/services/web-platform",
  keywords: [
    "Web Development Company",
    "Next.js development company",
    "Website development agency",
    "Enterprise web development",
  ],
});

export default function WebPlatformLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Web Development Services", path: "/services/web-platform" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      {children}
    </>
  );
}
