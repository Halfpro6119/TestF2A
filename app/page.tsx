import { HomeContent } from "@/components/home-content";
import { NewsTeaser } from "@/components/news-teaser";
import { getImpactArticles, getImpactVideos } from "@/lib/impact";

export default async function Home() {
  const [impactArticles, impactVideos] = await Promise.all([
    getImpactArticles(),
    getImpactVideos(),
  ]);

  return (
    <HomeContent
      impactArticles={impactArticles}
      impactVideos={impactVideos}
    >
      <NewsTeaser />
    </HomeContent>
  );
}
