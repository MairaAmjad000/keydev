"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export const COOKIE_STORAGE_KEY = "kd-cookie-consent";

type Consent = "all" | "essential";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(COOKIE_STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // Storage blocked (private mode) — show the banner without persisting.
      setVisible(true);
    }
  }, []);

  const decide = (consent: Consent) => {
    try {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, consent);
    } catch {
      // Ignore write failures; the banner simply reappears next visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[80] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-md"
    >
      <div className="rounded-card border border-line bg-white p-5 shadow-menu">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
            <Cookie className="size-4" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-bold text-ink">We use cookies</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Essential cookies keep the site working. Analytics cookies help us improve it. Read
              our{" "}
              <Link href="/privacy-policy" className="font-semibold text-brand hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => decide("all")}
            className="flex-1 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => decide("essential")}
            className="flex-1 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
