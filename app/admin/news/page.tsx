import Link from "next/link";
import { createServerClient } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";
import { DeleteArticleButton } from "./delete-button";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const supabase = createServerClient();
  const { data: articles } = await supabase
    .from("news_articles")
    .select("*")
    .order("published_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="heading-display text-3xl font-bold text-gray-900">
          News Articles
        </h1>
        <Button asChild variant="brand">
          <Link href="/admin/news/new" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New article
          </Link>
        </Button>
      </div>

      {!articles || articles.length === 0 ? (
        <div className="widget-container bg-white p-12 text-center">
          <p className="text-gray-600 mb-6">No articles yet.</p>
          <Button asChild variant="brand">
            <Link href="/admin/news/new">Create your first article</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((article: { id: string; slug: string; title: string; published_at: string }) => (
            <Card
              key={article.id}
              className="p-4 flex items-center justify-between gap-4"
            >
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-gray-900 truncate">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {new Date(article.published_at).toLocaleDateString("en-GB")}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={`/news/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={`/admin/news/${article.id}/edit`}
                    className="flex items-center gap-1"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </Link>
                </Button>
                <DeleteArticleButton articleId={article.id} articleTitle={article.title} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
