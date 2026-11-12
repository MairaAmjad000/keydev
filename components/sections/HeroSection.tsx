import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function HeroSection({
  eyebrow,
  title,
  description,
  image,
  alt,
  buttonText,
  buttonHref,
  buttonText2,
  buttonHref2,
}: SectionData) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-brand/25 blur-3xl"
      />
      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">{eyebrow}</p>
          ) : null}
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {title ?? "We build digital experiences"}
          </h1>
          {description ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">{description}</p>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            {buttonText && buttonHref ? (
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                {buttonText}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            ) : null}
            {buttonText2 && buttonHref2 ? (
              <Link
                href={buttonHref2}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                {buttonText2}
              </Link>
            ) : null}
          </div>
        </div>

        {image ? (
          <SmartImage
            src={image}
            alt={alt ?? title ?? "Hero"}
            priority
            className="aspect-[4/3] w-full bg-white/5"
          />
        ) : null}
      </div>
    </section>
  );
}
