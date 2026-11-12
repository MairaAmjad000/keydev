"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { formOptions, site } from "@/lib/site";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted";

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [status, setStatus] = useState<"idle" | "unwired">("idle");

  return (
    <Modal
      open={open}
      onClose={() => {
        setStatus("idle");
        onClose();
      }}
      title="Request the Quote"
      description="Tell us about your project and we will reply within one business day."
      panelClassName="sm:max-w-2xl"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // TODO: POST to the queries endpoint once the API layer exists.
          setStatus("unwired");
        }}
        className="space-y-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-name" className={labelClass}>
              Full name <span className="text-brand">*</span>
            </label>
            <input
              id="quote-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Cooper"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="quote-email" className={labelClass}>
              Email <span className="text-brand">*</span>
            </label>
            <input
              id="quote-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@company.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 555 000 0000"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="quote-company" className={labelClass}>
              Company
            </label>
            <input
              id="quote-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="quote-budget" className={labelClass}>
              Budget
            </label>
            <select id="quote-budget" name="budget" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select budget
              </option>
              {formOptions.budgets.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quote-region" className={labelClass}>
              Region
            </label>
            <select id="quote-region" name="region" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select region
              </option>
              {formOptions.regions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quote-service" className={labelClass}>
              Service
            </label>
            <select id="quote-service" name="service" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select service
              </option>
              {formOptions.services.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quote-reference" className={labelClass}>
              How did you hear about us?
            </label>
            <select id="quote-reference" name="reference" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select source
              </option>
              {formOptions.references.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="quote-message" className={labelClass}>
            Project details <span className="text-brand">*</span>
          </label>
          <textarea
            id="quote-message"
            name="message"
            required
            rows={4}
            placeholder="What are you building, and what is the timeline?"
            className={`${fieldClass} resize-y`}
          />
        </div>

        {status === "unwired" ? (
          <p
            role="status"
            className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
          >
            Form captured locally. The submission endpoint is not wired up yet.
          </p>
        ) : null}

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            Prefer email?{" "}
            <a
              className="font-semibold text-brand hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Send request
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      </form>
    </Modal>
  );
}
