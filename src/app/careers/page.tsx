"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const perks = [
    {
      title: "100% Distributed & Remote",
      desc: "Work from anywhere in the world. We focus on results, high-fidelity deliverables, and clear sync boundaries, not desk hours.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.952 11.952 0 0 1 12 16.5c-3.12 0-6.002-1.2-8.284-3.186m0 0A8.959 8.959 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
    {
      title: "Premium Tooling & Budget",
      desc: "Top-tier setups deserve top-tier equipment. We subsidize late-model MacBook Pros, atomic Figma licenses, and LLM automation tools.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766l.002-.001a1.56 1.56 0 0 1 1.883 1.882l-.001.002c-.14.468-.382.89-.766 1.208l-3.03 2.496ZM11.42 15.17 8.39 18.2c-.384.317-.89.468-1.208.766l-.002.001A1.56 1.56 0 0 1 5.3 17.085l.001-.002c.14-.468.382-.89.766-1.208l3.03-2.496M11.42 15.17l-3.03-2.496a1.56 1.56 0 0 1 1.882-1.883l.002.001c.468.14.89.382 1.208.766l3.03 2.496Z" />
        </svg>
      ),
    },
    {
      title: "Self-Development Budget",
      desc: "Never stop engineering your skillset. We allocate an annual $2,000 learning budget for conferences, advanced courses, and books.",
      icon: (
        <svg className="w-6 h-6 text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
  ];

  const roles = [
    {
      id: "fs-eng",
      title: "Senior Full-Stack Engineer",
      team: "Product & Systems Engineering",
      location: "Remote (Global)",
      type: "Full-Time",
      category: "Engineering",
      description: "Scale high-performance Next.js architectures and microservice frameworks. Ideal candidate is hyper-focused on sub-second rendering, clean TypeScript types, and database optimization.",
      requirements: [
        "5+ years engineering React/Next.js/Node platforms in production.",
        "Deep familiarity with PostgreSQL, Redis caching pipelines, and Dockerized environments.",
        "A strong portfolio of launched SaaS systems or atomic web dashboards.",
      ],
    },
    {
      id: "ai-workflow",
      title: "AI Workflow Engineer & Architect",
      team: "Automation Solutions",
      location: "Remote (Global)",
      type: "Full-Time",
      category: "AI & Automation",
      description: "Build secure Operational Databases, custom agents, and LLM automation pipelines. Bridge the gap between vector search tools and daily operations.",
      requirements: [
        "3+ years experience engineering AI pipelines (Langchain, LlamaIndex, or raw APIs).",
        "Expert knowledge in prompt tuning, embeddings, and context window optimization.",
        "Solid Python/Node engineering foundations with clear system orchestration skills.",
      ],
    },
    {
      id: "motion-editor",
      title: "Senior Video Editor & Motion Artist",
      team: "Creative & Brand Assets",
      location: "Remote (Global)",
      type: "Full-Time / Contract",
      category: "Creative",
      description: "Craft premium, cinematic Cuts and high-retention video stories for visual brands. Ideal artist has a profound eye for layout balance, timing, and dynamic sound design.",
      requirements: [
        "Expert proficiency in Premiere Pro, After Effects, and Figma assets.",
        "Stunning portfolio of motion reels, high-fidelity promotional clips, or cinematic layouts.",
        "Ability to self-start on scripting concepts and timing guidelines.",
      ],
    },
  ];

  const categories = ["All", "Engineering", "AI & Automation", "Creative"];

  const filteredRoles = roles.filter((role) => {
    const matchesSearch =
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.requirements.some((req) => req.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || role.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-Outfit">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-[#1161ed] font-extrabold text-[0.8rem] uppercase tracking-widest mb-4">
            Join V2 Labs
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Build the Future of Digital Studio Systems
          </h1>
          <p className="text-lg text-slate-500 max-w-[700px] mx-auto leading-relaxed">
            We partner with visionary startups and global brands to build premium user experiences, high-performance dashboards, and LLM pipelines. We are seeking collaborative builders who love pixel perfection.
          </p>
        </div>
      </section>

      <section className="sticky z-30 transition-all duration-300 w-full bg-transparent top-[83px] sm:top-[107px] lg:top-[111px]">
        <div className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "max-w-[1100px] py-3 bg-white/85 backdrop-blur-xl border border-slate-200/40 rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] mx-4 sm:mx-6 lg:mx-auto px-5"
            : "max-w-full py-6 bg-white border-b border-slate-100 rounded-none mx-0 px-6"
        }`}>
          <div className="max-w-[1100px] mx-auto w-full">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-full">
              <div className="relative w-full md:max-w-md shrink-0">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search positions, technologies, skills..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50/60 hover:bg-slate-100/50 hover:border-slate-300/80 border border-slate-200 rounded-2xl text-sm font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1161ed] focus:ring-4 focus:ring-[#1161ed]/8 transition-all text-slate-800"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="w-full flex gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 justify-start md:justify-end">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold border transition-all cursor-pointer active:scale-95 duration-150 ${
                        isActive
                          ? "bg-[#1161ed] border-[#1161ed] text-white shadow-sm shadow-[#1161ed]/15"
                          : "bg-slate-50/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        {/* Perks Section */}
        <section className="py-20 max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#1161ed] font-extrabold text-[0.75rem] uppercase tracking-widest mb-3">
              Why Us
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              A Collaborative Digital Environment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((p, idx) => (
              <div key={idx} className="bg-white/40 border border-slate-200/40 backdrop-blur-xl p-8 rounded-2xl shadow-sm flex flex-col items-start hover:border-[#1161ed]/20 hover:bg-white/60 hover:shadow-[0_15px_30px_rgba(17,97,237,0.04)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#1161ed]/[0.05] flex items-center justify-center mb-6 shrink-0 group-hover:bg-[#1161ed]/10 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-slate-100/50 border-t border-slate-200/60 border-b border-slate-200/60">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#1161ed] font-extrabold text-[0.75rem] uppercase tracking-widest mb-3">
              Open Positions
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              {filteredRoles.length === 0
                ? "No matching roles found"
                : `Open Global Roles (${filteredRoles.length})`}
            </h2>
          </div>

          {filteredRoles.length === 0 ? (
            /* Beautiful Filter Empty State */
            <div className="bg-white rounded-3xl border border-slate-200/60 p-12 text-center max-w-xl mx-auto shadow-sm">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">No roles match your search filters</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Try resetting your search query or department pills, or drop us an open application below and we will contact you.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-[#1161ed] text-white hover:bg-[#0c4ec3] px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 duration-150 cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {filteredRoles.map((r) => (
                <div key={r.id} className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm flex flex-col hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6 mb-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-1">{r.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400 font-bold">
                        <span>{r.team}</span>
                        <span>•</span>
                        <span>{r.location}</span>
                      </div>
                    </div>
                    <span className="bg-[#1161ed]/[0.06] text-[#1161ed] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase shrink-0">
                      {r.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2.5">Description</h4>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">{r.description}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2.5">Key Requirements</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-sm text-slate-500 leading-relaxed">
                        {r.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                    <Link
                      href={`/contact?role=${r.id}`}
                      className="bg-slate-900 text-white hover:bg-[#1161ed] hover:shadow-[0_4px_12px_rgba(17,97,237,0.22)] px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 duration-200"
                    >
                      Apply for this Role
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
        {/* General Submission */}
        <section className="py-24 max-w-[1100px] mx-auto px-6 text-center">
        <div className="bg-slate-900 rounded-3xl p-10 sm:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1161ed] opacity-10 rounded-full blur-3xl -mr-16 -mt-16" />
          <h2 className="text-3xl font-black tracking-tight mb-4 relative z-10">Don&apos;t see your alignment?</h2>
          <p className="text-slate-400 max-w-[500px] mx-auto text-sm leading-relaxed mb-8 relative z-10">
            We are always seeking hyper-collaborative builders, specialized system engineers, and graphic storytellers. Drop us an open application.
          </p>
          <Link
            href="/contact?role=general"
            className="bg-white text-slate-950 hover:bg-[#1161ed] hover:text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all shadow-md inline-block relative z-10 active:scale-95 duration-200"
          >
            Submit Open Application
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
