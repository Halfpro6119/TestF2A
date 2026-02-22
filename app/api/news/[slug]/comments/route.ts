import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { getArticleBySlug } from "@/lib/news";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);
  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("news_article_comments")
    .select("*")
    .eq("article_id", article.id)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ comments: data ?? [] });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  let body: { author_name?: string; content?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const authorName = body.author_name?.trim();
  const content = body.content?.trim();

  if (!authorName || authorName.length < 2) {
    return NextResponse.json(
      { error: "Please enter your name (at least 2 characters)" },
      { status: 400 }
    );
  }

  if (!content || content.length < 3) {
    return NextResponse.json(
      { error: "Please enter a comment (at least 3 characters)" },
      { status: 400 }
    );
  }

  if (authorName.length > 100) {
    return NextResponse.json(
      { error: "Name is too long" },
      { status: 400 }
    );
  }

  if (content.length > 2000) {
    return NextResponse.json(
      { error: "Comment is too long" },
      { status: 400 }
    );
  }

  const article = await getArticleBySlug(slug);
  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("news_article_comments")
    .insert({
      article_id: article.id,
      author_name: authorName,
      content,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ comment: data });
}
