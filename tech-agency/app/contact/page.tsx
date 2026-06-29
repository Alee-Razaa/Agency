import { generateMetadata } from '@/src/lib/metadata';
import { Mail, MessageSquare, Phone, MapPin, Send, Zap } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Contact | Tech Agency Strategy Session',
  description: 'Book a high-level strategy session to architect your AI ecosystem.',
  url: '/contact',
});

export default function ContactPage() {
  return (
    <main className="bg-[#030712] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left: Info */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <Zap className="w-3 h-3" />
                Connectivity Hub
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Initiate <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Architecture.
                </span>
              </h1>
              <p className="text-slate-400 text-xl max-w-lg leading-relaxed font-medium">
                Bridge the gap between vision and high-performance technical reality. Connect with our engineering core.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-500/50 transition-all">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Secure Channel</p>
                  <p className="text-xl font-bold text-white">ops@tech-agency.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600/10 group-hover:border-emerald-500/50 transition-all">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Direct Terminal</p>
                  <p className="text-xl font-bold text-white">+1 (555) 0123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Entity Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Communication Node</label>
                        <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Infrastructure Focus</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none">
                        <option>AI Voice Automation</option>
                        <option>Full Stack Web Ecosystem</option>
                        <option>Search Dominance (SEO/AEO)</option>
                        <option>Custom Enterprise Pipeline</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Objective Summary</label>
                    <textarea rows={4} placeholder="Describe the technical requirements and scale..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none"></textarea>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group">
                    Transmit Request
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
             </form>
          </div>

        </div>
      </div>
    </main>
  );
}
