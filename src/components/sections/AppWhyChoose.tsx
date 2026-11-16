import { Fragment } from 'react';
import type { AppWhyChooseContent } from '@/types';
import { SectionTitle } from './shared/SectionTitle';

/** "Why choose our expert developers": a grid of icon tiles (four per row on desktop). */
export function AppWhyChoose({ data }: { data: AppWhyChooseContent }) {
  return (
    <section className="padding-60 bg-white">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="row">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="app-why-box">
                  <div className="app-why-box-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
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
