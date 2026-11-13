import { HeaderSection } from '@/components/layout/Header/Header';
import { PageContent } from '@/components/layout/PageContent/PageContent';
import { LegacyScripts } from '@/components/layout/LegacyScripts/LegacyScripts';

export default function HomePage() {
  return (
    <>
      <a className="scroll-top fas fa-angle-up" href="#home" aria-label="Back to top"></a>
      <HeaderSection />
      <PageContent />
      <LegacyScripts />
    </>
  );
}
