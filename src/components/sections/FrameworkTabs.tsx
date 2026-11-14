import { Fragment } from 'react';
import type { FrameworkTabsContent } from '@/types';
import { link } from '@/lib/utils/markup';
import { SectionTitle } from './shared/SectionTitle';

/** Vertical tab list (accordion on mobile). Tab behaviour comes from the shared `.tab_wrapper` script. */
export function FrameworkTabs({ data }: { data: FrameworkTabsContent }) {
  const tabId = (i: number) => `tab_1_${i + 1}`;
  return (
    <section className="padding-60 bg-light web-app-sev-lang">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
      </div>
      {' '}
      <div className="web-app-sev-lang-collapse">
        <div className="container-fluid">
          <div className="row tab_wrapper first_tab">
            <div className="col-12 bg-light pr-0 left-col">
              <ul className="tab_list">
                {data.items.map((item, i) => (
                  <li key={i} className={i === 0 ? 'active' : undefined} {...{ rel: tabId(i) }}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            {' '}
            <div className="col-12 right-col d-flex align-items-center">
              <div className="content_wrapper">
                {data.items.map((item, i) => (
                  <Fragment key={i}>
                    <div className={`accordian_header ${tabId(i)}`}>{item.title}</div>
                    {' '}
                    <div className={`tab_content first ${tabId(i)}`} style={{ display: 'none' }}>
                      <img src={item.image.src} alt={item.image.alt} />
                      {' '}
                      <p dangerouslySetInnerHTML={{ __html: item.text }} />
                      {' '}
                      <a className="btn btn-custome waves-effect waves-light" {...link(item.link.href)}>
                        {item.link.text}
                      </a>
                    </div>
                    {' '}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
