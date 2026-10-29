import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-neutral-900 select-none">
      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-900">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-4 inline-block">
              <Logo dark={true} className="h-9 sm:h-10" />
            </Link>
            <p className="text-neutral-200 text-sm leading-relaxed mb-6 max-w-sm">
              V2 Labs Global is an enterprise digital transformation firm. We engineer high-performance web applications, scalable ERP &amp; CRM systems, technical SEO frameworks, and custom AI automations.
            </p>

            {/* Social Links with verified official icons */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/v2labsco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-[#0055DA] text-white border border-neutral-800 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.97H5.06v8.53h2.8z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/v2labsglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-[#0055DA] text-white border border-neutral-800 flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/v2.labsglobal?igsh=bmd5ZzJrcHl4NGls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-[#0055DA] text-white border border-neutral-800 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919022641867"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-[#0055DA] text-white border border-neutral-800 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.074-1.809-.411-1.295-.536-2.138-1.848-2.203-1.933-.064-.087-.525-.7-.525-1.332 0-.631.33-.941.449-1.07.118-.128.258-.161.344-.161.086 0 .172.001.247.005.078.004.183-.03.286.217.108.259.369.901.401.967.033.065.054.142.011.228-.043.086-.065.14-.13.216-.065.076-.136.17-.195.228-.065.065-.133.136-.057.266.076.13.338.558.725.903.498.444.918.581 1.048.646.13.065.206.054.282-.033.076-.086.324-.378.411-.508.086-.13.173-.108.289-.065.116.043.737.348.864.412.126.065.21.097.241.151.032.054.032.313-.112.718z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.981-1.396A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.47-4.472-1.282l-.321-.199-2.964.83.847-2.887-.215-.342C4.015 15.024 3.5 13.565 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/v2labsglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-[#0055DA] text-white border border-neutral-800 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/web-platform" className="text-neutral-200 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-neutral-200 hover:text-white transition-colors">
                  SEO &amp; Organic Growth
                </Link>
              </li>
              <li>
                <Link href="/services/erp-crm" className="text-neutral-200 hover:text-white transition-colors">
                  Custom ERP &amp; CRM Systems
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-neutral-200 hover:text-white transition-colors">
                  AI Automations &amp; Agents
                </Link>
              </li>
              <li>
                <Link href="/services/saas-product" className="text-neutral-200 hover:text-white transition-colors">
                  SaaS Product Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-brand" className="text-neutral-200 hover:text-white transition-colors">
                  UI/UX &amp; Brand Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-neutral-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-neutral-200 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-neutral-200 hover:text-white transition-colors">
                  Plans &amp; Retainers
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-200 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-200 hover:text-white transition-colors">
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <p className="flex flex-col">
                <span className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-0.5">Email</span>
                <a href="mailto:contact@v2labsglobal.com" className="text-white hover:text-[#38BDF8] transition-colors font-semibold">
                  contact@v2labsglobal.com
                </a>
              </p>
              <p className="flex flex-col">
                <span className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-0.5">Phone</span>
                <a href="tel:+919022641867" className="text-white hover:text-[#38BDF8] transition-colors font-semibold">
                  +91 9022641867
                </a>
              </p>
              <p className="flex flex-col">
                <span className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-0.5">Office</span>
                <span className="text-white font-medium">
                  Mira Road, Thane, Maharashtra 401107, India
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-200">
          <p className="text-white font-medium">© {currentYear} V2 Labs Global. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-neutral-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-neutral-200 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
