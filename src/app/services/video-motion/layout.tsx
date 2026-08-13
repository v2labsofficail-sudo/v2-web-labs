import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Video Production & Motion Graphics Services",
  description:
    "Premium video post-production and motion graphics design services. We craft branded video content, campaign reels, and dynamic motion assets.",
  path: "/services/video-motion",
  keywords: [
    "video editing agency",
    "motion design services",
    "brand video production",
    "motion graphics agency",
    "social video editing",
    "corporate video assets",
  ],
});

export default function VideoMotionLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Video & Motion", path: "/services/video-motion" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}

