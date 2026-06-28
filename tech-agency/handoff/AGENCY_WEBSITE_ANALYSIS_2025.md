# Tech Agency Website Development Framework 2025-2026
## Comprehensive Analysis: Modern SEO, AEO, Tech Stack & Architecture

---

## EXECUTIVE SUMMARY

Building an agency website that ranks in both traditional search AND AI-powered answer engines requires a fundamentally different approach than 2023-2024 standards. The landscape has shifted from "ranking for clicks" to "being cited as the answer." This document provides research-backed recommendations based on current industry standards (June 2026).

---

## PART 1: MODERN SEO/AEO/GEO LANDSCAPE (2025-2026)

### The Shift: SEO → AEO → GEO

**SEO (Search Engine Optimization):** Traditional ranking in Google search results.
- Still foundational and required
- Core Web Vitals remain critical
- Mobile-first indexing mandatory

**AEO (Answer Engine Optimization):** Optimization for AI-driven answer extraction (Google AI Overviews, featured snippets, voice assistants).
- Content structured for direct answer extraction
- Schema markup essential
- 69% of Google searches now end without a click (2025 data)

**GEO (Generative Engine Optimization):** Optimization for citation in LLM-generated responses (ChatGPT, Claude, Perplexity, Gemini).
- Differs from AEO: AEO extracts pre-written answers; GEO influences source selection during generation
- Princeton research (2024) showed 30-40% citation lift through deliberate GEO tactics
- Newer discipline with formalized academic backing

### Key Research Findings

**Citation Velocity:**
- 55% of AI Overview citations come from the first 30% of page content
- Pages with FAQPage schema appear in Google AI Overviews 3.2x more often than pages without
- AI-referred sessions for schema-enhanced content grew 527% between January-May 2025

**Schema Markup Impact:**
- Schema markup improves LLM comprehension by 300% compared to unstructured data (Data World research)
- Brands cited in AI Overviews earn 35% more organic clicks than uncited competitors in traditional results
- JSON-LD is now part of LLM knowledge graphs, not just SERP decoration

**Content Structure:**
- Answer-first formatting: Direct 40-60 word answer in first 1-2 sentences of each section
- Clear heading hierarchy (H1 > H2 > H3) improves AI citation probability by ~20%
- Self-contained sections that function as standalone chunks

### Zero-Click Search Context
- 69% of Google searches end without a click (up from 56% in 2024)
- ChatGPT: 800 million weekly users
- Gartner predicts 25% of organic search traffic will shift to AI chatbots/virtual assistants by 2026
- Google AI Overviews now show ads above/below the answer container (not inside answer text)

---

## PART 2: RECOMMENDED TECH STACK

### Core Frontend Stack

**Framework: Next.js 15+**
- Server-side rendering (SSR) for SEO-ready content
- Static site generation (SSG) for fast-loading, crawlable pages
- Hybrid rendering: choose SSR or SSG per route
- Built-in image optimization via `<Image>` component
- Vercel integration for frictionless deployment
- Official Vercel partner ecosystem

**Styling: Tailwind CSS v4+**
- Utility-first CSS with <10kb production output (Oxide engine)
- 5x faster builds than v3
- Component abstraction preferred over @apply
- CSS variables via @theme for design tokens
- Scalable for multi-team projects

