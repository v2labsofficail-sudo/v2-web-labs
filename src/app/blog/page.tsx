import AlternatingText from "@/components/AlternatingText";
import Link from "next/link";
import { blogCategories } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";

type BlogPageProps = {
  searchParams?: Promise<{
    query?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const query = resolvedSearchParams?.query?.trim().toLowerCase() ?? "";
  
  // Filter posts by search query
  const filteredPosts = query
    ? blogPosts.filter((post) => {
        const haystack = `${post.title} ${post.excerpt} ${post.tags.join(" ")} ${post.keywords.join(" ")}`.toLowerCase();
        return haystack.includes(query);
      })
    : blogPosts;

  // Filter categories by search query (for categorization helper)
  const filteredCategories = query
    ? blogCategories.filter((category) => {
        const haystack = `${category.name} ${category.description}`.toLowerCase();
        return haystack.includes(query);
      })
    : blogCategories;

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const standardPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : (featuredPost && query ? [] : filteredPosts);

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0055DA] mb-4">
            Insights Hub
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl text-slate-900">
            Content architecture for <AlternatingText>SEO, growth, and industry authority.</AlternatingText>
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 text-base sm:text-lg leading-8 font-semibold">
            Actionable articles on AI workflow systems, custom ERPs, high-performance frontend engineering, and conversion design.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-md">
            <form action="/blog" method="GET" className="relative flex items-center">
              <input
                type="text"
                name="query"
                placeholder="Search articles, tags, or topics..."
                defaultValue={query}
                className="w-full pl-5 pr-12 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-slate-800 font-bold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0055DA]/20 focus:border-[#0055DA] transition-all"
              />
              <button
                type="submit"
                className="absolute right-3 p-2 text-slate-400 hover:text-[#0055DA] transition-colors"
                aria-label="Submit search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
                </svg>
              </button>
            </form>
            {query && (
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="font-bold text-slate-500">
                  Showing results for: &quot;{query}&quot;
                </span>
                <Link href="/blog" className="text-[#0055DA] font-black hover:underline">
                  Clear search
                </Link>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Post (Only when no search query OR query matches something) */}
      {!query && featuredPost && (
        <ScrollReveal delay={100}>
          <section className="max-w-6xl mx-auto px-6 mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0055DA] mb-6">Featured Article</h2>
            <div className="grid gap-8 lg:grid-cols-12 rounded-3xl border border-slate-200/60 bg-white p-6 lg:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,85,218,0.06)] hover:border-[#0055DA]/20 group relative overflow-hidden">
              
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0055DA] to-[#0F172A]" />
              
              {/* Image banner */}
              <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[380px] lg:col-span-7 overflow-hidden rounded-2xl bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-slate-900/5 to-transparent z-10" />
                
                {featuredPost.coverImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={featuredPost.coverImage} 
                    alt={featuredPost.title} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-102" 
                  />
                )}

                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0055DA_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-sm">
                    Featured
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-5 flex flex-col justify-between pt-2">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0055DA]">
                      {featuredPost.categorySlug.replace("-", " ")}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-500">{featuredPost.date}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 group-hover:text-[#0055DA] transition-colors leading-tight mb-4">
                    <Link href={`/blog/${featuredPost.categorySlug}/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 font-semibold leading-relaxed text-sm sm:text-base mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={featuredPost.author.avatar} 
                        alt={featuredPost.author.name}
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 leading-none">{featuredPost.author.name}</p>
                      <p className="text-[0.66rem] font-medium text-slate-500 mt-1 leading-none">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link 
                    href={`/blog/${featuredPost.categorySlug}/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0055DA] active:scale-95 shadow-sm"
                  >
                    Read article
                    <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Blog Cards Grid */}
      <ScrollReveal delay={150}>
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0055DA]">
              {query ? `Search Results (${filteredPosts.length})` : "Recent Articles"}
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border border-slate-200/50 bg-slate-50 p-12 text-center text-slate-500">
              <svg className="mx-auto h-12 w-12 text-slate-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="text-lg font-black text-slate-800">No articles found</h3>
              <p className="mt-2 text-sm font-semibold max-w-sm mx-auto">
                We couldn&apos;t find any posts matching your search query. Try using other keywords or browsing by category below.
              </p>
              <Link href="/blog" className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0055DA]">
                View all articles
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* If no search query, skip the first one since it is in Featured */}
              {(query ? filteredPosts : standardPosts).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </ScrollReveal>

      {/* Categories Browsing Section */}
      <ScrollReveal delay={200}>
        <section className="max-w-6xl mx-auto px-6 border-t border-slate-100 pt-16">
          <p className="text-xs font-black uppercase tracking-widest text-[#0055DA] mb-8">
            Browse by Service Category
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCategories.map((category) => (
              <article
                key={category.slug}
                className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_55px_rgba(0, 85, 218,0.08)] hover:border-[#0055DA]/30 group relative overflow-hidden flex flex-col justify-between min-h-[290px] gpu-accelerated"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0055DA] to-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.18em] text-[#0055DA]">
                      Category
                    </p>
                    <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#0055DA] transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-4 text-slate-600 leading-7 text-sm font-semibold">{category.description}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 relative z-10">
                    <Link
                      href={`/blog/category/${category.slug}`}
                      className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0055DA] active:scale-95"
                    >
                      Browse articles
                    </Link>
                    <Link
                      href={category.relatedServiceHref}
                      className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-600 transition hover:border-slate-800 hover:text-slate-800 hover:bg-white active:scale-95"
                    >
                      Service details
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
