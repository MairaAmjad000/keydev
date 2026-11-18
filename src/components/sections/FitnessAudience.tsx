import { Fragment } from "react";
import type { FitnessAudienceContent } from "@/types";
import { Icon } from "@/components/icons";
import { SectionTitle } from "./shared/SectionTitle";

/** Big picture with a panel of audience icons overlaid. */
export function FitnessAudience({ data }: { data: FitnessAudienceContent }) {
  return (
    <section
      className={data.sectionClass ?? "padding-60 bg-white fitness-app-main"}
    >
      <div className="container mt-50 mt-b-0">
        <SectionTitle
          text={data.text}
          heading={data.heading}
          paragraphs={data.text2 ? [data.text2] : []}
        />{" "}
        <div className="fitness-app-image">
          <img
            className="box-shadow rounded10 lazy"
            data-src={data.image.src}
            alt={data.image.alt}
          />{" "}
          <div className="fitness-app-overlay-content">
            <div className="fitness-app-overlay-content-table">
              {data.items.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <div className="fitness-app-overlay-content-box">
                    <div className="fitness-app-overlay-content-icon">
                      <Icon name={item.icon} />
                    </div>{" "}
                    <span>{item.title}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
