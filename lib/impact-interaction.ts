import { createClient } from "./supabase";

export interface ImpactArticleComment {
  id: string;
  article_id: string;
  author_name: string;
  content: string;
  created_at: string;
}

export interface ImpactVideoComment {
  id: string;
  video_id: string;
  author_name: string;
  content: string;
  created_at: string;
}

/** Get impact article like count and whether current user liked (public) */
export async function getImpactArticleLikes(
  articleId: string,
  userFingerprint?: string | null
): Promise<{ count: number; liked: boolean }> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return { count: 0, liked: false };
  }
  const supabase = createClient();

  const { count, error } = await supabase
    .from("impact_article_likes")
    .select("*", { count: "exact", head: true })
    .eq("article_id", articleId);

  if (error) {
    return { count: 0, liked: false };
  }

  let liked = false;
  if (userFingerprint) {
    const { data } = await supabase
      .from("impact_article_likes")
      .select("id")
      .eq("article_id", articleId)
      .eq("user_fingerprint", userFingerprint)
      .maybeSingle();
    liked = !!data;
  }

  return { count: count ?? 0, liked };
}

/** Get impact article comments (public) */
export async function getImpactArticleComments(
  articleId: string
): Promise<ImpactArticleComment[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return [];
  }
  const supabase = createClient();

  const { data, error } = await supabase
    .from("impact_article_comments")
    .select("*")
    .eq("article_id", articleId)
    .order("created_at", { ascending: true });

  if (error) {
    return [];
  }

  return (data ?? []) as ImpactArticleComment[];
}

/** Get impact video like count and whether current user liked (public) */
export async function getImpactVideoLikes(
  videoId: string,
  userFingerprint?: string | null
): Promise<{ count: number; liked: boolean }> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return { count: 0, liked: false };
  }
  const supabase = createClient();

  const { count, error } = await supabase
    .from("impact_video_likes")
    .select("*", { count: "exact", head: true })
    .eq("video_id", videoId);

  if (error) {
    return { count: 0, liked: false };
  }

  let liked = false;
  if (userFingerprint) {
    const { data } = await supabase
      .from("impact_video_likes")
      .select("id")
      .eq("video_id", videoId)
      .eq("user_fingerprint", userFingerprint)
      .maybeSingle();
    liked = !!data;
  }

  return { count: count ?? 0, liked };
}

/** Get impact video comments (public) */
export async function getImpactVideoComments(
  videoId: string
): Promise<ImpactVideoComment[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return [];
  }
  const supabase = createClient();

  const { data, error } = await supabase
    .from("impact_video_comments")
    .select("*")
    .eq("video_id", videoId)
    .order("created_at", { ascending: true });

  if (error) {
    return [];
  }

  return (data ?? []) as ImpactVideoComment[];
}
