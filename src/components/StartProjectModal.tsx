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
      className="fixed inset-0 z-[1300] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-[500px] bg-[#FAF8F5] text-neutral-900 rounded-[32px] border-[2.5px] border-black p-6 sm:p-8 max-h-[95vh] overflow-y-auto my-auto"
        style={{ boxShadow: "6px 6px 0px #000000" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 7-Step Brand Inquiry Flow in Brand Blue */}
        <ProjectInquiryForm variant="modal" onClose={onClose} />
      </div>
    </div>
  );
}
