import { RichText } from "@/components/ui/RichText";
import { ButtonLink } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function HeroBanner({
  eyebrow,
  title,
  description,
  image,
  alt,
  buttonText,
  buttonHref,
  buttonText2,
  buttonHref2,
  variant,
}: SectionData) {
  if (!title && !description) return null;

  const compact = variant === "compact";

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-brand/25 blur-3xl"
      />

      <div
        className={`container-page relative grid items-center gap-10 ${
          compact ? "py-14 sm:py-16" : "py-16 sm:py-24"
        } ${image ? "lg:grid-cols-2" : ""}`}
      >
        <div>
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">
              {eyebrow}
            </p>
          ) : null}

          <h1
            className={`mt-3 font-extrabold leading-tight tracking-tight ${
              compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
            }`}
          >
            {title}
          </h1>

          {description ? (
            <RichText html={description} invert className="mt-5 max-w-xl" />
          ) : null}

          {buttonText || buttonText2 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {buttonText && buttonHref ? (
                <ButtonLink href={buttonHref} withArrow>
                  {buttonText}
                </ButtonLink>
              ) : null}
              {buttonText2 && buttonHref2 ? (
                <ButtonLink href={buttonHref2} variant="ghost">
                  {buttonText2}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>

        {image ? (
          <SmartImage
            src={image}
            alt={alt ?? title ?? ""}
            priority
            className="aspect-[4/3] w-full"
          />
        ) : null}
      </div>
    </section>
  );
}
