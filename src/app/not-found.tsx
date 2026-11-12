import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Error 404</p>
      <h1 className="mt-3 text-5xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for has moved or never existed. Try the home page or start an estimate.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        Go home <ArrowRight className="size-4" aria-hidden />
      </Link>
    </section>
  );
}
