-- Impact article likes
CREATE TABLE IF NOT EXISTS impact_article_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID NOT NULL REFERENCES impact_articles(id) ON DELETE CASCADE,
  user_fingerprint TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(article_id, user_fingerprint)
);

CREATE INDEX IF NOT EXISTS idx_impact_article_likes_article ON impact_article_likes(article_id);

-- Impact article comments
CREATE TABLE IF NOT EXISTS impact_article_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID NOT NULL REFERENCES impact_articles(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_impact_article_comments_article ON impact_article_comments(article_id);
CREATE INDEX IF NOT EXISTS idx_impact_article_comments_created ON impact_article_comments(created_at DESC);

-- Impact video likes
CREATE TABLE IF NOT EXISTS impact_video_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id UUID NOT NULL REFERENCES impact_videos(id) ON DELETE CASCADE,
  user_fingerprint TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(video_id, user_fingerprint)
);

CREATE INDEX IF NOT EXISTS idx_impact_video_likes_video ON impact_video_likes(video_id);

-- Impact video comments
CREATE TABLE IF NOT EXISTS impact_video_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id UUID NOT NULL REFERENCES impact_videos(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_impact_video_comments_video ON impact_video_comments(video_id);
CREATE INDEX IF NOT EXISTS idx_impact_video_comments_created ON impact_video_comments(created_at DESC);

-- RLS
ALTER TABLE impact_article_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_article_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_video_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_video_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read impact_article_likes" ON impact_article_likes FOR SELECT USING (true);
CREATE POLICY "Public read impact_article_comments" ON impact_article_comments FOR SELECT USING (true);
CREATE POLICY "Public read impact_video_likes" ON impact_video_likes FOR SELECT USING (true);
CREATE POLICY "Public read impact_video_comments" ON impact_video_comments FOR SELECT USING (true);
