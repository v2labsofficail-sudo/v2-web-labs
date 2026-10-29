"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildFaqJsonLd } from "@/lib/seo";
import ScrollReveal from "@/components/ScrollReveal";
import AlternatingText from "@/components/AlternatingText";
import Typewriter from "@/components/Typewriter";
import OurServicesBanner from "@/components/OurServicesBanner";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { motion, useScroll, useTransform } from "framer-motion";

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
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-white/20"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.015) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
    >
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#111111]/[0.025] rounded-full blur-[110px] pointer-events-none select-none animate-pulse duration-[12s]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#404040]/[0.015] rounded-full blur-[100px] pointer-events-none select-none animate-pulse duration-[8s]" />

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
      <div className={`${isHovered ? "" : "animate-float"} gpu-accelerated relative w-full h-[380px] bg-slate-950/90  border border-slate-800/80 rounded-3xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden`}>
        {/* Browser control header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 select-none" style={{ transform: "translateZ(20px)" }}>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="bg-slate-900 border border-slate-800 px-4 py-0.5 rounded-full text-[10px] text-[#111111] font-mono tracking-tight w-1/2 text-center">
            app.v2labsglobal.com/designer
          </div>
          <div className="w-6" /> {/* spacer */}
        </div>

        {/* Browser Content */}
        <div className="flex-1 grid grid-cols-12 gap-3" style={{ transform: "translateZ(35px)" }}>
          {/* Sidebar */}
          <div className="col-span-3 border-r border-slate-800/60 pr-2 flex flex-col gap-2.5">
            <div className="h-6 bg-slate-900 rounded-lg w-full flex items-center justify-center font-poppins text-[9px] text-[#111111] font-bold border border-[#111111]/15 bg-[#111111]/5">
              Canvas
            </div>
            <div className="h-6 bg-slate-900/40 rounded-lg w-full flex items-center justify-center font-poppins text-[9px] text-[#111111] font-bold border border-transparent hover:border-slate-800 transition-colors">
              AI Flows
            </div>
            <div className="h-6 bg-slate-900/40 rounded-lg w-full flex items-center justify-center font-poppins text-[9px] text-[#111111] font-bold border border-transparent hover:border-slate-800 transition-colors">
              Integrations
            </div>
            <div className="mt-auto h-6 bg-slate-900/40 rounded-lg w-full flex items-center justify-center font-poppins text-[9px] text-[#111111] font-bold border border-transparent hover:border-slate-800 transition-colors">
              Settings
            </div>
          </div>

          {/* Designer Canvas */}
          <div className="col-span-9 flex flex-col gap-3">
            {/* Toolbar status */}
            <div className="flex items-center justify-between">
              <span className="font-poppins text-[10px] font-bold text-[#111111]">Design Preview</span>
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0055DA] to-[#111111] text-white flex items-center justify-center font-poppins font-black text-sm shadow-[0_4px_12px_rgba(17,97,237,0.18)]">
                  AT
                </div>
                <div>
                  <h4 className="font-poppins text-[0.88rem] font-black text-slate-900 leading-none mb-1">Alex Thorne</h4>
                  <p className="font-poppins text-[0.66rem] font-bold text-[#111111] leading-none mb-2">Founder & CEO, SynthFlow AI</p>
                  <div className="flex flex-col gap-1 text-[0.6rem] font-bold text-[#111111]">
                    <span className="flex items-center gap-1">✉ alex@synthflow.ai</span>
                    <span className="flex items-center gap-1">☏ +1 (555) 019-2834</span>
                  </div>
                </div>
              </div>

              {/* Dynamic divider line */}
              <div className="relative z-10 h-px bg-gradient-to-r from-[#111111] via-slate-200 to-transparent my-3" />

              {/* Company banner area */}
              <div className="relative z-10 flex justify-between items-center text-[0.55rem] font-black text-[#111111] uppercase tracking-widest leading-none">
                <span>V2 Labs Global engineered product</span>
                <span className="text-[#111111] tracking-wider leading-none">synthflow.ai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating statistics/glowing cards */}
        <div 
          className="absolute -top-4 -left-4 bg-white  border border-slate-200/60 rounded-2xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center gap-2.5 transition-transform duration-500 hover:scale-105 pointer-events-auto"
          style={{ transform: "translateZ(65px)" }}
        >
          <div className="w-8 h-8 rounded-xl bg-[#111111]/10 text-[#111111] flex items-center justify-center font-black text-sm">
            ⚡
          </div>
          <div className="text-left font-poppins">
            <p className="text-[10px] font-black text-slate-800 uppercase tracking-wider leading-none">99.9% Delivery</p>
            <p className="text-[8px] font-bold text-[#111111] mt-1 leading-none">Global cloud sync</p>
          </div>
        </div>

        <div 
          className="absolute -bottom-4 -right-4 bg-slate-900/95  border border-slate-800/80 rounded-2xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.15)] flex items-center gap-2.5 transition-transform duration-500 hover:scale-105 pointer-events-auto"
          style={{ transform: "translateZ(55px)" }}
        >
          <div className="w-8 h-8 rounded-xl bg-[#404040]/10 text-[#404040] flex items-center justify-center font-black text-sm">
            📈
          </div>
          <div className="text-left font-poppins">
            <p className="text-[10px] font-black text-white uppercase tracking-wider leading-none">+148% CTR</p>
            <p className="text-[8px] font-bold text-[#111111] mt-1 leading-none">Campaign growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function AnimatedHubImage() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={ref} className="relative w-full max-w-[500px] aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/60 bg-white">
      <motion.div style={{ scale, opacity, y }} className="w-full h-full relative">
        <Image
          src="/images/services/web-platform.jpg"
          alt="Company-wide Engineering Hub"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

