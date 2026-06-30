"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { serviceItems } from "@/lib/site-data";

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
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 019.89 5.84 50.58 50.08 0 00-2.658.813m-11.133.014v3.3a9 9 0 005.4 8.194l.4.194.4-.194a9 9 0 005.4-8.194v-3.3" />
    </svg>
  ),
  Contact: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Plans: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Marketing: () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 9h16" />
      <circle cx="12" cy="14" r="3.5" />
      <path d="M12 10.5a5.4 5.4 0 0 0 0 7" />
      <path d="M8.7 14h6.6" />
    </svg>
  ),
  Website: () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <rect x="4" y="6" width="11" height="12" rx="1.5" />
      <rect x="9" y="3" width="11" height="12" rx="1.5" />
      <path d="M7 9h5" />
      <path d="M7 12h5" />
      <path d="M7 15h4" />
      <path d="M12 6h5" />
      <path d="M12 9h5" />
    </svg>
  ),
  Social: () => (
    <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#1DA1F2" />
      <path d="M34.6 17.2c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.5.9a4 4 0 0 0-6.9 2.7c0 .3 0 .6.1.9-3.3-.2-6.3-1.8-8.3-4.3-.4.6-.5 1.3-.5 2.1 0 1.4.7 2.7 1.9 3.4-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1 .1-.2 0-.5 0-.8-.1.5 1.7 2.1 2.9 4 2.9A8 8 0 0 1 16 30c-.4 0-.8 0-1.2-.1A11.3 11.3 0 0 0 21 31.7c7.4 0 11.4-6.4 11.4-12v-.6c.8-.5 1.5-1.2 2.2-1.9Z" fill="white" />
    </svg>
  ),
  VideoPlay: () => (
    <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="40" height="28" rx="6" fill="#4FC3F7" />
      <path d="M20 15.5c0-1.2 1.3-1.9 2.3-1.3l10.3 6.5c1 .6 1 2 0 2.6l-10.3 6.5c-1 .6-2.3-.1-2.3-1.3V15.5Z" fill="white" />
      <path d="M14 39h20" stroke="#4FC3F7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  Branding: () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M12 3 4 7l8 4 8-4-8-4Z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 17l8 4 8-4" />
    </svg>
  ),
  Erp: () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 10h16" />
      <path d="M10 4v16" />
    </svg>
  ),
  Saas: () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h10" />
      <path d="M7 13h7" />
      <path d="M7 17h4" />
    </svg>
  ),
  Automation: () => (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9A1.65 1.65 0 0 0 20.91 10H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  ),
};

