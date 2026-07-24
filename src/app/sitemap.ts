import type { MetadataRoute } from "next";
import { absoluteUrl, publicRoutes } from "@/lib/seo";
import { blogCategories, pricingCategories } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";

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
  "/services/saas-product",
  "/services/video-motion",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicCategoryRoutes = blogCategories.map(
    (category) => `/blog/category/${category.slug}` as const
  );
  
  // Dynamically include all pricing plan categories in the sitemap for SEO discovery
  const dynamicPlansRoutes = pricingCategories.map(
    (category) => `/plans/${category.id}` as const
  );

  // Dynamically include all blog post pages in the sitemap for indexing
  const dynamicPostRoutes = blogPosts.map(
    (post) => `/blog/${post.categorySlug}/${post.slug}` as const
  );

  // Use a Set to ensure unique routes and filter out any duplicates (e.g. if defined in publicRoutes as well)
  const allRoutes = Array.from(
    new Set([
      ...publicRoutes, 
      ...dynamicCategoryRoutes, 
      ...dynamicPlansRoutes, 
      ...dynamicPostRoutes
    ])
  );

  return allRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: homepage.has(route) ? "weekly" : "monthly",
    priority: homepage.has(route) ? 1 : priorityRoutes.has(route) ? 0.9 : 0.7,
  }));
}
