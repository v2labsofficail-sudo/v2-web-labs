import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { caseStudies } from "@/lib/project-data";

type CaseStudyLayoutProps = {
  children: ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    return buildPageMetadata({
      title: "Case Study",
      description: "V2 Labs Global software engineering case study.",
      path: "/work",
    });
  }

  return buildPageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/work/${project.slug}`,
    keywords: project.tools,
  });
}

export default async function CaseStudyLayout({
  children,
  params,
}: CaseStudyLayoutProps) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbJson = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: project.title, path: `/work/${project.slug}` },
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
