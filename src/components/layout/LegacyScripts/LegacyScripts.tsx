'use client';

import { useEffect } from 'react';

/**
 * Third-party and legacy scripts, in the exact order they must execute:
 * jQuery first, then everything that depends on it.
 */
const LEGACY_SCRIPTS = [
  'https://code.jquery.com/jquery-3.7.1.min.js',
  '/legacy/inline-1.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js',
  '/legacy/inline-3.js',
  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
  '/legacy/inline-5.js',
  '/legacy/inline-6.js',
  '/legacy/inline-7.js',
] as const;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.keydevsSrc = src;
    script.onload = () => resolve();
    script.onerror = () => {
      console.error(`[LegacyScripts] failed to load ${src}`);
      resolve(); // keep going so one blocked CDN does not stop the rest of the page
    };
    document.body.appendChild(script);
  });
}

/**
 * Module-level singleton: the scripts are loaded exactly once, strictly in order,
 * even if the effect runs twice (React StrictMode in development).
 */
let loading: Promise<void> | null = null;

function loadAllInOrder(): Promise<void> {
  loading ??= (async () => {
    for (const src of LEGACY_SCRIPTS) {
      await loadScript(src);
    }
  })();
  return loading;
}

/** `href="#"` is used as a "button" by the legacy markup; never let it jump the page to the top. */
function preventEmptyHashNavigation(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (target.closest('a[href="#"]')) event.preventDefault();
}

export function LegacyScripts() {
  useEffect(() => {
    document.addEventListener('click', preventEmptyHashNavigation);
    void loadAllInOrder();
    return () => document.removeEventListener('click', preventEmptyHashNavigation);
  }, []);

  return null;
}
