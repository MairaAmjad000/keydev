import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Star } from "lucide-react";
import {
  certifications,
  footerExpertise,
  footerSolutions,
  legalLinks,
  offices,
  site,
  socialLinks,
} from "@/lib/site";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/65 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto">
      <section className="border-t border-line bg-surface py-14">
        <div className="container-page">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Connect with us
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              We Are Available At
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-card border border-line bg-white p-6 shadow-card"
              >
                <h3 className="flex items-center gap-2 text-base font-bold text-ink">
                  <MapPin className="size-4 text-brand" aria-hidden />
                  {office.city}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{office.address}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a
                      href={office.phoneHref}
                      className="inline-flex items-center gap-2 text-ink/80 transition hover:text-brand"
                    >
                      <Phone className="size-3.5 text-brand" aria-hidden />
                      {office.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${office.email}`}
                      className="inline-flex items-center gap-2 text-ink/80 transition hover:text-brand"
                    >
                      <Mail className="size-3.5 text-brand" aria-hidden />
                      {office.email}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-white/70">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-2">
                <span className="grid size-9 place-items-center rounded-md bg-brand text-sm font-extrabold text-white">
                  KD
                </span>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Key<span className="text-brand">Devs</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                {site.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-brand hover:text-white"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <FooterColumn title="Expertise" links={footerExpertise} />
            <FooterColumn title="Solutions" links={footerSolutions} />

            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">
                Start a project
              </h3>
              <p className="text-sm leading-relaxed">
                Tell us what you are building. We reply within one business day.
              </p>
              <Link
                href={site.estimateHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Discuss Your Project
                <ArrowRight className="size-4" aria-hidden />
              </Link>

              <div className="mt-6 rounded-card border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-extrabold text-white">
                  {site.experienceYears}+
                </p>
                <p className="text-xs uppercase tracking-wide">Years in the industry</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-0.5 text-amber-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-current" />
                ))}
              </span>
              <span className="font-semibold text-white">{site.clutchScore} / 5.0</span>
              <span className="text-white/50">on Clutch</span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {certifications.map((badge) => (
                <li
                  key={badge}
                  className="rounded border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/70"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-ink pb-8 text-white/50">
        <div className="container-page flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="text-white/30">Registered in Pakistan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
