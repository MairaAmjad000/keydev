'use client';

import { useEffect } from 'react';

/**
 * Browser scripts (jQuery, Bootstrap, slick, lazy loading, popups), loaded once and strictly in this
 * order. The files under /scripts are served from public/scripts.
 */
const SCRIPTS = [
  'https://code.jquery.com/jquery-3.7.1.min.js',
  '/scripts/cookie-alert.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js',
  '/scripts/jquery-cookie.js',
  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
  '/scripts/vendor-plugins.js',
  '/scripts/site.js',
  '/scripts/scroll-to-fixed.js',
  '/scripts/category-page.js',
  '/scripts/solution-page.js',
  '/scripts/portfolio-vendor.js',
  '/scripts/portfolio-page.js',
  '/scripts/blog-page.js',
  '/scripts/contact-page.js',
  '/scripts/about-page.js',
  '/scripts/process-page.js',
  '/scripts/client-review-page.js',
  '/scripts/estimate-page.js',
  '/scripts/twentytwenty.js',
  '/scripts/lazy-init.js',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11.4.0/dist/sweetalert2.min.js',
] as const;

/**
 * Bump this whenever a file in public/scripts changes. Local scripts keep stable names and used to be cached for a
 * day, so browsers kept running an old copy (e.g. the one that reloaded the page on every portfolio filter click).
 */
const SCRIPT_VERSION = '2026-11-19-2';

const withVersion = (src: string) => (src.startsWith('/') ? `${src}?v=${SCRIPT_VERSION}` : src);

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = withVersion(src);
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => {
      console.error(`[SiteScripts] failed to load ${script.src}`);
      resolve(); // one blocked CDN must not stop the rest of the page
    };
    document.body.appendChild(script);
  });
}

// Module-level singleton: load exactly once, strictly in order (also under StrictMode double effects).
let loading: Promise<void> | null = null;

function loadAllInOrder(): Promise<void> {
  loading ??= (async () => {
    for (const src of SCRIPTS) await loadScript(src);
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

export function SiteScripts() {
  useEffect(() => {
    void loadAllInOrder();
    return setupLazyImageFallback();
  }, []);
  return null;
}