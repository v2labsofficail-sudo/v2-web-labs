import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/project-data";
import RelatedServiceLinks from "@/components/RelatedServiceLinks";
import AlternatingText from "@/components/AlternatingText";
import { CheckCircle2, ChevronRight, Server, Database, Globe, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Background gradients */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#111111]/[0.03] rounded-full blur-[140px] pointer-events-none select-none -z-10 animate-float" />
      <div className="absolute top-[32%] right-[5%] w-[550px] h-[550px] bg-[#2A2A2A]/[0.02] rounded-full blur-[160px] pointer-events-none select-none -z-10 animate-pulse" />

      <div className="max-w-[1100px] mx-auto px-6 pt-16">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2.5 text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest relative z-10">
          <Link href="/" className="hover:text-[#0055DA] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/work" className="hover:text-[#0055DA] transition-colors">Work</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800">{project.title}</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[0.62rem] font-black uppercase text-[#111111] bg-[#111111]/[0.08] px-3.5 py-1.5 rounded-lg tracking-widest border border-slate-200 shadow-sm">
              {project.category}
            </span>
            <span className="text-[0.62rem] font-black uppercase text-[#0055DA] bg-[#0055DA]/5 px-3.5 py-1.5 rounded-lg tracking-widest border border-[#0055DA]/10">
              {project.badge}
            </span>
          </div>

          <h1 className="text-[2.5rem] sm:text-[4rem] font-black leading-[1.08] text-slate-900 tracking-tight mb-6 max-w-[850px]">
            {project.title}: <AlternatingText>Engineering Case Study</AlternatingText>
          </h1>

          <p className="text-[#111111] text-base sm:text-lg lg:text-[1.08rem] leading-[1.8] max-w-[800px] font-medium mb-8">
            {project.desc}
          </p>

          {/* Telemetry/Metrics Highlight */}
          <div className="inline-flex items-center gap-3.5 p-4 rounded-2xl bg-[#0055DA]/5 border border-[#0055DA]/10 shadow-sm">
            <div className="flex items-center justify-center w-3 h-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <span className="text-sm font-black text-slate-800 tracking-tight uppercase">
              Outcome Metric: {project.stat}
            </span>
          </div>
        </header>

        {/* Challenge & Problem Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">
          <div className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-4">
                Client Problem
              </h2>
              <p className="text-[#2A2A2A] text-sm sm:text-base leading-relaxed font-medium">
                {project.clientProblem}
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-4">
                Business Challenge
              </h2>
              <p className="text-[#2A2A2A] text-sm sm:text-base leading-relaxed font-medium">
                {project.businessChallenge}
              </p>
            </div>
          </div>
        </section>

        {/* Solution & Architecture */}
        <section className="mb-20 relative z-10">
          <div className="p-8 sm:p-12 rounded-[40px] border border-slate-200 bg-[#F8FAFC] shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mb-6">
              Our Solution & Engineering Approach
            </h2>
            <p className="text-[#111111] text-base leading-relaxed font-medium mb-10 max-w-4xl">
              {project.solution}
            </p>

            <h3 className="text-lg font-black text-slate-800 tracking-tight mb-6">
              System Architecture & Data Flow
            </h3>
            
            <div className="relative pl-6 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:border-l-2 before:border-dashed before:border-[#0055DA]/30 max-w-[850px]">
              {project.architecture.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-4 mb-8 last:mb-0 group">
                  <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#0055DA] flex items-center justify-center shadow-md z-10">
                    <span className="text-[0.75rem] font-black text-[#0055DA] tracking-tighter">0{idx + 1}</span>
                  </div>
                  <div className="flex-1 p-5 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:border-[#0055DA]/30 transition-all duration-300">
                    <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack & Process */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 relative z-10">
          
          {/* Tech Stack */}
          <div className="lg:col-span-6 p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-6">
              Technology Stack
            </h2>
            <div className="space-y-6">
              {Object.entries(project.techStack).map(([group, techs]) => (
                <div key={group}>
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">{group}</h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 font-mono text-xs font-extrabold text-[#111111] rounded-lg shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="lg:col-span-6 p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-6">
              Development Process
            </h2>
            <div className="space-y-4">
              {project.process.map((stage, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-lg bg-[#0055DA]/5 border border-[#0055DA]/10 flex items-center justify-center font-bold text-xs text-[#0055DA] shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-[#2A2A2A] text-xs sm:text-sm font-semibold leading-relaxed">
                    {stage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features, Performance & Outcomes */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
          
          <div className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed font-semibold">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-4">Performance Metrics</h3>
              <ul className="space-y-3">
                {project.performance.map((perf, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0055DA] shrink-0 mt-0.5" />
                    <span className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed font-semibold">{perf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-4">Business Outcomes</h3>
              <ul className="space-y-3">
                {project.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed font-semibold">{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contextual Link & High-Converting CTA Box */}
        <section className="relative z-10 mb-16">
          <div className="relative rounded-[40px] bg-[#020713] p-10 sm:p-16 text-center text-white overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#111111] opacity-15 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0055DA] opacity-10 rounded-full blur-3xl -ml-28 -mb-28 pointer-events-none" />

            <div className="relative z-10 max-w-[680px] mx-auto">
              <span className="inline-block bg-white/[0.06] text-white border border-white/10 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-lg mb-6">
                System Integration Success
              </span>

              <h2 className="text-2xl sm:text-[2.2rem] font-black tracking-tight leading-tight mb-4 text-white">
                Interested in building a similar solution?
              </h2>

              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-10 font-semibold">
                Explore our main services in {" "}
                <Link href={project.serviceLink} className="text-[#0055DA] hover:underline font-bold">
                  {project.serviceName}
                </Link>{" "}
                or schedule a custom project blueprint review with our software engineers.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 bg-[#0055DA] hover:bg-[#0044B3] shadow-[0_6px_25px_rgba(0,85,218,0.3)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-xs uppercase tracking-widest"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/work"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 bg-white/5 border border-white/10 hover:border-white/30 text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-xs uppercase tracking-widest"
                >
                  See All Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="text-center relative z-10">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-black uppercase text-slate-500 hover:text-[#0055DA] transition-colors tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
