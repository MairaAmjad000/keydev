"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import type { MegaMenuData } from "@/lib/site";

type MegaMenuProps = {
  menu: MegaMenuData;
  onNavigate: () => void;
  className?: string;
};

export function MegaMenu({ menu, onNavigate, className = "" }: MegaMenuProps) {
  return (
    <div className={`border-t border-line bg-white shadow-menu ${className}`}>
      <div className="container-page py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_270px]">
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {menu.groups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                  {group.title}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onNavigate}
                        className="group flex items-start justify-between gap-2 text-sm text-ink/80 transition hover:text-brand"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          className="mt-0.5 size-3.5 shrink-0 opacity-0 transition group-hover:opacity-100"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-card bg-brand-soft p-5">
            <p className="text-sm font-bold leading-snug text-ink">{menu.cta.title}</p>
            <a
              href={menu.cta.phoneHref}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              <Phone className="size-4" aria-hidden />
              {menu.cta.phone}
            </a>
            <Link
              href={menu.cta.href}
              onClick={onNavigate}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              {menu.cta.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
