import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FileText, MapPin } from "lucide-react";
import { ImpactLikeCountBadge } from "@/components/impact/like-count-badge";
import type { ImpactArticle } from "@/lib/impact";

interface ImpactArticleCardProps {
  article: ImpactArticle;
  featured?: boolean;
}

export function ImpactArticleCard({
  article,
  featured = false,
}: ImpactArticleCardProps) {
  const formattedDate = new Date(article.published_at).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <Link href={`/impact/${article.slug}`} className="block h-full group">
      <Card className="overflow-hidden transition-all duration-300 cursor-pointer border-2 hover:shadow-lg hover:border-brand-blue/30 border-gray-200 h-full flex flex-col hover:scale-[1.02]">
        <div className="relative w-full aspect-video bg-brand-blue/10 flex items-center justify-center overflow-hidden">
          {article.image_url ? (
            <Image
              src={article.image_url}
              alt=""
              fill
              className="object-contain"
              sizes={
                featured
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-blue/20 to-brand-blue/5">
              <FileText className="w-14 h-14 text-brand-navy opacity-60" />
            </div>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3
            className={`font-bold text-gray-900 mb-2 group-hover:text-brand-navy transition-colors ${
              featured ? "text-xl lg:text-2xl" : "text-xl"
            }`}
          >
            {article.title}
          </h3>
          <div className="flex items-center gap-3 mb-3 min-h-[1.5rem] flex-wrap">
            {article.location && (
              <span className="legend-text-sm text-brand-navy flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {article.location}
              </span>
            )}
            <time
              dateTime={article.published_at}
              className="legend-text-sm text-gray-500"
            >
              {formattedDate}
            </time>
            <ImpactLikeCountBadge articleSlug={article.slug} />
          </div>
          <p
            className={`text-gray-700 mb-4 flex-1 line-clamp-3 ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {article.excerpt}
          </p>
          <span className="text-brand-navy font-medium text-sm group-hover:text-brand-navy-light transition-colors inline-flex items-center gap-1 w-fit">
            Read story →
          </span>
        </div>
      </Card>
    </Link>
  );
}
