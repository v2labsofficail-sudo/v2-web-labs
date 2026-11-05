import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Development & Digital Solutions Pricing Plans",
  description:
    "Explore transparent pricing packages for website development (from ₹999), startup branding packages, Shopify e-commerce stores, and custom ERP/CRM solutions.",
  path: "/plans",
  keywords: [
    "Website development pricing Bhayandar",
    "affordable website development cost",
    "pricing plans web design Mira Bhayandar",
    "E-commerce store setup cost",
    "custom ERP CRM pricing",
    "branding package pricing",
    "V2 Labs Global plans",
  ],
});

export default function PlansLayout({ children }: { children: ReactNode }) {
  return children;
}
