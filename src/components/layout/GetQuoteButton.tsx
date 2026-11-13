import type { GetQuoteButtonContent } from '@/types/content';

export function GetQuoteButton({ data }: { data: GetQuoteButtonContent }) {
  return (
    <a className="get_quote btn waves-effect waves-light">
      {data.text}
    </a>
  );
}
