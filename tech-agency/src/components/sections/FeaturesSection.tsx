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
    <section className="py-24 px-6 lg:px-16 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{headline}</h2>
          {description && <p className="text-xl text-slate-400 max-w-2xl mx-auto">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              {feature.icon && <div className="mb-6 text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">{feature.icon}</div>}
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{feature.description}</p>
              {feature.details && (
                <ul className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="text-xs font-semibold text-slate-500 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
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
