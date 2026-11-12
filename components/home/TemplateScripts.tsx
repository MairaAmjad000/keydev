"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __kdScriptsLoaded?: boolean;
    jQuery?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

const SCRIPTS = [
  "https://code.jquery.com/jquery-3.7.1.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
  "/js/cookie.js",
  "/js/plugins.js",
  "/js/app.js",
];

function load(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

/** Loads the template's original jQuery/Bootstrap/slick behaviour (menus, sliders, popups). */
export default function TemplateScripts() {
  useEffect(() => {
    if (window.__kdScriptsLoaded) return;
    window.__kdScriptsLoaded = true;

    // "#!" links are the converted javascript:; anchors — never navigate.
    const stop = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (a && a.getAttribute("href") === "#!") e.preventDefault();
    };
    document.addEventListener("click", stop);

    (async () => {
      for (const src of SCRIPTS) await load(src);
      const banner = document.getElementById("cookiealerts");
      if (banner && !document.cookie.includes("KeyDevs%20Technologies_cookie_allowed")) {
        setTimeout(() => (banner.style.display = "block"), 3000);
      }
    })();
  }, []);
  return null;
}
