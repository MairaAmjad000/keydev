"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { useQuote } from "./QuoteProvider";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { openQuote } = useQuote();

  useEffect(() => {
    if (!open) return;

    document.body.dataset.scrollLocked = "true";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      delete document.body.dataset.scrollLocked;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] lg:hidden">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute inset-y-0 right-0 flex w-[min(22rem,90vw)] flex-col bg-white shadow-menu"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Link href="/" onClick={onClose} className="text-lg font-extrabold tracking-tight">
            Key<span className="text-brand">Devs</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-muted transition hover:bg-surface hover:text-ink"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3">
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              if (item.kind === "link") {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const links =
                item.kind === "dropdown"
                  ? item.links
                  : item.menu.groups.flatMap((group) => group.links);

              const isOpen = expanded === item.label;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>

                  {isOpen ? (
                    <ul className="mb-1 ml-3 space-y-0.5 border-l border-line pl-3">
                      {item.kind === "mega"
                        ? item.menu.groups.map((group) => (
                            <li key={group.title} className="pt-2">
                              <p className="px-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                                {group.title}
                              </p>
                              <ul>
                                {group.links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      onClick={onClose}
                                      className="block rounded px-2 py-2 text-sm text-ink/80 transition hover:text-brand"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))
                        : links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={onClose}
                                className="block rounded px-2 py-2 text-sm text-ink/80 transition hover:text-brand"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-line px-5 py-5">
          <Link
            href={site.estimateHref}
            onClick={onClose}
            className="flex items-center justify-center rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Estimate Your Project
          </Link>
          <button
            type="button"
            onClick={() => {
              onClose();
              openQuote();
            }}
            className="flex w-full items-center justify-center rounded-full border border-line px-4 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            {site.callbackLabel}
          </button>
          <div className="flex flex-col gap-1 pt-1 text-sm text-muted">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2">
              <Mail className="size-4" aria-hidden />
              {site.email}
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="size-4" aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
