import type { SectionAnchorContent } from '@/types';

/** Empty marker that an AnchorNav link scrolls to; it opens a block of sections. */
export function SectionAnchor({ data }: { data: SectionAnchorContent }) {
  return <div className="svc-block" id={data.id} />;
}
