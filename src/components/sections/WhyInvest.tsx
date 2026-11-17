import { Fragment } from 'react';
import type { WhyInvestContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';
import { SectionTitle } from './shared/SectionTitle';

/** "Why choose us": three-column grid of icon cards under an intro. */
export function WhyInvest({ data }: { data: WhyInvestContent }) {
  return (
    <section className={data.sectionClass ?? 'padding-6030 bg-white why-you-invest-main invest-erp-main'}>
      <div className={data.containerClass ?? 'container mt-md-5'}>
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="m-height-130">
          <div className="row justify-content-center">
            {data.items.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div className={data.columnClass ?? 'col-lg-4 col-md-6 col-sm-6 col-12 mb-30'}>
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
            {data.ctaBox && (
              <>
                {' '}
                <div className={data.ctaBox.columnClass ?? `${data.columnClass ?? 'col-lg-4 col-md-6 col-sm-6 col-12 mb-30'} d-flex align-items-center`}>
                  <div className="why-you-invest-box-text">
                    <h5 className="mb-20">{data.ctaBox.title}</h5>
                    {' '}
                    <a className="btn-custome btn waves-effect waves-light" {...link(data.ctaBox.link.href)}>
                      {data.ctaBox.link.text}
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
