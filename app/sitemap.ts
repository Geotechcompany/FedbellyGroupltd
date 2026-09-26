import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

const routes = [
  "/",
  "/how-it-works",
  "/toolkit",
  "/distribution",
  "/rights-publishing",
  "/analytics-royalties",
  "/solutions",
  "/solutions/emerging",
  "/solutions/taking-off",
  "/solutions/next-level",
  "/about",
  "/careers",
  "/faq",
  "/contact",
  "/blog",
  "/legal/terms",
  "/legal/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl.replace(/\/$/, "");
  const now = new Date();
  return routes.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
