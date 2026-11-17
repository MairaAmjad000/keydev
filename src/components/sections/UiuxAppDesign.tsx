import { Fragment } from 'react';
import type { UiuxMobileDesignContent, UiuxWebDesignContent } from '@/types';
import { Icon } from '@/components/icons';

type Item = { icon: string; title: string; text: string };

function Title({ text, heading, text2 }: { text: string; heading: string; text2: string }) {
  return (
    <div className="title">
      <span>{text}</span>
      {' '}
      <h2>{heading}</h2>
      {' '}
      <p>{text2}</p>
    </div>
  );
}

function Rows({ items }: { items: Item[] }) {
  return (
    <div className="row">
      <div className="col-lg-1 col-12" />
      {items.map((item, i) => (
        <Fragment key={i}>
          {' '}
          <div className="col-lg-5 col-md-6 col-12 mb-30">
            <div className="uiux-app-design-box d-flex">
              <div className="uiux-app-design-icon box-shadow">
                <Icon name={item.icon} />
              </div>
              {' '}
              <div className="uiux-app-design-content">
                <h4>{item.title}</h4>
                {' '}
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

/** "Mobile App Design": two icon rows and a phone mock-up with five floating screens (parallax). */
export function UiuxMobileDesign({ data }: { data: UiuxMobileDesignContent }) {
  const layers = [
    { key: 'one', cls: 'paroller one wow uiux-mobile-app-one', factor: '0.3' },
    { key: 'two', cls: 'paroller two wow uiux-mobile-app-two', factor: '0.2' },
    { key: 'three', cls: 'three wow uiux-mobile-app-three' },
    { key: 'four', cls: 'paroller four wow uiux-mobile-app-four', factor: '-0.2' },
    { key: 'five', cls: 'paroller five wow uiux-mobile-app-five', factor: '-0.3' },
  ] as const;
  return (
    <section className="padding-60 bg-white uiux-app-design-main o-hidden">
      <div className="container">
        <Title text={data.text} heading={data.heading} text2={data.text2} />
        {' '}
        <Rows items={data.items} />
      </div>
      {' '}
      <div className="container-2">
        <div className="uiux-app-design-main-image uiux-mobile-app mt-30">
          <img className="mainimg" src={data.images.main.src} alt={data.images.main.alt} />
          {layers.map((l) => (
            <Fragment key={l.key}>
              {' '}
              <div
                className={l.cls}
                {...('factor' in l
                  ? { 'data-paroller-direction': 'horizontal', 'data-paroller-factor': l.factor, 'data-paroller-type': 'foreground' }
                  : {})}
              >
                <img src={data.images[l.key].src} alt={data.images[l.key].alt} />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "Web Application Design": two icon rows and a laptop / desktop / tablet / phone mock-up. */
export function UiuxWebDesign({ data }: { data: UiuxWebDesignContent }) {
  const layers = [
    { key: 'laptop', cls: 'laptop wow uiux-web-app-laptop', delay: '1.5s', duration: '1.2s' },
    { key: 'desktop', cls: 'desktop wow uiux-web-app-desktop', delay: '.5s', duration: '.5s' },
    { key: 'ipad', cls: 'ipad wow uiux-web-app-ipad', delay: '3.2s', duration: '1.2s' },
    { key: 'iphone', cls: 'iphone wow uiux-web-app-iphone', delay: '4.4s', duration: '1.2s' },
  ] as const;
  return (
    <section className="padding-60 bg-light uiux-app-design-main">
      <div className="container">
        <Title text={data.text} heading={data.heading} text2={data.text2} />
        {' '}
        <Rows items={data.items} />
        {' '}
        <div className="uiux-app-design-main-image uiux-web-app mt-30">
          <img className="mainimg" src={data.images.main.src} alt={data.images.main.alt} />
          {layers.map((l) => (
            <Fragment key={l.key}>
              {' '}
              <div className={l.cls} data-wow-delay={l.delay} data-wow-duration={l.duration}>
                <img className="lazy" data-src={data.images[l.key].src} alt={data.images[l.key].alt} />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
