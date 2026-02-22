import { ImpactVideoEditor } from "@/components/admin/impact-video-editor";
import { createImpactVideo } from "../actions";

export default function NewImpactVideoPage() {
  return (
    <ImpactVideoEditor mode="create" createAction={createImpactVideo} />
  );
}
