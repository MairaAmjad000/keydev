import { Fragment } from "react";
import type { MessagingPanelsContent } from "@/types";
import { SectionTitle } from "./shared/SectionTitle";

/** Text on the left, a big screenshot of the admin panel on the right. */
export function MessagingPanels({ data }: { data: MessagingPanelsContent }) {
  return (
    <section
      className={
        data.sectionClass ?? "padding-60 bg-white ins-msg-app-panels-main"
      }
    >
      <div className="container">
        <SectionTitle
          text={data.text}
          heading={data.heading}
          paragraphs={data.text2 ? [data.text2] : []}
        />{" "}
        <div className="row align-items-center">
          <div className="col-lg-5 col-12 mb-30">
            <div className="ins-msg-app-panels-content">
              <h3>{data.panelTitle}</h3>
              {data.paragraphs.map((p, i) => (
                <Fragment key={i}>
                  {" "}
                  <p dangerouslySetInnerHTML={{ __html: p.html }} />
                </Fragment>
              ))}
            </div>
          </div>{" "}
          <div className="col-lg-7 col-12">
            <div className="ins-msg-app-panels-content text-center">
              <img
                className="lazy box-shadow rounded10"
                data-src={data.image.src}
                alt={data.image.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
