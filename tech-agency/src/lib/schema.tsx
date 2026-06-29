export const schemas = {
  organization: (config: {
    name: string;
    logo: string;
    description: string;
    url: string;
    email?: string;
    phone?: string;
    sameAs?: string[];
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    logo: config.logo,
    description: config.description,
    url: config.url,
    email: config.email,
    telephone: config.phone,
    sameAs: config.sameAs || [],
    address: config.address,
  }),

  breadcrumbList: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  service: (config: {
    name: string;
    description: string;
    url: string;
    price?: string;
    priceCurrency?: string;
    areaServed?: string[];
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.name,
    description: config.description,
    url: config.url,
    offers: config.price
      ? {
          '@type': 'Offer',
          priceCurrency: config.priceCurrency || 'USD',
          price: config.price,
        }
      : undefined,
    areaServed: config.areaServed || ['PK', 'AE', 'GB'],
  }),

  faqPage: (
    questions: { question: string; answer: string }[]
  ) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  }),

  review: (config: {
    reviewRating: number;
    reviewBody: string;
    author: string;
    datePublished: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: config.reviewRating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: config.reviewBody,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: config.datePublished,
  }),

  aggregateRating: (config: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  }) => ({
    '@type': 'AggregateRating',
    ratingValue: config.ratingValue,
    reviewCount: config.reviewCount,
    bestRating: config.bestRating || 5,
    worstRating: config.worstRating || 1,
  }),

  article: (config: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: string;
    url: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.headline,
    description: config.description,
    image: config.image,
    datePublished: config.datePublished,
    dateModified: config.dateModified,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    url: config.url,
  }),

  howTo: (config: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: config.name,
    description: config.description,
    step: config.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
  }),
};

export function SchemaScript({ schema }: { schema: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
