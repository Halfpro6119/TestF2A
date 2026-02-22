import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { getImpactVideoBySlug } from "@/lib/impact";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const fingerprint = request.nextUrl.searchParams.get("fingerprint");

  const video = await getImpactVideoBySlug(slug);
  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  const supabase = createServerClient();

  const { count } = await supabase
    .from("impact_video_likes")
    .select("*", { count: "exact", head: true })
    .eq("video_id", video.id);

  let liked = false;
  if (fingerprint) {
    const { data } = await supabase
      .from("impact_video_likes")
      .select("id")
      .eq("video_id", video.id)
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

  const video = await getImpactVideoBySlug(slug);
  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  const supabase = createServerClient();

  const { data: existing } = await supabase
    .from("impact_video_likes")
    .select("id")
    .eq("video_id", video.id)
    .eq("user_fingerprint", fingerprint)
    .maybeSingle();

  if (existing) {
    await supabase
      .from("impact_video_likes")
      .delete()
      .eq("video_id", video.id)
      .eq("user_fingerprint", fingerprint);
  } else {
    await supabase.from("impact_video_likes").insert({
      video_id: video.id,
      user_fingerprint: fingerprint,
    });
  }

  const { count } = await supabase
    .from("impact_video_likes")
    .select("*", { count: "exact", head: true })
    .eq("video_id", video.id);

  return NextResponse.json({
    count: count ?? 0,
    liked: !existing,
  });
}
