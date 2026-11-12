type Props = { eyebrow: string; title: string; description?: string; align?: 'left' | 'center' };
export function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  return <div className={`section-heading section-heading--${align}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
