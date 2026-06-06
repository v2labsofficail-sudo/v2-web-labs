"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  quote: string;
  gradient: string;
  linkedin: string;
  github: string;
  bio: string;
  img?: string;
}

interface TeamCarouselProps {
  team: TeamMember[];
}

export default function TeamCarousel({ team }: TeamCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft;
    
    const children = container.children;
    if (children.length === 0) return;
    
    const cardWidth = (children[0] as HTMLElement).offsetWidth;
    const gap = 32;
    const step = cardWidth + gap;
    
    const calculatedIndex = Math.round(scrollPosition / step);
    const clampedIndex = Math.max(0, Math.min(calculatedIndex, team.length - 1));
    setActiveIndex(clampedIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    setIsDragActive(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    setIsDragActive(false);
  };

  const handleCardClick = (e: React.MouseEvent, member: TeamMember) => {
    if (isDragging.current) return;
    setSelectedMember(member);
    setShowModal(true);
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const children = container.children;
    if (children.length === 0) return;
    
    const cardWidth = (children[0] as HTMLElement).offsetWidth;
    const gap = 32;
    const step = cardWidth + gap;
    
    container.scrollTo({
      left: index * step,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex === 0 ? team.length - 1 : activeIndex - 1;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === team.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIdx);
  };

  return (
    <div className="relative w-full overflow-visible z-10 px-2 sm:px-6">
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#1161ed]/5 rounded-full blur-[80px] pointer-events-none -z-10" />
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#3b82f6]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-6 px-4 md:px-12 select-none scroll-smooth ${
          isDragActive ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        {team.map((member, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              className={`snap-center shrink-0 w-[290px] sm:w-[325px] md:w-[340px] bg-white rounded-3xl border border-black/[0.03] p-6 shadow-sm transition-all duration-500 flex flex-col items-center text-center relative group overflow-hidden ${
                isActive 
                  ? "scale-[1.03] md:scale-[1.05] border-[#1161ed]/30 shadow-[0_20px_50px_rgba(17,97,237,0.12)] z-10" 
                  : "opacity-80 scale-95 hover:opacity-100 hover:scale-[0.98] duration-300"
              }`}
            >
              <div className={`absolute -inset-[1px] bg-gradient-to-br from-[#1161ed] to-[#3b82f6] rounded-3xl -z-10 blur-[4px] transition-opacity duration-300 ${
                isActive 
                  ? "opacity-30 animate-pulse" 
                  : "opacity-0 group-hover:opacity-30"
              }`} />

              <div 
                className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-inner cursor-pointer"
                onClick={(e) => handleCardClick(e, member)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-90 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-6 text-white text-left`}>
                  <span className="text-[1.8rem] font-black tracking-widest leading-none drop-shadow-sm">{member.initials}</span>
                  <div className="flex flex-col">
                    <span className="text-[0.68rem] font-black uppercase tracking-widest text-white/80 mb-0.5 leading-none">Studio DNA</span>
                    <span className="text-xs font-bold leading-normal italic">&quot;{member.quote}&quot;</span>
                  </div>
                </div>

                {member.img && (
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    loading="lazy"
                    className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                      setShowModal(true);
                    }}
                    className="px-4 py-2 rounded-full bg-white text-slate-900 font-extrabold text-xs tracking-wider uppercase shadow-md hover:scale-105 active:scale-95 transition-transform"
                  >
                    View Full Bio
                  </button>
                  <div className="flex gap-2 mt-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white hover:text-[#1161ed] flex items-center justify-center transition-all shadow-sm font-bold text-xs"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white hover:text-[#0F172A] flex items-center justify-center transition-all shadow-sm font-bold text-xs"
                      aria-label="GitHub"
                    >
                      git
                    </a>
                  </div>
                </div>
              </div>

              <span className="text-[0.72rem] font-black uppercase tracking-widest text-[#1161ed] mb-1.5 leading-none">{member.role}</span>
              <h3 className="text-lg font-black text-slate-900 mb-2 transition-colors group-hover:text-[#1161ed]">{member.name}</h3>
              
              <button 
                onClick={(e) => handleCardClick(e, member)}
                className="mt-3 text-[0.72rem] font-black uppercase tracking-wider text-[#1161ed] hover:text-[#0c4ec3] flex items-center gap-1 transition-colors"
              >
                Read Journey
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[1100px] mx-auto px-6 mt-4">
        <div className="w-full sm:w-1/3 h-[2px] bg-slate-200 rounded-full relative overflow-hidden hidden md:block">
          <div 
            className="absolute top-0 bottom-0 left-0 bg-[#1161ed] transition-all duration-300 rounded-full"
            style={{
              width: `${((activeIndex + 1) / team.length) * 100}%`
            }}
          />
        </div>

        <div className="flex gap-2">
          {team.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "w-8 bg-[#1161ed]" 
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md text-slate-800 flex items-center justify-center hover:bg-white hover:text-[#1161ed] hover:border-[#1161ed]/30 active:scale-95 hover:shadow-lg transition-all"
            aria-label="Previous Team Member"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md text-slate-800 flex items-center justify-center hover:bg-white hover:text-[#1161ed] hover:border-[#1161ed]/30 active:scale-95 hover:shadow-lg transition-all"
            aria-label="Next Team Member"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {showModal && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-md transition-opacity duration-300 animate-fadeIn" 
          />
          
          <div className="bg-white border border-slate-200 rounded-[32px] w-full max-w-[550px] overflow-hidden shadow-2xl relative z-10 flex flex-col animate-scaleUp">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors font-bold text-sm"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={`w-full py-10 px-8 bg-gradient-to-br ${selectedMember.gradient} text-white flex items-center gap-6 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-md shrink-0 relative">
                {selectedMember.img ? (
                  <Image 
                    src={selectedMember.img} 
                    alt={selectedMember.name} 
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[2.2rem] font-black select-none text-white">{selectedMember.initials}</span>
                )}
              </div>

              <div>
                <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/80 block mb-0.5 leading-none">Studio Builder</span>
                <h4 className="text-2xl font-black tracking-tight leading-tight">{selectedMember.name}</h4>
                <p className="text-xs font-semibold text-white/90 mt-1">{selectedMember.role}</p>
              </div>
            </div>

            <div className="p-8 text-slate-800 flex-1">
              <div className="mb-6">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#1161ed] block mb-2">Core Philosophy</span>
                <p className="text-slate-600 text-sm italic font-medium leading-relaxed bg-[#1161ed]/[0.03] border-l-2 border-[#1161ed] p-3.5 rounded-r-xl">
                  &quot;{selectedMember.quote}&quot;
                </p>
              </div>

              <div className="mb-6">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-400 block mb-2">Professional Background & Bio</span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={selectedMember.linkedin}
                    className="px-4 py-2 rounded-xl bg-[#1161ed]/[0.08] hover:bg-[#1161ed] text-[#1161ed] hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={selectedMember.github}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-900 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    GitHub
                  </a>
                </div>

                <button 
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
