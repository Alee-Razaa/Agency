'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BENEFITS = [
  {
    id: '01',
    title: '24/7 Availability Architecture',
    description: 'Continuous production monitoring systems ensure development nodes and automated frameworks maintain maximum network availability.',
    bg: 'bg-cyan-50/50',
    text: 'text-cyan-600',
    borderColor: 'border-cyan-400',
    hoverBorder: 'hover:border-cyan-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)]',
    groupHoverBg: 'group-hover:bg-cyan-500',
  },
  {
    id: '02',
    title: 'Technical Guide Handover',
    description: 'Every delivered package includes exhaustive API maps, execution schematics, and runtime documentation logs for easy maintainability.',
    bg: 'bg-amber-50/50',
    text: 'text-amber-600',
    borderColor: 'border-amber-400',
    hoverBorder: 'hover:border-amber-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)]',
    groupHoverBg: 'group-hover:bg-amber-500',
  },
  {
    id: '03',
    title: 'Autonomous Failover Controls',
    description: 'Integrated fallback mechanisms self-heal data transport blockages instantly inside n8n pipelines, protecting database integrity.',
    bg: 'bg-purple-50/50',
    text: 'text-purple-600',
    borderColor: 'border-purple-400',
    hoverBorder: 'hover:border-purple-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)]',
    groupHoverBg: 'group-hover:bg-purple-500',
  },
  {
    id: '04',
    title: 'Vetted Expert Engineering Pool',
    description: 'Deploy specialized developers matching explicit software requirements across complex technical environments and frameworks safely.',
    bg: 'bg-emerald-50/50',
    text: 'text-emerald-600',
    borderColor: 'border-emerald-400',
    hoverBorder: 'hover:border-emerald-500',
    hoverShadow: 'hover:shadow-[0_15px_35_rgba(16,185,129,0.15)]',
    groupHoverBg: 'group-hover:bg-emerald-500',
  },
  {
    id: '05',
    title: 'Milestone Protection Escrow',
    description: 'Ensure financial efficiency through multi-tier progress evaluations linked directly to verifiable staging server deliverables.',
    bg: 'bg-blue-50/50',
    text: 'text-blue-600',
    borderColor: 'border-blue-400',
    hoverBorder: 'hover:border-blue-400',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(59,130,246,0.15)]',
    groupHoverBg: 'group-hover:bg-blue-500',
  },
  {
    id: '06',
    title: 'Responsible AI Optimization',
    description: 'Automation and vision models are configured for clean enterprise resource allocation and reliable operational efficiency metrics.',
    bg: 'bg-indigo-50/50',
    text: 'text-indigo-600',
    borderColor: 'border-indigo-400',
    hoverBorder: 'hover:border-indigo-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(99,102,241,0.15)]',
    groupHoverBg: 'group-hover:bg-indigo-500',
  },
  {
    id: '07',
    title: 'Real-Time Computer Vision',
    description: 'High-accuracy YOLOv8 threat analysis configurations deploy onto hardware nodes with lower execution latency parameters.',
    bg: 'bg-teal-50/50',
    text: 'text-teal-600',
    borderColor: 'border-teal-400',
    hoverBorder: 'hover:border-teal-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(20,184,166,0.15)]',
    groupHoverBg: 'group-hover:bg-teal-500',
  },
  {
    id: '08',
    title: 'Seamless API Adaptability',
    description: 'Microservice backends built on modular patterns enable fast functional scalability updates down the development pipeline.',
    bg: 'bg-orange-50/50',
    text: 'text-orange-600',
    borderColor: 'border-orange-400',
    hoverBorder: 'hover:border-orange-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(249,115,22,0.15)]',
    groupHoverBg: 'group-hover:bg-orange-500',
  },
];

export const BenefitsGrid = () => {
  return (
    <section id="about" className="py-10 sm:py-12 md:py-16 relative overflow-hidden z-10 bg-slate-950">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <div className="space-y-1.5 bg-slate-900/50 p-3 sm:p-4 rounded-xl backdrop-blur-sm inline-block border border-slate-800 shadow-sm">
            <span className="text-[9px] font-bold tracking-[0.25em] text-indigo-400 uppercase font-tech block">Ecosystem Architecture</span>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-tech leading-tight">Why Work With Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={`group relative bg-slate-900/50 p-3 sm:p-4 rounded-[1rem] sm:rounded-[1.25rem] border border-slate-800 shadow-2xl flex flex-col items-start gap-2 sm:gap-3 backdrop-blur-sm transition-all duration-300 ${benefit.hoverBorder.replace('cyan-500', 'cyan-400').replace('amber-500', 'amber-400').replace('purple-500', 'purple-400').replace('emerald-500', 'emerald-400').replace('blue-400', 'blue-400').replace('indigo-500', 'indigo-400').replace('teal-500', 'teal-400').replace('orange-500', 'orange-400')} ${benefit.hoverShadow} hover:-translate-y-1`}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-dotted ${benefit.borderColor} flex items-center justify-center flex-shrink-0 bg-slate-800 ${benefit.text.replace('600', '400')} font-tech font-bold text-[9px] sm:text-[10px] transition-colors duration-300 ${benefit.groupHoverBg} group-hover:text-white group-hover:border-transparent`}>
                  {benefit.id}
                </div>
                <div className="space-y-1 relative z-10">
                  <h3 className={`text-[13px] font-bold tracking-tight ${benefit.text.replace('600', '400')} font-tech leading-tight`}>
                    {benefit.title}
                  </h3>
                  <p className="text-[10.5px] text-slate-400 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
