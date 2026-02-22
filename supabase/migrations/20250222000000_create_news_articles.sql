-- News articles table for Footprints 2 Africa
CREATE TABLE IF NOT EXISTS news_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for listing by date
CREATE INDEX IF NOT EXISTS idx_news_articles_published_at ON news_articles (published_at DESC);

-- Index for slug lookup
CREATE INDEX IF NOT EXISTS idx_news_articles_slug ON news_articles (slug);

-- Trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS news_articles_updated_at ON news_articles;
CREATE TRIGGER news_articles_updated_at
  BEFORE UPDATE ON news_articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Storage: Create bucket "news-images" (public) in Supabase Dashboard > Storage. See supabase/README.md.

-- RLS: Allow public read, restrict write to service role (admin uses service role)
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON news_articles
  FOR SELECT USING (true);
