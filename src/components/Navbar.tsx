"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Icons (Clean, Professional SVG elements) ---
const Icons = {
  Web: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  Video: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  ),
  Design: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Database: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="21" y1="9" x2="3" y2="9" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  ),
  UiUx: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
    </svg>
  ),
  Ecom: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72" />
    </svg>
  ),
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const services = [
    { 
      name: "SaaS & Product Development", 
      desc: "High-scale multi-tenant dashboards & tools", 
      href: "/services/saas-product", 
      icon: <Icons.Ecom /> 
    },
    { 
      name: "ERP & CRM Systems", 
      desc: "Secure operational databases & sync grids", 
      href: "/services/erp-crm", 
      icon: <Icons.Database /> 
    },
    { 
      name: "AI Automation Solutions", 
      desc: "Autonomous workflow agents & LLM pipelines", 
      href: "/services/ai-automation", 
      icon: <Icons.UiUx /> 
    },
    { 
      name: "Web Platform Development", 
      desc: "Sub-second static & dynamic React platforms", 
      href: "/services/web-platform", 
      icon: <Icons.Web /> 
    },
    { 
      name: "Video Editing & Motion Editing", 
      desc: "Cinematic, high-retention post-production Cuts", 
      href: "/services/video-motion", 
      icon: <Icons.Video /> 
    },
    { 
      name: "UI/UX & Brand Systems", 
      desc: "Atomic Figma components & spacing guidelines", 
      href: "/services/ui-ux-brand", 
      icon: <Icons.Design /> 
    },
  ];

  return (
    <header className="sticky top-0 left-0 w-full h-[72px] bg-white/80 backdrop-blur-xl border-b border-slate-100 z-[1000] flex items-center select-none">
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <div className="w-9 h-9 bg-[#1161ed] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6 shadow-[0_4px_12px_rgba(17,97,237,0.22)]">
            <svg width="20" height="20" viewBox="0 0 45 40" fill="none">
              <path d="M5 5H18L26.5 22L35 5H40L29 27L22.5 40L5 5Z" fill="white" />
            </svg>
          </div>
          <span className="text-slate-900 font-black text-xl ml-3 tracking-tight">V2 Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-[901px]:flex items-center gap-1.5">
          <Link 
            href="/" 
            className={`px-4 py-2 rounded-lg text-[0.92rem] font-bold transition-all ${
              pathname === "/" ? "text-[#1161ed] bg-[#1161ed]/[0.06]" : "text-slate-600 hover:text-[#1161ed]"
            }`}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            className={`px-4 py-2 rounded-lg text-[0.92rem] font-bold transition-all ${
              pathname === "/about" ? "text-[#1161ed] bg-[#1161ed]/[0.06]" : "text-slate-600 hover:text-[#1161ed]"
            }`}
          >
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group py-5 px-3">
            <button className="flex items-center gap-1 text-slate-600 group-hover:text-[#1161ed] font-bold text-[0.92rem] transition-all cursor-pointer">
              Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mega-Dropdown Overlay Menu */}
            <div className="invisible opacity-0 absolute top-full left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md min-w-[620px] grid grid-cols-2 gap-2.5 rounded-2xl p-5 shadow-[0_25px_60px_rgba(17,97,237,0.12)] border border-[#1161ed]/10 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 z-50">
              {services.map((s) => (
                <Link 
                  key={s.href} 
                  href={s.href} 
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50/80 hover:border-[#1161ed]/10 border border-transparent transition-all group/item"
                >
                  <div className="mt-1 text-slate-400 group-hover/item:text-[#1161ed] transition-colors shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-slate-900 font-extrabold text-[0.85rem] leading-none mb-1.5 group-hover/item:text-[#1161ed] transition-colors">{s.name}</div>
                    <div className="text-slate-500 text-[0.74rem] leading-snug">{s.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/work" 
            className={`px-4 py-2 rounded-lg text-[0.92rem] font-bold transition-all ${
              pathname === "/work" ? "text-[#1161ed] bg-[#1161ed]/[0.06]" : "text-slate-600 hover:text-[#1161ed]"
            }`}
          >
            Work
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden min-[901px]:block">
          <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#1161ed] hover:shadow-[0_8px_24px_rgba(17,97,237,0.28)] transition-all active:scale-95 duration-200">
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle Burger Icon */}
        <button 
          className="min-[901px]:hidden p-2 text-slate-900 cursor-pointer" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-[2.5px] bg-current rounded transition-all ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`w-full h-[2.5px] bg-current rounded transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-[2.5px] bg-current rounded transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>

        {/* Mobile Responsive Accordion Sidebar */}
        <aside className={`fixed top-0 left-0 w-full h-screen bg-white z-[1100] transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
            
            {/* Header branding in mobile menu overlay */}
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <Link href="/" className="flex items-center group">
                <div className="w-8 h-8 bg-[#1161ed] rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 45 40" fill="none">
                    <path d="M5 5H18L26.5 22L35 5H40L29 27L22.5 40L5 5Z" fill="white" />
                  </svg>
                </div>
                <span className="text-slate-900 font-black text-lg ml-2.5 tracking-tight">V2 Labs</span>
              </Link>
              
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* General Navigation */}
            <div className="mb-6">
              <p className="text-[#1161ed] font-extrabold text-[0.7rem] uppercase tracking-widest mb-4">Navigation</p>
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-2xl font-black text-slate-900 hover:text-[#1161ed] transition-colors">Home</Link>
                <Link href="/about" className="text-2xl font-black text-slate-900 hover:text-[#1161ed] transition-colors">About</Link>
                <Link href="/work" className="text-2xl font-black text-slate-900 hover:text-[#1161ed] transition-colors">Work</Link>
              </div>
            </div>

            {/* Collapsible Services Accordion */}
            <div className="mb-10">
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center text-slate-400 font-extrabold text-[0.7rem] uppercase tracking-widest mb-4 border-b border-transparent pb-1 cursor-pointer"
              >
                <span>Expertise ({services.length})</span>
                <svg className={`w-3.5 h-3.5 text-[#1161ed] transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`grid gap-3.5 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-3.5 group p-2 rounded-xl hover:bg-slate-50/80 transition-all">
                    <div className="w-9 h-9 bg-[#1161ed]/5 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-[#1161ed] group-hover:bg-[#1161ed]/10 transition-colors shrink-0">
                      {s.icon}
                    </div>
                    <span className="text-base font-bold text-slate-700 group-hover:text-[#1161ed] transition-colors">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Sidebar CTA */}
            <div className="mt-auto pb-6">
              <Link href="/contact" className="block w-full bg-[#1161ed] hover:bg-[#0c4ec3] text-white text-center py-4 rounded-xl font-extrabold text-base shadow-[0_4px_15px_rgba(17,97,237,0.15)] active:scale-95 transition-all">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}