import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { SectionData } from "@/lib/sections/types";

export function OtherSolutions({ eyebrow, title, description, records = [] }: SectionData) {
  if (records.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <li key={record.id}>
            <Link
              href={record.href}
              className="group flex items-center justify-between gap-3 rounded-card border border-line bg-white px-5 py-4 transition hover:border-brand"
            >
              <span className="text-sm font-semibold text-ink transition group-hover:text-brand">
                {record.title}
              </span>
              <ArrowRight
                className="size-4 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
