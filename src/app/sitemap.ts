import type { MetadataRoute } from "next";
import { absoluteUrl, publicRoutes } from "@/lib/seo";
import { blogCategories } from "@/lib/site-data";

const homepage = new Set<string>(["/"]);
const priorityRoutes = new Set<string>([
  "/",
  "/services",
  "/contact",
  "/blog",
  "/services/ai-automation",
  "/services/web-platform",
  "/services/erp-crm",
  "/services/ui-ux-brand",
  "/services/digital-marketing",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicCategoryRoutes = blogCategories.map(
    (category) => `/blog/category/${category.slug}` as const
  );
  const allRoutes = [...publicRoutes, ...dynamicCategoryRoutes];

  return allRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: homepage.has(route) ? "weekly" : "monthly",
    priority: homepage.has(route) ? 1 : priorityRoutes.has(route) ? 0.9 : 0.7,
  }));
}
