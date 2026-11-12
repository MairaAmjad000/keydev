import { Section, SectionHeading } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { RatingStars } from "@/components/ui/RatingStars";
import type { SectionData } from "@/lib/sections/types";

export function AboutBlock({
  smallTitle,
  eyebrow,
  title,
  description,
  image,
  alt,
  buttonText,
  buttonHref,
}: SectionData) {
  if (!title && !description) return null;

  return (
    <Section tone="light">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <SmartImage src={image} alt={alt ?? title ?? ""} className="aspect-[4/3]" />

        <div>
          <SectionHeading
            eyebrow={smallTitle ?? eyebrow}
            title={title}
            align="left"
            className="mb-5"
          />
          <RichText html={description} />

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {buttonText && buttonHref ? (
              <ButtonLink href={buttonHref} withArrow>
                {buttonText}
              </ButtonLink>
            ) : null}
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <RatingStars value={5} />
              Rated 5.0 by clients
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
