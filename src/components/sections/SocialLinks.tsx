import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { SectionData } from "@/lib/sections/types";

export function SocialLinks({ eyebrow, title, description, records = [] }: SectionData) {
  if (records.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="flex flex-wrap justify-center gap-3">
        {records.map((record) => (
          <li key={record.id}>
            <a
              href={record.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              {record.title}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
