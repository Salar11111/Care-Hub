import type { MetadataRoute } from "next";
import { departments } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carehub-plus.example.com";
  const staticRoutes = [
    "",
    "/about",
    "/book",
    "/contact",
    "/departments",
    "/doctors",
    "/faq",
    "/portal",
    "/stories",
  ];
  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...departments.map((dept) => ({
      url: `${base}/departments/${dept.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}