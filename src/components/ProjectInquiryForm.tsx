"use client";

import React, { useState } from "react";

export interface ProjectInquiryFormProps {
  variant?: "modal" | "page";
  onClose?: () => void;
}

const SERVICE_OPTIONS = [
  {
    id: "website_dev",
    label: "Website & Web Application",
    desc: "High-performance responsive websites, Next.js web apps, and portals",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: "custom_erp",
    label: "Custom ERP & CRM Systems",
    desc: "Tailored business software, inventory, billing & operational workflows",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: "saas_engineering",
    label: "SaaS Product Engineering",
    desc: "Scalable multi-tenant SaaS architecture, MVPs, and modern dashboards",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m0 0h-.002" />
      </svg>
    ),
  },
  {
    id: "ai_automations",
    label: "AI Automations & Agents",
    desc: "Autonomous LLM agents, intelligent workflow automation & chatbots",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: "seo_growth",
    label: "Technical SEO & Growth",
    desc: "Organic search ranking, performance engineering & search dominance",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: "ui_ux_branding",
    label: "UI/UX & Brand Design System",
    desc: "Premium visual identity, Figma wireframing, and component libraries",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: "mobile_app",
    label: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps with React Native / Flutter",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    id: "custom_software",
    label: "Custom Enterprise Software",
    desc: "End-to-end bespoke software engineering tailored to your business model",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
];

const BUDGET_OPTIONS = [
  {
    id: "starter",
    label: "Under ₹25,000 / $300",
    badge: "Starter / MVP",
    desc: "Small sprint, bug fixes, landing page, or initial prototype",
  },
  {
    id: "growth",
    label: "₹25,000 – ₹50,000 / $300 – $600",
    badge: "Growth",
    desc: "Custom business website, CMS, or targeted workflow feature",
  },
  {
    id: "professional",
    label: "₹50,000 – ₹1,50,000 / $600 – $1,800",
    badge: "Professional (Recommended)",
    desc: "Full web application, SEO foundation, CRM module, or MVP build",
  },
  {
    id: "scale",
    label: "₹1,50,000 – ₹5,00,000 / $1,800 – $6,000",
    badge: "Scale & Enterprise",
    desc: "Complete Custom ERP, SaaS platform, AI agent integrations",
  },
  {
    id: "enterprise",
    label: "₹5,00,000+ / $6,000+",
    badge: "Full Enterprise",
    desc: "End-to-end organizational digital transformation & dedicated team",
  },
];

