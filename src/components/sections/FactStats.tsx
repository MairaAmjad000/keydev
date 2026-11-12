import { Section, SectionHeading } from "@/components/ui/Section";
import type { SectionData } from "@/lib/sections/types";

export function FactStats({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "stat"}-${index}`}
            className="rounded-card border border-line bg-white p-5 text-center min-w-[100px]"
          >
            <p className="text-3xl font-extrabold text-brand">{item.number ?? "0"}</p>
            <p className="mt-1 font-medium text-ink/70">{item.title ?? ""}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}