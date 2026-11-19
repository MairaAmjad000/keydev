import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // Images keep readable (not hashed) names, so cache for a day then revalidate in the background.
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }] },
      // Fonts keep stable names, so no year-long "immutable" cache: a missing or replaced font file must be picked up quickly.
      { source: '/fonts/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }] },
      // Browser scripts keep stable names and hold page behaviour (portfolio filter, popups...), so always revalidate:
      // a day-long cache kept serving old, buggy copies after a fix. Unchanged files still answer with a quick 304.
      { source: '/scripts/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }] },
    ];
  },
};

export default nextConfig;
