'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface CTAProps {
  headline?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTASection({ headline, description, primaryCTA }: CTAProps) {
  const [subscribeStatus, setSubscribeStatus] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'syncing' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('syncing');
    setTimeout(() => {
      setSubscribeStatus('✓ System registered. Welcome to the loop.');
      setFormStatus('idle');
      setTimeout(() => setSubscribeStatus(null), 4000);
    }, 1000);
  };

  const handleExecute = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('syncing');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <div className="max-w-[1920px] mx-auto space-y-10 sm:space-y-16 relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-16 bg-slate-950">

      {/* ========================================== */}
      {/* ---     PREMIUM SUBSCRIBE SECTION      --- */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto py-2 sm:py-4">
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-16 shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group border border-slate-800">
          {/* Geometric background logic lines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6 sm:gap-8 xl:gap-12">
            <div className="space-y-4 max-w-2xl text-center xl:text-left">
              <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase font-tech block">Stay Synced</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight font-tech">Let us connect with you</h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-light">Get immediate updates regarding framework expansions, architecture insights, and automation releases.</p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full xl:w-auto flex-1 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-slate-800/50 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-700 focus-within:border-cyan-500/50 transition-all duration-300">
                <input
                  type="email"
                  required
                  placeholder="Enter network email address"
                  className="w-full bg-transparent text-white text-sm sm:text-base px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 outline-none font-light placeholder:text-slate-500"
                />
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-tech font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-200 shrink-0 whitespace-nowrap">
                  {formStatus === 'syncing' ? 'Syncing...' : 'Subscribe'}
                </button>
              </div>
              {subscribeStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-tech text-cyan-400 mt-3 pl-3 block"
                >
                  {subscribeStatus}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* ---  PREMIUM ARCHITECTURE CTA FORM     --- */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto py-2 sm:py-4" id="contact">
        <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-indigo-400 uppercase font-tech block">Initialization Portal</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white font-tech">
            {headline || "Let's Build Something Exceptional"}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed px-2">
            {description || "Initialize sync, request enterprise-grade workflows, or establish architecture consultation protocols instantly."}
          </p>
        </div>

        <div className="bg-slate-900/50 border-2 border-slate-800 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-8 md:p-16 lg:p-20 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-indigo-500/30 hover:shadow-indigo-500/5 relative overflow-hidden group">

          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-dashed border-indigo-500/10 rounded-br-3xl pointer-events-none"></div>

          <form className="space-y-6" onSubmit={handleExecute}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase font-tech block">Ident / Full Name <span className="text-rose-500">*</span></label>
                <input type="text" required placeholder="e.g. Alex Mercer"
                  className="w-full bg-slate-800/50 border-2 border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-light tracking-wide transition-all duration-300 focus:bg-slate-800 focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)] placeholder:text-slate-500" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase font-tech block">Network Address / Email <span className="text-rose-500">*</span></label>
                <input type="email" required placeholder="name@enterprise.com"
                  className="w-full bg-slate-800/50 border-2 border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-light tracking-wide transition-all duration-300 focus:bg-slate-800 focus:border-pink-500 focus:shadow-[0_0_0_4px_rgba(236,72,153,0.1)] placeholder:text-slate-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold tracking-wider text-slate-300 uppercase font-tech block">WhatsApp Comms</label>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-tech">Optional</span>
                </div>
                <input type="tel" placeholder="+1 (555) 000-0000 (Optional)"
                  className="w-full bg-slate-800/50 border-2 border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-light tracking-wide transition-all duration-300 focus:bg-slate-800 focus:border-emerald-500 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] placeholder:text-slate-500" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase font-tech block">Required Core Service <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-slate-800/50 border-2 border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-medium tracking-wide transition-all duration-300 focus:bg-slate-800 focus:border-amber-500 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.1)] appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-slate-900">Select Architecture Layer...</option>
                    <option value="ai-automation" className="bg-slate-900">AI Automation Workflows & Pipelines (n8n / Make.com)</option>
                    <option value="fullstack" className="bg-slate-900">Full-Stack AI Engineering & Custom Software</option>
                    <option value="computer-vision" className="bg-slate-900">Intelligent Surveillance & Vision AI (YOLOv8)</option>
                    <option value="b2b-ecommerce" className="bg-slate-900">Wholesale Platforms & High-Speed Inventory Sync</option>
                    <option value="market-intelligence" className="bg-slate-900">Market Intelligence & Lead Gen Automation</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase font-tech block">Project Payload Specs / Requirements</label>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-tech">Optional</span>
              </div>
              <textarea rows={4} placeholder="Outline your data structures, operational constraints, or target milestones if ready... (Optional)"
                className="w-full bg-slate-800/50 border-2 border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-light tracking-wide transition-all duration-300 focus:bg-slate-800 focus:border-purple-500 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)] placeholder:text-slate-500 resize-none"></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-tech font-semibold tracking-wide text-slate-500 flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${formStatus === 'success' ? 'bg-emerald-500' : 'bg-emerald-500 animate-pulse'}`}></span>
                {formStatus === 'idle' && 'System Standing: Operational'}
                {formStatus === 'syncing' && 'Syncing Operational Target...'}
                {formStatus === 'success' && 'System Link Established Successfully.'}
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 font-tech font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 group shadow-xl"
              >
                {primaryCTA?.text || "Execute Connection"}
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
