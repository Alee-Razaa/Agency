'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: 'Marcus Sterling',
    role: 'Director of Operations',
    quote: '"The automated pipeline transformed our content operations. We scaled our social channel volume by 400% entirely through autonomous n8n workflows."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    stars: 5
  },
  {
    name: 'Jonathan Vance',
    role: 'Oxford Sports Founder',
    quote: '"Exceptional execution on real-time inventory management. Bulk variant SKUs sync seamlessly across our storefront channels instantly."',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    stars: 5
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'AI Product Lead',
    quote: '"The integration of FastAPI backends with robust computer vision nodes resolved massive latency roadblocks. True engineering specialists."',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    stars: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="px-6 lg:px-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 font-sans">Client Testimonials</h2>
          <div className="w-12 h-[2px] bg-rose-500 mt-2"></div>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          {/* Infinite Scroll Container */}
          <div className="flex gap-6 w-max animate-scroll-marquee hover:[animation-play-state:paused]">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                className="w-[380px] bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between space-y-6 flex-shrink-0 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 shadow-sm">
                      <Image
                        src={testimonial.image}
                        fill
                        className="object-cover"
                        alt={testimonial.name}
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-[10px] text-slate-500 font-medium">{testimonial.role}</p>
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
