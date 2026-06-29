import { generateMetadata } from '@/src/lib/metadata';
import { OffersCarousel } from '@/src/components/sections/OffersCarousel';

export const metadata = generateMetadata({
  title: 'AI Services & Solutions | High-Performance Tech Agency',
  description: 'Explore our high-performance AI services: Voice Agents, Full Stack Apps, Content Automation, and SEO/AEO Engines.',
  url: '/services',
});

export default function ServicesPage() {
  return (
    <main className="bg-[#030712] min-h-screen pt-24">
      <OffersCarousel />

      {/* Dynamic routing prepared - this page acts as the central dashboard */}
      <section className="py-20 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Custom Enterprise Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                Don&apos;t see exactly what you need? We architect custom AI ecosystems tailored to your specific infrastructure and business goals.
            </p>
            <div className="flex justify-center">
                <a
                    href="/contact"
                    className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                >
                    Book a Strategy Session
                </a>
            </div>
        </div>
      </section>
    </main>
  );
}
