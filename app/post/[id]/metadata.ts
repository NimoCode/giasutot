import { Metadata } from "next";
import postsData from "@/data/posts.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = postsData.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Bài viết không tìm thấy",
    };
  }

  return {
    title: `${post.title} | Gia Sư Tiếng Anh`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}


