import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "V2Labs Global blog covering AI automation, web development, branding, ERP CRM systems, and digital marketing strategy.",
  path: "/blog",
  keywords: [
    "V2Labs blog",
    "AI automation blog",
    "Web development blog",
    "Branding insights",
    "ERP CRM content",
    "Digital marketing blog",
  ],
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
