import { ReactNode } from 'react';

interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
  details?: string[];
}

export function FeaturesSection({
  headline,
  description,
  features,
}: {
  headline: string;
  description?: string;
  features: Feature[];
}) {
  return (
    <section className="py-12 md:py-20 px-6 lg:px-16 bg-[#030712] relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">{headline}</h2>
          {description && <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <div
                key={idx}
                className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              {feature.icon && <div className="mb-6 md:mb-8 text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 inline-block">{feature.icon}</div>}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-light">{feature.description}</p>
              {feature.details && (
                <ul className="space-y-3 md:space-y-4">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="text-xs md:text-sm font-semibold text-slate-500 flex items-center gap-3 md:gap-4">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