function AnimatedLaptopImage() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <div 
      ref={ref} 
      className="w-full aspect-[3/2] relative perspective-1000 max-w-[540px] lg:max-w-[580px] mx-auto rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group"
    >
      <motion.div 
        style={{ rotateX, rotateY, y, opacity }} 
        className="w-full h-full relative transition-transform duration-700 ease-out hover:scale-[1.02]"
      >
        <Image
          src="https://tse3.mm.bing.net/th/id/OIP.hNRufyklH5hUItA1Kz--dgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Extend Your Engineering Impact - V2 Labs Global Team"
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 540px, 580px"
          className="object-cover object-center"
          priority={false}
        />
      </motion.div>
    </div>
  );
}

function HubSection() {
  return (
    <section className="py-10 md:py-14 relative bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 relative flex justify-center">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.05)_0%,transparent_60%)] -z-10" />
           <AnimatedHubImage />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
            Company-wide <br />
            <AlternatingText>Engineering Solutions</AlternatingText> <br />
            Made Easy
          </h2>
          <p className="text-lg text-[#111111] mb-8 font-medium leading-relaxed">
            Create and manage scalable engineering ecosystems for as many teams as you need.
          </p>
          <ul className="space-y-6">
            {[
              "Centrally manage all engineering flows from a single dashboard",
              "Maintain consistent architecture across all tech stacks",
              "Enable each department to innovate securely and efficiently"
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                 <div className="w-6 h-6 rounded-full bg-[#111111]/10 text-[#111111] flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <span className="text-slate-700 font-semibold text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}



const CORE_SERVICE_CARDS = [
  {
    title: "Performance Marketing",
    description: "Run targeted ad campaigns that generate leads, sales, measurable growth.",
    banner: "/images/hero-cards/banner-performance-marketing-clean.png",
    href: "/services/digital-marketing",
    icon: (
      <svg className="w-5 h-5 text-[#0055DA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M4 14l6-6 4 4 6-6" />
      </svg>
    ),
  },
  {
    title: "Websites That Convert",
    description: "Fast, mobile-first builds designed to turn visitors into enquiries.",
    banner: "/images/hero-cards/banner-websites-that-convert-clean.png",
    href: "/services/web-platform",
    icon: (
      <svg className="w-5 h-5 text-[#0055DA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    title: "Meta Advertising",
    description: "Facebook and Instagram campaigns built on offer, audience, and creative.",
    banner: "/images/hero-cards/banner-meta-advertising-clean.png",
    href: "/services/digital-marketing",
    icon: (
      <svg className="w-5 h-5 text-[#0055DA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "SEO & Organic Growth",
    description: "We improve rankings and drive consistent organic traffic for your website.",
    banner: "/images/hero-cards/banner-seo-organic-growth-clean.png",
    href: "/services/digital-marketing",
    icon: (
      <svg className="w-5 h-5 text-[#0055DA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16" y2="16" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const [activeDominance, setActiveDominance] = React.useState<number | null>(0);

  const FAQS = [
    {
      question: "What core services does V2 Labs Global specialize in?",
      answer:
        "V2 Labs Global specializes in high-velocity SaaS & product development, custom ERP & CRM solutions, AI-ready automations, sub-second React/Next.js platforms, cinematic post-production video editing, and complete brand design systems.",
    },
    {
      question: "How quickly can V2 Labs Global deliver a production-ready MVP?",
      answer:
        "We move with startup speed. A standard MVP takes 2 to 4 weeks depending on the complexity. We launch fast, gather active user feedback, and iterate in rapid, continuous cycles.",
    },
    {
      question: "Do you offer long-term support and maintenance post-launch?",
      answer:
        "Yes. We act as a dedicated engineering partner, providing ongoing feature updates, database scaling, server optimizations, and UX modifications as your product grows.",
    },
    {
      question: "How does V2 Labs Global collaborate with our internal team?",
      answer:
        "We operate with a founder's mindset. We communicate directly via Slack, collaborate in GitHub, maintain clear Linear boards, and eliminate typical agency overhead.",
    },
    {
      question: "What technology stack does V2 Labs Global build on?",
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
      question: "How do we kickstart our project with V2 Labs Global today?",
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
          className="w-7 h-7 text-[#111111]"
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
          <circle cx="10" cy="10" r="3" fill="#111111" opacity="0.15" />
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
          className="w-7 h-7 text-[#111111]"
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
          <polygon points="9 7 15 4 15 17 9 20" fill="#111111" opacity="0.15" />
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
          className="w-7 h-7 text-[#111111]"
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
            fill="#111111"
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
          className="w-7 h-7 text-[#111111]"
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
          className="w-7 h-7 text-[#111111]"
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
          <circle cx="16" cy="10" r="2" fill="#111111" opacity="0.15" />
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
          className="w-7 h-7 text-[#111111]"
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
          <polygon points="13 7 21 7 21 15" fill="#111111" opacity="0.15" />
        </svg>
      ),
    },
  ];

  const faqJson = buildFaqJsonLd(FAQS);
  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://v2labsglobal.com/#webpage",
        url: "https://v2labsglobal.com/",
        name: "V2 Labs Global Homepage",
        description:
          "AI solutions, web development, branding, SEO, GEO, and AEO services for startups and growing businesses.",
        isPartOf: {
          "@id": "https://v2labsglobal.com/#website",
        },
        about: {
          "@id": "https://v2labsglobal.com/#professional-service",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://v2labsglobal.com/logo-cover-v2labs.jpeg",
        },
      },
      {
        "@type": "ItemList",
        name: "Core service areas",
        itemListElement: [
          "AI Solutions",
          "Web Development",
          "Branding and UI UX",
          "ERP CRM",
          "SaaS Product Development",
          "SEO, GEO and AEO",
        ].map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
        })),
      },
      faqJson,
    ],
  };

  return (
    <div className="w-full relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-white -z-20 pointer-events-none" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      
                        <section
        id="hero"
        className="relative overflow-hidden bg-white text-slate-900 pt-0 sm:pt-1 pb-10 sm:pb-14 lg:pb-16 select-none"
      >
        {/* Soft Fluid Background Cloud / Organic Shape in Center-Top */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Main Content Container with proper upper padding & direct flow */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Content Column - tight and proper upper alignment */}
            <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left pt-0">

              {/* Main Headline styled like reference (Blue word + Dark words) */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-slate-950 leading-[1.08] tracking-tight mb-4">
                <span className="text-[#0055DA] block">Digital Growth</span>
                Agency For Modern Businesses
              </h1>

              {/* Bold Subheading */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-5 leading-snug">
                Scale Your Web Traffic, Conversions & Revenue{" "}
                <span className="text-[#0055DA]">Up To 3X Faster</span>
              </h2>

              {/* Rich SEO Content Paragraphs for Digital Agency Offerings */}
              <div className="space-y-3.5 mb-7 sm:mb-9 max-w-2xl text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">V2 Labs Global</strong> is an enterprise digital transformation and full-service digital agency. We combine custom software engineering, high-performance web development, technical SEO, and scalable enterprise ERP & CRM systems to transform ambitious brands into market leaders.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Whether scaling enterprise operations or engineering high-growth digital platforms, our engineers and technical strategists deliver speed, search-dominance, and conversion-focused infrastructure.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#0055DA] hover:bg-[#0047C2] text-white font-black text-sm uppercase tracking-wider rounded-full shadow-[0_12px_28px_rgba(0,85,218,0.35)] hover:shadow-[0_16px_36px_rgba(0,85,218,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
                >
                  <span>JOIN NOW</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0055DA] font-bold text-sm uppercase tracking-wider rounded-full border-2 border-slate-300 hover:border-[#0055DA] shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  <span>OUR SERVICES</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Model in Organic Blue Pod Shape with Left-Right alternating floating tags */}
            <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end items-start mt-1 lg:mt-0 lg:-translate-y-6 xl:-translate-y-10">
              
              {/* Organic Blue Fluid Shape / Pod framing the model */}
              <div className="relative w-[270px] sm:w-[330px] lg:w-[390px] xl:w-[410px] aspect-[3/4] flex items-end justify-center select-none">
                
                {/* Organic Blue Shape Background - backdrop behind torso and shoulders */}
                <div
                  className="absolute inset-x-2 sm:inset-x-0 bottom-0 top-10 sm:top-12 bg-gradient-to-br from-[#0055DA] via-[#0062FF] to-[#0042B3] shadow-[0_20px_50px_rgba(0,85,218,0.3)] pointer-events-none"
                  style={{
                    borderRadius: "45% 55% 65% 35% / 45% 45% 55% 55%",
                  }}
                />

                {/* Dashed Accent Border matching reference */}
                <div
                  className="absolute inset-x-4 sm:inset-x-2 bottom-2 top-12 sm:top-14 border-2 border-dashed border-white/70 pointer-events-none"
                  style={{
                    borderRadius: "45% 55% 65% 35% / 45% 45% 55% 55%",
                  }}
                />

                {/* Transparent Model Cutout - Complete, uncut, rising cleanly above the pod */}
                <div className="relative z-10 w-full h-full flex items-end justify-center overflow-visible pointer-events-none">
                  <Image
                    src="/images/hero_model_v2_transparent.png"
                    alt="V2 Labs Global Digital Agency & Enterprise Solutions"
                    width={896}
                    height={1200}
                    priority
                    className="w-full h-full object-contain object-bottom select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 330px, 410px"
                  />
                </div>

                {/* Top-Left: Compact Capabilities Badge - positioned above shoulder, outside face */}
                <div className="absolute top-1 sm:top-2 left-0 sm:-left-4 lg:-left-8 z-20 flex items-center gap-1 text-[#0055DA] font-bold text-[10px] sm:text-[11px] tracking-tight bg-white/95 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full border border-blue-100 shadow-[0_4px_12px_rgba(0,85,218,0.12)] select-none">
                  <span className="font-extrabold">#</span>
                  <span>Capabilities</span>
                </div>

                {/* Left Pill 1: Web Development - at chest level, completely below the face */}
                <Link
                  href="/services/web-platform"
                  className="absolute top-[40%] -left-1 sm:-left-6 lg:-left-12 z-20 bg-[#0055DA] hover:bg-[#0047C2] text-white text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-bold tracking-tight px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-[0_4px_14px_rgba(0,85,218,0.25)] hover:scale-105 transition-all duration-200 cursor-pointer border border-white/25 whitespace-nowrap"
                >
                  Web Development
                </Link>

                {/* Right Pill 1: SEO & Growth - at chest/shoulder level, completely below the face */}
                <Link
                  href="/services/digital-marketing"
                  className="absolute top-[46%] -right-1 sm:-right-6 lg:-right-12 z-20 bg-[#0055DA] hover:bg-[#0047C2] text-white text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-bold tracking-tight px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-[0_4px_14px_rgba(0,85,218,0.25)] hover:scale-105 transition-all duration-200 cursor-pointer border border-white/25 whitespace-nowrap"
                >
                  SEO &amp; Growth
                </Link>

                {/* Left Pill 2: ERP & CRM - at waist level */}
                <Link
                  href="/services/erp-crm"
                  className="absolute top-[66%] -left-1 sm:-left-6 lg:-left-12 z-20 bg-[#0055DA] hover:bg-[#0047C2] text-white text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-bold tracking-tight px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-[0_4px_14px_rgba(0,85,218,0.25)] hover:scale-105 transition-all duration-200 cursor-pointer border border-white/25 whitespace-nowrap"
                >
                  ERP &amp; CRM
                </Link>

                {/* Right Pill 2: AI Automations - at waist level */}
                <Link
                  href="/services/ai-automation"
                  className="absolute top-[72%] -right-1 sm:-right-6 lg:-right-12 z-20 bg-[#0055DA] hover:bg-[#0047C2] text-white text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-bold tracking-tight px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-[0_4px_14px_rgba(0,85,218,0.25)] hover:scale-105 transition-all duration-200 cursor-pointer border border-white/25 whitespace-nowrap"
                >
                  AI Automations
                </Link>

                {/* Left Pill 3: Free Consultation - at bottom */}
                <Link
                  href="/contact"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 sm:left-2 sm:translate-x-0 z-20 bg-white hover:bg-slate-50 text-[#0055DA] text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-bold tracking-tight px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,85,218,0.18)] hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-[#0055DA] whitespace-nowrap flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0055DA] animate-pulse" />
                  Free Consultation
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Video Modal when Watch Our Story is clicked */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl border border-slate-800 p-3 sm:p-5 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800">
              <span className="text-white font-bold text-sm sm:text-base font-poppins flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0055DA]" />
                V2 Labs Global • Watch Our Story
              </span>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-sm font-bold cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-3 bg-black flex items-center justify-center">
              <div className="p-8 text-center max-w-lg">
                <div className="w-16 h-16 rounded-full bg-[#0055DA]/20 text-[#38BDF8] flex items-center justify-center mx-auto mb-4 border border-[#0055DA]/40">
                  <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">V2 Labs Global Overview</h4>
                <p className="text-slate-400 text-sm mb-6">
                  Experience how we engineer high-velocity platforms, AI automations, and custom enterprise tools.
                </p>
                <Link
                  href="/contact"
                  onClick={() => setIsVideoOpen(false)}
                  className="inline-flex px-6 py-3 rounded-full bg-[#0055DA] text-white font-bold text-sm hover:bg-[#0047C2] transition-colors"
                >
                  Schedule Live Walkthrough →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Our Services Banner */}
      <ScrollReveal>
        <OurServicesBanner />
      </ScrollReveal>

      <HubSection />



      {/* Services Grid Section */}
      <ScrollReveal>
        <section
        id="services"
        className="py-10 md:py-14 border-t border-slate-100 relative overflow-hidden bg-white"
      >
        <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#111111]/[0.03] rounded-full blur-[80px] pointer-events-none select-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#2A2A2A]/[0.02] rounded-full blur-[100px] pointer-events-none select-none -z-10" />

        <div className="text-center mb-8 md:mb-10 relative z-10 px-4">
          <h2 className="text-[clamp(2rem,5vw,3rem)] text-[#0F172A] font-extrabold tracking-tight mb-4">
            Why <AlternatingText>V2 Labs Global</AlternatingText> Engineering?
          </h2>
          <p className="text-[#111111] text-lg max-w-[700px] mx-auto font-semibold font-poppins">
            V2 Labs Global is the world-leading centrally managed solution for bespoke software ecosystems, platforms, and AI automations.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          {/* Left Side: Sticky Image */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] flex items-center justify-center bg-slate-100 border border-slate-200/60">
              <div className="relative w-full h-full">
                <Image
                  src="/images/services/saas-product.jpg"
                  alt="SaaS Platform Engineering Solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Scrolling Features */}
          <div className="flex flex-col gap-6 lg:pb-8">
             <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 font-Outfit">Dynamic features for every condition</h3>
             
             {[
               {
                 title: "SaaS & Product Development",
                 desc: "High-scale multi-tenant dashboards, secure billing portals, and fast analytical monitoring tools.",
               },
               {
                 title: "AI Automation Solutions",
                 desc: "Autonomous workflow auto-agents, proprietary LLM integrations, and fast semantic lookups.",
               },
               {
                 title: "Web Platform Development",
                 desc: "Sub-second React & Next.js systems optimized for SEO authority and Core Web Vitals.",
               },
               {
                 title: "ERP & CRM Systems",
                 desc: "Secure corporate operations database portals, HubSpot pipelines, and lead automations.",
               }
             ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-6 items-start py-4 group">
                   <div className="w-6 h-6 rounded-full bg-[#111111]/10 flex items-center justify-center shrink-0 mt-1 transition-transform group-hover:scale-110">
                      <svg className="w-3.5 h-3.5 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 font-Outfit">{feature.title}</h4>
                      <p className="text-[#111111] font-medium text-sm">{feature.desc}</p>
                   </div>
                </div>
             ))}

             <div className="mt-6">
               <Link href="/contact" className="inline-flex px-8 py-4 bg-[#0055DA] text-white rounded-full font-bold hover:bg-[#0044B3] transition-colors shadow-lg">
                 Book a Discovery Call
               </Link>
             </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 md:py-14 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
            <div className="flex-1 relative flex justify-center w-full max-w-[580px] lg:max-w-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.08)_0%,transparent_70%)] -z-10" />
               <AnimatedLaptopImage />
            </div>
            
            <div className="flex-1 w-full max-w-[580px] lg:max-w-none lg:pl-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                Extend Your <br />
                <AlternatingText>Engineering Impact</AlternatingText>
              </h2>
              <p className="text-lg text-[#111111] mb-8 font-medium leading-relaxed max-w-[500px]">
                Integrate custom analytics, scalable pipelines, and real-time monitoring directly into your workflows. Manage everything beautifully.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Advanced Analytics", desc: "Gain deep insights into system performance and user engagement." },
                  { title: "Pipeline Automation", desc: "Reduce manual overhead with smart, autonomous CI/CD pipelines." },
                  { title: "Real-time Monitoring", desc: "Track errors and latency with sub-second accuracy globally." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#111111]/30">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-[#111111] font-medium text-sm">{item.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#111111] font-bold text-lg hover:underline group">
                  Explore full platform capabilities 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Digital Dominance Section - Pure White Theme */}
      <ScrollReveal>
        <section className="py-10 md:py-14 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter uppercase font-Outfit text-slate-900">
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055DA] to-[#0284C7]">Dominance.</span>
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-poppins font-medium">
                We bridge the gap between imagination and ROI. From <strong className="text-slate-900 font-bold">Custom Web Development</strong> to <strong className="text-slate-900 font-bold">Surgical Ad Targeting</strong>, V2 Labs Global deploys growth-first systems that dominate the digital landscape.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[550px] w-full font-poppins">
              {[
                {
                  title: "Web Development",
                  badge: "Build & Scale",
                  subtitle: "Custom Architecture",
                  desc: "Engineering high-speed Next.js and React platforms with seamless API integrations and intuitive UX/UI design.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
                  alt: "Web Development"
                },
                {
                  title: "SEO & Marketing",
                  badge: "Search Authority",
                  subtitle: "Digital Marketing",
                  desc: "Dominating search engine result pages through deep-tech technical SEO, keyword gap analysis, and content strategy.",
                  image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800",
                  alt: "SEO"
                },
                {
                  title: "Video Editing",
                  badge: "Cinematic Stories",
                  subtitle: "High-Impact Reels",
                  desc: "Transforming raw footage into scroll-stopping professional narratives for Instagram, YouTube, and TV Ads.",
                  image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
                  alt: "Video Editing"
                },
                {
                  title: "Paid Advertising",
                  badge: "ROI Maximization",
                  subtitle: "Google & Meta Ads",
                  desc: "Surgical precision targeting and budget management to ensure every click turns into high-value revenue.",
                  image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800",
                  alt: "Paid Ads"
                },
                {
                  title: "Brand Identity",
                  badge: "Visual Soul",
                  subtitle: "Graphic Design",
                  desc: "Crafting premium logos and brand identities that create psychological trust and market differentiation.",
                  image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800",
                  alt: "Branding"
                }
              ].map((card, idx) => {
                const isActive = activeDominance === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveDominance(isActive ? null : idx)}
                    className={`group relative transition-all duration-700 ease-in-out overflow-hidden rounded-[2.5rem] border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-pointer w-full lg:w-auto ${
                      isActive 
                        ? "h-[320px] lg:flex-[5] lg:h-full ring-2 ring-[#0055DA]/50" 
                        : "h-[110px] lg:flex-1 lg:h-full hover:border-[#0055DA]/40"
                    }`}
                  >
                    <img
                      src={card.image}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        isActive ? "grayscale-0 scale-105" : "grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-110"
                      }`}
                      alt={card.alt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                    
                    {/* Collapsed view label - Rotated vertical text on desktop, centered horizontal on mobile */}
                    <div
                      className={`absolute bottom-6 left-1/2 -translate-x-1/2 lg:rotate-[-90deg] lg:origin-left lg:left-12 lg:bottom-12 whitespace-nowrap transition-all duration-500 ${
                        isActive ? "opacity-0 invisible" : "opacity-100 visible"
                      } lg:group-hover:opacity-0 lg:group-hover:invisible`}
                    >
                      <h4 className="text-lg lg:text-xl font-bold uppercase tracking-widest text-white font-Outfit drop-shadow">
                        {card.title}
                      </h4>
                    </div>

                    {/* Expanded view details - Fades in on active state (mobile) or hover state (desktop) */}
                    <div
                      className={`absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 ${
                        isActive ? "opacity-100 visible" : "opacity-0 invisible"
                      } lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:delay-100`}
                    >
                      <span className="text-[#38BDF8] font-black text-[10px] uppercase tracking-[0.3em] mb-2 drop-shadow">
                        {card.badge}
                      </span>
                      <h4 className="text-2xl font-bold text-white mb-3 font-Outfit drop-shadow">
                        {card.subtitle}
                      </h4>
                      <p className="text-slate-200 text-sm max-w-xs drop-shadow">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How We Work / Process Section */}
      <ScrollReveal>
        <section
          id="process"
          className="py-10 md:py-14 border-t border-slate-100 relative overflow-hidden"
        >
        {/* Mouse Tracking Particles Animation */}
        <MouseTrackingAnimation />

        {/* Soft Background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#111111]/[0.02] rounded-full blur-[140px] pointer-events-none select-none -z-10" />

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
          <div className="inline-block bg-[#111111]/[0.08] text-[#111111] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 select-none">
            Our Process
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#0F172A] mb-3 tracking-tight">
            How <AlternatingText>We Work</AlternatingText>
          </h2>
          <p className="text-[#111111] text-base md:text-lg max-w-[600px] mx-auto">
            A clear, step-by-step process that takes you from idea to launch
            without confusion.
          </p>
        </div>

        {/* Process Flow - Desktop alternating grid / Mobile stacked */}
        <div className="relative max-w-[1100px] mx-auto px-4 z-10">
          {/* Mobile Process Flow (Compact, Premium Vertical Timeline) */}
          <div className="flex flex-col lg:hidden gap-6 relative pl-6 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#111111]/30 before:via-[#2A2A2A]/20 before:to-[#111111]/5">
            {PROCESS_STEPS.map((s, idx) => (
              <div key={idx} className="relative flex items-center gap-4 group">
                {/* Timeline Circle Bullet Node with Dynamic Ping Ripple */}
                <div className="absolute left-[-26px] w-9 h-9 rounded-full bg-white border-[3px] border-[#111111] flex items-center justify-center shadow-[0_0_15px_rgba(17,97,237,0.15)] z-10 select-none transition-all duration-300 group-hover:scale-105">
                  <span className="absolute -inset-1.5 rounded-full border border-[#111111]/20 animate-ping duration-[3.5s] pointer-events-none" />
                  <span className="text-[0.8rem] font-black text-[#111111] tracking-tighter">
                    {s.step}
                  </span>
                </div>

                {/* Premium Glassmorphic Step Card on Right */}
                <div className="flex-1 p-4 pl-6 rounded-2xl border-[2px] border-[#111111]/18 bg-gradient-to-r from-white to-[#111111]/[0.05] shadow-[0_10px_25px_rgba(15,23,42,0.04),0_3px_10px_rgba(17,97,237,0.04),inset_0_0_12px_rgba(17,97,237,0.04)] hover:shadow-[0_18px_36px_rgba(15,23,42,0.08),0_6px_18px_rgba(17,97,237,0.12)] hover:border-[#111111]/40 transition-all duration-300 relative overflow-hidden flex items-center gap-4">
                  {/* Left Premium Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#0055DA] to-[#111111]" />

                  {/* Icon Container with glowing scale reveal */}
                  <div className="w-10 h-10 rounded-xl bg-[#111111]/[0.08] text-[#111111] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#111111] group-hover:text-white transition-all duration-300 shadow-sm">
                    <div className="w-5.5 h-5.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current">
                      {s.icon}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col">
                    <span className="text-[0.62rem] font-black uppercase text-[#111111] tracking-widest block mb-0.5">
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
          <div className="hidden lg:grid lg:grid-cols-6 gap-6 pt-12 pb-14 relative min-h-[420px]">
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
                  <stop offset="0%" stopColor="#111111" stopOpacity="0.05" />
                  <stop offset="15%" stopColor="#111111" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#2A2A2A" stopOpacity="0.65" />
                  <stop offset="85%" stopColor="#111111" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#2A2A2A" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient
                  id="pulse-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#111111" />
                  <stop offset="100%" stopColor="#2A2A2A" />
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
                fill="#111111"
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
                  <div className="absolute inset-0 rotate-45 rounded-[2.5rem] bg-gradient-to-tr from-[#111111]/15 to-[#2A2A2A]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Card Inner Wrapper that rotates in 3D */}
                  <div className="flip-card-inner">
                    {/* FRONT FACE (Ice-glass layout with icon and title) */}
                    <div className="flip-card-front border-[2px] border-[#111111]/20 bg-gradient-to-br from-white to-[#111111]/[0.05] overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/[0.005] to-transparent transition-all duration-500" />
                      <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-[#111111]/15 to-transparent rounded-bl-3xl" />

                      <div className="relative -rotate-45 text-center flex flex-col items-center justify-center p-5 select-none w-full h-full">
                        <div className="mb-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#111111]/[0.08] to-[#111111]/[0.02] border border-[#111111]/10 flex items-center justify-center text-[#111111]">
                          {s.icon}
                        </div>
                        <span className="text-[0.7rem] font-black uppercase text-white tracking-widest bg-[#0055DA] hover:bg-[#0044B3] px-4 py-1 rounded-full mb-2.5 shadow-[0_2px_8px_rgba(17,97,237,0.2)]">
                          Step {s.step}
                        </span>
                        <h3 className="text-[0.95rem] font-extrabold text-[#0F172A] leading-snug max-w-[140px] tracking-tight">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    {/* BACK FACE (Vibrant blue layout with step description - horizontal orientation!) */}
                    <div className="flip-card-back border-[2px] border-[#111111]/25 bg-gradient-to-br from-[#0055DA] to-[#111111] overflow-hidden flex items-center justify-center">
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

      {/* Trusted By Section (Marquee) */}
      <div className="border-y border-slate-100 bg-white py-8 md:py-10 relative overflow-hidden">
         <div className="text-center mb-4 px-4">
           <h3 className="text-sm sm:text-base font-bold tracking-widest text-[#111111] uppercase">
             Trusted by leading brands worldwide
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
               if (company.name === "Caldreplus") logoHeight = "h-12 sm:h-15 md:h-18";
               else if (company.name === "Naya-Job") logoHeight = "h-14 sm:h-18 md:h-22";
               return (
                 <div
                   key={index}
                   className="mx-6 md:mx-10 flex items-center justify-center shrink-0 w-32 sm:w-40 md:w-48 h-16 sm:h-20 transition-all duration-300 select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                 >
                   <Image
                     src={company.logo}
                     alt={`${company.name} Logo`}
                     width={180}
                     height={80}
                     style={{ width: "auto", height: "auto" }}
                     className={`${logoHeight} object-contain`}
                   />
                 </div>
               );
             })}
           </div>
         </div>
      </div>

      {/* Industries Solutions Section */}
      <ScrollReveal>
        <section id="industries" className="py-10 md:py-14 bg-white px-4 md:px-12 lg:px-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Customised Solutions For <span className="text-[#0055DA]">Industries</span>
              </h2>
              <p className="!text-slate-500 font-medium">Killer results and unbeatable client service</p>
              <div className="w-24 h-1 bg-[#0055DA] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  name: "Food industry",
                  image: "https://i.pinimg.com/736x/b4/d3/ee/b4d3ee08a66ba4ed844533eb8d706516.jpg",
                  alt: "Restaurant"
                },
                {
                  name: "Manufacturing",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500",
                  alt: "Manufacturing"
                },
                {
                  name: "Real Estate",
                  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500",
                  alt: "Real Estate"
                },
                {
                  name: "Entertainment",
                  image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=500",
                  alt: "Entertainment"
                },
                {
                  name: "Education",
                  image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=500",
                  alt: "School"
                },
                {
                  name: "Healthcare",
                  image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=500",
                  alt: "Healthcare"
                },
                {
                  name: "Fashion & Cosmetics",
                  image: "https://businessfinancing.co.uk/wp-content/uploads/08_Most-Popular-Consumer-Brand-in-Every-Country_Fashion-HD.png",
                  alt: "Fashion & Cosmetics"
                },
                {
                  name: "Finance & Investment",
                  image: "https://media.istockphoto.com/id/1203543894/photo/trees-and-coins-in-glass-bottles-stacked-coins-red-arrows-placed-as-graphs-or-charts.jpg?s=170667a&w=0&k=20&c=Db15v0cZ43LL20PYaLoiQ31W3bNvelyL0AgzrnK5-LI=",
                  alt: "Finance"
                },
                {
                  name: "AI & Automation",
                  image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=500",
                  alt: "AI & Automation Solutions"
                }
              ].map((ind, idx) => (
                <Link
                  key={idx}
                  href="/contact"
                  className="group relative h-64 md:h-80 overflow-hidden rounded-3xl bg-slate-200 shadow-lg cursor-pointer block"
                >
                  <img
                    src={ind.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={ind.alt}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081E3F]/90 via-[#081E3F]/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                    <h3 className="text-white font-bold text-sm md:text-xl uppercase tracking-wider">
                      {ind.name}
                    </h3>
                    <div className="h-1 w-0 group-hover:w-full bg-[#0055DA] transition-all duration-300 mt-2 mx-auto"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

            {/* 4 Core Pillars Showcase Section - Before Why Choose Us */}
      <ScrollReveal>
        <section className="py-12 sm:py-16 lg:py-20 bg-white relative z-10 select-none">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            
            {/* 4 Cards Grid matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {CORE_SERVICE_CARDS.map((card, idx) => (
                <Link
                  key={idx}
                  href={card.href}
                  className="group relative bg-white rounded-[28px] sm:rounded-[32px] border border-slate-200/90 p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,85,218,0.12)] hover:border-[#0055DA]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Top Illustration Banner Box */}
                  <div className="relative w-full aspect-[208/88] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <Image
                      src={card.banner}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlapping Circular Icon Badge */}
                  <div className="relative -mt-6 mx-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-[3.5px] border-white shadow-[0_4px_14px_rgba(0,85,218,0.18)] flex items-center justify-center text-[#0055DA] group-hover:scale-110 group-hover:bg-[#0055DA] group-hover:text-white transition-all duration-300 z-10">
                    {card.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="text-center pt-3 pb-2 px-1 flex-1 flex flex-col justify-start">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-[1.05rem] mb-2 group-hover:text-[#0055DA] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-[0.82rem] leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us Circular Orbit Section */}
      <ScrollReveal>
        <WhyChooseUsSection />
      </ScrollReveal>

      <ScrollReveal>
        <section
          id="info"
          className="py-14 md:py-20 bg-white border border-slate-200/80 shadow-sm mb-10 md:mb-14 rounded-[40px] relative mx-4 md:mx-10"
        >
        {/* Soft Background glow-orb */}
        <div className="absolute right-[10%] top-[10%] w-[300px] h-[300px] bg-[#111111]/[0.015] rounded-full blur-[90px] pointer-events-none select-none -z-10" />

        <div className="max-w-[850px] mx-auto px-5 relative z-10 flex flex-col items-center">
          {/* FAQ Header */}
          <div className="text-center mb-8">
            <p className="text-[#111111] font-extrabold uppercase text-[0.8rem] tracking-[0.15em] mb-3">
              FAQ
            </p>
            <h2 className="text-[2.2rem] lg:text-[2.8rem] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
              Frequently Asked <AlternatingText>Questions</AlternatingText>
            </h2>
            <p className="text-[1.05rem] text-[#111111] max-w-[620px] mx-auto leading-[1.6]">
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
                    ? "bg-white border-[#111111]/30 shadow-[0_15px_35px_rgba(17,97,237,0.06)] pl-7 sm:pl-8"
                    : "bg-white border-black/[0.03] shadow-sm hover:border-[#111111]/20 hover:bg-white hover:shadow-[0_10px_25px_rgba(17,97,237,0.04)]"
                }`}
              >
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(17,97,237,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0055DA] to-[#111111] transition-transform duration-300 origin-left ${
                  openFaq === idx ? "scale-x-100" : "scale-x-0"
                }`} />
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-slate-800 text-sm sm:text-base cursor-pointer select-none group"
                >
                  <span className="pr-4 group-hover:text-[#111111] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      openFaq === idx
                        ? "bg-[#111111] text-white border-transparent"
                        : "bg-[#111111]/[0.05] text-[#111111] border-transparent group-hover:bg-[#111111] group-hover:text-white"
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
                    <p className="text-xs sm:text-sm leading-relaxed text-[#111111] font-medium pt-3 pr-2 mt-3 border-t border-slate-100">
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
