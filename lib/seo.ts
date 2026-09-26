import type { Metadata } from "next";
import { brand } from "./brand";
import { unsplashSrc } from "./unsplash";

const defaultOgImage = unsplashSrc("studio-session", { w: 1200 });

export function absoluteUrl(path = "/") {
  const base = brand.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage = defaultOgImage,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.legalName,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.legalName,
  url: brand.siteUrl,
  logo: absoluteUrl("/brand/logo-mark.png"),
};
