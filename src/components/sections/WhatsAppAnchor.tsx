import type { WhatsAppAnchorContent } from '@/types';
import { link } from '@/lib/utils/markup';

export function WhatsAppAnchor({ data }: { data: WhatsAppAnchorContent }) {
  return (
    <a title={data.title} {...link(data.href)}>
      {' '}
    </a>
  );
}
