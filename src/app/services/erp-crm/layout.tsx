import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "ERP CRM Solutions",
  description:
    "V2Labs Global designs and develops ERP CRM solutions, workflow automation systems, internal dashboards, and business software for operational clarity.",
  path: "/services/erp-crm",
  keywords: [
    "ERP CRM Solutions",
    "Custom ERP development",
    "CRM development company",
    "Business process automation",
  ],
});

export default function ErpCrmLayout({ children }: { children: ReactNode }) {
  return children;
}
