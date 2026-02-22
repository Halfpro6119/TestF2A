import { notFound } from "next/navigation";
import { ImpactArticleEditor } from "@/components/admin/impact-article-editor";
import { getImpactArticleById } from "@/lib/impact";
import {
  updateImpactArticle,
  noOpCreateArticle,
} from "../../actions";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditImpactArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = await getImpactArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <ImpactArticleEditor
      article={article}
      mode="edit"
      createAction={noOpCreateArticle}
      updateAction={updateImpactArticle}
    />
  );
}
