"use server";

import { revalidatePath } from "next/cache";
import { createServerClient } from "@/lib/supabase";
import type { NewsArticle } from "@/lib/news";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function createArticle(formData: FormData): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const publishedAt = formData.get("published_at") as string;
  const imageUrl = (formData.get("image_url") as string) || null;

  if (!title?.trim() || !excerpt?.trim() || !content?.trim()) {
    return { error: "Title, excerpt, and content are required" };
  }

  const slug = slugify(title);
  const publishedAtDate = publishedAt ? new Date(publishedAt).toISOString() : new Date().toISOString();

  const { error } = await supabase.from("news_articles").insert({
    slug,
    title: title.trim(),
    excerpt: excerpt.trim(),
    content: content.trim(),
    image_url: imageUrl || null,
    published_at: publishedAtDate,
  });

  if (error) {
    if (error.code === "23505") {
      return { error: "An article with this title already exists (slug conflict)" };
    }
    console.error("Create article error:", error);
    return { error: error.message };
  }

  revalidatePath("/news");
  revalidatePath("/admin/news");
  revalidatePath("/");
  return {};
}

export async function updateArticle(
  id: string,
  formData: FormData
): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const publishedAt = formData.get("published_at") as string;
  const imageUrl = (formData.get("image_url") as string) || null;

  if (!title?.trim() || !excerpt?.trim() || !content?.trim()) {
    return { error: "Title, excerpt, and content are required" };
  }

  const slug = slugify(title);
  const publishedAtDate = publishedAt ? new Date(publishedAt).toISOString() : new Date().toISOString();

  const { error } = await supabase
    .from("news_articles")
    .update({
      slug,
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      image_url: imageUrl || null,
      published_at: publishedAtDate,
    })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return { error: "An article with this title already exists (slug conflict)" };
    }
    console.error("Update article error:", error);
    return { error: error.message };
  }

  revalidatePath("/news");
  revalidatePath(`/news/${slug}`);
  revalidatePath("/admin/news");
  revalidatePath("/");
  return {};
}

/** No-op for edit mode - createAction is required by NewsEditor but unused when editing */
export async function noOpCreateAction(_formData: FormData): Promise<{ error?: string }> {
  return { error: "Use edit mode" };
}

export async function deleteArticle(id: string): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const { error } = await supabase.from("news_articles").delete().eq("id", id);

  if (error) {
    console.error("Delete article error:", error);
    return { error: error.message };
  }

  revalidatePath("/news");
  revalidatePath("/admin/news");
  revalidatePath("/");
  return {};
}
