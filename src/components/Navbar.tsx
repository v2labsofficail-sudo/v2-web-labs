"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

// --- Icons (Clean, Professional SVG elements) ---
const Icons = {
  Home: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  About: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 21m-5.08-1.214a9.3 9.3 0 013.478-3.99 7 7 0 1113.13 0c-.08.68-.08 1.364 0 2.05m-13.13 0c.287.05.576.088.867.113m11.396-.113a11.5 11.5 0 01-11.396 0" />
    </svg>
  ),
  Work: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0a9.003 9.003 0 00-16.5 0m16.5 0c0-.18-.009-.36-.027-.539M3.75 14.15c0-.18.017-.36.053-.539m16.42 0a4.5 4.5 0 00-16.42 0m16.42 0c-.173-.832-.72-1.542-1.479-1.954M3.75 13.61c.173-.832.72-1.542 1.479-1.954m11.182 0A9.003 9.003 0 0012 3.75c-1.729 0-3.3.487-4.629 1.332m11.182 0a4.5 4.5 0 01-1.479 1.954M7.371 7.036a4.5 4.5 0 00-1.479 1.954M12 10.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  ),
  Careers: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 019.89 5.84 50.58 50.58 0 00-2.658.813m-11.133.014v3.3a9 9 0 005.4 8.194l.4.194.4-.194a9 9 0 005.4-8.194v-3.3" />
    </svg>
  ),
  Contact: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
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
    <header className="sticky top-0 left-0 w-full h-20 bg-white border-b border-slate-100 z-[1000] flex items-center select-none">
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group active:scale-[0.98] transition-transform">
          <Logo showTagline={true} dark={false} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-[901px]:flex items-center gap-1">
          <Link 
            href="/" 
            className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold transition-all ${
              pathname === "/" 
                ? "text-[#1161ed] bg-[#1161ed]/[0.06]" 
                : "text-slate-600 hover:text-[#1161ed] hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold transition-all ${
              pathname === "/about" 
                ? "text-[#1161ed] bg-[#1161ed]/[0.06]" 
                : "text-slate-600 hover:text-[#1161ed] hover:bg-slate-50"
            }`}
          >
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group py-4 px-2">
            <button className="flex items-center gap-1 text-slate-600 group-hover:text-[#1161ed] font-bold text-[0.94rem] transition-all cursor-pointer py-1.5 px-2 rounded-xl group-hover:bg-slate-50">
              Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#1161ed]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mega-Dropdown Overlay Menu (Opaque Solid White Background) */}
            <div className="invisible opacity-0 absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[780px] grid grid-cols-12 gap-5 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 transition-all duration-300 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1.5 z-50">
              
              {/* Left Column grid - Services */}
              <div className="col-span-8 grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <Link 
                    key={s.href} 
                    href={s.href} 
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100/50 group/item"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#1161ed]/[0.06] text-[#1161ed] flex items-center justify-center shrink-0 group-hover/item:bg-[#1161ed] group-hover/item:text-white transition-all duration-300">
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-slate-900 font-extrabold text-[0.82rem] leading-none mb-1 group-hover/item:text-[#1161ed] transition-colors">{s.name}</div>
                      <div className="text-slate-500 text-[0.72rem] leading-snug font-semibold">{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right Column - Promo Card */}
              <div className="col-span-4 bg-slate-50/70 rounded-xl p-4 border border-slate-100/80 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <span className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] font-extrabold text-[0.6rem] uppercase tracking-wider px-2 py-0.5 rounded-md mb-2.5">
                    Partner Program
                  </span>
                  <h4 className="text-slate-900 font-extrabold text-[0.88rem] tracking-tight leading-snug mb-1">
                    Ready to Scale Up?
                  </h4>
                  <p className="text-slate-500 text-[0.7rem] leading-relaxed font-semibold">
                    We engineer premium custom products with lightning-fast delivery.
                  </p>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1 text-[0.74rem] font-black text-[#1161ed] hover:text-[#0c4ec3] transition-colors group/promo mt-4 select-none"
                >
                  <span>Build with V2 Labs</span>
                  <svg className="w-3.5 h-3.5 transform group-hover/promo:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/work" 
            className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold transition-all ${
              pathname === "/work" 
                ? "text-[#1161ed] bg-[#1161ed]/[0.06]" 
                : "text-slate-600 hover:text-[#1161ed] hover:bg-slate-50"
            }`}
          >
            Work
          </Link>

          <Link 
            href="/careers" 
            className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold transition-all ${
              pathname === "/careers" 
                ? "text-[#1161ed] bg-[#1161ed]/[0.06]" 
                : "text-slate-600 hover:text-[#1161ed] hover:bg-slate-50"
            }`}
          >
            Careers
          </Link>

          <Link 
            href="/contact" 
            className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold transition-all ${
              pathname === "/contact" 
                ? "text-[#1161ed] bg-[#1161ed]/[0.06]" 
                : "text-slate-600 hover:text-[#1161ed] hover:bg-slate-50"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden min-[901px]:block">
          <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-[#1161ed] hover:shadow-[0_8px_24px_rgba(17,97,237,0.22)] transition-all active:scale-95 duration-200">
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle Burger Icon (Smooth morphing transitions to cross) */}
        <button 
          className="min-[901px]:hidden p-2 text-slate-800 cursor-pointer select-none transition-all active:scale-95" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative overflow-hidden">
            <span className={`w-full h-[2.5px] bg-current rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`w-full h-[2.5px] bg-current rounded transition-all duration-300 ${isMenuOpen ? "-translate-x-full opacity-0" : ""}`} />
            <span className={`w-full h-[2.5px] bg-current rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>

        {/* Mobile Full-screen Overlay Backdrop */}
        <div 
          className={`fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-[1050] transition-all duration-500 min-[901px]:hidden ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Responsive Drawer (Slides in from Left edge) */}
        <aside 
          className={`fixed top-0 left-0 w-full max-w-[340px] h-screen bg-white z-[1100] border-r border-slate-100 shadow-[0_0_50px_rgba(0,0,0,0.06)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-[901px]:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
            
            {/* Header branding in mobile menu overlay */}
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Logo showTagline={false} dark={false} className="h-10" />
              </Link>
              
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 hover:text-slate-950 active:scale-95 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* General Navigation Links inside Left Drawer */}
            <div className="flex flex-col gap-1.5 mb-6">
              <p className="text-[#1161ed] font-extrabold text-[0.66rem] uppercase tracking-widest mb-3 px-1">Navigation</p>
              {[
                { name: "Home", href: "/", icon: <Icons.Home /> },
                { name: "About", href: "/about", icon: <Icons.About /> },
                { name: "Work", href: "/work", icon: <Icons.Work /> },
                { name: "Careers", href: "/careers", icon: <Icons.Careers /> },
                { name: "Contact", href: "/contact", icon: <Icons.Contact /> },
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full flex items-center gap-3.5 py-3 px-4 rounded-xl font-bold border transition-all active:scale-[0.99] group ${
                      isActive
                        ? "bg-[#1161ed]/[0.06] border-[#1161ed]/15 text-[#1161ed]"
                        : "bg-slate-50/50 border-slate-100/50 text-slate-700 hover:bg-slate-50 hover:text-[#1161ed]"
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isActive ? "text-[#1161ed]" : "text-slate-400 group-hover:text-[#1161ed]"
                    }`}>
                      {item.icon}
                    </div>
                    <span className="flex-1 text-[0.9rem]">{item.name}</span>
                    <svg className={`w-3.5 h-3.5 shrink-0 transition-all ${
                      isActive ? "text-[#1161ed] translate-x-0.5" : "text-slate-300 group-hover:text-[#1161ed]"
                    }`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </div>

            {/* Collapsible Services Accordion inside Left Drawer */}
            <div className="border-t border-slate-100 pt-5 mb-6">
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center text-slate-400 font-extrabold text-[0.66rem] uppercase tracking-widest mb-3 px-1 cursor-pointer"
              >
                <span>Expertise ({services.length})</span>
                <svg className={`w-3.5 h-3.5 text-[#1161ed] transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isMobileServicesOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-2 pb-2">
                    {services.map((s) => (
                      <Link 
                        key={s.href} 
                        href={s.href} 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#1161ed]/5 hover:border-[#1161ed]/15 active:scale-[0.99] transition-all group"
                      >
                        <div className="w-9 h-9 bg-white border border-slate-100 text-slate-400 group-hover:text-[#1161ed] rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-sm">
                          {s.icon}
                        </div>
                        <div className="flex-1">
                          <span className="block text-[0.84rem] font-extrabold text-slate-800 group-hover:text-[#1161ed] transition-colors mb-0.5">{s.name}</span>
                          <span className="block text-[0.72rem] text-slate-400 leading-snug font-semibold">{s.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Call To Action inside Left Drawer */}
            <div className="border-t border-slate-100 pt-5 pb-2 mt-auto">
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-[#1161ed] hover:bg-[#0c4ec3] text-white text-center py-3.5 rounded-xl font-extrabold text-[0.92rem] shadow-[0_4px_15px_rgba(17,97,237,0.12)] active:scale-[0.99] transition-all"
              >
                Let&apos;s Build Together
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}