import Link from "next/link";
import { serviceItems } from "@/lib/site-data";

const featuredServices = serviceItems.filter(
  (service) => service.slug !== "video-motion",
);

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1161ed] mb-4">
          Service Hub
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl">
          Growth services built for product teams that need speed, clarity, and revenue impact.
        </h1>
        <p className="mt-6 max-w-3xl text-slate-600 text-base sm:text-lg leading-8">
          V2Labs Global helps companies launch and scale with search-friendly websites,
          AI systems, branding, ERP CRM platforms, SaaS products, and digital marketing.
          Use this page as the central SEO hub for every core capability.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1161ed]">
                {service.navLabel}
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight">
                {service.title}
              </h2>
              <p className="mt-4 text-slate-600 leading-7">{service.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={service.href}
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1161ed]"
                >
                  View service
                </Link>
                <Link
                  href={`/blog/category/${service.blogCategory}`}
                  className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#1161ed] hover:text-[#1161ed]"
                >
                  Read related insights
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
