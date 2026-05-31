import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms and Conditions",
  description:
    "Review the V2Labs Global terms and conditions covering project delivery, commercial terms, ownership, and service engagement.",
  path: "/terms",
  keywords: [
    "V2Labs terms",
    "V2Labs Global terms and conditions",
    "Digital agency terms",
  ],
});

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children;
}