**UI Components: shadcn/ui + custom components**
- Headless component library (copy, don't install)
- Built on Radix UI primitives + Tailwind
- Accessible by default (ARIA-compliant)
- Type-safe with TypeScript

**Database/CMS Options:**

1. **Headless CMS (Recommended for agency sites):**
   - Sanity.io: Powerful GROQ queries, excellent developer experience
   - Contentful: GraphQL-based, strong localization
   - Storyblok: User-friendly, component-first
   - Strapi: Self-hosted, open-source option

2. **Database (for dynamic content/lead capture):**
   - PostgreSQL (via Supabase or AWS RDS)
   - MongoDB (if document-oriented structure preferred)
   - Prisma ORM for type-safe database access

**Deployment: Vercel (Primary) or AWS**
- Vercel: Optimized for Next.js, automatic optimizations for Core Web Vitals
- AWS: More control, Lambda + CloudFront for serverless scaling
- Edge caching: Vercel's Edge Network or CloudFront
- CDN: Automatic in Vercel; explicit in AWS

**Analytics & Monitoring:**
- Vercel Analytics (included with Vercel)
- Sentry for error tracking
- Google Analytics 4 with event tracking
- PostHog for product analytics (optional)

**SEO/AEO Tooling:**
- next-seo library for metadata management
- JSON-LD schema generation (custom utilities or @react-icons/ai-schema)
- robots.txt + sitemap.xml generation via Next.js API
- llms.txt support (new standard for LLM discoverability)

### Why This Stack

| Feature | Advantage |
|---------|-----------|
| **Next.js** | SSR/SSG hybrid = best for both traditional search & AEO. Server layer enables secure API calls. Vercel's optimizations crush Core Web Vitals. |
| **Tailwind** | Rapid iteration without CSS bloat. Design tokens = consistency across services. Responsive design native. |
| **Headless CMS** | Decoupled frontend/backend = flexibility. Non-technical team members can manage content. API-first = perfect for multi-service display. |
| **PostgreSQL** | Relational data = services, testimonials, case studies. Supabase = free tier + managed infrastructure. |
| **Vercel** | Frictionless Next.js deployment. Automatic image optimization. Edge functions for API routes. Analytics included. |

---

## PART 3: AEO IMPLEMENTATION FRAMEWORK

### 1. Structured Data Architecture (JSON-LD Priority)

**Essential Schema Types for Agency Sites:**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Your Agency Name",
      "logo": "https://yourdomain.com/logo.png",
      "sameAs": [
        "https://linkedin.com/company/...",
        "https://twitter.com/...",
        "https://github.com/..."
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PK",
        "addressLocality": "Karachi"
      },
      "foundingDate": "YYYY-MM-DD",
      "founders": [
        {"@type": "Person", "name": "Founder Name"}
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Your Agency",
      "image": "https://yourdomain.com/hero.jpg",
      "description": "Concise service description",
      "url": "https://yourdomain.com",
      "telephone": "+92-XXX-XXXXXXX",
      "priceRange": "$$",
      "areaServed": ["PK", "AE", "GB"],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".key-value-prop"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yourdomain.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://yourdomain.com/services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is your deployment model?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clear, factual answer (40-60 words). Specific, not marketing-speak."
          }
        }
      ]
    }
  ]
}
```

**Per-Service Schema (Product/Service Type):**

```json
{
  "@type": "Service",
  "name": "Speech AI Development",
  "url": "https://yourdomain.com/services/speech-ai",
  "description": "Production-ready speech recognition and synthesis systems.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "Contact for quote"
  },
  "areaServed": ["PK", "AE", "GB"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Speech AI Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom ASR Models",
          "description": "Fine-tuned automatic speech recognition"
        }
      }
    ]
  }
}
```

**Key Rule: Schema Must Match Visible Content**
- Never hide schema in meta tags only
- LLMs now parse both schema + visible HTML as one token stream
- Mismatch = reduced credibility

### 2. Content Structure for AEO

**Landing Page Template (Service/Product Page):**

```
H1: Clear, question-answering headline
   ↓
Quick Answer List (3-5 items, <15 words each)
   ↓
Definition paragraph (2-3 sentences)
   ↓
--- CONTENT SECTIONS (H2s) ---
[Each H2 answers a question users ask]
   ↓
First paragraph: Answer-first (40-60 words directly answering H2)
   ↓
Supporting details, proof, evidence
   ↓
Internal links to related services
   ↓
--- FAQ SECTION (H2) ---
[FAQPage schema here]
   ↓
CTA Section (repeat primary conversion goal)
```

**Example: Speech AI Service Page**

```
H1: Speech AI Solutions for Production Environments

Quick Answer:
1. Real-time transcription for 50+ languages
2. <100ms latency on AWS Lambda
3. 95.2% accuracy on domain-specific terminology
4. Deployed with zero cold starts using serverless

Definition:
Speech AI refers to production-grade automatic speech recognition (ASR) and text-to-speech (TTS) systems deployed on serverless infrastructure. Unlike generic APIs, custom Speech AI systems fine-tune language models on domain-specific terminology to achieve enterprise-grade accuracy with minimal latency.

H2: How Does Our Speech AI Achieve Sub-100ms Latency?

