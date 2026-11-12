'use client';

import { useEffect } from 'react';

const legacyScripts = [
  'https://code.jquery.com/jquery-3.7.1.min.js',
  '/legacy/inline-1.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js',
  '/legacy/inline-3.js',
  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
  '/legacy/inline-5.js',
  '/legacy/inline-6.js',
  '/legacy/inline-7.js',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11.4.0/dist/sweetalert2.min.js',
];

/** Loads the original site's dependencies sequentially so jQuery plugins are available before initialization. */
export function LegacyScripts() {
  useEffect(() => {
    let cancelled = false;
    const loadInOrder = async () => {
      for (const src of legacyScripts) {
        if (cancelled || document.querySelector(`script[data-keydevs-src="${src}"]`)) continue;
        await new Promise<void>((resolve) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = false;
          script.dataset.keydevsSrc = src;
          script.onload = () => resolve();
          script.onerror = () => resolve();
          document.body.appendChild(script);
        });
      }
    };
    void loadInOrder();
    return () => { cancelled = true; };
  }, []);

  return null;
}
