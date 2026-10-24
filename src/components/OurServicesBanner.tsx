"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServicePill {
  label: string;
  type: "filled" | "outlined";
  href: string;
  duration: number;
  delay: number;
  floatY: number;
  floatX: number;
  floatR: number;
}

const PILL_ROWS: ServicePill[][] = [
  // Row 1: matches "DIGITAL MARKETING" (filled) + "ADVERTISING" (outlined) + "AI & AUTOMATION" (filled)
  [
    {
      label: "DIGITAL MARKETING",
      type: "filled",
      href: "/services/digital-marketing",
      duration: 4.8,
      delay: 0,
      floatY: 8,
      floatX: 5,
      floatR: 1.0,
    },
    {
      label: "ADVERTISING",
      type: "outlined",
      href: "/services/digital-marketing",
      duration: 5.6,
      delay: 0.6,
      floatY: 10,
      floatX: -6,
      floatR: -1.2,
    },
    {
      label: "AI & AUTOMATION",
      type: "filled",
      href: "/services/ai-automation",
      duration: 4.4,
      delay: 1.2,
      floatY: 7,
      floatX: 4,
      floatR: 0.8,
    },
  ],
  // Row 2: matches "BRANDING" (outlined) + "GRAPHIC & WEB DESIGN" (filled) + "SAAS PRODUCT DEV" (outlined)
  [
    {
      label: "BRANDING",
      type: "outlined",
      href: "/services/ui-ux-brand",
      duration: 5.4,
      delay: 0.3,
      floatY: 9,
      floatX: -5,
      floatR: -1.0,
    },
    {
      label: "GRAPHIC & WEB DESIGN",
      type: "filled",
      href: "/services/web-platform",
      duration: 4.6,
      delay: 0.9,
      floatY: 8,
      floatX: 6,
      floatR: 0.9,
    },
    {
      label: "SAAS PRODUCT DEV",
      type: "outlined",
      href: "/services/saas-product",
      duration: 6.0,
      delay: 1.5,
      floatY: 9,
      floatX: -4,
      floatR: -0.9,
    },
  ],
  // Row 3: matches "SOCIAL MEDIA MANAGEMENT" (filled) + "CUSTOM ERP / CRM" (outlined) + "BRANDING" (outlined) + "VIDEO & MOTION" (filled)
  [
    {
      label: "SOCIAL MEDIA MANAGEMENT",
      type: "filled",
      href: "/services/digital-marketing",
      duration: 5.1,
      delay: 0.5,
      floatY: 8,
      floatX: 5,
      floatR: 1.1,
    },
    {
      label: "CUSTOM ERP / CRM",
      type: "outlined",
      href: "/services/erp-crm",
      duration: 5.8,
      delay: 1.1,
      floatY: 10,
      floatX: -6,
      floatR: -1.1,
    },
    {
      label: "BRANDING",
      type: "outlined",
      href: "/services/ui-ux-brand",
      duration: 4.9,
      delay: 0.2,
      floatY: 7,
      floatX: 4,
      floatR: 0.9,
    },
    {
      label: "VIDEO & MOTION",
      type: "filled",
      href: "/services/video-motion",
      duration: 4.5,
      delay: 0.8,
      floatY: 8,
      floatX: -4,
      floatR: -0.8,
    },
  ],
];

export default function OurServicesBanner() {
  return (
    <section
      className="relative w-full bg-[#0055DA] overflow-hidden py-16 sm:py-24 md:py-32 px-5 sm:px-10 md:px-16 lg:px-24 select-none border-y border-white/15"
      style={{
        // Full bleed vibrant Brand Logo Blue canvas
        background:
          "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.22) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(0, 50, 160, 0.35) 0%, transparent 50%), #0055DA",
      }}
    >
      {/* Edge-to-edge full width grid texture overlay (exact match to reference image) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.85) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 1px, transparent 1px)
          `,
          backgroundSize: "3.5rem 3.5rem",
        }}
      />

      {/* Atmospheric ambient lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-white/10 rounded-full blur-3xl pointer-events-none" />

      {/* Full width content container */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto flex flex-col justify-between">
        {/* Top Header: "OUR SERVICES" + "WORK WITH US" */}
        <div className="flex flex-row items-start justify-between gap-4 mb-12 sm:mb-16 md:mb-20">
          <div>
            <h2 className="text-[clamp(3.4rem,8.5vw,7.6rem)] font-black uppercase tracking-[-0.03em] leading-[0.88] text-white font-poppins drop-shadow-sm select-none">
              OUR <br />
              SERVICES
            </h2>
          </div>

          {/* Stacked "WORK WITH US" link matching reference image */}
          <div className="pt-2 sm:pt-4 text-right">
            <Link
              href="/contact"
              className="group inline-flex flex-col items-end text-white hover:text-[#FFD166] transition-all duration-300 cursor-pointer"
            >
              <span className="font-black text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase underline underline-offset-4 decoration-2 decoration-white/90 group-hover:decoration-[#FFD166] leading-snug">
                WORK
              </span>
              <span className="font-black text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase underline underline-offset-4 decoration-2 decoration-white/90 group-hover:decoration-[#FFD166] leading-snug flex items-center gap-1.5">
                <span>WITH US</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 font-mono text-sm sm:text-base">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Floating Moving Pills Section ("lili lil moving sect") covering full width */}
        <div className="flex flex-col gap-3.5 sm:gap-4 md:gap-5 w-full">
          {PILL_ROWS.map((row, rIdx) => (
            <div
              key={rIdx}
              className={`flex flex-wrap items-center gap-2.5 sm:gap-4 md:gap-5 w-full ${
                rIdx === 1 ? "sm:pl-8 md:pl-16 lg:pl-20" : rIdx === 2 ? "sm:pl-3 md:pl-6 lg:pl-10" : ""
              }`}
            >
              {row.map((pill, pIdx) => {
                const isFilled = pill.type === "filled";

                return (
                  <motion.div
                    key={pIdx}
                    animate={{
                      y: [0, -pill.floatY, 0, pill.floatY, 0],
                      x: [0, pill.floatX, 0, -pill.floatX, 0],
                      rotate: [0, pill.floatR, 0, -pill.floatR, 0],
                    }}
                    transition={{
                      duration: pill.duration,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: pill.delay,
                    }}
                    whileHover={{
                      scale: 1.06,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block cursor-pointer"
                  >
                    <Link
                      href={pill.href}
                      className={`inline-flex items-center justify-center px-5 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full font-black text-xs sm:text-sm md:text-base tracking-wider uppercase transition-all duration-300 select-none ${
                        isFilled
                          ? "bg-white text-[#0055DA] hover:bg-white/95 shadow-[0_12px_28px_rgba(0,0,0,0.16)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
                          : "bg-transparent text-[#FFD166] border-2 border-[#FFD166] hover:bg-[#FFD166]/15 hover:shadow-[0_8px_24px_rgba(255,209,102,0.28)]"
                      }`}
                    >
                      {pill.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
