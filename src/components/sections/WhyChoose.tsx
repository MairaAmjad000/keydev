import { Fragment } from "react";
import type { WhyChooseContent } from "@/types";
import { Icon } from "@/components/icons";

/** "Why choose us" – grid of icon cards under an intro (two columns by default). */
export function WhyChoose({ data }: { data: WhyChooseContent }) {
  const grid = (
    <div className={data.rowClass ?? "row align-items-center"}>
      {data.items.map((item, i) => (
        <div
          key={i}
          className={data.columnClass ?? "col-lg-6 col-md-6 col-sm-12 col-12"}
        >
          <div className="web-why-choose-us-inner-box mhbox">
            <div className="web-why-choose-inner-icon">
              <Icon name={item.icon} />
            </div>{" "}
            <h5>{item.title}</h5> <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <section
      className={
        data.sectionClass ?? "padding-60 bg-light web-why-choose-us-main"
      }
    >
      <div className="container">
        <div className="title">
          <span>{data.text}</span> <h2>{data.heading}</h2>
          {data.paragraphs.map((p, i) => (
            <Fragment key={i}>
              {" "}
              <p dangerouslySetInnerHTML={{ __html: p.html }} />
            </Fragment>
          ))}
        </div>{" "}
        {data.heightClass === "" ? (
          grid
        ) : (
          <div className={data.heightClass ?? "m-height-170"}>{grid}</div>
        )}
      </div>
    </section>
  );
}
