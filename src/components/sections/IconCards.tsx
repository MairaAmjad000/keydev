import { Fragment } from 'react';
import type { IconCardsContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Intro + grid of equal-height cards: icon in a circle, title and text (service pages). */
export function IconCards({ data }: { data: IconCardsContent }) {
  const background = data.background === 'white' ? '' : ' bg-light';
  return (
    <section className={`padding-6030 service-we-offer-web-inner ${data.heightClass ?? 'm-height-380'}${background}`}>
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className={data.columnClass ?? 'col-lg-3 col-md-4 col-sm-6 col-12 mb-30'}>
                <div className="web-why-choose-main-box mhbox rounded10 text-center">
                  <div className="web-why-choose-main-icon">
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
