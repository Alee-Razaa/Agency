import { Metadata } from 'next';

export interface PageMetadata {
  title: string;
  description: string;
  image?: string;
  url: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  canonicalUrl?: string;
  keywords?: string[];
}

export function generateMetadata(config: PageMetadata): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  const imageUrl = config.image ? `${baseUrl}${config.image}` : `${baseUrl}/og-image.png`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: config.author ? [{ name: config.author }] : undefined,
    alternates: {
      canonical: config.canonicalUrl || `${baseUrl}${config.url}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${baseUrl}${config.url}`,
      title: config.title,
      description: config.description,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
