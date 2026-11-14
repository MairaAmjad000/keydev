import type { FaqContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Plus / minus rows; one answer open at a time (script: public/scripts/solution-page.js). */
function FaqList({ data }: { data: FaqContent }) {
  const prefix = data.idPrefix ?? 'faq';
  return (
    <section className="padding-60 bg-white faq-main">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 col-12">
            <div className="faq-list-wrap option2">
              {data.items.map((item, i) => (
                <div key={i} className="faq-list-item">
                  <div className="faq-list-title">
                    <a href={`#${prefix}-option1-${i + 1}`}>
                      {item.question}
                      {' '}
                      <span className="plus">{data.plusIcon && <Icon name={data.plusIcon} />}</span>
                      {' '}
                      <span className="minus">{data.minusIcon && <Icon name={data.minusIcon} />}</span>
                    </a>
                  </div>
                  {' '}
                  <div
                    className="faq-list-content"
                    id={`${prefix}-option1-${i + 1}`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bootstrap accordion; the first question starts open. */
export function Faq({ data }: { data: FaqContent }) {
  if (data.variant === 'list') return <FaqList data={data} />;
  return (
    <section className="padding-60 bg-light faq-section">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="faq-acc">
              {data.items.map((item, i) => (
                <div key={i} className="card faq-card">
                  <div className="card-header" id={`faq-h${i}`}>
                    <button
                      className={i === 0 ? 'btn btn-link' : 'btn btn-link collapsed'}
                      type="button"
                      data-toggle="collapse"
                      data-target={`#faq-c${i}`}
                      aria-expanded={i === 0}
                      aria-controls={`faq-c${i}`}
                    >
                      {item.question}
                    </button>
                  </div>
                  <div
                    id={`faq-c${i}`}
                    className={i === 0 ? 'collapse show' : 'collapse'}
                    aria-labelledby={`faq-h${i}`}
                    data-parent="#faq-acc"
                  >
                    <div className="card-body" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
