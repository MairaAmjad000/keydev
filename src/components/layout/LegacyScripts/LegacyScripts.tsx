'use client';

import { useEffect } from 'react';

/**
 * Scripts in the exact order the reference page executes them.
 * `/legacy/ref-N.js` are the reference's inline scripts, verbatim (N = position in the file).
 */
const LEGACY_SCRIPTS = [
  'https://code.jquery.com/jquery-3.7.1.min.js',
  '/legacy/ref-1.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js',
  '/legacy/ref-3.js',
  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
  '/legacy/ref-5.js',
  '/legacy/ref-6.js',
  '/legacy/ref-7.js',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11.4.0/dist/sweetalert2.min.js',
] as const;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => {
      console.error(`[LegacyScripts] failed to load ${src}`);
      resolve(); // one blocked CDN must not stop the rest of the page
    };
    document.body.appendChild(script);
  });
}

// Module-level singleton: load exactly once, strictly in order (also under StrictMode double effects).
let loading: Promise<void> | null = null;

function loadAllInOrder(): Promise<void> {
  loading ??= (async () => {
    for (const src of LEGACY_SCRIPTS) await loadScript(src);
  })();
  return loading;
}

/**
 * Fallback for `<img class="lazy" data-src="...">`. The jQuery Lazy plugin normally fills in `src`,
 * but it depends on several CDN scripts loading first. If any of them is blocked or slow, images
 * would stay blank, so this also promotes `data-src` -> `src` natively as images near the viewport.
 */
function setupLazyImageFallback(): () => void {
  const promote = (img: HTMLImageElement) => {
    const src = img.getAttribute('data-src');
    if (src && img.getAttribute('src') !== src) img.setAttribute('src', src);
  };
  const pending = () => Array.from(document.querySelectorAll<HTMLImageElement>('img[data-src]'));

  if (typeof IntersectionObserver === 'undefined') {
    pending().forEach(promote);
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        promote(entry.target as HTMLImageElement);
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '300px 0px' },
  );
  pending().forEach((img) => observer.observe(img));

  // Carousels (slick) clone slides after load; watch for images added later.
  const mutations = new MutationObserver(() => {
    pending().forEach((img) => observer.observe(img));
  });
  mutations.observe(document.body, { childList: true, subtree: true });

  return () => {
    mutations.disconnect();
    observer.disconnect();
  };
}

export function LegacyScripts() {
  useEffect(() => {
    void loadAllInOrder();
    return setupLazyImageFallback();
  }, []);
  return null;
}
