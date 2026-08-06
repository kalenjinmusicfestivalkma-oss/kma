import { MetadataRoute } from "next";

const BASE_URL = "https://kma2026.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/categories",
    "/nominees",
    "/winners",
    "/tickets",
    "/news",
    "/sponsors",
    "/contact",
    "/login",
    "/register",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
