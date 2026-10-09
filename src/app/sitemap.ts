import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// A one-page site: the home page is the only URL. lastModified is the build time.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL.toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
