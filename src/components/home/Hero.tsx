import { Fragment } from 'react';
import type { HeroContent } from '@/types/content';
import { link } from '@/lib/markup';

export function Hero({ data }: { data: HeroContent }) {
  return (
    <section className="banner home">
      <div className="video">
        <img src={data.image.src} alt={data.image.alt} />
      </div>
      {' '}
      <div className="tenc-intro-main__wrapper">
        <div className="container">
          <h1>
            {data.heading}
          </h1>
          {' '}
          <p>
            {data.text}
          </p>
          {' '}
          {data.links.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <a title="" className={item.className} {...link(item.href)}>
                {item.text}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
