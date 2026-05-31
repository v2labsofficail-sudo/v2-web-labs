import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SaaS Product Development Services",
  description:
    "V2Labs Global builds SaaS products, MVPs, product platforms, and scalable web applications with modern architecture and conversion-focused UX.",
  path: "/services/saas-product",
  keywords: [
    "SaaS product development",
    "MVP development company",
    "Software product agency",
    "Custom SaaS development",
  ],
});

export default function SaasProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
