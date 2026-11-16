import type { ClutchReviewsContent } from '@/types';
import { SectionTitle } from './shared/SectionTitle';

/** Clutch.co reviews widget under an intro. The widget script is added on demand by public/scripts/client-review-page.js. */
export function ClutchReviews({ data }: { data: ClutchReviewsContent }) {
  const w = data.widget;
  return (
    <section className="padding-6030 clutch-review-section bg-white">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.paragraph ? [data.paragraph] : []} />
        {' '}
        <div id="clients_review">
          <div
            className="clutch-widget"
            data-url={w.url}
            data-widget-type={w.widgetType}
            data-expandifr={String(w.expandIframe)}
            data-height={w.height}
            data-snippets={String(w.snippets)}
            data-clutchcompany-id={w.companyId}
          />
        </div>
      </div>
    </section>
  );
}
