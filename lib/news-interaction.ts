import { createClient } from "./supabase";

export interface NewsComment {
  id: string;
  article_id: string;
  author_name: string;
  content: string;
  created_at: string;
}

/** Get like count and whether current user liked (public) */
export async function getArticleLikes(
  articleId: string,
  userFingerprint?: string | null
): Promise<{ count: number; liked: boolean }> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return { count: 0, liked: false };
  }
  const supabase = createClient();

  const { count, error } = await supabase
    .from("news_article_likes")
    .select("*", { count: "exact", head: true })
    .eq("article_id", articleId);

  if (error) {
    return { count: 0, liked: false };
  }

  let liked = false;
  if (userFingerprint) {
    const { data } = await supabase
      .from("news_article_likes")
      .select("id")
      .eq("article_id", articleId)
      .eq("user_fingerprint", userFingerprint)
      .maybeSingle();
    liked = !!data;
  }

  return { count: count ?? 0, liked };
}

/** Get comments for an article (public) */
export async function getArticleComments(
  articleId: string
): Promise<NewsComment[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return [];
  }
  const supabase = createClient();

  const { data, error } = await supabase
    .from("news_article_comments")
    .select("*")
    .eq("article_id", articleId)
    .order("created_at", { ascending: true });

  if (error) {
    return [];
  }

  return (data ?? []) as NewsComment[];
}
