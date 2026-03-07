import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Newspaper } from "lucide-react";
import { getArticles } from "@/lib/news";
import { NewsArticleCard } from "@/components/news-article-card";
import { Button } from "@/components/ui/button";
import { LikeCountBadge } from "@/components/news/like-count-badge";
import { PageHero } from "@/components/page-hero";
import { ScrollRevealSection } from "@/components/scroll-reveal-section";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Latest News",
  description:
    "Stay up to date with the latest updates, announcements, and stories from Footprints 2 Africa. Read about our mission, impact, and how we're restoring dignity to ostomates across Africa.",
  openGraph: {
    title: "Latest News | Footprints 2 Africa",
    description:
      "Stay up to date with the latest updates, announcements, and stories from Footprints 2 Africa.",
    url: "/news",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest News | Footprints 2 Africa",
    description:
      "Stay up to date with the latest updates, announcements, and stories from Footprints 2 Africa.",
  },
  alternates: {
    canonical: "/news",
  },
};

export default async function NewsPage() {
  const articles = await getArticles();
  const featuredArticle = articles.length >= 3 ? articles[0] : null;
  const gridArticles = featuredArticle ? articles.slice(1) : articles;

  return (
    <main id="main">
      <section className="px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <div className="max-w-6xl mx-auto">
          <PageHero
            backHref="/"
            backLabel="Back to home"
            heading="Latest News"
            description="Stay up to date with the latest updates, announcements, and stories from Footprints 2 Africa."
            legend="News & Updates"
          />

          {articles.length === 0 ? (
            <ScrollRevealSection>
            <div className="widget-container bg-white p-12 md:p-16 text-center">
              <Newspaper className="w-16 h-16 text-brand-navy mx-auto mb-6 opacity-60" />
              <h2 className="heading-display text-2xl font-bold text-gray-900 mb-3">
                No news articles yet
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Check back soon for updates, announcements, and stories from our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="brand-outline">
                  <Link href="/">Return home</Link>
                </Button>
                <Button asChild variant="brand">
                  <Link href="/impact">Explore patient stories</Link>
                </Button>
              </div>
            </div>
            </ScrollRevealSection>
          ) : (
            <ScrollRevealSection>
            <>
              {featuredArticle && (
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="block mb-10 group"
                >
                  <div className="widget-container bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:border-brand-blue/30 border-2 border-gray-200">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative w-full aspect-video md:aspect-auto md:min-h-[280px] bg-brand-blue/10 overflow-hidden">
                        {featuredArticle.image_url ? (
                          <Image
                            src={featuredArticle.image_url}
                            alt=""
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-blue/20 to-brand-blue/5">
                            <Newspaper className="w-20 h-20 text-brand-navy opacity-60" />
                          </div>
                        )}
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <p className="legend-text-sm text-brand-navy mb-2">
                          Featured
                        </p>
                        <h2 className="heading-display text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-brand-navy transition-colors leading-tight">
                          {featuredArticle.title}
                        </h2>
                        <div className="flex items-center gap-3 mb-4">
                          <time
                            dateTime={featuredArticle.published_at}
                            className="legend-text-sm text-brand-navy"
                          >
                            {new Date(featuredArticle.published_at).toLocaleDateString(
                              "en-GB",
                              { day: "numeric", month: "long", year: "numeric" }
                            )}
                          </time>
                          <LikeCountBadge articleSlug={featuredArticle.slug} />
                        </div>
                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {featuredArticle.excerpt}
                        </p>
                        <span className="text-brand-navy font-medium group-hover:text-brand-navy-light transition-colors inline-flex items-center gap-1">
                          Read article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridArticles.map((article) => (
                  <NewsArticleCard key={article.id} article={article} />
                ))}
              </div>
            </>
            </ScrollRevealSection>
          )}
        </div>
      </section>
    </main>
  );
}
