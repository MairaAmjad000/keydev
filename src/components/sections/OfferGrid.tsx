import { Fragment } from 'react';
import type { OfferGridContent } from '@/types';
import { link } from '@/lib/utils/markup';
import { IconSlot } from './shared/IconSlot';
import { SectionTitle } from './shared/SectionTitle';

/** "Our services" cards: round icon on the top edge, linked title, text and an "Explore More" button. */
export function OfferGrid({ data }: { data: OfferGridContent }) {
  return (
    <section className={data.sectionClass ?? 'padding-60 bg-light game-service-offer-main'}>
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="row justify-content-between m-height-450">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <div className="game-service-offer-box rounded10 mhbox">
                  <IconSlot icon={item.icon} className="game-service-offer-icon box-shadow" />
                  {' '}
                  <h3>
                    <a {...link(item.link.href)}>{item.title}</a>
                  </h3>
                  {' '}
                  <p>{item.text}</p>
                  {' '}
                  <a className="btn-custome btn waves-effect waves-light" {...link(item.link.href)}>
                    {item.link.text}
                  </a>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
