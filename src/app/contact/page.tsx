"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

interface Option {
  value: string;
  label: string;
  group?: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const serviceOptions: Option[] = [
  {
    value: "custom_erp",
    label: "Custom ERP Software",
    group: "Enterprise Systems",
  },
  {
    value: "saas_dev",
    label: "SaaS Product Development",
    group: "Enterprise Systems",
  },
  {
    value: "enterprise_web",
    label: "Enterprise Web Application",
    group: "Enterprise Systems",
  },
  { value: "crm_dev", label: "CRM Development", group: "Enterprise Systems" },
  {
    value: "startup_mvp",
    label: "Startup MVP Development",
    group: "Enterprise Systems",
  },
  {
    value: "hrms_ai",
    label: "HRMS and Recruitment AI Platform",
    group: "AI and Automation",
  },
  {
    value: "ai_automation",
    label: "AI Automation Solutions",
    group: "AI and Automation",
  },
  {
    value: "ai_chatbot",
    label: "AI Chatbot or AI Agent",
    group: "AI and Automation",
  },
  {
    value: "dashboard_analytics",
    label: "Dashboard and Analytics System",
    group: "AI and Automation",
  },
  {
    value: "workflow_automation",
    label: "Workflow Automation System",
    group: "AI and Automation",
  },
  {
    value: "mobile_app",
    label: "Mobile App Development",
    group: "Infrastructure and Integrations",
  },
  {
    value: "cloud_devops",
    label: "Cloud and DevOps Infrastructure",
    group: "Infrastructure and Integrations",
  },
  {
    value: "api_integrations",
    label: "API Development and Integrations",
    group: "Infrastructure and Integrations",
  },
  {
    value: "custom_software",
    label: "Custom Software Solution",
    group: "Infrastructure and Integrations",
  },
];

const budgetOptions: Option[] = [
  { value: "Under INR 10,000", label: "Under INR 10,000" },
  { value: "INR 10,000 - INR 20,000", label: "INR 10,000 - INR 20,000" },
  { value: "INR 20,000 - INR 50,000", label: "INR 20,000 - INR 50,000" },
  { value: "INR 50,000 - INR 2,00,000", label: "INR 50,000 - INR 2,00,000" },
  { value: "INR 2,00,000+", label: "INR 2,00,000+" },
  { value: "custom", label: "Custom Amount" },
];

const standardBudgets = budgetOptions
  .map((option) => option.value)
  .filter((value) => value !== "custom");

const serviceHighlights: Record<
  string,
  { title: string; desc: string; points: string[] }
> = {
  custom_erp: {
    title: "Custom ERP Software",
    desc: "Best for operational control, role-based workflows, approvals, reporting, and internal process management.",
    points: [
      "department workflows",
      "role-based dashboards",
      "approval chains",
    ],
  },
  saas_dev: {
    title: "SaaS Product Development",
    desc: "Ideal for productized software, subscription platforms, portals, dashboards, and client-facing systems.",
    points: ["subscription logic", "tenant models", "client account flows"],
  },
  enterprise_web: {
    title: "Enterprise Web Application",
    desc: "For complex browser-based software where frontend experience and backend logic need to feel tightly engineered.",
    points: ["business logic", "frontend systems", "scalable architecture"],
  },
  crm_dev: {
    title: "CRM Development",
    desc: "For managing leads, customer pipelines, internal sales workflows, and long-term client activity visibility.",
    points: ["lead pipelines", "customer records", "sales workflows"],
  },
  startup_mvp: {
    title: "Startup MVP Development",
    desc: "For early-stage teams that need a sharp first version without wasting months building the wrong thing.",
    points: ["fast scope shaping", "MVP planning", "launch-ready product"],
  },
  hrms_ai: {
    title: "HRMS and Recruitment AI Platform",
    desc: "For hiring pipelines, employee records, onboarding, attendance, and AI-assisted people workflows.",
    points: [
      "recruitment pipelines",
      "employee records",
      "AI-assisted operations",
    ],
  },
  ai_automation: {
    title: "AI Automation Solutions",
    desc: "For companies reducing repetitive work through smart routing, summaries, system triggers, and automations.",
    points: ["workflow triggers", "smart summaries", "team alerts"],
  },
  ai_chatbot: {
    title: "AI Chatbot or AI Agent",
    desc: "For support, internal assistants, sales qualification, or domain-specific AI interactions.",
    points: ["assistant design", "business prompts", "workflow actions"],
  },
  dashboard_analytics: {
    title: "Dashboard and Analytics System",
    desc: "For visibility into business operations, KPIs, internal performance, and client-facing reporting.",
    points: ["analytics views", "data visibility", "executive reporting"],
  },
  workflow_automation: {
    title: "Workflow Automation System",
    desc: "For multi-step operations that need less manual effort and better system coordination.",
    points: ["process automation", "system handoffs", "reduced manual work"],
  },
  mobile_app: {
    title: "Mobile App Development",
    desc: "For mobile-first products or companion apps connected to your business systems or client workflows.",
    points: ["mobile UX", "app flows", "platform sync"],
  },
  cloud_devops: {
    title: "Cloud and DevOps Infrastructure",
    desc: "For deployment strategy, cloud readiness, scaling paths, and cleaner engineering operations.",
    points: ["deployment strategy", "cloud structure", "environment readiness"],
  },
  api_integrations: {
    title: "API Development and Integrations",
    desc: "For connecting business systems, external services, webhooks, and internal data movement.",
    points: ["system integrations", "data sync", "external services"],
  },
  custom_software: {
    title: "Custom Software Solution",
    desc: "For projects that do not fit one predefined category and need a custom architecture path.",
    points: ["custom scope", "bespoke flows", "tailored architecture"],
  },
};

const serviceGroups = [
  "Enterprise Systems",
  "AI and Automation",
  "Infrastructure and Integrations",
];
const serviceGroupDescriptions: Record<string, string> = {
  "Enterprise Systems":
    "Core software for operations, teams, customers, and scalable product workflows.",
  "AI and Automation":
    "Intelligent systems that reduce manual work and improve decision-making speed.",
  "Infrastructure and Integrations":
    "Connected platforms, mobile experiences, APIs, and cloud-ready engineering foundations.",
};
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:8000";
const CLIENT_APP_KEY =
  process.env.NEXT_RAW_PUBLIC_CLIENT_APP_KEY ||
  "ca58164177924b6871806cfb91390bdb0d5a48336dc28a3902283dbf617be731";

const NEXT_API_SIGN_SECRET =
  process.env.NEXT_API_SIGN_SECRET ||
  process.env.NEXT_RAW_PUBLIC_API_SIGN_SECRET ||
  "9f7a6c8e5b4d3a2f1e0d9c8b7a6e5f4d";

function base64ToBytes(base64: string): Uint8Array {
  const binaryString = atob(base64.replace("base64:", ""));
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

async function generateDynamicHMACSignature(
  requestBodyString: string,
  timestamp: string,
): Promise<string> {
  const encoder = new TextEncoder();
  const rawAppKeyBytes = hexToBytes(CLIENT_APP_KEY);
  const timestampBytes = encoder.encode(timestamp);
  const signSecretBytes = hexToBytes(NEXT_API_SIGN_SECRET);

  // Concatenate bytes: rawAppKeyBytes + timestampBytes + signSecretBytes
  const combinedBytes = new Uint8Array(
    rawAppKeyBytes.length + timestampBytes.length + signSecretBytes.length,
  );
  combinedBytes.set(rawAppKeyBytes, 0);
  combinedBytes.set(timestampBytes, rawAppKeyBytes.length);
  combinedBytes.set(
    signSecretBytes,
    rawAppKeyBytes.length + timestampBytes.length,
  );

  // Compute SHA-256 hash of combinedBytes to get the 32-byte dynamic key
  const dynamicKeyBuffer = await window.crypto.subtle.digest(
    "SHA-256",
    combinedBytes,
  );

  // Import dynamicKeyBuffer as HMAC-SHA256 key
  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    dynamicKeyBuffer,
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign"],
  );

  const bodyBytes = encoder.encode(requestBodyString);
  const signatureBuffer = await window.crypto.subtle.sign(
    "HMAC",
    cryptoKey,
    bodyBytes,
  );

  const hashArray = Array.from(new Uint8Array(signatureBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);
  const groupedOptions = options.reduce(
    (acc, opt) => {
      const groupName = opt.group || "";
      if (!acc[groupName]) acc[groupName] = [];
      acc[groupName].push(opt);
      return acc;
    },
    {} as Record<string, Option[]>,
  );

  return (
    <div className="relative flex flex-col gap-2 text-left" ref={dropdownRef}>
      <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-[56px] w-full items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50 px-5 text-left text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-100/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] focus:border-[#1161ed] focus:bg-white focus:ring-4 focus:ring-[#1161ed]/5 active:scale-[0.995]"
      >
        <span className={selectedOption ? "text-slate-800" : "text-slate-400"}>
          {selectedOption
            ? selectedOption.label
            : placeholder || "Select option"}
        </span>
        <svg
          className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#1161ed]" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-[calc(100%+6px)] left-0 z-50 flex max-h-[320px] w-full flex-col gap-1 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
          style={{ scrollbarWidth: "thin" }}
        >
          {Object.entries(groupedOptions).map(([groupName, groupOpts]) => (
            <div key={groupName} className="flex flex-col gap-0.5">
              {groupName && (
                <div className="mb-1 mt-1 rounded-lg bg-[#1161ed]/5 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-widest text-[#1161ed] first:mt-0">
                  {groupName}
                </div>
              )}
              {groupOpts.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all duration-150 ${
                      isSelected
                        ? "bg-[#1161ed]/10 font-extrabold text-[#1161ed]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && (
                      <svg
                        className="h-3.5 w-3.5 text-[#1161ed]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "custom_erp",
    budget: "INR 10,000 - INR 20,000",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isServicePanelOpen, setIsServicePanelOpen] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [selectionToast, setSelectionToast] = useState("");
  const [showSelectionToast, setShowSelectionToast] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const roleParam = params.get("role");
    if (!roleParam) return;

    let serviceVal = "custom_erp";
    let messagePrefix = "";

    if (roleParam === "fs-eng") {
      serviceVal = "enterprise_web";
      messagePrefix =
        "Applying for Senior Full-Stack Engineer position. Here are my details and qualifications:\n\n";
    } else if (roleParam === "ai-workflow") {
      serviceVal = "ai_automation";
      messagePrefix =
        "Applying for AI Workflow Engineer and Architect position. Here are my details:\n\n";
    } else if (roleParam === "motion-editor") {
      serviceVal = "custom_software";
      messagePrefix =
        "Applying for Senior Video Editor and Motion Artist position. Portfolio link and details:\n\n";
    } else if (roleParam === "general") {
      serviceVal = "custom_software";
      messagePrefix =
        "Applying for open alignment application. Details about my skillset and background:\n\n";
    }

    const timer = setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        service: serviceVal,
        message: messagePrefix,
      }));
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const activeService = useMemo(
    () => serviceHighlights[formData.service] ?? serviceHighlights.custom_erp,
    [formData.service],
  );

  useEffect(() => {
    if (!isServicePanelOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsServicePanelOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isServicePanelOpen]);

  useEffect(() => {
    if (!selectionToast) return;

    const frame = window.setTimeout(() => {
      setShowSelectionToast(true);
    }, 30);

    const timeout = window.setTimeout(() => {
      setShowSelectionToast(false);
    }, 3600);

    const cleanup = window.setTimeout(() => {
      setSelectionToast("");
    }, 3950);

    return () => {
      window.clearTimeout(frame);
      window.clearTimeout(timeout);
      window.clearTimeout(cleanup);
    };
  }, [selectionToast]);

  const isCustomBudget = !standardBudgets.includes(formData.budget);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        description: formData.message,
        source_page:
          typeof window !== "undefined" ? window.location.href : "/contact",
      };

      const requestBodyString = JSON.stringify(payload);
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signature = await generateDynamicHMACSignature(
        requestBodyString,
        timestamp,
      );

      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-App-Key": CLIENT_APP_KEY,
          "X-Timestamp": timestamp,
          "X-Signature": signature,
        },
        body: requestBodyString,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Thank you! Your project request has been submitted successfully.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "custom_erp",
          budget: "INR 10,000 - INR 20,000",
          message: "",
        });
      } else {
        const errorMsg = data.errors
          ? Object.entries(data.errors)
              .map(
                ([key, val]) =>
                  `${key}: ${Array.isArray(val) ? val.join(", ") : val}`,
              )
              .join(" | ")
          : data.message || "Failed to submit request. Please try again.";

        setStatus({
          type: "error",
          message: errorMsg,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message:
          "Unable to connect to the server. Please verify the Laravel API backend is running or try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleServiceSelect = (service: string) => {
    const nextService = serviceHighlights[service]?.title ?? "Service";
    setFormData((prev) => ({
      ...prev,
      service,
    }));
    setShowSelectionToast(false);
    setSelectionToast(`${nextService} selected`);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#1161ed]/[0.03] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#1161ed]/[0.02] rounded-full blur-3xl -z-10" />

      <section className="relative pt-24 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-[#1161ed] font-extrabold text-[0.8rem] uppercase tracking-widest mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Let&apos;s Build Something Revolutionary
          </h1>
          <p className="text-lg text-slate-500 max-w-[760px] mx-auto leading-relaxed">
            Have an idea for a startup? Looking to build ERP software, HR and
            recruitment systems, AI automations, dashboards, portals, or custom
            business software? Share the direction here and we will help shape
            the right path.
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1161ed] opacity-15 rounded-full blur-2xl -mr-12 -mt-12" />
              <h2 className="text-2xl font-black tracking-tight mb-4 relative z-10">
                Studio Information
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 relative z-10">
                Connect with our team for consultations, technical audits,
                custom design integrations, and end-to-end full-stack
                architectures.
              </p>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#1161ed]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-1">
                      Headquarters
                    </h4>
                    <p className="text-sm text-white font-semibold">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#1161ed]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.722-5.184-4.084-6.907-6.907l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-1">
                      Direct Contacts
                    </h4>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+919022641867"
                        className="text-sm text-white font-semibold hover:text-[#1161ed] transition-colors flex items-center gap-1.5"
                      >
                        <span>+91 90226 41867</span>
                        <span className="text-[10px] bg-[#1161ed] text-white px-2 py-0.5 rounded font-extrabold uppercase tracking-wider">
                          Primary
                        </span>
                      </a>
                      <a
                        href="tel:+919022165980"
                        className="text-sm text-white font-semibold hover:text-[#1161ed] transition-colors flex items-center gap-1.5"
                      >
                        <span>+91 90221 65980</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#1161ed]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:hello@v2labs.co"
                      className="text-sm text-white font-semibold hover:text-[#1161ed] transition-colors"
                    >
                      hello@v2labs.co
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] bg-slate-100 text-slate-500 font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-slate-200/50">
                  Engineering Systems
                </span>
                <span className="text-xs text-[#1161ed] font-bold flex items-center gap-1">
                  Active Deployments
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_12px_24px_rgba(0,0,0,0.04)] aspect-video">
                <img
                  src="/saas_dashboard.png"
                  alt="High Fidelity Studio System Dashboard"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-4 text-center font-semibold">
                SaaS Dashboard prototyped and launched in production by V2 Labs.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1161ed] mb-3">
                Contact flow
              </p>
              <div className="grid gap-3">
                {[
                  "Your team can keep the contact page content and image-led trust signals exactly where they are.",
                  "The service picker now opens only when needed, so the form area stays cleaner and wider.",
                  "Clients still get a guided selection experience, but it feels closer to a premium product workflow.",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed] mt-2 shrink-0" />
                    <p className="text-[0.88rem] leading-7 text-slate-600">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="border-b border-slate-100 pb-6 mb-8">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Project Estimator
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Estimate your custom scope. Complete the specifications below
                  to initiate a dedicated consult.
                </p>
              </div>

              {status.type && (
                <div
                  className={`p-5 rounded-2xl mb-8 text-sm flex items-start gap-3.5 border ${
                    status.type === "success"
                      ? "bg-emerald-50/70 border-emerald-200/70 text-emerald-800"
                      : "bg-rose-50/70 border-rose-200/70 text-rose-800"
                  }`}
                >
                  {status.type === "success" ? (
                    <svg
                      className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-rose-600 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 7.5h.008v.008H12v-.008Z"
                      />
                    </svg>
                  )}
                  <div className="font-semibold leading-relaxed">
                    {status.message}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                    Service Type *
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsServicePanelOpen(true)}
                    className="group w-full rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-left transition-all duration-300 hover:border-[#1161ed]/25 hover:bg-white hover:shadow-[0_10px_24px_rgba(17,97,237,0.06)] focus:outline-none focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.98rem] font-black text-slate-900">
                          {activeService.title}
                        </p>
                        <p className="mt-2 pr-2 text-[0.84rem] leading-6 text-slate-500">
                          {activeService.desc}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500 transition-colors group-hover:border-[#1161ed]/20 group-hover:text-[#1161ed]">
                        <span>Select</span>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {activeService.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-3"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#1161ed]" />
                      <span className="text-[0.82rem] font-semibold capitalize text-slate-700">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5 transition-all text-slate-800"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@startup.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5 transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 90000 00000"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5 transition-all text-slate-800"
                    />
                  </div>

                  <CustomSelect
                    label="Estimated Budget *"
                    value={isCustomBudget ? "custom" : formData.budget}
                    onChange={(val) => {
                      if (val === "custom") {
                        setFormData((prev) => ({ ...prev, budget: "" }));
                      } else {
                        setFormData((prev) => ({ ...prev, budget: val }));
                      }
                    }}
                    options={budgetOptions}
                  />
                </div>

                {isCustomBudget && (
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                      Specify Custom Budget *
                    </label>
                    <input
                      type="text"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Enter custom amount, for example INR 2,00,000 or USD 5,000"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5 transition-all text-slate-800"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                    Project Scope / Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your design specifications, features, timelines, or custom ideas..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5 transition-all text-slate-800 min-h-[160px] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white hover:bg-[#1161ed] hover:shadow-[0_8px_20px_rgba(17,97,237,0.22)] py-4 px-6 rounded-2xl font-extrabold text-sm tracking-wider uppercase transition-all duration-300 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2.5 cursor-pointer mt-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Submitting lead...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Lead</span>
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isServicePanelOpen && (
        <div className="fixed inset-0 z-[1200] flex items-end justify-end bg-slate-950/28 sm:items-stretch">
          <button
            type="button"
            aria-label="Close service selector"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsServicePanelOpen(false)}
          />

          <div className="relative flex flex-col h-[85vh] w-full max-w-[780px] overflow-hidden rounded-t-[34px] border border-slate-200/70 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.16)] sm:h-screen sm:max-w-[760px] sm:rounded-none sm:rounded-l-[34px]">
            <div className="flex-shrink-0 border-b border-slate-100 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_58%,#eef4ff_100%)] px-4 py-4 sm:px-8 sm:py-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1161ed]">
                    Service selector
                  </p>
                  <h3 className="mt-1 text-xl sm:text-[1.6rem] sm:mt-2 font-black tracking-tight text-slate-900">
                    Pick the closest service direction
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[0.92rem] sm:mt-3 max-w-[460px] leading-relaxed text-slate-600">
                    Choose the nearest fit for your project and continue with
                    the form once the right direction is selected.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsServicePanelOpen(false)}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-2.5 sm:p-3 text-slate-500 transition-colors hover:text-slate-900"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6l12 12M18 6 6 18"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4 hidden sm:grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[24px] border border-[#1161ed]/10 bg-white px-5 py-4 shadow-[0_8px_24px_rgba(17,97,237,0.05)]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                    Current selection
                  </p>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[1rem] font-black text-slate-900">
                      {activeService.title}
                    </p>
                    <span className="inline-flex w-fit items-center rounded-full bg-[#1161ed]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1161ed]">
                      selected
                    </span>
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-slate-950 px-5 py-4 text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/50">
                    V2 Labs fit
                  </p>
                  <p className="mt-2 text-[0.88rem] leading-6 text-white/85">
                    Built for custom software conversations, not generic lead
                    forms.
                  </p>
                </div>
              </div>

              {selectionToast && (
                <div
                  className={`mt-3 font-Outfit relative overflow-hidden rounded-[24px] border border-emerald-200/80 bg-white/95 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-500 ease-out ${
                    showSelectionToast
                      ? "translate-y-0 scale-100 opacity-100"
                      : "-translate-y-3 scale-95 opacity-0"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#10b981_0%,#34d399_55%,#86efac_100%)]" />
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#10b981_0%,#34d399_100%)] text-white shadow-[0_10px_20px_rgba(16,185,129,0.22)]">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.9rem] font-black tracking-tight text-slate-900">
                        Service selected
                      </p>
                      <p className="mt-0.5 text-xs sm:text-[0.84rem] leading-relaxed text-slate-600">
                        {selectionToast}. You can close the window now.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="grid flex-1 min-h-0 gap-0 grid-cols-1 sm:grid-cols-[1fr_0.92fr]">
              <div
                className="overflow-y-auto border-r border-slate-100 px-4 py-4 sm:px-8 sm:py-6"
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="grid gap-4 sm:gap-5">
                  {serviceGroups.map((group) => (
                    <section key={group} className="flex flex-col gap-2.5">
                      <div className="px-2 py-2 sm:rounded-[22px] sm:border sm:border-slate-200 sm:bg-slate-50 sm:px-4 sm:py-4">
                        <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1161ed]">
                          {group}
                        </p>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-[0.84rem] leading-relaxed text-slate-600 hidden sm:block">
                          {serviceGroupDescriptions[group]}
                        </p>
                      </div>

                      <div className="grid gap-2">
                        {serviceOptions
                          .filter((option) => option.group === group)
                          .map((option) => {
                            const isActive = formData.service === option.value;
                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() =>
                                  handleServiceSelect(option.value)
                                }
                                className={`rounded-2xl sm:rounded-[24px] border px-4 py-3 sm:py-4 text-left transition-all duration-200 ${
                                  isActive
                                    ? "border-[#1161ed]/25 bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_100%)] shadow-[0_10px_22px_rgba(17,97,237,0.06)]"
                                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                                }`}
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div className="pr-1.5 flex-1">
                                    <span className="text-[0.88rem] sm:text-[0.92rem] font-extrabold text-slate-900 block">
                                      {option.label}
                                    </span>
                                    <p
                                      className={`mt-1 text-xs sm:text-[0.8rem] leading-relaxed text-slate-500 transition-all duration-300 ${isActive ? "block" : "hidden sm:block"}`}
                                    >
                                      {serviceHighlights[option.value]?.desc}
                                    </p>
                                  </div>
                                  {isActive && (
                                    <div className="mt-0.5 flex h-7.5 w-7.5 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#1161ed] text-white">
                                      <svg
                                        className="h-3.5 w-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="m4.5 12.75 6 6 9-13.5"
                                        />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              <div
                className="hidden sm:block overflow-y-auto bg-[linear-gradient(180deg,#fbfdff_0%,#f5f9ff_100%)] px-6 py-6 sm:px-8"
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1161ed] mb-2">
                    Selected direction
                  </p>
                  <h3 className="text-[1.45rem] font-black text-slate-900 leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-7 text-slate-600">
                    {activeService.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {activeService.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5"
                      >
                        <span className="text-[0.8rem] font-semibold capitalize text-slate-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400 mb-2">
                    Ideal when you need
                  </p>
                  <div className="grid gap-3">
                    {[
                      "A clear starting point for a custom build without having to overthink service labels.",
                      "A faster way to align on product scope, workflow type, or system architecture direction.",
                      "A software team that can translate your idea into the right technical execution path.",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed] mt-2 shrink-0" />
                        <p className="text-[0.84rem] leading-7 text-slate-600">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsServicePanelOpen(false)}
                  className="mt-5 w-full rounded-2xl bg-slate-900 px-5 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-[#1161ed]"
                >
                  Continue with selected service
                </button>
              </div>
            </div>

            {/* Mobile Sticky Footer */}
            <div className="flex-shrink-0 border-t border-slate-100 bg-white p-4 block sm:hidden">
              <button
                type="button"
                onClick={() => setIsServicePanelOpen(false)}
                className="w-full rounded-2xl bg-slate-900 px-5 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-[#1161ed] active:scale-[0.99]"
              >
                Continue with selected service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
