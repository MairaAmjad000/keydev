import { Fragment } from 'react';
import type { GameWhyUsContent } from '@/types';
import { IconSlot } from './shared/IconSlot';

/** "Why choose us" for game pages: a picture beside four icon + title + text rows. */
export function GameWhyUs({ data }: { data: GameWhyUsContent }) {
  return (
    <section className="padding-60 bg-light game-why-us-inner">
      <div className="container">
        <div className="title">
          <span>{data.text}</span>
          {' '}
          {data.headingHtml ? <h2 dangerouslySetInnerHTML={{ __html: data.headingHtml }} /> : <h2>{data.heading}</h2>}
          {' '}
          <p>{data.text2}</p>
        </div>
        {' '}
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-0 order-lg-1">
            <div className="game-why-us-inner-image text-center">
              <img
                className="lazy"
                alt={data.image.alt}
                data-src={data.image.src}
                width={data.image.width}
                height={data.image.height}
              />
            </div>
          </div>
          {' '}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-1 order-lg-0">
            <div className="game-why-us-inner-content-wrap">
              {data.items.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && ' '}
                  <div className="game-why-us-inner-box d-flex align-items-start">
                    <IconSlot icon={item.icon} className="game-why-us-inner-icon box-shadow" />
                    {' '}
                    <div className="game-why-us-inner-content">
                      <h3>{item.title}</h3>
                      {' '}
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
