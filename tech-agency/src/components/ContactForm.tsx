'use client';

import React, { useActionState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitContactForm, FormState } from '@/app/contact/actions';

const initialState: FormState = {};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-[40px] p-12 text-center space-y-6 animate-fadeInUp">
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
        <p className="text-slate-400 leading-relaxed">
          {state.message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="text-emerald-400 font-bold hover:underline"
        >
          Send another transmission
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
      <form action={formAction} className="space-y-6">
        {state.message && !state.success && (
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-center gap-3 text-red-400 text-sm font-medium">
            <AlertCircle className="w-4 h-4" />
            {state.message}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Entity Name</label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              required
              className={`w-full bg-white/5 border ${state.errors?.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all`}
            />
            {state.errors?.name && (
              <p className="text-[10px] text-red-400 mt-1 ml-1">{state.errors.name[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Communication Node</label>
            <input
              name="email"
              type="email"
              placeholder="john@company.com"
              required
              className={`w-full bg-white/5 border ${state.errors?.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all`}
            />
            {state.errors?.email && (
              <p className="text-[10px] text-red-400 mt-1 ml-1">{state.errors.email[0]}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Infrastructure Focus</label>
          <div className="relative">
            <select
              name="focus"
              defaultValue="AI Voice Automation"
              className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
            >
              <option value="AI Voice Automation">AI Voice Automation</option>
              <option value="Full Stack Web Ecosystem">Full Stack Web Ecosystem</option>
              <option value="Search Dominance (SEO/AEO)">Search Dominance (SEO/AEO)</option>
              <option value="Custom Enterprise Pipeline">Custom Enterprise Pipeline</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
              ▼
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Objective Summary</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Describe the technical requirements and scale..."
            required
            className={`w-full bg-white/5 border ${state.errors?.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none`}
          ></textarea>
          {state.errors?.message && (
            <p className="text-[10px] text-red-400 mt-1 ml-1">{state.errors.message[0]}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
        >
          {isPending ? (
            <>
              Transmitting...
              <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              Transmit Request
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
