"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check, Shield, ChevronRight } from "lucide-react";

/**
 * TYPE DEFINITIONS
 */
interface Stage {
  id: number;
  title: string;
  icon: string;
}

interface Person {
  id: number;
  name: string;
  image: string;
}

const PEOPLE: Person[] = [
  {
    id: 0,
    name: "Client Alpha",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
  },
  {
    id: 1,
    name: "Client Beta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Client Gamma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Client Delta",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop&q=80",
  },
];

const STAGES: Stage[] = [
  { id: 1, title: 'Analysis', icon: '📩' },
  { id: 2, title: 'Agent Implementation', icon: '⚙️' },
  { id: 3, title: 'Building Agent', icon: '🗓️' },
  { id: 4, title: 'Deployment', icon: '📊' }
];

const STEP_DURATION = 2600;

export function HeroSection() {
  const [currentActiveStage, setCurrentActiveStage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedPeople, setCompletedPeople] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentActiveStage < STAGES.length - 1) {
            setCurrentActiveStage((s) => s + 1);
            return 0;
          } else {
            // All stages complete for this person
            setCompletedPeople((prevList) => {
              if (!prevList.includes(activeIndex)) {
                return [...prevList, activeIndex];
              }
              return prevList;
            });

            // Move to next person
            setActiveIndex((idx) => (idx + 1) % PEOPLE.length);
            setCurrentActiveStage(0);
            return 0;
          }
        }
        return prev + 2; // Controls speed (100 / (2600ms / 50ms interval) approx 2)
      });
    }, 50);

    return () => clearInterval(interval);
  }, [currentActiveStage, activeIndex]);

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
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 block">ADAPTA CORE SYSTEM</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              AI-Powered <br /> acquisition. <br /> smarter <span className="font-serif italic font-normal text-blue-200">system.</span>
            </h1>
          </div>

          {/* Lower Left CTA Placement */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <a href="#" className="bg-slate-900 border border-slate-800 text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:border-slate-700 transition shadow-2xl group">
              <span className="text-sm font-medium">Request a Demo</span>
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Kinetic Orbit System */}
        <div className="lg:col-span-7 flex justify-center items-center relative h-[550px] w-full">

          <div className="relative w-full h-full flex items-center justify-center animate-floating">

            {/* Dotted Orbital Circle Ring */}
            <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] border-2 border-dashed border-blue-500/30 rounded-full animate-orbit">
                {PEOPLE.map((person, index) => {
                const angle = (index * 90) * (Math.PI / 180);
                // Responsive radius
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                const radius = isMobile ? 160 : 220;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const isCompleted = completedPeople.includes(index);
                const isActive = activeIndex === index;

                return (
                  <div
                    key={person.id}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-slate-900 border p-0.5 animate-counter-orbit transition-all duration-500
                      ${isCompleted ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : isActive ? 'border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]' : 'border-blue-400/30'}
                    `}>
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={48}
                          height={48}
                          className={`w-full h-full object-cover transition-all duration-500 ${isActive || isCompleted ? 'grayscale-0' : 'grayscale'}`}
                        />
                        {isCompleted && (
                          <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                            <Check className="w-6 h-6 text-green-500" strokeWidth={4} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Central Card Surface (Glassmorphic) */}
            <div className="absolute w-[290px] md:w-[340px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl z-10 transition-all duration-500">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Recruitment Process</h3>
                  <p className="text-[10px] text-slate-400 tracking-wider uppercase">Live Automation Loop</p>
                </div>
              </div>

              {/* Sequential Interactive Rows Container */}
              <div className="space-y-3">
                {STAGES.map((stage, i) => {
                  if (i > currentActiveStage) return null;

                  const isLast = i === currentActiveStage;
                  return (
                    <div key={stage.id} className={`flex flex-col gap-2 p-3 rounded-xl transition-all duration-500 transform ${isLast ? 'bg-white/10 scale-105 border border-white/10' : 'bg-transparent opacity-40 scale-100'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-base">{stage.icon}</span>
                          <span className="text-xs font-medium text-white">{stage.title}</span>
                        </div>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${isLast ? 'bg-blue-400 animate-pulse' : 'bg-green-500'}`}>
                          {isLast ? '' : <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                        </div>
                      </div>
                      {isLast && (
                        <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mt-1">
                          <div className="bg-blue-400 h-full rounded-full transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lower Right Explainer Text Placement */}
      <div className="absolute bottom-6 right-6 lg:right-16 max-w-xs text-right hidden sm:block z-20">
        <p className="text-xs text-slate-400 font-medium leading-relaxed">
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
