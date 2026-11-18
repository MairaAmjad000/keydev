import { Fragment } from "react";
import type { ChatbotAdvantagesContent } from "@/types";
import { Icon } from "@/components/icons";
import { SectionTitle } from "./shared/SectionTitle";

/** Advantage cards: white boxes on a grey background with an icon, title and text. */
export function ChatbotAdvantages({
  data,
}: {
  data: ChatbotAdvantagesContent;
}) {
  return (
    <section
      className={data.sectionClass ?? "padding-6030 bg-light chatbot-adv"}
    >
      <div className="container">
        <SectionTitle
          text={data.text}
          heading={data.heading}
          paragraphs={data.text2 ? [data.text2] : []}
        />{" "}
        <div className="row align-items-center justify-content-between">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <div className="col-4 col-md-4 col-sm-6 col-12 mb-30">
                <div className="chatbot-adv-box bg-white rounded10 text-center">
                  <div className="chatbot-adv-icon">
                    <Icon name={item.icon} />
                  </div>{" "}
                  <h3>{item.title}</h3> <p>{item.text}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
