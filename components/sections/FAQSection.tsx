import { Section, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import type { SectionData } from "@/lib/sections/types";

export function FAQSection({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mx-auto max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}
