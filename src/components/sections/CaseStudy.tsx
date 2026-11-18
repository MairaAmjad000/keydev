import type { CaseStudyContent } from "@/types";
import { SectionTitle } from "./shared/SectionTitle";

/** Case-study heading block (title, headline and a short intro). */
export function CaseStudy({ data }: { data: CaseStudyContent }) {
  return (
    <section className={data.sectionClass ?? "padding-6030 bg-white"}>
      <div className="container">
        <SectionTitle
          text={data.text}
          heading={data.heading}
          paragraphs={data.text2 ? [data.text2] : []}
        />
      </div>
    </section>
  );
}
