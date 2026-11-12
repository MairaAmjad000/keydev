import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";
import type { SectionData } from "@/lib/sections/types";

export function IntroWithImage({
  eyebrow,
  title,
  description,
  image,
  alt,
  imageLeft = false,
}: SectionData) {
  return (
    <Section tone="light">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="left"
          className={cn("mb-0", imageLeft && "md:order-2")}
        />
        <SmartImage
          src={image}
          alt={alt ?? title ?? "Image"}
          className={cn("aspect-[4/3] w-full", imageLeft && "md:order-1")}
        />
      </div>
    </Section>
  );
}
