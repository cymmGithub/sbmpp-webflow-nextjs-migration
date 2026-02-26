import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { announcements } from "@/lib/data/announcements";
import { ArticleContent } from "./ArticleContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [{ slug: "jubileusz" }, { slug: "nowy-rok-2026" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = announcements.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Nie znaleziono" };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = announcements.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedSlugs
    .map((relSlug) => announcements.find((a) => a.slug === relSlug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  return <ArticleContent article={article} relatedArticles={relatedArticles} />;
}