Answer: Our Speech AI uses quantized models deployed on AWS Lambda with provisioned concurrency, eliminating cold starts. We cache Mel-frequency cepstral coefficients (MFCCs) client-side, reducing payload size by 60%. This combination achieves <100ms end-to-end latency on real-world networks.

[Details, architectural diagram, performance benchmarks]

H2: What Languages Does Your Speech AI Support?

Answer: We support 50+ languages including low-resource languages (Urdu, Sindhi, Punjabi) through transfer learning from high-resource models. Fine-tuning on 2-4 hours of domain-specific audio improves accuracy by 8-15 percentage points.

[Language list, use cases, accuracy by language table]

H2: FAQ

FAQPage schema inline here.
```

### 3. Freshness & Maintenance (Critical AEO Signal)

**Research Finding:** Pages not updated quarterly lose AI citations at 3x the normal rate.

**Quarterly Content Refresh Cadence:**
- Verify statistics are current
- Update case study results/metrics
- Add new customer testimonials
- Refresh "Latest news" or industry updates
- Update dateModified in schema

**Version Signal in Schema:**
```json
{
  "@type": "Article",
  "dateModified": "2026-06-29T00:00:00Z",
  "version": "2.3"
}
```

### 4. Semantic HTML Structure

**Heading Hierarchy (Critical for LLMs):**
```html
<h1>Single page topic</h1>
<p>2-3 sentence definition</p>

<h2>First major section (answers a question)</h2>
<p>Direct answer here (40-60 words)...</p>

<h3>Sub-topic under H2</h3>
<p>Supporting content...</p>

<h2>Second major section</h2>
<!-- Repeat pattern -->
```

**Never skip heading levels for design reasons.** LLMs analyze heading hierarchy; broken hierarchy confuses parsing.

---

## PART 4: MODULAR CSS & COMPONENT ARCHITECTURE

### Design Token System (Tailwind v4 + CSS Variables)

**File: `styles/globals.css`**

```css
@import "tailwindcss";

@theme {
  /* Color tokens (accessible to all components) */
  --color-primary: 59 130 246;           /* #3b82f6 */
  --color-primary-hover: 37 99 235;      /* #2563eb */
  --color-primary-disabled: 191 219 254; /* #bfdbfe */
  
  --color-secondary: 168 85 247;         /* #a855f7 */
  
  --color-success: 34 197 94;            /* #22c55e */
  --color-warning: 245 158 11;           /* #f59e0b */
  --color-error: 239 68 68;              /* #ef4444 */
  
  --color-text-primary: 15 23 42;        /* #0f172a (dark mode aware) */
  --color-text-secondary: 100 116 139;   /* #64748b */
  --color-text-muted: 148 163 184;       /* #94a3b8 */
  
  --color-bg-primary: 255 255 255;       /* #ffffff */
  --color-bg-secondary: 248 250 252;     /* #f8fafc */
  --color-bg-tertiary: 241 245 249;      /* #f1f5f9 */
  
  /* Spacing tokens */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Typography tokens */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

@layer base {
  h1 {
    @apply text-4xl md:text-5xl font-bold text-color-text-primary leading-tight;
  }
  
  h2 {
    @apply text-3xl md:text-4xl font-bold text-color-text-primary mt-8 mb-4;
  }
  
  h3 {
    @apply text-2xl font-semibold text-color-text-primary mt-6 mb-3;
  }
  
  p {
    @apply text-lg text-color-text-secondary leading-relaxed mb-4;
  }
  
  a {
    @apply text-color-primary hover:text-color-primary-hover underline transition-colors;
  }
}

@layer components {
  /* Button component patterns */
  .btn {
    @apply inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer;
  }
  
  .btn-primary {
    @apply btn px-6 py-3 bg-color-primary text-white rounded-lg hover:bg-color-primary-hover active:scale-95;
  }
  
  .btn-secondary {
    @apply btn px-6 py-3 bg-color-bg-tertiary text-color-text-primary rounded-lg hover:bg-color-bg-secondary border-2 border-color-text-secondary;
  }
  
  .btn-sm {
    @apply px-4 py-2 text-sm;
  }
  
  .btn-lg {
    @apply px-8 py-4 text-lg;
  }
  
  /* Card component pattern */
  .card {
    @apply bg-color-bg-primary border border-color-bg-tertiary rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow;
  }
  
  .card-header {
    @apply flex items-start justify-between mb-4;
  }
  
  .card-body {
    @apply space-y-4;
  }
  
  /* Service grid */
  .service-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
  }
  
  /* Section container */
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20;
  }
  
  /* Hero section container */
  .hero-container {
    @apply section-container flex flex-col lg:flex-row items-center gap-8 lg:gap-12;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .gradient-text {
    @apply bg-gradient-to-r from-color-primary to-color-secondary bg-clip-text text-transparent;
  }
  
  .safe-area-inset-bottom {
    padding-bottom: max(var(--spacing-lg), env(safe-area-inset-bottom));
  }
}
```

### Component Abstraction Pattern

**File: `components/Button.tsx`**

```typescript
import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  [key: string]: any;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseClass = `btn btn-${variant} btn-${size}`;
  const combinedClass = `${baseClass} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}

export function ButtonGroup({ children, className = '' }: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex gap-3 flex-wrap ${className}`}>
      {children}
    </div>
  );
}
```

**Usage Everywhere:**
```tsx
<Button variant="primary" size="lg" href="/contact">
  Start Your Project
