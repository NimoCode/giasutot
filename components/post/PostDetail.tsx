"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiCalendar, FiUser, FiArrowLeft } from "react-icons/fi";
import type { Post } from "@/types";

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="min-h-screen pt-20">
      <article className="section-container max-w-4xl mx-auto py-12">
        <Link
          href="/#bai-viet"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Quay lại danh sách bài viết</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8 md:p-12"
        >
          <header className="mb-8">
            <h1 className="heading-1 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <FiCalendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString("vi-VN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <FiUser className="w-5 h-5" />
                {post.author}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed">
              {post.contentMarkdown.split("\n").map((line, index) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold mt-8 mb-4 text-gray-900 first:mt-0"
                    >
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold mt-6 mb-3 text-gray-900"
                    >
                      {line.replace("### ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("#### ")) {
                  return (
                    <h4
                      key={index}
                      className="text-lg font-semibold mt-4 mb-2 text-gray-900"
                    >
                      {line.replace("#### ", "")}
                    </h4>
                  );
                }
                if (line.trim().startsWith("- ")) {
                  return (
                    <li key={index} className="ml-6 list-disc mb-2">
                      {line.replace(/^-\s*/, "")}
                    </li>
                  );
                }
                if (line.trim() === "") {
                  return <br key={index} className="mb-2" />;
                }
                return (
                  <p key={index} className="mb-4">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}

