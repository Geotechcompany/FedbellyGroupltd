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
        {/* Hard dismiss if React never hydrates (broken chunks / JS errors) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var MAX=2800,EXIT=350;function hide(){var el=document.getElementById("fb-site-loader");if(!el||el.dataset.done==="1")return;el.dataset.done="1";el.classList.add("is-exiting");el.style.pointerEvents="none";setTimeout(function(){el.remove();},EXIT);}window.addEventListener("load",function(){setTimeout(hide,150);});setTimeout(hide,MAX);document.addEventListener("click",function(e){if(e.target&&e.target.closest&&e.target.closest("#fb-site-loader"))hide();},true);})();`,
          }}
        />
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
