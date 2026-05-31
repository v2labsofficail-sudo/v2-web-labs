import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020B1C] pt-20 pb-8 text-[#F8FAFC] border-t border-white/[0.04] relative overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#1161ed]/[0.02] rounded-full blur-[130px] pointer-events-none select-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#1161ed]/[0.015] rounded-full blur-[100px] pointer-events-none select-none -z-10 animate-pulse duration-[8s]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1.1fr_1.2fr_1.2fr] gap-10 pb-[60px] max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-3 mb-5 group">
            <Logo showTagline={true} dark={true} />
          </Link>
          <p className="text-[#94A3B8] text-[0.88rem] leading-relaxed mb-6 mt-2 max-w-[320px] font-medium font-Outfit">
            Engineering high-performance digital products. From custom web
            systems to scalable enterprise automations and designs.
          </p>
          <div className="flex gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/v2labsco/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white transition-all duration-300 hover:bg-[#1161ed] hover:border-[#1161ed] hover:-translate-y-1 shadow-sm"
              aria-label="LinkedIn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* X */}
            <a
              href="https://x.com/v2labsglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white transition-all duration-300 hover:bg-[#1161ed] hover:border-[#1161ed] hover:-translate-y-1 shadow-sm"
              aria-label="X (formerly Twitter)"
            >
              <svg
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/v2.labsglobal?igsh=bmd5ZzJrcHl4NGls"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white transition-all duration-300 hover:bg-[#1161ed] hover:border-[#1161ed] hover:-translate-y-1 shadow-sm"
              aria-label="Instagram"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col">
          <h4 className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#1161ed] mb-6">
            Explore
          </h4>
          <nav className="flex flex-col gap-3.5">
            <Link
              href="/"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              Work
            </Link>
            <Link
              href="/services"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              Services
            </Link>
            <Link
              href="/careers"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Services Links */}
        <div className="flex flex-col">
          <h4 className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#1161ed] mb-6">
            Services
          </h4>
          <nav className="flex flex-col gap-3.5">
            <Link
              href="/services/saas-product"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              SaaS & Product Dev
            </Link>
            <Link
              href="/services/erp-crm"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              ERP & CRM Systems
            </Link>
            <Link
              href="/services/ai-automation"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              AI Automations
            </Link>
            <Link
              href="/services/web-platform"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              Web Platforms
            </Link>
            <Link
              href="/services/video-motion"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              Video & Motion
            </Link>
            <Link
              href="/services/ui-ux-brand"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              UI/UX & Branding
            </Link>
            <Link
              href="/services/digital-marketing"
              className="text-[#94A3B8] hover:text-white text-[0.88rem] font-medium transition-all duration-300 hover:translate-x-1 font-Outfit"
            >
              Digital Marketing
            </Link>
          </nav>
        </div>

        {/* Contact Coordinates Column */}
        <div className="flex flex-col">
          <h4 className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#1161ed] mb-6">
            Coordinates
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:contact@v2labsglobal.com"
              className="flex items-center gap-3 text-[#94A3B8] hover:text-white text-[0.88rem] transition-colors duration-300 font-Outfit group"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#1161ed] group-hover:scale-105 transition-transform duration-200"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contact@v2labsglobal.com</span>
            </a>
            <div className="flex items-center gap-3 text-[#94A3B8] text-[0.88rem] font-Outfit">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#1161ed]"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Trademark bar */}
      <div className="border-t border-white/[0.04] py-[24px] relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center text-[#64748B] text-[0.8rem] max-w-[1200px] mx-auto px-6 gap-4 sm:gap-0 text-center sm:text-left font-Outfit">
          <p>© {currentYear} V2Labs Global. All rights reserved.</p>
          <div className="flex gap-[24px]">
            <Link
              href="/privacy"
              className="text-[#64748B] hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[#64748B] hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
