import { Fragment } from 'react';
import type { HireStickyBarContent } from '@/types';
import { link } from '@/lib/utils/markup';

export function HireStickyBar({ data }: { data: HireStickyBarContent }) {
  return (
    <div className="hire-team-sticky-section" style={{ display: "none" }}>
      <div className="hire-team-sticky-container">
        <div className="hire-team-sticky-icon">
          <img
            className="lazy"
            data-src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
          />
        </div>
        {' '}
        <div className="hire-team-sticky-content">
          {data.ttl1s.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className={item.className}>
                {item.text}
              </div>
            </Fragment>
          ))}
        </div>
        {' '}
        <div className="hire-team-sticky-btn">
          <div className="hire-team-sticky-btn-wrap">
            <a className="btn btn-sm" id="find_partner" {...link(data.link.href)}>
              {data.link.text}
            </a>
            {' '}
            <a
              className="close"
              id="find_partner_close"
              aria-label={data.close.ariaLabel}
              {...link(data.close.href)}
            >
              <i className="fas fa-times" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
