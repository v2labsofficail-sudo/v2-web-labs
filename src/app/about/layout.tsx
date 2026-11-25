import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Us | Technology & Digital Growth Company",
  description:
    "Discover V2 Labs Global, a premier digital technology and software engineering company based in Mira Bhayandar. Learn about our mission, engineering standards, and team.",
  path: "/about",
  keywords: [
    "About V2 Labs Global",
    "software company Mira Bhayandar",
    "technology agency Mira Bhayandar",
    "web development team Mumbai",
    "AI solutions company team",
    "custom software architects",
  ],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
