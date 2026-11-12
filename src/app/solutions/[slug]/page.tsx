import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionList } from "@/components/sections/SectionList";
import { getSolution, solutionSections, solutions } from "@/lib/seed";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  return solution ? { title: solution.title, description: solution.summary } : {};
}

export default async function SolutionPage({ params }: Props) {
  const solution = getSolution((await params).slug);
  if (!solution) notFound();
  return <SectionList sections={solutionSections(solution)} />;
}
