// src/data/hero.ts

export const heroData = {
  tagline: 'ADSSTUDIO PRODUCTION SYSTEM',
  headline: 'AI-Enhanced Creative Production. Smarter Campaigns.',
  ctaText: 'Initialize Project',
  ctaHref: '/initialize',
  bottomExplainer:
    'Automate your media production pipeline and design workflows with autonomous AI systems. Scale high-converting creative variations instantly while maintaining strict brand integrity.',
  
  avatars: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80',
      alt: 'Creative Director',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80',
      alt: 'Lead Systems Architect',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80',
      alt: 'Automation Engineer',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop&q=80',
      alt: 'Media Strategist',
    },
  ],

  // Transformed workflow pipeline matching your agency structure
  // Icons are referenced via premium Lucide component names to render clean, white-filled vector graphics
  stages: [
    { 
      id: 1, 
      title: 'Brief & Intelligence Sync', 
      icon: 'Sparkles' // Lucide component reference for conceptualization/AI prompt initialization
    },
    { 
      id: 2, 
      title: 'Autonomous Asset Generation', 
      icon: 'Layers' // Lucide component reference for multi-layered design & layout compilation
    },
    { 
      id: 3, 
      title: 'Programmatic Variations', 
      icon: 'Cpu' // Lucide component reference for scale, batch processing, and AI workflows
    },
    { 
      id: 4, 
      title: 'Cross-Channel Optimization', 
      icon: 'Terminal' // Lucide component reference for deployment, tracking, and system performance
    },
  ],

  backgroundType: 'gradient', // 'gradient' | 'video'
  videoSrc: undefined,
};