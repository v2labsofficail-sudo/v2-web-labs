import Link from "next/link";
import { blogCategories } from "@/lib/site-data";

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
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1161ed] mb-4">
          Insights Hub
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl">
          Content architecture for SEO, service discovery, and long-tail authority.
        </h1>
        <p className="mt-6 max-w-3xl text-slate-600 text-base sm:text-lg leading-8">
          The blog is structured around service-led categories so each article can
          strengthen the ranking and conversion potential of a related commercial page.
        </p>
        {query ? (
          <p className="mt-4 text-sm font-bold text-slate-500">
            Showing results for: {query}
          </p>
        ) : null}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCategories.map((category) => (
            <article
              key={category.slug}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1161ed]">
                Category
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight">
                {category.name}
              </h2>
              <p className="mt-4 text-slate-600 leading-7">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1161ed]"
                >
                  Browse category
                </Link>
                <Link
                  href={category.relatedServiceHref}
                  className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#1161ed] hover:text-[#1161ed]"
                >
                  Related service page
                </Link>
              </div>
            </article>
          ))}
        </div>
        {!filteredCategories.length ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 text-slate-600 shadow-sm">
            No categories matched that search yet. Use the main service pages to keep
            discovery paths active while the editorial library grows.
          </div>
        ) : null}
      </section>
    </div>
  );
}
