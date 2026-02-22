import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/news";
import { getImpactArticles, getImpactVideos } from "@/lib/impact";

const SITE_URL = "https://footprints2africa.org.uk";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/get-involved`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/get-involved/volunteer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/get-involved/partners`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/impact`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  const [articles, impactArticles, impactVideos] = await Promise.all([
    getArticles(),
    getImpactArticles(),
    getImpactVideos(),
  ]);

  const newsRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: new Date(article.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const impactArticleRoutes: MetadataRoute.Sitemap = impactArticles.map((article) => ({
    url: `${SITE_URL}/impact/${article.slug}`,
    lastModified: new Date(article.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const impactVideoRoutes: MetadataRoute.Sitemap = impactVideos.map((video) => ({
    url: `${SITE_URL}/impact/video/${video.slug}`,
    lastModified: new Date(video.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...newsRoutes,
    ...impactArticleRoutes,
    ...impactVideoRoutes,
  ];
}
