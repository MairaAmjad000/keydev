import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

// Order matters: Font Awesome, Bootstrap, then the site styles last so that site rules win.
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/index.css';

import { getSiteSettings } from '@/lib/cms';

export async function generateViewport(): Promise<Viewport> {
  const site = await getSiteSettings();
  return { width: 'device-width', initialScale: 1, maximumScale: 1, themeColor: site.themeColor };
}

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  return {
    title: site.seo.title,
    description: site.seo.description,
    icons: { icon: [{ url: site.seo.favicon, type: 'image/png', sizes: '32x32' }] },
    openGraph: { siteName: site.seo.siteName, type: 'website' },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const site = await getSiteSettings();
  return (
    <html lang={site.language}>
      <body>{children}</body>
    </html>
  );
}
