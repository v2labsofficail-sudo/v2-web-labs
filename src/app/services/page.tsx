import Link from "next/link";
import { serviceItems } from "@/lib/site-data";
import ScrollReveal from "@/components/ScrollReveal";

const featuredServices = serviceItems.filter(
  (service) => service.slug !== "video-motion",
);

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#111111] mb-4">
            Service Hub
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl">
            Growth services built for product teams that need <span>speed, clarity, and revenue impact.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-[#111111] text-base sm:text-lg leading-8">
            V2Labs Global helps companies launch and scale with search-friendly websites,
            AI systems, branding, ERP CRM platforms, SaaS products, and digital marketing.
            Use this page as the central SEO hub for every core capability.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <article
                key={service.slug}
                className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_55px_rgba(47,47,228,0.08)] hover:border-[#2F2FE4]/30 group relative overflow-hidden flex flex-col justify-between min-h-[290px] gpu-accelerated"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2F2FE4] to-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#111111]">
                      {service.navLabel}
                    </p>
                    <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#111111] transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-[#111111] leading-7 text-sm font-semibold">{service.summary}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 relative z-10">
                    <Link
                      href={service.href}
                      className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#111111] active:scale-95"
                    >
                      View service
                    </Link>
                    <Link
                      href={`/blog/category/${service.blogCategory}`}
                      className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#111111] hover:text-[#111111] hover:bg-white active:scale-95"
                    >
                      Read related insights
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
