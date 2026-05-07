import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_legacy_static/"],
      },
    ],
    sitemap: "https://paylinehq-website.vercel.app/sitemap.xml",
  };
}
