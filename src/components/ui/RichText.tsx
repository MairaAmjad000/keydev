import { cn } from "@/lib/cn";

/**
 * Renders the rich-text HTML stored in CMS description fields.
 * Sanitisation belongs on the server (trusted admin input today); keep it here
 * if the content source ever widens.
 */
export function RichText({
  html,
  className,
  invert = false,
}: {
  html?: string | null;
  className?: string;
  invert?: boolean;
}) {
  if (!html) return null;

  return (
    <div
      className={cn(
        "text-base leading-relaxed [&_a]:font-semibold [&_a]:text-brand [&_a]:underline",
        "[&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-bold",
        "[&_li]:mb-1.5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5",
        "[&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5",
        invert ? "text-white/75" : "text-muted",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
