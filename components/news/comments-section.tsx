"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import type { NewsComment } from "@/lib/news-interaction";

interface CommentsSectionProps {
  articleSlug: string;
  initialComments?: NewsComment[];
}

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function CommentsSection({
  articleSlug,
  initialComments = [],
}: CommentsSectionProps) {
  const [comments, setComments] = useState<NewsComment[]>(initialComments);
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    fetch(`/api/news/${articleSlug}/comments`)
      .then((res) => res.json())
      .then((data) => {
        if (data.comments) setComments(data.comments);
      })
      .catch(() => {});
  }, [articleSlug, mounted]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/news/${articleSlug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author_name: authorName.trim(),
          content: content.trim(),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, data.comment]);
        setContent("");
      } else {
        setError(data.error ?? "Failed to post comment");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="mt-12 widget-container bg-white p-6 md:p-8"
      aria-labelledby="comments-heading"
    >
      <h2
        id="comments-heading"
        className="heading-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
      >
        <MessageCircle className="w-6 h-6 text-brand-navy" />
        Comments ({comments.length})
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8 bg-gray-50/50 rounded-lg p-4 md:p-6"
      >
        <p className="legend-text-sm mb-2">Add a comment</p>
        <div>
          <Label htmlFor="comment-name">Your name</Label>
          <Input
            id="comment-name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Jane Doe"
            className="mt-1 max-w-md"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div>
          <Label htmlFor="comment-content">Comment</Label>
          <Textarea
            id="comment-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts..."
            rows={4}
            className="mt-1 max-w-2xl"
            required
            minLength={3}
            maxLength={2000}
          />
        </div>
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" disabled={loading} variant="brand">
          {loading ? "Posting..." : "Post comment"}
        </Button>
      </form>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8">
            <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 mb-1">No comments yet</p>
            <p className="text-sm text-gray-500">
              Be the first to share your thoughts!
            </p>
          </div>
        ) : (
          comments.map((comment, index) => {
            const isNewest = index === comments.length - 1;
            return (
              <div
                key={comment.id}
                className={`p-4 rounded-lg border-l-4 border-l-brand-navy border border-gray-200 bg-gray-50/50 ${
                  isNewest ? "bg-brand-blue/5 border-l-brand-navy" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-navy font-bold text-sm shrink-0">
                    {getInitials(comment.author_name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-gray-900 block truncate">
                      {comment.author_name}
                    </span>
                    <time
                      dateTime={comment.created_at}
                      className="text-sm text-gray-500"
                    >
                      {new Date(comment.created_at).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  {isNewest && (
                    <span className="text-xs font-medium text-brand-navy bg-brand-blue/20 px-2 py-0.5 rounded-full shrink-0">
                      New
                    </span>
                  )}
                </div>
                <p className="text-gray-700 text-sm whitespace-pre-wrap pl-[52px]">
                  {comment.content}
                </p>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
