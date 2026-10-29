"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  angle: number; // Angle in degrees along orbital circle
  delay: number;
  duration: number;
  floatY: number;
}

export default function WhyChooseUsSection() {
  // Center of the main circle on desktop (in px relative to the 780px canvas)
  const cx = 260;
  const cy = 390;
  const R_inner = 300; // Radius of pale ivory circle (diameter 600px)
  const R_orbit = 360; // Radius of orbital arc line (badges sit exactly here)

  const FEATURES: FeatureItem[] = [
    {
      id: "experience",
      title: "Proven Experience",
      subtitle: "10+ Years Building High-Scale Platforms",
      angle: -46, // Top right
      delay: 0,
      duration: 4.8,
      floatY: 5,
      icon: (
        // 5 Stars + User checkmark
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l1.6 3.4 3.7.5-2.7 2.6.6 3.7-3.2-1.7-3.2 1.7.6-3.7-2.7-2.6 3.7-.5z" />
          <path d="M12 14c-3.3 0-6 2.7-6 6v1h12v-1c0-3.3-2.7-6-6-6zm0-2a4 4 0 100-8 4 4 0 000 8z" opacity="0.85" />
          <circle cx="19" cy="19" r="3" fill="#22C55E" />
          <path d="M18 19l1 1 2-2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      id: "affordable",
      title: "Affordable Solutions",
      subtitle: "Founder-Friendly Pricing & High ROI",
      angle: -18, // Upper middle right
      delay: 0.6,
      duration: 5.4,
      floatY: 6,
      icon: (
        // Value seal stamp
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            fill="currentColor"
            fillOpacity="0.25"
          />
        </svg>
      ),
    },
    {
      id: "support",
      title: "Strong Support",
      subtitle: "Direct Slack Access with Lead Engineers",
      angle: 12, // Lower middle right
      delay: 1.1,
      duration: 5.1,
      floatY: 6,
      icon: (
        // Open hands holding team
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="7" r="2.5" fill="currentColor" />
          <circle cx="7" cy="9" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="17" cy="9" r="2" fill="currentColor" opacity="0.8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-2.5 0-4.5 1.5-4.5 3.5V16h9v-1.5c0-2-2-3.5-4.5-3.5z" fill="currentColor" opacity="0.7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 17c1.5 2.5 4.5 4 9 4s7.5-1.5 9-4M4 14c2 1.5 4 2 8 2s6-.5 8-2" />
        </svg>
      ),
    },
    {
      id: "delivery",
      title: "On-Time Delivery",
      subtitle: "High-Velocity Sprints with Zero Delay",
      angle: 40, // Bottom right
      delay: 0.4,
      duration: 5.5,
      floatY: 5,
      icon: (
        // Stopwatch with speed trails
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="13" cy="14" r="7" fill="currentColor" fillOpacity="0.2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10v4l2.5 1.5M11 3h4M3 9h4M2 13h5M3 17h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 7.5L20 6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-[#021430] overflow-hidden select-none py-8 sm:py-12 lg:py-0 border-y border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010D20] via-[#02183D] to-[#003899] opacity-95" />
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#0055DA]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[650px] h-[650px] bg-[#0044B3]/30 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle tech grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "3.5rem 3.5rem",
        }}
      />

      {/* =========================================================================
          DESKTOP VIEW (>= 1024px): Mathematically Aligned Orbital Rings & Cards
          ========================================================================= */}
      <div className="hidden lg:block relative w-full h-[780px] max-w-[1440px] mx-auto overflow-hidden">
        {/* Layer 1: SVG Geometric Concentric Rings and Spinning Orbital Dashes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <defs>
            <radialGradient id="v2BlueGrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0055DA" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#0047C2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#003594" stopOpacity="0.3" />
            </radialGradient>
            <radialGradient id="v2BlueGrad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0044B3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#002870" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Outer Concentric Arc 3 */}
          <circle cx={cx} cy={cy} r={480} fill="url(#v2BlueGrad2)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

          {/* Middle Concentric Arc 2 */}
          <circle cx={cx} cy={cy} r={420} fill="url(#v2BlueGrad1)" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

          {/* Inner Concentric Band 1: The rich blue band right next to the pale circle */}
          <circle cx={cx} cy={cy} r={R_orbit} fill="#0055DA" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />

          {/* ROTATING ORBITAL LINE: Exact white dashed line passing right through badge centers */}
          <g>
            <motion.circle
              cx={cx}
              cy={cy}
              r={R_orbit}
              fill="none"
              stroke="rgba(255, 255, 255, 0.75)"
              strokeWidth="2.5"
              strokeDasharray="12 12"
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
          </g>

          {/* Glowing orbital tracer node spinning along the orbit path */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <circle cx={cx + R_orbit} cy={cy} r={5} fill="#38BDF8" filter="drop-shadow(0 0 8px #38BDF8)" />
          </motion.g>
        </svg>

        {/* Layer 2: Main Pale Ivory Circle (Center: cx=260, cy=390, Radius: 300px) */}
        <div
          className="absolute rounded-full bg-[#FAF8F5] border-[5px] border-white shadow-[0_20px_70px_rgba(0,0,0,0.5)] z-20 flex flex-col justify-center overflow-hidden"
          style={{
            width: `${R_inner * 2}px`,
            height: `${R_inner * 2}px`,
            left: `${cx - R_inner}px`,
            top: `${cy - R_inner}px`,
          }}
        >
          {/* Subtle inner gradient depth */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-transparent to-[#F2EDE4]/50 pointer-events-none" />

          {/* Content inside the pale circle */}
          <div className="relative z-10 pl-16 pr-8">
            <h2 className="text-[3.8rem] xl:text-[4.4rem] font-black leading-[0.94] text-[#1E1B18] tracking-tight font-poppins mb-6 select-none">
              Why <br />
              Choose <br />
              Us?
            </h2>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#0055DA] hover:bg-[#0042AF] text-white font-black text-xs xl:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_8px_20px_rgba(0,85,218,0.35)] hover:shadow-[0_12px_28px_rgba(0,85,218,0.5)] hover:-translate-y-0.5 cursor-pointer"
            >
              LET&apos;S WORK WITH US
            </Link>
          </div>
        </div>

        {/* Layer 3: Feature Pills Mathematically Positioned on the Orbital Ring (R_orbit = 360px) */}
        {FEATURES.map((item) => {
          // Calculate polar coordinates along the orbit path
          const rad = (item.angle * Math.PI) / 180;
          const posX = cx + R_orbit * Math.cos(rad);
          const posY = cy + R_orbit * Math.sin(rad);

          return (
            <motion.div
              key={item.id}
              style={{
                left: `${posX}px`,
                top: `${posY}px`,
                // Shift -28px on X so the circular badge center (radius 28px) sits EXACTLY on (posX, posY)!
                transform: "translate(-28px, -50%)",
              }}
              animate={{
                y: ["-50%", `calc(-50% - ${item.floatY}px)`, "-50%", `calc(-50% + ${item.floatY}px)`, "-50%"],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: item.delay,
              }}
              className="absolute z-30"
            >
              <Link
                href="/contact"
                className="flex items-center bg-[#FAF8F5] rounded-full p-2 pr-7 border-2 border-white/90 shadow-[0_14px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_18px_42px_rgba(0,85,218,0.45)] hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                {/* Circular Blue Icon Badge (56px) sitting directly on the orbit line */}
                <div className="w-[56px] h-[56px] rounded-full bg-[#0055DA] group-hover:bg-[#0042AF] flex items-center justify-center shrink-0 shadow-md transition-colors duration-300 border-2 border-white">
                  {item.icon}
                </div>

                {/* Pill Title & Description */}
                <div className="ml-4 whitespace-nowrap">
                  <h3 className="text-base xl:text-lg font-black text-[#1E1B18] group-hover:text-[#0055DA] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-500 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* =========================================================================
          MOBILE & TABLET VIEW (< 1024px): Seamless, Clean Responsive Flow
          ========================================================================= */}
      <div className="block lg:hidden relative w-full px-4 sm:px-8 z-10 max-w-xl mx-auto">
        {/* Mobile Header Card */}
        <div className="bg-[#FAF8F5] rounded-[36px] p-8 sm:p-10 shadow-2xl border-4 border-white mb-8 text-center sm:text-left relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0055DA]/10 border border-[#0055DA]/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0055DA] animate-pulse" />
            <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#0055DA]">
              V2 Labs Global
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-[#1E1B18] leading-[1.05] font-poppins mb-4">
            Why Choose <br />
            <span className="text-[#0055DA]">Us?</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-6">
            Proven execution, transparent pricing, and 100% on-time delivery with zero agency drag.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#0055DA] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0055DA]/30 w-full sm:w-auto"
          >
            <span>LET&apos;S WORK WITH US →</span>
          </Link>
        </div>

        {/* 4 Feature Pills with Animated Connecting Line */}
        <div className="relative flex flex-col gap-4 pl-2">
          {/* Subtle vertical connection line */}
          <div className="absolute left-[33px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-white/60 via-[#0055DA] to-white/20 pointer-events-none" />

          {FEATURES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10"
            >
              <Link
                href="/contact"
                className="flex items-center bg-[#FAF8F5] rounded-full p-2 pr-6 border-2 border-white shadow-xl cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="w-[50px] h-[50px] rounded-full bg-[#0055DA] flex items-center justify-center shrink-0 shadow-md border-2 border-white">
                  {item.icon}
                </div>
                <div className="ml-3.5">
                  <h3 className="text-sm font-black text-[#1E1B18] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-500 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
