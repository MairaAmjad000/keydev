import { Fragment } from "react";
import type { SolutionOffersContent } from "@/types";
import { SectionTitle } from "./shared/SectionTitle";

/** Two-column cards: a picture with an overlapping text panel. */
export function SolutionOffers({ data }: { data: SolutionOffersContent }) {
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
        <div className={data.rowClass ?? "row justify-content-center"}>
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-40">
                <div className="solution-we-offer-box clearfix">
                  <div className="solution-we-offer-image">
                    <img
                      className="lazy rounded10 box-shadow"
                      data-src={item.image.src}
                      alt={item.image.alt}
                    />
                  </div>{" "}
                  <div className="solution-we-offer-content rounded10 box-shadow">
                    <h3>{item.title}</h3> <p>{item.text}</p>
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
