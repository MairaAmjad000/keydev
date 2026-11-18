import { Fragment } from "react";
import type { KeyFeaturesContent } from "@/types";
import { Icon } from "@/components/icons";
import { SectionTitle } from "./shared/SectionTitle";

/** Grid of small feature tiles: icon over a short label. */
export function KeyFeatures({ data }: { data: KeyFeaturesContent }) {
  return (
    <>
      <section
        className={data.sectionClass ?? "padding-60 key-features-main bg-light"}
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
                <div
                  className={`col-lg-3 col-md-4 col-sm-6 col-12 mb-30${item.hidden ? " hide" : ""}`}
                >
                  <div className="key-features-box box-shadow rounded10">
                    <div className="key-features-icon">
                      <Icon name={item.icon} />
                    </div>{" "}
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          {data.showAll && (
            <div className="key-feeature-show-all-button text-center mt-20">
              <a
                className="btn btn-lg btn-custome waves-effect waves-light"
                href="#"
                data-show-all={data.showAll.text}
                data-show-less={data.showAll.lessText}
              >
                {data.showAll.text}
              </a>
            </div>
          )}
        </div>
      </section>
      {data.spacerAfter && <div className={data.spacerAfter} />}
    </>
  );
}
