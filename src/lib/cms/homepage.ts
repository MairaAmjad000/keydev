import type { HomepageContent } from '@/types/content';

function isHomepageContent(value: unknown): value is HomepageContent {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<HomepageContent>;
  return (
    typeof candidate.page === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.description === 'string' &&
    typeof candidate.headerHtml === 'string' &&
    Array.isArray(candidate.sections) &&
    candidate.sections.every((section) =>
      !!section &&
      typeof section.key === 'string' &&
      typeof section.title === 'string' &&
      typeof section.html === 'string' &&
      typeof section.enabled === 'boolean' &&
      typeof section.sortOrder === 'number'
    )
  );
}

/** Loads homepage content exclusively from the configured backend CMS. */
export async function getHomepageContent(): Promise<HomepageContent> {
  const endpoint = process.env.CMS_API_URL;

  if (!endpoint) {
    throw new Error('CMS_API_URL is missing. Configure your backend CMS endpoint.');
  }

  const response = await fetch(endpoint, { next: { revalidate: 60 } });
  if (!response.ok) {
    throw new Error(`CMS request failed: ${response.status} ${response.statusText}`);
  }

  const payload: unknown = await response.json();
  if (!isHomepageContent(payload)) {
    throw new Error('CMS returned an invalid HomepageContent payload.');
  }

  return payload;
}
