import { generateMetadata } from '@/src/lib/metadata';
import { schemas, SchemaScript } from '@/src/lib/schema';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { OffersCarousel } from '@/src/components/sections/OffersCarousel';
import { FeaturesSection } from '@/src/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/src/components/sections/TestimonialsSection';
import { CTASection } from '@/src/components/sections/CTASection';
import { Terminal } from '@/src/components/Terminal';
import { Badge } from '@/src/components/Badge';

export const metadata = generateMetadata({
  title: 'AI-Powered Acquisition | Smarter Systems | Adapta Agency',
  description: 'High-performance AI acquisition systems and automation loops. Engineered for absolute scale and efficiency.',
  url: '/',
  keywords: ['AI Voice Agent', 'Full Stack AI App', 'Content Automation', 'SEO Engine', 'n8n automation'],
});

const TESTIMONIALS = [
  {
    quote: 'The AI Voice Agent reduced our appointment booking overhead by 70%. Absolute game changer.',
    author: 'Mark Sullivan',
    title: 'Director of Operations',
    company: 'Nexus Real Estate',
  },
  {
    quote: 'Rapid MVP development that actually scales. We launched our full-stack app in record time.',
    author: 'Sarah Chen',
    title: 'Founder',
    company: 'FinTech Flow',
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#030712]">
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

      {/* Kinetic Orbit System Centerpiece */}
      <HeroSection />

      {/* Offers & Services Dashboard */}
      <div id="services">
        <OffersCarousel />
      </div>

      <FeaturesSection
        headline="Why We Lead"
        features={[
          {
            icon: '⚡',
            title: 'Rapid Deployment',
            description: 'From architecture to production in days, not months.',
            details: ['Next.js & Supabase Stack', 'Automated CI/CD', 'Rapid MVP Cycles'],
          },
          {
            icon: '🤖',
            title: 'Intelligent Logic',
            description: 'Advanced reasoning loops that execute tasks autonomously.',
            details: ['Custom LLM Workflows', 'n8n & Make Automation', 'Voice AI Mastery'],
          },
          {
            icon: '📈',
            title: 'Engineered for Scale',
            description: 'Built to handle thousands of concurrent requests without friction.',
            details: ['Serverless Architecture', 'Edge Performance', 'Database Optimization'],
          },
        ]}
      />

      <TestimonialsSection
        headline="Proven Performance"
        testimonials={TESTIMONIALS}
      />

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge text="Transparency" className="mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Real-Time <span className="text-primary">Ops Portal</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Experience our transparent development process. Interact with our live portal prototype to see how we track and manage high-performance deployments.
            </p>
          </div>
          <Terminal />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      <CTASection
        headline="Ready to Automate?"
        description="Schedule a 30-minute infrastructure mapping session with our lead architects."
        primaryCTA={{ text: 'Book a Strategy Call', href: '/contact' }}
      />
    </main>
  );
}
