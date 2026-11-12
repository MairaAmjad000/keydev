import type { Metadata } from "next";
import EstimateWizard from "@/components/wizard/EstimateWizard";

export const metadata: Metadata = {
  title: "Get a project estimate",
  description: "Answer a few questions about your web, mobile or game project and get an indicative price.",
};

export default function EstimatePage() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Estimate</p>
        <h1 className="mt-2 text-4xl font-extrabold text-ink">Get a project estimate</h1>
        <p className="mt-4 text-muted">Answer a few questions and see an indicative price instantly.</p>
      </div>
      <EstimateWizard />
    </section>
  );
}
