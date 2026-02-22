-- Impact articles (stories with images)
CREATE TABLE IF NOT EXISTS impact_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  location TEXT NOT NULL DEFAULT '',
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_impact_articles_published_at ON impact_articles (published_at DESC);
CREATE INDEX IF NOT EXISTS idx_impact_articles_slug ON impact_articles (slug);

DROP TRIGGER IF EXISTS impact_articles_updated_at ON impact_articles;
CREATE TRIGGER impact_articles_updated_at
  BEFORE UPDATE ON impact_articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Impact videos (testimonials with video uploads)
CREATE TABLE IF NOT EXISTS impact_videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  quote TEXT NOT NULL,
  video_url TEXT NOT NULL,
  location TEXT NOT NULL DEFAULT '',
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_impact_videos_published_at ON impact_videos (published_at DESC);
CREATE INDEX IF NOT EXISTS idx_impact_videos_slug ON impact_videos (slug);

DROP TRIGGER IF EXISTS impact_videos_updated_at ON impact_videos;
CREATE TRIGGER impact_videos_updated_at
  BEFORE UPDATE ON impact_videos
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS
ALTER TABLE impact_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read impact_articles" ON impact_articles FOR SELECT USING (true);
CREATE POLICY "Public read impact_videos" ON impact_videos FOR SELECT USING (true);
