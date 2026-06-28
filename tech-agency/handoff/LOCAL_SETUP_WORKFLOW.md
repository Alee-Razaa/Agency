# WORKFLOW: Local Setup & AI Handoff Guide
## For Ali: Step-by-Step to Build & Hand Off to AI Developer

---

## OVERVIEW

You will:
1. **Create a basic Next.js project** locally (30 mins)
2. **Set up folder structure** (10 mins)
3. **Create a handoff folder** with the analysis + prompt (5 mins)
4. **Hand to AI developer** with clear instructions (5 mins)

Total: ~1 hour. The AI developer then builds the full site from your prompt.

---

## STEP 1: LOCAL PROJECT SETUP (30 mins)

### 1.1 Prerequisites
Make sure you have:
- Node.js 18+ installed (`node -v`)
- npm or yarn installed (`npm -v`)
- VS Code (or your preferred editor)
- Git installed (for version control)

### 1.2 Create New Next.js Project

Open terminal and run:

```bash
# Navigate to where you want your project
cd ~/projects

# Create new Next.js project with recommended settings
npx create-next-app@latest tech-agency \
  --typescript \
  --tailwind \
  --app-dir \
  --eslint \
  --src-dir \
  --import-alias '@/*' \
  --skip-git

cd tech-agency
```

