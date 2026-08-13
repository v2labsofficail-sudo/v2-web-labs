"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
};

export default function FaqSection({ items }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="mb-24 relative z-10 max-w-[1100px] mx-auto">
      <div className="text-center md:text-left mb-12">
        <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-3">
          FAQ
        </div>
        <h2 className="text-2xl sm:text-[2rem] font-black text-[#0F172A] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-[#111111] text-sm mt-2 max-w-[650px]">
          Answering common inquiries about our custom engineering capabilities, pricing models, and development processes.
        </p>
      </div>

      <div className="space-y-4 max-w-[850px]">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200/80 rounded-2xl bg-white shadow-[0_2px_8px_rgba(15,23,42,0.01)] transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#111111]/[0.01] transition-colors"
                id={`faq-btn-${idx}`}
                aria-expanded={isOpen}
              >
                <span className="font-extrabold text-sm sm:text-base text-slate-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#0055DA]" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                <div className="px-6 py-5 text-xs sm:text-sm text-[#2A2A2A] leading-relaxed font-medium bg-slate-50/30">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
