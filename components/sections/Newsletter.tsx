import { Section, SectionHeading } from "@/components/ui/Section";
import type { SectionData } from "@/lib/sections/types";

export function Newsletter({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref,
}: SectionData) {
  if (!buttonText && !buttonHref) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <form className="rounded-card border border-line bg-white p-8 max-w-md mx-auto">
        <h3 className="font-semibold text-2xl text-ink mb-3">{title ?? "Newsletter"}</h3>
        {description && (
          <p className="text-ink/70 mb-6 line-clamp-2">{description}</p>
        )}
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-line px-4 py-3 focus:outline-none focus:border-brand"
          />
          <button
            type="submit"
            disabled={!buttonHref}
            className="rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
          >
            {buttonText ?? "Subscribe"}
          </button>
        </div>
      </form>
    </Section>
  );
}