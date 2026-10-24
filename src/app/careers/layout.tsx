import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Join V2Labs Global and help build AI solutions, web products, branding systems, and ERP CRM platforms for growing businesses.",
  path: "/careers",
  keywords: [
    "V2 Labs Global careers",
    "Digital agency jobs",
    "Web development careers",
    "AI company careers",
  ],
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
