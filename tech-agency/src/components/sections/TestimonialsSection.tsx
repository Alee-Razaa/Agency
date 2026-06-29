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
    <section className="w-full py-24 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="px-6 lg:px-16">
          <div className="space-y-2 bg-white/70 p-4 rounded-xl backdrop-blur-sm inline-block">
            <span className="text-xs font-bold tracking-[0.25em] text-indigo-600 uppercase font-tech block">Validation Logs</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 font-tech">Enterprise Feedback</h2>
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="flex gap-6 w-max animate-scroll-marquee hover:[animation-play-state:paused]">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                className={`w-[380px] bg-white/95 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between space-y-6 flex-shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group ${testimonial.border} ${testimonial.shadow}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 shadow-sm">
                      <Image
                        src={testimonial.image}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        alt={testimonial.name}
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-tech">{testimonial.name}</h4>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="text-amber-400 text-xs tracking-tighter">
                    {'★'.repeat(testimonial.stars)}
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic font-medium">
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
