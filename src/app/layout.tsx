import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/home/SiteHeader";
import SiteFooter from "@/components/home/SiteFooter";
import TemplateScripts from "@/components/home/TemplateScripts";

export const metadata: Metadata = {
  title: "Website & Mobile App Development Company in Lahore, Pakistan | KeyDevs",
  description:
    "KeyDevs Technologies: a website and mobile app development company in Lahore, Pakistan that offers the best Website and app development services to startups & companies.",
  openGraph: { siteName: "KeyDevs Technologies", type: "website" },
  icons: { icon: "/assets/favicon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#008080",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Order matters: Font Awesome → Bootstrap → template CSS (same as the original page) */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/css/template.css" />
      </head>
      <body>
        <SiteHeader />
        <div>{children}</div>
        <SiteFooter />
        <TemplateScripts />
      </body>
    </html>
  );
}
