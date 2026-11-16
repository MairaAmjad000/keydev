import { Fragment } from 'react';
import type { AnchorNavContent } from '@/types';

/** "Jump to" links of a page that stacks several service blocks (each block starts with a SectionAnchor). */
export function AnchorNav({ data }: { data: AnchorNavContent }) {
  return (
    <div className="svc-jump container py-3">
      <ul className="list-inline mb-0">
        {data.items.map((item, i) => (
          <Fragment key={item.id}>
            {i > 0 && ' '}
            <li className="list-inline-item mr-3">
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
