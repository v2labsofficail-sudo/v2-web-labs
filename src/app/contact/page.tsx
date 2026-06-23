"use client";
import AlternatingText from "@/components/AlternatingText";
import Image from "next/image";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const serviceOptions = [
  { value: "custom_erp", label: "Custom ERP Software" },
  { value: "saas_dev", label: "SaaS Product Development" },
  { value: "enterprise_web", label: "Enterprise Web Application" },
  { value: "crm_dev", label: "CRM Development" },
  { value: "startup_mvp", label: "Startup MVP Development" },
  { value: "hrms_ai", label: "HRMS and Recruitment AI Platform" },
  { value: "ai_automation", label: "AI Automation Solutions" },
  { value: "ai_chatbot", label: "AI Chatbot or AI Agent" },
  { value: "dashboard_analytics", label: "Dashboard and Analytics System" },
  { value: "workflow_automation", label: "Workflow Automation System" },
  { value: "mobile_app", label: "Mobile App Development" },
  { value: "cloud_devops", label: "Cloud and DevOps Infrastructure" },
  { value: "api_integrations", label: "API Development and Integrations" },
  { value: "custom_software", label: "Custom Software Solution" },
] as const;

const budgetOptions = [
  "Under INR 10,000",
  "INR 10,000 - INR 20,000",
  "INR 20,000 - INR 50,000",
  "INR 50,000 - INR 2,00,000",
  "INR 2,00,000+",
] as const;

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
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
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

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Your message has been submitted successfully.",
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
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Unable to submit right now. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <ScrollReveal>
        <section className="border-b border-slate-200 bg-white px-6 py-20">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#0055DA]">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-[#111111] sm:text-5xl">
              Let&apos;s talk about <AlternatingText>your project</AlternatingText>
            </h1>
            <p className="mt-5 text-base leading-8 text-[#111111] sm:text-lg">
              Fill out the form below and our team will get back to you.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="px-6 py-14 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image/Illustration & Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Illustration Frame */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden shadow-lg border border-slate-200/50 bg-white">
                <Image
                  src="/images/services/ai-automation.jpg"
                  alt="Connect with V2Labs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Info Card */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4 font-poppins">
                <h3 className="text-lg font-black text-slate-900 mb-1">Company Details</h3>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Email Us</div>
                    <a href="mailto:contact@v2labsglobal.com" className="text-sm font-bold text-slate-800 hover:text-[#0055DA] transition-colors">contact@v2labsglobal.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z"></path></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Headquarters</div>
                    <div className="text-sm font-bold text-slate-800">Thane, Maharashtra, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Business Hours</div>
                    <div className="text-sm font-bold text-slate-800">Mon - Sat: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-8 w-full">
              {status.type && (
                <div
                  className={`mb-6 rounded-2xl border px-4 py-3 text-sm font-semibold ${
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#111111]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-medium text-[#111111] outline-none transition focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#111111]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-medium text-[#111111] outline-none transition focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#111111]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 90000 00000"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-medium text-[#111111] outline-none transition focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#111111]">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-medium text-[#111111] outline-none transition focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#111111]">
                    Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-medium text-[#111111] outline-none transition focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#111111]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="min-h-[180px] w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-medium text-[#111111] outline-none transition focus:border-[#0055DA] focus:ring-4 focus:ring-[#0055DA]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[#0055DA] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#0044B3] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
