import { notFound } from "next/navigation";
import Image from "next/image";
import { Check, X, ArrowRight, Zap, Star, Clock, Shield, BarChart3, Globe } from "lucide-react";
import { OFFERS_DATA } from "@/src/constants/offers";
import { generateMetadata as baseGenerateMetadata } from "@/src/lib/metadata";
import { schemas, SchemaScript } from "@/src/lib/schema";
import { Metadata } from 'next';
import { ScrollReveal } from "@/src/components/ScrollReveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static params for SEO and performance
export async function generateStaticParams() {
  return OFFERS_DATA.map((offer) => ({
    slug: offer.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const offer = OFFERS_DATA.find((o) => o.slug === slug);
  if (!offer) return {};

  return baseGenerateMetadata({
    title: `${offer.title} | Tech Agency`,
    description: offer.shortDesc,
    url: `/services/${offer.slug}`,
    keywords: [offer.title, "AI Automation", "Tech Agency", offer.slug.replace(/-/g, " ")],
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const slug = (await params).slug;
  const offer = OFFERS_DATA.find((o) => o.slug === slug);

  if (!offer) {
    notFound();
  }

  const serviceSchema = schemas.service({
    name: offer.title,
    description: offer.shortDesc,
    url: `https://your-tech-agency.com/services/${offer.slug}`,
    price: offer.price.toString(),
    priceCurrency: "USD",
  });

  return (
    <main className="min-h-screen bg-[#030712] pt-32 pb-20 overflow-hidden relative">
      <SchemaScript schema={serviceSchema} />

       {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-12">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Service Deep-Dive
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                {offer.title}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
                &ldquo;{offer.tagline}&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="aspect-video relative rounded-3xl overflow-hidden border border-white/10 group">
                <Image
                  src={offer.images[0]}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-px bg-blue-500" />
                  Strategic Overview
                </h2>
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                  <p className="text-slate-300 leading-relaxed text-lg mb-0">
                    {offer.longDesc}
                  </p>
                </div>
              </section>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal direction="left" delay={0.4}>
                <section className="space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Included Deliverables
                  </h3>
                  <ul className="space-y-4 ml-0">
                    {offer.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 mb-0">
                        <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                          <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
                        </div>
                        <span className="text-slate-300 font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <section className="space-y-6 opacity-60">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full" />
                    Extended Capabilities
                  </h3>
                  <ul className="space-y-4 ml-0">
                    {offer.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 mb-0">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                          <X className="w-3.5 h-3.5 text-slate-500" strokeWidth={3} />
                        </div>
                        <span className="text-slate-500 font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.5}>
              <section className="space-y-8">
                 <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Implementation Roadmap
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {offer.workflow.map((step, idx) => (
                      <div key={idx} className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex gap-5 items-start hover:bg-slate-900 transition-colors">
                        <span className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-xl border border-blue-500/20 shrink-0">
                          Step 0{idx+1}
                        </span>
                        <span className="text-slate-300 font-semibold leading-relaxed text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Right Column: Sticky Pricing & Stats */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" className="sticky top-32 space-y-8">
              {/* Order Card */}
              <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

                <div className="flex justify-between items-end mb-8 relative z-10">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2">Base Project Investment</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">${offer.price}</span>
                      <span className="text-sm text-slate-500 font-bold uppercase tracking-tighter">USD</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2">Cycle Time</span>
                    <div className="flex items-center gap-2 text-blue-400">
                      <Clock className="w-5 h-5" />
                      <span className="text-xl font-bold">{offer.deliveryDays} Days</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8 relative z-10">
                  <div className="flex items-center gap-3 text-slate-400 text-sm py-3 border-y border-white/5">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>Secure Intellectual Property Transfer</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>99.8% Project Satisfaction Rate</span>
                  </div>
                </div>

                <a
                  href={offer.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 text-center block tracking-wide group mb-6 relative z-10"
                >
                  Initiate Project Order
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest relative z-10">
                  Managed via PeoplePerHour Protection
                </p>
              </div>

              {/* Requirements Card */}
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Prerequisites</h4>
                <div className="space-y-4">
                  {offer.requirements.map((req, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl text-center">
                  <BarChart3 className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{offer.views}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Interactions</div>
                </div>
                <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl text-center">
                  <Globe className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{offer.sales}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Deployments</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </main>
  );
}

