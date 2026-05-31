import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact V2Labs Global",
  description:
    "Contact V2Labs Global to start an AI solutions, web development, branding, SaaS, or ERP CRM project with our digital agency team.",
  path: "/contact",
  keywords: [
    "Contact V2Labs Global",
    "Hire web development company",
    "Hire AI solutions company",
    "Branding agency contact",
  ],
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
