import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";
// 1
export const metadata = buildPageMetadata({
  title: "About Us | Enterprise AI & Software Engineering",
  description:
    "Meet V2 Labs Global, a premium software engineering agency building enterprise AI solutions, custom web platforms, and SaaS products. Read our story.",
  path: "/about",
  keywords: [
    "V2 Labs founders",
    "software developers Mumbai",
    "AI solutions company team",
    "custom software architects",
  ],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
