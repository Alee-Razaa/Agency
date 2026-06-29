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
  },
  {
    name: 'Sana R.',
    role: 'Media & Content Automation',
    badge: 'Senior',
    badgeColor: 'bg-pink-50 text-pink-600 border-pink-100',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    skills: ['CapCut', 'Make.com', 'Canva AI'],
  },
  {
    name: 'M. Taha',
    role: 'Computer Vision Specialist',
    badge: 'Expert',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    skills: ['YOLOv8', 'OpenCV', 'PyTorch'],
  },
  {
    name: 'Zainab K.',
    role: 'Backend Architect',
    badge: 'Mid',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    skills: ['Node.js', 'MongoDB', 'Express'],
  },
];

export const ActiveEngineers = () => {
  return (
    <section className="w-full py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-12">
        <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 font-sans">Active Engineers Pool</h2>
            <p className="text-sm text-slate-500 mt-1 font-medium">Vetted developers ready for production scale</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Roster Verified Live
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGINEERS.map((engineer, index) => (
            <motion.div
              key={engineer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl hover:border-indigo-500/40 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group"
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
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{engineer.name}</h3>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${engineer.badgeColor}`}>
                      {engineer.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">{engineer.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                {engineer.skills.map(skill => (
                  <span key={skill} className="bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-medium">
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
