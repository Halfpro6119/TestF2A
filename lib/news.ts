import { createClient } from "./supabase";
import { createServerClient } from "./supabase";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  published_at: string;
  created_at: string;
  updated_at: string;
}

/** Fetch all published news articles, newest first (public) */
export async function getArticles(limit?: number): Promise<NewsArticle[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return [];
  }
  const supabase = createClient();
  let query = supabase
    .from("news_articles")
    .select("*")
    .order("published_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching news articles:", error);
    return [];
  }

  return (data ?? []) as NewsArticle[];
}

/** Fetch a single article by slug (public) */
export async function getArticleBySlug(slug: string): Promise<NewsArticle | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }
  const supabase = createClient();
  const { data, error } = await supabase
    .from("news_articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data as NewsArticle;
}

/** Fetch a single article by id (admin) */
export async function getArticleById(id: string): Promise<NewsArticle | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("news_articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return data as NewsArticle;
}
