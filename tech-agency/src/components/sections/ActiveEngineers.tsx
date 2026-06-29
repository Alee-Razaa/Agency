'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ENGINEERS = [
  {
    name: 'Ali Raza M.',
    role: 'Full-Stack AI Engineer',
    badge: 'Lead',
    badgeColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    skills: ['Python', 'n8n', 'React', 'FastAPI'],
    hoverColor: 'hover:border-indigo-500 hover:shadow-[0_15px_35px_rgba(99,102,241,0.15)]',
  },
  {
    name: 'Sana R.',
    role: 'Media & Content Automation',
    badge: 'Senior',
    badgeColor: 'bg-pink-50 text-pink-600 border-pink-100',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    skills: ['CapCut', 'Make.com', 'Canva AI'],
    hoverColor: 'hover:border-pink-500 hover:shadow-[0_15px_35px_rgba(236,72,153,0.15)]',
  },
  {
    name: 'M. Taha',
    role: 'Computer Vision Specialist',
    badge: 'Expert',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    skills: ['YOLOv8', 'OpenCV', 'PyTorch'],
    hoverColor: 'hover:border-amber-500 hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)]',
  },
  {
    name: 'Zainab K.',
    role: 'Backend Architect',
    badge: 'Mid',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    skills: ['Node.js', 'MongoDB', 'Express'],
    hoverColor: 'hover:border-purple-500 hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)]',
  },
];

export const ActiveEngineers = () => {
  return (
    <section className="w-full py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 space-y-12">
        <div className="space-y-2 bg-white/70 p-4 rounded-xl backdrop-blur-sm inline-block">
          <span className="text-xs font-bold tracking-[0.25em] text-indigo-600 uppercase font-tech block">Human Capital Pipeline</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 font-tech">Vetted Expert Engineering Pool</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGINEERS.map((engineer, index) => (
            <motion.div
              key={engineer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/95 p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group ${engineer.hoverColor}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 relative">
                  <Image
                    src={engineer.image}
                    alt={engineer.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="56px"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-tech">{engineer.name}</h3>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border font-tech ${engineer.badgeColor}`}>
                      {engineer.badge}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium uppercase tracking-wider">{engineer.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                {engineer.skills.map(skill => (
                  <span key={skill} className="bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100 font-tech font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
