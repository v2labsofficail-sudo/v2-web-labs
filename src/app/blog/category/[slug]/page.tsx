import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { blogCategories } from "@/lib/site-data";

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
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1161ed] mb-4">
          Blog Category
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none max-w-4xl">
          {category.name}
        </h1>
        <p className="mt-6 max-w-3xl text-slate-600 text-base sm:text-lg leading-8">
          {category.description}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tight">
            Recommended production URL structure
          </h2>
          <div className="mt-5 grid gap-3 text-slate-600">
            <p>{`/blog/${category.slug}/[post-slug]`}</p>
            <p>{`/blog/category/${category.slug}`}</p>
            <p>{`/services${category.relatedServiceHref.replace("/services", "")}`}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={category.relatedServiceHref}
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1161ed]"
            >
              Visit related service
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#1161ed] hover:text-[#1161ed]"
            >
              Back to blog hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
