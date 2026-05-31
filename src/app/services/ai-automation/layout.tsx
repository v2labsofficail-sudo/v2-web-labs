import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI Solutions Company Services",
  description:
    "V2Labs Global is an AI solutions company delivering automation workflows, LLM integrations, intelligent assistants, and operational AI systems.",
  path: "/services/ai-automation",
  keywords: [
    "AI Solutions Company",
    "AI automation agency",
    "LLM integration services",
    "Business automation company",
  ],
});

export default function AiAutomationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
