"use client";

import React, { useState, useEffect } from "react";

const sections = [
  { id: "engagement", label: "1. Engagement Terms" },
  { id: "services-scope", label: "2. Service Agreement" },
  { id: "fees-payment", label: "3. Fees & Payment" },
  { id: "intellectual-property", label: "4. Code Ownership" },
  { id: "client-obligations", label: "5. Client Obligations" },
  { id: "liability-limits", label: "6. Limitation of Liability" },
  { id: "termination-terms", label: "7. Contract Termination" },
  { id: "governing-law", label: "8. Governing Law" },
  { id: "coordinates", label: "9. Studio Contact" },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("engagement");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24 select-none">
      {/* Background Soft Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#1161ed]/[0.03] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#1161ed]/[0.02] rounded-full blur-3xl -z-10" />

      {/* Header Section */}
      <section className="relative pt-24 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-[#1161ed] font-extrabold text-[0.8rem] uppercase tracking-widest mb-4">
            GOVERNANCE PROTOCOL
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg text-slate-500 max-w-[620px] mx-auto leading-relaxed">
            Last Updated: May 29, 2026. These Terms & Conditions define the professional engagement standards and client governance structures of V2 Labs.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-[1100px] mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 items-start">
          
          {/* Left Table of Contents - Sticky Sidebar */}
          <aside className="hidden lg:sticky lg:top-28 lg:flex flex-col gap-6 bg-white border border-slate-200/60 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
            <div>
              <h3 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                Agreement Navigation
              </h3>
              <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                Seamlessly scroll or click coordinates to access contract sections.
              </p>
            </div>
            
            <nav className="flex flex-col gap-1.5 border-t border-slate-100 pt-4">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left py-2.5 px-3.5 rounded-xl font-bold text-xs transition-all duration-200 active:scale-[0.995] flex items-center gap-2 group ${
                      isActive
                        ? "bg-[#1161ed]/[0.06] text-[#1161ed]"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-transform duration-200 ${
                      isActive ? "bg-[#1161ed] scale-110" : "bg-transparent group-hover:bg-slate-300"
                    }`} />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Detailed Documentation */}
          <div className="flex flex-col gap-10">
            <div className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col gap-10">
              
              {/* Engagement Terms */}
              <section id="engagement" className="scroll-mt-32">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    1. Terms of Engagement & Scope
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    By engaging V2 Labs (“Studio”) for operational auditing, system design, background worker integration, cloud migration, or digital production, you agree to be legally governed by these Terms & Conditions.
                  </p>
                  <p>
                    Any specific projects, features, or customized scopes will be defined in a separate Statement of Work (SOW) or high-fidelity blueprint document which remains subservient to this legal framework.
                  </p>
                </div>
              </section>

              {/* Service Agreement */}
              <section id="services-scope" className="scroll-mt-32 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    2. Service Agreement & Project Scopes
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    We design, code, test, and deploy software products under agreed scope timelines. All deliverables are built against explicit technical benchmarks. Any change requests outside the initial blueprint scopes will be considered out-of-scope work and will initiate secondary fee assessments.
                  </p>
                  <p>
                    While we test systems under strict simulated spikes and database audits, V2 Labs does not guarantee third-party platform API up-times (such as Salesforce, HubSpot, or Zoho API endpoints) or third-party cloud infrastructure status.
                  </p>
                </div>
              </section>

              {/* Fees and Payments */}
              <section id="fees-payment" className="scroll-mt-32 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    3. Fees, Estimates & Payment Timelines
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    Professional fees are set according to standard milestones outlined in our Statement of Work (SOW). Engagement triggers a strict billing lifecycle:
                  </p>
                  <div className="grid gap-3.5 mt-2.5">
                    <div className="flex gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-extrabold text-[#1161ed] text-sm mt-0.5">01</span>
                      <div>
                        <strong className="text-slate-800 font-extrabold text-[0.88rem]">Retainer Deposit:</strong>
                        <p className="text-xs text-slate-500 mt-0.5">A non-refundable mobilization deposit is required to lock operational pipelines before any engineering or auditing starts.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-extrabold text-[#1161ed] text-sm mt-0.5">02</span>
                      <div>
                        <strong className="text-slate-800 font-extrabold text-[0.88rem]">Milestone Invoices:</strong>
                        <p className="text-xs text-slate-500 mt-0.5">Interim fees are invoiced upon deliverable hand-offs (e.g. database schema sign-offs or secure staging deployments).</p>
                      </div>
                    </div>
                    <div className="flex gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-extrabold text-[#1161ed] text-sm mt-0.5">03</span>
                      <div>
                        <strong className="text-slate-800 font-extrabold text-[0.88rem]">Late Remittances:</strong>
                        <p className="text-xs text-slate-500 mt-0.5">Milestone invoices not remitted within 14 calendar days will incur a standard 1.5% late service charge per month.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Code Ownership */}
              <section id="intellectual-property" className="scroll-mt-32 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    4. Intellectual Property & Code Ownership
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    Upon complete settlement of all agreed milestone payments, the custom codebase and bespoke graphic interfaces programmed specifically for your project transfer entirely to you.
                  </p>
                  <p>
                    V2 Labs retains ownership of any pre-existing software templates, internal framework modules, proprietary helper scripts, and atomic design elements developed in-house prior to the project start. We grant you an irrevocable, royalty-free, perpetual license to run, compile, and scale these foundational modules inside your product.
                  </p>
                </div>
              </section>

              {/* Client Obligations */}
              <section id="client-obligations" className="scroll-mt-32 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    5. Client Obligations & System Access
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    To ensure professional engineering pipelines run efficiently, the Client agrees to:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1 text-slate-600">
                    <li>Provide timely and accurate feedback on milestones within 5 calendar days.</li>
                    <li>Secure and provision authorized API keys, database credentials, staging access keys, and cloud account credentials when required.</li>
                    <li>Designate a primary point-of-contact with authority to sign off on technical blueprint milestones.</li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="liability-limits" className="scroll-mt-32 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    6. Limitation of Liability
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    To the maximum extent permitted by applicable law, V2 Labs will not be liable for any indirect, incidental, special, consequential, or punitive damages. This includes but is not limited to:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1 text-slate-600 font-medium">
                    <li>Loss of business profits, corporate revenues, data, or reputation.</li>
                    <li>Losses incurred due to third-party database breaches, cloud server failures, or downtime.</li>
                    <li>System bugs arising from unapproved Client modifications to the database or code.</li>
                  </ul>
                  <p>
                    Our total cumulative liability in any contract dispute will never exceed the total fee amount actually paid by the Client to V2 Labs for the specific deliverable under dispute.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section id="termination-terms" className="scroll-mt-32 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    7. Termination & Suspension
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    Either party may terminate an active contract by providing 30 calendar days of written notice to the other party. Upon notice:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1 text-slate-600">
                    <li>V2 Labs will immediately suspend engineering pipelines and halt hourly scopes.</li>
                    <li>The Client remains fully obligated to settle all pending invoices and work-in-progress hours logged up to the termination date.</li>
                  </ul>
                  <p>
                    We reserve the right to suspend cloud servers, databases, or deploy tunnels if invoices remain unpaid for more than 30 calendar days past their due date.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="scroll-mt-32 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    8. Governing Law & Dispute Resolution
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    These Terms & Conditions are governed by and construed in accordance with the laws of India, without giving effect to conflicts of law principles.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of these Terms of Engagement will be resolved through professional mediation in Mumbai, Maharashtra, India.
                  </p>
                </div>
              </section>

              {/* Contact Coordinates */}
              <section id="coordinates" className="scroll-mt-32 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    9. Studio Contact & coordinates
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    For inquiries, SOW blueprints, or contract clarifications, reach out directly to the V2 Labs legal operations desk:
                  </p>
                  
                  <div className="flex flex-col gap-3.5 mt-2.5 max-w-[340px]">
                    <div className="flex items-center gap-3.5 bg-slate-50 border border-slate-200/50 rounded-2xl px-4 py-3 shadow-sm">
                      <span className="w-8 h-8 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1161ed] shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </span>
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider leading-none mb-1">
                          Email Coordinates
                        </h4>
                        <a href="mailto:hello@v2labs.co" className="text-slate-800 font-extrabold text-xs hover:text-[#1161ed] transition-colors">
                          hello@v2labs.co
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 bg-slate-50 border border-slate-200/50 rounded-2xl px-4 py-3 shadow-sm">
                      <span className="w-8 h-8 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1161ed] shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </span>
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider leading-none mb-1">
                          HQ Coordinates
                        </h4>
                        <p className="text-slate-800 font-extrabold text-xs">
                          Mumbai, Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
