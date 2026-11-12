import Script from 'next/script';

/** Legacy dependencies are retained in their original order for visual/interaction parity. */
export function LegacyScripts() {
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/legacy/inline-1.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/legacy/inline-3.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" strategy="afterInteractive" />
      <Script src="/legacy/inline-5.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.0/dist/sweetalert2.min.js" strategy="afterInteractive" />
      <Script src="/legacy/inline-6.js" strategy="afterInteractive" />
      <Script src="/legacy/inline-7.js" strategy="afterInteractive" />
    </>
  );
}
