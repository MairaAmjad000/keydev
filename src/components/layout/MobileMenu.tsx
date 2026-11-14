import { Fragment } from 'react';
import type { MobileMenuContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';

export function MobileMenu({ data }: { data: MobileMenuContent }) {
  return (
    <div className="mobile_menu">
      <a className="cd-nav-trigger" aria-label={data.cdNavTrigger.ariaLabel} {...link(data.cdNavTrigger.href)}>
        <span />
      </a>
      {' '}
      <nav className="cd-nav">
        <ul id="cd-primary-nav" className="cd-primary-nav is-fixed">
          <li>
            <a dangerouslySetInnerHTML={{ __html: data.link.html }} {...link(data.link.href)} />
          </li>
          {' '}
          <li className="has-children">
            <a dangerouslySetInnerHTML={{ __html: data.link2.html }} {...link(data.link2.href)} />
            {' '}
            <ul className="cd-secondary-nav is-hidden">
              {data.goBacks.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && ' '}
                  <li className={item.className}>
                    <a className={item.link.className} {...link(item.link.href)}>
                      {item.link.text}
                    </a>
                  </li>
                </Fragment>
              ))}
            </ul>
          </li>
          {' '}
          <li className="has-children">
            <a dangerouslySetInnerHTML={{ __html: data.link3.html }} {...link(data.link3.href)} />
            {' '}
            <ul className="cd-secondary-nav is-hidden">
              <li className="go-back">
                <a {...link(data.link4.href)}>
                  {data.link4.text}
                </a>
              </li>
              {' '}
              <li className="has-children">
                <a {...link(data.link5.href)}>
                  {data.link5.text}
                </a>
                {' '}
                <ul className="is-hidden">
                  {data.goBacks2.map((item, i) => (
                    <Fragment key={i}>
                      {i > 0 && ' '}
                      <li className={item.className}>
                        <a className={item.link.className} {...link(item.link.href)}>
                          {item.link.text}
                        </a>
                      </li>
                    </Fragment>
                  ))}
                </ul>
              </li>
              {' '}
              <li className="has-children">
                <a {...link(data.link6.href)}>
                  {data.link6.text}
                </a>
                {' '}
                <ul className="is-hidden">
                  {data.goBacks3.map((item, i) => (
                    <Fragment key={i}>
                      {i > 0 && ' '}
                      <li className={item.className}>
                        <a className={item.link.className} {...link(item.link.href)}>
                          {item.link.text}
                        </a>
                      </li>
                    </Fragment>
                  ))}
                  {' '}
                  <li>
                    <a className="" {...link(data.link7.href)}>
                      {data.link7.text}
                    </a>
                  </li>
                </ul>
              </li>
              {' '}
              <li className="has-children">
                <a {...link(data.link8.href)}>
                  {data.link8.text}
                </a>
                {' '}
                <ul className="is-hidden">
                  {data.goBacks4.map((item, i) => (
                    <Fragment key={i}>
                      {i > 0 && ' '}
                      <li className={item.className}>
                        <a className={item.link.className} {...link(item.link.href)}>
                          {item.link.text}
                        </a>
                      </li>
                    </Fragment>
                  ))}
                </ul>
              </li>
              {' '}
              <li className="has-children">
                <a {...link(data.link9.href)}>
                  {data.link9.text}
                </a>
                {' '}
                <ul className="is-hidden">
                  {data.goBacks5.map((item, i) => (
                    <Fragment key={i}>
                      {i > 0 && ' '}
                      <li className={item.className}>
                        <a className={item.link.className} {...link(item.link.href)}>
                          {item.link.text}
                        </a>
                      </li>
                    </Fragment>
                  ))}
                  {' '}
                  <li>
                    <a className="" {...link(data.link10.href)}>
                      {data.link10.text}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {' '}
          <li className="has-children">
            <a {...link(data.link11.href)}>
              {' '}
              <div className="icon">
                <Icon name="svg-606d53" />
              </div>
              {data.link11.text}
              {' '}
            </a>
            {' '}
            <ul className="cd-secondary-nav is-hidden">
              <li className="go-back">
                <a {...link(data.link12.href)}>
                  {data.link12.text}
                </a>
              </li>
              {' '}
              {data.hasChildrens.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && ' '}
                  <li className="has-children">
                    <a {...link(item.link.href)}>
                      {item.link.text}
                    </a>
                    {' '}
                    <ul className="is-hidden">
                      {item.goBacks.map((item2, i2) => (
                        <Fragment key={i2}>
                          {i2 > 0 && ' '}
                          <li className={item2.className}>
                            <a className={item2.link.className} {...link(item2.link.href)}>
                              {item2.link.text}
                            </a>
                          </li>
                        </Fragment>
                      ))}
                    </ul>
                  </li>
                </Fragment>
              ))}
            </ul>
          </li>
          {' '}
          <li>
            <a className="" dangerouslySetInnerHTML={{ __html: data.link13.html }} {...link(data.link13.href)} />
          </li>
          {' '}
          <li>
            <a className="" dangerouslySetInnerHTML={{ __html: data.link14.html }} {...link(data.link14.href)} />
          </li>
          {' '}
          <li>
            <a className="" dangerouslySetInnerHTML={{ __html: data.link15.html }} {...link(data.link15.href)} />
          </li>
          {' '}
          <li>
            <a className="estimate_btn" {...link(data.estimateBtn.href)}>
              {data.estimateBtn.text}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
