import Link from "next/link";
import { serviceItems } from "@/lib/site-data";
import { 
  Globe, 
  Cpu, 
  Palette, 
  Database, 
  Layers, 
  Video, 
  Target,
  Sparkles 
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "web-platform": Globe,
  "ai-automation": Cpu,
  "ui-ux-brand": Palette,
  "erp-crm": Database,
  "saas-product": Layers,
  "video-motion": Video,
  "digital-marketing": Target,
};

type RelatedServiceLinksProps = {
  currentSlug?: string;
  heading?: string;
  description?: string;
};

export default function RelatedServiceLinks({
  currentSlug,
  heading = "Explore related services",
  description = "Strengthen internal linking between commercial pages so visitors and search engines can move through the service cluster naturally.",
}: RelatedServiceLinksProps) {
  const items = serviceItems.filter((service) => service.slug !== currentSlug);

  return (
    <section className="mt-16 rounded-[28px] border border-slate-200/70 bg-white p-6 sm:p-8 shadow-sm">
      <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#111111]">
        Related links
      </p>
      <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
        {heading}
      </h2>
      <p className="mt-3 max-w-3xl text-[#111111] leading-7">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/services"
          className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#111111]"
        >
          All services
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#111111] hover:text-[#111111]"
        >
          Blog hub
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#111111] hover:text-[#111111]"
        >
          Contact sales
        </Link>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((service) => {
          const IconComponent = iconMap[service.slug] || Sparkles;
          return (
            <Link
              key={service.slug}
              href={service.href}
              className="rounded-2xl border border-slate-200 px-5 py-4 transition hover:border-[#111111] hover:bg-[#111111]/[0.03] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded bg-[#111111]/5 flex items-center justify-center text-slate-800 group-hover:bg-[#111111] group-hover:text-white transition-all duration-200 shrink-0">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm font-black text-slate-900 group-hover:text-[#111111] transition-colors">
                    {service.navLabel}
                  </div>
                </div>
                <div className="text-sm leading-6 text-[#111111] line-clamp-2">
                  {service.summary}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
