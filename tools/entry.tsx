import { renderToStaticMarkup } from 'react-dom/server';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { getHomePage } from '@/lib/cms';

const content = await getHomePage();
process.stdout.write(renderToStaticMarkup(<PageTemplate content={content} />));
