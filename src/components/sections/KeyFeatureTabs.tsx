import { Fragment } from "react";
import type { KeyFeatureTabsContent } from "@/types";
import { Icon } from "@/components/icons";
import { SectionTitle } from "./shared/SectionTitle";

/** Feature tabs whose panes hold small icon tiles; extra tiles are revealed by "Show All". */
export function KeyFeatureTabs({ data }: { data: KeyFeatureTabsContent }) {
  const paneId = (id: string) => `${data.idPrefix}-${id}`;
  return (
    <section
      className={
        data.sectionClass ??
        "padding-60 bg-light car-wash-feature-main key-feature-opt2"
      }
    >
      <div className="container">
        <SectionTitle
          text={data.text}
          heading={data.heading}
          paragraphs={data.text2 ? [data.text2] : []}
        />{" "}
        <ul
          className="car-wash-feature-tab nav nav-tabs d-flex justify-content-center"
          id={`${data.idPrefix}-featuretab`}
          role="tablist"
        >
          {data.tabs.map((tab, i) => (
            <Fragment key={tab.id}>
              {i > 0 && " "}
              <li className="car-wash-feature-tab-box">
                <a
                  className={i === 0 ? "active" : undefined}
                  id={`${paneId(tab.id)}-tab`}
                  data-toggle="tab"
                  href={`#${paneId(tab.id)}`}
                  role="tab"
                  aria-controls={paneId(tab.id)}
                  aria-selected="true"
                >
                  <span>{tab.title}</span>
                </a>
              </li>
            </Fragment>
          ))}
        </ul>{" "}
        <div className="car-wash-feature-tab-content tab-content">
          {data.tabs.map((tab, i) => (
            <Fragment key={tab.id}>
              {i > 0 && " "}
              <div
                className={`tab-pane fade${i === 0 ? " active show" : ""}`}
                id={paneId(tab.id)}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
              >
                <div className="car-wash-feature-tab-content-box">
                  <span>{tab.title}</span>
                </div>{" "}
                <div
                  className={`service-we-offer-web-inner row justify-content-center clearfix${tab.heightClass ? ` ${tab.heightClass}` : ""}`}
                >
                  {tab.items.map((item, j) => (
                    <Fragment key={j}>
                      {j > 0 && " "}
                      <div
                        className={`col-lg-3 col-md-4 col-sm-6 col-12 mb-30${item.hidden ? " hide" : ""}`}
                      >
                        <div className="key-features-box rounded10 text-center">
                          <div className="key-features-icon">
                            <Icon name={item.icon} />
                          </div>{" "}
                          <h4>{item.title}</h4>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>{" "}
                <div className="show-all-button text-center mt-20">
                  <a
                    className="btn btn-lg btn-custome waves-effect waves-light"
                    href="#"
                    data-show-all={data.showAllText}
                    data-show-less={data.showLessText}
                  >
                    {data.showAllText}
                  </a>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
