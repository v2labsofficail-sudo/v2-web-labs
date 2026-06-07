import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";
// 1
export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Meet V2Labs Global, a digital agency building AI solutions, web platforms, branding systems, and scalable ERP CRM solutions for ambitious companies.",
  path: "/about",
  keywords: [
    "About V2Labs Global",
    "V2Labs team",
    "Digital agency team",
    "AI solutions agency",
  ],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
