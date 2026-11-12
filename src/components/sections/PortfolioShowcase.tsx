import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import type { SectionData } from "@/lib/sections/types";
import { cn } from "@/lib/cn";

export function PortfolioShowcase({
  eyebrow,
  title,
  description,
  records = [],
  buttonText,
  buttonHref,
  variant,
}: SectionData) {
  if (records.length === 0) return null;

  const featured = variant === "wide";
  const [first, ...rest] = records;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div
        className={cn(
          "grid gap-5",
          featured ? "lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {featured ? (
          <Link
            href={first.href}
            className="group relative overflow-hidden rounded-card bg-ink lg:row-span-2"
          >
            <SmartImage
              src={first.image}
              alt={first.alt ?? first.title}
              className="aspect-[4/3] h-full w-full rounded-none"
              imgClassName="transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
              {first.category ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-soft">
                  {first.category}
                </p>
              ) : null}
              <h3 className="mt-1 text-xl font-bold text-white">{first.title}</h3>
            </div>
          </Link>
        ) : null}

        {(featured ? rest : records).map((record) => (
          <Link
            key={record.id}
            href={record.href}
            className="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition hover:-translate-y-1 hover:shadow-card"
          >
            <SmartImage
              src={record.image}
              alt={record.alt ?? record.title}
              className="aspect-[16/10] rounded-none"
              imgClassName="transition duration-500 group-hover:scale-105"
            />
            <div className="flex flex-1 items-start justify-between gap-3 p-5">
              <div>
                {record.category ? (
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {record.category}
                  </p>
                ) : null}
                <h3 className="mt-1 text-base font-bold text-ink">{record.title}</h3>
              </div>
              <ArrowUpRight
                className="mt-1 size-4 shrink-0 text-muted transition group-hover:text-brand"
                aria-hidden
              />
            </div>
          </Link>
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
