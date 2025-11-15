"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import postsData from "@/data/posts.json";
import TiltCard from "@/components/ui/TiltCard";

export default function Posts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const displayedPosts = postsData.slice(0, 3);

  return (
    <section id="bai-viet" ref={ref} className="section-container relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-secondary-50/30 to-white/50 pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-4xl">📰</span>
          </motion.div>
          <h2 className="heading-2 mb-4 relative inline-block">
            Bài viết & Tin tức
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "130%" } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Các mẹo học tập, phương pháp dạy và thông tin hữu ích cho phụ huynh
          </p>
        </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {displayedPosts.map((post, index) => (
          <TiltCard key={post.id} className="h-full">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card p-4 sm:p-5 md:p-6 h-full flex flex-col group relative overflow-hidden border border-gray-100 hover:border-primary-200 transition-all duration-300"
            >
            {/* Decorative gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-transparent to-secondary-50/0 group-hover:from-primary-50/50 group-hover:to-secondary-50/30 transition-all duration-300 pointer-events-none" />
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                {index === 0 ? '📝' : index === 1 ? '💡' : '🎓'}
              </span>
              <h3 className="heading-3 line-clamp-2 group-hover:text-primary-500 transition-colors">{post.title}</h3>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors">{post.excerpt}</p>
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
            <motion.div whileHover={{ x: 5 }}>
              <Link
                href={`/post/${post.id}`}
                className="text-primary-500 font-semibold flex items-center gap-2 transition-all group"
              >
                Đọc thêm
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
            </div>
            </motion.article>
          </TiltCard>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/posts"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Xem tất cả bài viết
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}


