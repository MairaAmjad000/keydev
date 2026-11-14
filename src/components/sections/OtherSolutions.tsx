import { Fragment } from 'react';
import type { OtherSolutionsContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';
import { SectionTitle } from './shared/SectionTitle';

/** Row of linked icon tiles pointing to related solutions. */
export function OtherSolutions({ data }: { data: OtherSolutionsContent }) {
  return (
    <section className="padding-6030 bg-light other-demand-app-main">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-30">
                <div className="other-demand-app-box text-center box-shadow rounded10">
                  <a {...link(item.href)}>
                    <div className="other-demand-app-icon">
                      <Icon name={item.icon} />
                    </div>
                    {' '}
                    <h5>{item.title}</h5>
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
