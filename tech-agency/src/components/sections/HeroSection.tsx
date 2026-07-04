"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, Shield, Check, Star } from "lucide-react";
import type { CSSProperties } from "react";

/**
 * TYPE DEFINITIONS
 */
interface Milestone {
  id: number;
  title: string;
  icon: string;
}

interface Capability {
  id: number;
  name: string;
  service: string;
  image: string;
  color: string;
  glow: string;
  milestones: Milestone[];
}

const CAPABILITIES: Capability[] = [
  {
    id: 0,
    name: "Business Presence",
    service: "Website / APP",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
    color: "bg-blue-600",
    glow: "shadow-blue-600/30",
    milestones: [
      { id: 1, title: 'Discuss Scope', icon: '📩' },
      { id: 2, title: 'Build Infrastructure', icon: '⚙️' },
      { id: 3, title: 'Launch Production', icon: '🚀' }
    ]
  },
  {
    id: 1,
    name: "Agent Development",
    service: "Booking / Appointment",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80",
    color: "bg-purple-600",
    glow: "shadow-purple-600/30",
    milestones: [
      { id: 1, title: 'Logic Mapping', icon: '🧠' },
      { id: 2, title: 'NLU Training', icon: '🤖' },
      { id: 3, title: 'Voice Integration', icon: '🎙️' }
    ]
  },
  {
    id: 2,
    name: "E-commerce Scale",
    service: "Shopify / TikTok Shop",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80",
    color: "bg-amber-600",
    glow: "shadow-amber-600/30",
    milestones: [
      { id: 1, title: 'Inventory Sync', icon: '📦' },
      { id: 2, title: 'Checkout Flow', icon: '💳' },
      { id: 3, title: 'Global Fulfillment', icon: '🌍' }
    ]
  },
  {
    id: 3,
    name: "Growth Engine",
    service: "SEO / AEO Engine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop&q=80",
    color: "bg-emerald-600",
    glow: "shadow-emerald-600/30",
    milestones: [
      { id: 1, title: 'Semantic Audit', icon: '🔍' },
      { id: 2, title: 'Knowledge Graph', icon: '📊' },
      { id: 3, title: 'Authority Blast', icon: '⚡' }
    ]
  },
  {
    id: 4,
    name: "Ops Automation",
    service: "Content Handling",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&fit=crop&q=80",
    color: "bg-rose-600",
    glow: "shadow-rose-600/30",
    milestones: [
      { id: 1, title: 'Workflow Design', icon: '🖇️' },
      { id: 2, title: 'Node Connection', icon: '🔌' },
      { id: 3, title: 'Autonomous Loop', icon: '🔄' }
    ]
  }
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [completedRegistry, setCompletedRegistry] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  const fillTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const stageTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const STEP_DURATION_MS = 1700;

  useEffect(() => {
    if (fillTimeoutRef.current) {
      clearTimeout(fillTimeoutRef.current);
      fillTimeoutRef.current = null;
    }

    if (stageTimeoutRef.current) {
      clearTimeout(stageTimeoutRef.current);
      stageTimeoutRef.current = null;
    }

    setProgress(0);
    setIsWaiting(false);

    fillTimeoutRef.current = setTimeout(() => {
      setProgress(100);
    }, 24);

    stageTimeoutRef.current = setTimeout(() => {
      setIsWaiting(true);

      if (activeStep < 2) {
        setActiveStep((step) => step + 1);
        setProgress(0);
        setIsWaiting(false);
        return;
      }

      setCompletedRegistry((prevRegistry) => {
        if (!prevRegistry.includes(activeIndex)) return [...prevRegistry, activeIndex];
        return prevRegistry;
      });

      setActiveIndex((idx) => (idx + 1) % CAPABILITIES.length);
      setActiveStep(0);
      setProgress(0);
      setIsWaiting(false);
    }, STEP_DURATION_MS);

    return () => {
      if (fillTimeoutRef.current) clearTimeout(fillTimeoutRef.current);
      if (stageTimeoutRef.current) clearTimeout(stageTimeoutRef.current);
    };
  }, [activeStep, activeIndex]);

  useEffect(() => {
    return () => {
      if (fillTimeoutRef.current) clearTimeout(fillTimeoutRef.current);
      if (stageTimeoutRef.current) clearTimeout(stageTimeoutRef.current);
    };
  }, []);

  const activeCapability = CAPABILITIES[activeIndex];

  /* Compute glow color once */
  const glowColor =
    activeCapability.color === 'bg-blue-600' ? 'rgba(59, 130, 246, 0.15)'
    : activeCapability.color === 'bg-purple-600' ? 'rgba(168, 85, 247, 0.15)'
    : activeCapability.color === 'bg-amber-600' ? 'rgba(245, 158, 11, 0.15)'
    : activeCapability.color === 'bg-emerald-600' ? 'rgba(16, 185, 129, 0.15)'
    : 'rgba(244, 63, 94, 0.15)';

  const strongGlowColor =
    activeCapability.color === 'bg-blue-600' ? 'rgba(59, 130, 246, 0.5)'
    : activeCapability.color === 'bg-purple-600' ? 'rgba(168, 85, 247, 0.5)'
    : activeCapability.color === 'bg-amber-600' ? 'rgba(245, 158, 11, 0.5)'
    : activeCapability.color === 'bg-emerald-600' ? 'rgba(16, 185, 129, 0.5)'
    : 'rgba(244, 63, 94, 0.5)';

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-16 pb-20 pt-16 lg:pt-24 lg:pb-32 bg-slate-950"
    >
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">

        {/* Left Column: Agency Hook / Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full space-y-6 sm:space-y-8 lg:space-y-12 relative z-20 text-center lg:text-left">
          <div className="space-y-4 sm:space-y-6">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-bold text-blue-400 block font-tech">ADAPTA CORE SYSTEM</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white font-tech mx-auto lg:mx-0">
              AI-Powered acquisition. <br className="hidden xl:block" /> smarter <span className="font-serif italic font-normal text-blue-200">system.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-medium leading-relaxed font-tech md:pr-12 lg:pr-24 mx-auto lg:mx-0">
              Automate your entire recruitment workflow with intelligent AI. Reduce time-to-hire by 80% while elevating the candidate <span className="font-serif italic font-normal text-blue-300">experience.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center lg:items-start sm:items-center gap-4 sm:gap-6 pt-2 sm:pt-4 lg:pt-6 justify-center lg:justify-start">
            <a href="#contact" className="bg-slate-900 border border-slate-800 text-white pl-5 sm:pl-6 pr-2 py-2 rounded-full flex items-center gap-3 sm:gap-4 hover:border-slate-700 transition shadow-2xl group">
              <span className="text-xs sm:text-sm font-medium font-tech">Request a Demo</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Kinetic Orbit System */}
        <div className="lg:col-span-5 flex justify-center items-center relative w-full lg:z-20 mt-8 lg:mt-0">
          {/* Responsive Scaling Wrapper to maintain exact proportions without bounding box overflow */}
          <div className="flex items-center justify-center w-[240px] h-[240px] sm:w-[330px] sm:h-[330px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] xl:w-[475px] xl:h-[475px]">
            {/* Base sized container that gets scaled down */}
            <div className="relative flex items-center justify-center w-[500px] h-[500px] origin-center scale-[0.48] sm:scale-[0.66] md:scale-[0.80] lg:scale-[0.88] xl:scale-[0.95] animate-floating">

              {/* Centered Premium Blue Energy Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, rgba(30, 64, 175, 0.4) 0%, rgba(30, 64, 175, 0.15) 35%, rgba(2, 6, 23, 0) 70%)' }}
              />

              {/* Dynamic State Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0 transition-all duration-1000 opacity-70"
                style={{ background: `radial-gradient(circle, ${glowColor} 0%, rgba(0,0,0,0) 70%)` }}
              />

              {/* Dotted Orbital Circle Ring */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed rounded-full animate-orbit w-[440px] h-[440px] z-10 transition-colors duration-1000"
                style={{
                  borderColor: strongGlowColor,
                  filter: `drop-shadow(0 0 6px ${strongGlowColor})`
                }}
              >
                  {CAPABILITIES.map((cap, index) => {
                  const angleDegrees = index * 72;
                  const radius = 220; // Fixed radius since we use CSS scaling for responsiveness
                  const angleRadians = (angleDegrees * Math.PI) / 180;
                  const isCompleted = completedRegistry.includes(index);
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={cap.id}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotate(${angleDegrees}deg) translate(${radius}px) rotate(-${angleDegrees}deg)`
                      } as CSSProperties}
                    >
                      <div className={`w-[52px] h-[52px] rounded-full bg-slate-900 border p-0.5 animate-counter-orbit transition-all duration-500 ease-out will-change-transform
                        ${isCompleted ? 'border-2 border-emerald-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : isActive ? 'border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]' : 'border-blue-400/20'}
                      `}>
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image
                            src={cap.image}
                            alt={cap.name}
                            width={48}
                            height={48}
                            className={`w-full h-full object-cover transition-all duration-500 ${isActive || isCompleted ? 'grayscale-0' : 'grayscale'}`}
                          />
                        </div>
                        {isCompleted && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-slate-900 z-30 shadow-lg">
                            <Check className="w-2.5 h-2.5 text-white" strokeWidth={3.5} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Core Central Card Surface (Glassmorphic) */}
              <div 
                className={`relative isolate w-[246px] bg-slate-900/45 backdrop-blur-3xl border border-white/10 rounded-[18px] px-[20px] py-[16px] z-10 transition-all duration-700 ease-out overflow-hidden ${isWaiting ? 'scale-[1.01]' : 'scale-100'}`}
                style={{
                  boxShadow: `0 18px 60px rgba(2, 6, 23, 0.65), 0 0 40px ${strongGlowColor}`
                }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-24px_40px_rgba(14,165,233,0.08)]" />
                <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_52%),linear-gradient(135deg,rgba(59,130,246,0.10),transparent_45%,rgba(16,185,129,0.08))] opacity-80" />
                {/* Card Header */}
                <div className="relative flex items-center gap-2 mb-2 pr-8 min-h-[34px]">
                  <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-300/90 px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold flex items-center gap-1 font-tech shrink-0 border border-amber-400/10">
                    <Star className="w-2.5 h-2.5 fill-amber-400" />
                    PRIORITY
                  </div>
                  <div className={`w-[34px] h-[34px] ${activeCapability.color} rounded-lg flex items-center justify-center shadow-lg ${activeCapability.glow} shrink-0 transition-all duration-500 ease-out`}>
                    <Shield className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-[14px] font-bold text-white font-tech tracking-wide whitespace-nowrap">{activeCapability.name}</h3>
                    </div>
                    <p className="text-[8.5px] text-slate-400 tracking-[0.18em] uppercase font-tech whitespace-nowrap -mt-0.5">Live Automation Loop</p>
                  </div>
                </div>

                {/* Sequential Interactive Rows Container */}
                <div className="relative space-y-1 mt-3.5">
                  {activeCapability.milestones.map((milestone, i) => {
                    const isDone = i < activeStep;
                    const isCurrent = i === activeStep;

                    return (
                      <div key={milestone.id} className={`flex flex-col gap-1.5 p-1.5 rounded-xl transition-all duration-[520ms] ease-out transform will-change-transform ${isCurrent ? 'bg-white/6 scale-[1.02] border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]' : (isDone ? 'bg-transparent opacity-60' : 'bg-transparent opacity-20')}`}>
                        <div className="flex items-center justify-between transition-all duration-600 ease-in-out">
                          <div className="flex items-center gap-2">
                            <span className="text-[14px]">{milestone.icon}</span>
                            <span className="text-[12px] font-semibold text-white font-tech leading-none">{milestone.title}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-[500ms] ease-out ${isCurrent ? (isWaiting ? 'bg-emerald-500' : `${activeCapability.color} animate-pulse`) : (isDone ? 'bg-emerald-500' : 'bg-white/10')}`}>
                            {(isDone || (isCurrent && isWaiting)) && <Check className="w-2.5 h-2.5 text-white animate-in zoom-in duration-200" strokeWidth={4} />}
                          </div>
                        </div>
                        {isCurrent && (
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                            <div className={`h-full rounded-full transition-[width,background-color] duration-[1000ms] ease-in-out ${isWaiting ? 'bg-emerald-500' : activeCapability.color}`} style={{ width: `${progress}%`, willChange: 'width, background-color' }}></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Metrics Footer Row */}
                <div className="relative mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between transition-all duration-300 ease-out">
                  <div className="text-[10px] font-bold text-slate-500 font-tech tracking-[0.2em]">99.8% Efficiency</div>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400/60 fill-amber-400/60" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



      </div>



      <style jsx>{`
        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .animate-floating {
            animation: floating 6s ease-in-out infinite;
        }
        @keyframes orbit {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .animate-orbit {
            animation: orbit 40s linear infinite;
        }
        @keyframes counter-orbit {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }
        .animate-counter-orbit {
            animation: counter-orbit 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
