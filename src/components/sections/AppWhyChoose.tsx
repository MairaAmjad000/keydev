import { Fragment } from 'react';
import type { AppWhyChooseContent } from '@/types';
import { CalloutBar } from './shared/CalloutBar';
import { IconSlot } from './shared/IconSlot';
import { SectionTitle } from './shared/SectionTitle';

/** "Why choose our expert developers": a grid of icon tiles (four per row on desktop), optionally under a callout bar. */
export function AppWhyChoose({ data }: { data: AppWhyChooseContent }) {
  return (
    <section className={data.sectionClass ?? 'padding-60 bg-white'}>
      {data.callout && (
        <>
          <CalloutBar data={data.callout} />
          {' '}
        </>
      )}
      <div className={data.callout ? 'container mt-5' : 'container'}>
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className={data.rowClass ?? 'row'}>
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="app-why-box">
                  <IconSlot icon={item.icon} className="app-why-box-icon" />
                  {' '}
                  <h4>{item.title}</h4>
                  {' '}
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
