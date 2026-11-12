"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  estimateStart,
  estimateSteps,
  type EstimateOption,
  type EstimateStep,
} from "@/lib/estimate-steps";
import { useQuote } from "@/components/layout/QuoteProvider";
import { cn } from "@/lib/cn";

const stepsByKey = new Map<string, EstimateStep>(estimateSteps.map((s) => [s.key, s]));

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

/** Where the flow goes after `step` given the chosen option values. */
function nextKey(step: EstimateStep, chosen: string[]): string | undefined {
  const picked = step.options.find((o) => chosen.includes(o.value));
  return picked?.next ?? step.next;
}

export default function EstimateWizard() {
  const quote = useQuote();
  // history = visited step keys, answers = chosen option values per step key
  const [history, setHistory] = useState<string[]>([estimateStart]);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [finished, setFinished] = useState(false);

  const currentKey = history[history.length - 1];
  const step = stepsByKey.get(currentKey)!;
  const chosen = answers[currentKey] ?? [];

  const total = useMemo(() => {
    let sum = 0;
    for (const key of history) {
      const s = stepsByKey.get(key);
      for (const value of answers[key] ?? []) {
        sum += s?.options.find((o) => o.value === value)?.price ?? 0;
      }
    }
    return Math.max(0, sum);
  }, [history, answers]);

  const select = (option: EstimateOption) => {
    setAnswers((prev) => {
      const current = prev[currentKey] ?? [];
      if (step.type === "single") return { ...prev, [currentKey]: [option.value] };
      return {
        ...prev,
        [currentKey]: current.includes(option.value)
          ? current.filter((v) => v !== option.value)
          : [...current, option.value],
      };
    });
  };

  const goNext = () => {
    const target = nextKey(step, chosen);
    if (target && stepsByKey.has(target)) setHistory((h) => [...h, target]);
    else setFinished(true);
  };

  const goBack = () => {
    if (finished) return setFinished(false);
    setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));
  };

  const restart = () => {
    setHistory([estimateStart]);
    setAnswers({});
    setFinished(false);
  };

  const canContinue = chosen.length > 0 || step.type === "multiple";

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center justify-between text-sm">
        <span className="font-semibold text-muted">
          {finished ? "Summary" : `Step ${history.length}`}
        </span>
        <span className="rounded-full bg-brand-soft px-3 py-1 font-bold text-brand-dark">
          Running estimate: {usd(total)}
        </span>
      </div>

      {finished ? (
        <div className="rounded-card border border-line bg-surface p-8 text-center">
          <h2 className="text-2xl font-bold text-ink">Your estimate</h2>
          <p className="mt-3 text-5xl font-extrabold text-brand">{usd(total)}</p>
          <p className="mt-2 text-sm text-muted">
            An indicative figure based on your answers. We&apos;ll confirm it after a short call.
          </p>

          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm">
            {history.map((key) => {
              const s = stepsByKey.get(key)!;
              const labels = (answers[key] ?? [])
                .map((v) => s.options.find((o) => o.value === v)?.label)
                .filter(Boolean)
                .join(", ");
              return (
                <li key={key} className="flex justify-between gap-4 border-b border-line pb-2">
                  <span className="text-muted">{s.title}</span>
                  <span className="font-medium text-ink">{labels || "—"}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => quote.openQuote()}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Request a quote <ArrowRight className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={restart}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              Start over
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-card border border-line bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-ink">{step.title}</h2>
          <p className="mt-2 text-sm text-muted">
            {step.description}
            {step.type === "multiple" ? " (select all that apply)" : ""}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {step.options.map((option) => {
              const selected = chosen.includes(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => select(option)}
                  className={cn(
                    "flex items-center gap-3 rounded-card border p-4 text-left transition",
                    selected ? "border-brand bg-brand-soft/50" : "border-line hover:border-brand",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-5 shrink-0 place-items-center rounded-full border",
                      selected ? "border-brand bg-brand text-white" : "border-line",
                    )}
                  >
                    {selected ? <Check className="size-3" aria-hidden /> : null}
                  </span>
                  <span className="flex-1">
                    <span className="block font-medium text-ink">{option.label}</span>
                    {option.price > 0 ? (
                      <span className="text-xs text-muted">+{usd(option.price)}</span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={history.length === 1}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink disabled:opacity-40"
            >
              <ArrowLeft className="size-4" aria-hidden /> Back
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canContinue}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-40"
            >
              {nextKey(step, chosen) ? "Next" : "See estimate"}
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
