import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.auto-ecole-cine-evreux.fr";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/formules`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/financement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
