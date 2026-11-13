import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

// Order matters and mirrors the reference page: Font Awesome, Bootstrap, then the site CSS last
// so that site rules win over Bootstrap's.
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/legacy.css';

import { getSiteSettings } from '@/lib/cms';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#008080',
};

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  return {
    title: site.seo.title,
    description: site.seo.description,
    icons: { icon: [{ url: site.seo.favicon, type: 'image/png', sizes: '32x32' }] },
    openGraph: { siteName: site.seo.siteName, type: 'website' },
  };
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
