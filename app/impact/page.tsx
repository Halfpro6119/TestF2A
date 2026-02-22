import { getImpactArticles, getImpactVideos } from "@/lib/impact";
import { ImpactPageClient } from "./impact-page-client";

export const dynamic = "force-dynamic";

export default async function ImpactPage() {
  const [articles, videos] = await Promise.all([
    getImpactArticles(),
    getImpactVideos(),
  ]);

  return <ImpactPageClient articles={articles} videos={videos} />;
}
