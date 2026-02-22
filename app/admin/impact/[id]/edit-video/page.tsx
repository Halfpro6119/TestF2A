import { notFound } from "next/navigation";
import { ImpactVideoEditor } from "@/components/admin/impact-video-editor";
import { getImpactVideoById } from "@/lib/impact";
import {
  updateImpactVideo,
  noOpCreateVideo,
} from "../../actions";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditImpactVideoPage({ params }: PageProps) {
  const { id } = await params;
  const video = await getImpactVideoById(id);

  if (!video) {
    notFound();
  }

  return (
    <ImpactVideoEditor
      video={video}
      mode="edit"
      createAction={noOpCreateVideo}
      updateAction={updateImpactVideo}
    />
  );
}
