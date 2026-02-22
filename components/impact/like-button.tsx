"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { getOrCreateFingerprint } from "@/lib/fingerprint";

interface ImpactLikeButtonProps {
  articleSlug: string;
  initialCount?: number;
  initialLiked?: boolean;
}

export function ImpactLikeButton({
  articleSlug,
  initialCount = 0,
  initialLiked = false,
}: ImpactLikeButtonProps) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(initialLiked);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [justLiked, setJustLiked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const fp = getOrCreateFingerprint();
    fetch(
      `/api/impact/article/${articleSlug}/like?fingerprint=${encodeURIComponent(fp)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count ?? 0);
        setLiked(data.liked ?? false);
      })
      .catch(() => {});
  }, [articleSlug, mounted]);

  async function handleClick() {
    if (!mounted || loading) return;
    setLoading(true);
    const fp = getOrCreateFingerprint();
    try {
      const res = await fetch(`/api/impact/article/${articleSlug}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fingerprint: fp }),
      });
      const data = await res.json();
      if (res.ok) {
        const wasLiked = liked;
        setCount(data.count ?? 0);
        setLiked(data.liked ?? false);
        if (data.liked && !wasLiked) {
          setJustLiked(true);
          setTimeout(() => setJustLiked(false), 400);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 motion-reduce:transition-none ${
        liked
          ? "bg-brand-red/10 text-brand-red hover:bg-brand-red/20"
          : "bg-brand-grey text-gray-600 hover:bg-brand-grey/80"
      } ${justLiked ? "scale-110" : ""}`}
      aria-pressed={liked}
      aria-label={liked ? "Unlike this article" : "Like this article"}
    >
      <Heart
        className={`w-5 h-5 transition-transform duration-200 ${liked ? "fill-current" : ""} ${justLiked ? "scale-125" : ""}`}
      />
      <span className="font-medium">{count}</span>
    </button>
  );
}
