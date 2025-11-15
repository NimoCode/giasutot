import { MetadataRoute } from "next";
import tutorsData from "@/data/tutors.json";
import postsData from "@/data/posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://giasutienganh.vn"; // Thay đổi URL thực tế

  const tutorPages = tutorsData.map((tutor) => ({
    url: `${baseUrl}/tutor/${tutor.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postPages = postsData.map((post) => ({
    url: `${baseUrl}/post/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...tutorPages,
    ...postPages,
  ];
}


