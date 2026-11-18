import { Fragment } from "react";
import type { ChatbotPlatformsContent } from "@/types";
import { SectionTitle } from "./shared/SectionTitle";

/** One box per messaging platform: logo beside a short description. */
export function ChatbotPlatforms({ data }: { data: ChatbotPlatformsContent }) {
  return (
    <section className={data.sectionClass ?? "padding-60 bg-white"}>
      <div className="container">
        <SectionTitle
          text={data.text}
          heading={data.heading}
          paragraphs={data.text2 ? [data.text2] : []}
        />{" "}
        <div className="row">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <div
                className={item.columnClass ?? "col-lg-6 col-md-6 col-12 mb-30"}
              >
                <div className="chatbot-platform-box box-shadow rounded10">
                  <div className="chatbot-platform-box-icon">
                    <img
                      className="lazy"
                      data-src={item.image.src}
                      alt={item.image.alt}
                    />
                  </div>{" "}
                  <p
                    className="mb-0"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