When prompted:
- Would you like to use TypeScript? → **Yes**
- Would you like to use ESLint? → **Yes**
- Would you like to use Tailwind CSS? → **Yes**
- Would you like to use `src/` directory? → **Yes**
- Would you like to use App Router? → **Yes**
- Would you like to customize the default import alias? → **No** (use default @/*)
- Would you like to use Turbopack for next dev? → **Yes** (faster builds)

### 1.3 Install Additional Dependencies

```bash
npm install next-seo zod sharp

# Optional: For database (if using Supabase)
npm install @supabase/supabase-js

# Optional: For form handling
npm install react-hook-form
```

### 1.4 Project Structure

Your project should now look like:

```
tech-agency/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   ├── lib/
│   └── styles/
├── public/
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 1.5 Update Environment Variables

Create `.env.local` in project root:

```
# .env.local

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Tech Agency

# Analytics (optional, add later)
NEXT_PUBLIC_GA_ID=

# Database (if using Supabase)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 1.6 Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 and verify it works (you should see Next.js default page).

✅ **Step 1 Complete**

---

## STEP 2: FOLDER STRUCTURE & FILE ORGANIZATION (10 mins)

### 2.1 Create Folder Structure

In your terminal (from project root):

```bash
# Create component folders
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/components/layout

# Create lib folder (already exists, but ensure structure)
mkdir -p src/lib/utils
mkdir -p src/lib/schemas

# Create hooks folder
mkdir -p src/hooks

# Create styles folder
mkdir -p src/styles

# Create public subfolders
mkdir -p public/images
mkdir -p public/icons
mkdir -p public/videos
mkdir -p public/logos

# Create data/config folder
mkdir -p src/data
```

Your folder structure should now be:

```
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── services/
│   │   ├── page.tsx
│   │   └── [service]/
│   │       └── page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── FAQSection.tsx
│   │   └── PricingSection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Select.tsx
│   ├── Providers.tsx
│   └── index.ts (barrel exports)
├── lib/
│   ├── schemas.ts (Schema generation utilities)
│   ├── metadata.ts (Metadata generation utilities)
│   ├── utils.ts (Helper functions)
│   └── constants.ts (Site constants)
├── data/
│   ├── services.ts (Services data)
│   ├── testimonials.ts (Testimonials data)
│   ├── faq.ts (FAQ data)
│   └── config.ts (Site config)
├── hooks/
│   └── useIsMobile.ts (Custom hooks)
├── styles/
│   └── variables.css (CSS variables - optional)
└── types/
    └── index.ts (TypeScript types)

public/
├── images/
├── icons/
├── videos/
├── logos/
├── robots.txt
├── sitemap.xml
└── llms.txt
```

### 2.2 Create Basic Template Files (Empty Scaffolds)

These will be filled in by the AI developer, but you're creating the structure:

```bash
# Create empty component files
touch src/components/ui/Button.tsx
touch src/components/ui/Card.tsx
touch src/components/sections/HeroSection.tsx
touch src/components/layout/Header.tsx
touch src/components/layout/Footer.tsx

# Create empty utility files
touch src/lib/metadata.ts
touch src/lib/schemas.ts
touch src/lib/constants.ts

# Create empty data files
touch src/data/services.ts
touch src/data/config.ts

# Create empty SEO files
touch public/robots.txt
touch public/llms.txt
```

✅ **Step 2 Complete**

---

## STEP 3: CREATE HANDOFF PACKAGE (5 mins)

### 3.1 Create Handoff Folder

In your project root:

```bash
mkdir handoff
cd handoff
```

### 3.2 Copy Analysis & Prompt Files

Copy these two files into the `handoff/` folder:
- `AGENCY_WEBSITE_ANALYSIS_2025.md` (the comprehensive analysis)
- `AI_DEVELOPMENT_PROMPT.md` (the detailed build spec)

```bash
# From wherever you saved those files
cp ~/AGENCY_WEBSITE_ANALYSIS_2025.md ./
cp ~/AI_DEVELOPMENT_PROMPT.md ./
```

### 3.3 Create Project Handoff Document

Create `handoff/HANDOFF_README.md`:

```markdown
# Tech Agency Website - Handoff to AI Developer

## Project Context
- **Owner:** Ali (Freelance Full Stack AI Engineer)
- **Purpose:** Showcase AI/ML services for enterprise clients
- **Target:** Discoverable by Google, AI Overviews, and LLMs (ChatGPT, Claude)
- **Stack:** Next.js 15 + TypeScript + Tailwind + PostgreSQL + Vercel

## What This Folder Contains

1. **AGENCY_WEBSITE_ANALYSIS_2025.md**
   - Research-backed analysis of modern SEO/AEO/GEO techniques
   - Tech stack recommendations
   - Design token system
   - Modular CSS architecture
   - Section ordering best practices
   - Build checklist

2. **AI_DEVELOPMENT_PROMPT.md**
   - Complete build specification
   - All component code samples
   - Schema/metadata utilities
   - Page structure examples
   - Testing checklist
   - Deployment instructions

## How to Use This Handoff

### For the AI Developer:
1. Read through `AI_DEVELOPMENT_PROMPT.md` completely
2. Use the code samples as templates (don't copy-paste blindly)
3. Follow the phased approach (Phase 1-5)
4. Use the build checklist before declaring "done"
5. Run Lighthouse audit before deployment

### For Code Organization:
- All components should be in `/src/components` (organized by type)
- All utilities should be in `/src/lib`
- All pages should be in `/src/app` (Next.js App Router)
- All data/config should be in `/src/data`
- Design tokens live in `/src/styles/globals.css`

### For Schema Markup:
- Every page MUST have Organization schema in layout
- Every service page MUST have FAQPage schema
- Every section MUST follow AEO heading hierarchy (H1 > H2 > H3)
- No hidden schema - all must match visible content

### For Deployment:
- Deployment target: **Vercel** (primary)
- Database: PostgreSQL via Supabase (optional)
- CMS: Sanity.io (optional, can use markdown files first)
- Analytics: Vercel Analytics + Google Analytics 4

## Key Project Files

- **tsconfig.json** - TypeScript configuration (use strict mode)
- **next.config.js** - Next.js configuration (includes image optimization)
- **tailwind.config.ts** - Tailwind configuration (extends with custom tokens)
- **package.json** - Dependencies and scripts

## Important Notes

1. **No Copy-Paste:** The code samples in the prompt are templates. Adapt them to your brand.
2. **Mobile-First:** Test every component on mobile (375px width minimum).
3. **Accessibility:** Use semantic HTML and ARIA labels. Run axe-core checks.
4. **Performance:** Use Next.js `<Image>` component for all images. Use `next/font` for fonts.
5. **SEO:** Every page needs proper meta tags. Use the metadata utilities provided.

## Testing Before Launch

Run these commands before deploying:

```bash
npm run build        # Check for build errors
npm run lint         # Check for code quality issues
npm run dev          # Test locally
```

Visit these URLs locally:
- http://localhost:3000 (homepage)
- http://localhost:3000/services (services listing)
- http://localhost:3000/services/[service-name] (individual service)

## Success Criteria

The website is "done" when:
- [ ] All pages build without errors
- [ ] Lighthouse score > 90 on all tabs
- [ ] Mobile responsiveness verified (375px+)
- [ ] Core Web Vitals < thresholds (LCP <2.5s, CLS <0.1)
- [ ] Schema validation passes (Google Rich Results Test)
- [ ] All links work (404 page configured)
- [ ] Analytics configured (Vercel + GA4)
- [ ] Robots.txt and sitemap.xml accessible
- [ ] No console errors or warnings

## Escalation Path

If issues arise:
1. Check the build checklist in `AI_DEVELOPMENT_PROMPT.md`
2. Review the testing checklist
3. Validate schema markup
4. Check Lighthouse report for specific issues

---

**Created:** [Today's Date]
**Last Updated:** [Today's Date]
**AI Developer Assigned:** [Name/Date]
```

### 3.4 Create Environment Template

Create `handoff/.env.example`:

```
# Copy this to .env.local and fill in values

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Tech Agency

# SEO & Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: CMS (Sanity)
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxxxxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-06-29

# Optional: Email Service (for contact forms)
NEXT_PUBLIC_EMAIL_SERVICE=resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3.5 Organize Handoff Folder

Your final handoff folder should look like:

```
handoff/
├── HANDOFF_README.md (instructions for AI developer)
├── AGENCY_WEBSITE_ANALYSIS_2025.md (research & architecture)
├── AI_DEVELOPMENT_PROMPT.md (complete build spec)
├── .env.example (template for environment variables)
└── CHECKLIST.md (optional: copy of testing checklist)
```

✅ **Step 3 Complete**

---

## STEP 4: PREPARE TO HAND OFF TO AI (5 mins)

### 4.1 Create a README at Project Root

Edit `/README.md` in your project:

```markdown
# Tech Agency Website

Production ML/AI agency website built with Next.js 15, TypeScript, and Tailwind CSS.

## Setup

```bash
git clone <repo>
cd tech-agency
npm install
npm run dev
```

Visit http://localhost:3000

## Documentation

- See `/handoff/HANDOFF_README.md` for developer guide
- See `/handoff/AI_DEVELOPMENT_PROMPT.md` for complete spec

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- PostgreSQL (Supabase)
- Vercel (deployment)

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run format   # Format code (Prettier)
```

## Project Structure

- `/src/app` - Pages and routes
- `/src/components` - React components
- `/src/lib` - Utilities, helpers, schemas
- `/src/data` - Site data and configuration
- `/public` - Static assets

---

Created: 2026-06-29
Status: Ready for AI Developer Handoff
```

### 4.2 Create Git Repository (Optional but Recommended)

```bash
# Initialize git if not already done
git init

# Create .gitignore
echo "node_modules/
.env.local
.env*.local
.next/
out/
dist/
.DS_Store
*.log" > .gitignore

# Initial commit
git add .
git commit -m "Initial project setup - ready for AI developer"

# If using GitHub
# git remote add origin <your-repo-url>
# git push -u origin main
```

### 4.3 Create Handoff Checklist

Create `HANDOFF_CHECKLIST.md` in root:

```markdown
# Handoff Checklist

## Before Handing Off to AI Developer

- [x] Next.js project created
- [x] TypeScript configured
- [x] Tailwind CSS installed
- [x] Folder structure created
- [x] Environment template created (.env.example)
- [x] Handoff documentation written
- [x] Analysis and prompt documents in `/handoff` folder
- [x] README.md created
- [x] .gitignore configured
- [x] Initial git commit done

## For AI Developer (After Handoff)

- [ ] Read HANDOFF_README.md
- [ ] Read AGENCY_WEBSITE_ANALYSIS_2025.md
- [ ] Read AI_DEVELOPMENT_PROMPT.md
- [ ] Copy .env.example to .env.local
- [ ] npm install (if not done)
- [ ] Follow Phase 1-5 build plan
- [ ] Run build checklist
- [ ] Run testing checklist
- [ ] Deploy to Vercel
- [ ] Monitor Core Web Vitals

---

**Handoff Date:** 2026-06-29
**Developer:** [Name]
**Status:** Not Started
```

✅ **Step 4 Complete**

---

## STEP 5: VERIFY YOUR SETUP (5 mins)

Before handing off, verify everything:

```bash
# Check Node/npm versions
node -v    # Should be 18+
npm -v     # Should be 9+

# Verify project builds
npm run build

# Check folder structure
ls -la src/
ls -la public/
ls -la handoff/

# Verify key files exist
test -f .env.local && echo ".env.local ✓"
test -f handoff/AI_DEVELOPMENT_PROMPT.md && echo "Prompt ✓"
test -f handoff/AGENCY_WEBSITE_ANALYSIS_2025.md && echo "Analysis ✓"
test -f README.md && echo "README ✓"
```

All checks should pass ✓

---

## STEP 6: HAND OFF TO AI DEVELOPER

### 6.1 Prepare Instructions

Send your AI developer (Claude, or whoever) this message:

```
I have a Next.js project ready for development. 

Location of build specification:
- Main build prompt: `/handoff/AI_DEVELOPMENT_PROMPT.md`
- Architecture guide: `/handoff/AGENCY_WEBSITE_ANALYSIS_2025.md`
- Developer guide: `/handoff/HANDOFF_README.md`

The project is initialized and ready. Please:

1. Read all three documents in the `/handoff` folder
2. Follow the Phase 1-5 build plan from AI_DEVELOPMENT_PROMPT.md
3. Use the code samples as templates (adapt to brand)
4. Run the build checklist before declaring done
5. Run testing checklist before deployment

Key constraints:
- Must pass Lighthouse > 90
- Must implement full AEO (heading hierarchy, schema)
- Must be mobile-responsive (375px+)
- Core Web Vitals must pass
- Use Vercel for deployment

The project is at: [GitHub URL or local path]
```

### 6.2 Project Structure Diagram (Optional)

Create a visual of the structure for your AI developer:

```
tech-agency (Next.js App)
│
├── src/
│   ├── app/                    [Pages & Routes]
│   │   ├── page.tsx            [Homepage]
│   │   ├── layout.tsx          [Root layout]
│   │   ├── services/
│   │   ├── blog/
│   │   ├── case-studies/
│   │   ├── about/
│   │   ├── contact/
│   │   └── api/                [API routes]
│   │
│   ├── components/             [React Components]
│   │   ├── ui/                 [Base UI components]
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   ├── sections/           [Section components]
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   └── layout/             [Layout components]
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   │
│   ├── lib/                    [Utilities & Logic]
│   │   ├── metadata.ts         [Meta generation]
│   │   ├── schemas.ts          [Schema generation]
│   │   └── constants.ts        [Site constants]
│   │
│   └── data/                   [Data & Config]
│       ├── services.ts
│       ├── testimonials.ts
│       └── config.ts
│
├── public/                     [Static Assets]
│   ├── images/
│   ├── logos/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt
│
├── handoff/                    [Docs for Developer]
│   ├── HANDOFF_README.md
│   ├── AGENCY_WEBSITE_ANALYSIS_2025.md
│   ├── AI_DEVELOPMENT_PROMPT.md
│   └── .env.example
│
└── README.md
```

✅ **Ready to Hand Off**

---

## COMMON QUESTIONS

### Q: Can I add my own branding now?
**A:** Yes! Add your logo to `/public/logos/` and update color values in `tailwind.config.ts`. But the AI developer will need access to your brand colors/fonts to update globals.css properly.

### Q: Should I start writing content?
**A:** Not yet. Let the AI developer build the structure first. Content goes in `/src/data/` files that the AI developer will create. You can draft it separately and merge later.

### Q: What if I need to change something while AI is building?
**A:** Use a separate branch in Git. Keep `/handoff` documents updated if requirements change. Communicate clearly.

### Q: How do I deploy after it's built?
**A:** The AI developer should handle initial Vercel setup. You just need:
1. Vercel account (free tier works)
2. GitHub repo connected to Vercel
3. Environment variables from `.env.local` added to Vercel dashboard
4. That's it - Vercel auto-deploys on every push

### Q: Should I use Sanity CMS or just markdown?
**A:** Start with markdown/data files. Add Sanity later if you want non-technical team members editing content. The AI developer should keep this flexible.

---

## NEXT: HAND-OFF COMPLETE ✓

You're done! Your Next.js project is scaffolded and documented. 

The AI developer now has everything needed to:
1. Build a production-ready website
2. Implement full AEO optimization
3. Create reusable component library
4. Deploy to Vercel
5. Pass all quality checks

**Estimated build time by AI developer:** 3-5 days for full site (depending on complexity)

---

**Last Updated:** 2026-06-29
**Status:** Ready for Developer Handoff ✅
