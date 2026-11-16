import { Fragment } from 'react';
import type { MissionVisionContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Two side-by-side cards (mission, vision) under an intro. */
export function MissionVision({ data }: { data: MissionVisionContent }) {
  return (
    <section className="padding-6030 mission-n-vision-section bg-light">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.paragraph ? [data.paragraph] : []} />
        {' '}
        <div className="row">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
                <div className="mission-n-vision-box rounded10">
                  <div className="mission-n-vision-icon">
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
