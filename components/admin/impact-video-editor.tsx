"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, X } from "lucide-react";
import type { ImpactVideo } from "@/lib/impact";

interface ImpactVideoEditorProps {
  video?: ImpactVideo | null;
  mode: "create" | "edit";
  createAction: (formData: FormData) => Promise<{ error?: string }>;
  updateAction?: (id: string, formData: FormData) => Promise<{ error?: string }>;
}

export function ImpactVideoEditor({
  video,
  mode,
  createAction,
  updateAction,
}: ImpactVideoEditorProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState(video?.name ?? "");
  const [quote, setQuote] = useState(video?.quote ?? "");
  const [videoUrl, setVideoUrl] = useState(video?.video_url ?? "");
  const [location, setLocation] = useState(video?.location ?? "");
  const [publishedAt, setPublishedAt] = useState(
    video?.published_at
      ? new Date(video.published_at).toISOString().slice(0, 16)
      : new Date().toISOString().slice(0, 16)
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (video) {
      setName(video.name);
      setQuote(video.quote);
      setVideoUrl(video.video_url);
      setLocation(video.location);
      setPublishedAt(new Date(video.published_at).toISOString().slice(0, 16));
    }
  }, [video?.id]);

  async function uploadVideoFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/upload-video", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error ?? "Upload failed");
    }

    return data.url;
  }

  async function handleVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadVideoFile(file);
      setVideoUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.set("name", name);
    formData.set("quote", quote);
    formData.set("video_url", videoUrl);
    formData.set("location", location);
    formData.set("published_at", publishedAt);

    try {
      let result: { error?: string };

      if (mode === "create") {
        result = await createAction(formData);
      } else if (video && updateAction) {
        result = await updateAction(video.id, formData);
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

  return (
    <div>
      <Link
        href="/admin/impact"
        className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light transition-colors duration-300 mb-8 text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to impact
      </Link>

      <div className="widget-container bg-white p-8 max-w-2xl">
        <h1 className="heading-display text-2xl font-bold text-gray-900 mb-6">
          {mode === "create" ? "New video testimonial" : "Edit video testimonial"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name / Title</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Story of Change 1"
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
              placeholder="e.g. Africa, South Africa"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="quote">Quote / Description</Label>
            <Textarea
              id="quote"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="Short quote or description shown on the card"
              rows={3}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label>Video</Label>
            <div className="mt-1 space-y-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/ogg,video/quicktime"
                onChange={handleVideoUpload}
                className="hidden"
              />
              {videoUrl ? (
                <div className="space-y-2">
                  <div className="relative">
                    <video
                      src={videoUrl}
                      controls
                      className="w-full max-h-48 rounded-lg border bg-black"
                    />
                    <button
                      type="button"
                      onClick={() => setVideoUrl("")}
                      className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                      aria-label="Remove video"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Or paste a URL above. To replace, remove and upload a new file.
                  </p>
                </div>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {uploading ? "Uploading..." : "Upload video"}
                </Button>
              )}
              <Input
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Or paste video URL (e.g. from Supabase Storage)"
                className="mt-2"
              />
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
              disabled={loading || !videoUrl.trim()}
            >
              {loading
                ? "Saving..."
                : mode === "create"
                  ? "Create video"
                  : "Save changes"}
            </Button>
            <Button type="button" variant="outline" asChild>
              <Link href="/admin/impact">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
