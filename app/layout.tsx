import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteLoader } from "@/components/layout/SiteLoader";
import { JsonLd } from "@/components/seo/JsonLd";
import { brand } from "@/lib/brand";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: "Fedbellygrouplimited | Producer Services Platform",
    template: "%s | Fedbelly",
  },
  description:
    "Production, distribution, rights, royalties, and project ops for artists, producers, managers, and labels.",
  icons: {
    icon: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="atmosphere min-h-[100dvh] font-sans antialiased">
        <JsonLd data={organizationJsonLd} />
        <SiteLoader />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
