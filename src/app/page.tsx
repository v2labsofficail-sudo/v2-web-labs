"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildFaqJsonLd } from "@/lib/seo";
import ScrollReveal from "@/components/ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Aris Thorne",
    role: "Founder, SynthFlow AI",
    initials: "AT",
    quote:
      "V2Labs shipped our MVP in just 18 days. The speed, clarity, and finish quality gave our launch a serious edge.",
  },
  {
    name: "Sarah Chen",
    role: "Co-Founder, MedLink",
    initials: "SC",
    quote:
      "The product feels premium on every screen. Their mobile-first thinking helped us convert more users from day one.",
  },
  {
    name: "Devin Patel",
    role: "Founder, GrowthPilot",
    initials: "DP",
    quote:
      "They made the frontend incredibly smooth and fast. Our landing page conversion rate jumped within the first week.",
  },
  {
    name: "Maya Verma",
    role: "CEO, NovaDesk",
    initials: "MV",
    quote:
      "Design and development finally felt aligned. Every detail was thoughtful, and the final experience matched our brand perfectly.",
  },
  {
    name: "Nikhil Rao",
    role: "Founder, FleetOps",
    initials: "NR",
    quote:
      "We needed clean execution without agency drag. V2Labs moved like an in-house product team and delivered with confidence.",
  },
  {
    name: "Laura Winters",
    role: "Product Lead, CoreStack",
    initials: "LW",
    quote:
      "The UI feels modern, calm, and trustworthy. Our customers noticed the polish immediately after the redesign went live.",
  },
  {
    name: "Jason Reed",
    role: "Founder, PulseCart",
    initials: "JR",
    quote:
      "Their structure, communication, and delivery speed were excellent. We always knew what was happening and what came next.",
  },
  {
    name: "Priya Malhotra",
    role: "Co-Founder, SkillMint",
    initials: "PM",
    quote:
      "They turned a rough concept into a sharp product experience. The responsive layouts feel especially good on smaller devices.",
  },
  {
    name: "Cory Zamora",
    role: "Marketing Specialist, Influx",
    initials: "CZ",
    quote:
      "The final product looks elevated and performs beautifully. It gave our team a much stronger foundation to scale from.",
  },
  {
    name: "Alex Rivera",
    role: "Founder, ApexLabs",
    initials: "AR",
    quote:
      "V2Labs exceeded all expectations. The custom animations are fluid, and the page loading speeds are absolutely blazing fast.",
  },
] as const;

