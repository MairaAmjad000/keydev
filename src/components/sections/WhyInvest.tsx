import { Fragment } from 'react';
import type { WhyInvestContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** "Why choose us": three-column grid of icon cards under an intro. */
export function WhyInvest({ data }: { data: WhyInvestContent }) {
  return (
    <section className="padding-6030 bg-white why-you-invest-main invest-erp-main">
      <div className="container mt-md-5">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="m-height-130">
          <div className="row justify-content-center">
            {data.items.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-30">
                  <div className="why-you-invest-box rounded10">
                    <div className="why-you-invest-icon box-shadow">
                      <Icon name={item.icon} />
                    </div>
                    {' '}
                    <h5>{item.title}</h5>
                    {' '}
                    <p>{item.text}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
