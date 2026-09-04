import type { MetadataRoute } from "next";
import { getPublishedLivestock, getPublishedPosts, getPublishedProducts, getPublishedTraining } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticRoutes = ["", "/about", "/livestock", "/products", "/nutrition", "/training", "/blog", "/gallery", "/contact", "/search"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })
  );
  const dynamic = [
    ...getPublishedLivestock().map((item) => ({ url: `${base}/livestock/${item.slug}`, lastModified: new Date() })),
    ...getPublishedProducts().map((item) => ({ url: `${base}/products/${item.slug}`, lastModified: new Date() })),
    ...getPublishedPosts().map((item) => ({ url: `${base}/blog/${item.slug}`, lastModified: new Date() })),
    ...getPublishedTraining().map((item) => ({ url: `${base}/training/${item.slug}`, lastModified: new Date() })),
  ];
  return [...staticRoutes, ...dynamic];
}
