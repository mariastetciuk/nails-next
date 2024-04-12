
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.beautifulnails.if.ua';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}