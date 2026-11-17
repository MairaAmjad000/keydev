import { Fragment } from 'react';
import type { UiuxProcessContent } from '@/types';

/** Zig-zag list of numbered design steps, each with a picture. */
export function UiuxProcess({ data }: { data: UiuxProcessContent }) {
  return (
    <section className="padding-60 bg-white uiux-design-process-main">
      <div className="container">
        <div className="title">
          <span>{data.text}</span>
          {' '}
          <h2>{data.heading}</h2>
        </div>
        {' '}
        <div className="uiux-design-process-list">
          {data.items.map((item, i) => {
            const flip = i % 2 === 1;
            const text = (
              <div
                className={`col-lg-5 col-md-12 col-sm-12 col-12${flip ? ' order-1 order-lg-2' : ''} wow fadeIn`}
                data-wow-delay=".5s"
                data-wow-duration=".5s"
              >
                <div className="uiux-design-process-content">
                  <span className="number">{item.number}</span>
                  {' '}
                  <h5>{item.title}</h5>
                  {' '}
                  <p>{item.text}</p>
                </div>
              </div>
            );
            const picture = (
              <div
                className={`col-lg-5 col-md-12 col-sm-12 col-12${flip ? ' order-2 order-lg-1' : ''} wow fadeIn`}
                data-wow-delay={item.imageDelay ?? '.5s'}
                data-wow-duration=".5s"
              >
                <div className={`uiux-design-process-content-image ${flip ? 'right-image' : 'left-image'}`}>
                  <img className="lazy rounded10 box-shadow" data-src={item.image.src} alt={item.image.alt} />
                </div>
              </div>
            );
            return (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div className="row align-items-center justify-content-between">
                  {text}
                  {' '}
                  {picture}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
