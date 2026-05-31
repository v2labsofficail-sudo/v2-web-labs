import type { MetadataRoute } from "next";
import { absoluteUrl, publicRoutes } from "@/lib/seo";

const homepage = new Set<string>(["/"]);
const priorityRoutes = new Set<string>([
  "/",
  "/services/ai-automation",
  "/services/web-platform",
  "/services/erp-crm",
  "/services/ui-ux-brand",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: homepage.has(route) ? "weekly" : "monthly",
    priority: homepage.has(route) ? 1 : priorityRoutes.has(route) ? 0.9 : 0.7,
  }));
}
