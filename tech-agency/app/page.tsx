import { generateMetadata } from '@/src/lib/metadata';
import { schemas, SchemaScript } from '@/src/lib/schema';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { OffersCarousel } from '@/src/components/sections/OffersCarousel';
import { FeaturesSection } from '@/src/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/src/components/sections/TestimonialsSection';
import { CTASection } from '@/src/components/sections/CTASection';
import { ScrollReveal } from '@/src/components/ScrollReveal';
import { TechStackMarquee } from '@/src/components/sections/TechStackMarquee';
import { BenefitsGrid } from '@/src/components/sections/BenefitsGrid';
import { ActiveEngineers } from '@/src/components/sections/ActiveEngineers';
import { OpsPortalSection } from '@/src/components/sections/OpsPortalSection';
import { TechGridBackground } from '@/src/components/TechGridBackground';

export const metadata = generateMetadata({
  title: 'AI-Powered Acquisition | Smarter Systems | Adapta Agency',
  description: 'High-performance AI acquisition systems and automation loops. Engineered for absolute scale and efficiency.',
  url: '/',
  keywords: ['AI Voice Agent', 'Full Stack AI App', 'Content Automation', 'SEO Engine', 'n8n automation'],
});

export default function HomePage() {
  return (
    <main className="bg-slate-950 relative min-h-screen">
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
          <OffersCarousel />
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

        <OpsPortalSection />

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
