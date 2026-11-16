import { Fragment } from 'react';
import type { AppPlatformsContent } from '@/types';
import { IconSlot } from './shared/IconSlot';
import { SectionTitle } from './shared/SectionTitle';

/** "Transcends Smartphone Limitations": a row of platform icons (phone, tablet, VR, AR). */
export function AppPlatforms({ data }: { data: AppPlatformsContent }) {
  return (
    <section className="padding-60 bg-light">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="row align-items-center justify-content-between">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-6 col-sm-6 col-md-3">
                <div className="app_service_box">
                  <IconSlot icon={item.icon} className="app-svg-icon" />
                  {' '}
                  <span>{item.label}</span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
