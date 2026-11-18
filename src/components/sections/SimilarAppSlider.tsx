"use client";

import { Fragment, useEffect, useState } from "react";
import type { SimilarAppSliderContent } from "@/types";

/** Time each slide stays on screen, in ms (the cross-fade itself takes 1s, see similar-app-slider.css). */
const SLIDE_INTERVAL = 4000;

/**
 * Case-study slider: one slide per app, coloured panel with two overlapping phone screens on the
 * left, logo + text + feature ticks on the right.
 *
 * It is a plain React component (cross-fade, dots on the right, autoplay) and does NOT depend on
 * jQuery / slick or on any script finishing loading, so it also works when a CDN is slow or blocked.
 * The markup and class names are the same as before, so the existing styles still apply.
 */
export function SimilarAppSlider({ data }: { data: SimilarAppSliderContent }) {
  const count = data.items.length;
  const [active, setActive] = useState(0);

  // Autoplay. The timer restarts whenever the slide changes, so clicking a dot gives a full interval.
  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % count), SLIDE_INTERVAL);
    return () => window.clearTimeout(id);
  }, [active, count]);

  return (
    <div className="similar-app-slider">
      {data.items.map((item, i) => (
        <div
          key={i}
          className={`similar-slide${i === active ? " is-active" : ""}`}
          aria-hidden={i === active ? undefined : true}
        >
          <div
            className={`${data.mainClass ?? "padding-00-60 bg-white"} similar-app-option3-main`}
          >
            <div className="bg-light">
              <div className="container-fluid p-0">
                <div className="row m-0">
                  <div
                    className={`col-lg-6 d-none d-lg-block p-0 img-col ${item.backgroundClass}`}
                  />
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0 content-col">
                    <div className="content-box">
                      <div className="content-logo-section d-flex align-items-center">
                        <div className="content-logo">
                          <img
                            className="box-shadow"
                            src={item.logo.src}
                            alt={item.logo.alt}
                          />
                        </div>
                        <div className="content-logo-name">
                          <span className="mainname">{item.name}</span>
                          <span className="subname">{item.subtitle}</span>
                        </div>
                      </div>
                      <div className="content-description">
                        {item.paragraphs.map((p, j) => (
                          <Fragment key={j}>
                            <p dangerouslySetInnerHTML={{ __html: p.html }} />
                          </Fragment>
                        ))}
                        <ul>
                          {item.features.map((f, j) => (
                            <li key={j}>
                              <img src={data.checkIcon.src} alt={data.checkIcon.alt} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 fixed-col p-0">
                    <div className="fixedimage">
                      <img
                        className="img1 d-none d-lg-block"
                        src={item.images.first.src}
                        alt={item.images.first.alt}
                      />
                      <img
                        className="img2 d-none d-lg-block"
                        src={item.images.second.src}
                        alt={item.images.second.alt}
                      />
                      <img
                        className="d-lg-none"
                        src={item.images.mobile.src}
                        alt={item.images.mobile.alt}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-60 d-none d-lg-block" />
          </div>
        </div>
      ))}

      {count > 1 && (
        <ul className="slick-dots" role="tablist">
          {data.items.map((item, i) => (
            <li key={i} className={i === active ? "slick-active" : undefined} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show ${item.name}`}
                onClick={() => setActive(i)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
