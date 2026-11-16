import { Fragment } from 'react';
import type { IntroSliderContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';

/**
 * Intro with a slider: pictures in a card with round icon tabs underneath (left), heading, text and button (right).
 * The two sliders are started by public/scripts/category-page.js.
 */
export function IntroSlider({ data }: { data: IntroSliderContent }) {
  return (
    <section className={data.sectionClass ?? 'about service-main-content'}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-sm-12 mb-4 mb-lg-0">
            <div className="about-slider">
              <div className="about-img-slider">
                {data.images.map((image, i) => (
                  <div key={i}>
                    <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={i === 0 ? undefined : 'lazy'} />
                  </div>
                ))}
              </div>
              {' '}
              <div className="about-icon-slider">
                {data.icons.map((icon, i) => (
                  <div className="item" key={i}>
                    <a {...link('javascript:;')}>
                      <Icon name={icon} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {' '}
          <div className="col-12 col-lg-7 col-sm-12">
            <h2 className="mb-3">{data.heading}</h2>
            {data.paragraphs.map((p, i) => (
              <Fragment key={i}>
                {' '}
                <p dangerouslySetInnerHTML={{ __html: p.html }} />
              </Fragment>
            ))}
            {' '}
            <a className={data.link.className ?? 'btn-custome btn waves-effect waves-light'} {...link(data.link.href)}>
              {data.link.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
