import { Fragment } from 'react';
import type { GameExpertiseContent } from '@/types';
import { IconSlot } from './shared/IconSlot';
import { SectionTitle } from './shared/SectionTitle';

/** "Types of games we develop": a wrapping grid of round icons with a label. */
export function GameExpertise({ data }: { data: GameExpertiseContent }) {
  return (
    <section className="padding-6030 bg-white game-experties-main">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 mb-30 text-center">
                <div className="game-experties-box rounded10">
                  <IconSlot icon={item.icon} className="game-experties-icon box-shadow" />
                  {' '}
                  <span>{item.label}</span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
