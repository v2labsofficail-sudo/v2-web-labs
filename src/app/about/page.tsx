import Link from "next/link";
import TeamCarousel from "@/components/TeamCarousel";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  const stats = [
    { value: "120+", label: "Projects Completed" },
    { value: "45+", label: "Active Startups Launched" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "15+", label: "Design Awards" },
  ];


  const team = [
    {
      name: "Vishal Dudhabarve",
      role: "Founder & AI Full Stack Developer",
      initials: "VD",
      quote: "Building intelligent systems that push boundaries.",
      gradient: "from-[#6366f1] to-[#4f46e5]",
      linkedin: "#",
      github: "#",
      bio: "Founder of V2 Labs. Focuses on architecting multi-agent AI ecosystems, custom LLM fine-tuning, and scalable TypeScript frontends.",
      img: "/vishal-dudhabarve.jpeg",
    },
    {
      name: "Vandan Darji",
      role: "Co-Founder & Full Stack Developer",
      initials: "VD",
      quote: "Compiles bulletproof, sub-second architectures.",
      gradient: "from-[#1161ed] to-[#3b82f6]",
      linkedin: "https://www.linkedin.com/in/vandan-darji-3b282931a/",
      github: "https://github.com/Vandann-1/",
      bio: "Oversees core systems scaling, cloud sync grids, and security layers. Focused on TypeScript and React performance.",
      img: "/Vandan Darji.png",
    },
    {
      name: "Jevin Kalathiya",
      role: "PHP & Laravel Developer / Manager",
      initials: "JK",
      quote:
        "Building scalable backend systems and efficient web applications.",
      gradient: "from-[#ec4899] to-[#f43f5e]",
      linkedin: "https://www.linkedin.com/in/jevinkalathiya/",
      github: "https://github.com/JevinKalathiya",
      bio: "PHP and Laravel developer focused on building secure, scalable, and high-performance web applications. Experienced in REST APIs, database design, authentication systems, and backend architecture.",
      img: "/Jevin Kalathiya.jpeg",
    },
    {
      name: "Biswadeep Dey",
      role: "Professional Video Editor",
      initials: "BD",
      quote: "Cinematic storytelling that captivates and converts.",
      gradient: "from-[#f43f5e] to-[#e11d48]",
      linkedin: "#",
      github: "#",
      bio: "Crafts premium cinematic edits, complex motion graphics, and high-conversion brand advertisements. Expert in Premiere Pro and After Effects.",
      img: "/Biswadeep Dey.jpg",
    },
    {
      name: "Rishabh Tiwari",
      role: "Social Media Manager / Wordpress Developer / Co-Manager",
      initials: "RT",
      quote: "Transforms abstract ideas into bold visual stories.",
      gradient: "from-[#10b981] to-[#059669]",
      linkedin: "#",
      github: "#",
      bio: "Social media manager and wordpress designer & developer focused on building secure, scalable, and high-performance web applications. Experienced in REST APIs, database design, authentication systems, and backend architecture.",
      img: "/Rishabh Tiwari.png",
    },
    {
      name: "Vansh Shukla",
      role: "Junior Web Developer",
      initials: "VS",
      quote: "Focused on building clean, dependable web experiences.",
      gradient: "from-[#f59e0b] to-[#f97316]",
      linkedin: "#",
      github: "#",
      bio: "Junior web developer contributing to responsive interfaces and smooth user experiences across modern web projects.",
      img: "/vansh-je.jpeg",
    },

  ];

  return (
    <div className="bg-slate-50/60 min-h-screen text-slate-900 font-Outfit relative overflow-hidden pb-24">
      {/* Background Soft Mesh Gradients for Premium Studio Feel */}
      <div className="absolute top-[8%] left-[5%] w-[400px] h-[400px] bg-[#1161ed]/[0.03] rounded-full blur-[130px] pointer-events-none select-none -z-10" />
      <div className="absolute top-[35%] right-[5%] w-[500px] h-[500px] bg-[#1161ed]/[0.02] rounded-full blur-[150px] pointer-events-none select-none -z-10 animate-pulse duration-[10s]" />

      {/* Luminous Dotted Grid Background Pattern */}
      <div className="absolute right-[-40px] top-[2%] w-[350px] h-[350px] bg-[radial-gradient(#1161ed_3px,transparent_3px)] [background-size:24px_24px] opacity-[0.25] -z-10 pointer-events-none select-none" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 max-w-[1100px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-[0.15em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
          <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
          Who We Are
        </div>

        <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.1] text-slate-900 max-w-[850px] mx-auto mb-6 tracking-tight">
          Pioneering Premium{" "}
          <span className="bg-gradient-to-r from-[#1161ed] to-[#3b82f6] bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </h1>

        <p className="text-[#64748B] text-sm sm:text-base lg:text-[1.05rem] leading-[1.75] max-w-[720px] mx-auto">
          V2 Labs is a modern digital agency and collaborative engineering
          studio. We partner with visionary startups and global brands to
          architect gorgeous websites, scalable software products, customized
          ERP/CRM integrations, and AI workflow automation platforms.
        </p>
      </section>

      <ScrollReveal>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24 max-w-[1100px] mx-auto px-6 relative z-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="group relative p-6 sm:p-8 rounded-[24px] border border-[#1161ed]/10 bg-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(17,97,237,0.02)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#1161ed]/25 hover:bg-white hover:shadow-[0_20px_40px_rgba(17,97,237,0.08)] flex flex-col justify-center items-center text-center"
          >
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#1161ed] to-[#3b82f6] rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="text-[2.2rem] sm:text-[2.8rem] font-black tracking-tight text-[#1161ed] mb-1.5 leading-none">
              {stat.value}
            </span>
            <span className="text-slate-500 font-extrabold text-[0.8rem] sm:text-[0.88rem] tracking-tight leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-12 border-t border-slate-200/50 mb-24 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              From College Dorm Hustle to Proper Engineering
            </h2>
            <p className="text-[#64748B] text-sm sm:text-[0.96rem] leading-relaxed mb-5">
              V2Labs was forged through relentless dedication. Our founders, **Vishal** and **Vandan**, began their partnership during college. Struggling to manage rigid university workloads, attendance requirements, and exams, they invested every spare night self-teaching advanced web architectures and system designs.
            </p>
            <p className="text-[#64748B] text-sm sm:text-[0.96rem] leading-relaxed">
              They started by freelancing on small client projects, delivering proper high-quality execution and pixel-perfect precision. This hands-on experience and obsession with performance laid the foundation for V2Labs (named after **Vishal** + **Vandan**). Today, we operate as an elite engineering studio shipping high-scale software globally.
            </p>
          </div>

          {/* Right Cards Stack Column */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {[
              {
                title: "Sub-Second Performance",
                desc: "Every system is custom-compiled for maximum speeds and optimized Core Web Vitals.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                ),
              },
              {
                title: "Figma-to-Code Precision",
                desc: "We respect every pixel. Spacing patterns, grids, and typography sync perfectly to clean layouts.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                ),
              },
              {
                title: "Scale-Ready Abstractions",
                desc: "Modular TypeScript code ensures your frontend infrastructure remains adaptable as users expand.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582"
                    />
                  </svg>
                ),
              },
            ].map((dna, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl border border-slate-200/40 bg-white/40 backdrop-blur-xl shadow-sm hover:shadow-[0_15px_30px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/20 hover:bg-white/60 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Left Line Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#1161ed] to-[#3b82f6]" />

                <div className="w-10 h-10 rounded-xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 shadow-sm">
                  {dna.icon}
                </div>
                <div>
                  <h4 className="text-[0.94rem] font-black text-slate-900 mb-1 group-hover:text-[#1161ed] transition-colors">
                    {dna.title}
                  </h4>
                  <p className="text-[0.82rem] text-slate-500 leading-relaxed">
                    {dna.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-12 border-t border-slate-200/50 mb-24 max-w-[1100px] mx-auto px-6 overflow-visible">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            Our Crew
          </div>
          <h2 className="text-3xl md:text-[2.4rem] font-black text-[#0F172A] tracking-tight">
            Meet the Builders
          </h2>
          <p className="text-slate-500 text-sm max-w-[500px] mx-auto mt-2">
            The design-obsessed partners and engineering minds behind V2 Labs.
          </p>
        </div>
        <TeamCarousel team={team} />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="relative rounded-[32px] bg-[#020B1C] p-10 sm:p-16 text-center text-white overflow-hidden shadow-2xl z-10 mt-16 max-w-[1100px] mx-auto mx-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1161ed] opacity-10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3b82f6] opacity-5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-[650px] mx-auto">
          <h2 className="text-3xl sm:text-[2.5rem] font-black tracking-tight leading-tight mb-4 text-white">
            Let&apos;s Build Your Digital Future
          </h2>
          <p className="text-[#94A3B8] max-w-[520px] mx-auto text-[0.92rem] leading-relaxed mb-8">
            Our engineering team is ready to map your code architectures, visual
            guidelines, or motion sequences. Reach out for a free quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] hover:from-[#0c4ec3] hover:to-[#2563EB] shadow-[0_4px_20px_rgba(17,97,237,0.25)] hover:shadow-[0_8px_30px_rgba(17,97,237,0.4)] text-white font-extrabold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
          >
            Initiate Estimate
          </Link>
        </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
