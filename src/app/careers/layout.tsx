import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Careers | Open Job Roles",
  description:
    "We are hiring! Join V2 Labs Global in Mira Bhayandar & Mumbai. Open roles: Video Editor (1-2 years exp) & Digital Marketer (2-3 years exp). Apply now.",
  path: "/careers",
  keywords: [
    "V2 Labs Global careers",
    "Video Editor jobs Mumbai",
    "Video editor hiring Mira Bhayandar",
    "Digital Marketer jobs Mumbai",
    "Performance marketing hiring Bhayandar",
    "SEO specialist jobs Mumbai",
  ],
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
