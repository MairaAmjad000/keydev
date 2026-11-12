import { cn } from "@/lib/cn";

type SmartImageProps = {
  src?: string | null;
  alt?: string | null;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/**
 * CMS images arrive as absolute URLs or `/uploads/...` paths. Until the media
 * host is configured for next/image, this renders a plain lazy <img> and falls
 * back to a branded placeholder when a section has no image.
 */
export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: SmartImageProps) {
  return (
    <div className={cn("overflow-hidden rounded-card bg-brand-soft/70", className)}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("size-full object-cover", imgClassName)}
        />
      ) : (
        <div
          aria-hidden
          className="size-full min-h-32 bg-[linear-gradient(135deg,#e6f2f2_0%,#cfe6e6_100%)]"
        />
      )}
    </div>
  );
}
