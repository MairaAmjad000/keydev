import { Fragment } from "react";
import type { MessagingFeaturesContent } from "@/types";
import { Icon } from "@/components/icons";
import { SectionTitle } from "./shared/SectionTitle";

/**
 * Feature picker for messaging apps: a phone-screen picture on the left, a list of features on the right.
 * Behaviour (switching rows, accordion on mobile) comes from the shared `.tab_wrapper` script.
 */
export function MessagingFeatures({
  data,
}: {
  data: MessagingFeaturesContent;
}) {
  const tabId = (i: number) => `tab_1_${i + 1}`;
  return (
    <section
      className={
        data.sectionClass ?? "padding-60 bg-light ins-msg-solution-main"
      }
    >
      <div className="container">
        <SectionTitle
          text={data.text}
          heading={data.heading}
          paragraphs={data.text2 ? [data.text2] : []}
        />{" "}
        <div className="row align-items-center tab_wrapper first_tab ins-msg-tab-wrap">
          <div className="col-lg-1 d-none d-lg-block"> </div>{" "}
          <div className="col-lg-5 col-12">
            <div className="ins-msg-content-wrap content_wrapper bg-white box-shadow rounded10">
              {data.items.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <div
                    className={`contentrow d-flex${i === 0 ? " active" : ""} align-items-center`}
                  >
                    <img src={item.image.src} alt={item.image.alt} />{" "}
                    <div className="tab_content_wrap">
                      <div
                        className={`tab_content${i === 0 ? "" : " clearfix"} first ${tabId(i)}`}
                        style={{ display: "none" }}
                      >
                        <img src={item.image.src} alt={item.image.alt} />{" "}
                        <div className="tab_inner_content">
                          <p dangerouslySetInnerHTML={{ __html: item.text }} />
                          {item.moreText?.map((t, k) => (
                            <Fragment key={k}>
                              {" "}
                              <p dangerouslySetInnerHTML={{ __html: t }} />
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>{" "}
          <div className="col-lg-6 col-12 d-none d-md-block">
            <ul className="tab_list clearfix">
              {data.items.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <li
                    className={i === 0 ? "active" : undefined}
                    {...{ rel: tabId(i) }}
                  >
                    <div className="tab_list_title-wrap d-flex align-items-center">
                      <div className="tab_list_title_icon">
                        <Icon name={item.icon} />
                      </div>{" "}
                      <div className="tab_list_title">{item.title}</div>
                    </div>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
