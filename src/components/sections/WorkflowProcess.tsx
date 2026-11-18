import { Fragment } from 'react';
import type { WorkflowProcessContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';
import { SectionTitle } from './shared/SectionTitle';

/** "How it works": callout bar, then a snake of numbered step boxes joined by arrows. */
export function WorkflowProcess({ data }: { data: WorkflowProcessContent }) {
  return (
    <section className={data.sectionClass}>
      <div className={`callouts-separate ${data.barClass} callouts d-flex align-items-center justify-content-between`}>
        <span dangerouslySetInnerHTML={{ __html: data.bar.text }} />
        {' '}
        <a className="btn-custome btn waves-effect waves-light" {...link(data.bar.link.href)}>
          {data.bar.link.text}
        </a>
      </div>
      {' '}
      <div className={data.containerClass}>
        <SectionTitle text={data.text} heading={data.heading} />
        {' '}
        <div className="car-wash-process-box-wrap">
          <div className="row justify-content-center">
            {data.items.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div className={item.columnClass} data-wow-delay={item.delay} data-wow-duration={item.duration}>
                  <div className="car-wash-process-box bg-white rounded10 text-center">
                    <div className="car-wash-process-box-desc">
                      <p>{item.text}</p>
                    </div>
                    {' '}
                    <div className="car-wash-process-icon-bar">
                      <div className="car-wash-process-icon-box">
                        <Icon name={item.icon} />
                      </div>
                    </div>
                    {' '}
                    <div className={item.arrowClass}>
                      {!item.noArrowImage && data.arrowImage && <img src={data.arrowImage.src} alt={data.arrowImage.alt} />}
                    </div>
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
