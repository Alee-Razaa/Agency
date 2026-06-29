'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BENEFITS = [
  {
    id: '01',
    title: '24/7 Availability Architecture',
    description: 'Continuous production monitoring systems ensure that development nodes and automated operational frameworks maintain maximum network availability continuously.',
    color: 'cyan',
    hoverBorder: 'hover:border-cyan-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)]',
    bg: 'bg-cyan-50/50',
    text: 'text-cyan-600',
    groupHoverBg: 'group-hover:bg-cyan-500',
  },
  {
    id: '02',
    title: 'Lifecycle Support Pipeline',
    description: 'Dedicated engineering resources provide continuous expert consultation structural support protocols before, during, and after deployment completion.',
    color: 'pink',
    hoverBorder: 'hover:border-pink-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(236,72,153,0.15)]',
    bg: 'bg-pink-50/50',
    text: 'text-pink-600',
    groupHoverBg: 'group-hover:bg-pink-500',
  },
  {
    id: '03',
    title: 'Technical Guide Handover',
    description: 'Every delivered service structure package includes exhaustive API maps, execution schematics, and runtime documentation logs for easy maintainability.',
    color: 'amber',
    hoverBorder: 'hover:border-amber-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)]',
    bg: 'bg-amber-50/50',
    text: 'text-amber-600',
    groupHoverBg: 'group-hover:bg-amber-500',
  },
  {
    id: '04',
    title: 'Autonomous Failover Controls',
    description: 'Integrated fallback mechanisms self-heal data transport blockages instantly inside n8n pipelines, protecting database integrity configurations.',
    color: 'purple',
    hoverBorder: 'hover:border-purple-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)]',
    bg: 'bg-purple-50/50',
    text: 'text-purple-600',
    groupHoverBg: 'group-hover:bg-purple-500',
  },
  {
    id: '05',
    title: 'Vetted Expert Engineering Pool',
    description: 'Deploy specialized developers matching explicit software requirements across complex technical environments and frameworks safely.',
    color: 'emerald',
    hoverBorder: 'hover:border-emerald-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)]',
    bg: 'bg-emerald-50/50',
    text: 'text-emerald-600',
    groupHoverBg: 'group-hover:bg-emerald-500',
  },
  {
    id: '06',
    title: 'Milestone Protection Escrow',
    description: 'Ensure deployment financial efficiency through multi-tier progress evaluations linked directly to verifiable staging server deliverables.',
    color: 'blue',
    hoverBorder: 'hover:border-blue-400',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(59,130,246,0.15)]',
    bg: 'bg-blue-50/50',
    text: 'text-blue-600',
    groupHoverBg: 'group-hover:bg-blue-500',
  },
  {
    id: '07',
    title: 'Sub-Millisecond SKU Syncing',
    description: 'E-commerce management pipelines handle massive database modification volumes instantly with cross-platform synchronization protocols.',
    color: 'rose',
    hoverBorder: 'hover:border-rose-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(244,63,94,0.15)]',
    bg: 'bg-rose-50/50',
    text: 'text-rose-600',
    groupHoverBg: 'group-hover:bg-rose-500',
  },
  {
    id: '08',
    title: 'Responsible AI Optimization',
    description: 'Automation and vision models are configured cleanly for clean enterprise resource allocation and reliable operational efficiency metrics.',
    color: 'indigo',
    hoverBorder: 'hover:border-indigo-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(99,102,241,0.15)]',
    bg: 'bg-indigo-50/50',
    text: 'text-indigo-600',
    groupHoverBg: 'group-hover:bg-indigo-500',
  },
  {
    id: '09',
    title: 'Real-Time Computer Vision',
    description: 'High-accuracy YOLOv8 threat analysis configurations deploy onto hardware nodes with lower execution latency parameters.',
    color: 'teal',
    hoverBorder: 'hover:border-teal-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(20,184,166,0.15)]',
    bg: 'bg-teal-50/50',
    text: 'text-teal-600',
    groupHoverBg: 'group-hover:bg-teal-500',
  },
  {
    id: '10',
    title: 'Seamless API Adaptability',
    description: 'Microservice backends built on modular patterns enable fast functional scalability updates down the development pipeline roadmap.',
    color: 'orange',
    hoverBorder: 'hover:border-orange-500',
    hoverShadow: 'hover:shadow-[0_15px_35px_rgba(249,115,22,0.15)]',
    bg: 'bg-orange-50/50',
    text: 'text-orange-600',
    groupHoverBg: 'group-hover:bg-orange-500',
  },
];

export const BenefitsGrid = () => {
  return (
    <section className="py-24 relative overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="space-y-12">
          <div className="space-y-2 bg-white/70 p-4 rounded-xl backdrop-blur-sm inline-block">
            <span className="text-xs font-bold tracking-[0.25em] text-indigo-600 uppercase font-tech block">Ecosystem Architecture</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 font-tech">Why Work With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group relative bg-white/95 p-8 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex items-start gap-5 backdrop-blur-sm transition-all duration-300 ${benefit.hoverBorder} ${benefit.hoverShadow} hover:-translate-y-1`}
              >
                <div className={`w-10 h-10 rounded-full border-2 border-dotted ${benefit.text.replace('text', 'border')} flex items-center justify-center flex-shrink-0 ${benefit.bg} ${benefit.text} font-tech font-bold text-xs transition-colors duration-300 ${benefit.groupHoverBg} group-hover:text-white`}>
                  {benefit.id}
                </div>
                <div className="space-y-1.5 relative z-10">
                  <h3 className={`text-base font-bold tracking-tight ${benefit.text} font-tech`}>
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
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
