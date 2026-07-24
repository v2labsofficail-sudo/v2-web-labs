import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { blogCategories } from "@/lib/site-data";
import { getPostsByCategory } from "@/lib/blog-data";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";

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
    title: `${category.name} Articles`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
    keywords: [`${category.name} blog`, `${category.name} guides`, `${category.name} insights`],
  });
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = blogCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = getPostsByCategory(slug);

  // SEO Breadcrumbs JSON-LD
  const breadcrumbData = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.name, path: `/blog/category/${category.slug}` },
  ]);

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      {/* Inject Structured Breadcrumbs Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
        }}
      />

      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-6">
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#0055DA] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0055DA] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#0055DA]">{category.name}</span>
          </nav>

          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0055DA] mb-3">
            Category
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-slate-900">
            {category.name}
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600 text-base sm:text-lg leading-relaxed font-semibold">
            {category.description}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="max-w-6xl mx-auto px-6 pt-8">
          {categoryPosts.length === 0 ? (
            <div className="rounded-3xl border border-slate-200/40 bg-white p-10 text-center shadow-[0_8px_32px_rgba(15,23,42,0.02)]">
              <svg className="mx-auto h-12 w-12 text-slate-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="text-lg font-black text-slate-800">No articles in this category yet</h3>
              <p className="mt-2 text-sm font-semibold max-w-md mx-auto text-slate-500">
                Our team is currently drafting premium insights for this category. In the meantime, discover the relevant services we offer in this field.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href={category.relatedServiceHref}
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0055DA] active:scale-95"
                >
                  Visit related service
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-600 transition hover:border-[#0055DA] hover:text-[#0055DA] hover:bg-white active:scale-95"
                >
                  Back to Blog Hub
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {categoryPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              
              {/* Category-Specific CTA Box */}
              <div className="rounded-3xl border border-slate-200/50 bg-[#0055DA]/[0.02] p-8 lg:p-10 shadow-[0_8px_32px_rgba(15,23,42,0.02)] relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#0055DA]" />
                <div className="relative z-10 md:flex md:items-center md:justify-between gap-6">
                  <div className="max-w-2xl">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Need custom implementation of these concepts?
                    </h2>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600 leading-relaxed">
                      We specialize in turning insights into high-yielding business assets. Explore our professional capabilities in this domain.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 flex flex-wrap gap-3 shrink-0">
                    <Link
                      href={category.relatedServiceHref}
                      className="inline-flex items-center rounded-full bg-[#0055DA] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0044B3] active:scale-95"
                    >
                      View Service Capabilities
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-800 hover:text-slate-800 active:scale-95"
                    >
                      Speak with an Expert
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </ScrollReveal>
    </div>
  );
}
