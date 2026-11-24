import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CustomSoftwareDevelopmentPage() {
  return (
    <ServiceDetailTemplate
      badge="Enterprise Software Engineering"
      h1="Custom Software Development Company in Mumbai"
      subtitle="Engineering tailored web applications, secure database portals, API ecosystems, and mission-critical enterprise systems."
      intro="Commercial off-the-shelf software rarely fits nuanced business models, forcing companies to compromise their competitive advantages and pay endless licensing fees. V2 Labs Global provides bespoke custom software development in Mira Bhayandar and Mumbai, building software specifically around your company's proprietary operating processes, operational edge, and growth goals."
      capabilities={[
        {
          title: "Bespoke Enterprise Web Applications",
          desc: "High-security internal portals, customer extranets, and operational tools built with Next.js, React, Node.js, and TypeScript.",
          badge: "Web Applications"
        },
        {
          title: "Database Architecture & Optimization",
          desc: "Designing resilient relational and document databases with PostgreSQL, Redis caching, indexing strategies, and automated backups.",
          badge: "Database Engineering"
        },
        {
          title: "System Integration & Custom APIs",
          desc: "Connect disconnected systems through REST and GraphQL APIs, linking legacy on-premise servers with modern cloud platforms.",
          badge: "System Bridges"
        },
        {
          title: "Automated Business Logic & Workflows",
          desc: "Eliminate repetitive paperwork and human error with automated document approvals, transaction triggers, and notifications.",
          badge: "Automation"
        },
        {
          title: "Legacy Software Modernization",
          desc: "Upgrade outdated, insecure legacy applications into modern, cloud-native web architectures with zero data loss or operational disruption.",
          badge: "Modernization"
        },
        {
          title: "Security Hardening & Data Compliance",
          desc: "Role-based access controls (RBAC), end-to-end data encryption, audit trails, and compliance with modern enterprise security standards.",
          badge: "Bank-Grade Security"
        }
      ]}
      benefits={[
        {
          title: "Competitive Differentiation",
          desc: "Bespoke software gives your business proprietary technological advantages that off-the-shelf software competitors simply cannot replicate."
        },
        {
          title: "Complete Intellectual Property Ownership",
          desc: "100% ownership of source code, database architectures, and algorithms with zero subscription or vendor dependency."
        },
        {
          title: "High Performance & Zero Lag",
          desc: "Engineered specifically for your exact data volumes, ensuring snappy response times even with millions of customer records."
        },
        {
          title: "Dedicated Local Engineering Support",
          desc: "Collaborate directly with senior developers and solution architects in Mira Bhayandar, Mumbai with transparent sprint milestones."
        }
      ]}
      process={[
        { step: "01", title: "Technical Feasibility & Scope", desc: "Understanding operational bottlenecks, data flows, integration requirements, and security criteria." },
        { step: "02", title: "System Architecture Design", desc: "Formulating database schemas, API specs, tech stack choices, and clickable wireframes." },
        { step: "03", title: "Agile Development Sprints", desc: "Two-week development sprints with continuous integration, automated tests, and staging reviews." },
        { step: "04", title: "Penetration Testing & QA", desc: "End-to-end user acceptance testing (UAT), penetration tests, and database stress benchmarks." },
        { step: "05", title: "Deployment & Long-Term SLA", desc: "Smooth production deployment, staff onboarding workshops, and ongoing SLA maintenance." }
      ]}
      techStack={["TypeScript", "Next.js 16", "React 19", "Node.js", "PostgreSQL", "Prisma", "Docker", "AWS / Google Cloud"]}
      faqs={[
        {
          question: "What types of custom software does V2 Labs Global engineer?",
          answer: "We engineer bespoke enterprise web applications, operational database portals, custom CRM/ERP systems, automated workflow pipelines, customer self-service portals, and cloud integrations."
        },
        {
          question: "How do you ensure custom software aligns with our existing legacy systems?",
          answer: "We design robust API bridges and ETL data connectors that interface smoothly with your existing accounting tools, legacy SQL databases, third-party software, and hardware sensors."
        },
        {
          question: "Do you provide post-launch maintenance and feature expansion?",
          answer: "Yes, we provide flexible ongoing maintenance Service Level Agreements (SLAs), including security patch updates, server health monitoring, bug fixes, and continuous feature expansion."
        },
        {
          question: "How is pricing structured for custom software development?",
          answer: "We offer both fixed-price milestone delivery for well-defined scopes and dedicated sprint-based retainers for evolving, long-term product engineering."
        }
      ]}
      currentSlug="custom-software-development"
    />
  );
}
