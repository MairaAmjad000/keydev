import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function TechStack({ eyebrow, title, description, records = [] }: SectionData) {
  if (records.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {records.map((record) => (
          <li
            key={record.id}
            className="flex flex-col items-center gap-2 rounded-card border border-line bg-white p-4 text-center"
          >
            <SmartImage
              src={record.image ?? record.icon}
              alt={record.alt ?? record.title}
              className="size-12 bg-transparent"
              imgClassName="object-contain"
            />
            <span className="text-xs font-semibold text-ink/80">{record.title}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
