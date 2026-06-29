import Link from "next/link";
import { Zap, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-[10deg] transition-transform duration-500">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tighter">
                TECH<span className="text-blue-500">AGENCY</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Architecting the next generation of AI-driven business infrastructure and automated intelligence loops.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Ecosystem</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">AI Voice Agents</Link></li>
              <li><Link href="/services" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">Full Stack MVPs</Link></li>
              <li><Link href="/services" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">Content Automation</Link></li>
              <li><Link href="/services" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">Technical SEO</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/case-studies" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-1">Documentation <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-1">API Status <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Newsletter</h4>
            <p className="text-sm text-slate-500">Get the latest technical architectural insights.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Terminal input..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500/50 w-full" />
              <button className="bg-blue-600 text-white p-2 rounded-xl">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">
            © 2026 Tech Agency Matrix. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-slate-600 hover:text-white font-bold uppercase tracking-widest transition-colors">Terms of Protocol</a>
            <a href="#" className="text-[10px] text-slate-600 hover:text-white font-bold uppercase tracking-widest transition-colors">Privacy Encryption</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
