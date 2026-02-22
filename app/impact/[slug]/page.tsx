import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, MapPin, Clock } from "lucide-react";
import {
  getImpactArticleBySlug,
  getImpactArticles,
} from "@/lib/impact";
import { formatArticleContent } from "@/lib/article-content";
import { getImpactArticleComments } from "@/lib/impact-interaction";
import { ImpactLikeButton } from "@/components/impact/like-button";
import { ImpactCommentsSection } from "@/components/impact/comments-section";
import { ShareBar } from "@/components/news/share-bar";
import { ImpactArticleCard } from "@/components/impact-article-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

const SITE_URL = "https://footprints2africa.org.uk";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getImpactArticleBySlug(slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  const url = `${SITE_URL}/impact/${slug}`;
  const image = article.image_url ?? `${SITE_URL}/images/logo-hero.png`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/impact/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url,
      publishedTime: article.published_at,
      modifiedTime: article.updated_at,
      siteName: "Footprints 2 Africa",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [image],
    },
  };
}

export default async function ImpactArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getImpactArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const [comments, allArticles] = await Promise.all([
    getImpactArticleComments(article.id),
    getImpactArticles(4),
  ]);

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const formattedDate = new Date(article.published_at).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const readingTime = getReadingTime(article.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image_url ?? `${SITE_URL}/images/logo-hero.png`,
    datePublished: article.published_at,
    dateModified: article.updated_at,
    author: {
      "@type": "Organization",
      name: "Footprints 2 Africa",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Footprints 2 Africa",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-hero.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/impact/${slug}`,
    },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
            {article.image_url && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-brand-blue/10">
                <Image
                  src={article.image_url}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority
                />
              </div>
            )}
            <h1 className="heading-display text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {article.location && (
                <span className="legend-text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-brand-navy" />
                  {article.location}
                </span>
              )}
              <time
                dateTime={article.published_at}
                className="legend-text-sm text-gray-600 flex items-center gap-1"
              >
                {formattedDate}
              </time>
              <span className="legend-text-sm text-gray-500 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readingTime} min read
              </span>
              <ImpactLikeButton articleSlug={slug} />
            </div>
            <ShareBar path={`/impact/${slug}`} title={article.title} />
          </header>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{
              __html: formatArticleContent(article.content),
            }}
          />

          <ImpactCommentsSection articleSlug={slug} initialComments={comments} />

          {relatedArticles.length > 0 && (
            <section
              className="mt-12 pt-10 border-t border-gray-200"
              aria-labelledby="related-impact-heading"
            >
              <h2
                id="related-impact-heading"
                className="heading-display text-2xl font-bold text-gray-900 mb-6"
              >
                Related stories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <ImpactArticleCard key={related.id} article={related} />
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
