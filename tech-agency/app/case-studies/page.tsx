import { generateMetadata } from '@/src/lib/metadata';
import Image from 'next/image';
import { ArrowRight, BarChart3, Zap, Globe, Cpu } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Technical Case Studies | Tech Agency Portfolio',
  description: 'Deep-dives into technical performance metrics and ROI for our AI and automation deployments.',
  url: '/case-studies',
});

const CASE_STUDIES = [
  {
    title: "Global SaaS: AI Voice Support Migration",
    client: "Nexus Solutions",
    impact: "85% Automation Rate",
    metric: "Reduction in Support OpEx",
    value: "-$240k/yr",
    tags: ["AI Voice", "N8N", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "E-commerce: Cross-Channel Inventory Sync",
    client: "Vogue Dynamics",
    impact: "0% Oversell Rate",
    metric: "Revenue Growth YoY",
    value: "+114%",
    tags: ["Shopify", "TikTok Shop", "API Hub"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "FinTech: Real-time Analytics Dashboard",
    client: "Alpha Capital",
    impact: "Latency < 200ms",
    metric: "Data Processing Vol",
    value: "2.4B Events/mo",
    tags: ["Next.js 15", "MongoDB", "Websockets"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#030712] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <Zap className="w-3 h-3" />
            Performance Metrics
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Proof of <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Excellence.
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed font-medium">
            We don&apos;t just build features. We engineer business outcomes with measurable ROI and high-fidelity technical performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[40px] overflow-hidden hover:border-emerald-500/30 transition-all duration-500 p-4 md:p-8">

              {/* Image Side */}
              <div className="lg:col-span-5 h-[300px] lg:h-[450px] relative rounded-[32px] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 p-4 md:p-8 space-y-8">
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Client: {study.client}</p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-1">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{study.metric}</p>
                    <p className="text-3xl font-bold text-white tracking-tight">{study.value}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Impact Core</p>
                    <p className="text-3xl font-bold text-emerald-400 tracking-tight">{study.impact}</p>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                   <button className="bg-white text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-emerald-400 transition-all group/btn">
                     Explore Technical Architecture
                     <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                   <div className="hidden md:flex gap-4">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                   </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
