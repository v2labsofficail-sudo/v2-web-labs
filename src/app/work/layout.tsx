import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Work and Case Studies",
  description:
    "Explore V2Labs Global case studies across AI platforms, web development, SaaS products, branding systems, and ERP CRM solutions.",
  path: "/work",
  keywords: [
    "V2Labs portfolio",
    "V2Labs case studies",
    "Web development projects",
    "AI solutions portfolio",
  ],
});

export default function WorkLayout({ children }: { children: ReactNode }) {
  return children;
}
