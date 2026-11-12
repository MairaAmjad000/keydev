import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function LogoStrip({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="flex flex-wrap items-center justify-center gap-6">
        {items.map((logo, index) => (
          <li key={`${logo.alt ?? "logo"}-${index}`}>
            <SmartImage
              src={logo.image ?? logo.icon}
              alt={logo.alt ?? ""}
              className="h-16 w-auto bg-transparent"
              imgClassName="object-contain opacity-60 transition hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}