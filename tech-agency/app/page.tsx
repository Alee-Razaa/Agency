import { generateMetadata } from '@/src/lib/metadata';
import { schemas, SchemaScript } from '@/src/lib/schema';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { OffersCarousel } from '@/src/components/sections/OffersCarousel';
import { FeaturesSection } from '@/src/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/src/components/sections/TestimonialsSection';
import { CTASection } from '@/src/components/sections/CTASection';
import { Terminal } from '@/src/components/Terminal';
import { Badge } from '@/src/components/Badge';
import { ScrollReveal } from '@/src/components/ScrollReveal';
import { TechStackMarquee } from '@/src/components/sections/TechStackMarquee';
import { BenefitsGrid } from '@/src/components/sections/BenefitsGrid';
import { ActiveEngineers } from '@/src/components/sections/ActiveEngineers';
import { TechGridBackground } from '@/src/components/TechGridBackground';

export const metadata = generateMetadata({
  title: 'AI-Powered Acquisition | Smarter Systems | Adapta Agency',
  description: 'High-performance AI acquisition systems and automation loops. Engineered for absolute scale and efficiency.',
  url: '/',
  keywords: ['AI Voice Agent', 'Full Stack AI App', 'Content Automation', 'SEO Engine', 'n8n automation'],
});

export default function HomePage() {
  return (
    <main className="bg-[#030712] relative min-h-screen">
      <TechGridBackground />

      <SchemaScript
        schema={schemas.organization({
          name: 'Adapta Tech Agency',
          logo: 'https://adapta-agency.com/logo.png',
          description: 'High-performance AI acquisition systems and automation loops.',
          url: 'https://adapta-agency.com',
          phone: '+92-XXX-XXXXXXX',
          sameAs: ['https://linkedin.com/company/adapta'],
        })}
      />

      <div className="relative z-10">
        <HeroSection />

        <ScrollReveal delay={0.1}>
          <TechStackMarquee />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div id="services">
            <OffersCarousel />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <BenefitsGrid />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ActiveEngineers />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.2}>
          <TestimonialsSection />
        </ScrollReveal>

        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal direction="up" className="flex flex-col items-center text-center mb-16">
              <Badge text="Transparency" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Real-Time <span className="text-primary">Ops Portal</span>
              </h2>
              <p className="text-gray-400 max-w-2xl font-light">
                Experience our transparent development process. Interact with our live portal prototype to see how we track and manage high-performance deployments.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Terminal />
            </ScrollReveal>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>

        <ScrollReveal direction="up">
          <CTASection
            headline="Ready to Automate?"
            description="Schedule a 30-minute infrastructure mapping session with our lead architects."
            primaryCTA={{ text: 'Book a Strategy Call', href: '/contact' }}
          />
        </ScrollReveal>
      </div>
    </main>
  );
}

