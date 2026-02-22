import { notFound } from "next/navigation";
import { NewsEditor } from "@/components/admin/news-editor";
import { getArticleById } from "@/lib/news";
import { updateArticle, noOpCreateAction } from "../../actions";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <NewsEditor
      article={article}
      mode="edit"
      createAction={noOpCreateAction}
      updateAction={updateArticle}
    />
  );
}
