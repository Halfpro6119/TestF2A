import { createClient } from "./supabase";
import { createServerClient } from "./supabase";

export interface ImpactArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  location: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface ImpactVideo {
  id: string;
  slug: string;
  name: string;
  quote: string;
  video_url: string;
  location: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

/** Fetch all impact articles, newest first (public) */
export async function getImpactArticles(limit?: number): Promise<ImpactArticle[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return [];
  }
  const supabase = createClient();
  let query = supabase
    .from("impact_articles")
    .select("*")
    .order("published_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching impact articles:", error);
    return [];
  }

  return (data ?? []) as ImpactArticle[];
}

/** Fetch a single impact article by slug (public) */
export async function getImpactArticleBySlug(slug: string): Promise<ImpactArticle | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }
  const supabase = createClient();
  const { data, error } = await supabase
    .from("impact_articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data as ImpactArticle;
}

/** Fetch a single impact article by id (admin) */
export async function getImpactArticleById(id: string): Promise<ImpactArticle | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("impact_articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return data as ImpactArticle;
}

/** Fetch all impact videos, newest first (public) */
export async function getImpactVideos(limit?: number): Promise<ImpactVideo[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return [];
  }
  const supabase = createClient();
  let query = supabase
    .from("impact_videos")
    .select("*")
    .order("published_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching impact videos:", error);
    return [];
  }

  return (data ?? []) as ImpactVideo[];
}

/** Fetch a single impact video by slug (public) */
export async function getImpactVideoBySlug(slug: string): Promise<ImpactVideo | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }
  const supabase = createClient();
  const { data, error } = await supabase
    .from("impact_videos")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data as ImpactVideo;
}

/** Fetch a single impact video by id (admin) */
export async function getImpactVideoById(id: string): Promise<ImpactVideo | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("impact_videos")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return data as ImpactVideo;
}
