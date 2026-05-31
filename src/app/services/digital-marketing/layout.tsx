import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Digital Marketing Services",
  description:
    "V2Labs Global delivers digital marketing services including SEO, landing-page optimization, content strategy, and growth campaigns for modern brands.",
  path: "/services/digital-marketing",
  keywords: [
    "Digital marketing services",
    "SEO agency",
    "Landing page optimization",
    "Content marketing services",
  ],
});

export default function DigitalMarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
