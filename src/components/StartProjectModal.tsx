"use client";

import React, { useEffect } from "react";
import ProjectInquiryForm from "./ProjectInquiryForm";

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartProjectModal({ isOpen, onClose }: StartProjectModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1300] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 p-6 sm:p-8 max-h-[92vh] overflow-y-auto my-auto animate-modalSlideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0055DA]/10 text-[#0055DA] text-[10px] font-black uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0055DA] animate-pulse" />
            Project Consultation & Quote
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Start a Project with V2 Labs
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">
            Complete the 4 quick steps below and our senior solutions architect will get back to you with custom architecture & quote within 24 hours.
          </p>
        </div>

        {/* Multi-step Form */}
        <ProjectInquiryForm variant="modal" onClose={onClose} />
      </div>
    </div>
  );
}
