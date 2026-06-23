import AlternatingText from "@/components/AlternatingText";
import Link from "next/link";
import { blogCategories } from "@/lib/site-data";
import ScrollReveal from "@/components/ScrollReveal";

type BlogPageProps = {
  searchParams?: Promise<{
    query?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const query = resolvedSearchParams?.query?.trim().toLowerCase() ?? "";
  const filteredCategories = query
    ? blogCategories.filter((category) => {
        const haystack = `${category.name} ${category.description}`.toLowerCase();
        return haystack.includes(query);
      })
    : blogCategories;

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#111111] mb-4">
            Insights Hub
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl">
            Content architecture for <AlternatingText>SEO, service discovery, and long-tail authority.</AlternatingText>
          </h1>
          <p className="mt-6 max-w-3xl text-[#111111] text-base sm:text-lg leading-8">
            The blog is structured around service-led categories so each article can
            strengthen the ranking and conversion potential of a related commercial page.
          </p>
          {query ? (
            <p className="mt-4 text-sm font-bold text-[#111111]">
              Showing results for: {query}
            </p>
          ) : null}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCategories.map((category) => (
              <article
                key={category.slug}
                className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_55px_rgba(0, 85, 218,0.08)] hover:border-[#0055DA]/30 group relative overflow-hidden flex flex-col justify-between min-h-[290px] gpu-accelerated"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0055DA] to-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17, 97, 237,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#111111]">
                      Category
                    </p>
                    <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#111111] transition-colors">
                      {category.name}
                    </h2>
                    <p className="mt-4 text-[#111111] leading-7 text-sm font-semibold">{category.description}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 relative z-10">
                    <Link
                      href={`/blog/category/${category.slug}`}
                      className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#111111] active:scale-95"
                    >
                      Browse category
                    </Link>
                    <Link
                      href={category.relatedServiceHref}
                      className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#111111] hover:text-[#111111] hover:bg-white active:scale-95"
                    >
                      Related service page
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!filteredCategories.length ? (
            <div className="mt-8 rounded-3xl border border-slate-200/40 bg-white  p-7 text-[#111111] shadow-sm">
              No categories matched that search yet. Use the main service pages to keep
              discovery paths active while the editorial library grows.
            </div>
          ) : null}
        </section>
      </ScrollReveal>
    </div>
  );
}
