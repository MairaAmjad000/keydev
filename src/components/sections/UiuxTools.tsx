import { Fragment } from 'react';
import type { UiuxToolsContent } from '@/types';

/** Grid of design-tool logos. */
export function UiuxTools({ data }: { data: UiuxToolsContent }) {
  return (
    <section className="padding-6030 bg-light uiux-tools-main">
      <div className="container">
        <div className="title">
          <span>{data.text}</span>
          {' '}
          <h2>{data.heading}</h2>
        </div>
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-30">
                <div className="uiux-tools-box rounded10">
                  <img className="lazy" data-src={item.image.src} alt={item.image.alt} />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
