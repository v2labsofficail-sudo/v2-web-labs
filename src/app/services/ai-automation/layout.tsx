import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI Automation Solutions & AI Agents Mumbai",
  description:
    "Partner with an AI automation company in Mumbai & Mira Bhayandar. We build custom AI agents, LLM integrations, WhatsApp bots, and automated workflows.",
  path: "/services/ai-automation",
  keywords: [
    "AI automation company in Mira Bhayandar",
    "AI development company",
    "AI automation services",
    "AI chatbot development",
    "AI agent development",
    "Business process automation",
    "AI integration services",
    "Custom AI solutions",
    "AI workflow automation",
    "AI solutions for small businesses",
    "LLM integration",
    "RAG development",
  ],
});

export default function AiAutomationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "AI Automation Services", path: "/services/ai-automation" },
  ]);

  const faqJson = buildFaqJsonLd([
    {
      question: "What does an AI automation company do?",
      answer: "An AI automation company builds intelligent software tools, AI agents, custom chatbots, and automated workflows that streamline repetitive business operations, handle customer inquiries, and extract insights from unstructured data."
    },
    {
      question: "How can a small business automate its operations with AI?",
      answer: "Small businesses can automate customer service via 24/7 AI WhatsApp/web chat, automatically categorize and route incoming leads, generate invoice summaries, and sync CRM records without manual data entry."
    },
    {
      question: "Can you build custom AI agents for our specific business workflows?",
      answer: "Yes, we engineer autonomous AI agents equipped with role-based system prompts, secure API integrations, and vector search access to query your internal knowledge base and execute complex multi-step tasks."
    },
    {
      question: "Can AI integrate with existing CRM and database systems?",
      answer: "Yes, we connect OpenAI, Claude, and Gemini LLMs directly with PostgreSQL databases, custom ERP/CRM architectures, HubSpot, and WhatsApp API to create unified automation pipelines."
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
