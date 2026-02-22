import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticles } from "@/lib/news";
import { NewsArticleCard } from "@/components/news-article-card";
import { Button } from "@/components/ui/button";

export async function NewsTeaser() {
  const articles = await getArticles(6);

  if (articles.length === 0) {
    return null;
  }

  const [featuredArticle, ...restArticles] = articles;

  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey"
      aria-labelledby="news-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-3 mb-6 sm:mb-10">
          <div className="flex-shrink-0 w-1 h-12 bg-brand-navy rounded-full" aria-hidden />
          <div className="flex-1">
            <p className="legend-text mb-1">News & Updates</p>
            <h2
              id="news-heading"
              className="heading-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight"
            >
              Latest News
            </h2>
            <p className="legend-text-sm">
              Updates, announcements, and stories from our mission
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-10">
          <div className="sm:col-span-2">
            <NewsArticleCard article={featuredArticle} featured />
          </div>
          {restArticles.map((article) => (
            <NewsArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="brand">
            <Link href="/news">
              View all news <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
