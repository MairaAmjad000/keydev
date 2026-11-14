import type { FeaturedInContent } from '@/types';
import { SectionTitle } from './shared/SectionTitle';

/** "Featured in" strip of press / platform logos. */
export function FeaturedIn({ data }: { data: FeaturedInContent }) {
  return (
    <section className="padding-60 bg-white">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
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
