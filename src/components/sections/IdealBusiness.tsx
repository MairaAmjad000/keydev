import { Fragment } from 'react';
import type { IdealBusinessContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Three-column grid of icon boxes (use cases / ideal businesses). */
export function IdealBusiness({ data }: { data: IdealBusinessContent }) {
  return (
    <section className="padding-60 bg-light ideal-business-main">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} />
        {' '}
        <div className="ideal-business-box-wrap row m-0">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-md-4 col-sm-6 col-12 ideal-business-box text-center">
                <div className="ideal-business-box-icon box-shadow">
                  <Icon name={item.icon} />
                </div>
                {' '}
                <h5>{item.title}</h5>
                {' '}
                <p>{item.text}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
