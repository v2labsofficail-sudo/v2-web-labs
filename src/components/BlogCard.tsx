import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog-data";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_55px_rgba(0,85,218,0.08)] hover:border-[#0055DA]/30 overflow-hidden gpu-accelerated min-h-[460px]">
      {/* Decorative Top Border Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0055DA] to-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Hover Background Radial Glow */}
      <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Card Image Banner with overlay */}
        <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-100 mb-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-slate-900/5 to-transparent z-10" />
          
          {post.coverImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          )}

          {/* Fallback pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0055DA_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />
        </div>

        {/* Categories / Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[0.68rem] font-black uppercase tracking-widest text-[#0055DA]">
            {post.categorySlug.replace("-", " ")}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-xs font-medium text-slate-500">{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black tracking-tight text-slate-900 line-clamp-2 group-hover:text-[#0055DA] transition-colors mb-3">
          <Link href={`/blog/${post.categorySlug}/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm font-semibold text-slate-600 leading-relaxed line-clamp-3 mb-6">
          {post.excerpt}
        </p>
      </div>

      {/* Author and Call to Action */}
      <div className="relative z-10 border-t border-slate-100 pt-4 mt-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Author Avatar */}
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-slate-100 bg-slate-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="h-full w-full object-cover" 
            />
          </div>
          <div>
            <p className="text-xs font-black text-slate-900 leading-none">{post.author.name}</p>
            <p className="text-[0.66rem] font-medium text-slate-500 mt-1 leading-none">{post.author.role}</p>
          </div>
        </div>

        <Link 
          href={`/blog/${post.categorySlug}/${post.slug}`}
          className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-slate-100 text-slate-800 transition-all duration-300 hover:bg-[#0055DA] hover:text-white group-hover:scale-105 active:scale-95 shadow-sm"
          aria-label={`Read ${post.title}`}
        >
          <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
