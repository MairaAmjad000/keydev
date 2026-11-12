import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function IntroSection({ eyebrow, title, description, image, alt }: SectionData) {
  if (!image) {
    return (
      <Section tone="light">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </Section>
    );
  }

  return (
    <Section tone="light">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" className="mb-0" />
        <SmartImage src={image} alt={alt ?? title ?? "Introduction"} className="aspect-[4/3] w-full" />
      </div>
    </Section>
  );
}
