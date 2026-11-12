import { cn } from "@/lib/cn";

const tones = {
  white: "bg-white",
  light: "bg-surface",
  dark: "bg-ink text-white",
  brand: "bg-brand text-white",
} as const;

type SectionProps = {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  container?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  tone = "white",
  className,
  container = true,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", tones[tone], className)}>
      {container ? <div className="container-page">{children}</div> : children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className,
}: SectionHeadingProps) {
  if (!eyebrow && !title && !description) return null;

  return (
    <div
      className={cn(
        "mb-10",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
      ) : null}

      {title ? (
        <h2
          className={cn(
            "mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl",
            invert ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            invert ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
