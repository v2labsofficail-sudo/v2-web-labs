"use client";

import React, { useState, useEffect, useRef } from "react";

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

  // Group options by their 'group' property
  const groupedOptions = options.reduce(
    (acc, opt) => {
      const groupName = opt.group || "";
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(opt);
      return acc;
    },
    {} as Record<string, Option[]>,
  );

  return (
    <div className="flex flex-col gap-2 relative text-left" ref={dropdownRef}>
      <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/30 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5 transition-all text-left flex justify-between items-center cursor-pointer shadow-sm relative group hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] active:scale-[0.995]"
      >
        <span className={selectedOption ? "text-slate-800" : "text-slate-400"}>
          {selectedOption
            ? selectedOption.label
            : placeholder || "Select option"}
        </span>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#1161ed]" : ""}`}
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

      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] left-0 w-full bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-[300px] overflow-y-auto p-2 flex flex-col gap-1 animate-fade-in origin-top scrollbar-thin">
          {Object.entries(groupedOptions).map(([groupName, groupOpts]) => (
            <div key={groupName} className="flex flex-col gap-0.5">
              {groupName && (
                <div className="px-3 py-1.5 text-[9px] font-extrabold text-[#1161ed] uppercase tracking-widest bg-[#1161ed]/5 rounded-lg select-none mb-1 mt-1 first:mt-0">
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
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#1161ed]/10 text-[#1161ed] font-extrabold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && (
                      <svg
                        className="w-3.5 h-3.5 text-[#1161ed]"
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
    budget: "₹50,000 - ₹1,50,000",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Dynamically pre-fill the form if arriving from a career role application link
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get("role");
      if (roleParam) {
        let serviceVal = "custom_erp";
        let messagePrefix = "";

        if (roleParam === "fs-eng") {
          serviceVal = "enterprise_web";
          messagePrefix =
            "Applying for Senior Full-Stack Engineer position. Here are my details and qualifications:\n\n";
        } else if (roleParam === "ai-workflow") {
          serviceVal = "ai_automation";
          messagePrefix =
            "Applying for AI Workflow Engineer & Architect position. Here are my details:\n\n";
        } else if (roleParam === "motion-editor") {
          serviceVal = "custom_software";
          messagePrefix =
            "Applying for Senior Video Editor & Motion Artist position. Portfolio link and details:\n\n";
        } else if (roleParam === "general") {
          serviceVal = "custom_software";
          messagePrefix =
            "Applying for open alignment application. Details about my skillset and background:\n\n";
        }

        timer = setTimeout(() => {
          setFormData((prev) => ({
            ...prev,
            service: serviceVal,
            message: messagePrefix,
          }));
        }, 0);
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const standardBudgets = [
    "Under ₹50,000",
    "₹50,000 - ₹1,50,000",
    "₹1,50,000 - ₹3,00,000",
    "₹3,00,000 - ₹5,00,000",
    "₹5,00,000+",
  ];

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

  const handleBudgetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "custom") {
      setFormData((prev) => ({
        ...prev,
        budget: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        budget: val,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
          budget: "₹50,000 - ₹1,50,000",
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
          "Unable to connect to the server. Please verify the Django API backend is running or try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#1161ed]/[0.03] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#1161ed]/[0.02] rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-[#1161ed] font-extrabold text-[0.8rem] uppercase tracking-widest mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Let&apos;s Build Something Revolutionary
          </h1>
          <p className="text-lg text-slate-500 max-w-[700px] mx-auto leading-relaxed">
            Have an idea for a startup? Looking to overhaul your corporate site,
            spin up a secure Shopify hub, design vector assets, or sync custom
            video cuts? Fill out the estimator form and we will reach out with a
            detailed proposal.
          </p>
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="max-w-[1100px] mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left Column: Contact Details + Mockup Image */}
          <div className="flex flex-col gap-10">
            {/* Title / Description Card */}
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

              {/* Specific details */}
              <div className="flex flex-col gap-6 relative z-10">
                {/* Location */}
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

                {/* Direct Contacts */}
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

                {/* Email Address */}
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

            {/* Premium Project Showcase Mockup Image */}
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
                SaaS Dashboard prototyped & launched in production by V2 Labs.
              </p>
            </div>
          </div>

          {/* Right Column: Project Estimator Lead Form */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <div className="border-b border-slate-100 pb-6 mb-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                Project Estimator
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Estimate your custom scope. Complete the specifications below to
                initiate a dedicated consult.
              </p>
            </div>

            {/* Status Messages */}
            {status.type && (
              <div
                className={`p-5 rounded-2xl mb-8 text-sm flex items-start gap-3.5 border animate-fade-in ${
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
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
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

                {/* Email Address */}
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

              {/* Row: Phone and Service dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
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

                {/* Service dropdown */}
                <CustomSelect
                  label="Required Service *"
                  value={formData.service}
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, service: val }))
                  }
                  options={[
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
                    {
                      value: "crm_dev",
                      label: "CRM Development",
                      group: "Enterprise Systems",
                    },
                    {
                      value: "startup_mvp",
                      label: "Startup MVP Development",
                      group: "Enterprise Systems",
                    },

                    {
                      value: "hrms_ai",
                      label: "HRMS & Recruitment AI Platform",
                      group: "AI & Automation",
                    },
                    {
                      value: "ai_automation",
                      label: "AI Automation Solutions",
                      group: "AI & Automation",
                    },
                    {
                      value: "ai_chatbot",
                      label: "AI Chatbot / AI Agent",
                      group: "AI & Automation",
                    },
                    {
                      value: "dashboard_analytics",
                      label: "Dashboard & Analytics System",
                      group: "AI & Automation",
                    },
                    {
                      value: "workflow_automation",
                      label: "Workflow Automation System",
                      group: "AI & Automation",
                    },

                    {
                      value: "mobile_app",
                      label: "Mobile App Development",
                      group: "Infrastructure & Integrations",
                    },
                    {
                      value: "cloud_devops",
                      label: "Cloud & DevOps Infrastructure",
                      group: "Infrastructure & Integrations",
                    },
                    {
                      value: "api_integrations",
                      label: "API Development & Integrations",
                      group: "Infrastructure & Integrations",
                    },
                    {
                      value: "custom_software",
                      label: "Custom Software Solution",
                      group: "Infrastructure & Integrations",
                    },
                  ]}
                />
              </div>

              {/* Budget dropdown */}
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
                options={[
                  { value: "Under ₹50,000", label: "Under ₹50,000" },
                  {
                    value: "₹50,000 - ₹1,50,000",
                    label: "₹50,000 - ₹1,50,000",
                  },
                  {
                    value: "₹1,50,000 - ₹3,00,000",
                    label: "₹1,50,000 - ₹3,00,000",
                  },
                  {
                    value: "₹3,00,000 - ₹5,00,000",
                    label: "₹3,00,000 - ₹5,00,000",
                  },
                  { value: "₹5,00,000+", label: "₹5,00,000+" },
                  { value: "custom", label: "Custom Amount" },
                ]}
              />

              {/* Custom Budget Input */}
              {isCustomBudget && (
                <div className="flex flex-col gap-2 animate-fade-in">
                  <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                    Specify Custom Budget (₹ / $) *
                  </label>
                  <input
                    type="text"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Enter custom amount (e.g. ₹2,00,000 or $5,000)"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5 transition-all text-slate-800"
                  />
                </div>
              )}

              {/* Project Scope Message Box */}
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
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/5 transition-all text-slate-800 min-h-[140px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white hover:bg-[#1161ed] hover:shadow-[0_8px_20px_rgba(17,97,237,0.22)] py-4 px-6 rounded-2xl font-extrabold text-sm tracking-wider uppercase transition-all duration-300 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2.5 cursor-pointer mt-4"
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
                      className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1"
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
  );
}
