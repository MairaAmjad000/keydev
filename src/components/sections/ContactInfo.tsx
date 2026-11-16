import { Fragment } from 'react';
import type { ContactInfoContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';

/** Three contact boxes (Skype, phone / WhatsApp, email) and a "Follow us on" social bar. */
export function ContactInfo({ data }: { data: ContactInfoContent }) {
  return (
    <section className="padding-60 contact-info-main bg-light">
      <div className="container">
        <div className="row">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-md-4 col-12 mb-30">
                <div className="contact-info-box text-center rounded10 box-shadow">
                  <div className="contact-info-icon box-shadow">
                    <Icon name={item.icon} />
                  </div>
                  {' '}
                  <div className="tool">{item.tool}</div>
                  {' '}
                  <div className="name">
                    <a title={item.link.title} {...link(item.link.href)}>
                      {item.link.text}
                    </a>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        {' '}
        <div className="contact-follow-us-section text-center">
          <h2>{data.follow.heading}</h2>
          {' '}
          <ul className="header_social box-shadow rounded10 bg-white">
            {data.follow.items.map((s, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <li>
                  <a href={s.href} target="_blank" rel="noreferrer" className={s.iconClass}>
                    <span>{s.label}</span>
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
