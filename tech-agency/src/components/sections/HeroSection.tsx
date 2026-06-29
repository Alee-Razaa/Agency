"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Check, Star, Shield, Briefcase, Bot, ShoppingCart, Search, Video } from "lucide-react";

/**
 * TYPE DEFINITIONS
 */
interface ProjectStep {
  id: number;
  label: string;
}

interface ServiceNode {
  id: number;
  name: string;
  image: string;
  steps: ProjectStep[];
}

const SERVICES: ServiceNode[] = [
  {
    id: 0,
    name: "Business Presence",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
    steps: [
      { id: 0, label: "UI/UX Architecture" },
      { id: 1, label: "Next.js Development" },
      { id: 2, label: "Production Deployment" },
    ],
  },
  {
    id: 1,
    name: "Agent Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80",
    steps: [
      { id: 0, label: "Logic Mapping" },
      { id: 1, label: "LLM Integration" },
      { id: 2, label: "API Webhook Sync" },
    ],
  },
  {
    id: 2,
    name: "E-commerce Growth",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80",
    steps: [
      { id: 0, label: "Store Optimization" },
      { id: 1, label: "Conversion Funnels" },
      { id: 2, label: "Inventory Automation" },
    ],
  },
  {
    id: 3,
    name: "AEO/SEO Engine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop&q=80",
    steps: [
      { id: 0, label: "Semantic Analysis" },
      { id: 1, label: "Authority Building" },
      { id: 2, label: "Search Dominance" },
    ],
  },
  {
    id: 4,
    name: "Content Automation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&fit=crop&q=80",
    steps: [
      { id: 0, label: "Creative Strategy" },
      { id: 1, label: "Batch Processing" },
      { id: 2, label: "Multi-Channel Push" },
    ],
  },
];

const STEP_DURATION = 2000;

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
            // Project completed
            setCompletedRegistry((prevRegistry) => {
              if (!prevRegistry.includes(activeIndex)) {
                return [...prevRegistry, activeIndex];
              }
              return prevRegistry;
            });

            // Move to next client/service
            setActiveIndex((idx) => (idx + 1) % SERVICES.length);
            setActiveStep(0);
            return 0;
          }
        }
        return prev + 2; // Adjust for smoothness/speed
      }, STEP_DURATION / 50);

      return () => clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [activeIndex, activeStep]);

  const currentService = SERVICES[activeIndex];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030712] py-20 px-6 lg:px-16">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div className="lg:col-span-5 space-y-10 animate-fadeInUp">
          <div className="space-y-6">
            <Badge variant="secondary" className="px-4 py-1 tracking-widest uppercase font-bold text-xs bg-blue-500/10 text-blue-400 border-none">
              Adapta Core System
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              AI-Powered <br /> acquisition. <br />
              <span className="italic font-normal text-blue-200">smarter system.</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button className="rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 px-8 py-6 group flex items-center gap-4 h-auto">
              <span className="text-base font-semibold text-white">Request a Demo</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:translate-x-1 transition-transform">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
            </Button>
          </div>

          <div className="max-w-sm">
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Automate your entire recruitment workflow with intelligent AI. Reduce time-to-hire by 80% while elevating the candidate <span className="italic text-blue-300">experience.</span>
            </p>
          </div>
        </div>

        {/* Right Content: Kinetic Orbit System */}
        <div className="lg:col-span-7 flex justify-center items-center relative h-[500px] md:h-[600px] w-full">
          {/* Deep Backlight */}
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative w-full h-full flex items-center justify-center animate-float">

            {/* Dotted Orbit Ring */}
            <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] border-2 border-dashed border-blue-500/20 rounded-full animate-orbit">
              {SERVICES.map((service, index) => {
                const angle = (index * 72) * (Math.PI / 180);
                const x = Math.cos(angle) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 220);
                const y = Math.sin(angle) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 220);

                const isCompleted = completedRegistry.includes(index);
                const isActive = activeIndex === index;

                return (
                  <div
                    key={service.id}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className={`
                      relative w-14 h-14 rounded-full p-0.5 transition-all duration-500 animate-counter-orbit
                      ${isActive ? 'scale-110' : 'scale-100'}
                      ${isCompleted ? 'border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-slate-900 border border-blue-500/30'}
                    `}>
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={56}
                        height={56}
                        className="w-full h-full rounded-full object-cover"
                      />
                      {isCompleted && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-[#030712]">
                          <Check className="w-3 h-3 text-white" strokeWidth={4} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Glassmorphic Card */}
            <div className="absolute w-[320px] md:w-[340px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl z-10">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-base font-bold text-white leading-none">Fulfillment Engine</h3>
                    <div className="bg-amber-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-[10px] font-bold text-amber-400">CORE</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold tracking-[0.15em] uppercase">Live Automation Loop</p>
                </div>
              </div>

              {/* Execution Steps */}
              <div className="space-y-4 mb-8 min-h-[180px]">
                {currentService.steps.map((step, idx) => {
                  const isPast = idx < activeStep;
                  const isCurrent = idx === activeStep;

                  return (
                    <div
                      key={step.id}
                      className={`
                        p-4 rounded-2xl transition-all duration-500 border
                        ${isCurrent ? 'bg-white/10 border-white/10 scale-[1.02]' : 'bg-transparent border-transparent opacity-40'}
                      `}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold
                            ${isCurrent ? 'bg-blue-500 text-white' : isPast ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-500'}
                          `}>
                            {isPast ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : idx + 1}
                          </div>
                          <span className="text-sm font-semibold text-white">{step.label}</span>
                        </div>
                        {isCurrent && (
                           <div className="flex gap-0.5">
                              {[1, 2, 3].map(i => (
                                <div key={i} className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                              ))}
                           </div>
                        )}
                      </div>

                      {isCurrent && (
                        <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 transition-all duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer Metrics */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Efficiency Rate</p>
                  <p className="text-xl font-bold text-white tracking-tight">99.8%</p>
                </div>
                <div className="flex flex-col items-end">
                   <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4].map(i => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                   </div>
                   <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Enterprise Grade</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-orbit {
          animation: orbit 40s linear infinite;
        }
        .animate-counter-orbit {
          animation: counter-orbit 40s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
