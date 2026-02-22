import { NewsEditor } from "@/components/admin/news-editor";
import { createArticle } from "../actions";

export default function NewArticlePage() {
  return (
    <NewsEditor
      mode="create"
      createAction={createArticle}
    />
  );
}
