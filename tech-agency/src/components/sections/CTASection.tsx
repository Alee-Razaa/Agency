'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
    setSubscribeStatus('✓ System registered. Welcome to the loop.');
    setTimeout(() => setSubscribeStatus(null), 4000);
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
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-[0_20px_40px_rgba(15,23,42,0.15)] relative overflow-hidden group border border-white/5">
          {/* Geometric background logic lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-md text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase font-sans block">Stay Synced</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight font-sans">Infrastructure Updates</h3>
              <p className="text-xs text-slate-400 font-normal">Get immediate updates regarding framework expansions and automation releases.</p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 focus-within:border-indigo-500/50 transition-all duration-300">
                <input
                  type="email"
                  required
                  placeholder="Enter network email address"
                  className="w-full bg-transparent text-white text-sm px-4 py-3 outline-none font-normal placeholder:text-slate-500"
                />
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 shrink-0 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              {subscribeStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] font-sans text-indigo-400 mt-2 pl-2 block"
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
      <section className="max-w-4xl mx-auto py-4">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-indigo-400 uppercase font-sans block">Initialization Portal</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
            {headline || "Let's Build Something Exceptional"}
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto font-normal">
            {description || "Initialize sync, request enterprise-grade workflows, or establish architecture consultation protocols instantly."}
          </p>
        </div>

        <div className="bg-[#040814] border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-indigo-500/30 relative overflow-hidden group">

          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-dashed border-indigo-500/10 rounded-br-3xl pointer-events-none"></div>

          <form className="space-y-6" onSubmit={handleExecute}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-sans block">Full Name</label>
                <input type="text" required placeholder="e.g. Alex Mercer"
                  className="w-full bg-slate-900/50 border border-slate-800 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-normal tracking-wide transition-all duration-300 focus:border-indigo-500 placeholder:text-slate-600" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-sans block">Work Email</label>
                <input type="email" required placeholder="name@enterprise.com"
                  className="w-full bg-slate-900/50 border border-slate-800 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-normal tracking-wide transition-all duration-300 focus:border-indigo-500 placeholder:text-slate-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-sans block">Required Service</label>
                <select required className="w-full bg-slate-900/50 border border-slate-800 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-medium tracking-wide transition-all duration-300 focus:border-indigo-500 appearance-none cursor-pointer">
                  <option value="" disabled selected>Select Architecture Layer...</option>
                  <option value="ai-automation">AI Automation Workflows</option>
                  <option value="fullstack">Full-Stack AI Engineering</option>
                  <option value="computer-vision">Computer Vision (YOLOv8)</option>
                  <option value="b2b-ecommerce">E-commerce Architecture</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-sans block">Budget Range</label>
                <select required className="w-full bg-slate-900/50 border border-slate-800 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-medium tracking-wide transition-all duration-300 focus:border-indigo-500 appearance-none cursor-pointer">
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-sans block">Project Brief</label>
              <textarea rows={4} placeholder="Outline your requirements..."
                className="w-full bg-slate-900/50 border border-slate-800 text-white text-sm rounded-xl px-4 py-3.5 outline-none font-normal tracking-wide transition-all duration-300 focus:border-indigo-500 placeholder:text-slate-600 resize-none"></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-sans font-semibold tracking-wide text-slate-500 flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${formStatus === 'success' ? 'bg-emerald-500' : 'bg-emerald-500 animate-pulse'}`}></span>
                {formStatus === 'idle' && 'System Operational'}
                {formStatus === 'syncing' && 'Syncing...'}
                {formStatus === 'success' && 'Connection Established'}
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 group shadow-lg shadow-indigo-600/20"
              >
                {primaryCTA?.text || "Execute Connection"}
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
