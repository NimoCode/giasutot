import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import postsData from "@/data/posts.json";

export default function PostsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-container py-12">
        <Link
          href="/#bai-viet"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Quay lại trang chủ</span>
        </Link>

        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Tất cả bài viết</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Các mẹo học tập, phương pháp dạy và thông tin hữu ích cho phụ huynh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsData.map((post) => (
            <article
              key={post.id}
              className="card p-6 hover:scale-105 transition-transform"
            >
              <h2 className="heading-3 mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </span>
                <span className="flex items-center gap-1">
                  <FiUser className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
              <Link
                href={`/post/${post.id}`}
                className="text-primary-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Đọc thêm
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


