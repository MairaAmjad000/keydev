import { Fragment } from 'react';
import type { ModuleBoxesContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Intro + grid of module cards: icon, small heading and text. */
export function ModuleBoxes({ data }: { data: ModuleBoxesContent }) {
  return (
    <section className={data.sectionClass ?? 'padding-6030 bg-white game-what-we-offer-main'}>
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className={data.columnClass ?? 'col-lg-4 col-md-6 col-sm-12 col-12 mb-30'}>
                <div className="game-what-we-offer-box rounded10">
                  <div className="game-what-we-offer-icon">
                    <Icon name={item.icon} />
                  </div>
                  {' '}
                  <h4>{item.title}</h4>
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
