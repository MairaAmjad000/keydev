"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import type { SectionData } from "@/lib/sections/types";

export function CalloutStrip({
  textBefore,
  textAfter,
  words = [],
  buttonText,
  buttonHref,
}: SectionData) {
  const [index, setIndex] = useState(0);
  const options = words.filter(Boolean);

  useEffect(() => {
    if (options.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % options.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [options.length]);

  if (!textBefore && !textAfter && options.length === 0) return null;

  return (
    <section className="bg-brand py-14 text-white">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <p className="max-w-3xl text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
          {textBefore ? <span>{textBefore} </span> : null}
          {options.length > 0 ? (
            <span className="underline decoration-white/40 decoration-4 underline-offset-4">
              {options[index]}
            </span>
          ) : null}
          {textAfter ? <span> {textAfter}</span> : null}
        </p>

        {buttonText && buttonHref ? (
          <ButtonLink href={buttonHref} variant="white" withArrow>
            {buttonText}
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
