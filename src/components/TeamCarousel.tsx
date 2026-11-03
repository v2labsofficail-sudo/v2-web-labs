"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  quote: string;
  gradient?: string;
  linkedin: string;
  instagram: string;
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

  // Close modal on Escape key and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

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
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-black/5 rounded-full blur-[80px] pointer-events-none -z-10" />
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-black/5 rounded-full blur-[80px] pointer-events-none -z-10" />

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
              className={`snap-center shrink-0 w-[290px] sm:w-[325px] md:w-[340px] bg-white rounded-3xl border p-6 transition-all duration-500 flex flex-col items-center text-center relative group overflow-hidden ${
                isActive 
                  ? "scale-[1.03] md:scale-[1.05] border-black/25 shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-10" 
                  : "border-black/[0.06] opacity-85 scale-95 hover:opacity-100 hover:scale-[0.98] hover:border-black/20 hover:shadow-lg duration-300"
              }`}
            >
              {/* Image Frame */}
              <div 
                className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-5 relative bg-neutral-900 flex items-center justify-center shadow-inner cursor-pointer"
                onClick={(e) => handleCardClick(e, member)}
              >
                {/* Fallback Initials / Backplate */}
                <div className="absolute inset-0 bg-neutral-950 flex flex-col justify-between p-6 text-white text-left">
                  <span className="text-[1.8rem] font-black tracking-widest leading-none drop-shadow-sm">{member.initials}</span>
                  <div className="flex flex-col">
                    <span className="text-[0.68rem] font-black uppercase tracking-widest text-neutral-400 mb-0.5 leading-none">Studio DNA</span>
                    <span className="text-xs font-bold leading-normal italic">&quot;{member.quote}&quot;</span>
                  </div>
                </div>

                {member.img && (
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 290px, (max-width: 768px) 325px, 340px"
                    loading="lazy"
                    className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Sleek Pure Black Hover Overlay */}
                <div className="absolute inset-0 bg-black/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                      setShowModal(true);
                    }}
                    className="px-5 py-2.5 rounded-full bg-white text-black font-extrabold text-[0.7rem] tracking-widest uppercase shadow-lg hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all"
                  >
                    View Full Bio
                  </button>
                  <div className="flex gap-2.5">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 shadow-md"
                      aria-label="LinkedIn"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 shadow-md"
                      aria-label="Instagram"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Role Pill */}
              <div className="mb-2.5 inline-flex min-h-[2.8rem] items-center justify-center rounded-full border border-black/10 bg-neutral-100 px-4 py-2 shadow-sm">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-neutral-800 leading-relaxed">
                  {member.role}
                </span>
              </div>

              {/* Member Name in Pure Solid Black */}
              <h3 className="mb-2 text-[1.25rem] font-black tracking-tight text-black transition-all duration-300">
                {member.name}
              </h3>
              
              <button 
                onClick={(e) => handleCardClick(e, member)}
                className="mt-2 text-[0.72rem] font-extrabold uppercase tracking-wider text-black hover:text-neutral-600 flex items-center gap-1.5 transition-colors group/btn"
              >
                Read Bio
                <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      {/* Progress & Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[1100px] mx-auto px-6 mt-4">
        <div className="w-full sm:w-1/3 h-[2px] bg-neutral-200 rounded-full relative overflow-hidden hidden md:block">
          <div 
            className="absolute top-0 bottom-0 left-0 bg-black transition-all duration-300 rounded-full"
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
                    ? "w-8 bg-black" 
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-neutral-300 bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black active:scale-95 hover:shadow-lg transition-all"
            aria-label="Previous Team Member"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-neutral-300 bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black active:scale-95 hover:shadow-lg transition-all"
            aria-label="Next Team Member"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* UNIQUE, CLEAN, EASY FULL BIO MODAL */}
      {showModal && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Backdrop */}
          <div 
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300" 
          />
          
          {/* Modal Container */}
          <div className="bg-white border border-neutral-200 rounded-[28px] w-full max-w-[560px] overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh]">
            
            {/* Top Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 z-30 w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all font-bold text-sm border border-white/20"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Header: Pure Modern Obsidian / Black Styling (No pink or mixed colors) */}
            <div className="w-full py-8 px-7 bg-neutral-950 text-white flex items-center gap-5 relative overflow-hidden border-b border-neutral-800">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-neutral-800 border-2 border-white/20 flex items-center justify-center overflow-hidden shadow-xl shrink-0 relative">
                {selectedMember.img ? (
                  <Image 
                    src={selectedMember.img} 
                    alt={selectedMember.name} 
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[2rem] font-black select-none text-white">{selectedMember.initials}</span>
                )}
              </div>

              <div className="flex-1 pr-8">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-neutral-400 block mb-1">
                  Team Member
                </span>
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                  {selectedMember.name}
                </h4>
                <p className="text-xs font-semibold text-neutral-300 mt-1">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            {/* Modal Body: Clean, Airy & Unique Editorial Typography */}
            <div className="p-7 overflow-y-auto flex-1 space-y-5 text-neutral-800">
              
              {/* Philosophy Quote */}
              <div>
                <span className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-neutral-500 block mb-1.5">
                  Core Philosophy
                </span>
                <p className="text-neutral-900 text-sm font-semibold italic leading-relaxed bg-neutral-50 border-l-4 border-black p-4 rounded-r-2xl">
                  &quot;{selectedMember.quote}&quot;
                </p>
              </div>

              {/* Bio Details */}
              <div>
                <span className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-neutral-500 block mb-1.5">
                  Professional Background
                </span>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-black text-neutral-900 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={selectedMember.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-black text-neutral-900 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    Instagram
                  </a>
                </div>

                <button 
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white font-extrabold text-xs uppercase tracking-wider transition-all active:scale-95"
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
