import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ErpDevelopmentPage() {
  return (
    <ServiceDetailTemplate
      badge="Custom ERP Engineering"
      h1="Custom ERP Software Development Company in Mumbai"
      subtitle="Bespoke Enterprise Resource Planning software engineered for manufacturing, inventory logistics, multi-warehouse operations, and finance."
      intro="Managing growing operations across disconnected spreadsheets, desktop accounting tools, and messaging apps creates costly data silos and inventory blind spots. V2 Labs Global engineers bespoke ERP software tailored specifically for small and medium manufacturing enterprises, trading firms, and service corporations across Mira Bhayandar, Mumbai, and Maharashtra."
      capabilities={[
        {
          title: "Inventory & Warehouse Operations",
          desc: "Real-time stock tracking across multiple physical godowns, automated reorder thresholds, batch/expiry tracking, and barcode/QR scanner integration.",
          badge: "Inventory Management"
        },
        {
          title: "Manufacturing & Bill of Materials (BOM)",
          desc: "Track raw material consumption, multi-stage production job cards, machine work-center scheduling, and quality inspection workflows.",
          badge: "Production Control"
        },
        {
          title: "GST Invoicing & Financial Accounting",
          desc: "Generate compliant GST tax invoices, calculate input tax credits, track vendor payables/receivables, and export directly to Tally Prime.",
          badge: "Compliance & Accounts"
        },
        {
          title: "Procurement & Purchase Order Hub",
          desc: "Automated vendor quotation comparisons, tiered purchase order approval hierarchies, goods receipt notes (GRN), and vendor scoring.",
          badge: "Supply Chain"
        },
        {
          title: "HR, Staff Attendance & Payroll",
          desc: "Biometric and geo-tagged mobile attendance, leave management, automated salary slip generation with PF/ESIC deductions, and role-based permissions.",
          badge: "HR & Payroll"
        },
        {
          title: "Executive Business Intelligence Dashboards",
          desc: "Live interactive dashboards displaying gross margins, cash flow projections, daily production output, and department performance metrics.",
          badge: "Analytics"
        }
      ]}
      benefits={[
        {
          title: "Zero Per-User Licensing Fees",
          desc: "Say goodbye to expensive per-seat monthly subscription penalties. Scale your team from 5 to 500 staff with zero incremental software fees."
        },
        {
          title: "100% Process Alignment",
          desc: "We build your software around your exact factory and office workflows instead of forcing your staff to conform to rigid legacy software."
        },
        {
          title: "Eliminate Operational Waste",
          desc: "Automated inventory sync and purchase approvals eliminate duplicate orders, stockouts, and manual data-entry errors."
        },
        {
          title: "Local On-Site Training & Support",
          desc: "Our engineering team provides hands-on staff onboarding, data migration from legacy spreadsheets, and ongoing technical support."
        }
      ]}
      process={[
        { step: "01", title: "Workflow Audit", desc: "Visiting your facility or conducting deep discovery sessions to map every operational touchpoint." },
        { step: "02", title: "Architecture & Schema Design", desc: "Modeling resilient PostgreSQL relational database tables, access roles, and UX wireframes." },
        { step: "03", title: "Module-by-Module Development", desc: "Developing core modules with clean TypeScript, Next.js dashboard UI, and secure APIs." },
        { step: "04", title: "Data Migration & Pilot Testing", desc: "Importing existing vendor, customer, and item master data; running parallel shadow testing." },
        { step: "05", title: "Rollout & Staff Training", desc: "On-site team training, role-based security lockdown, and continuous system monitoring." }
      ]}
      techStack={["Next.js", "React 19", "Node.js / Express", "PostgreSQL", "Prisma ORM", "Redis", "Docker", "AWS / VPS"]}
      faqs={[
        {
          question: "Why should we build custom ERP software instead of using off-the-shelf software like SAP?",
          answer: "Off-the-shelf ERP platforms charge exorbitant per-user monthly licenses, take months to customize, and force your team into rigid workflows. A bespoke ERP built by V2 Labs Global matches your exact operational processes, has zero recurring per-user fees, and scales infinitely."
        },
        {
          question: "Can custom ERP integrate with Tally and GST portals in India?",
          answer: "Yes, our ERP systems generate GST-compliant e-invoices, e-way bills, and integrate seamlessly with Tally, banking APIs, and barcode scanning systems."
        },
        {
          question: "How long does it take to develop and deploy custom ERP software?",
          answer: "Core ERP operational modules (e.g., inventory + procurement + invoicing) typically deploy within 6 to 10 weeks. We follow an agile phase-by-phase rollout so your team sees value immediately."
        },
        {
          question: "Is our business data secure in a custom ERP system?",
          answer: "Yes, we implement bank-grade PostgreSQL encryption, role-based access control (RBAC), multi-factor authentication, audit logs for every transaction, and automated daily encrypted off-site cloud backups."
        }
      ]}
      currentSlug="erp-development"
    />
  );
}
