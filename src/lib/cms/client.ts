import { cmsConfig } from '@/config/cms';

/** Cache tag attached to every CMS request; POST /api/revalidate purges it. */
export const CMS_TAG = 'cms';

/**
 * GET {CMS_API_URL}/{path} and parse the JSON body.
 * Returns null when no CMS is configured or the request fails, so callers can fall back to content/.
 */
export async function fetchFromCms<T>(path: string, tags: string[] = []): Promise<T | null> {
  if (!cmsConfig.apiUrl) return null;

  const url = `${cmsConfig.apiUrl}/${path.replace(/^\/+/, '')}`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        ...(cmsConfig.apiToken ? { Authorization: `Bearer ${cmsConfig.apiToken}` } : {}),
      },
      next: { revalidate: cmsConfig.revalidateSeconds, tags: [CMS_TAG, ...tags] },
    });
    if (!response.ok) {
      if (response.status !== 404) console.error(`[cms] ${url} responded ${response.status}`);
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error(`[cms] could not reach ${url}`, error);
    return null;
  }
}
