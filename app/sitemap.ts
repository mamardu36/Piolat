import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories } from "@/lib/products";
import { expertises } from "@/lib/expertise";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/societe", "/savoir-faire", "/gamme", "/contact", "/mentions-legales", "/confidentialite",
    ...expertises.map((e) => `/savoir-faire/${e.slug}`),
    ...categories.map((c) => `/gamme/${c.slug}`),
  ];
  return paths.map((p) => ({ url: new URL(p, site.url).toString(), changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
