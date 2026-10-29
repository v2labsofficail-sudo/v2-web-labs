"use client";

import AlternatingText from "@/components/AlternatingText";
import Image from "next/image";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <ScrollReveal>
        <section className="border-b border-slate-200 bg-white px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#0055DA]">
              Get In Touch
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#111111] sm:text-5xl">
              Let&apos;s talk about <AlternatingText>your project</AlternatingText>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg font-medium">
              Complete the step-by-step project scope below and our engineering team will get back to you within 24 hours.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image/Illustration & Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Illustration Frame */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden shadow-md border border-slate-200/80 bg-slate-50">
                <Image
                  src="/images/services/ai-automation.jpg"
                  alt="Connect with V2 Labs Global"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Info Card */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4">
                <h3 className="text-lg font-black text-slate-900 mb-1">Company Details</h3>
                
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Email Us</div>
                    <a href="mailto:contact@v2labsglobal.com" className="text-sm font-bold text-slate-800 hover:text-[#0055DA] transition-colors">
                      contact@v2labsglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Headquarters</div>
                    <div className="text-sm font-bold text-slate-800">Thane, Maharashtra, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Business Hours</div>
                    <div className="text-sm font-bold text-slate-800">Mon - Sat: 9:00 AM - 6:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Step Project Inquiry Form */}
            <div className="lg:col-span-7 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:p-8 w-full">
              <ProjectInquiryForm variant="page" />
            </div>

          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
