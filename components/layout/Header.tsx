"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, Star } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";
import { useQuote } from "./QuoteProvider";

const itemBase =
  "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-ink transition hover:text-brand";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openQuote } = useQuote();

  useEffect(() => {
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const activeItem = navItems.find((item) => item.label === open);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="hidden border-b border-line bg-surface lg:block">
        <div className="container-page flex h-11 items-center justify-between gap-6 text-xs">
          <Link
            href="/client-review"
            className="flex items-center gap-2 text-muted transition hover:text-brand"
          >
            <span className="flex items-center gap-0.5 text-amber-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-3.5 fill-current" />
              ))}
            </span>
            <strong className="font-semibold text-ink">{site.ratingText.split(" ")[0]}</strong>
            <span>{site.ratingText.replace(/^\S+\s/, "")}</span>
          </Link>

          <div className="flex items-center gap-3 text-muted">
            <span className="hidden xl:inline">
              {site.topBarLead}{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-ink transition hover:text-brand"
              >
                {site.email}
              </a>{" "}
              {site.topBarMid}
            </span>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-ink transition hover:text-brand"
            >
              <Phone className="size-3.5" aria-hidden />
              {site.phone}
            </a>
            <span className="text-line" aria-hidden>
              |
            </span>
            <button
              type="button"
              onClick={openQuote}
              className="font-semibold text-brand transition hover:text-brand-dark"
            >
              {site.callbackLabel}
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-line">
        <div className="container-page relative flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
            <span className="grid size-9 place-items-center rounded-md bg-brand text-sm font-extrabold text-white">
              KD
            </span>
            <span className="text-xl font-extrabold tracking-tight text-ink">
              Key<span className="text-brand">Devs</span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:block"
            onPointerLeave={() => setOpen(null)}
          >
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) =>
                item.kind === "link" ? (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`${itemBase} ${
                        pathname === item.href ? "text-brand" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label} className="relative">
                    <button
                      type="button"
                      aria-expanded={open === item.label}
                      aria-haspopup="true"
                      onPointerEnter={() => setOpen(item.label)}
                      onClick={() => setOpen(open === item.label ? null : item.label)}
                      className={`${itemBase} ${open === item.label ? "text-brand" : ""}`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`size-3.5 text-muted transition-transform ${
                          open === item.label ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>

                    {open === item.label && item.kind === "dropdown" ? (
                      <div className="absolute left-0 top-full z-10 w-56 pt-2">
                        <ul className="overflow-hidden rounded-card border border-line bg-white py-2 shadow-menu">
                          {item.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={() => setOpen(null)}
                                className="block px-4 py-2.5 text-sm text-ink/80 transition hover:bg-surface hover:text-brand"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                ),
              )}
            </ul>

            {activeItem?.kind === "mega" ? (
              <MegaMenu
                menu={activeItem.menu}
                onNavigate={() => setOpen(null)}
                className="absolute inset-x-0 top-full z-10"
              />
            ) : null}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={site.estimateHref}
              className="hidden items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark sm:inline-flex"
            >
              Estimate Your Project
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="rounded-md border border-line p-2.5 text-ink transition hover:border-brand hover:text-brand lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2 text-xs text-muted sm:hidden">
        <a href={site.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-ink">
          <Phone className="size-3.5" aria-hidden />
          {site.phone}
        </a>
        <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5">
          <Mail className="size-3.5" aria-hidden />
          {site.email}
        </a>
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
