import AlternatingText from "@/components/AlternatingText";
import Link from "next/link";
import { serviceItems } from "@/lib/site-data";
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
  Sparkles
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
    </div>
  );
}
