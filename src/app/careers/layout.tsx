import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Remote Careers | Open Job Roles",
  description:
    "We are hiring 100% remote roles! Join V2 Labs Global from anywhere in India. Open positions: Video Editor (1-2 years exp) & Digital Marketer (2-3 years exp). Apply now.",
  path: "/careers",
  keywords: [
    "Remote Video Editor jobs India",
    "Remote Digital Marketer jobs",
    "Work from home video editor",
    "Remote performance marketing jobs",
    "V2 Labs Global careers",
    "Remote SEO specialist jobs",
  ],
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
