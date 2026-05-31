import Link from "next/link";

const pillars = [
  {
    title: "Technical SEO",
    description:
      "Metadata, crawl paths, schema, internal linking, and content architecture aligned with modern search best practices.",
  },
  {
    title: "Landing Page Optimization",
    description:
      "Intent-matched pages designed to increase qualified inquiries, demo requests, and service discovery.",
  },
  {
    title: "Content Strategy",
    description:
      "Editorial planning that connects blog categories, service pages, and long-tail search demand.",
  },
  {
    title: "Performance Campaign Support",
    description:
      "Creative, messaging, and page experience improvements that help paid and organic traffic convert better.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1161ed] mb-4">
          Digital Marketing
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl">
          SEO and growth systems that turn service pages into demand engines.
        </h1>
        <p className="mt-6 max-w-3xl text-slate-600 text-base sm:text-lg leading-8">
          This service connects search strategy, landing-page UX, and conversion-focused
          content so V2Labs Global can generate qualified leads across web development,
          AI solutions, branding, and ERP CRM offerings.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-black tracking-tight">{pillar.title}</h2>
              <p className="mt-4 text-slate-600 leading-7">{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tight">Connected growth paths</h2>
          <p className="mt-4 text-slate-600 leading-7 max-w-3xl">
            Use digital marketing together with service pages and content categories so
            visitors can move naturally from discovery to evaluation to contact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1161ed]"
            >
              View all services
            </Link>
            <Link
              href="/blog/category/digital-marketing"
              className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#1161ed] hover:text-[#1161ed]"
            >
              Explore marketing insights
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#1161ed] hover:text-[#1161ed]"
            >
              Start a growth project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
