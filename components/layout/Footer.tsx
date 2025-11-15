"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiFacebook, FiInstagram, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-auto relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-pattern-grid pointer-events-none" />

      <div className="section-container py-8 sm:py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-primary-400">🌟</span>
              Về chúng tôi
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Dịch vụ gia sư tiếng Anh chuyên nghiệp, tận tâm với phương pháp
              dạy hiện đại, phù hợp với trẻ em Việt Nam.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-primary-400">🔗</span>
              Liên kết nhanh
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#gioi-thieu", label: "Giới thiệu" },
                { href: "#gia-su", label: "Gia sư" },
                { href: "#khoa-hoc", label: "Khóa học" },
                { href: "#bai-viet", label: "Bài viết" },
              ].map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-primary-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-primary-400">📞</span>
              Liên hệ
            </h3>
            <ul className="space-y-3 text-sm">
              <motion.li
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiMail className="w-5 h-5" />
                </motion.div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-xs sm:text-sm break-all">
                  contact@giasutienganh.vn
                </span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiPhone className="w-5 h-5" />
                </motion.div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-xs sm:text-sm">
                  0900 123 456
                </span>
              </motion.li>
              <li className="flex items-center space-x-4 mt-4">
                {[
                  { icon: FiFacebook, label: "Facebook", href: "#" },
                  { icon: FiInstagram, label: "Instagram", href: "#" },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all shadow-lg hover:shadow-primary-500/50"
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Legal Notice */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-gray-700" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-400"
            >
              <FiHeart className="w-4 h-4" />
            </motion.div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-700 to-gray-700" />
          </div>
          <p className="text-xs text-gray-500 text-center leading-relaxed mb-4">
            <strong className="text-gray-400">Lưu ý:</strong> Nếu hoạt động dạy thu phí, có thể cần đăng
            ký kinh doanh theo quy định của Việt Nam. Thông tin này chỉ mang
            tính gợi ý, vui lòng kiểm tra luật hiện hành.
          </p>
          <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} Gia Sư Tiếng Anh.</span>
            <span className="text-primary-400">Made with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-400"
            >
              ❤️
            </motion.span>
            <span>All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}


