"use client";

import React, { useState } from "react";

export interface ProjectInquiryFormProps {
  variant?: "modal" | "page";
  onClose?: () => void;
}

const BRAND_BLUE = "#0055DA";

const SERVICES_OPTIONS = [
  "Website & Web Platform",
  "Custom ERP & CRM",
  "SaaS Product Engineering",
  "AI Automations & Agents",
  "E-Commerce Store",
  "Mobile App (iOS/Android)",
  "UI/UX & Brand Design",
  "Technical SEO & Growth",
  "Custom Enterprise Software",
  "Other / Custom Request",
];

const INDUSTRY_OPTIONS = [
  "D2C / E-Commerce",
  "B2B SaaS",
  "Agency / Services",
  "Healthcare / HealthTech",
  "Fintech / Banking",
  "Retail & Wholesale",
  "Education / EdTech",
  "Real Estate / Construction",
  "Other",
];

const AD_SPEND_OPTIONS = [
  "No ads",
  "₹1–3 L",
  "₹3–7 L",
  "₹7–10 L",
  "₹10 L+",
];

const FIX_OPTIONS = [
  "New website",
  "Website redesign for more sales",
  "Low conversion rate",
  "High bounce rate",
  "Low AOV",
  "Landing page revamp for performance",
  "Low ROAS",
  "Poor lead quality",
  "SEO",
  "Bug fixes",
  "Others",
];

