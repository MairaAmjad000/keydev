import { getHomePage } from '@/lib/cms';
import { PageTemplate } from '@/components/layout/PageTemplate';

export default async function HomePage() {
  const content = await getHomePage();
  return <PageTemplate content={content} />;
}
