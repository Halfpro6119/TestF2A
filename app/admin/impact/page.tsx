import Link from "next/link";
import { createServerClient } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Pencil, Trash2, ExternalLink, FileText, Video } from "lucide-react";
import { DeleteImpactArticleButton } from "./delete-article-button";
import { DeleteImpactVideoButton } from "./delete-video-button";

export const dynamic = "force-dynamic";

export default async function AdminImpactPage() {
  const supabase = createServerClient();
  const [articlesResult, videosResult] = await Promise.all([
    supabase
      .from("impact_articles")
      .select("*")
      .order("published_at", { ascending: false }),
    supabase
      .from("impact_videos")
      .select("*")
      .order("published_at", { ascending: false }),
  ]);

  const articles = articlesResult.data ?? [];
  const videos = videosResult.data ?? [];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="heading-display text-3xl font-bold text-gray-900">
          Impact Content
        </h1>
        <div className="flex gap-2">
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/admin/impact/new-article">
              <FileText className="w-4 h-4 mr-1" />
              New article
            </Link>
          </Button>
          <Button asChild className="bg-brand-navy hover:bg-brand-navy-light flex items-center gap-2">
            <Link href="/admin/impact/new-video">
              <Video className="w-4 h-4 mr-1" />
              New video
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-navy" />
            Impact Articles
          </h2>
          {articles.length === 0 ? (
            <div className="widget-container bg-white p-8 text-center">
              <p className="text-gray-600 mb-4">No impact articles yet.</p>
              <Button asChild>
                <Link href="/admin/impact/new-article">Create first article</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {articles.map(
                (article: {
                  id: string;
                  slug: string;
                  title: string;
                  published_at: string;
                }) => (
                  <Card
                    key={article.id}
                    className="p-4 flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(article.published_at).toLocaleDateString(
                          "en-GB"
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={`/impact/${article.slug}`}
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
                          href={`/admin/impact/${article.id}/edit-article`}
                          className="flex items-center gap-1"
                        >
                          <Pencil className="w-4 h-4" />
                          Edit
                        </Link>
                      </Button>
                      <DeleteImpactArticleButton
                        articleId={article.id}
                        articleTitle={article.title}
                      />
                    </div>
                  </Card>
                )
              )}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-brand-navy" />
            Video Testimonials
          </h2>
          {videos.length === 0 ? (
            <div className="widget-container bg-white p-8 text-center">
              <p className="text-gray-600 mb-4">No video testimonials yet.</p>
              <Button asChild>
                <Link href="/admin/impact/new-video">Create first video</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {videos.map(
                (video: {
                  id: string;
                  slug: string;
                  name: string;
                  published_at: string;
                }) => (
                  <Card
                    key={video.id}
                    className="p-4 flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {video.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(video.published_at).toLocaleDateString(
                          "en-GB"
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={`/impact/video/${video.slug}`}
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
                          href={`/admin/impact/${video.id}/edit-video`}
                          className="flex items-center gap-1"
                        >
                          <Pencil className="w-4 h-4" />
                          Edit
                        </Link>
                      </Button>
                      <DeleteImpactVideoButton
                        videoId={video.id}
                        videoName={video.name}
                      />
                    </div>
                  </Card>
                )
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
