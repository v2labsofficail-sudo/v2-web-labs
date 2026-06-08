import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white pt-20 pb-8 text-black font-montserrat">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,97,237,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.03),transparent_24%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 pb-[60px] sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr_0.9fr]">
        <div className="flex flex-col">
          <Link href="/" className="mb-5 flex items-center gap-3 group">
            <Logo showTagline={true} dark={false} />
          </Link>
          <p className="mt-2 mb-6 max-w-[340px] text-[0.88rem] leading-relaxed font-normal text-black">
            Engineering high-performance digital products. From custom web
            systems to scalable enterprise automations and designs.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/v2labsco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:border-[#1161ed]/30 hover:bg-[#1161ed] hover:text-white"
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
            <a
              href="https://x.com/v2labsglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:border-[#1161ed]/30 hover:bg-[#1161ed] hover:text-white"
              aria-label="X (formerly Twitter)"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/v2.labsglobal?igsh=bmd5ZzJrcHl4NGls"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:border-[#1161ed]/30 hover:bg-[#1161ed] hover:text-white"
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

        <div className="flex flex-col">
          <h4 className="mb-6 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-slate-400">
            Why V2Labs
          </h4>
          <nav className="flex flex-col gap-3.5">
            {[
              { href: "/services", label: "Features Overview" },
              { href: "/work", label: "Case Studies" },
              { href: "/about", label: "About Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.88rem] font-normal text-black transition-all duration-300 hover:translate-x-1 hover:text-[#1161ed]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col">
          <h4 className="mb-6 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-slate-400">
            Resources
          </h4>
          <nav className="flex flex-col gap-3.5">
            {[
              { href: "/blog", label: "Blog" },
              { href: "/terms", label: "Terms" },
              { href: "/privacy", label: "Privacy Policy" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.88rem] font-normal text-black transition-all duration-300 hover:translate-x-1 hover:text-[#1161ed]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col">
          <h4 className="mb-6 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-slate-400">
            Services
          </h4>
          <nav className="flex flex-col gap-3.5">
            {[
              { href: "/services/saas-product", label: "SaaS Product Dev" },
              { href: "/services/erp-crm", label: "ERP & CRM Systems" },
              { href: "/services/ai-automation", label: "AI Automations" },
              { href: "/services/web-platform", label: "Web Platforms" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.88rem] font-normal text-black transition-all duration-300 hover:translate-x-1 hover:text-[#1161ed]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col">
          <h4 className="mb-6 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-slate-400">
            Connect
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:contact@v2labsglobal.com"
              className="group flex items-center gap-3 text-[0.88rem] font-normal text-black transition-colors duration-300 hover:text-[#1161ed]"
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
                className="text-slate-400 transition-transform duration-200 group-hover:scale-105 group-hover:text-[#1161ed]"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contact@v2labsglobal.com</span>
            </a>
            <div className="flex items-center gap-3 text-[0.88rem] font-normal text-black">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Mumbai, Maharashtra</span>
            </div>
            <a
              href="/contact"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-[#1161ed] px-5 py-2.5 text-[0.82rem] font-bold text-white transition-all duration-300 hover:bg-[#0c4ec3] hover:shadow-[0_8px_24px_rgba(17,97,237,0.18)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-slate-200 py-6">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 text-center text-[0.8rem] font-normal text-black sm:flex-row sm:gap-0 sm:text-left">
          <p>&copy; {currentYear} V2Labs Global. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-[#1161ed]">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors duration-300 hover:text-[#1161ed]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
