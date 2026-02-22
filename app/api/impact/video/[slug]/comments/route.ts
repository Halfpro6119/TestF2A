import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { getImpactVideoBySlug } from "@/lib/impact";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const video = await getImpactVideoBySlug(slug);
  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("impact_video_comments")
    .select("*")
    .eq("video_id", video.id)
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

  const video = await getImpactVideoBySlug(slug);
  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("impact_video_comments")
    .insert({
      video_id: video.id,
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
