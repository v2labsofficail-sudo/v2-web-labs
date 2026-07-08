"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AlternatingText from "@/components/AlternatingText";
import ScrollReveal from "@/components/ScrollReveal";
import { pricingCategories } from "@/lib/site-data";
import {
  Globe,
  ShoppingCart,
  Database,
  Check,
  ArrowRight,
  Star,
  Zap,
  Smartphone,
  ShieldCheck,
  PenTool,
  FileText,
  Image as ImageIcon,
  Play,
  Users,
  TrendingUp,
  CreditCard,
  Box,
  Truck,
  BarChart,
  UserCheck,
  Cpu,
  Sparkles,
} from "lucide-react";

// Dynamic content for categories matching the user's mockups
const categoryMetadata: Record<
  string,
  {
    tag: string;
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    trustItems: { label: string; sub: string; icon: React.ComponentType<{ className?: string }> }[];
  }
> = {
  "web-development": {
    tag: "Website Development",
    title: "Choose the Right Website for Your Business",
    subtitle: "Modern Websites That Build Trust & Generate Leads",
    ctaTitle: "Ready to Launch Your Business Online?",
    ctaSubtitle: "Let's build a modern, fast and high-converting website for your business.",
    ctaButton: "Book Free Consultation",
    trustItems: [
      { label: "Trusted by", sub: "Growing Businesses", icon: Star },
      { label: "Fast", sub: "Delivery", icon: Zap },
      { label: "100% Mobile", sub: "Responsive", icon: Smartphone },
      { label: "Secure &", sub: "Reliable", icon: ShieldCheck },
    ],
  },
  branding: {
    tag: "O to Hero Branding Package",
    title: "From 0 to Hero. We Build Your Brand, You Build Your Empire.",
    subtitle: "Everything your new startup needs to launch, grow & stand out.",
    ctaTitle: "Your Startup. Our Strategy. Unlimited Possibilities.",
    ctaSubtitle: "From scratch to success, we are with you at every step of your journey.",
    ctaButton: "Start Your Brand Journey",
    trustItems: [
      { label: "Brand Logo", sub: "& Identity", icon: PenTool },
      { label: "Business", sub: "Stationery", icon: FileText },
      { label: "Social Media", sub: "Designs", icon: ImageIcon },
      { label: "Promo", sub: "Videos", icon: Play },
      { label: "Website", sub: "Design", icon: Globe },
      { label: "Social Media", sub: "Management", icon: Users },
      { label: "Growth", sub: "Strategy", icon: TrendingUp },
    ],
  },
  ecommerce: {
    tag: "E-Commerce Development",
    title: "Launch Your Online Store Like a Premium Brand",
    subtitle: "Sell More. Manage Easily. Grow Faster.",
    ctaTitle: "Ready to Start Selling Online?",
    ctaSubtitle: "We build powerful e-commerce stores that help you grow your brand and increase sales.",
    ctaButton: "Build My Store",
    trustItems: [
      { label: "Secure", sub: "Online Store", icon: ShieldCheck },
      { label: "Online", sub: "Payments", icon: CreditCard },
      { label: "Inventory", sub: "Management", icon: Box },
      { label: "Fast Order", sub: "Processing", icon: Truck },
    ],
  },
  "erp-crm": {
    tag: "ERP & CRM Solutions",
    title: "Smart Business Management Starts Here",
    subtitle: "Automate Operations • Manage Customers • Grow Faster",
    ctaTitle: "Transform Your Business with Smart ERP & CRM",
    ctaSubtitle: "Let's build a smarter future for your business operations.",
    ctaButton: "Book Free Demo",
    trustItems: [
      { label: "Business", sub: "Analytics", icon: BarChart },
      { label: "Customer", sub: "Management", icon: UserCheck },
      { label: "Inventory", sub: "Operations", icon: Box },
      { label: "Workflow", sub: "Automation", icon: Cpu },
    ],
  },
};

