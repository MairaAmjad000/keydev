import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { SectionData } from "@/lib/sections/types";

export function CTA({ eyebrow, title, description, buttonText, buttonHref }: SectionData) {
  if (!title && !buttonText) return null;

  return (
    <Section tone="brand">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
          {title ?? "Let's build something great"}
        </h2>
        {description ? <p className="mt-4 text-white/85">{description}</p> : null}
        {buttonText && buttonHref ? (
          <Link
            href={buttonHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-soft"
          >
            {buttonText}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        ) : null}
      </div>
    </Section>
  );
}
