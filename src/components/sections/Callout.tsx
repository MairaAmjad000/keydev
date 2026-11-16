import type { CalloutContent } from '@/types';
import { link } from '@/lib/utils/markup';

export function Callout({ data }: { data: CalloutContent }) {
  const bar = (
    <div className={`callouts-separate callouts d-flex align-items-center justify-content-between${data.barClass ? ` ${data.barClass}` : ''}`}>
      <span dangerouslySetInnerHTML={{ __html: data.text }} />
      {' '}
      <a className="btn-custome btn waves-effect waves-light" {...link(data.link.href)}>
        {data.link.text}
      </a>
    </div>
  );
  return data.wrapperClass ? <section className={data.wrapperClass}>{bar}</section> : bar;
}
