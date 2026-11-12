"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import type { CmsItem } from "@/lib/sections/types";

export function Accordion({ items }: { items: CmsItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;
        const question = item.question ?? item.title ?? `Question ${index + 1}`;

        return (
          <div key={`${question}-${index}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-surface sm:px-6"
              >
                <span className="text-sm font-semibold text-ink sm:text-base">{question}</span>
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-full transition",
                    isOpen ? "bg-brand text-white" : "bg-surface text-ink",
                  )}
                  aria-hidden
                >
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
            </h3>

            {isOpen && item.answer ? (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
