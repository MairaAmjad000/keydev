import { revalidateTag } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';
import { cmsConfig } from '@/config/cms';
import { CMS_TAG } from '@/lib/cms';

/**
 * Webhook for the admin panel: call it after content is published to refresh the site immediately.
 *   POST /api/revalidate    header  x-revalidate-secret: <CMS_REVALIDATE_SECRET>
 */
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret') ?? request.nextUrl.searchParams.get('secret');
  if (!cmsConfig.revalidateSecret || secret !== cmsConfig.revalidateSecret) {
    return NextResponse.json({ ok: false, error: 'Invalid secret' }, { status: 401 });
  }
  revalidateTag(CMS_TAG);
  return NextResponse.json({ ok: true, revalidatedAt: new Date().toISOString() });
}