const TESTIMONIALS_ROW_1 = TESTIMONIALS.slice(0, 5);
const TESTIMONIALS_ROW_2 = TESTIMONIALS.slice(5, 10);

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <article className="w-[300px] sm:w-[350px] md:w-[400px] shrink-0 bg-transparent p-4 transition-all duration-300 hover:scale-[1.015] select-none">
      <div className="mb-3 flex items-center gap-1 text-[#f5b301]">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className="h-3.5 w-3.5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.75l2.86 5.79 6.39.93-4.62 4.5 1.09 6.36L12 17.32l-5.72 3.01 1.09-6.36-4.62-4.5 6.39-.93L12 2.75z" />
          </svg>
        ))}
      </div>

      <p className="text-[0.84rem] sm:text-[0.92rem] md:text-[0.98rem] font-semibold leading-[1.65] text-[#1E293B] italic">
        &quot;{testimonial.quote}&quot;
      </p>

      <div className="mt-4 flex items-center gap-3.5 pt-3.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1161ed] to-[#3b82f6] text-[0.68rem] font-extrabold text-white shadow-[0_3px_8px_rgba(17,97,237,0.15)]">
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[0.8rem] sm:text-[0.84rem] font-black tracking-tight text-[#0F172A]">
            {testimonial.name}
          </p>
          <p className="truncate text-[0.64rem] sm:text-[0.68rem] font-bold text-[#64748B]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function MouseTrackingAnimation() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const parent = container.parentElement || container;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const mouse = { x: -1000, y: -1000, active: false, motion: 0 };

    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initNodes();
    };

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      radius: number;
    }

    let nodes: Node[] = [];
    const connectionDist = 115; // Adjusted slightly to maintain clean grid paths with higher density
    const spotlightRadius = 250; // Active glow spotlight field

    // Dynamically adjust node count based on screen width to optimize mobile layout and rendering
    const getNodeCount = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          return 130; // Clean, high-performance node density for mobile screens
        } else if (window.innerWidth < 1024) {
          return 240; // Beautiful density for tablet screens
        }
      }
      return 450; // Denser mesh for desktop monitors to fill white space
    };

    // Evenly distribute nodes initially across full bounds
    const initNodes = () => {
      nodes = [];
      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) return;

      const activeNodeCount = getNodeCount();
      for (let i = 0; i < activeNodeCount; i++) {
        const vx = (Math.random() - 0.5) * 0.45;
        const vy = (Math.random() - 0.5) * 0.45;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: vx,
          vy: vy,
          baseVx: vx,
          baseVy: vy,
          radius: Math.random() * 1.5 + 1.2,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
      mouse.motion = 1.0; // Instantly boost motion energy when the mouse moves

      container.style.setProperty("--mouse-x", `${mouse.x}px`);
      container.style.setProperty("--mouse-y", `${mouse.y}px`);
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
      mouse.motion = 0; // Reset motion energy instantly
      container.style.setProperty("--mouse-x", `-1000px`);
      container.style.setProperty("--mouse-y", `-1000px`);
    };

    // Detect touch-screen / mobile devices to avoid synthetic tap tracking clumping
    const isTouchDevice =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0);

    window.addEventListener("resize", resizeCanvas);
    if (!isTouchDevice) {
      parent.addEventListener("mousemove", onMouseMove);
      parent.addEventListener("mouseleave", onMouseLeave);
    }

    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      // Smoothly decay mouse motion if stationary
      if (mouse.active) {
        mouse.motion += (0 - mouse.motion) * 0.015;
      } else {
        mouse.motion = 0;
      }

      // Update particle positions and magnetic drag
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < spotlightRadius) {
            // Ambient pull towards cursor at distance, but gently repel when very close to prevent clumping
            let force = (spotlightRadius - dist) / spotlightRadius;
            if (dist < 50) {
              // Create a 50px soft exclusion bubble under the cursor
              force = -0.6 * (1 - dist / 50);
            }
            // Pull strength decays as the mouse becomes stationary to let particles float back naturally
            const pullStrength = 0.025 * force * mouse.motion;
            node.vx += (dx / dist) * pullStrength;
            node.vy += (dy / dist) * pullStrength;

            // Maintain smooth, premium speed boundaries
            const maxSpeed = 1.2;
            const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
            if (speed > maxSpeed) {
              node.vx = (node.vx / speed) * maxSpeed;
              node.vy = (node.vy / speed) * maxSpeed;
            }
          } else {
            // Decay back to base floating drift speed
            node.vx += (node.baseVx - node.vx) * 0.05;
            node.vy += (node.baseVy - node.vy) * 0.05;
          }
        } else {
          node.vx += (node.baseVx - node.vx) * 0.05;
          node.vy += (node.baseVy - node.vy) * 0.05;
        }

        // Apply velocity
        node.x += node.vx;
        node.y += node.vy;

        // Bouncing edge boundaries
        if (node.x < 0) {
          node.x = 0;
          node.vx *= -1;
          node.baseVx *= -1;
        } else if (node.x > width) {
          node.x = width;
          node.vx *= -1;
          node.baseVx *= -1;
        }

        if (node.y < 0) {
          node.y = 0;
          node.vy *= -1;
          node.baseVy *= -1;
        } else if (node.y > height) {
          node.y = height;
          node.vy *= -1;
          node.baseVy *= -1;
        }
      }

      // Render nodes & connections globally (faint overlay) with dynamic spotlight illuminating active links
      const hasConnection = new Set<number>();
      ctx.lineWidth = 0.85;

      // 1. Pre-calculate all distance vectors to the mouse for performance
      const mouseDistances = nodes.map((node) => {
        if (!mouse.active) return { dist: Infinity, opacity: 0.28 };
        const dist = Math.sqrt(
          (mouse.x - node.x) ** 2 + (mouse.y - node.y) ** 2,
        );

        // Base ambient opacity is 28%, adding up to 57% boost as the mouse approaches
        const boost =
          dist < spotlightRadius ? (1 - dist / spotlightRadius) * 0.57 * mouse.motion : 0;
        return {
          dist,
          opacity: 0.28 + boost,
        };
      });

      // 2. Draw standard grid connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        const stateA = mouseDistances[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          if (Math.abs(dx) >= connectionDist) continue;
          const dy = nodeA.y - nodeB.y;
          if (Math.abs(dy) >= connectionDist) continue;

          const distAB = Math.sqrt(dx * dx + dy * dy);

          if (distAB < connectionDist) {
            hasConnection.add(i);
            hasConnection.add(j);

            const stateB = mouseDistances[j];

            // Connection line is clearly visible globally, lights up when near the cursor
            const baseLineOpacity = 0.16; // Increased from 0.12 for better ambient visibility
            const boostFactor = Math.max(
              stateA.opacity - 0.28,
              stateB.opacity - 0.28,
            );
            const distanceFactor = 1 - distAB / connectionDist;
            const lineOpacity =
              (baseLineOpacity + boostFactor * 0.35) * distanceFactor;

            ctx.strokeStyle = `rgba(17, 97, 237, ${lineOpacity})`;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // 3. Guaranteed Nearest Neighbor connection for isolated nodes
      for (let i = 0; i < nodes.length; i++) {
        if (!hasConnection.has(i)) {
          let closestIndex = -1;
          let minDistance = Infinity;

          for (let j = 0; j < nodes.length; j++) {
            if (i === j) continue;
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDistance) {
              minDistance = dist;
              closestIndex = j;
            }
          }

          if (closestIndex !== -1) {
            const nodeA = nodes[i];
            const nodeB = nodes[closestIndex];
            const stateA = mouseDistances[i];
            const stateB = mouseDistances[closestIndex];

            const baseLineOpacity = 0.14; // Increased from 0.10
            const boostFactor = Math.max(
              stateA.opacity - 0.28,
              stateB.opacity - 0.28,
            );
            const lineOpacity = baseLineOpacity + boostFactor * 0.2;

            ctx.strokeStyle = `rgba(17, 97, 237, ${lineOpacity})`;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();

            hasConnection.add(i);
            hasConnection.add(closestIndex);
          }
        }
      }

      // 4. Draw particle points on top
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const state = mouseDistances[i];

        ctx.fillStyle = `rgba(17, 97, 237, ${state.opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Secondary glowing halos under active spotlights
        if (state.opacity > 0.65) {
          ctx.strokeStyle = `rgba(6, 182, 212, ${(state.opacity - 0.65) * 0.4})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-slate-50/20"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.015) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
    >
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#1161ed]/[0.025] rounded-full blur-[110px] pointer-events-none select-none animate-pulse duration-[12s]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#06b6d4]/[0.015] rounded-full blur-[100px] pointer-events-none select-none animate-pulse duration-[8s]" />

      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(17, 97, 237, 0.05) 0%, rgba(6, 182, 212, 0.02) 45%, transparent 75%)`,
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}

const PARTNER_COMPANIES = [
  { name: "Caldreplus", logo: "/companies/calendar-plus.jpeg" },
  { name: "Freelancer Wala", logo: "/companies/freelancer-wala.jpeg" },
  { name: "Meckon Flex", logo: "/companies/meckon-flex.jpeg" },
  { name: "Naya-Job", logo: "/companies/naya-job.jpeg" },
  { name: "Placfy AI", logo: "/companies/placfy-ai.jpeg" },
  { name: "ThinknShop", logo: "/companies/thinkn-shop.jpeg" },
  { name: "WebProArts", logo: "/companies/webpro-arts.jpeg" },
] as const;

function TiltIllustration() {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;

    setCoords({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] lg:max-w-full transition-all duration-500 ease-out cursor-pointer select-none"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.03, 1.03, 1.03)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className={`${isHovered ? "" : "animate-float"} gpu-accelerated relative w-full h-[380px] bg-slate-950/90 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden`}>
        {/* Browser control header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 select-none" style={{ transform: "translateZ(20px)" }}>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="bg-slate-900 border border-slate-800 px-4 py-0.5 rounded-full text-[10px] text-slate-500 font-mono tracking-tight w-1/2 text-center">
            app.v2labs.com/designer
          </div>
          <div className="w-6" /> {/* spacer */}
        </div>

        {/* Browser Content */}
        <div className="flex-1 grid grid-cols-12 gap-3" style={{ transform: "translateZ(35px)" }}>
          {/* Sidebar */}
          <div className="col-span-3 border-r border-slate-800/60 pr-2 flex flex-col gap-2.5">
            <div className="h-6 bg-slate-900 rounded-lg w-full flex items-center justify-center font-poppins text-[9px] text-[#1161ed] font-bold border border-[#1161ed]/15 bg-[#1161ed]/5">
              Canvas
            </div>
            <div className="h-6 bg-slate-900/40 rounded-lg w-full flex items-center justify-center font-poppins text-[9px] text-slate-500 font-bold border border-transparent hover:border-slate-800 transition-colors">
              AI Flows
            </div>
            <div className="h-6 bg-slate-900/40 rounded-lg w-full flex items-center justify-center font-poppins text-[9px] text-slate-500 font-bold border border-transparent hover:border-slate-800 transition-colors">
              Integrations
            </div>
            <div className="mt-auto h-6 bg-slate-900/40 rounded-lg w-full flex items-center justify-center font-poppins text-[9px] text-slate-500 font-bold border border-transparent hover:border-slate-800 transition-colors">
              Settings
            </div>
          </div>

          {/* Designer Canvas */}
          <div className="col-span-9 flex flex-col gap-3">
            {/* Toolbar status */}
            <div className="flex items-center justify-between">
              <span className="font-poppins text-[10px] font-bold text-slate-400">Design Preview</span>
              <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] px-2 py-0.5 rounded-full font-bold leading-none">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                Live Sync
              </span>
            </div>

            {/* Premium Signature Preview Box */}
            <div className="flex-1 bg-white border border-slate-200 shadow-lg rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group/sig">
              {/* Grid Background Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:12px_12px] opacity-[0.25] pointer-events-none" />
              
              <div className="relative z-10 flex gap-3.5 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1161ed] to-[#3b82f6] text-white flex items-center justify-center font-poppins font-black text-sm shadow-[0_4px_12px_rgba(17,97,237,0.18)]">
                  AT
                </div>
                <div>
                  <h4 className="font-poppins text-[0.88rem] font-black text-slate-900 leading-none mb-1">Alex Thorne</h4>
                  <p className="font-poppins text-[0.66rem] font-bold text-[#1161ed] leading-none mb-2">Founder & CEO, SynthFlow AI</p>
                  <div className="flex flex-col gap-1 text-[0.6rem] font-bold text-slate-400">
                    <span className="flex items-center gap-1">✉ alex@synthflow.ai</span>
                    <span className="flex items-center gap-1">☏ +1 (555) 019-2834</span>
                  </div>
                </div>
              </div>

              {/* Dynamic divider line */}
              <div className="relative z-10 h-px bg-gradient-to-r from-[#1161ed] via-slate-200 to-transparent my-3" />

              {/* Company banner area */}
              <div className="relative z-10 flex justify-between items-center text-[0.55rem] font-black text-slate-400 uppercase tracking-widest leading-none">
                <span>V2Labs engineered product</span>
                <span className="text-[#1161ed] tracking-wider leading-none">synthflow.ai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating statistics/glowing cards */}
        <div 
          className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center gap-2.5 transition-transform duration-500 hover:scale-105 pointer-events-auto"
          style={{ transform: "translateZ(65px)" }}
        >
          <div className="w-8 h-8 rounded-xl bg-[#1161ed]/10 text-[#1161ed] flex items-center justify-center font-black text-sm">
            ⚡
          </div>
          <div className="text-left font-poppins">
            <p className="text-[10px] font-black text-slate-800 uppercase tracking-wider leading-none">99.9% Delivery</p>
            <p className="text-[8px] font-bold text-slate-400 mt-1 leading-none">Global cloud sync</p>
          </div>
        </div>

        <div 
          className="absolute -bottom-4 -right-4 bg-slate-900/95 backdrop-blur-md border border-slate-800/80 rounded-2xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.15)] flex items-center gap-2.5 transition-transform duration-500 hover:scale-105 pointer-events-auto"
          style={{ transform: "translateZ(55px)" }}
        >
          <div className="w-8 h-8 rounded-xl bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center font-black text-sm">
            📈
          </div>
          <div className="text-left font-poppins">
            <p className="text-[10px] font-black text-white uppercase tracking-wider leading-none">+148% CTR</p>
            <p className="text-[8px] font-bold text-slate-500 mt-1 leading-none">Campaign growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const FAQS = [
    {
      question: "What core services does V2Labs specialize in?",
      answer:
        "V2Labs specializes in high-velocity SaaS & product development, custom ERP & CRM solutions, AI-ready automations, sub-second React/Next.js platforms, cinematic post-production video editing, and complete brand design systems.",
    },
    {
      question: "How quickly can V2Labs deliver a production-ready MVP?",
      answer:
        "We move with startup speed. A standard MVP takes 2 to 4 weeks depending on the complexity. We launch fast, gather active user feedback, and iterate in rapid, continuous cycles.",
    },
    {
      question: "Do you offer long-term support and maintenance post-launch?",
      answer:
        "Yes. We act as a dedicated engineering partner, providing ongoing feature updates, database scaling, server optimizations, and UX modifications as your product grows.",
    },
    {
      question: "How does V2Labs collaborate with our internal team?",
      answer:
        "We operate with a founder's mindset. We communicate directly via Slack, collaborate in GitHub, maintain clear Linear boards, and eliminate typical agency overhead.",
    },
    {
      question: "What technology stack does V2Labs build on?",
      answer:
        "We select and utilize the optimal technology stack according to each client's unique requirements, objectives, and existing infrastructure. While we have deep expertise in modern tools like Next.js, React, Tailwind CSS, TypeScript, Node.js, Django, PostgreSQL, and native AI SDKs (OpenAI, Gemini, Claude), we always prioritize the best fit for your specific project.",
    },
    {
      question: "Can you build custom AI models and automations?",
      answer:
        "Yes. We specialize in building custom AI integrations, autonomous agentic grids, semantic vector database lookups, and specialized LLM pipelines tailored to your business needs.",
    },
    {
      question: "Are your platforms optimized for Core Web Vitals and SEO?",
      answer:
        "Absolutely. Every platform we build is engineered for sub-second loading speeds, clean Core Web Vitals, semantic HTML structures, and immediate search index authority.",
    },
    {
      question: "Who owns the project intellectual property (IP)?",
      answer:
        "You do. The client retains 100% ownership of the custom code, designs, and intellectual property from day one, with complete transfer upon project completion.",
    },
    {
      question: "How do you handle pricing and project estimates?",
      answer:
        "We offer transparent, milestone-based pricing or flexible monthly retainer models depending on your startup's roadmap, ensuring complete budget clarity.",
    },
    {
      question: "How do we kickstart our project with V2Labs today?",
      answer:
        "Simply reach out via contact@v2labsglobal.com or click 'Get Started' to schedule a direct discovery consultation with our product and engineering team.",
    },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const PROCESS_STEPS = [
    {
      step: "01",
      title: "Discovery & Consultation",
      desc: "Deep analysis of your objectives, audience, and scope to align expectations.",
      isTop: true,
      icon: (
        <svg
          className="w-7 h-7 text-[#1161ed]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
          <circle cx="10" cy="10" r="3" fill="#1161ed" opacity="0.15" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Planning & Roadmap",
      desc: "Structuring a robust development pipeline with concrete sprint schedules.",
      isTop: false,
      icon: (
        <svg
          className="w-7 h-7 text-[#1161ed]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
          <polygon points="9 7 15 4 15 17 9 20" fill="#1161ed" opacity="0.15" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Design & Prototyping",
      desc: "Creating pixel-perfect layout flows, atomic UI components, and Figma mockups.",
      isTop: true,
      icon: (
        <svg
          className="w-7 h-7 text-[#1161ed]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
          <path
            d="M6.5 21.036H3v-3.572L14 7l3.5 3.5-11 10.536z"
            fill="#1161ed"
            opacity="0.15"
          />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Development",
      desc: "Writing clean Next.js scripts, setting up APIs, and scaling database schema.",
      isTop: false,
      icon: (
        <svg
          className="w-7 h-7 text-[#1161ed]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      step: "05",
      title: "QA Testing & Launch",
      desc: "Executing thorough system validation audits and deploying safely to production.",
      isTop: true,
      icon: (
        <svg
          className="w-7 h-7 text-[#1161ed]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 3.84a14.98 14.98 0 00-6.16 12.12c0 2.3.52 4.49 1.46 6.45M18 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <circle cx="16" cy="10" r="2" fill="#1161ed" opacity="0.15" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "Growth & Support",
      desc: "Continuous backend updates, SEO authority sweeps, and proactive optimizations.",
      isTop: false,
      icon: (
        <svg
          className="w-7 h-7 text-[#1161ed]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
          <polygon points="13 7 21 7 21 15" fill="#1161ed" opacity="0.15" />
        </svg>
      ),
    },
  ];

  const faqJson = buildFaqJsonLd(FAQS);

  return (
    <div className="container mx-auto px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1161ed/[0.012]_1px,transparent_1px),linear-gradient(to_bottom,#1161ed/[0.012]_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20 pointer-events-none" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#1161ed]/[0.03] rounded-full blur-[130px] pointer-events-none select-none -z-10" />
      <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-[#1161ed]/[0.02] rounded-full blur-[150px] pointer-events-none select-none -z-10 animate-pulse duration-[10s]" />

      <section
        id="hero"
        className="pt-12 pb-16 md:pt-16 md:pb-24 flex items-center relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
          <div className="lg:col-span-6 flex flex-col text-left items-start order-2 lg:order-1 mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-[0.15em] mb-6 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)] animate-fade-in-up select-none">
              <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
              A trusted digital agency
            </div>
            <h1 className="text-[clamp(1.8rem,5.8vw,4.4rem)] font-black font-poppins leading-[1.08] text-[#0F172A] max-w-[650px] mb-4 lg:mb-6 tracking-tight text-left animate-fade-in-up opacity-0" style={{ animationDelay: "150ms" }}>
              The most trusted{" "}
              <span className="bg-gradient-to-r from-[#1161ed] to-[#3b82f6] bg-clip-text text-transparent">
                SaaS & Digital Product
              </span>{" "}
              engineering partner.
            </h1>
            <p className="text-[#64748B] text-sm lg:text-[1.05rem] leading-[1.7] max-w-[500px] mb-6 lg:mb-8 text-left font-normal font-poppins animate-fade-in-up opacity-0" style={{ animationDelay: "300ms" }}>
              We design, build, and deploy premium cloud platforms, custom enterprise systems, and autonomous AI integrations. Move from MVP to scale with startup velocity.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto animate-fade-in-up opacity-0" style={{ animationDelay: "450ms" }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-4 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] hover:from-[#0c4ec3] hover:to-[#2563EB] shadow-[0_4px_20px_rgba(17,97,237,0.25)] hover:shadow-[0_8px_30px_rgba(17,97,237,0.4)] text-white font-extrabold font-poppins rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-[0.95rem] text-center animate-pulse-glow"
              >
                Get Started
              </Link>
              <button
                onClick={() => scrollTo("process")}
                className="inline-flex items-center justify-center gap-3 font-extrabold font-poppins text-[#0F172A] hover:text-[#1161ed] transition-colors duration-200 cursor-pointer group text-[0.95rem]"
              >
                <div className="w-12 h-12 rounded-full bg-[#1161ed]/[0.08] text-[#1161ed] border border-[#1161ed]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-0.5 transition-transform duration-300"
                  >
                    <polygon points="5 3 19 12 5 21" />
                  </svg>
                </div>
                <span>How it works</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 w-full animate-fade-in-up opacity-0 font-poppins" style={{ animationDelay: "600ms" }}>
              <p className="text-[0.66rem] font-bold uppercase tracking-wider text-slate-400 mb-3">Works seamlessly with your ecosystem</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><span className="text-[#1161ed]">●</span> Next.js</span>
                <span className="flex items-center gap-1.5"><span className="text-[#06b6d4]">●</span> React</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-500">●</span> Node.js</span>
                <span className="flex items-center gap-1.5"><span className="text-indigo-500">●</span> AWS</span>
                <span className="flex items-center gap-1.5"><span className="text-amber-500">●</span> Google Cloud</span>
              </div>
            </div>

          </div>

          {/* Right Image/Graphics Column - Top on Mobile / Right on Desktop */}
          <div className="col-span-1 lg:col-span-6 order-1 lg:order-2 w-full flex items-center justify-center relative select-none py-4 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Soft Glow Mesh behind portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] bg-gradient-to-tr from-[#1161ed]/10 to-[#06b6d4]/10 rounded-full blur-[60px] lg:blur-[95px] -z-10 pointer-events-none select-none animate-pulse duration-[8s]" />

            {/* Dotted Grid Pattern Background */}
            <div className="absolute right-0 top-0 w-[140px] h-[140px] bg-[radial-gradient(#1161ed_2px,transparent_2px)] [background-size:20px_20px] opacity-[0.25] -z-10 pointer-events-none hidden sm:block" />

            <TiltIllustration />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50/30 to-white border-y border-[rgba(0,0,0,0.03)] overflow-hidden select-none content-visibility-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[100px] bg-gradient-to-r from-[#1161ed]/[0.015] to-[#3b82f6]/[0.015] rounded-full blur-[120px] pointer-events-none select-none -z-10" />

        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-14 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.01)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1161ed] animate-pulse" />
            <span className="text-[0.62rem] sm:text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-[#1161ed]">
              Proven Experience
            </span>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-slate-800 uppercase">
            Trusted by Leading Companies Worldwide
          </h3>
        </div>

        <div className="relative flex max-w-[100vw] overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap items-center py-4">
            {[
              ...PARTNER_COMPANIES,
              ...PARTNER_COMPANIES,
              ...PARTNER_COMPANIES,
              ...PARTNER_COMPANIES,
              ...PARTNER_COMPANIES,
              ...PARTNER_COMPANIES,
            ].map((company, index) => {
              let logoHeight = "h-10 sm:h-12 md:h-14";
              if (company.name === "Caldreplus") {
                logoHeight = "h-12 sm:h-15 md:h-18";
              } else if (company.name === "Naya-Job") {
                logoHeight = "h-14 sm:h-18 md:h-22";
              }

              return (
                <div
                  key={index}
                  className="mx-3 md:mx-4 flex items-center justify-center shrink-0 w-36 sm:w-44 md:w-52 h-20 sm:h-24 md:h-28 rounded-2xl border border-slate-200/40 bg-slate-50/15 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] shadow-[0_4px_16px_rgba(15,23,42,0.015)] hover:border-[#1161ed]/20 hover:bg-white hover:shadow-[0_12px_30px_rgba(17,97,237,0.06)] hover:-translate-y-1 transition-all duration-500 ease-out select-none cursor-pointer overflow-hidden group relative"
                >
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Image
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    width={180}
                    height={80}
                    sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                    style={{ width: "auto", height: "auto" }}
                    className={`${logoHeight} object-contain transition-all duration-500 grayscale opacity-50 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 mix-blend-multiply`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <ScrollReveal>
        <section
          id="services"
          className="py-16 md:py-24 border-t border-[rgba(0,0,0,0.05)] relative content-visibility-auto overflow-hidden"
        >
        <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#1161ed]/[0.03] rounded-full blur-[80px] pointer-events-none select-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#3b82f6]/[0.02] rounded-full blur-[100px] pointer-events-none select-none -z-10" />

        <div className="text-center mb-[60px] relative z-10">
          <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-3">
            Exclusive Capabilities
          </p>
          <h2 className="text-[2.5rem] text-[#0F172A] font-extrabold tracking-tight">
            Our Premium Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[30px] relative z-10">
          {[
            {
              title: "SaaS & Product Development",
              desc: "High-scale multi-tenant dashboards, secure billing portals, and fast analytical monitoring tools.",
              link: "/services/saas-product",
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              ),
            },
            {
              title: "ERP & CRM Systems",
              desc: "Secure corporate operations database portals, HubSpot pipelines, and lead automations.",
              link: "/services/erp-crm",
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="21" y1="9" x2="3" y2="9" />
                  <line x1="21" y1="15" x2="3" y2="15" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                </svg>
              ),
            },
            {
              title: "AI Automation Solutions",
              desc: "Autonomous workflow auto-agents, proprietary LLM integrations, and fast semantic lookups.",
              link: "/services/ai-automation",
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="5" r="2.5" />
                  <circle cx="5" cy="18" r="2.5" />
                  <circle cx="19" cy="18" r="2.5" />
                  <line x1="12" y1="7.5" x2="5" y2="15.5" />
                  <line x1="12" y1="7.5" x2="19" y2="15.5" />
                  <line x1="7.5" y1="18" x2="16.5" y2="18" />
                </svg>
              ),
            },
            {
              title: "Web Platform Development",
              desc: "Sub-second React & Next.js systems optimized for SEO authority and Core Web Vitals.",
              link: "/services/web-platform",
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              ),
            },
            {
              title: "Video Editing & Motion Editing",
              desc: "Cinematic post-production cuts, sound design, hook tuning, and frame pacing.",
              link: "/services/video-motion",
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="2.18"
                    ry="2.18"
                  />
                  <line x1="7" y1="2" x2="7" y2="22" />
                  <line x1="17" y1="2" x2="17" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="2" y1="7" x2="7" y2="7" />
                  <line x1="2" y1="17" x2="7" y2="17" />
                  <line x1="17" y1="17" x2="22" y2="17" />
                  <line x1="17" y1="7" x2="22" y2="7" />
                </svg>
              ),
            },
            {
              title: "UI/UX & Brand Systems",
              desc: "Atomic Figma layouts, interactive user pathways, design spacing tokens, and asset guides.",
              link: "/services/ui-ux-brand",
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              ),
            },
          ].map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="p-6 sm:p-8 rounded-[24px] border border-slate-200/50 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.02)] relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/30 hover:bg-white/60 group flex flex-col justify-between items-start text-left min-h-[270px] sm:min-h-[290px] gpu-accelerated"
            >
              <div className="absolute top-0 left-0 h-[4px] w-0 bg-gradient-to-r from-[#1161ed] to-[#3b82f6] group-hover:w-full transition-all duration-500 ease-out" />
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.07)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-full flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center border border-[#1161ed]/10 group-hover:bg-[#1161ed] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(17,97,237,0.25)] transition-all duration-300 shadow-sm mb-5">
                  <div className="w-6 h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current transition-transform duration-300 group-hover:-translate-y-0.5">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 group-hover:text-[#1161ed] transition-colors duration-200 font-Outfit tracking-tight leading-tight relative z-10">
                  {service.title}
                </h3>

                <p className="text-slate-500 font-medium text-xs sm:text-sm mt-3 leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-between text-xs font-black text-[#1161ed] tracking-wider uppercase">
                <span>Explore Details</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ScrollReveal>

      {/* How We Work / Process Section */}
      <ScrollReveal>
        <section
          id="process"
          className="py-24 md:py-36 border-t border-[rgba(0,0,0,0.05)] relative overflow-hidden content-visibility-auto"
        >
        {/* Mouse Tracking Particles Animation */}
        <MouseTrackingAnimation />

        {/* Soft Background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1161ed]/[0.02] rounded-full blur-[140px] pointer-events-none select-none -z-10" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .flip-card-container {
            perspective: 1000px;
          }
          .flip-card-inner {
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
            transform: rotate(45deg);
            width: 100%;
            height: 100%;
            position: relative;
          }
          .group:hover .flip-card-inner {
            transform: rotate(45deg) rotateX(180deg) scale(1.08);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 2.5rem;
            transition: box-shadow 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .flip-card-front {
            box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.12), 
                        0 8px 20px -6px rgba(17, 97, 237, 0.15), 
                        inset 0 0 20px rgba(17, 97, 237, 0.04);
          }
          .group:hover .flip-card-front {
            box-shadow: 0 35px 70px -15px rgba(15, 23, 42, 0.22), 
                        0 18px 36px -10px rgba(17, 97, 237, 0.28);
          }
          .flip-card-back {
            transform: rotateX(180deg);
            box-shadow: 0 20px 40px -10px rgba(17, 97, 237, 0.25), 
                        0 8px 20px -6px rgba(17, 97, 237, 0.3), 
                        inset 0 0 20px rgba(255, 255, 255, 0.1);
          }
          .group:hover .flip-card-back {
            box-shadow: 0 35px 70px -15px rgba(17, 97, 237, 0.45), 
                        0 18px 36px -10px rgba(17, 97, 237, 0.5);
          }
        `,
          }}
        />

        <div className="text-center mb-16 relative z-10">
          <div className="inline-block bg-[#1161ed]/[0.08] text-[#1161ed] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 select-none">
            Our Process
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#0F172A] mb-3 tracking-tight">
            How <span className="text-[#1161ed]">We Work</span>
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-[600px] mx-auto">
            A clear, step-by-step process that takes you from idea to launch
            without confusion.
          </p>
        </div>

        {/* Process Flow - Desktop alternating grid / Mobile stacked */}
        <div className="relative max-w-[1100px] mx-auto px-4 z-10">
          {/* Mobile Process Flow (Compact, Premium Vertical Timeline) */}
          <div className="flex flex-col lg:hidden gap-6 relative pl-6 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#1161ed]/30 before:via-[#3b82f6]/20 before:to-[#1161ed]/5">
            {PROCESS_STEPS.map((s, idx) => (
              <div key={idx} className="relative flex items-center gap-4 group">
                {/* Timeline Circle Bullet Node with Dynamic Ping Ripple */}
                <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#1161ed] flex items-center justify-center shadow-[0_0_15px_rgba(17,97,237,0.15)] z-10 select-none transition-all duration-300 group-hover:scale-105">
                  <span className="absolute -inset-1.5 rounded-full border border-[#1161ed]/20 animate-ping duration-[3.5s] pointer-events-none" />
                  <span className="text-[0.8rem] font-black text-[#1161ed] tracking-tighter">
                    {s.step}
                  </span>
                </div>

                {/* Premium Glassmorphic Step Card on Right */}
                <div className="flex-1 p-4 pl-6 rounded-2xl border-[2px] border-[#1161ed]/18 bg-gradient-to-r from-white to-[#1161ed]/[0.05] shadow-[0_10px_25px_rgba(15,23,42,0.04),0_3px_10px_rgba(17,97,237,0.04),inset_0_0_12px_rgba(17,97,237,0.04)] hover:shadow-[0_18px_36px_rgba(15,23,42,0.08),0_6px_18px_rgba(17,97,237,0.12)] hover:border-[#1161ed]/40 transition-all duration-300 relative overflow-hidden flex items-center gap-4">
                  {/* Left Premium Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#1161ed] to-[#3b82f6]" />

                  {/* Icon Container with glowing scale reveal */}
                  <div className="w-10 h-10 rounded-xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#1161ed] group-hover:text-white transition-all duration-300 shadow-sm">
                    <div className="w-5.5 h-5.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current">
                      {s.icon}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col">
                    <span className="text-[0.62rem] font-black uppercase text-[#1161ed] tracking-widest block mb-0.5">
                      Step {s.step}
                    </span>
                    <h3 className="text-[0.88rem] font-extrabold text-[#0F172A] leading-tight tracking-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Process Flow (Horizontal Zig-Zag Alternating Grid with Premium SVG Bezier Wave Connector & Vertical Flip Cards) */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-6 pt-24 pb-28 relative min-h-[520px]">
            {/* Smooth SVG Bezier Path Connector */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none -z-10"
              viewBox="0 0 1100 380"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="path-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1161ed" stopOpacity="0.05" />
                  <stop offset="15%" stopColor="#1161ed" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.65" />
                  <stop offset="85%" stopColor="#1161ed" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient
                  id="pulse-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1161ed" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* Underlying dotted guide line */}
              <path
                d="M 91.6 140 C 183.3 140, 183.3 240, 275 240 C 366.7 240, 366.7 140, 458.3 140 C 550 140, 550 240, 641.6 240 C 733.3 240, 733.3 140, 825 140 C 916.6 140, 916.6 240, 1008.3 240"
                stroke="url(#path-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 8"
              />

              {/* Active flowing pulse track (dashoffset animation) */}
              <path
                d="M 91.6 140 C 183.3 140, 183.3 240, 275 240 C 366.7 240, 366.7 140, 458.3 140 C 550 140, 550 240, 641.6 240 C 733.3 240, 733.3 140, 825 140 C 916.6 140, 916.6 240, 1008.3 240"
                stroke="url(#pulse-gradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="14 160"
                opacity="0.85"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="350;0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Glowing signal sphere moving along the Bezier curve */}
              <circle
                r="5"
                fill="#1161ed"
                className="filter drop-shadow-[0_0_8px_rgba(17,97,237,0.85)]"
              >
                <animateMotion
                  path="M 91.6 140 C 183.3 140, 183.3 240, 275 240 C 366.7 240, 366.7 140, 458.3 140 C 550 140, 550 240, 641.6 240 C 733.3 240, 733.3 140, 825 140 C 916.6 140, 916.6 240, 1008.3 240"
                  dur="14s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {PROCESS_STEPS.map((s, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center group"
              >
                {/* Premium 3D Flip Card Container */}
                <div
                  className={`relative w-[200px] h-[200px] transition-all duration-500 flip-card-container ${
                    s.isTop ? "-translate-y-16" : "translate-y-16"
                  }`}
                >
                  {/* Ambient Background Glow behind Card */}
                  <div className="absolute inset-0 rotate-45 rounded-[2.5rem] bg-gradient-to-tr from-[#1161ed]/15 to-[#3b82f6]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Card Inner Wrapper that rotates in 3D */}
                  <div className="flip-card-inner">
                    {/* FRONT FACE (Ice-glass layout with icon and title) */}
                    <div className="flip-card-front border-[2px] border-[#1161ed]/20 bg-gradient-to-br from-white to-[#1161ed]/[0.05] overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#1161ed]/[0.005] to-transparent transition-all duration-500" />
                      <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-[#1161ed]/15 to-transparent rounded-bl-3xl" />

                      <div className="relative -rotate-45 text-center flex flex-col items-center justify-center p-5 select-none w-full h-full">
                        <div className="mb-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1161ed]/[0.08] to-[#1161ed]/[0.02] border border-[#1161ed]/10 flex items-center justify-center text-[#1161ed]">
                          {s.icon}
                        </div>
                        <span className="text-[0.7rem] font-black uppercase text-white tracking-widest bg-gradient-to-r from-[#1161ed] to-[#3b82f6] px-4 py-1 rounded-full mb-2.5 shadow-[0_2px_8px_rgba(17,97,237,0.2)]">
                          Step {s.step}
                        </span>
                        <h3 className="text-[0.95rem] font-extrabold text-[#0F172A] leading-snug max-w-[140px] tracking-tight">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    {/* BACK FACE (Vibrant blue layout with step description - horizontal orientation!) */}
                    <div className="flip-card-back border-[2px] border-[#1161ed]/25 bg-gradient-to-br from-[#1161ed] to-[#3b82f6] overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] to-transparent transition-all duration-500" />
                      <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-3xl" />

                      <div className="relative rotate-[-45deg] flex flex-row items-center justify-center gap-3.5 p-5 select-none w-full h-full text-white">
                        {/* Step Squircle Badge */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shadow-[inset_0_0_8px_rgba(255,255,255,0.1)]">
                          <span className="text-[1rem] font-black text-white">
                            {s.step}
                          </span>
                        </div>
                        {/* Step Description Content (Horizontal Left-Aligned text flow) */}
                        <div className="flex flex-col text-left">
                          <span className="text-[0.56rem] font-black uppercase text-white/70 tracking-widest mb-1">
                            Step {s.step}
                          </span>
                          <p className="text-[0.7rem] font-extrabold leading-snug max-w-[110px] tracking-tight text-white">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Industries Solutions Section */}
      <ScrollReveal>
        <section
          id="industries"
          className="py-20 md:py-28 border-t border-[rgba(0,0,0,0.05)] relative overflow-hidden content-visibility-auto"
        >
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#1161ed]/[0.02] rounded-full blur-[100px] pointer-events-none select-none -z-10 animate-pulse duration-[8s]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#8b5cf6]/[0.015] rounded-full blur-[100px] pointer-events-none select-none -z-10 animate-pulse duration-[6s]" />

        <div className="max-w-[1100px] mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#1161ed]/[0.08] px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#1161ed] tracking-[0.15em] mb-4 border border-[#1161ed]/20 shadow-[0_2px_10px_rgba(17,97,237,0.05)]">
              <span className="w-1.5 h-1.5 bg-[#1161ed] rounded-full animate-ping"></span>
              Vertical Focus
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Customised Solutions for{" "}
              <span className="text-[#1161ed]">Industries</span>
            </h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-[600px] mx-auto leading-relaxed font-semibold">
              We design and engineer bespoke software ecosystems tailored to the
              unique operational parameters of modern industry verticals.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 -mx-4 no-scrollbar md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0">
            {[
              {
                name: "Food & Beverage",
                desc: "Headless ordering apps, automated inventory trackers, and delivery route integrations.",
                image: "/industry_food.png",
                badge: "F&B Operations",
                gradient: "from-[#f59e0b] to-[#d97706]",
              },
              {
                name: "Industrial & Manufacturing",
                desc: "Real-time assembly line telemetry, supplier portals, and precision engineering databases.",
                image: "/industry_manufacturing.png",
                badge: "Industry 4.0",
                gradient: "from-[#ef4444] to-[#f97316]",
              },
              {
                name: "Real Estate & Architecture",
                desc: "3D virtual listing modules, automated contract generators, and custom broker CRM networks.",
                image: "/industry_real_estate.png",
                badge: "PropTech",
                gradient: "from-[#10b981] to-[#059669]",
              },
              {
                name: "Entertainment & Media",
                desc: "High-retention streaming pipelines, digital asset catalogs, and motion graphics automation.",
                image: "/industry_entertainment.png",
                badge: "MediaTech",
                gradient: "from-[#ec4899] to-[#d946ef]",
              },
              {
                name: "Healthcare & MedTech",
                desc: "ACID-compliant patient portals, secure HIPAA-ready databases, and AI diagnostic guides.",
                image: "/industry_healthcare.png",
                badge: "HealthTech",
                gradient: "from-[#06b6d4] to-[#3b82f6]",
              },
              {
                name: "Fashion & Cosmetics",
                desc: "Immersive luxury catalog systems, influencer pipelines, and Shopify Plus headless hubs.",
                image: "/industry_fashion.png",
                badge: "E-Commerce",
                gradient: "from-[#d946ef] to-[#8b5cf6]",
              },
              {
                name: "Financial & Investment",
                desc: "High-fidelity stock ticker logs, secure transaction gateways, and automated ledger indexing.",
                image: "/industry_finance.png",
                badge: "FinTech",
                gradient: "from-[#1161ed] to-[#8b5cf6]",
              },
              {
                name: "Your Vertical Solution",
                desc: "Don't see your specific industry? We build bespoke operational software tailored to any complex model.",
                image: "",
                badge: "Bespoke",
                gradient: "from-[#1161ed] to-[#3b82f6]",
                isCTA: true,
              },
            ].map((ind, idx) => {
              if (ind.isCTA) {
                return (
                  <Link
                    key={idx}
                    href="/contact"
                    className="group rounded-[24px] sm:rounded-[32px] border border-slate-200/30 bg-gradient-to-br from-[#1161ed] to-[#3b82f6] p-6 shadow-[0_8px_32px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_45px_rgba(17,97,237,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden relative min-h-[340px] sm:min-h-[360px] w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-start md:shrink md:snap-align-none gpu-accelerated"
                  >
                    <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-100 animate-pulse pointer-events-none" />
                    <div className="flex flex-col gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/20 mb-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white font-Outfit tracking-tight leading-tight">
                        {ind.name}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-xs sm:text-[0.8rem] font-semibold font-Outfit">
                        {ind.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase text-white mt-6 cursor-pointer select-none font-Outfit relative self-start group/action">
                      <span className="relative">
                        Start Your Spec
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white scale-x-0 group-hover/action:scale-x-100 transition-transform origin-left duration-300" />
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="transform group-hover:translate-x-1.5 transition-transform duration-300"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                );
              }

              return (
                <div
                  key={idx}
                  className="group rounded-[24px] sm:rounded-[32px] border border-slate-200/30 bg-white/40 backdrop-blur-xl p-5 sm:p-6 shadow-[0_8px_32px_rgba(15,23,42,0.02)] hover:shadow-[0_25px_50px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/30 hover:bg-white/70 transition-all duration-500 flex flex-col justify-between overflow-hidden relative min-h-[340px] sm:min-h-[360px] w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-start md:shrink md:snap-align-none gpu-accelerated"
                >
                  <div
                    className={`absolute top-0 left-0 h-[4px] bg-gradient-to-r ${ind.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-t-[24px] sm:rounded-t-[32px]`}
                  />
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group-hover:scale-[1.015] transition-transform duration-500 ease-out bg-slate-50">
                      <Image
                        src={ind.image}
                        alt={`${ind.name} Customized Solution Artwork`}
                        fill
                        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 45vw, 320px"
                        loading="lazy"
                        className="object-cover filter transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.03]"
                      />
                      <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-slate-900/90 text-white font-mono text-[0.52rem] sm:text-[0.58rem] tracking-wider px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg border border-white/5 backdrop-blur-sm shadow z-20 font-bold">
                        {ind.badge}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-black text-slate-900 group-hover:text-[#1161ed] transition-colors duration-300 font-Outfit tracking-tight leading-tight">
                        {ind.name}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-xs sm:text-[0.8rem] font-semibold mt-1.5 font-Outfit">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#1161ed] mt-6 cursor-pointer select-none font-Outfit relative self-start group/action">
                    <span className="relative">
                      View Solution Spec
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1161ed] scale-x-0 group-hover/action:scale-x-100 transition-transform origin-left duration-300" />
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transform group-hover:translate-x-1.5 transition-transform duration-300"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex md:hidden items-center justify-center gap-1.5 mt-5 text-[#1161ed]/70 font-Outfit text-[0.68rem] font-bold uppercase tracking-[0.12em] animate-pulse">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Swipe to explore industries</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Why Startups Choose V2Labs Section */}
      <ScrollReveal>
        <section
          id="why-us"
          className="py-16 md:py-24 border-t border-[rgba(0,0,0,0.05)] relative overflow-hidden content-visibility-auto"
        >
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-[#1161ed]/[0.02] rounded-full blur-[130px] pointer-events-none select-none -z-10 animate-pulse duration-[10s]" />

        <div className="max-w-[1100px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.01)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1161ed] animate-pulse" />
              <span className="text-[0.62rem] sm:text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-[#1161ed]">
                Founders' Choice
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Why Startups Choose <span className="text-[#1161ed]">V2Labs</span>
            </h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-[600px] mx-auto leading-relaxed font-semibold">
              Engineered for absolute velocity. Architected for rapid enterprise scaling.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
            {[
              {
                title: "Startup-Focused Execution",
                desc: "High-velocity development cycles built for rapid pivot capabilities, continuous deployment, and immediate search engine indexing authority.",
                icon: (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
                    <polyline points="19 9 19 5 15 5" />
                  </svg>
                ),
              },
              {
                title: "Fast MVP Delivery",
                desc: "Convert raw concepts into fully responsive, production-ready web platforms and native builds in weeks, completely skipping legacy agency lag times.",
                icon: (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="13 5 20 12 13 19" />
                    <polyline points="4 5 11 12 4 19" />
                  </svg>
                ),
              },
              {
                title: "Scalable Architecture",
                desc: "Sub-second load times built on optimized Next.js + Django APIs, prepared to support enterprise load spikes and millions of monthly operations.",
                icon: (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                    <path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
                    <path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
                    <path d="M4 15v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
                  </svg>
                ),
              },
              {
                title: "Modern UI Systems",
                desc: "Bespoke, visual-first interactive aesthetics containing micro-interactions and harmonious color schemes that instantly establish industry dominance.",
                icon: (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                  </svg>
                ),
              },
              {
                title: "AI-Ready Infrastructure",
                desc: "Native pipeline integrations configured for Large Language Models, agentic automation grids, vector databases, and responsive real-time AI widgets.",
                icon: (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="5" cy="18" r="2.5" />
                    <circle cx="19" cy="18" r="2.5" />
                    <line x1="12" y1="7.5" x2="5" y2="15.5" />
                    <line x1="12" y1="7.5" x2="19" y2="15.5" />
                    <line x1="7.5" y1="18" x2="16.5" y2="18" />
                  </svg>
                ),
              },
              {
                title: "Product-First Thinking",
                desc: "We operate with a founder's mindset. We don't just ship lines of code; we build for retention, conversion metrics, and active product-led growth.",
                icon: (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707-.707m2.828 9.9a5 5 0 113.626 0" />
                  </svg>
                ),
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-7 md:p-9 rounded-[24px] border border-slate-200/40 bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.01)] relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(17,97,237,0.06)] hover:border-[#1161ed]/20 hover:bg-white/70 group gpu-accelerated"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[4px] bg-gradient-to-r from-[#1161ed] to-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500 ease-out" />
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#1161ed]/[0.08] text-[#1161ed] flex items-center justify-center border border-[#1161ed]/10 group-hover:bg-gradient-to-br group-hover:from-[#1161ed] group-hover:to-[#3b82f6] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(17,97,237,0.2)] transition-all duration-300 shadow-sm mb-4 md:mb-6">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current transform group-hover:rotate-[8deg] group-hover:scale-105 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-[0.95rem] sm:text-[1.1rem] md:text-[1.3rem] text-[#0F172A] font-Outfit font-black mb-2 md:mb-3.5 tracking-tight group-hover:text-[#1161ed] transition-colors duration-200 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-[0.7rem] sm:text-[0.78rem] md:text-[0.9rem] font-Outfit font-semibold group-hover:text-slate-600 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Auto-Moving Testimonials Wall - Edge-to-Edge Premium Marquee */}
      <ScrollReveal>
        <section
          id="testimonials"
          className="relative overflow-hidden border-y border-black/[0.02] py-16 md:py-24 bg-gradient-to-b from-[#fafbfc] to-[#f5f8ff]/30 content-visibility-auto"
        >
        {/* Soft Glowing Orbs */}
        <div className="absolute left-[-5%] top-[10%] h-[400px] w-[400px] animate-pulse rounded-full bg-[#1161ed]/[0.02] blur-[120px] duration-[10s] pointer-events-none select-none -z-10" />
        <div className="absolute right-[-5%] bottom-[10%] h-[400px] w-[400px] animate-pulse rounded-full bg-[#3b82f6]/[0.02] blur-[120px] duration-[8s] pointer-events-none select-none -z-10" />

        {/* Section Header */}
        <div className="relative mb-12 text-center md:mb-16 px-6 z-10">
          <p className="mb-3 text-[0.72rem] font-black uppercase tracking-[0.22em] text-[#1161ed] select-none">
            Founder Proof
          </p>
          <h2 className="mx-auto max-w-[620px] text-[2.2rem] sm:text-[2.6rem] md:text-[3.2rem] font-extrabold tracking-tight text-[#0F172A] leading-[1.1]">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#1161ed] to-[#3b82f6] bg-clip-text text-transparent">
              Founders Say
            </span>
          </h2>
        </div>

        {/* Double Row Horizontal Marquee - Full Page Edge-to-Edge */}
        <div className="relative flex flex-col gap-8 overflow-hidden py-4 select-none z-10 w-full">
          {/* Transparent Gradient Fade Masks at Page Edges */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-28 md:w-40 lg:w-56" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-28 md:w-40 lg:w-56" />

          {/* Row 1: Leftward Marquee */}
          <div className="relative flex w-full overflow-hidden">
            <div className="flex shrink-0 gap-8 md:gap-12 animate-marquee hover:[animation-play-state:paused] py-2 cursor-pointer">
              {/* Set 1 */}
              <div className="flex gap-8 md:gap-12 shrink-0">
                {TESTIMONIALS_ROW_1.map((t, idx) => (
                  <TestimonialCard key={`row1-1-${idx}`} testimonial={t} />
                ))}
              </div>
              {/* Set 2 (Duplicate) */}
              <div className="flex gap-8 md:gap-12 shrink-0" aria-hidden="true">
                {TESTIMONIALS_ROW_1.map((t, idx) => (
                  <TestimonialCard key={`row1-2-${idx}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Rightward Marquee */}
          <div className="relative flex w-full overflow-hidden">
            <div className="flex shrink-0 gap-8 md:gap-12 animate-marquee-reverse hover:[animation-play-state:paused] py-2 cursor-pointer">
              {/* Set 1 */}
              <div className="flex gap-8 md:gap-12 shrink-0">
                {TESTIMONIALS_ROW_2.map((t, idx) => (
                  <TestimonialCard key={`row2-1-${idx}`} testimonial={t} />
                ))}
              </div>
              {/* Set 2 (Duplicate) */}
              <div className="flex gap-8 md:gap-12 shrink-0" aria-hidden="true">
                {TESTIMONIALS_ROW_2.map((t, idx) => (
                  <TestimonialCard key={`row2-2-${idx}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic status helper indicator */}
        <div className="mt-10 flex items-center justify-center gap-2.5 text-[0.68rem] sm:text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[#64748B] select-none z-10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1161ed] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1161ed]"></span>
          </span>
          <span>Auto-moving founder feedback • Hover to Pause</span>
        </div>
      </section>
    </ScrollReveal>

      {/* Information & FAQ Section */}
      <ScrollReveal>
        <section
          id="info"
          className="py-14 md:py-20 bg-[#F8FAFC] mb-10 md:mb-14 rounded-[40px] relative content-visibility-auto"
        >
        {/* Soft Background glow-orb */}
        <div className="absolute right-[10%] top-[10%] w-[300px] h-[300px] bg-[#1161ed]/[0.015] rounded-full blur-[90px] pointer-events-none select-none -z-10" />

        <div className="max-w-[850px] mx-auto px-5 relative z-10 flex flex-col items-center">
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <p className="text-[#1161ed] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-3">
              FAQ
            </p>
            <h2 className="text-[2.2rem] lg:text-[2.8rem] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-[1.05rem] text-[#64748B] max-w-[620px] mx-auto leading-[1.6]">
              Explore detailed, proper answers about our high-velocity
              development cycles, customized tech stack, AI capabilities, and
              client collaboration.
            </p>
          </div>

          {/* FAQ Accordions */}
          <div className="w-full flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-4 sm:p-5 transition-all duration-300 relative overflow-hidden group ${
                  openFaq === idx
                    ? "bg-white border-[#1161ed]/30 shadow-[0_15px_35px_rgba(17,97,237,0.06)] pl-7 sm:pl-8"
                    : "bg-white/60 border-black/[0.03] shadow-sm hover:border-[#1161ed]/20 hover:bg-white hover:shadow-[0_10px_25px_rgba(17,97,237,0.04)]"
                }`}
              >
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#1161ed] to-[#3b82f6] transition-transform duration-300 origin-left ${
                  openFaq === idx ? "scale-x-100" : "scale-x-0"
                }`} />
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-slate-800 text-sm sm:text-base cursor-pointer select-none group"
                >
                  <span className="pr-4 group-hover:text-[#1161ed] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      openFaq === idx
                        ? "bg-[#1161ed] text-white border-transparent"
                        : "bg-[#1161ed]/[0.05] text-[#1161ed] border-transparent group-hover:bg-[#1161ed] group-hover:text-white"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openFaq === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pt-3 pr-2 mt-3 border-t border-slate-100">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
    </div>
  );
}
