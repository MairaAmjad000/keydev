import { Fragment } from 'react';

/** The small-label / heading / intro-text block that opens most sections (`.title`). */
export function SectionTitle({
  text,
  heading,
  paragraphs = [],
}: {
  text: string;
  heading: string;
  /** Intro paragraphs; HTML allowed. */
  paragraphs?: string[];
}) {
  return (
    <div className="title">
      <span>{text}</span>
      {' '}
      <h2>{heading}</h2>
      {paragraphs.map((html, i) => (
        <Fragment key={i}>
          {' '}
          <p dangerouslySetInnerHTML={{ __html: html }} />
        </Fragment>
      ))}
    </div>
  );
}