</Button>
```

### Reusable Section Components

**File: `components/sections/HeroSection.tsx`**

```typescript
interface HeroSectionProps {
  headline: string;
  subheading?: string;
  quickAnswers?: string[];
  cta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

export function HeroSection({
  headline,
  subheading,
  quickAnswers,
  cta,
  backgroundImage,
  className = '',
}: HeroSectionProps) {
  return (
    <section className={`hero-container bg-gradient-to-br from-color-bg-primary to-color-bg-secondary ${className}`}>
      <div className="flex-1 space-y-6">
        <h1>{headline}</h1>
        {subheading && <p className="text-xl text-color-text-secondary">{subheading}</p>}
        
        {quickAnswers && (
          <ul className="space-y-2">
            {quickAnswers.map((answer, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-color-primary font-bold">✓</span>
                <span>{answer}</span>
              </li>
            ))}
          </ul>
        )}
        
        {cta && (
          <Button href={cta.href} variant="primary" size="lg">
            {cta.text}
          </Button>
        )}
      </div>
      
      {backgroundImage && (
        <div className="flex-1">
          <img
            src={backgroundImage}
            alt={headline}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
```

**Key Principle: One Source of Truth**
- Button style changes? Update `components/Button.tsx`
- All button instances update automatically
- No copy-pasting class strings across 10 files
- Design tokens flow through CSS variables

---

## PART 5: SECTION ORDERING BEST PRACTICE

### Official Agency Website Flow (Research-Backed)

**Optimal Section Order:**

1. **Header + Navigation** (persistent)
   - Logo, navigation menu
   - Search bar (if applicable)
   - CTA button (sticky on mobile)

2. **Hero Section** (above-the-fold)
   - Clear headline answering "What is this?"
   - Subheading with value proposition
   - Quick answer list (3-5 items)
   - Primary CTA button
   - Supporting visual (image/video)
   - Client logos (if recognized by target audience)

3. **Why Us / Differentiation** (H2 section)
   - Answer: "What makes this agency different?"
   - 3-5 key differentiators
   - Keep facts, not marketing fluff

4. **Services / Solutions** (H2 section)
   - Grid of service cards
   - Each service has its own detail page (unique URL)
   - Link to individual service pages

5. **How It Works / Process** (H2 section)
   - 3-5 step process
   - Clear progression
   - Schema: HowTo type

6. **Featured Case Study / Results** (H2 section)
   - Real client example
   - Metrics/outcomes
   - Schema: Review + Aggregate Rating

7. **Testimonials / Social Proof** (H2 section)
   - 4-6 testimonials
   - Include client name, title, company, photo
   - Schema: Review type
   - Place BEFORE final CTA (reduces friction at decision moment)

8. **FAQ** (H2 section + FAQPage schema)
   - Common objections
   - Technical questions
   - Pricing questions
   - Implementation timeline

9. **Pricing / Offers** (H2 section)
   - Clear pricing tiers or "Contact for quote"
   - Include what's included
   - Schema: Offer + PricingTable

10. **Final CTA** (before footer)
    - Repeat primary goal
    - Offer alternative path (email, call)
    - Create urgency if applicable

11. **Newsletter Signup** (optional, before footer)
    - Low-friction capture
    - Clear value proposition

12. **Footer**
    - Contact info
    - Quick links
    - Social media
    - Legal (privacy, terms)

### Why This Order Works

| Section | Why Here | LLM Signal |
|---------|----------|-----------|
| Hero | First impression + keyword signal | H1 + quick answers = immediate relevance |
| Why Us | Differentiation before solutions | Entity authority (expertise signal) |
| Services | Solutions overview + internal links | Service schema + link structure |
| Process | Builds confidence | HowTo schema = explainability |
| Case Study | Proof before ask | Review schema + credibility |
| Testimonials | Trust before conversion | Before CTA = reduces hesitation |
| FAQ | Answers objections | FAQPage schema = direct Q&A extraction |
| Pricing | No surprises | Offer schema = commercial intent |
| Final CTA | High-intent users at bottom | Secondary conversion path |

---

## PART 6: URL STRUCTURE & SEO ARCHITECTURE

### Recommended URL Hierarchy

```
yourdomain.com/                          [Homepage]
yourdomain.com/services                  [Services listing page]
yourdomain.com/services/speech-ai        [Individual service (Speech AI)]
yourdomain.com/services/speech-ai/nlp    [Sub-service under Speech AI]
yourdomain.com/case-studies              [Case studies listing]
yourdomain.com/case-studies/[slug]       [Individual case study]
yourdomain.com/blog                      [Blog listing]
yourdomain.com/blog/[slug]               [Individual blog post]
yourdomain.com/about                     [About page]
yourdomain.com/contact                   [Contact page]
yourdomain.com/pricing                   [Pricing page]
```

**Why This Structure:**
- Semantic URL hierarchy = Google + LLM understand relationships
- `/services/speech-ai` clearly says "Speech AI is a service"
- Parallel structure = no confusing redirects
- Each service gets unique URL = unique AEO opportunity

### Per-Service Schema Strategy

**Each service page automatically gets:**
- Service schema (what the service is)
- BreadcrumbList schema (where it sits in hierarchy)
- FAQPage schema (common questions about this service)
- Review schema (client testimonials specific to this service)
- Organization schema (your agency info)

---

## PART 7: WORKFLOW FOR HANDOFF

### Step 1: Local Project Setup (30 mins)

```bash
# Create Next.js project with TypeScript + Tailwind
npx create-next-app@latest tech-agency \
  --typescript \
  --tailwind \
  --app-dir \
  --eslint

cd tech-agency

# Install dependencies
npm install next-seo zod next-auth @sanity/client @sanity/image-url

# Create folder structure
mkdir -p app/{services,blog,case-studies,components,lib,hooks}
mkdir -p app/services/[service]
mkdir -p public/{images,videos}
```

### Step 2: Environment Setup

**File: `.env.local`**
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2025-06-29
DATABASE_URL=postgres://user:password@localhost/agency
```

### Step 3: Core Files to Create Locally

**Priority 1 (SEO Foundation):**
- `lib/metadata.ts` - Meta generation utilities
- `lib/schema.ts` - Schema generation (Organization, Service, FAQPage)
- `public/robots.txt` - Bot crawling rules
- `public/sitemap.xml` - URL map for Google/Bing
- `next-seo.config.ts` - Site-wide SEO config

**Priority 2 (Design System):**
- `styles/globals.css` - Design tokens + @layer setup
- `components/Button.tsx` - Base button component
- `components/Card.tsx` - Reusable card
- `components/sections/HeroSection.tsx` - Hero template

**Priority 3 (Pages):**
- `app/page.tsx` - Homepage (imports HeroSection, Why Us, Services, Testimonials)
- `app/services/page.tsx` - Services listing
- `app/services/[service]/page.tsx` - Individual service pages (dynamic route)
- `app/layout.tsx` - Root layout (header, footer)

### Step 4: Data Structure (If Using Headless CMS)

**Sanity Schema Example:**

```typescript
// schemas/service.ts
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Service Title' },
    { name: 'slug', type: 'slug', source: 'title', title: 'URL Slug' },
    { name: 'headline', type: 'string' },
    { name: 'subheading', type: 'text' },
    { name: 'quickAnswers', type: 'array', of: [{ type: 'string' }] },
    { name: 'description', type: 'blockContent' },
    { name: 'sections', type: 'array', of: [
      {
        type: 'object',
        fields: [
          { name: 'heading', type: 'string' },
          { name: 'content', type: 'blockContent' },
        ]
      }
    ]},
    { name: 'caseStudies', type: 'array', of: [{ type: 'reference', to: 'caseStudy' }] },
  ]
}
```

### Step 5: Hand-Off Package Structure

Create folder `/agency-website-handoff/`:

```
agency-website-handoff/
├── AI_PROMPT_DEVELOPMENT.md          ← Main file for AI developer
├── SCHEMA_TEMPLATES.json             ← Pre-configured schema types
├── CSS_TOKENS_CONFIG.css             ← Copy into styles/
├── COMPONENT_CHECKLIST.md            ← What to build
├── SEO_CHECKLIST.md                  ← Pre-launch verification
├── DEPLOYMENT_GUIDE.md               ← Vercel/AWS steps
└── code-samples/
    ├── lib/metadata.ts
    ├── lib/schema.ts
    ├── components/Button.tsx
    ├── app/page.tsx
    └── styles/globals.css
```

---

## PART 8: CRITICAL LAUNCH CHECKLIST

### Technical SEO (Before Launch)

- [ ] robots.txt configured (allow all, set Sitemap)
- [ ] sitemap.xml generated + submitted to Google Search Console
- [ ] robots.txt + sitemap URLs in next.config.js `redirects`
- [ ] Core Web Vitals < thresholds (LCP: <2.5s, FID: <100ms, CLS: <0.1)
- [ ] Mobile responsiveness tested (375px width minimum)
- [ ] All images optimized (use Next.js `<Image>` component)
- [ ] Fonts loaded with `next/font` (avoids layout shift)
- [ ] All external links have proper `rel` attributes

### AEO Verification

- [ ] Every H1 clearly answers the page topic
- [ ] H2/H3 hierarchy is logical (no skipping levels)
- [ ] First paragraph after each H2 has answer-first format (40-60 words)
- [ ] All content has matching visible + schema markup
- [ ] FAQPage schema contains actual FAQ content (not hidden)
- [ ] Service pages each have unique URL + Service schema
- [ ] BreadcrumbList schema present on all pages
- [ ] Organization schema includes all contact methods

### LLM Discoverability

- [ ] llms.txt created at `/public/llms.txt` with usage guidelines
- [ ] Test content parsing via Claude/ChatGPT web interface
- [ ] Test schema comprehension via Google Rich Results Test
- [ ] Verify no schema errors in Lighthouse

### Performance

- [ ] Lighthouse score > 90 (all tabs)
- [ ] Deployment set to Vercel + automatic optimizations enabled
- [ ] Analytics installed (Vercel + GA4)
- [ ] 404 page created + configured
- [ ] Error boundary implemented

---

## PART 9: POST-LAUNCH OPTIMIZATION

### Quarterly Refresh Cycle

1. **Month 1:** Update all dateModified fields + add new case study
2. **Month 2:** Refresh testimonials, update statistics
3. **Month 3:** Audit SEO performance, identify new FAQ questions
4. **Month 4:** Restart cycle

### Monitoring & Iteration

**Weekly:**
- Check Google Search Console for indexing errors
- Monitor Core Web Vitals via Vercel Analytics

**Monthly:**
- Review organic traffic source breakdown
- Check AI Overview citations (Semrush/Ahrefs)
- A/B test CTA copy

**Quarterly:**
- Full content audit vs. competitor analysis
- Schema validation sweep
- Heading hierarchy review

---

## CONCLUSION

This tech stack and methodology positions your agency to be discovered through three channels simultaneously:

1. **Traditional Google search** (SEO): Proper URLs, heading hierarchy, Core Web Vitals
2. **AI-powered answer engines** (AEO): Schema markup, answer-first content, freshness signals
3. **LLM citations** (GEO): High-quality, factual content with evidence + entity authority

The next section is the detailed **AI Prompt for Development**, which should be handed to your development team or provided to Claude/AI assistant for full build-out.

---

**Research Sources:**
- Semrush AI Search Statistics (2025)
- Princeton GEO Research (2024)
- AEO Engine analysis (June 2026)
- Google AI Overviews behavior studies
- Vercel/Next.js performance benchmarks
- Tailwind CSS v4 documentation
