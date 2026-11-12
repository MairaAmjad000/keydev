import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import type { SectionData } from "@/lib/sections/types";

export function LatestBlogs({
  eyebrow,
  title,
  description,
  records = [],
  buttonText,
  buttonHref,
}: SectionData) {
  if (records.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <article
            key={record.id}
            className="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition hover:-translate-y-1 hover:shadow-card"
          >
            <Link href={record.href} className="block overflow-hidden">
              <SmartImage
                src={record.image}
                alt={record.alt ?? record.title}
                className="aspect-[16/10] rounded-none"
                imgClassName="transition duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-3 text-xs text-muted">
                {record.category ? (
                  <span className="rounded-full bg-brand-soft px-2.5 py-1 font-semibold text-brand">
                    {record.category}
                  </span>
                ) : null}
                {record.meta ? (
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="size-3.5" aria-hidden />
                    {record.meta}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 text-base font-bold leading-snug text-ink">
                <Link href={record.href} className="transition hover:text-brand">
                  {record.title}
                </Link>
              </h3>

              {record.excerpt ? (
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {record.excerpt}
                </p>
              ) : null}

              <Link
                href={record.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
              >
                Read article
                <ArrowUpRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </article>
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

export function BlogCategoriesGrid({ eyebrow, title, description, records = [] }: SectionData) {
  if (records.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="flex flex-wrap justify-center gap-3">
        {records.map((record) => (
          <li key={record.id}>
            <Link
              href={record.href}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              {record.title}
              {record.meta ? (
                <span className="rounded-full bg-surface px-2 py-0.5 text-xs text-muted">
                  {record.meta}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