export default function ProjectInquiryForm({ variant = "page", onClose }: ProjectInquiryFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const TOTAL_STEPS = 7;

  const [formData, setFormData] = useState({
    name: "",
    phoneCode: "+91",
    phone: "",
    services: [] as string[],
    industry: "",
    businessDesc: "",
    brandName: "",
    email: "",
    hasWebsite: null as boolean | null,
    websiteUrl: "",
    adSpend: "",
    fixedItems: [] as string[],
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  // Toggle multi-select items
  const toggleService = (item: string) => {
    setErrorMessage("");
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(item)
        ? prev.services.filter((s) => s !== item)
        : [...prev.services, item],
    }));
  };

  const toggleFix = (item: string) => {
    setErrorMessage("");
    setFormData((prev) => ({
      ...prev,
      fixedItems: prev.fixedItems.includes(item)
        ? prev.fixedItems.filter((f) => f !== item)
        : [...prev.fixedItems, item],
    }));
  };

  // Validation
  const validateStep = (step: number): boolean => {
    if (step === 1) {
      if (!formData.name.trim()) {
        setErrorMessage("Please enter what we should call you.");
        return false;
      }
    } else if (step === 2) {
      const phoneDigits = formData.phone.replace(/\D/g, "");
      if (!phoneDigits || phoneDigits.length < 7) {
        setErrorMessage("Please enter a valid phone number.");
        return false;
      }
    } else if (step === 3) {
      if (formData.services.length === 0) {
        setErrorMessage("Please select at least one capability you are looking for.");
        return false;
      }
    } else if (step === 4) {
      if (!formData.industry && !formData.businessDesc.trim()) {
        setErrorMessage("Please choose your industry or write a brief business description.");
        return false;
      }
    } else if (step === 5) {
      if (!formData.brandName.trim()) {
        setErrorMessage("Please enter what your brand or company is called.");
        return false;
      }
    } else if (step === 6) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
        setErrorMessage("Please enter a valid work email address.");
        return false;
      }
      if (formData.hasWebsite === true && !formData.websiteUrl.trim()) {
        setErrorMessage("Please enter your current website URL.");
        return false;
      }
    } else if (step === 7) {
      if (!formData.adSpend) {
        setErrorMessage("Please select your monthly ad spend.");
        return false;
      }
      if (formData.fixedItems.length === 0) {
        setErrorMessage("Please select at least one item you would like fixed.");
        return false;
      }
    }
    setErrorMessage("");
    return true;
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    setErrorMessage("");
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(7)) return;

    setSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Submit directly to Web3Forms using project key
      const web3Data = new FormData();
      web3Data.append("access_key", "bd54b4e2-50bd-49b6-a014-3cbd80f00359");
      web3Data.append("name", formData.name.trim());
      web3Data.append("email", formData.email.trim());
      web3Data.append("phone", `${formData.phoneCode} ${formData.phone.trim()}`);
      web3Data.append("client_name", formData.brandName.trim());
      web3Data.append("service", formData.services.join(", "));
      web3Data.append("budget", `Ad Spend: ${formData.adSpend}`);
      web3Data.append(
        "message",
        `Industry: ${formData.industry || "Not specified"}\n` +
        `Business Note: ${formData.businessDesc.trim() || "N/A"}\n` +
        `Has Website: ${formData.hasWebsite ? formData.websiteUrl.trim() : "No"}\n` +
        `Fixes Desired: ${formData.fixedItems.join(", ")}`
      );
      web3Data.append("from_name", `${formData.name.trim()} (${formData.brandName.trim()})`);
      web3Data.append(
        "subject",
        `[New Project Inquiry] ${formData.name.trim()} - ${formData.brandName.trim()} (${formData.adSpend})`
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3Data,
      });

      const jsonRes = await res.json();

      // 2. Dual-post to internal /api/leads for CRM storage
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: `${formData.phoneCode} ${formData.phone.trim()}`,
          service: formData.services.join(", "),
          budget: formData.adSpend,
          description: `Brand: ${formData.brandName.trim()}\nIndustry: ${formData.industry}\nWebsite: ${
            formData.hasWebsite ? formData.websiteUrl.trim() : "None"
          }\nFixes: ${formData.fixedItems.join(", ")}\nDesc: ${formData.businessDesc.trim()}`,
          source_page: typeof window !== "undefined" ? window.location.href : "/contact",
        }),
      }).catch(() => {
        // Non-blocking fallback
      });

      if (jsonRes.success) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
        setErrorMessage(jsonRes.message || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setSubmissionStatus("error");
      setErrorMessage(
        "Network error: Unable to submit at this moment. Please check your connection or email contact@v2labsglobal.com directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSubmissionStatus("idle");
    setErrorMessage("");
    setFormData({
      name: "",
      phoneCode: "+91",
      phone: "",
      services: [],
      industry: "",
      businessDesc: "",
      brandName: "",
      email: "",
      hasWebsite: null,
      websiteUrl: "",
      adSpend: "",
      fixedItems: [],
    });
  };

  // SUCCESS VIEW
  if (submissionStatus === "success") {
    return (
      <div className="text-center py-6 px-2">
        <div 
          className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "#EBF3FF", color: BRAND_BLUE, boxShadow: "2px 2px 0px #000" }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-2">
          INQUIRY RECEIVED!
        </h2>
        <p className="text-neutral-600 text-sm font-medium mb-6 max-w-sm mx-auto">
          Thanks <span className="font-bold text-black">{formData.name}</span>! We’ve received your details for{" "}
          <span className="font-bold text-black">{formData.brandName || "your brand"}</span>. A senior solution engineer will contact you within 24 hours.
        </p>

        {/* Lead summary card */}
        <div 
          className="bg-white border-2 border-black rounded-2xl p-4 text-left text-xs space-y-2 mb-6 font-medium max-w-md mx-auto"
          style={{ boxShadow: "2px 2px 0px #000000" }}
        >
          <div className="flex justify-between border-b pb-1.5 border-neutral-200">
            <span className="text-neutral-500">Brand / Venture:</span>
            <span className="font-bold text-neutral-900">{formData.brandName || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b pb-1.5 border-neutral-200">
            <span className="text-neutral-500">Contact:</span>
            <span className="font-bold text-neutral-900">{formData.email} • {formData.phoneCode} {formData.phone}</span>
          </div>
          <div className="flex justify-between border-b pb-1.5 border-neutral-200">
            <span className="text-neutral-500">Monthly Ad Spend:</span>
            <span className="font-bold" style={{ color: BRAND_BLUE }}>{formData.adSpend || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Fixes Needed:</span>
            <span className="font-bold text-neutral-900 text-right max-w-[210px] truncate">
              {formData.fixedItems.join(", ") || "N/A"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 rounded-full border-2 border-black font-bold text-xs uppercase bg-white hover:bg-neutral-100 transition-all cursor-pointer"
            style={{ boxShadow: "2px 2px 0px #000000" }}
          >
            Submit Another Inquiry
          </button>
          {variant === "modal" && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border-2 border-black font-bold text-xs uppercase text-white cursor-pointer"
              style={{ backgroundColor: BRAND_BLUE, boxShadow: "2px 2px 0px #000000" }}
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
      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-4">
        <span 
          className="font-black text-xs sm:text-sm tracking-widest uppercase"
          style={{ color: BRAND_BLUE }}
        >
          STEP {currentStep} OF {TOTAL_STEPS}
        </span>

        {variant === "modal" && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-neutral-200 transition-all text-black cursor-pointer active:translate-x-[1px] active:translate-y-[1px]"
            style={{ boxShadow: "2px 2px 0px #000000" }}
            title="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 border-2 border-red-500 rounded-2xl text-red-700 text-xs font-bold flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Step Form Panes */}
      <div className="min-h-[290px] flex flex-col justify-start">
        {/* STEP 1: What should we call you? */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-neutral-950 leading-tight mb-2">
              WHAT SHOULD WE CALL YOU?
            </h2>
            <p className="text-neutral-600 text-sm font-medium mb-6">
              Let’s start with your name so our team knows who we are speaking with.
            </p>
            <div className="mb-8">
              <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2">
                Your Full Name <span style={{ color: BRAND_BLUE }}>*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setErrorMessage("");
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleNext();
                  }
                }}
                placeholder="e.g. Alex Sharma"
                className="w-full bg-white border-2 border-black rounded-2xl px-4 py-3.5 text-neutral-900 font-semibold placeholder:text-neutral-400 focus:outline-none text-base shadow-sm"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* STEP 2: What's your phone number? */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-neutral-950 leading-tight mb-2">
              WHAT'S YOUR PHONE NUMBER?
            </h2>
            <p className="text-neutral-600 text-sm font-medium mb-6">
              Two quick picks or a short 10-minute discovery call — let's stay in touch.
            </p>
            <div className="mb-8">
              <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2">
                Mobile / WhatsApp <span style={{ color: BRAND_BLUE }}>*</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.phoneCode}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phoneCode: e.target.value }))}
                  className="bg-white border-2 border-black rounded-2xl px-3 py-3.5 font-bold text-neutral-900 focus:outline-none text-sm cursor-pointer"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+65">🇸🇬 +65</option>
                  <option value="+49">🇩🇪 +49</option>
                </select>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setErrorMessage("");
                    setFormData((prev) => ({ ...prev, phone: e.target.value }));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                  placeholder="98765 43210"
                  className="flex-1 bg-white border-2 border-black rounded-2xl px-4 py-3.5 text-neutral-900 font-semibold placeholder:text-neutral-400 focus:outline-none text-base"
                  autoFocus
                />
              </div>
              <p className="text-[11px] text-neutral-500 mt-2 font-medium flex items-center gap-1.5">
                <span>🔒</span> Direct contact only. Strictly zero sales spam.
              </p>
            </div>
          </div>
        )}

        {/* STEP 3: What are you looking for? */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-neutral-950 leading-tight mb-2">
              WHAT ARE YOU LOOKING FOR?
            </h2>
            <p className="text-neutral-600 text-sm font-medium mb-5">
              Select the capabilities your project requires right now.
            </p>
            <div className="flex flex-wrap gap-2.5 max-h-[290px] overflow-y-auto mb-8 pr-1">
              {SERVICES_OPTIONS.map((item) => {
                const isSelected = formData.services.includes(item);
                return (
                  <button
                    type="button"
                    key={item}
                    onClick={() => toggleService(item)}
                    className={`border-2 border-black rounded-full px-4 py-2 font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      isSelected ? "text-white" : "bg-white text-neutral-900 hover:bg-neutral-100"
                    }`}
                    style={{
                      backgroundColor: isSelected ? BRAND_BLUE : undefined,
                      boxShadow: isSelected ? "2px 2px 0px #000000" : "none",
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Tell us about your business */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-neutral-950 leading-tight mb-2">
              TELL US ABOUT YOUR BUSINESS
            </h2>
            <p className="text-neutral-600 text-sm font-medium mb-4">
              Which category fits your business best and what are you offering?
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2">
                  Industry Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRY_OPTIONS.map((item) => {
                    const isSelected = formData.industry === item;
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => {
                          setErrorMessage("");
                          setFormData((prev) => ({ ...prev, industry: item }));
                        }}
                        className={`border-2 border-black rounded-full px-3 py-1.5 font-bold text-xs transition-all cursor-pointer ${
                          isSelected ? "text-white" : "bg-white text-neutral-900 hover:bg-neutral-100"
                        }`}
                        style={{
                          backgroundColor: isSelected ? BRAND_BLUE : undefined,
                          boxShadow: isSelected ? "2px 2px 0px #000000" : "none",
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2">
                  Brief Overview (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.businessDesc}
                  onChange={(e) => setFormData((prev) => ({ ...prev, businessDesc: e.target.value }))}
                  placeholder="e.g. We are a direct-to-consumer apparel brand looking to improve conversion rates and redesign our platform..."
                  className="w-full bg-white border-2 border-black rounded-2xl px-4 py-3 text-neutral-900 font-medium placeholder:text-neutral-400 focus:outline-none text-sm resize-none shadow-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: What's your brand called? */}
        {currentStep === 5 && (
          <div>
            <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-neutral-950 leading-tight mb-2">
              WHAT'S YOUR BRAND CALLED?
            </h2>
            <p className="text-neutral-600 text-sm font-medium mb-6">
              Enter your brand, business, or venture name.
            </p>
            <div className="mb-8">
              <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2">
                Brand / Venture Name <span style={{ color: BRAND_BLUE }}>*</span>
              </label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) => {
                  setErrorMessage("");
                  setFormData((prev) => ({ ...prev, brandName: e.target.value }));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleNext();
                  }
                }}
                placeholder="e.g. Lumina Studios / Nexus Brands"
                className="w-full bg-white border-2 border-black rounded-2xl px-4 py-3.5 text-neutral-900 font-semibold placeholder:text-neutral-400 focus:outline-none text-base shadow-sm"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* STEP 6: Where can we reach you? */}
        {currentStep === 6 && (
          <div>
            <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-neutral-950 leading-tight mb-2">
              WHERE CAN WE REACH YOU?
            </h2>
            <p className="text-neutral-600 text-sm font-medium mb-5">
              We’ll send your tailored roadmap, audit, and estimate here.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2">
                  Work Email Address <span style={{ color: BRAND_BLUE }}>*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setErrorMessage("");
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                  }}
                  placeholder="alex@yourbrand.com"
                  className="w-full bg-white border-2 border-black rounded-2xl px-4 py-3.5 text-neutral-900 font-semibold placeholder:text-neutral-400 focus:outline-none text-base shadow-sm"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2">
                  Do you already have a website?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, hasWebsite: true }))}
                    className={`border-2 border-black rounded-2xl py-2.5 font-bold text-sm text-center transition-all cursor-pointer ${
                      formData.hasWebsite === true ? "text-white" : "bg-white hover:bg-neutral-100"
                    }`}
                    style={{
                      backgroundColor: formData.hasWebsite === true ? BRAND_BLUE : undefined,
                      boxShadow: formData.hasWebsite === true ? "2px 2px 0px #000000" : "none",
                    }}
                  >
                    Yes, have one
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, hasWebsite: false, websiteUrl: "" }))}
                    className={`border-2 border-black rounded-2xl py-2.5 font-bold text-sm text-center transition-all cursor-pointer ${
                      formData.hasWebsite === false ? "text-white" : "bg-white hover:bg-neutral-100"
                    }`}
                    style={{
                      backgroundColor: formData.hasWebsite === false ? BRAND_BLUE : undefined,
                      boxShadow: formData.hasWebsite === false ? "2px 2px 0px #000000" : "none",
                    }}
                  >
                    No, starting new
                  </button>
                </div>
              </div>
              {formData.hasWebsite && (
                <div className="pt-1">
                  <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2">
                    Current Website URL
                  </label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData((prev) => ({ ...prev, websiteUrl: e.target.value }))}
                    placeholder="https://yourbrand.com"
                    className="w-full bg-white border-2 border-black rounded-2xl px-4 py-3 text-neutral-900 font-medium placeholder:text-neutral-400 focus:outline-none text-sm shadow-sm"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 7: Where is your brand today? (Exact Replica of User Image in Blue) */}
        {currentStep === 7 && (
          <div>
            <h2 className="text-2xl sm:text-[28px] font-black uppercase tracking-tight text-neutral-950 leading-tight mb-2">
              WHERE IS YOUR BRAND TODAY?
            </h2>
            <p className="text-neutral-600 text-sm font-medium mb-6">
              Two quick picks — it tells us how to help before we call.
            </p>

            {/* Section 1: Monthly Ad Spend */}
            <div className="mb-6">
              <label className="block text-xs font-black uppercase text-neutral-900 tracking-wider mb-2.5">
                MONTHLY AD SPEND
              </label>
              <div className="flex flex-wrap gap-2">
                {AD_SPEND_OPTIONS.map((item) => {
                  const isSelected = formData.adSpend === item;
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => {
                        setErrorMessage("");
                        setFormData((prev) => ({ ...prev, adSpend: item }));
                      }}
                      className={`border-2 border-black rounded-full px-4 py-2 font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                        isSelected ? "text-white" : "bg-white text-neutral-900 hover:bg-neutral-100"
                      }`}
                      style={{
                        backgroundColor: isSelected ? BRAND_BLUE : undefined,
                        boxShadow: isSelected ? "2px 2px 0px #000000" : "none",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 2: What would you like fixed? */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2.5">
                <label className="text-xs font-black uppercase text-neutral-900 tracking-wider">
                  WHAT WOULD YOU LIKE FIXED?
                </label>
                <span className="text-xs text-neutral-500 font-medium lowercase">pick all that apply</span>
              </div>
              <div className="flex flex-wrap gap-2 max-h-[220px] overflow-y-auto pr-1">
                {FIX_OPTIONS.map((item) => {
                  const isSelected = formData.fixedItems.includes(item);
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => toggleFix(item)}
                      className={`border-2 border-black rounded-full px-3.5 py-1.5 font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                        isSelected ? "text-white" : "bg-white text-neutral-900 hover:bg-neutral-100"
                      }`}
                      style={{
                        backgroundColor: isSelected ? BRAND_BLUE : undefined,
                        boxShadow: isSelected ? "2px 2px 0px #000000" : "none",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={handleNext}
          disabled={submitting}
          className="w-full py-4 rounded-full text-white font-black text-base sm:text-lg uppercase tracking-wide border-2 border-black transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-60"
          style={{
            backgroundColor: BRAND_BLUE,
            boxShadow: "4px 4px 0px #000000",
          }}
        >
          {submitting ? (
            <span>SUBMITTING INQUIRY...</span>
          ) : currentStep === TOTAL_STEPS ? (
            <>
              <span>SUBMIT</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </>
          ) : (
            <>
              <span>CONTINUE</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>

        <div className="flex items-center justify-between pt-1">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              disabled={submitting}
              className="text-xs font-bold text-neutral-500 hover:text-black uppercase tracking-wider inline-flex items-center gap-1 py-1 px-2.5 rounded hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK
            </button>
          ) : (
            <div />
          )}

          <span className="text-[11px] text-neutral-400 font-semibold tracking-wider uppercase ml-auto">
            7-STEP BRAND INQUIRY
          </span>
        </div>
      </div>

      {/* Progress Dots Indicator (7 Steps) */}
      <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-neutral-300">
        {Array.from({ length: TOTAL_STEPS }).map((_, idx) => {
          const stepNum = idx + 1;
          const isCurrent = stepNum === currentStep;
          const isDone = stepNum < currentStep;
          return (
            <div
              key={idx}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: isCurrent ? "32px" : "16px",
                backgroundColor: isCurrent ? BRAND_BLUE : isDone ? "#000000" : "#171717",
                opacity: isCurrent ? 1 : isDone ? 0.75 : 0.25,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
