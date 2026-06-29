'use client';

import React from 'react';
import Image from 'next/image';

const TECH_ICONS = [
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'FastAPI', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

export const TechStackMarquee = () => {
  return (
    <div className="w-full border-y border-slate-200 py-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden mb-12 relative z-10">
      <div className="flex gap-24 w-max animate-tech-track px-4">
        {[...TECH_ICONS, ...TECH_ICONS].map((icon, idx) => (
          <div key={`${icon.name}-${idx}`} className="relative h-10 w-24">
            <Image
              src={icon.url}
              alt={icon.name}
              fill
              className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
              sizes="96px"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-tech-track {
          animation: techMarquee 25s linear infinite;
        }
        @keyframes techMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
