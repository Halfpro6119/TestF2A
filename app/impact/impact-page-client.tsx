"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, FileText } from "lucide-react";
import { ImpactArticleCard } from "@/components/impact-article-card";
import { ImpactVideoCard } from "@/components/impact-video-card";
import type { ImpactArticle, ImpactVideo } from "@/lib/impact";
import { PageHero } from "@/components/page-hero";
import { ScrollRevealSection } from "@/components/scroll-reveal-section";

interface ImpactPageClientProps {
  articles: ImpactArticle[];
  videos: ImpactVideo[];
}

export function ImpactPageClient({
  articles,
  videos,
}: ImpactPageClientProps) {
  return (
    <main id="main">
      <section className="px-4 sm:px-6 lg:px-8 bg-brand-grey">
        <PageHero
          backHref="/"
          backLabel="Back to home"
          heading="Our Impact"
          description="Explore how Footprints to Africa is making a difference. Watch video testimonials and read stories from those whose lives have been transformed by access to essential ostomy supplies."
        />
      </section>

      <ScrollRevealSection className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="space-y-12">
                {videos.length > 0 && (
                  <div>
                    <h2 className="heading-display text-2xl font-bold text-gray-900 mb-6">
                      Video Testimonials
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {videos.map((video) => (
                        <ImpactVideoCard key={video.id} video={video} />
                      ))}
                    </div>
                  </div>
                )}
                {articles.length > 0 && (
                  <div>
                    <h2 className="heading-display text-2xl font-bold text-gray-900 mb-6">
                      Impact Stories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {articles.map((article) => (
                        <ImpactArticleCard
                          key={article.id}
                          article={article}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {videos.length === 0 && articles.length === 0 && (
                  <div className="text-center py-16 bg-gray-50 rounded-xl">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">No impact content yet</p>
                    <p className="text-sm text-gray-500">
                      Check back soon for video testimonials and impact stories.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              {videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {videos.map((video) => (
                    <ImpactVideoCard key={video.id} video={video} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                  <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No video testimonials yet</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="articles" className="mt-0">
              {articles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {articles.map((article) => (
                    <ImpactArticleCard
                      key={article.id}
                      article={article}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No impact stories yet</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </ScrollRevealSection>
    </main>
  );
}
