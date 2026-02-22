"use server";

import { revalidatePath } from "next/cache";
import { createServerClient } from "@/lib/supabase";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// --- Impact Articles ---

export async function createImpactArticle(
  formData: FormData
): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const location = (formData.get("location") as string) || "";
  const publishedAt = formData.get("published_at") as string;
  const imageUrl = (formData.get("image_url") as string) || null;

  if (!title?.trim() || !excerpt?.trim() || !content?.trim()) {
    return { error: "Title, excerpt, and content are required" };
  }

  const slug = slugify(title);
  const publishedAtDate = publishedAt
    ? new Date(publishedAt).toISOString()
    : new Date().toISOString();

  const { error } = await supabase.from("impact_articles").insert({
    slug,
    title: title.trim(),
    excerpt: excerpt.trim(),
    content: content.trim(),
    location: location.trim(),
    image_url: imageUrl || null,
    published_at: publishedAtDate,
  });

  if (error) {
    if (error.code === "23505") {
      return { error: "An article with this title already exists (slug conflict)" };
    }
    console.error("Create impact article error:", error);
    return { error: error.message };
  }

  revalidatePath("/impact");
  revalidatePath("/admin/impact");
  revalidatePath("/");
  return {};
}

export async function updateImpactArticle(
  id: string,
  formData: FormData
): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const location = (formData.get("location") as string) || "";
  const publishedAt = formData.get("published_at") as string;
  const imageUrl = (formData.get("image_url") as string) || null;

  if (!title?.trim() || !excerpt?.trim() || !content?.trim()) {
    return { error: "Title, excerpt, and content are required" };
  }

  const slug = slugify(title);
  const publishedAtDate = publishedAt
    ? new Date(publishedAt).toISOString()
    : new Date().toISOString();

  const { error } = await supabase
    .from("impact_articles")
    .update({
      slug,
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      location: location.trim(),
      image_url: imageUrl || null,
      published_at: publishedAtDate,
    })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return { error: "An article with this title already exists (slug conflict)" };
    }
    console.error("Update impact article error:", error);
    return { error: error.message };
  }

  revalidatePath("/impact");
  revalidatePath(`/impact/article/${slug}`);
  revalidatePath("/admin/impact");
  revalidatePath("/");
  return {};
}

export async function deleteImpactArticle(id: string): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const { error } = await supabase
    .from("impact_articles")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Delete impact article error:", error);
    return { error: error.message };
  }

  revalidatePath("/impact");
  revalidatePath("/admin/impact");
  revalidatePath("/");
  return {};
}

export async function noOpCreateArticle(
  _formData: FormData
): Promise<{ error?: string }> {
  return { error: "Use edit mode" };
}

// --- Impact Videos ---

export async function createImpactVideo(
  formData: FormData
): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const name = formData.get("name") as string;
  const quote = formData.get("quote") as string;
  const videoUrl = formData.get("video_url") as string;
  const location = (formData.get("location") as string) || "";
  const publishedAt = formData.get("published_at") as string;

  if (!name?.trim() || !quote?.trim() || !videoUrl?.trim()) {
    return { error: "Name, quote, and video are required" };
  }

  const slug = slugify(name);
  const publishedAtDate = publishedAt
    ? new Date(publishedAt).toISOString()
    : new Date().toISOString();

  const { error } = await supabase.from("impact_videos").insert({
    slug,
    name: name.trim(),
    quote: quote.trim(),
    video_url: videoUrl.trim(),
    location: location.trim(),
    published_at: publishedAtDate,
  });

  if (error) {
    if (error.code === "23505") {
      return { error: "A video with this name already exists (slug conflict)" };
    }
    console.error("Create impact video error:", error);
    return { error: error.message };
  }

  revalidatePath("/impact");
  revalidatePath("/admin/impact");
  revalidatePath("/");
  return {};
}

export async function updateImpactVideo(
  id: string,
  formData: FormData
): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const name = formData.get("name") as string;
  const quote = formData.get("quote") as string;
  const videoUrl = formData.get("video_url") as string;
  const location = (formData.get("location") as string) || "";
  const publishedAt = formData.get("published_at") as string;

  if (!name?.trim() || !quote?.trim() || !videoUrl?.trim()) {
    return { error: "Name, quote, and video are required" };
  }

  const slug = slugify(name);
  const publishedAtDate = publishedAt
    ? new Date(publishedAt).toISOString()
    : new Date().toISOString();

  const { error } = await supabase
    .from("impact_videos")
    .update({
      slug,
      name: name.trim(),
      quote: quote.trim(),
      video_url: videoUrl.trim(),
      location: location.trim(),
      published_at: publishedAtDate,
    })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return { error: "A video with this name already exists (slug conflict)" };
    }
    console.error("Update impact video error:", error);
    return { error: error.message };
  }

  revalidatePath("/impact");
  revalidatePath(`/impact/video/${slug}`);
  revalidatePath("/admin/impact");
  revalidatePath("/");
  return {};
}

export async function deleteImpactVideo(id: string): Promise<{ error?: string }> {
  const supabase = createServerClient();

  const { error } = await supabase
    .from("impact_videos")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Delete impact video error:", error);
    return { error: error.message };
  }

  revalidatePath("/impact");
  revalidatePath("/admin/impact");
  revalidatePath("/");
  return {};
}

export async function noOpCreateVideo(
  _formData: FormData
): Promise<{ error?: string }> {
  return { error: "Use edit mode" };
}
