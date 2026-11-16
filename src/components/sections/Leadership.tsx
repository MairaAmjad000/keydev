import { Fragment } from 'react';
import type { LeadershipContent } from '@/types';
import { SectionTitle } from './shared/SectionTitle';

/** Leadership profiles: portrait with social links beside a short bio; sides are set per person. */
export function Leadership({ data }: { data: LeadershipContent }) {
  return (
    <section className="padding-60 about-leadership-section bg-white">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.paragraph ? [data.paragraph] : []} />
        {data.people.map((person, i) => (
          <Fragment key={i}>
            {' '}
            <div className={`row align-items-center${person.rowClass ? ` ${person.rowClass}` : ''}`}>
              <div className={person.imageColClass}>
                <div className="about-leadership-image text-center">
                  <img src={person.image.src} alt={person.image.alt} loading="lazy" />
                  {person.social.length > 0 && (
                    <div className="socialUser">
                      {person.social.map((s, j) => (
                        <Fragment key={j}>
                          {j > 0 && ' '}
                          <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.iconClass.split(' ').pop()}>
                            <i className={s.iconClass} />
                          </a>
                        </Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {' '}
              <div className={person.contentColClass}>
                <div className="about-leadership-content-wrap">
                  <div className="about-leadership-content">
                    <div className="about-leadership-title">{person.title}</div>
                    {person.paragraphs.map((p, k) => (
                      <Fragment key={k}>
                        {' '}
                        <p dangerouslySetInnerHTML={{ __html: p }} />
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
