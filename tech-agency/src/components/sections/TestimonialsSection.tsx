'use client';

import React from 'react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: 'Marcus Sterling',
    role: 'Director of Operations',
    quote: '"The automated pipeline transformed our content operations. We scaled our social channel volume by 400% entirely through autonomous n8n workflows."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    stars: 5,
    border: 'hover:border-cyan-500',
    shadow: 'hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)]'
  },
  {
    name: 'Jonathan Vance',
    role: 'Oxford Sports Founder',
    quote: '"Exceptional execution on real-time inventory management. Bulk variant SKUs sync seamlessly across our storefront channels instantly."',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    stars: 5,
    border: 'hover:border-pink-500',
    shadow: 'hover:shadow-[0_15px_35px_rgba(236,72,153,0.15)]'
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'AI Product Lead',
    quote: '"The integration of FastAPI backends with robust computer vision nodes resolved massive latency roadblocks. True engineering specialists."',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    stars: 5,
    border: 'hover:border-amber-500',
    shadow: 'hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)]'
  }
];

export function TestimonialsSection() {
  return (
    <section id="case-studies" className="w-full py-10 sm:py-12 md:py-20 relative z-10 overflow-hidden bg-slate-950">
      <div className="max-w-[1920px] mx-auto space-y-10 sm:space-y-16">
        <div className="px-4 sm:px-6 lg:px-16">
          <div className="space-y-1.5 bg-slate-900/50 p-3 sm:p-4 rounded-xl backdrop-blur-sm inline-block border border-slate-800 shadow-sm">
            <span className="text-[9px] font-bold tracking-[0.25em] text-indigo-400 uppercase font-tech block">Validation Logs</span>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-tech leading-tight">Enterprise Feedback</h2>
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8">
          <div className="flex gap-4 sm:gap-6 w-max animate-scroll-marquee hover:[animation-play-state:paused]">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                className={`w-[260px] sm:w-[300px] md:w-[350px] lg:w-[420px] bg-slate-900/50 border border-slate-800 p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col justify-between space-y-4 sm:space-y-6 flex-shrink-0 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group ${testimonial.border.replace('cyan-500', 'cyan-400').replace('pink-500', 'pink-400').replace('amber-500', 'amber-400')} ${testimonial.shadow.replace('0.15', '0.1')}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-slate-700 shadow-sm">
                      <Image
                        src={testimonial.image}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        alt={testimonial.name}
                        sizes="(max-width: 768px) 48px, 64px"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-white font-tech">{testimonial.name}</h4>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="text-amber-400 text-sm sm:text-base md:text-lg tracking-tighter">
                    {'★'.repeat(testimonial.stars)}
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed italic font-medium">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-marquee {
          animation: scrollMarquee 32s linear infinite;
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
