"use client";

import React, { useState, useEffect } from "react";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-collection", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Data" },
  { id: "cookies-tracking", label: "4. Cookies & Tracking" },
  { id: "information-sharing", label: "5. Information Sharing" },
  { id: "data-security", label: "6. Data Security" },
  { id: "your-rights", label: "7. Your Rights" },
  { id: "policy-updates", label: "8. Policy Updates" },
  { id: "contact-coordinates", label: "9. Contact Us" },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

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
            LEGAL FRAMEWORK
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-slate-500 max-w-[620px] mx-auto leading-relaxed">
            Last Updated: May 29, 2026. This Privacy Policy details how V2 Labs
            collects, uses, shares, and protects your information when you
            engage with our studio platforms.
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
                Table of Contents
              </h3>
              <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                Click a link to navigate smoothly to a specific legal
                coordinates section.
              </p>
            </div>

            <nav className="flex flex-col gap-1.5 border-t border-slate-100 pt-4">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left py-2.5 px-3.5 rounded-xl font-bold text-xs transition-all duration-200 active:scale-[0.99] flex items-center gap-2 group ${
                      isActive
                        ? "bg-[#1161ed]/[0.06] text-[#1161ed]"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-transform duration-200 ${
                        isActive
                          ? "bg-[#1161ed] scale-110"
                          : "bg-transparent group-hover:bg-slate-300"
                      }`}
                    />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Detailed Documentation */}
          <div className="flex flex-col gap-10">
            <div className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col gap-10">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    1. Introduction & Scope
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    V2 Labs (“we”, “us”, or “our”) is dedicated to protecting
                    the privacy of our clients, prospective hires, and visitors.
                    This Privacy Policy details the types of personal
                    information we collect, how we manage it, and the security
                    protocols we employ to protect your data.
                  </p>
                  <p>
                    This policy applies to all systems, websites, applications,
                    and tools hosted under the <code>v2labs.co</code> domain and
                    any interactions with our team members during consultations
                    or project scoping.
                  </p>
                </div>
              </section>

              {/* Information Collection */}
              <section
                id="information-collection"
                className="scroll-mt-32 border-t border-slate-100 pt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    2. Information We Collect
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    We collect information that you voluntarily provide to us
                    when using our lead estimators, inquiry forms, and contact
                    pipelines:
                  </p>
                  <div className="grid gap-3 mt-2">
                    <div className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 border border-slate-200/40">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed] mt-2 shrink-0" />
                      <div>
                        <strong className="text-slate-800 font-extrabold text-[0.88rem]">
                          Lead Details:
                        </strong>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Your name, email address, phone number, company
                          coordinates, project scope parameters, and estimated
                          budgets.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 border border-slate-200/40">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed] mt-2 shrink-0" />
                      <div>
                        <strong className="text-slate-800 font-extrabold text-[0.88rem]">
                          Career Application Details:
                        </strong>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Resume documents, portfolio links, skillset lists, and
                          cover letters submitted through our careers router.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Data */}
              <section
                id="how-we-use"
                className="scroll-mt-32 border-t border-slate-100 pt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    3. How We Use Data
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    V2 Labs uses the collected data strictly for professional
                    purposes:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1 text-slate-600">
                    <li>
                      To schedule, analyze, and build out your custom software
                      solutions.
                    </li>
                    <li>
                      To route project leads safely to the correct software
                      account manager.
                    </li>
                    <li>
                      To evaluate applications submitted to our careers node.
                    </li>
                    <li>
                      To optimize loading performance and browser layout flows
                      based on telemetry data.
                    </li>
                    <li>
                      To prevent security threats, unauthorized logins, and
                      spam.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Cookies & Tracking */}
              <section
                id="cookies-tracking"
                className="scroll-mt-32 border-t border-slate-100 pt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    4. Cookies & Tracking Technologies
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    Our platforms employ basic functional cookies to facilitate
                    navigation and remember layout state variables (such as
                    active theme variables or dismissed menus).
                  </p>
                  <p>
                    We do not share cookie data with advertising networks or
                    third-party track suites. You can configure your browser to
                    reject functional cookies, but this might slightly limit
                    layout persistence.
                  </p>
                </div>
              </section>

              {/* Information Sharing */}
              <section
                id="information-sharing"
                className="scroll-mt-32 border-t border-slate-100 pt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    5. Information Sharing & Disclosure
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    <strong>
                      We do not sell, rent, or lease your personal information.
                    </strong>{" "}
                    Your data is accessed strictly by authorized engineers and
                    designers in V2 Labs. We may disclose data only under these
                    narrow conditions:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1 text-slate-600">
                    <li>
                      To trusted backend sub-processors (like database hosting,
                      email routers, and API connectors) strictly to execute
                      operational tasks.
                    </li>
                    <li>
                      When legally compelled to comply with applicable
                      regulatory frameworks or national laws.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section
                id="data-security"
                className="scroll-mt-32 border-t border-slate-100 pt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    6. Data Security
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    We employ industry-standard security protocols to guard your
                    information. All inbound form payloads are encrypted using
                    standard TLS protocols before being processed.
                  </p>
                  <p>
                    Our databases are hosted inside isolated Virtual Private
                    Clouds (VPC) protected by active IAM rules, strict firewall
                    settings, and encrypted backend synchronization tunnels.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section
                id="your-rights"
                className="scroll-mt-32 border-t border-slate-100 pt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    7. Your Rights & Choices
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    Depending on your jurisdiction (such as CCPA or GDPR), you
                    may have the following rights regarding the personal
                    coordinates we maintain:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1 text-slate-600">
                    <li>
                      The right to request access to the data we maintain about
                      you.
                    </li>
                    <li>
                      The right to request corrections or updates to inaccurate
                      data.
                    </li>
                    <li>
                      The right to request the complete deletion of your records
                      from our systems.
                    </li>
                  </ul>
                  <p className="mt-2 text-xs bg-slate-50 border border-slate-200/50 p-4.5 rounded-2xl text-slate-500 leading-relaxed font-semibold">
                    To exercise any of these security choices, please submit a
                    written coordinate request to v2labsglobal@gmail.com. We will
                    process and respond to all requests within 30 calendar days.
                  </p>
                </div>
              </section>

              {/* Policy Updates */}
              <section
                id="policy-updates"
                className="scroll-mt-32 border-t border-slate-100 pt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    8. Policy Updates
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    We reserve the right to modify this Privacy Policy as our
                    custom systems evolve. Any updates will be published
                    immediately on this route with an updated &quot;Last
                    Updated&quot; timestamp.
                  </p>
                  <p>
                    We encourage you to review this legal page periodically to
                    stay informed about how we protect your corporate
                    coordinates.
                  </p>
                </div>
              </section>

              {/* Contact Us */}
              <section
                id="contact-coordinates"
                className="scroll-mt-32 border-t border-slate-100 pt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1161ed]" />
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    9. Contact Us & Coordinates
                  </h2>
                </div>
                <div className="text-sm leading-7 text-slate-650 font-medium flex flex-col gap-4">
                  <p>
                    If you have questions, security inquiries, or feedback
                    regarding this legal policy framework, reach out directly to
                    our engineering coordinates:
                  </p>
                  <div className="flex flex-col gap-3.5 mt-2 max-w-[340px]">
                    <div className="flex items-center gap-3.5 bg-slate-50 border border-slate-200/50 rounded-2xl px-4 py-3 shadow-sm">
                      <span className="w-8 h-8 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1161ed] shrink-0">
                        <svg
                          className="w-4 h-4"
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
                      </span>
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider leading-none mb-1">
                          Email Coordinates
                        </h4>
                        <a
                          href="mailto:v2labsglobal@gmail.com"
                          className="text-slate-800 font-extrabold text-xs hover:text-[#1161ed] transition-colors"
                        >
                          v2labsglobal@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 bg-slate-50 border border-slate-200/50 rounded-2xl px-4 py-3 shadow-sm">
                      <span className="w-8 h-8 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1161ed] shrink-0">
                        <svg
                          className="w-4 h-4"
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
                      </span>
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider leading-none mb-1">
                          Location Coordinates
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
