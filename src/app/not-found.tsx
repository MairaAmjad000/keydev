import { getSiteSettings } from '@/lib/cms';

export default async function NotFound() {
  const { notFound } = await getSiteSettings();
  return (
    <main className="container" style={{ padding: '120px 15px', textAlign: 'center' }}>
      <h1>{notFound.heading}</h1>
      <p>{notFound.text}</p>
      <a href={notFound.linkHref}>{notFound.linkText}</a>
    </main>
  );
}
