'use client';

import React from 'react';
import { Badge } from '@/src/components/Badge';
import { ScrollReveal } from '@/src/components/ScrollReveal';
import { Terminal } from '@/src/components/Terminal';

export function OpsPortalSection() {
  return (
    <section id="ops-portal" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-slate-950">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <ScrollReveal direction="up" className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12 w-full">
          <Badge text="Transparency" className="mb-3 sm:mb-4 scale-100 sm:scale-110" />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-tech w-full">
            Real-Time <span className="text-indigo-400">Ops Portal</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-4xl font-light leading-relaxed px-2 sm:px-4">
            Experience our transparent development process. Interact with our live portal prototype to see how we track and manage high-performance deployments.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <Terminal />
        </ScrollReveal>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-indigo-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none" />
    </section>
  );
}
