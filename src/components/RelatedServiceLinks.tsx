import Link from "next/link";
import { serviceItems } from "@/lib/site-data";

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
      <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#1161ed]">
        Related links
      </p>
      <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
        {heading}
      </h2>
      <p className="mt-3 max-w-3xl text-slate-600 leading-7">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/services"
          className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1161ed]"
        >
          All services
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#1161ed] hover:text-[#1161ed]"
        >
          Blog hub
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#1161ed] hover:text-[#1161ed]"
        >
          Contact sales
        </Link>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className="rounded-2xl border border-slate-200 px-5 py-4 transition hover:border-[#1161ed] hover:bg-[#1161ed]/[0.03]"
          >
            <div className="text-sm font-black text-slate-900">{service.navLabel}</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              {service.summary}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
