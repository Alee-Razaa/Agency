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
    <div className="max-w-6xl mx-auto space-y-24 relative z-10 py-24 px-6 lg:px-16">

      {/* ========================================== */}
      {/* ---     PREMIUM SUBSCRIBE SECTION      --- */}
      {/* ========================================== */}
      <section className="max-w-4xl mx-auto py-4">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-[0_20px_40px_rgba(15,23,42,0.15)] relative overflow-hidden group">
          {/* Geometric background logic lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-md text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase font-tech block">Stay Synced</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight font-tech">Let us connect with you</h3>
              <p className="text-xs text-slate-400 font-light">Get immediate updates regarding framework expansions, architecture insights, and automation releases.</p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 focus-within:border-cyan-500/50 transition-all duration-300">
                <input
                  type="email"
                  required
                  placeholder="Enter network email address"
                  className="w-full bg-transparent text-white text-sm px-4 py-3 outline-none font-light placeholder:text-slate-500"
                />
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-tech font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 shrink-0 whitespace-nowrap">
                  {formStatus === 'syncing' ? 'Syncing...' : 'Subscribe'}
                </button>
              </div>
              {subscribeStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] font-tech text-cyan-400 mt-2 pl-2 block"
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
      <section className="max-w-4xl mx-auto py-4" id="contact">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase font-tech block">Initialization Portal</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-tech">
            {headline || "Let's Build Something Exceptional"}
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto font-light">
            {description || "Initialize sync, request enterprise-grade workflows, or establish architecture consultation protocols instantly."}
          </p>
        </div>

        <div className="bg-white/95 border-2 border-slate-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] backdrop-blur-md transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_30px_60px_rgba(99,102,241,0.08)] relative overflow-hidden group">

          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-dashed border-indigo-500/10 rounded-br-3xl pointer-events-none"></div>

          <form className="space-y-6" onSubmit={handleExecute}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-tech block">Ident / Full Name <span className="text-rose-500">*</span></label>
                <input type="text" required placeholder="e.g. Alex Mercer"
                  className="w-full bg-slate-50/50 border-2 border-slate-100 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none font-light tracking-wide transition-all duration-300 focus:bg-white focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)] placeholder:text-slate-400" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-tech block">Network Address / Email <span className="text-rose-500">*</span></label>
                <input type="email" required placeholder="name@enterprise.com"
                  className="w-full bg-slate-50/50 border-2 border-slate-100 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none font-light tracking-wide transition-all duration-300 focus:bg-white focus:border-pink-500 focus:shadow-[0_0_0_4px_rgba(236,72,153,0.1)] placeholder:text-slate-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-tech block">WhatsApp Comms</label>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-tech">Optional</span>
                </div>
                <input type="tel" placeholder="+1 (555) 000-0000 (Optional)"
                  className="w-full bg-slate-50/50 border-2 border-slate-100 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none font-light tracking-wide transition-all duration-300 focus:bg-white focus:border-emerald-500 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] placeholder:text-slate-400" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-tech block">Required Core Service <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-slate-50/50 border-2 border-slate-100 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none font-medium tracking-wide transition-all duration-300 focus:bg-white focus:border-amber-500 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.1)] appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Architecture Layer...</option>
                    <option value="ai-automation">AI Automation Workflows & Pipelines (n8n / Make.com)</option>
                    <option value="fullstack">Full-Stack AI Engineering & Custom Software</option>
                    <option value="computer-vision">Intelligent Surveillance & Vision AI (YOLOv8)</option>
                    <option value="b2b-ecommerce">Wholesale Platforms & High-Speed Inventory Sync</option>
                    <option value="market-intelligence">Market Intelligence & Lead Gen Automation</option>
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
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-tech block">Project Payload Specs / Requirements</label>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-tech">Optional</span>
              </div>
              <textarea rows={4} placeholder="Outline your data structures, operational constraints, or target milestones if ready... (Optional)"
                className="w-full bg-slate-50/50 border-2 border-slate-100 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none font-light tracking-wide transition-all duration-300 focus:bg-white focus:border-purple-500 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)] placeholder:text-slate-400 resize-none"></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-tech font-semibold tracking-wide text-slate-400 flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${formStatus === 'success' ? 'bg-emerald-500' : 'bg-emerald-500 animate-pulse'}`}></span>
                {formStatus === 'idle' && 'System Standing: Operational'}
                {formStatus === 'syncing' && 'Syncing Operational Target...'}
                {formStatus === 'success' && 'System Link Established Successfully.'}
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-950 text-white font-tech font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/10"
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
