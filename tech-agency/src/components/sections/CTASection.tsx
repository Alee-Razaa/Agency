"use client";

import { ArrowRight } from "lucide-react";

export function CTASection({
  headline,
  description,
  primaryCTA,
}: {
  headline: string;
  description?: string;
  primaryCTA: { text: string; href: string };
}) {
  return (
    <section className="py-24 px-6 lg:px-16 bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            {headline}
          </h2>
          {description && (
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={primaryCTA.href}
              className="group bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3"
            >
              {primaryCTA.text}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-sm text-slate-500 font-medium">
              Join 50+ businesses automating their growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
