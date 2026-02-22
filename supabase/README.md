# Supabase Setup for News & Impact Sections

## 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) and create a new project.

## 2. Run the migrations

In the Supabase Dashboard, go to **SQL Editor** and run each migration in order:

1. `migrations/20250222000000_create_news_articles.sql`
2. `migrations/20250222000001_news_likes_comments.sql`
3. `migrations/20250222000002_create_impact_articles_videos.sql`
4. `migrations/20250222000003_impact_likes_comments.sql`

## 3. Create the storage buckets

1. Go to **Storage** in the Supabase Dashboard
2. Create these buckets (each **Public** so content can be displayed):
   - `news-images` – news article images
   - `impact-images` – impact article images
   - `impact-videos` – impact video testimonials

## 4. Storage policies (optional)

If you need to restrict uploads, configure policies in Storage for each bucket. By default, the service role key bypasses RLS for uploads.

## 5. Environment variables

Add to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_SECRET=your-secure-admin-password
```

Find these in Supabase Dashboard > Project Settings > API.
