import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { LegacyScripts } from '@/components/LegacyScripts';

export const metadata: Metadata = {
  title: 'KeyDevs Technologies | Web & Mobile App Development',
  description: 'Website and mobile app development company in Lahore, Pakistan.',
  icons: { icon: '/legacy/favicon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css" />
      </head>
      <body>
        {children}
        <LegacyScripts />
      </body>
    </html>
  );
}
