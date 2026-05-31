import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Branding Services",
  description:
    "V2Labs Global is a branding agency crafting UI UX systems, design language foundations, prototypes, and visual identities for digital products.",
  path: "/services/ui-ux-brand",
  keywords: [
    "Branding Agency",
    "UI UX design agency",
    "Brand identity design company",
    "Product design services",
  ],
});

export default function UiUxBrandLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
