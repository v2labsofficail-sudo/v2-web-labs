import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Video and Motion Design Services",
  description:
    "V2Labs Global creates cinematic video editing, motion design, and visual storytelling assets that strengthen modern digital brands.",
  path: "/services/video-motion",
  keywords: [
    "Video editing agency",
    "Motion design services",
    "Brand video production",
    "Creative agency video services",
  ],
});

export default function VideoMotionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
