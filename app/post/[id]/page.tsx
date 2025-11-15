import { notFound } from "next/navigation";
import postsData from "@/data/posts.json";
import PostDetail from "@/components/post/PostDetail";
import { generateMetadata } from "./metadata";

export { generateMetadata };

interface PostDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    id: post.id,
  }));
}

export default async function PostDetailPage({
  params,
}: PostDetailPageProps) {
  const { id } = await params;
  const post = postsData.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return <PostDetail post={post} />;
}

