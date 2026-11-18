import { Fragment } from "react";
import type { SimilarAppContent } from "@/types";
import { link } from "@/lib/utils/markup";

/** Case-study style block: text on the left, two overlapping app pictures bleeding in from the right. */
export function SimilarApp({ data }: { data: SimilarAppContent }) {
  return (
    <>
      <section className={data.sectionClass}>
        {data.backgroundImage && (
          <img
            className="imgbg"
            src={data.backgroundImage.src}
            alt={data.backgroundImage.alt}
          />
        )}
        <div className="container-2">
          <div className="row">
            {data.backgroundImage && (
              <>
                <div className="col-lg-6 col-md-6 col-12" />{" "}
              </>
            )}
            <div
              className={
                data.backgroundImage
                  ? "col-lg-6 col-md-12 col-12"
                  : "col-lg-6 col-md-12 col-sm-12 col-12 order-1"
              }
            >
              <div className="similar-app-content-wrap d-flex align-items-center">
                <div className="similar-app-content">
                  <h2>{data.heading}</h2>
                  {data.paragraphs.map((p, i) => (
                    <Fragment key={i}>
                      {" "}
                      <p dangerouslySetInnerHTML={{ __html: p.html }} />
                    </Fragment>
                  ))}{" "}
                  <a className={data.link.className} {...link(data.link.href)}>
                    {data.link.text}
                  </a>
                </div>
              </div>
            </div>
            {!data.backgroundImage && (
              <>
                {" "}
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-0" />
              </>
            )}
          </div>
        </div>{" "}
        <div className="similar-app-image">
          <div className="similar-app-image-wid">
            <img
              className="img1"
              src={data.images.first.src}
              alt={data.images.first.alt}
            />{" "}
            <img
              className="img2"
              src={data.images.second.src}
              alt={data.images.second.alt}
            />{" "}
            <img
              className="d-block d-lg-none"
              src={data.images.mobile.src}
              alt={data.images.mobile.alt}
            />
          </div>
        </div>
      </section>
      {data.spacerAfter && <div className={data.spacerAfter} />}
    </>
  );
}
