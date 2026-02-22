-- Likes: one row per (article, user fingerprint)
CREATE TABLE IF NOT EXISTS news_article_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID NOT NULL REFERENCES news_articles(id) ON DELETE CASCADE,
  user_fingerprint TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(article_id, user_fingerprint)
);

CREATE INDEX IF NOT EXISTS idx_news_likes_article ON news_article_likes(article_id);

-- Comments
CREATE TABLE IF NOT EXISTS news_article_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID NOT NULL REFERENCES news_articles(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_news_comments_article ON news_article_comments(article_id);
CREATE INDEX IF NOT EXISTS idx_news_comments_created ON news_article_comments(created_at DESC);

-- RLS: public read for both
ALTER TABLE news_article_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_article_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read likes" ON news_article_likes FOR SELECT USING (true);
CREATE POLICY "Public read comments" ON news_article_comments FOR SELECT USING (true);
