import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function Timeline({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "event"}-${index}`}
            className="rounded-card border border-line bg-surface p-6 flex flex-col items-center min-w-[200px]"
          >
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-extrabold mt-2">
              {item.number ?? index + 1}
            </div>
            <h4 className="mt-3 font-semibold text-ink">{item.title ?? `Phase ${index + 1}`}</h4>
            <p className="mt-2 text-sm text-ink/70 line-clamp-2">{item.description ?? ""}</p>
            {item.date && (
              <p className="mt-1 text-xs text-muted/60">{item.date}</p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}