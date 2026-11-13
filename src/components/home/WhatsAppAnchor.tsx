import type { WhatsAppAnchorContent } from '@/types/content';
import { link } from '@/lib/markup';

export function WhatsAppAnchor({ data }: { data: WhatsAppAnchorContent }) {
  return (
    <a title={data.title} {...link(data.href)}>
      {' '}
    </a>
  );
}
