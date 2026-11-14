import { Fragment } from 'react';
import type { PortfolioContent } from '@/types';
import { link } from '@/lib/utils/markup';

export function Portfolio({ data }: { data: PortfolioContent }) {
  return (
    <div>
      <section className={data.callout ? 'padding-60 bg-white p-relative' : 'padding-60 bg-white o-hidden'}>
        {data.callout && (
          <>
            <div className="callouts-separate callouts-separate-2 callouts d-flex align-items-center justify-content-between">
              <span dangerouslySetInnerHTML={{ __html: data.callout.text }} />
              {' '}
              <a className="btn-custome btn waves-effect waves-light" {...link(data.callout.link.href)}>
                {data.callout.link.text}
              </a>
            </div>
            {' '}
          </>
        )}
        <div className="container">
          <div className={data.callout ? 'title mt-5' : 'title'}>
            <span>
              {data.text}
            </span>
            {' '}
            <h2>
              {data.heading}
            </h2>
            {data.text2 && (
              <>
                {' '}
                <p>
                  {data.text2}
                </p>
              </>
            )}
          </div>
        </div>
        {' '}
        <div className="portfolio-slider px-4">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="item">
                <figure className="portfolio-figure">
                  <div className="portfolio-title">
                    <h3>
                      {item.heading}
                    </h3>
                    {' '}
                    <p>
                      {item.text}
                    </p>
                  </div>
                  {' '}
                  <img
                    className="img-fluid lazy"
                    data-src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                  />
                  {' '}
                  <figcaption className="portfolio-figure-caption">
                    <h3>
                      {item.heading2}
                    </h3>
                    {' '}
                    <p>
                      {item.text2}
                    </p>
                    {' '}
                    <a className="waves-effect waves-light" {...link(item.link.href)}>
                      {item.link.text}
                    </a>
                  </figcaption>
                </figure>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
