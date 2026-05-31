import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Web Development Company Services",
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
  return children;
}
