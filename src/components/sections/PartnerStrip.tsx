import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function PartnerStrip({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="flex flex-wrap items-center justify-center gap-8">
        {items.map((logo, index) => (
          <li key={`${logo.alt ?? "partner"}-${index}`}>
            <SmartImage
              src={logo.image ?? logo.icon}
              alt={logo.alt ?? ""}
              className="h-14 w-auto bg-transparent"
              imgClassName="object-contain opacity-60 transition hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}