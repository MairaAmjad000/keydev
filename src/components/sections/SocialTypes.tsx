import { Fragment } from "react";
import type { SocialTypesContent } from "@/types";
import { SectionTitle } from "./shared/SectionTitle";

/** Cards listing a kind of app: an empty teal-underlined header band over a title and text (no images). */
export function SocialTypes({ data }: { data: SocialTypesContent }) {
  return (
    <section
      className={
        data.sectionClass ??
        "padding-6030 bg-white solution-we-offer-main invest-erp-main"
      }
    >
      <div className="container">
        <SectionTitle
          text={data.text}
          heading={data.heading}
          paragraphs={data.text2 ? [data.text2] : []}
        />{" "}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-30">
                <div className="types-of-social-media-box rounded10 box-shadow">
                  {/* Empty header band (no logos), as designed. */}
                  <div className="types-of-social-media-platform" />{" "}
                  <div className="types-of-social-media-content">
                    <h3>{item.title}</h3>{" "}
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
