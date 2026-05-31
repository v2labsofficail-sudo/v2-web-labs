import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore V2Labs Global services across web development, AI solutions, branding, ERP CRM delivery, SaaS engineering, and digital marketing.",
  path: "/services",
  keywords: [
    "V2Labs services",
    "Web development services",
    "AI solutions services",
    "Branding services",
    "ERP CRM services",
    "Digital marketing services",
  ],
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
