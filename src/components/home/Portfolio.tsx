import { Fragment } from 'react';
import type { PortfolioContent } from '@/types/content';
import { link } from '@/lib/markup';

export function Portfolio({ data }: { data: PortfolioContent }) {
  return (
    <div>
      <section className="padding-60 bg-white o-hidden">
        <div className="container">
          <div className="title">
            <span>
              {data.text}
            </span>
            {' '}
            <h2>
              {data.heading}
            </h2>
            {' '}
            <p>
              {data.text2}
            </p>
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
