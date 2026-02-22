"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface ImpactLikeCountBadgeProps {
  articleSlug: string;
}

export function ImpactLikeCountBadge({ articleSlug }: ImpactLikeCountBadgeProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/impact/article/${articleSlug}/like`)
      .then((res) => res.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => setCount(0));
  }, [articleSlug]);

  return (
    <span
      className="inline-flex items-center gap-1 text-sm text-gray-500 rounded-full px-2 py-0.5 bg-brand-grey min-w-[2rem]"
      aria-label={`${count ?? 0} likes`}
    >
      <Heart className="w-4 h-4 shrink-0" />
      <span>{count ?? "—"}</span>
    </span>
  );
}
