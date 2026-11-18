import { Fragment } from "react";
import type { FeatureTabsContent } from "@/types";
import { Icon } from "@/components/icons";
import { SectionTitle } from "./shared/SectionTitle";
import { CalloutBar } from "./shared/CalloutBar";

/**
 * Tabbed feature grid (e.g. User / Driver / Admin). Tabs use Bootstrap's tab plugin; the
 * "Show All" button and the mobile head toggle live in public/scripts/solution-page.js.
 */
export function FeatureTabs({ data }: { data: FeatureTabsContent }) {
  const paneId = (id: string) => `${data.idPrefix}-${id}`;
  const fit = data.variant === "fitness";
  const tabStrip = (
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
              aria-selected={i === 0}
            >
              <div
                className={`car-wash-feature-tab-icon${fit ? "" : " box-shadow"} d-flex align-items-center justify-content-center`}
              >
                <Icon name={tab.icon} />
              </div>{" "}
              <span>{tab.title}</span>
            </a>
          </li>
        </Fragment>
      ))}
    </ul>
  );
  const panes = (
    <div className="car-wash-feature-tab-content tab-content">
      {data.tabs.map((tab, i) => (
        <div
          key={tab.id}
          className={i === 0 ? "tab-pane fade active show" : "tab-pane fade"}
          id={paneId(tab.id)}
          role="tabpanel"
          aria-labelledby={`${paneId(tab.id)}-tab`}
        >
          <div className="car-wash-feature-tab-content-box">
            <div className="car-wash-feature-tab-content-icon">
              <Icon name={tab.headIcon ?? tab.icon} />
            </div>{" "}
            <span>{tab.title}</span>
          </div>{" "}
          <div
            className={`service-we-offer-web-inner row justify-content-center ${fit ? "m-height-260 " : ""}clearfix${fit ? "" : " m-height-300"}`}
          >
            {tab.items.map((item, j) => (
              <Fragment key={j}>
                {j > 0 && " "}
                <div
                  className={`col-lg-3 col-md-4 col-sm-6 col-12 mb-30${item.hidden ? " hide" : ""}`}
                >
                  <div
                    className={`web-why-choose-main-box mhbox${fit ? "" : " rounded10"} text-center`}
                  >
                    <div className="web-why-choose-main-icon">
                      <Icon name={item.icon} />
                    </div>{" "}
                    <h3>{item.title}</h3> <p>{item.text}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          {tab.items.some((item) => item.hidden) && (
            <>
              {" "}
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
            </>
          )}
        </div>
      ))}
    </div>
  );
  return (
    <section
      className={
        data.sectionClass ?? "padding-60 bg-light car-wash-feature-main"
      }
    >
      {data.bar && <CalloutBar data={data.bar} />}
      {data.bar && " "}
      {fit ? (
        <>
          <div className="container mt-50 mt-b-0">
            <SectionTitle
              text={data.text}
              heading={data.heading}
              paragraphs={data.text2 ? [data.text2] : []}
            />
          </div>{" "}
          <div className="fitness-tab-panel">
            <div className="container">{tabStrip}</div>
          </div>{" "}
          <div className="container fitness-tab-content">{panes}</div>
        </>
      ) : (
        <div className="container">
          <SectionTitle text={data.text} heading={data.heading} /> {tabStrip}{" "}
          {panes}
        </div>
      )}
    </section>
  );
}
