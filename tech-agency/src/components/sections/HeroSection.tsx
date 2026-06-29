"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, Shield, Check, Star } from "lucide-react";

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
  milestones: Milestone[];
}

const CAPABILITIES: Capability[] = [
  {
    id: 0,
    name: "Business Presence",
    service: "Website / APP",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (activeStep < 2) {
            setActiveStep((s) => s + 1);
            return 0;
          } else {
            setCompletedRegistry((prev) => {
              if (!prev.includes(activeIndex)) return [...prev, activeIndex];
              return prev;
            });
            setActiveIndex((idx) => (idx + 1) % CAPABILITIES.length);
            setActiveStep(0);
            return 0;
          }
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [activeStep, activeIndex]);

  const activeCapability = CAPABILITIES[activeIndex];

  return (
    <main className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden px-6 lg:px-16 py-12"
      style={{
        background: "radial-gradient(circle at 75% 40%, #1e40af 0%, #0d1e45 40%, #040814 80%)"
      }}
    >
      {/* Smooth glowing background behind the orbit canvas */}
      <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
           style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(0,0,0,0) 70%)" }} />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column: Agency Hook / Copy */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12 lg:space-y-24">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 block font-tech">ADAPTA CORE SYSTEM</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white font-tech">
              AI-Powered <br /> acquisition. <br /> smarter <span className="font-serif italic font-normal text-blue-200">system.</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <a href="#contact" className="bg-slate-900 border border-slate-800 text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:border-slate-700 transition shadow-2xl group">
              <span className="text-sm font-medium font-tech">Request a Demo</span>
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Kinetic Orbit System */}
        <div className="lg:col-span-7 flex justify-center items-center relative h-[550px] w-full">
          <div className="relative w-full h-full flex items-center justify-center animate-floating">

            {/* Dotted Orbital Circle Ring - 440px x 440px */}
            <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] border-2 border-dashed border-blue-500/30 rounded-full animate-orbit">
                {CAPABILITIES.map((cap, index) => {
                // Exactly 5 nodes: 360 / 5 = 72 degrees increments
                const angleDegrees = index * 72;
                const angleRadians = (angleDegrees * Math.PI) / 180;

                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                const radius = isMobile ? 160 : 220;

                const x = Math.cos(angleRadians) * radius;
                const y = Math.sin(angleRadians) * radius;

                const isCompleted = completedRegistry.includes(index);
                const isActive = activeIndex === index;

                return (
                  <div
                    key={cap.id}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${angleDegrees}deg) translate(min(220px, 40vw)) rotate(-${angleDegrees}deg)`
                    } as React.CSSProperties}
                  >
                    <div className={`w-12 h-12 rounded-full bg-slate-900 border p-0.5 animate-counter-orbit transition-all duration-500
                      ${isCompleted ? 'border-2 border-emerald-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : isActive ? 'border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]' : 'border-blue-400/30'}
                    `}>
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={cap.image}
                          alt={cap.name}
                          width={48}
                          height={48}
                          className={`w-full h-full object-cover transition-all duration-500 ${isActive || isCompleted ? 'grayscale-0' : 'grayscale'}`}
                        />
                        {isCompleted && (
                          <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                            <Check className="w-6 h-6 text-emerald-500" strokeWidth={4} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Central Card Surface (Glassmorphic) */}
            <div className="absolute w-[320px] md:w-[340px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl z-10 transition-all duration-500 overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white font-tech">{activeCapability.name}</h3>
                    <div className="bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded text-[8px] font-bold flex items-center gap-1 font-tech">
                       <Star className="w-2 h-2 fill-amber-400" />
                       PRIORITY
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 tracking-wider uppercase font-tech">Live Automation Loop</p>
                </div>
              </div>

              {/* Sequential Interactive Rows Container */}
              <div className="space-y-3">
                {activeCapability.milestones.map((milestone, i) => {
                  const isDone = i < activeStep;
                  const isCurrent = i === activeStep;

                  return (
                    <div key={milestone.id} className={`flex flex-col gap-2 p-3 rounded-xl transition-all duration-500 transform ${isCurrent ? 'bg-white/10 scale-105 border border-white/10' : (isDone ? 'bg-transparent opacity-60' : 'bg-transparent opacity-20')}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-base">{milestone.icon}</span>
                          <span className="text-xs font-medium text-white font-tech">{milestone.title}</span>
                        </div>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${isCurrent ? 'bg-blue-400 animate-pulse' : (isDone ? 'bg-emerald-500' : 'bg-white/10')}`}>
                          {isDone && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                        </div>
                      </div>
                      {isCurrent && (
                        <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mt-1">
                          <div className="bg-blue-400 h-full rounded-full transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Metrics Footer Row */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                 <div className="text-[10px] font-bold text-slate-400 font-tech">99.8% Efficiency Rate</div>
                 <div className="flex gap-0.5">
                    {[...Array(4)].map((_, i) => (
                       <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                    ))}
                 </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lower Right Explainer Text Placement */}
      <div className="absolute bottom-6 right-6 lg:right-16 max-w-xs text-right hidden sm:block z-20">
        <p className="text-xs text-slate-400 font-medium leading-relaxed font-tech">
          Automate your entire recruitment workflow with intelligent AI. Reduce time-to-hire by 80% while elevating the candidate <span className="font-serif italic font-normal text-blue-300">experience.</span>
        </p>
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
    </main>
  );
}
