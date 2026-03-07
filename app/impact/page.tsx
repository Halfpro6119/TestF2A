import type { Metadata } from "next";
import { getImpactArticles, getImpactVideos } from "@/lib/impact";
import { ImpactPageClient } from "./impact-page-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Patient Stories",
  description:
    "Discover the real impact of Footprints 2 Africa. Read stories and watch testimonials from ostomates, healthcare workers, and communities across Africa whose lives have been transformed by our mission.",
  openGraph: {
    title: "Patient Stories | Footprints 2 Africa",
    description:
      "Discover the real impact of Footprints 2 Africa. Stories and testimonials from ostomates and communities across Africa.",
    url: "/impact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Stories | Footprints 2 Africa",
    description:
      "Discover the real impact of Footprints 2 Africa. Stories and testimonials from ostomates and communities across Africa.",
  },
  alternates: {
    canonical: "/impact",
  },
};

export default async function ImpactPage() {
  const [articles, videos] = await Promise.all([
    getImpactArticles(),
    getImpactVideos(),
  ]);

  return <ImpactPageClient articles={articles} videos={videos} />;
}