const serviceMenuContent = {
  "digital-marketing": {
    name: "Digital Marketing",
    desc: "SEO & Ads Management",
    icon: <Icons.Marketing />,
    iconWrap: "text-slate-950",
  },
  "web-platform": {
    name: "Website Design",
    desc: "UI/UX & Development",
    icon: <Icons.Website />,
    iconWrap: "text-slate-950",
  },
  "ui-ux-brand": {
    name: "Social Media",
    desc: "Growth & Management",
    icon: <Icons.Social />,
    iconWrap: "",
  },
  "video-motion": {
    name: "Video Editing",
    desc: "Reels & Ads Production",
    icon: <Icons.VideoPlay />,
    iconWrap: "",
  },
  "erp-crm": {
    name: "ERP & CRM",
    desc: "Business Tools & Dashboards",
    icon: <Icons.Erp />,
    iconWrap: "text-slate-950",
  },
  "saas-product": {
    name: "SaaS Product",
    desc: "MVP & Platform Delivery",
    icon: <Icons.Saas />,
    iconWrap: "text-slate-950",
  },
  "ai-automation": {
    name: "AI Automation",
    desc: "Agents & Workflow Systems",
    icon: <Icons.Automation />,
    iconWrap: "text-slate-950",
  },
} as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuOpen(false);
      setIsMobileServicesOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const services = serviceItems.map((service) => {
    const menuContent = serviceMenuContent[service.slug as keyof typeof serviceMenuContent];

    return {
      ...service,
      name: menuContent?.name ?? service.navLabel,
      desc: menuContent?.desc ?? service.summary,
      icon: menuContent?.icon ?? <Icons.Branding />,
      iconWrap: menuContent?.iconWrap ?? "text-slate-950",
    };
  });

  return (
    <>
      <header className={`sticky top-0 left-0 w-full z-[1000] select-none transition-all duration-300 border-b ${
        isScrolled 
          ? "py-2 sm:py-3 px-4 sm:px-8 bg-white border-slate-200/50  shadow-[0_12px_40px_rgba(15,23,42,0.04)]" 
          : "py-3.5 sm:py-5 px-4 sm:px-8 bg-white border-slate-100/10 "
      }`}>
        <div className="flex justify-between items-center w-full max-w-[1240px] mx-auto">
          <Link 
            href="/" 
            className={`flex items-center group active:scale-[0.98] transition-all duration-300 ${
              isScrolled ? "scale-90 origin-left" : "scale-100"
            }`}
          >
            <Logo showTagline={true} dark={false} />
          </Link>

          <nav className="hidden min-[901px]:flex items-center gap-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold font-poppins transition-all duration-300 relative group overflow-hidden ${
                pathname === "/" 
                  ? "text-[#0055DA] bg-[#0055DA]/[0.04]" 
                  : "text-black hover:text-[#0055DA] hover:bg-white"
              }`}
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0055DA]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#0055DA] transition-all duration-300 ${
                pathname === "/" 
                  ? "scale-x-100 opacity-100 shadow-[0_0_8px_#0055DA]" 
                  : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-60"
              }`} />
            </Link>

            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold font-poppins transition-all duration-300 relative group overflow-hidden ${
                pathname === "/about" 
                  ? "text-[#0055DA] bg-[#0055DA]/[0.04]" 
                  : "text-black hover:text-[#0055DA] hover:bg-white"
              }`}
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0055DA]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#0055DA] transition-all duration-300 ${
                pathname === "/about" 
                  ? "scale-x-100 opacity-100 shadow-[0_0_8px_#0055DA]" 
                  : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-60"
              }`} />
            </Link>
            
            <div className="relative group py-4 px-2">
              <button className={`flex items-center gap-1.5 font-bold font-poppins text-[0.94rem] transition-all duration-300 cursor-pointer py-2 px-4 rounded-xl relative overflow-hidden ${
                pathname.startsWith("/services")
                  ? "text-[#0055DA] bg-[#0055DA]/[0.04]"
                  : "text-black group-hover:text-[#0055DA] group-hover:bg-white"
              }`}>
                <span className="relative z-10 flex items-center gap-1.5 font-poppins">
                  Solutions
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#0055DA]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#0055DA]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#0055DA] transition-all duration-300 ${
                  pathname.startsWith("/services")
                    ? "scale-x-100 opacity-100 shadow-[0_0_8px_#0055DA]"
                    : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-60"
                }`} />
              </button>
              
              <div className="invisible absolute top-full left-1/2 z-50 w-[820px] -translate-x-1/2 translate-y-3 rounded-[18px] border border-slate-100 bg-white px-10 py-9 opacity-0 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-x-14 gap-y-10 font-poppins">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group/item flex items-start gap-5 rounded-2xl"
                    >
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center ${s.iconWrap}`}>
                        {s.icon}
                      </div>
                      <div className="pt-1">
                        <div className="text-[0.98rem] font-extrabold leading-tight text-[#111111] transition-colors group-hover/item:text-[#0055DA]">
                          {s.name}
                        </div>
                        <div className="mt-0.5 text-[0.84rem] font-medium leading-snug text-[#6E7891]">
                          {s.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/work" 
              className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold font-poppins transition-all duration-300 relative group overflow-hidden ${
                pathname === "/work" 
                  ? "text-[#0055DA] bg-[#0055DA]/[0.04]" 
                  : "text-black hover:text-[#0055DA] hover:bg-white"
              }`}
            >
              <span className="relative z-10">Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0055DA]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#0055DA] transition-all duration-300 ${
                pathname === "/work" 
                  ? "scale-x-100 opacity-100 shadow-[0_0_8px_#0055DA]" 
                  : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-60"
              }`} />
            </Link>

            <Link 
              href="/plans" 
              className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold font-poppins transition-all duration-300 relative group overflow-hidden ${
                pathname === "/plans" 
                  ? "text-[#0055DA] bg-[#0055DA]/[0.04]" 
                  : "text-black hover:text-[#0055DA] hover:bg-white"
              }`}
            >
              <span className="relative z-10">Plans</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0055DA]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#0055DA] transition-all duration-300 ${
                pathname === "/plans" 
                  ? "scale-x-100 opacity-100 shadow-[0_0_8px_#0055DA]" 
                  : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-60"
              }`} />
            </Link>

            <Link 
              href="/careers" 
              className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold font-poppins transition-all duration-300 relative group overflow-hidden ${
                pathname === "/careers" 
                  ? "text-[#0055DA] bg-[#0055DA]/[0.04]" 
                  : "text-black hover:text-[#0055DA] hover:bg-white"
              }`}
            >
              <span className="relative z-10">Careers</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0055DA]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#0055DA] transition-all duration-300 ${
                pathname === "/careers" 
                  ? "scale-x-100 opacity-100 shadow-[0_0_8px_#0055DA]" 
                  : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-60"
              }`} />
            </Link>

            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-xl text-[0.94rem] font-bold font-poppins transition-all duration-300 relative group overflow-hidden ${
                pathname === "/contact" 
                  ? "text-[#0055DA] bg-[#0055DA]/[0.04]" 
                  : "text-black hover:text-[#0055DA] hover:bg-white"
              }`}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0055DA]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#0055DA] transition-all duration-300 ${
                pathname === "/contact" 
                  ? "scale-x-100 opacity-100 shadow-[0_0_8px_#0055DA]" 
                  : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-60"
              }`} />
            </Link>
          </nav>

          <div className="hidden min-[901px]:flex items-center gap-3">
            <Link 
              href="/request-a-demo" 
              className={`group relative inline-flex items-center gap-1.5 bg-white text-[#0055DA] border-2 border-[#0055DA] rounded-full font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(0, 85, 218,0.1)] hover:shadow-[0_8px_25px_rgba(0, 85, 218,0.25)] hover:bg-[#0055DA]/5 active:scale-95 overflow-hidden ${
                isScrolled ? "px-4 py-1.5 text-[0.66rem]" : "px-5 py-2 text-[0.72rem]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Demo
              </span>
            </Link>

            <Link 
              href="/contact" 
              className={`group relative inline-flex items-center gap-1.5 bg-slate-900 text-white rounded-full font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(15,23,42,0.15)] hover:shadow-[0_8px_25px_rgba(0, 85, 218,0.35)] active:scale-95 overflow-hidden ${
                isScrolled ? "px-4 py-2 text-[0.66rem]" : "px-5 py-2.5 text-[0.72rem]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Start a Project
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0055DA] to-[#0044B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <button 
            type="button"
            className="min-[901px]:hidden p-2 text-slate-800 cursor-pointer select-none transition-all active:scale-95 relative z-[1010] shrink-0" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative overflow-hidden">
              <span className={`w-full h-[2.5px] bg-current rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`w-full h-[2.5px] bg-current rounded transition-all duration-300 ${isMenuOpen ? "-translate-x-full opacity-0" : ""}`} />
              <span className={`w-full h-[2.5px] bg-current rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      <div 
        className={`fixed inset-0 bg-slate-950/20  z-[1050] transition-all duration-500 min-[901px]:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside 
        className={`fixed top-4 left-4 w-[calc(100%-2rem)] max-w-[340px] h-[calc(100vh-2rem)] bg-white  z-[1100] border border-slate-200/50 rounded-[24px] shadow-[10px_10px_40px_rgba(15,23,42,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-[901px]:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ 
          transform: isMenuOpen ? "translateX(0)" : "translateX(calc(-100% - 2rem))",
          visibility: isMenuOpen ? "visible" : "hidden"
        }}
      >
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Logo showTagline={false} dark={false} className="h-10" />
            </Link>
            
            <button 
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-500 hover:text-slate-950 active:scale-95 transition-all cursor-pointer"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-1.5 mb-6">
            <p className="text-[#0055DA] font-extrabold text-[0.66rem] uppercase tracking-widest mb-3 px-1">Navigation</p>
            {[
              { name: "Home", href: "/", icon: <Icons.Home /> },
              { name: "About", href: "/about", icon: <Icons.About /> },
              { name: "Work", href: "/work", icon: <Icons.Work /> },
              { name: "Plans", href: "/plans", icon: <Icons.Plans /> },
              { name: "Careers", href: "/careers", icon: <Icons.Careers /> },
              { name: "Contact", href: "/contact", icon: <Icons.Contact /> },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full flex items-center gap-3.5 py-3 px-4 rounded-xl font-bold font-poppins border transition-all duration-300 active:scale-[0.99] group relative overflow-hidden ${
                    isActive
                      ? "bg-[#0055DA]/[0.06] border-[#0055DA]/15 text-[#0055DA]"
                      : "bg-white border-slate-100/50 text-black hover:bg-[#0055DA]/5 hover:border-[#0055DA]/10 hover:text-[#0055DA]"
                  }`}
                >
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-[#0055DA] transition-all duration-300 ${
                    isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 group-hover:scale-y-75 group-hover:opacity-70"
                  }`} />
                  <div className={`p-1.5 rounded-lg shrink-0 transition-colors relative z-10 ${
                    isActive ? "text-[#0055DA]" : "text-slate-400 group-hover:text-[#0055DA]"
                  }`}>
                    {item.icon}
                  </div>
                  <span className="flex-1 text-[0.9rem] relative z-10">{item.name}</span>
                  <svg className={`w-3.5 h-3.5 shrink-0 transition-all relative z-10 ${
                    isActive ? "text-[#0055DA] translate-x-0.5" : "text-slate-300 group-hover:text-[#0055DA]"
                  }`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-slate-100 pt-5 mb-6">
            <button 
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex justify-between items-center text-slate-400 font-extrabold font-poppins text-[0.66rem] uppercase tracking-widest mb-3 px-1 cursor-pointer"
            >
              <span>Solutions ({services.length})</span>
              <svg className={`w-3.5 h-3.5 text-[#0055DA] transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
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
                  <Link 
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-between gap-3.5 p-3.5 rounded-xl bg-[#0055DA]/5 border border-[#0055DA]/10 hover:bg-[#0055DA]/10 active:scale-[0.99] transition-all group font-poppins"
                  >
                    <span className="text-[0.84rem] font-extrabold text-black">
                      Explore all solutions
                    </span>
                    <svg className="w-3.5 h-3.5 text-[#0055DA]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  {services.map((s) => (
                    <Link 
                      key={s.href} 
                      href={s.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-100 hover:bg-[#0055DA]/5 hover:border-[#0055DA]/15 active:scale-[0.99] transition-all group font-poppins"
                    >
                      <div className="w-9 h-9 bg-white border border-slate-100 text-slate-400 group-hover:text-[#0055DA] rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-sm">
                        {s.icon}
                      </div>
                      <div className="flex-1 font-poppins">
                        <span className="block text-[0.84rem] font-extrabold text-black group-hover:text-[#0055DA] transition-colors mb-0.5">{s.name}</span>
                        <span className="block text-[0.72rem] text-slate-400 leading-snug font-semibold">{s.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-5 pb-2 mt-auto">
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-[#0055DA] hover:bg-[#0044B3] text-white text-center py-3.5 rounded-xl font-extrabold text-[0.92rem] shadow-[0_4px_15px_rgba(0, 85, 218,0.12)] active:scale-[0.99] transition-all"
            >
              Let&apos;s Build Together
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
