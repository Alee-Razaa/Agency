import { MetadataRoute } from 'next';
import { OFFERS_DATA } from '@/src/constants/offers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-tech-agency.com';

  const serviceUrls = OFFERS_DATA.map((offer) => ({
    url: `${baseUrl}/services/${offer.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...serviceUrls,
  ];
}