export default function PlansClient({ activeTab }: { activeTab: string }) {
  const currentMeta = categoryMetadata[activeTab] || categoryMetadata["web-development"];
  const [activePlanIdx, setActivePlanIdx] = useState(1);

  // Track active card on mobile horizontal scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    // Calculate total scroll range and map scroll position to index
    const maxScrollLeft = scrollWidth - clientWidth;
    if (maxScrollLeft <= 0) return;
    const newIndex = Math.round((scrollLeft / maxScrollLeft) * 2);
    if (newIndex >= 0 && newIndex <= 2) {
      setActivePlanIdx(newIndex);
    }
  };

  // Scroll mobile carousel programmatically when dot indicator is clicked
  const scrollToCard = (idx: number) => {
    const el = document.getElementById(`card-${activeTab}-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActivePlanIdx(idx);
    }
  };

  useEffect(() => {
    setActivePlanIdx(1);

    // Automatically center the "Popular" plan on mobile viewports on tab switch
    const timer = setTimeout(() => {
      const el = document.getElementById(`card-${activeTab}-1`);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-slate-900 pb-20 pt-28">
      {/* Top Banner Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0055DA]/[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2A2A2A]/[0.01] rounded-full blur-[80px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0055DA]/10 text-[#0055DA] rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {currentMeta.tag}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-slate-950 tracking-tight leading-[1.1] mb-6 font-Outfit">
              {currentMeta.title}
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-bold font-Outfit mb-8">
              {currentMeta.subtitle}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#tiers-section"
                className="px-6 py-3 bg-[#0055DA] hover:bg-[#0044B3] text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-[#0055DA]/15 cursor-pointer uppercase tracking-wider"
              >
                View Plans
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 hover:text-[#0055DA] hover:border-[#0055DA]/20 rounded-xl font-bold text-sm transition-all shadow-sm cursor-pointer uppercase tracking-wider"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-slate-100/50 border border-slate-200/60 p-6 shadow-sm overflow-hidden flex items-center justify-center">
              <div className="absolute -inset-2 bg-[radial-gradient(circle_at_center,rgba(0,85,218,0.04)_0%,transparent_70%)] pointer-events-none" />

              {/* Dynamic Mockup Graphic */}
              {activeTab === "web-development" && (
                <div className="w-full h-full flex flex-col justify-between relative z-10 animate-fadeIn">
                  <div className="w-full bg-white rounded-xl border border-slate-200/80 shadow-sm p-3 flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="h-4 bg-slate-100 rounded-md flex-1 ml-4" />
                  </div>
                  <div className="flex-1 flex gap-4 mt-4 overflow-hidden">
                    <div className="flex-1 bg-white rounded-2xl border border-slate-200/60 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="h-4 w-2/3 bg-slate-100 rounded-md" />
                        <div className="h-3 w-full bg-slate-100/60 rounded-md" />
                        <div className="h-3 w-4/5 bg-slate-100/60 rounded-md" />
                      </div>
                      <div className="h-8 bg-[#0055DA]/10 rounded-xl w-full" />
                    </div>
                    <div className="w-24 bg-white rounded-2xl border border-slate-200/60 p-3 shadow-sm flex flex-col gap-3 items-center shrink-0">
                      <div className="w-8 h-8 rounded-full bg-slate-100" />
                      <div className="w-8 h-8 rounded-full bg-slate-100" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "branding" && (
                <div className="w-full h-full grid grid-cols-3 gap-3 relative z-10 animate-fadeIn">
                  <div className="bg-white rounded-2xl border border-slate-200/60 p-3 shadow-sm flex flex-col items-center justify-center gap-2">
                    <PenTool className="w-8 h-8 text-[#0055DA]" />
                    <span className="text-[10px] font-black text-slate-500 uppercase">Logo Art</span>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200/60 p-3 shadow-sm flex flex-col items-center justify-center gap-2">
                    <ImageIcon className="w-8 h-8 text-indigo-500" />
                    <span className="text-[10px] font-black text-slate-500 uppercase">Graphics</span>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200/60 p-3 shadow-sm flex flex-col items-center justify-center gap-2">
                    <Play className="w-8 h-8 text-rose-500" />
                    <span className="text-[10px] font-black text-slate-500 uppercase">Video</span>
                  </div>
                  <div className="col-span-3 bg-white rounded-2xl border border-slate-200/60 p-4 shadow-sm flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="h-3 bg-slate-100 rounded-md w-1/3" />
                      <div className="h-2 bg-slate-100/65 rounded-md w-full" />
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-sky-100" />
                      <div className="w-6 h-6 rounded-full bg-purple-100" />
                      <div className="w-6 h-6 rounded-full bg-rose-100" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ecommerce" && (
                <div className="w-full h-full flex flex-col gap-4 relative z-10 animate-fadeIn">
                  <div className="bg-white rounded-2xl border border-slate-200/60 p-4 shadow-sm flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0055DA]/10 flex items-center justify-center text-[#0055DA]">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-800 uppercase leading-none">Luxury Bag</p>
                        <p className="text-[10px] font-bold text-slate-400">₹9,999</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">Active</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-slate-200/60 p-4 shadow-sm flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="h-3.5 bg-slate-100 rounded-md w-2/3" />
                      <div className="h-2.5 bg-slate-100/70 rounded-md w-full" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-slate-100 rounded-xl flex-1" />
                      <div className="h-8 bg-[#0055DA] text-white rounded-xl px-4 flex items-center justify-center text-xs font-black">Pay</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "erp-crm" && (
                <div className="w-full h-full flex flex-col gap-4 relative z-10 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-4 shrink-0">
                    <div className="bg-white rounded-2xl border border-slate-200/60 p-4 shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase leading-none">Total Leads</span>
                        <p className="text-lg font-black text-slate-800 mt-1">2,458</p>
                      </div>
                      <span className="text-xs font-black text-green-500">+28.6%</span>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200/60 p-4 shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase leading-none">Conversions</span>
                        <p className="text-lg font-black text-slate-800 mt-1">368</p>
                      </div>
                      <span className="text-xs font-black text-[#0055DA]">+12.4%</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-slate-200/60 p-4 shadow-sm flex flex-col justify-between">
                    <div className="h-3 bg-slate-100 rounded-md w-1/4 mb-4" />
                    <div className="flex-1 flex items-end gap-1.5 h-16 pt-2">
                      <div className="h-6 w-full bg-slate-100 rounded-md" />
                      <div className="h-10 w-full bg-slate-100 rounded-md" />
                      <div className="h-8 w-full bg-slate-100 rounded-md" />
                      <div className="h-14 w-full bg-[#0055DA]/20 rounded-md" />
                      <div className="h-16 w-full bg-[#0055DA] rounded-md" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Selector Navigation */}
      <section className="max-w-6xl mx-auto px-6 mb-16 relative z-20">
        <div className="flex justify-center">
          <div className="flex flex-wrap md:flex-nowrap p-1.5 bg-white rounded-2xl border border-slate-200/80 shadow-sm max-w-3xl justify-center gap-1.5">
            {pricingCategories.map((category) => {
              const isActive = activeTab === category.id;
              const TabIcon =
                category.id === "web-development"
                  ? Globe
                  : category.id === "branding"
                  ? PenTool
                  : category.id === "ecommerce"
                  ? ShoppingCart
                  : Database;

              return (
                <Link
                  key={category.id}
                  href={`/plans/${category.id}`}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0055DA] text-white shadow-[0_6px_25px_rgba(0,85,218,0.2)] border border-[#0055DA]/10 scale-[1.02]"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <TabIcon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Description Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 animate-fadeIn">
        <h2 className="text-2xl font-black text-slate-900 mb-2 font-Outfit">
          Explore Our {currentMeta.tag} Plans
        </h2>
        <p className="text-slate-500 text-sm font-semibold max-w-xl mx-auto">
          {pricingCategories.find((c) => c.id === activeTab)?.description}
        </p>
      </section>

      {/* Tiers Plans Cards Grid */}
      <section id="tiers-section" className="max-w-6xl mx-auto px-6 mb-24 relative z-10 scroll-mt-24">
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
                  const isCustom = plan.price.toLowerCase().includes("custom");

                  return (
                    <div
                      key={plan.name}
                      id={`card-${category.id}-${idx}`}
                      className={`snap-center snap-always shrink-0 w-[85vw] sm:w-[350px] md:w-auto relative rounded-3xl border p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 select-none bg-white ${
                        isPopular
                          ? "border-[#0055DA] shadow-[0_20px_50px_rgba(0,85,218,0.07)] scale-[1.03] md:-translate-y-1.5 z-10"
                          : "border-slate-200/70 shadow-[0_8px_30px_rgba(15,23,42,0.01)] hover:border-[#0055DA]/20 hover:shadow-[0_20px_40px_rgba(0,85,218,0.03)]"
                      }`}
                    >
                      {isPopular && (
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#0055DA] to-[#0044B3] text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-[0_4px_12px_rgba(0,85,218,0.25)] border border-[#0055DA]/10">
                          Most Popular
                        </span>
                      )}

                      <div className="flex-1">
                        {/* Title & Description */}
                        <div className="mb-6">
                          <h3 className="text-xl font-black tracking-tight text-[#0F172A] mb-2.5 font-Outfit">
                            {plan.name}
                          </h3>
                          <p className="text-slate-500 text-xs font-semibold leading-relaxed mb-5 min-h-[40px]">
                            {plan.description}
                          </p>

                          {/* Price Tag */}
                          <div className="flex items-baseline mb-2">
                            <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-Outfit">
                              {plan.price}
                            </span>
                            {!isCustom && (
                              <span className="text-slate-400 text-[10px] font-extrabold ml-1.5 uppercase tracking-wider">
                                One-Time
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-slate-100 mb-6" />

                        {/* Plan features checkmarks */}
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <div
                                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                                  isPopular
                                    ? "bg-[#0055DA]/10 text-[#0055DA]"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                <Check className="w-3.5 h-3.5" strokeWidth={3.5} />
                              </div>
                              <span className="text-slate-600 text-xs font-semibold leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Book/Call to Action */}
                      <Link
                        href={`/contact?subject=${encodeURIComponent(plan.contactSubject)}&message=${encodeURIComponent(
                          `Hi V2Labs Team, I am interested in the ${plan.name} under ${category.name} (${plan.price}). I'd love to learn more and discuss our roadmap.`
                        )}`}
                        className={`w-full text-center py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-sm ${
                          isPopular
                            ? "bg-[#0055DA] hover:bg-[#0044B3] text-white hover:shadow-[0_10px_25px_rgba(0,85,218,0.25)]"
                            : "bg-slate-100 hover:bg-[#0055DA] text-slate-800 hover:text-white border border-slate-200/50 hover:border-[#0055DA]/10"
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

      {/* Trust Badges Bar */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10 select-none">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/60 px-8 py-6 shadow-[0_8px_30px_rgba(15,23,42,0.01)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {currentMeta.trustItems.map((item, index) => {
              const TrustIcon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center gap-3.5 p-3 md:p-0 ${
                    index > 0 ? "pt-6 md:pt-0" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center text-[#0055DA]">
                    <TrustIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left leading-none">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                      {item.label}
                    </span>
                    <p className="text-xs font-black text-slate-850 mt-1 uppercase tracking-wider font-Outfit">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action bottom card */}
      <section className="max-w-6xl mx-auto px-6 relative z-10 select-none">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,85,218,0.15)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0055DA]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3 font-Outfit leading-tight">
                {currentMeta.ctaTitle}
              </h2>
              <p className="text-slate-400 text-sm font-semibold mb-2">
                {currentMeta.ctaSubtitle}
              </p>
              <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mt-4">
                Official: www.v2labsglobal.com
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0055DA] hover:bg-[#0044B3] text-white rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-[#0055DA]/20 hover:scale-[1.02]"
              >
                {currentMeta.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
