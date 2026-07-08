import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { pricingCategories } from "@/lib/site-data";
import PlansClient from "../PlansClient";

type PlansCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return pricingCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({
  params,
}: PlansCategoryPageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = pricingCategories.find((item) => item.id === categoryId);

  if (!category) {
    return buildPageMetadata({
      title: "Pricing Plans",
      description: "Explore our flexible and transparent pricing plans.",
      path: "/plans",
    });
  }

  // Set category-specific, optimized title and description for SEO rankings
  let title = `${category.name} Pricing Plans`;
  let description = category.description;

  if (categoryId === "web-development") {
    title = "Website Development Pricing & Plans";
    description = "Flexible & transparent website development pricing plans. Explore Starter, Business, and Premium tiers tailored for your growth.";
  } else if (categoryId === "branding") {
    title = "Branding & Brand Identity Packages Pricing";
    description = "From 0 to Hero. Start-to-finish branding, logo design, graphics, video, and social media setup pricing packages.";
  } else if (categoryId === "ecommerce") {
    title = "E-Commerce Online Store Setup Pricing";
    description = "Build a powerful, secure e-commerce online store. Explore Starter, Growth, and Enterprise Shopify/Next.js store setup pricing.";
  } else if (categoryId === "erp-crm") {
    title = "Custom ERP & CRM Software Development Pricing";
    description = "Automate operations and manage customers. Essential, Professional, and Enterprise custom CRM ERP integration pricing.";
  }

  return buildPageMetadata({
    title,
    description,
    path: `/plans/${categoryId}`,
    keywords: [
      `${category.name} pricing`,
      `${category.name} packages`,
      "V2Labs pricing plans",
      `${categoryId} plans`,
      "cheap website 999",
      "sasti website design mumbai",
      "low cost web designer",
    ],
  });
}

export default async function PlansCategoryPage({ params }: PlansCategoryPageProps) {
  const { category: categoryId } = await params;
  const category = pricingCategories.find((item) => item.id === categoryId);

  if (!category) {
    notFound();
  }

  return <PlansClient activeTab={categoryId} />;
}
