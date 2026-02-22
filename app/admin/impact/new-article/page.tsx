import { ImpactArticleEditor } from "@/components/admin/impact-article-editor";
import { createImpactArticle } from "../actions";

export default function NewImpactArticlePage() {
  return (
    <ImpactArticleEditor mode="create" createAction={createImpactArticle} />
  );
}
