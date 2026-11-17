import { Fragment } from 'react';
import type { TechIconsContent } from '@/types';

/** Heading + one row of technology logos (a single, always-visible tab pane). */
export function TechIcons({ data }: { data: TechIconsContent }) {
  return (
    <section className={data.sectionClass}>
      <div className="container">
        <div className="title">
          <span>{data.text}</span>
          {' '}
          <h2>{data.heading}</h2>
          {data.text2 && (
            <>
              {' '}
              <p>{data.text2}</p>
            </>
          )}
        </div>
        {' '}
        <div className="technologies_tabs">
          <div className="tab-content">
            <div className="tab-pane fade show active" id={data.paneId} role="tabpanel">
              <ul className={`technologies_icons d-flex align-items-center ${data.listClass ?? 'justify-content-center'}`}>
                {data.icons.map((icon, i) => (
                  <Fragment key={i}>
                    {i > 0 && ' '}
                    <li>
                      <img className="lazy" data-src={icon.image.src} alt={icon.image.alt} />
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
