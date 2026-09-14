import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

const lastModified = new Date("2026-09-14");

const pages = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path): MetadataRoute.Sitemap[number] => ({
    url: `${profile.domain}${path.path}`,
    lastModified,
    changeFrequency: path.changeFrequency,
    priority: path.priority,
  }));
}
