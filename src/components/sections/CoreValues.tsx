import { Fragment } from 'react';
import type { CoreValuesContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Four value cards (icon, title, text) under an intro. */
export function CoreValues({ data }: { data: CoreValuesContent }) {
  return (
    <section className={data.sectionClass ?? 'padding-6030 our-core-value-section bg-white'}>
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.paragraph ? [data.paragraph] : []} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className={data.columnClass ?? 'col-lg-3 col-md-6 col-sm-6 col-12 mb-30'}>
                <div className="our-core-value-box rounded10">
                  <div className="our-core-value-icon rounded10">
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
