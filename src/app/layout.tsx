import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { LegacyScripts } from '@/components/layout/LegacyScripts';

export const metadata: Metadata = {
  title: 'KeyDevs Technologies | Web & Mobile App Development',
  description: 'Website and mobile app development company in Lahore, Pakistan.',
  icons: { icon: '/legacy/favicon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <LegacyScripts />
      </body>
    </html>
  );
}
