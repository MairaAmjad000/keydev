import type { FeaturedInContent } from '@/types';
import { SectionTitle } from './shared/SectionTitle';
import { CalloutBar } from './shared/CalloutBar';

/**
 * "Featured in" logos. `strip` (default): one row of logos on white. `grid`: boxed logos, four per row, on a
 * light section, with an optional callout bar pinned to its top edge.
 */
export function FeaturedIn({ data }: { data: FeaturedInContent }) {
  const paragraphs = data.text2 ? [data.text2] : [];
  if (data.variant === 'grid') {
    return (
      <>
        {data.spacer && <div className="padding-60-00 bg-white d-none d-md-block" />}
        {' '}
        <section className="padding-6030 featured-in-section bg-light p-relative">
          {data.callout && (
            <>
              <CalloutBar data={data.callout} />
              {' '}
            </>
          )}
          <div className="container mt-50 mt-b-0">
            <SectionTitle text={data.text} heading={data.heading} paragraphs={paragraphs} />
            {' '}
            <div className="row justify-content-center">
              {data.logos.map((logo, i) => (
                <div key={i} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="featured-in-image-box d-flex justify-content-center align-items-center rounded10 mb-30">
                    <img src={logo.image.src} alt={logo.image.alt} width={logo.image.width} height={logo.image.height} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <section className="padding-60 bg-white">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={paragraphs} />
        {' '}
        <ul className="client-logo d-flex align-items-center justify-content-between">
          {data.logos.map((logo, i) => (
            <li key={i}>
              <img
                className="lazy"
                data-src={logo.image.src}
                alt={logo.image.alt}
                width={logo.image.width}
                height={logo.image.height}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
