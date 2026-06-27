"use client";

import { useState, useEffect } from "react";
import AlternatingText from "@/components/AlternatingText";
import Link from "next/link";
import { serviceItems, pricingCategories } from "@/lib/site-data";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Globe, 
  Cpu, 
  Palette, 
  Database, 
  Layers, 
  Video, 
  Target,
  ArrowRight,
  Sparkles,
  Check,
  ShoppingCart,
  PenTool
} from "lucide-react";

// Mapping of service slugs to professional Lucide icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "web-platform": Globe,
  "ai-automation": Cpu,
  "ui-ux-brand": Palette,
  "erp-crm": Database,
  "saas-product": Layers,
  "video-motion": Video,
  "digital-marketing": Target,
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("web-development");
  const [activePlanIdx, setActivePlanIdx] = useState(1);

  // Track active card on mobile horizontal scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScrollLeft = scrollWidth - clientWidth;
    if (maxScrollLeft <= 0) return;
    const newIndex = Math.round((scrollLeft / maxScrollLeft) * 2);
    if (newIndex >= 0 && newIndex <= 2) {
      setActivePlanIdx(newIndex);
    }
  };

  // Scroll mobile carousel programmatically when dot indicator is clicked
  const scrollToCard = (idx: number) => {
    const el = document.getElementById(`service-card-${activeTab}-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActivePlanIdx(idx);
    }
  };

  useEffect(() => {
    setActivePlanIdx(1);
    
    // Automatically center the "Popular" plan on mobile viewports on tab switch
    setTimeout(() => {
      const el = document.getElementById(`service-card-${activeTab}-1`);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
      }
    }, 100);
  }, [activeTab]);


  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0055DA] mb-4">
            Service Hub
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl text-slate-950">
            Growth services built for product teams that need <AlternatingText>speed, clarity, and revenue impact.</AlternatingText>
          </h1>
          <p className="mt-6 max-w-3xl text-slate-700 text-base sm:text-lg leading-8 font-medium">
            V2Labs Global helps companies launch and scale with search-friendly websites,
            AI systems, branding, ERP CRM platforms, SaaS products, and digital marketing.
            Use this page as the central SEO hub for every core capability.
          </p>
        </section>
      </ScrollReveal>

      {/* Services Grid Section */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((service) => {
              const IconComponent = iconMap[service.slug] || Sparkles;

              return (
                <article
                  key={service.slug}
                  className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_55px_rgba(0,85,218,0.08)] hover:border-[#0055DA]/20 group relative overflow-hidden flex flex-col justify-between min-h-[320px] gpu-accelerated"
                >
                  {/* Hover Effects */}
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0055DA] to-[#0044B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(0,85,218,0.03)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Badge and Title */}
                      <div className="flex items-center gap-2.5 mb-3.5">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#0055DA]/10 group-hover:text-[#0055DA] transition-colors duration-300 shadow-sm border border-slate-200/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 group-hover:text-[#0055DA] transition-colors duration-300">
                          {service.navLabel}
                        </span>
                      </div>

                      <h2 className="text-2xl font-black tracking-tight text-slate-900 mb-3.5 font-poppins group-hover:text-slate-950 transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-slate-600 leading-relaxed text-sm font-semibold mb-5">
                        {service.summary}
                      </p>
                    </div>

                    {/* Highlight Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-extrabold bg-slate-100 text-slate-600 rounded-lg group-hover:bg-[#0055DA]/5 group-hover:text-[#0055DA] transition-colors duration-300 border border-slate-200/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="relative z-10 pt-5 border-t border-slate-100 flex items-center justify-between shrink-0">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-black text-slate-900 group-hover:text-[#0055DA] transition-colors"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href={`/blog/category/${service.blogCategory}`}
                      className="text-xs font-extrabold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      Insights
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* Interactive Plans Section */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pb-32 border-t border-slate-100 pt-24">
          <div className="text-center mb-16">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0055DA] mb-4">
              Flexible Packages
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-slate-950 mb-6">
              Transparent plans tailored for <AlternatingText>your scale.</AlternatingText>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-base font-semibold">
              Select a category below to explore our standardized solution tiers. Every plan is fully custom-extensible to meet your specific roadmap needs.
            </p>
          </div>

          {/* Interactive Categories Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200/50 shadow-inner">
              {pricingCategories.map((category) => {
                const isActive = activeTab === category.id;
                const TabIcon = category.id === "web-development" ? Globe : 
                                category.id === "branding" ? PenTool :
                                category.id === "ecommerce" ? ShoppingCart : Database;

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-white text-[#0055DA] shadow-[0_4px_20px_rgba(0,85,218,0.08)] border border-slate-200/20 scale-[1.02]"
                        : "text-slate-500 hover:text-slate-900 hover:bg-white/40 cursor-pointer"
                    }`}
                  >
                    <TabIcon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Description */}
          <div className="text-center mb-12 animate-fadeIn">
            {pricingCategories.map((category) => {
              if (category.id !== activeTab) return null;
              return (
                <div key={category.id}>
                  <p className="text-slate-600 text-sm font-extrabold uppercase tracking-widest mb-1">
                    {category.name} Solutions
                  </p>
                  <p className="text-slate-500 text-sm font-semibold max-w-xl mx-auto">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tiers Grid */}
          {pricingCategories.map((category) => {
            if (category.id !== activeTab) return null;

            return (
              <div key={category.id} className="relative">
                <div
                  onScroll={handleScroll}
                  className="flex md:grid gap-8 md:grid-cols-3 items-stretch max-w-5xl mx-auto overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth no-scrollbar pb-8 md:pb-0 px-4 md:px-0"
                >
                  {category.plans.map((plan, idx) => {
                    const isPopular = plan.popular;
                    return (
                      <div
                        key={plan.name}
                        id={`service-card-${category.id}-${idx}`}
                        className={`snap-center snap-always shrink-0 w-[85vw] sm:w-[350px] md:w-auto relative rounded-3xl border p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 select-none bg-white ${
                          isPopular
                            ? "border-[#0055DA] shadow-[0_20px_50px_rgba(0,85,218,0.08)] scale-[1.03] md:-translate-y-1.5 z-10"
                            : "border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.01)] hover:border-[#0055DA]/20 hover:shadow-[0_20px_40px_rgba(0,85,218,0.04)]"
                        }`}
                      >
                        {isPopular && (
                          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#0055DA] to-[#0044B3] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_4px_12px_rgba(0,85,218,0.25)] border border-[#0055DA]/20">
                            Most Popular
                          </span>
                        )}

                        <div className="flex-1">
                          {/* Title and Price */}
                          <div className="mb-6">
                            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-2 font-Outfit">
                              {plan.name}
                            </h3>
                            <p className="text-slate-500 text-xs font-semibold leading-relaxed mb-4 min-h-[40px]">
                              {plan.description}
                            </p>
                            <div className="flex items-baseline">
                              <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                                {plan.price}
                              </span>
                              {plan.price.startsWith("$") && (
                                <span className="text-slate-400 text-xs font-bold ml-1.5 uppercase tracking-wider">
                                  / Project
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="h-px bg-slate-100 mb-6" />

                          {/* Features List */}
                          <ul className="space-y-4 mb-8">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                                  isPopular ? "bg-[#0055DA]/10 text-[#0055DA]" : "bg-slate-100 text-slate-600"
                                }`}>
                                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                                </div>
                                <span className="text-slate-600 text-xs font-semibold leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Call to action */}
                        <Link
                          href={`/contact?subject=${encodeURIComponent(plan.contactSubject)}&message=${encodeURIComponent(
                            `Hi V2Labs Team, I am interested in the ${plan.name} under ${category.name} (${plan.price}). I'd love to learn more and discuss our roadmap.`
                          )}`}
                          className={`w-full text-center py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-sm ${
                            isPopular
                              ? "bg-[#0055DA] hover:bg-[#0044B3] text-white hover:shadow-[0_10px_25px_rgba(0,85,218,0.25)]"
                              : "bg-slate-100 text-slate-800 hover:bg-[#0055DA] hover:text-white border border-slate-200/50 hover:border-[#0055DA]"
                          }`}
                        >
                          {plan.ctaText}
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                  {category.plans.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToCard(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activePlanIdx === idx ? "bg-[#0055DA] w-6" : "bg-slate-300"
                      }`}
                      aria-label={`Go to plan ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </ScrollReveal>
    </div>
  );
}
