import type { CalloutBarContent } from '@/types';
import { link } from '@/lib/utils/markup';

/** "Do you have a VISION? We have a TEAM to get you there." bar; by default it is pinned to the top of its section. */
export function CalloutBar({ data }: { data: CalloutBarContent }) {
  return (
    <div className={`callouts-separate ${data.barClass ?? 'callouts-separate-2'} callouts d-flex align-items-center justify-content-between`}>
      <span dangerouslySetInnerHTML={{ __html: data.text }} />
      {' '}
      <a className="btn-custome btn waves-effect waves-light" {...link(data.link.href)}>
        {data.link.text}
      </a>
    </div>
  );
}
