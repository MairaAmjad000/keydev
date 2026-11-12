import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function ContactInfo({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "contact"}-${index}`}
            className="rounded-card border border-line bg-white p-5 flex items-start"
          >
            {item.icon && (
              <span className="mt-1 text-2xl text-brand flex-shrink-0">{item.icon}</span>
            )}
            <div className="flex-1 pl-4">
              <h4 className="font-semibold text-ink">{item.title ?? "Contact"}</h4>
              <p className="text-sm text-ink/70">{item.description ?? ""}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}