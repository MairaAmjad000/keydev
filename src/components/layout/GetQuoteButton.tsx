import type { GetQuoteButtonContent } from '@/types';

export function GetQuoteButton({ data }: { data: GetQuoteButtonContent }) {
  return (
    <a className="get_quote btn waves-effect waves-light">
      {data.text}
    </a>
  );
}
