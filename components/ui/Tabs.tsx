"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type Tab = {
  title: string;
  content: React.ReactNode;
};

export function Tabs({ tabs, className }: { tabs: Tab[]; className?: string }) {
  const [active, setActive] = useState(0);

  if (tabs.length === 0) return null;

  return (
    <div className={className}>
      <div role="tablist" className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            role="tab"
            type="button"
            aria-selected={index === active}
            onClick={() => setActive(index)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              index === active
                ? "bg-brand text-white"
                : "border border-line text-ink/70 hover:border-brand hover:text-brand",
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div role="tabpanel">{tabs[active]?.content}</div>
    </div>
  );
}
