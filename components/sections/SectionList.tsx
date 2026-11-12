import type { SectionData } from "@/lib/sections/types";
import { getSectionComponent } from "./SectionRegistry";

/** Renders CMS-style sections in order, resolving each `key` via the registry. */
export function SectionList({ sections }: { sections: SectionData[] }) {
  return (
    <>
      {sections.map((section, index) => {
        const render = getSectionComponent(section.key ?? "");
        return <div key={`${section.key}-${index}`}>{render(section)}</div>;
      })}
    </>
  );
}
