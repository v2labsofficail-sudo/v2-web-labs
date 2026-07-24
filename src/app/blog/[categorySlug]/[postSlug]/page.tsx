import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  buildPageMetadata, 
  buildBreadcrumbJsonLd, 
  buildFaqJsonLd, 
  absoluteUrl, 
  siteConfig 
} from "@/lib/seo";
import { blogPosts, getPostBySlug, getPostsByCategory } from "@/lib/blog-data";
import { blogCategories } from "@/lib/site-data";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";

type PostPageProps = {
  params: Promise<{
    categorySlug: string;
    postSlug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    categorySlug: post.categorySlug,
    postSlug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { postSlug } = await params;
  const post = getPostBySlug(postSlug);

  if (!post) {
    return buildPageMetadata({
      title: "Blog Post",
      description: "V2Labs Global blog article reader.",
      path: "/blog",
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.categorySlug}/${post.slug}`,
    keywords: post.keywords,
    type: "article",
  });
}

// Mapping blog categories back to corresponding commercial services/plans for high-converting CTA prompts
const categoryCtaConfig = {
  "ai-automation": {
    serviceHref: "/services/ai-automation",
    planHref: "/plans",
    title: "AI Solutions & Workflow Automation",
    description: "Integrate custom autonomous LLM agents and semantic automation pipelines into your business operations.",
    btnText: "Explore AI Solutions"
  },
  "web-development": {
    serviceHref: "/services/web-platform",
    planHref: "/plans/web-development",
    title: "High-Performance Next.js Web Development",
    description: "Launch a conversion-focused, lightning-fast web experience built on the latest Next.js 15 capabilities.",
    btnText: "Explore Web Services"
  },
  "branding": {
    serviceHref: "/services/ui-ux-brand",
    planHref: "/plans/branding",
    title: "Conversion-Led UI/UX & Identity Systems",
    description: "Create standard-setting design systems, modern product visual storytelling, and high-impact layouts.",
    btnText: "Explore Brand Design"
  },
  "erp-crm": {
    serviceHref: "/services/erp-crm",
    planHref: "/plans/erp-crm",
    title: "Custom CRM & Internal Business Operations Platforms",
    description: "Streamline reporting, manage workforce hours, and save subscription seat-taxes with bespoke software systems.",
    btnText: "Explore ERP/CRM Solutions"
  },
  "digital-marketing": {
    serviceHref: "/services/digital-marketing",
    planHref: "/plans",
    title: "Enterprise SEO, GEO & Performance Search Strategy",
    description: "Secure placement in both traditional search rankings and generative engine summaries.",
    btnText: "Explore Growth Services"
  }
} as const;

export default async function BlogPostPage({ params }: PostPageProps) {
  const { categorySlug, postSlug } = await params;
  const post = getPostBySlug(postSlug);

  // Validation: Ensure post exists and categorySlug matches
  if (!post || post.categorySlug !== categorySlug) {
    notFound();
  }

  const categoryInfo = blogCategories.find((cat) => cat.slug === categorySlug);
  const relatedPosts = getPostsByCategory(categorySlug)
    .filter((p) => p.slug !== postSlug)
    .slice(0, 2);

  // 1. Structured Data: JSON-LD Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${post.categorySlug}/${post.slug}/#article`),
    "isPartOf": {
      "@id": absoluteUrl(`/blog/${post.categorySlug}/${post.slug}/#webpage`)
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": [
      absoluteUrl(post.coverImage || "/logo-cover-v2labs.jpeg")
    ],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "image": post.author.avatar
    },
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.categorySlug}/${post.slug}`)
    },
    "keywords": post.keywords.join(", ")
  };

  // 2. Structured Data: JSON-LD Breadcrumbs
  const breadcrumbsJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: categoryInfo?.name || "Category", path: `/blog/category/${post.categorySlug}` },
    { name: post.title, path: `/blog/${post.categorySlug}/${post.slug}` }
  ]);

  // 3. Structured Data: JSON-LD FAQs (if present)
  const faqJsonLd = post.faqs ? buildFaqJsonLd(post.faqs) : null;

  const ctaInfo = categoryCtaConfig[post.categorySlug as keyof typeof categoryCtaConfig];

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-24">
      {/* Injecting SEO Schema scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}

      {/* Hero Header Area */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 pt-12 pb-10">
            {/* Breadcrumbs navigation */}
            <nav className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-[#0055DA] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#0055DA] transition-colors">Blog</Link>
              <span>/</span>
              {categoryInfo && (
                <>
                  <Link href={`/blog/category/${post.categorySlug}`} className="hover:text-[#0055DA] transition-colors">
                    {categoryInfo.name}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-slate-500 line-clamp-1 max-w-[200px] sm:max-w-xs">{post.title}</span>
            </nav>

            {/* Tags / Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center rounded-full bg-[#0055DA]/5 px-3 py-1 text-xs font-bold text-[#0055DA]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
              {post.title}
            </h1>

            {/* Author details */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200/60 pt-6">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-tight">{post.author.name}</p>
                  <p className="text-xs font-medium text-slate-500 mt-1 leading-none">{post.author.role}</p>
                </div>
              </div>
              <div className="hidden sm:block text-slate-300">|</div>
              <div className="text-sm font-bold text-slate-500 flex items-center gap-4">
                <span>Published: {post.date}</span>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Article text */}
          <main className="lg:col-span-8">
            {post.coverImage && (
              <div className="relative h-64 sm:h-[400px] w-full overflow-hidden rounded-3xl mb-8 bg-slate-100 border border-slate-200/50 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="h-full w-full object-cover" 
                />
              </div>
            )}
            <ScrollReveal delay={100}>
              <article 
                className="prose max-w-none text-slate-800 font-semibold leading-relaxed text-[0.98rem] sm:text-base
                           prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-headings:mt-8 prose-headings:mb-4
                           prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-2
                           prose-h3:text-xl
                           prose-p:mb-5
                           prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5 prose-ul:space-y-2
                           prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-5 prose-ol:space-y-2
                           prose-blockquote:border-l-4 prose-blockquote:border-[#0055DA] prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:my-6 prose-blockquote:font-medium
                           prose-strong:font-black prose-strong:text-slate-900
                           prose-table:w-full prose-table:border-collapse prose-table:my-6 prose-th:bg-slate-50 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-td:border prose-td:border-slate-100
                          "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </ScrollReveal>

            {/* Dynamic FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <ScrollReveal delay={150}>
                <section className="mt-16 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {post.faqs.map((faq, idx) => (
                      <div key={idx} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                        <h3 className="text-base font-black text-slate-900 tracking-tight mb-2 flex items-start gap-2">
                          <span className="text-[#0055DA] font-bold">Q:</span>
                          {faq.question}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600 pl-6 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}
          </main>

          {/* Sidebar CTA & Related Posts */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Contextual Commercial CTA Box */}
            {ctaInfo && (
              <ScrollReveal delay={200}>
                <div className="rounded-3xl border border-slate-200/60 bg-[#0055DA]/[0.02] p-6 shadow-[0_8px_32px_rgba(15,23,42,0.01)] relative overflow-hidden sticky top-28">
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#0055DA]" />
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-widest text-[#0055DA] mb-3">Service Capabilities</p>
                  <h3 className="text-lg font-black text-slate-900 leading-tight mb-3">
                    {ctaInfo.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed mb-6">
                    {ctaInfo.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href={ctaInfo.serviceHref}
                      className="inline-flex items-center justify-center rounded-xl bg-[#0055DA] py-3 text-xs font-bold text-white transition hover:bg-[#0044B3] active:scale-[0.98] shadow-sm text-center"
                    >
                      {ctaInfo.btnText}
                    </Link>
                    <Link
                      href={ctaInfo.planHref}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 transition hover:border-slate-800 hover:text-slate-800 active:scale-[0.98] text-center"
                    >
                      View Pricing Plans
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </aside>
        </div>
      </div>

      {/* Footer Related Articles Widget */}
      {relatedPosts.length > 0 && (
        <ScrollReveal delay={250}>
          <div className="max-w-4xl mx-auto px-6 border-t border-slate-100 mt-16 pt-16">
            <h2 className="text-xl font-black text-slate-900 tracking-tight mb-8">Related Insights</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Back to Blog Hub link */}
      <div className="max-w-4xl mx-auto px-6 mt-12 text-center">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-black text-[#0055DA] hover:underline"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          Back to all articles
        </Link>
      </div>

    </div>
  );
}
