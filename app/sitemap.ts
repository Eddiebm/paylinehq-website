import type { MetadataRoute } from "next";

const SITE = "https://paylinehq-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/hire`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/newsletter`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
