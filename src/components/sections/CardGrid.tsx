import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import type { CmsItem, SectionData } from "@/lib/sections/types";
import { cn } from "@/lib/cn";

type CardGridProps = SectionData & {
  variant?: "default" | "compact" | "image" | "wide";
  tone?: "white" | "light";
};

function IconOrImage({ item }: { item: CmsItem }) {
  if (item.image) {
    return (
      <SmartImage
        src={item.image}
        alt={item.alt ?? item.title ?? ""}
        className="aspect-[16/10] w-full"
      />
    );
  }

  if (item.icon) {
    return (
      <SmartImage
        src={item.icon}
        alt={item.title ?? ""}
        className="size-12 rounded-xl bg-brand-soft p-2.5"
        imgClassName="object-contain"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand"
    >
      <Check className="size-5" />
    </span>
  );
}

function Card({ item, variant }: { item: CmsItem; variant: CardGridProps["variant"] }) {
  const points = item.points?.split(/\r?\n/).filter(Boolean) ?? [];
  const hasMedia = Boolean(item.image || item.icon);

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-card border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-card",
        variant === "image" ? "overflow-hidden" : "p-6",
      )}
    >
      {hasMedia ? (
        <div className={variant === "image" ? "" : "mb-5"}>
          <IconOrImage item={item} />
        </div>
      ) : null}

      <div className={variant === "image" ? "flex flex-1 flex-col p-6" : "flex flex-1 flex-col"}>
        {item.subtitle ? (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand">
            {item.subtitle}
          </p>
        ) : null}

        {item.title ? (
          <h3 className="text-lg font-bold leading-snug text-ink">{item.title}</h3>
        ) : null}

        {item.description ? (
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        ) : null}

        {points.length > 0 ? (
          <ul className="mt-4 space-y-1.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-ink/80">
                <Check className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        ) : null}

        {item.buttonText && item.buttonHref ? (
          <Link
            href={item.buttonHref}
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2"
          >
            {item.buttonText}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function CardGrid({
  eyebrow,
  title,
  description,
  items = [],
  buttonText,
  buttonHref,
  variant = "default",
  tone = "white",
}: CardGridProps) {
  if (items.length === 0) return null;

  const columns =
    variant === "compact"
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : variant === "wide"
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className={cn("grid gap-5", columns)}>
        {items.map((item, index) => (
          <Card key={`${item.title ?? "item"}-${index}`} item={item} variant={variant} />
        ))}
      </div>

      {buttonText && buttonHref ? (
        <div className="mt-8 flex justify-center">
          <ButtonLink href={buttonHref} variant="outline" withArrow>
            {buttonText}
          </ButtonLink>
        </div>
      ) : null}
    </Section>
  );
}

/** `offerings`: same cards, grouped into tabs when `meta` holds a tab title. */
export function OfferingsTabs({
  eyebrow,
  title,
  description,
  items = [],
  buttonText,
  buttonHref,
}: SectionData) {
  if (items.length === 0) return null;

  const groups = new Map<string, CmsItem[]>();
  for (const item of items) {
    const key = item.meta?.trim() || "Overview";
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }

  const renderCards = (groupItems: CmsItem[]) => (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groupItems.map((item, index) => (
        <Card key={`${item.title ?? "item"}-${index}`} item={item} variant="image" />
      ))}
    </div>
  );

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      {groups.size > 1 ? (
        <Tabs
          tabs={[...groups.entries()].map(([groupTitle, groupItems]) => ({
            title: groupTitle,
            content: renderCards(groupItems),
          }))}
        />
      ) : (
        renderCards(items)
      )}

      {buttonText && buttonHref ? (
        <div className="mt-8 flex justify-center">
          <ButtonLink href={buttonHref} variant="outline" withArrow>
            {buttonText}
          </ButtonLink>
        </div>
      ) : null}
    </Section>
  );
}
