/**
 * Connection settings for the admin panel (headless CMS). All values come from environment
 * variables, see .env.example. When CMS_API_URL is empty the site renders the bundled content/ files.
 */
export const cmsConfig = {
  /** Base URL of the admin panel's content API, without a trailing slash. */
  apiUrl: (process.env.CMS_API_URL ?? '').replace(/\/+$/, ''),
  /** Optional bearer token for a private content API. */
  apiToken: process.env.CMS_API_TOKEN ?? '',
  /** Seconds before a fetched response is considered stale (incremental static regeneration). */
  revalidateSeconds: Number(process.env.CMS_REVALIDATE_SECONDS ?? 60),
  /** Shared secret expected by POST /api/revalidate (called by an admin-panel webhook). */
  revalidateSecret: process.env.CMS_REVALIDATE_SECRET ?? '',
} as const;
