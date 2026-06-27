import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Pricing Plans",
  description:
    "Explore our flexible and transparent pricing plans for website development, branding, e-commerce stores, and custom ERP CRM solutions.",
  path: "/plans",
  keywords: [
    "V2Labs plans",
    "Pricing plans",
    "Website development pricing",
    "Branding package pricing",
    "E-commerce setup cost",
    "ERP CRM solution pricing",
  ],
});

export default function PlansLayout({ children }: { children: ReactNode }) {
  return children;
}
