import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI Solutions Services",
  description:
    "V2Labs Global is an AI solutions company delivering automation workflows, LLM integrations, intelligent assistants, and operational AI systems.",
  path: "/services/ai-automation",
  keywords: [
    "AI Solutions Company",
    "AI automation agency",
    "LLM integration services",
    "Business automation company",
  ],
});

export default function AiAutomationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "AI Solutions Services", path: "/services/ai-automation" },
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
