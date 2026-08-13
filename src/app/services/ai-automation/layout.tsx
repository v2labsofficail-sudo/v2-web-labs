import type { ReactNode } from "react";
import { buildPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "AI Automation Company | AI Agents & Business Automation",
  description:
    "Partner with an enterprise AI automation company. We build custom AI agents, LLM integrations, RAG database pipelines, and workflows. Discuss your project.",
  path: "/services/ai-automation",
  keywords: [
    "AI Automation Company",
    "AI agent development",
    "AI automation services",
    "custom AI solutions",
    "LLM integration",
    "AI workflow automation",
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
      question: "What is AI automation?",
      answer: "AI automation is the integration of artificial intelligence, machine learning, and large language models (LLMs) to perform complex business tasks and decision-making processes that previously required human intervention."
    },
    {
      question: "How can AI automate business processes?",
      answer: "AI can automate processes by reading and sorting documents, drafting email replies, synchronizing data between systems, qualifying incoming leads, and answering customer queries via autonomous chat agents."
    },
    {
      question: "Can you build custom AI agents?",
      answer: "Yes, we design and program custom AI agents capable of calling APIs, running background workflows, executing code, and interacting with users or internal databases to perform specific operational roles."
    },
    {
      question: "Can AI integrate with existing CRM software?",
      answer: "Absolutely. We specialize in connecting OpenAI, Gemini, and Claude API models directly to HubSpot, Zoho, Salesforce, and custom CRM platforms via secure webhook bridges."
    },
    {
      question: "Can you integrate OpenAI or Gemini into an application?",
      answer: "Yes, we integrate OpenAI's GPT models, Google Gemini, Anthropic's Claude, and open-source models (like Llama) with tailored system prompts, function calling capabilities, and RAG data layers."
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

