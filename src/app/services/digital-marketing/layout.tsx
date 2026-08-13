import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SEO & Growth Marketing Services",
  description:
    "Enterprise SEO, AEO, and GEO optimization services. We build organic search loops, custom landing pages, and search visibility growth engines.",
  path: "/services/digital-marketing",
  keywords: [
    "digital marketing services",
    "SEO services",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "search engine optimization",
    "content strategy",
    "landing page optimization",
  ],
});

export default function DigitalMarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
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

