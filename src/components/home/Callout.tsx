import type { CalloutContent } from '@/types/content';
import { link } from '@/lib/markup';

export function Callout({ data }: { data: CalloutContent }) {
  return (
    <div className="callouts-separate callouts d-flex align-items-center justify-content-between">
      <span dangerouslySetInnerHTML={{ __html: data.text }} />
      {' '}
      <a className="btn-custome btn waves-effect waves-light" {...link(data.link.href)}>
        {data.link.text}
      </a>
    </div>
  );
}
