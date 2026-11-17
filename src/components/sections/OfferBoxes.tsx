import { Fragment } from 'react';
import type { OfferBoxesContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Intro + grid of plain icon cards (no links): round icon, title, text. */
export function OfferBoxes({ data }: { data: OfferBoxesContent }) {
  return (
    <section className={data.sectionClass ?? 'padding-6030 bg-light game-service-offer-main'}>
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="game-service-offer-box rounded10">
                  <div className="game-service-offer-icon">
                    <Icon name={item.icon} />
                  </div>
                  {' '}
                  <h3>{item.title}</h3>
                  {' '}
                  <p>{item.text}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
