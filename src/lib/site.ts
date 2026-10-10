// Public origin of the site, used for absolute URLs (Open Graph, canonical, sitemap, robots).
// NEXT_PUBLIC_SITE_URL from .env wins; on Vercel the production domain is provided
// automatically (without a protocol); locally it falls back to the dev server.
const LOCAL_URL = "http://localhost:3000";

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return LOCAL_URL;
}

export const SITE_URL = new URL(resolveSiteUrl());
