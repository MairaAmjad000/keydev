import type { ContactCtaContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';

export function ContactCta({ data }: { data: ContactCtaContent }) {
  return (
    <section className={`padding-60 ${data.background ?? 'bg-light'}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-xl-4 order-lg-1">
            <div className="call_shedule_img">
              <img className="lazy" data-src={data.image.src} alt={data.image.alt} />
            </div>
          </div>
          {' '}
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="call_shedule_text">
              <h4>
                {data.subheading}
              </h4>
              {' '}
              <p>
                {data.text}
              </p>
              {' '}
              <ul>
                <li>
                  <a
                    className="btn-custome btn waves-effect waves-light head-requet-btn"
                    {...link(data.headRequetBtn.href)}
                  >
                    {data.headRequetBtn.text}
                  </a>
                </li>
                {' '}
                <li>
                  <span className="orange-text">
                    {data.orangeText}
                  </span>
                </li>
                {' '}
                <li>
                  {data.item}
                  {' '}
                  <span className="call-icon-bg ml-3 ">
                    {' '}
                    <a title={data.link.title} aria-label={data.link.ariaLabel} {...link(data.link.href)}>
                      {' '}
                      <Icon name="svg-4cc0a8" />
                      {' '}
                    </a>
                    {' '}
                  </span>
                  {' '}
                  <a title={data.link2.title} {...link(data.link2.href)}>
                    {' '}
                  </a>
                </li>
                <a title={data.link3.title} {...link(data.link3.href)}>
                  {' '}
                </a>
              </ul>
              <a title={data.link4.title} {...link(data.link4.href)}>
                {' '}
              </a>
            </div>
            <a title={data.link5.title} {...link(data.link5.href)}>
              {' '}
            </a>
          </div>
          <a title={data.link6.title} {...link(data.link6.href)}>
            {' '}
          </a>
        </div>
        <a title={data.link7.title} {...link(data.link7.href)}>
          {' '}
        </a>
      </div>
      <a title={data.link8.title} {...link(data.link8.href)}>
        {' '}
      </a>
    </section>
  );
}
