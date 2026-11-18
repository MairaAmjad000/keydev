import { Fragment } from "react";
import type { IndustryTabsContent } from "@/types";
import { CalloutBar } from "./shared/CalloutBar";
import { Icon } from '@/components/icons';
import { IconSlot } from "./shared/IconSlot";

/**
 * "Many Industries, Many Solutions" block of the mobile-app service pages: a fading slide per industry
 * with a tab strip underneath. Both are driven together by slick (see public/scripts/category-page.js).
 */
export function IndustryTabs({ data }: { data: IndustryTabsContent }) {
  return (
    <>
      {data.heading && (
        <>
          <section
            className={
              data.sectionClass ?? "padding-60 bg-light p-relative pb-0"
            }
          >
            {data.callout && (
              <>
                <CalloutBar data={data.callout} />{" "}
              </>
            )}
            <div className="container">
              <div className={data.callout ? "title mb-0 mt-5" : "title mb-0"}>
                <span>{data.text}</span> <h2>{data.heading}</h2>
                {data.text2 && (
                  <>
                    {" "}
                    <p className="mb-0">{data.text2}</p>
                  </>
                )}
              </div>
            </div>
          </section>{" "}
        </>
      )}
      <section className="padding-00-60 bg-light o-hidden">
        <div className="app-service-tab-content">
          {data.items.map((item, i) => (
            <div key={i}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-12 order-lg-1">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading="lazy"
                    />
                  </div>{" "}
                  <div className="col-lg-6 col-12">
                    <div className="app-service-tab-text">
                      {data.bareIcons ? <Icon name={item.icon} /> : <IconSlot icon={item.icon} className="app-svg-icon" />}{" "}
                      <h3>{item.title}</h3>
                      {item.paragraphs.map((paragraph, j) => (
                        <Fragment key={j}>
                          {" "}
                          <p>{paragraph}</p>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
        <div className="px-5 app-service-tab mt-4">
          {data.items.map((item, i) => (
            <div className="item" key={i}>
              <div className="app-service-tab-box">
                {data.bareIcons ? <Icon name={item.navIcon} /> : <IconSlot icon={item.navIcon} className="app-svg-icon" />}{" "}
                <span>{item.navLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
