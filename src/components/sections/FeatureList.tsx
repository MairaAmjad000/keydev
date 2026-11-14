import type { FeatureListContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';
import { SectionTitle } from './shared/SectionTitle';

/** Icon bullet list with a call-to-action, beside a picture. */
export function FeatureList({ data }: { data: FeatureListContent }) {
  return (
    <section className="padding-60 web-why-go bg-white">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4 m-lg-0">
            <div className="web-why-go-content">
              <h3>{data.subheading}</h3>
              {' '}
              <ul>
                {data.items.map((item, i) => (
                  <li key={i}>
                    <div className="web-why-go-icon">
                      <Icon name={item.icon} />
                    </div>
                    {' '}
                    <p dangerouslySetInnerHTML={{ __html: item.html }} />
                  </li>
                ))}
              </ul>
              {' '}
              <a className="btn btn-custome waves-effect waves-light" {...link(data.link.href)}>
                {data.link.text}
              </a>
            </div>
          </div>
          {' '}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
            <img src={data.image.src} alt={data.image.alt} width={data.image.width} height={data.image.height} />
          </div>
        </div>
      </div>
    </section>
  );
}
