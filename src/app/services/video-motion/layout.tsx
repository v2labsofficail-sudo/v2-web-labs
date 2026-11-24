import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Video Editing & Motion Ad Production Services",
  description:
    "Cinematic video editing, commercial reel production, and high-retention motion ad creative engineered by V2 Labs Global in Mumbai.",
  path: "/services/video-motion",
  keywords: [
    "Professional video editing services",
    "Instagram reels editing",
    "Promotional video production",
    "Advertisement video editing",
    "video editing agency Mumbai",
    "motion design services",
    "brand video production",
    "motion graphics agency",
    "social video editing",
    "commercial ad production",
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

  const faqJson = buildFaqJsonLd([
    {
      question: "What video editing and production formats do you handle?",
      answer: "We edit short-form vertical content (Instagram Reels, YouTube Shorts), commercial paid advertisements, corporate brand overviews, product walkthroughs, and animated motion graphics."
    },
    {
      question: "How do you optimize videos for ad conversions and social engagement?",
      answer: "We structure videos around 3-second hook retention architectures, dynamic kinetic typography, color-graded footage, trending sound design, and explicit call-to-action cards."
    },
    {
      question: "What software stack do your editors use?",
      answer: "Our team operates in Adobe Premiere Pro, After Effects, DaVinci Resolve Studio, and specialized AI video generation and audio enhancement tools."
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
