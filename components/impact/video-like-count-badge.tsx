"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface ImpactVideoLikeCountBadgeProps {
  videoSlug: string;
}

export function ImpactVideoLikeCountBadge({
  videoSlug,
}: ImpactVideoLikeCountBadgeProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/impact/video/${videoSlug}/like`)
      .then((res) => res.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => setCount(0));
  }, [videoSlug]);

  return (
    <span
      className="inline-flex items-center gap-1 text-sm text-gray-500 rounded-full px-2 py-0.5 bg-gray-100 min-w-[2rem]"
      aria-label={`${count ?? 0} likes`}
    >
      <Heart className="w-4 h-4 shrink-0" />
      <span>{count ?? "—"}</span>
    </span>
  );
}
