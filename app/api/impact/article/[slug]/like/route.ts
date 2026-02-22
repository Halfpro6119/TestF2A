import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { getImpactArticleBySlug } from "@/lib/impact";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const fingerprint = request.nextUrl.searchParams.get("fingerprint");

  const article = await getImpactArticleBySlug(slug);
  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  const supabase = createServerClient();

  const { count } = await supabase
    .from("impact_article_likes")
    .select("*", { count: "exact", head: true })
    .eq("article_id", article.id);

  let liked = false;
  if (fingerprint) {
    const { data } = await supabase
      .from("impact_article_likes")
      .select("id")
      .eq("article_id", article.id)
      .eq("user_fingerprint", fingerprint)
      .maybeSingle();
    liked = !!data;
  }

  return NextResponse.json({ count: count ?? 0, liked });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  let body: { fingerprint?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const fingerprint = body.fingerprint;
  if (!fingerprint || typeof fingerprint !== "string") {
    return NextResponse.json(
      { error: "Fingerprint required" },
      { status: 400 }
    );
  }

  const article = await getImpactArticleBySlug(slug);
  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  const supabase = createServerClient();

  const { data: existing } = await supabase
    .from("impact_article_likes")
    .select("id")
    .eq("article_id", article.id)
    .eq("user_fingerprint", fingerprint)
    .maybeSingle();

  if (existing) {
    await supabase
      .from("impact_article_likes")
      .delete()
      .eq("article_id", article.id)
      .eq("user_fingerprint", fingerprint);
  } else {
    await supabase.from("impact_article_likes").insert({
      article_id: article.id,
      user_fingerprint: fingerprint,
    });
  }

  const { count } = await supabase
    .from("impact_article_likes")
    .select("*", { count: "exact", head: true })
    .eq("article_id", article.id);

  return NextResponse.json({
    count: count ?? 0,
    liked: !existing,
  });
}
