import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the V2Labs Global privacy policy for details on data handling, customer communications, and website privacy practices.",
  path: "/privacy",
  keywords: [
    "V2Labs privacy policy",
    "V2Labs Global privacy",
    "Digital agency privacy policy",
  ],
});

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
