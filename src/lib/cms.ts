import fallback from '@/data/homepage.json';
import type { HomepageContent } from '@/types/cms';

/** Reads the homepage from the CMS API when configured; local seed is the dev fallback. */
export async function getHomepageContent(): Promise<HomepageContent> {
  const endpoint = process.env.CMS_API_URL;
  if (!endpoint) return fallback as HomepageContent;

  try {
    const response = await fetch(endpoint, { next: { revalidate: 60 } });
    if (!response.ok) throw new Error(`CMS request failed: ${response.status}`);
    return (await response.json()) as HomepageContent;
  } catch (error) {
    console.error('Unable to load homepage from CMS; using local content.', error);
    return fallback as HomepageContent;
  }
}
