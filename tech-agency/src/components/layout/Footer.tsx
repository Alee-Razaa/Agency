'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer id="footer-contact" className="w-full bg-slate-950 border-t border-slate-900 pt-24 pb-12 px-6 lg:px-16 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* LEFT HALF: BRAND & IDENTITY (SPAN 5) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">a</div>
              <span className="text-xl font-bold tracking-tight text-white font-tech uppercase">Adapta<span className="text-indigo-400">Labs</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              Deploying production-ready AI frameworks, server architectures, and clean workflow business systems. We bridge the gap between complex engineering and seamless business operations.
            </p>
            <div className="flex gap-4">
              {['GitHub', 'LinkedIn', 'X (Twitter)', 'Instagram'].map((social) => (
                <a key={social} href={`#${social.toLowerCase()}`} className="text-xs font-bold text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-wider">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 inline-block">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 font-tech">Availability Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-semibold text-slate-300">Accepting Q1 2026 Projects</span>
            </div>
          </div>
        </div>

        {/* RIGHT HALF: NAVIGATION LINKS (SPAN 7) */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
          {/* Group 1: Services */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-tech">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">AI Voice Agents</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Full-Stack Apps</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">n8n Automations</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Computer Vision</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">E-Commerce</a></li>
            </ul>
          </div>

          {/* Group 2: Company */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-tech">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#engineers" className="hover:text-indigo-400 transition-colors">Our Engineers</a></li>
              <li><a href="#case-studies" className="hover:text-indigo-400 transition-colors">Case Portfolios</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing Models</a></li>
              <li><a href="#careers" className="hover:text-indigo-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Group 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-tech">Contact</h4>
            <div className="space-y-4 text-sm text-slate-400 font-medium">
              <p className="leading-relaxed">
                Sukkur IBA University,<br />Sukkur, Sindh, Pakistan
              </p>
              <a href="mailto:ops@oxfordsports.online" className="text-indigo-400 hover:underline block">ops@oxfordsports.online</a>
              <div className="pt-2">
                <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded font-bold uppercase border border-indigo-500/20">Escrow Secured</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SUB-FOOTER */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold text-slate-500 uppercase tracking-widest">
        <p>&copy; 2026 Adapta Labs. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#sla" className="hover:text-white transition-colors">SLA</a>
        </div>
      </div>
    </footer>
  );
};
