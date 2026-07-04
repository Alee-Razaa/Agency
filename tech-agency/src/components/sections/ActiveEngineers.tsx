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
    <section id="engineers" className="w-full py-10 sm:py-12 md:py-20 relative z-10 bg-slate-950">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16 space-y-10 sm:space-y-16">
        <div className="space-y-1.5 bg-slate-900/50 p-3 sm:p-4 rounded-xl backdrop-blur-sm inline-block border border-slate-800 shadow-sm">
          <span className="text-[9px] font-bold tracking-[0.25em] text-indigo-400 uppercase font-tech block">Human Capital Pipeline</span>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-tech leading-tight">Vetted Expert Engineering Pool</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {ENGINEERS.map((engineer, index) => (
            <motion.div
              key={engineer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: [0, -1, 1, -1, 0]
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className={`relative bg-slate-900/80 p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-indigo-500/10 group flex flex-col items-center text-center ${engineer.hoverColor}`}
            >
              {/* Expertise Badge as a Clip */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <span className={`text-[10px] font-bold px-4 py-1.5 rounded-full border shadow-sm font-tech uppercase tracking-widest bg-slate-800 border-slate-700 ${engineer.badgeColor.replace('bg-indigo-50 text-indigo-600 border-indigo-100', 'text-indigo-400').replace('bg-pink-50 text-pink-600 border-pink-100', 'text-pink-400').replace('bg-amber-50 text-amber-700 border-amber-200', 'text-amber-400').replace('bg-slate-100 text-slate-700 border-slate-200', 'text-slate-400')}`}>
                  {engineer.badge}
                </span>
              </div>

              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-slate-800 border-2 border-slate-700 shadow-inner group-hover:border-indigo-500/50 transition-colors duration-500">
                  <Image
                    src={engineer.image}
                    alt={engineer.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    sizes="96px"
                  />
                </div>
              </div>

              <div className="space-y-1 mb-5 sm:mb-6 md:mb-8">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors font-tech leading-tight">{engineer.name}</h3>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.15em]">{engineer.role}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 w-full mt-auto">
                {engineer.skills.slice(0, 4).map(skill => (
                  <span key={skill} className="bg-slate-800/50 text-slate-400 px-2 py-2 rounded-xl border border-slate-700 font-tech font-bold text-[10px] flex items-center justify-center transition-colors group-hover:bg-slate-800 group-hover:border-indigo-500/30 group-hover:text-slate-300">
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
