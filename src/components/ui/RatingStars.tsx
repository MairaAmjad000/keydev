import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function RatingStars({
  value = 5,
  className,
  size = "size-4",
}: {
  value?: number | null;
  className?: string;
  size?: string;
}) {
  const rating = Math.max(0, Math.min(5, Math.round(value ?? 0)));

  return (
    <span className={cn("inline-flex items-center gap-0.5 text-amber-500", className)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(size, index < rating ? "fill-current" : "fill-none opacity-40")}
          aria-hidden
        />
      ))}
      <span className="sr-only">{(value ?? 0).toFixed(1)} out of 5</span>
    </span>
  );
}
