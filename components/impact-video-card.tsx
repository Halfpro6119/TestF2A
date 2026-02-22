"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { MapPin, Play } from "lucide-react";
import { ImpactVideoLikeCountBadge } from "@/components/impact/video-like-count-badge";
import type { ImpactVideo } from "@/lib/impact";

interface ImpactVideoCardProps {
  video: ImpactVideo;
}

export function ImpactVideoCard({ video }: ImpactVideoCardProps) {
  const formattedDate = new Date(video.published_at).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <Link href={`/impact/video/${video.slug}`} className="block h-full group">
      <Card className="overflow-hidden transition-all duration-300 cursor-pointer border-2 hover:shadow-lg hover:border-brand-blue/30 border-gray-200 h-full flex flex-col hover:scale-[1.02]">
        <div className="relative w-full aspect-video bg-brand-grey overflow-hidden">
          <video
            src={video.video_url}
            preload="metadata"
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-300"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Play
              className="w-14 h-14 text-white drop-shadow-md"
              fill="currentColor"
            />
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-navy transition-colors">
            {video.name}
          </h3>
          <div className="flex items-center gap-3 mb-3 min-h-[1.5rem] flex-wrap">
            {video.location && (
              <span className="legend-text-sm text-brand-navy flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {video.location}
              </span>
            )}
            <time
              dateTime={video.published_at}
              className="legend-text-sm text-gray-500"
            >
              {formattedDate}
            </time>
            <ImpactVideoLikeCountBadge videoSlug={video.slug} />
          </div>
          <p className="text-gray-700 text-sm italic mb-4 flex-1 line-clamp-2">
            &ldquo;{video.quote}&rdquo;
          </p>
          <span className="text-brand-navy font-medium text-sm group-hover:text-brand-navy-light transition-colors inline-flex items-center gap-1 w-fit">
            Watch video →
          </span>
        </div>
      </Card>
    </Link>
  );
}
