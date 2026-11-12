import { Section, SectionHeading } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import type { SectionData } from "@/lib/sections/types";

export function SectionIntro({
  eyebrow,
  title,
  description,
  image,
  alt,
  buttonText,
  buttonHref,
  variant,
}: SectionData) {
  if (!title && !description) return null;

  return (
    <Section>
      <div
        className={`grid items-center gap-10 ${
          image ? "lg:grid-cols-2" : ""
        } ${variant === "alt" ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        {image ? (
          <SmartImage src={image} alt={alt ?? title ?? ""} className="aspect-[4/3]" />
        ) : null}

        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            align="left"
            className="mb-5"
          />
          <RichText html={description} />
          {buttonText && buttonHref ? (
            <div className="mt-6">
              <ButtonLink href={buttonHref} withArrow>
                {buttonText}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
