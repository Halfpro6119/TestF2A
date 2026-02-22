"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, X, Eye, ImagePlus } from "lucide-react";
import { formatArticleContent } from "@/lib/article-content";
import type { ImpactArticle } from "@/lib/impact";

interface ImpactArticleEditorProps {
  article?: ImpactArticle | null;
  mode: "create" | "edit";
  createAction: (formData: FormData) => Promise<{ error?: string }>;
  updateAction?: (id: string, formData: FormData) => Promise<{ error?: string }>;
}

export function ImpactArticleEditor({
  article,
  mode,
  createAction,
  updateAction,
}: ImpactArticleEditorProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(article?.image_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState(article?.title ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [location, setLocation] = useState(article?.location ?? "");
  const [publishedAt, setPublishedAt] = useState(
    article?.published_at
      ? new Date(article.published_at).toISOString().slice(0, 16)
      : new Date().toISOString().slice(0, 16)
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentImageInputRef = useRef<HTMLInputElement>(null);
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setExcerpt(article.excerpt);
      setContent(article.content);
      setImageUrl(article.image_url ?? "");
      setLocation(article.location ?? "");
      setPublishedAt(new Date(article.published_at).toISOString().slice(0, 16));
    }
  }, [article?.id]);

  async function uploadImageFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/upload-image?bucket=impact-images", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error ?? "Upload failed");
    }

    return data.url;
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImageFile(file);
      setImageUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function handleContentImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const textarea = contentTextareaRef.current;
    const insertPos = textarea ? textarea.selectionStart : content.length;

    setUploading(true);
    try {
      const url = await uploadImageFile(file);
      const imgTag = `<img src="${url}" alt="" class="rounded-lg max-w-full my-4" />`;
      const before = content.slice(0, insertPos);
      const after = content.slice(insertPos);
      setContent(before + imgTag + after);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  function triggerContentImageUpload() {
    contentImageInputRef.current?.click();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.set("title", title);
    formData.set("excerpt", excerpt);
    formData.set("content", content);
    formData.set("location", location);
    formData.set("image_url", imageUrl);
    formData.set("published_at", publishedAt);

    try {
      let result: { error?: string };

      if (mode === "create") {
        result = await createAction(formData);
      } else if (article && updateAction) {
        result = await updateAction(article.id, formData);
      } else {
        result = { error: "Invalid mode" };
      }

      if (result.error) {
        setError(result.error);
        setLoading(false);
        return;
      }

      router.push("/admin/impact");
      router.refresh();
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div>
      <Link
        href="/admin/impact"
        className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light transition-colors duration-300 mb-8 text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to impact
      </Link>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="widget-container bg-white p-8">
          <h1 className="heading-display text-2xl font-bold text-gray-900 mb-6">
            {mode === "create"
              ? "New impact article"
              : "Edit impact article"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Article title"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. South Africa, Zimbabwe"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Short summary for cards and SEO"
                rows={3}
                className="mt-1"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="content">Content (HTML)</Label>
                <div className="flex items-center gap-2">
                  <input
                    ref={contentImageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleContentImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={triggerContentImageUpload}
                    disabled={uploading}
                  >
                    <ImagePlus className="w-4 h-4 mr-1" />
                    Insert image
                  </Button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1 mb-2">
                Click where you want the image in the content, then use
                &quot;Insert image&quot;. Image will be added at cursor.
              </p>
              <Textarea
                ref={contentTextareaRef}
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="<p>Your article content in HTML...</p>"
                rows={12}
                className="mt-1 font-mono text-sm"
                required
              />
            </div>

            <div>
              <Label>Featured image</Label>
              <div className="mt-1 space-y-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {imageUrl ? (
                  <div className="relative inline-block">
                    <img
                      src={imageUrl}
                      alt=""
                      className="max-h-48 rounded-lg border object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setImageUrl("")}
                      className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                      aria-label="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {uploading ? "Uploading..." : "Upload image"}
                  </Button>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="published_at">Publish date</Label>
              <Input
                id="published_at"
                type="datetime-local"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className="mt-1"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}

            <div className="flex gap-3">
              <Button
                type="submit"
                className="bg-brand-navy hover:bg-brand-navy-light"
                disabled={loading}
              >
                {loading
                  ? "Saving..."
                  : mode === "create"
                    ? "Create article"
                    : "Save changes"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/admin/impact">Cancel</Link>
              </Button>
            </div>
          </form>
        </div>

        <div className="widget-container bg-white p-8 sticky top-24">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-brand-navy" />
            Live preview
          </h2>
          <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50 max-h-[calc(100vh-12rem)] overflow-y-auto">
            <article className="space-y-6">
              {imageUrl && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-brand-blue/10">
                  <Image
                    src={imageUrl}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="400px"
                  />
                </div>
              )}
              <header>
                <h1 className="heading-display text-2xl font-bold text-gray-900 leading-tight">
                  {title || "Article title"}
                </h1>
                {location && (
                  <p className="text-sm text-brand-navy mt-1">{location}</p>
                )}
                {formattedDate && (
                  <time className="text-sm text-gray-600 block mt-2">
                    {formattedDate}
                  </time>
                )}
              </header>
              <div
                className="article-content space-y-4 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:text-sm [&_img]:rounded-lg [&_img]:max-w-full"
                dangerouslySetInnerHTML={{
                  __html: content.trim()
                    ? formatArticleContent(content)
                    : "<p class='text-gray-400 italic'>Your content will appear here...</p>",
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