export default function ProjectInquiryForm({ variant = "page", onClose }: ProjectInquiryFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    client_name: "",
    phone: "",
    service: "website_dev",
    budget: "₹50,000 – ₹1,50,000 / $600 – $1,800",
    message: "",
  });

  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedServiceObj = SERVICE_OPTIONS.find((s) => s.id === formData.service) || SERVICE_OPTIONS[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (stepErrors[name]) {
      setStepErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        errors.name = "Please enter your full name.";
      }
      if (!formData.email.trim()) {
        errors.email = "Please enter your email address.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errors.email = "Please enter a valid email address.";
      }
      if (!formData.client_name.trim()) {
        errors.client_name = "Please provide your client or company name.";
      }
    } else if (step === 2) {
      if (!formData.service) {
        errors.service = "Please select a service.";
      }
    } else if (step === 3) {
      if (!formData.budget) {
        errors.budget = "Please select your budget range.";
      }
    }

    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      return;
    }

    setSubmitting(true);
    setSubmissionStatus("idle");
    setErrorMessage("");

    try {
      // 1. Submit directly to Web3Forms using user's access key
      const web3Data = new FormData();
      web3Data.append("access_key", "bd54b4e2-50bd-49b6-a014-3cbd80f00359");
      web3Data.append("name", formData.name.trim());
      web3Data.append("email", formData.email.trim());
      web3Data.append("client_name", formData.client_name.trim());
      web3Data.append("phone", formData.phone.trim() || "Not provided");
      web3Data.append("service", selectedServiceObj.label);
      web3Data.append("budget", formData.budget);
      web3Data.append("message", formData.message.trim() || "No custom message provided");
      web3Data.append("from_name", `${formData.name.trim()} (${formData.client_name.trim()})`);
      web3Data.append(
        "subject",
        `[New Project Inquiry] ${formData.name.trim()} - ${selectedServiceObj.label} (${formData.budget})`
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3Data,
      });

      const jsonRes = await res.json();

      // 2. Also dual-post to internal /api/leads in background for CRM record
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || formData.client_name.trim(),
          service: formData.service,
          budget: formData.budget,
          description: `Client: ${formData.client_name.trim()}\nService: ${selectedServiceObj.label}\nBudget: ${formData.budget}\nMessage: ${formData.message.trim()}`,
          source_page: typeof window !== "undefined" ? window.location.href : "/contact",
        }),
      }).catch(() => {
        // Non-blocking fallback
      });

      if (jsonRes.success) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
        setErrorMessage(jsonRes.message || "Something went wrong while submitting. Please try again.");
      }
    } catch (err: unknown) {
      setSubmissionStatus("error");
      setErrorMessage("Network error: Unable to submit at this moment. Please check your connection or email us directly at contact@v2labsglobal.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      client_name: "",
      phone: "",
      service: "website_dev",
      budget: "₹50,000 – ₹1,50,000 / $600 – $1,800",
      message: "",
    });
    setStepErrors({});
    setCurrentStep(1);
    setSubmissionStatus("idle");
    setErrorMessage("");
  };

  // SUCCESS STATE VIEW
  if (submissionStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-fadeIn">
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border-2 border-emerald-500/20 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0055DA] bg-[#0055DA]/10 px-3 py-1 rounded-full mb-3">
          Inquiry Received Successfully
        </span>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
          Thank you, {formData.name}!
        </h2>

        <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed mb-6 font-medium">
          We have safely received your project details for{" "}
          <strong className="text-slate-900">{selectedServiceObj.label}</strong>. Our senior technical consultant will
          review your scope and respond to <strong className="text-slate-900">{formData.email}</strong> within 24 hours.
        </p>

        {/* Summary Card */}
        <div className="w-full max-w-md bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8 text-left text-xs text-slate-700 space-y-2.5">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Client / Organization</span>
            <span className="font-bold text-slate-900">{formData.client_name}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Service</span>
            <span className="font-bold text-[#0055DA]">{selectedServiceObj.label}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Selected Budget</span>
            <span className="font-bold text-slate-900">{formData.budget}</span>
          </div>
          {formData.phone && (
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Phone</span>
              <span className="font-bold text-slate-900">{formData.phone}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            Submit Another Project
          </button>
          {variant === "modal" && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0055DA] hover:bg-[#0044B3] text-white transition-all shadow-md shadow-[#0055DA]/20"
            >
              Close Window
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Step Progress Header */}
      <div className="mb-6 sm:mb-8 border-b border-slate-100 pb-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#0055DA]">
            Step {currentStep} of 4:{" "}
            {currentStep === 1 && "Client Details"}
            {currentStep === 2 && "Select Services"}
            {currentStep === 3 && "Investment Budget"}
            {currentStep === 4 && "Custom Messages & Scope"}
          </span>
          <span className="text-xs font-bold text-slate-400">{Math.round((currentStep / 4) * 100)}% Completed</span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0055DA] to-[#0077FF] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>

        {/* Step Indicator Pills */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { step: 1, title: "1. Client" },
            { step: 2, title: "2. Services" },
            { step: 3, title: "3. Budget" },
            { step: 4, title: "4. Message" },
          ].map((item) => {
            const isCompleted = currentStep > item.step;
            const isCurrent = currentStep === item.step;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => {
                  if (item.step < currentStep) {
                    setCurrentStep(item.step);
                  }
                }}
                disabled={item.step > currentStep}
                className={`py-1.5 px-2 text-center rounded-lg text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider transition-all ${
                  isCurrent
                    ? "bg-[#0055DA] text-white shadow-sm"
                    : isCompleted
                    ? "bg-[#0055DA]/10 text-[#0055DA] hover:bg-[#0055DA]/20 cursor-pointer"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Global Error Banner */}
      {submissionStatus === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-3">
          <svg className="w-5 h-5 shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          <div className="flex-1">{errorMessage}</div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* ======================================================== */}
        {/* STEP 1: CLIENT DETAILS (Name, Email, Client / Company)  */}
        {/* ======================================================== */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Who are we building for?</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Enter your contact info and organization name to begin.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                      stepErrors.name
                        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-300 focus:border-[#0055DA] focus:ring-[#0055DA]/10"
                    }`}
                  />
                </div>
                {stepErrors.name && <p className="text-red-500 text-[11px] mt-1 font-bold">{stepErrors.name}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Work / Personal Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. john@company.com"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                      stepErrors.email
                        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-300 focus:border-[#0055DA] focus:ring-[#0055DA]/10"
                    }`}
                  />
                </div>
                {stepErrors.email && <p className="text-red-500 text-[11px] mt-1 font-bold">{stepErrors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Client / Company Name */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Client / Company Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="client_name"
                    required
                    value={formData.client_name}
                    onChange={handleInputChange}
                    placeholder="e.g. Acme Tech Solutions"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                      stepErrors.client_name
                        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-300 focus:border-[#0055DA] focus:ring-[#0055DA]/10"
                    }`}
                  />
                </div>
                {stepErrors.client_name && (
                  <p className="text-red-500 text-[11px] mt-1 font-bold">{stepErrors.client_name}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone / WhatsApp <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10"
                  />
                </div>
              </div>
            </div>

            {/* Step 1 Actions */}
            <div className="pt-6 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="group inline-flex items-center gap-2 bg-[#0055DA] hover:bg-[#0044B3] text-white px-7 py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#0055DA]/20 hover:shadow-lg hover:shadow-[#0055DA]/30 active:scale-95 cursor-pointer"
              >
                <span>Continue to Services</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 2: SERVICES (Dropdown + Visual Selectable Cards)    */}
        {/* ======================================================== */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Select Services Needed</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Choose from the dropdown or click a core capability below.
              </p>
            </div>

            {/* Dropdown Selector */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Services (Drop Down) <span className="text-[#0055DA] font-bold">• Quick Select</span>
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-bold text-slate-900 outline-none transition-all focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10 cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Interactive Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
              {SERVICE_OPTIONS.map((srv) => {
                const isSelected = formData.service === srv.id;
                return (
                  <div
                    key={srv.id}
                    onClick={() => setFormData((p) => ({ ...p, service: srv.id }))}
                    className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                      isSelected
                        ? "bg-[#0055DA]/5 border-[#0055DA] text-slate-900 shadow-sm ring-1 ring-[#0055DA]"
                        : "bg-white border-slate-200/80 hover:border-[#0055DA]/40 hover:bg-slate-50/60 text-slate-700"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg shrink-0 transition-colors ${
                        isSelected ? "bg-[#0055DA] text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {srv.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold leading-tight truncate">{srv.label}</span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#0055DA] shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step 2 Actions */}
            <div className="pt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="group inline-flex items-center gap-2 bg-[#0055DA] hover:bg-[#0044B3] text-white px-7 py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#0055DA]/20 hover:shadow-lg hover:shadow-[#0055DA]/30 active:scale-95 cursor-pointer"
              >
                <span>Continue to Budget</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 3: BUDGET (Interactive Options + Dropdown)          */}
        {/* ======================================================== */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Project Investment Budget</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Select your expected budget so we can tailor the architecture and deliverables.
              </p>
            </div>

            {/* Dropdown Selector */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Budget (Drop Down) <span className="text-[#0055DA] font-bold">• Quick Select</span>
              </label>
              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-bold text-slate-900 outline-none transition-all focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10 cursor-pointer"
                >
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b.id} value={b.label}>
                      {b.label} — {b.badge}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Selectable Budget Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
              {BUDGET_OPTIONS.map((opt) => {
                const isSelected = formData.budget === opt.label;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setFormData((p) => ({ ...p, budget: opt.label }))}
                    className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#0055DA]/5 border-[#0055DA] ring-1 ring-[#0055DA] shadow-sm"
                        : "bg-white border-slate-200/80 hover:border-[#0055DA]/40 hover:bg-slate-50/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-black text-slate-900">{opt.label}</span>
                      <span
                        className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          isSelected ? "bg-[#0055DA] text-white" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {opt.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{opt.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Step 3 Actions */}
            <div className="pt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="group inline-flex items-center gap-2 bg-[#0055DA] hover:bg-[#0044B3] text-white px-7 py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#0055DA]/20 hover:shadow-lg hover:shadow-[#0055DA]/30 active:scale-95 cursor-pointer"
              >
                <span>Continue to Custom Message</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 4: CUSTOM MESSAGES & SUBMISSION                     */}
        {/* ======================================================== */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Custom Messages & Scope</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Add any specific requirements, deadlines, links, or notes for our engineering team.
              </p>
            </div>

            {/* Review Summary Strip */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider block">Client</span>
                <span className="font-extrabold text-slate-900">
                  {formData.name} ({formData.client_name})
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider block">Service</span>
                <span className="font-extrabold text-[#0055DA]">{selectedServiceObj.label}</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider block">Budget</span>
                <span className="font-extrabold text-slate-900">{formData.budget}</span>
              </div>
            </div>

            {/* Custom Messages Textarea */}
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Custom Message / Project Description <span className="text-slate-400 font-normal normal-case">(Scope & Goals)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Tell us about your project goals, required tech stack, desired launch timeline, or any specific questions you have..."
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10 resize-none"
              />
            </div>

            {/* Step 4 Actions */}
            <div className="pt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={submitting}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer disabled:opacity-50"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="group relative inline-flex items-center gap-2 bg-[#0055DA] hover:bg-[#0044B3] text-white px-8 py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#0055DA]/25 hover:shadow-xl hover:shadow-[#0055DA]/35 active:scale-95 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 overflow-hidden"
              >
                {submitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
