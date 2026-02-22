import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Clock } from "lucide-react";
import { getArticleBySlug, getArticles } from "@/lib/news";
import { formatArticleContent } from "@/lib/article-content";
import { getArticleComments } from "@/lib/news-interaction";
import { LikeButton } from "@/components/news/like-button";
import { CommentsSection } from "@/components/news/comments-section";
import { ShareBar } from "@/components/news/share-bar";
import { NewsArticleCard } from "@/components/news-article-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const [comments, allArticles] = await Promise.all([
    getArticleComments(article.id),
    getArticles(4),
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

  return (
    <main id="main">
      <article className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light transition-colors duration-300 mb-8 text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to news
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
            <div className="flex items-center gap-4 flex-wrap mb-4">
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
              <LikeButton articleSlug={slug} />
            </div>
            <ShareBar path={`/news/${slug}`} title={article.title} />
          </header>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: formatArticleContent(article.content) }}
          />

          <CommentsSection articleSlug={slug} initialComments={comments} />

          {relatedArticles.length > 0 && (
            <section
              className="mt-12 pt-10 border-t border-gray-200"
              aria-labelledby="related-heading"
            >
              <h2
                id="related-heading"
                className="heading-display text-2xl font-bold text-gray-900 mb-6"
              >
                Related articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <NewsArticleCard key={related.id} article={related} />
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light font-medium text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all news
                </Link>
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}
