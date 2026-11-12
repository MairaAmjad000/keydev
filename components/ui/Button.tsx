import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-line text-ink hover:border-brand hover:text-brand",
  white: "bg-white text-ink hover:bg-white/90",
  ghost: "border border-white/25 text-white hover:border-white",
} as const;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  withArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  withArrow = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
        variants[variant],
        className,
      )}
    >
      {children}
      {withArrow ? <ArrowRight className="size-4" aria-hidden /> : null}
    </Link>
  );
}
