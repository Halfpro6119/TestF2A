import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, MapPin } from "lucide-react";
import {
  getImpactVideoBySlug,
  getImpactVideos,
} from "@/lib/impact";
import { getImpactVideoComments } from "@/lib/impact-interaction";
import { ImpactVideoLikeButton } from "@/components/impact/video-like-button";
import { ImpactVideoCommentsSection } from "@/components/impact/video-comments-section";
import { ShareBar } from "@/components/news/share-bar";
import { ImpactVideoCard } from "@/components/impact-video-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

const SITE_URL = "https://footprints2africa.org.uk";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = await getImpactVideoBySlug(slug);
  if (!video) {
    return { title: "Video Not Found" };
  }
  const url = `${SITE_URL}/impact/video/${slug}`;
  const image = `${SITE_URL}/images/logo-hero.png`;
  return {
    title: video.name,
    description: video.quote || `Impact video testimonial from Footprints 2 Africa - ${video.name}`,
    alternates: {
      canonical: `/impact/video/${slug}`,
    },
    openGraph: {
      type: "video.other",
      title: video.name,
      description: video.quote || `Impact video testimonial from Footprints 2 Africa`,
      url,
      publishedTime: video.published_at,
      siteName: "Footprints 2 Africa",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: video.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: video.name,
      description: video.quote || `Impact video testimonial from Footprints 2 Africa`,
      images: [image],
    },
  };
}

export default async function ImpactVideoPage({ params }: PageProps) {
  const { slug } = await params;
  const video = await getImpactVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  const [comments, allVideos] = await Promise.all([
    getImpactVideoComments(video.id),
    getImpactVideos(4),
  ]);

  const relatedVideos = allVideos
    .filter((v) => v.id !== video.id)
    .slice(0, 3);

  const formattedDate = new Date(video.published_at).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.quote || video.name,
    thumbnailUrl: `${SITE_URL}/images/logo-hero.png`,
    uploadDate: video.published_at,
    contentUrl: video.video_url,
    publisher: {
      "@type": "Organization",
      name: "Footprints 2 Africa",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-hero.png`,
      },
    },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <article className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light transition-colors duration-300 mb-8 text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to impact catalogue
          </Link>

          <header className="mb-10">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-black">
              <video
                src={video.video_url}
                controls
                className="w-full h-full object-contain"
                poster=""
                aria-label={video.name}
              />
            </div>
            <h1 className="heading-display text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {video.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {video.location && (
                <span className="legend-text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-brand-navy" />
                  {video.location}
                </span>
              )}
              <time
                dateTime={video.published_at}
                className="legend-text-sm text-gray-600"
              >
                {formattedDate}
              </time>
              <ImpactVideoLikeButton videoSlug={slug} />
            </div>
            <ShareBar path={`/impact/video/${slug}`} title={video.name} />
            {video.quote && (
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-brand-navy pl-6 mt-4">
                &ldquo;{video.quote}&rdquo;
              </blockquote>
            )}
          </header>

          <ImpactVideoCommentsSection
            videoSlug={slug}
            initialComments={comments}
          />

          {relatedVideos.length > 0 && (
            <section
              className="mt-12 pt-10 border-t border-gray-200"
              aria-labelledby="related-videos-heading"
            >
              <h2
                id="related-videos-heading"
                className="heading-display text-2xl font-bold text-gray-900 mb-6"
              >
                More video testimonials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedVideos.map((related) => (
                  <ImpactVideoCard key={related.id} video={related} />
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/impact"
                  className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light font-medium text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all impact stories
                </Link>
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}
