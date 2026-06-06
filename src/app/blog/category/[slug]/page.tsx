import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { blogCategories } from "@/lib/site-data";
import ScrollReveal from "@/components/ScrollReveal";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((item) => item.slug === slug);

  if (!category) {
    return buildPageMetadata({
      title: "Blog Category",
      description: "V2Labs Global blog category page.",
      path: "/blog",
    });
  }

  return buildPageMetadata({
    title: `${category.name} Blog`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
  });
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = blogCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1161ed] mb-4">
            Blog Category
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none max-w-4xl">
            {category.name}
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 text-base sm:text-lg leading-8 font-semibold">
            {category.description}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="rounded-3xl border border-slate-200/40 bg-white/40 backdrop-blur-xl p-8 shadow-[0_8px_32px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/30 hover:bg-white/60 group relative overflow-hidden gpu-accelerated">
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl font-black tracking-tight">
                Recommended production URL structure
              </h2>
              <div className="mt-5 grid gap-3 text-slate-600 font-semibold">
                <p>{`/blog/${category.slug}/[post-slug]`}</p>
                <p>{`/blog/category/${category.slug}`}</p>
                <p>{`/services${category.relatedServiceHref.replace("/services", "")}`}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={category.relatedServiceHref}
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1161ed] active:scale-95"
                >
                  Visit related service
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#1161ed] hover:text-[#1161ed] hover:bg-white active:scale-95"
                >
                  Back to blog hub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
