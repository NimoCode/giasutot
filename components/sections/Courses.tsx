"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import RegisterModal from "@/components/modals/RegisterModal";
import { useState } from "react";
import TiltCard from "@/components/ui/TiltCard";
import RippleButton from "@/components/ui/RippleButton";

const courses = [
  {
    id: "trial",
    name: "Gói học thử",
    price: "Miễn phí",
    duration: "1 buổi",
    features: [
      "1 buổi học thử miễn phí",
      "Đánh giá năng lực học sinh",
      "Tư vấn lộ trình học phù hợp",
      "Làm quen với phương pháp dạy",
    ],
    popular: false,
  },
  {
    id: "basic",
    name: "Gói cơ bản",
    price: "1.200.000đ",
    duration: "8 buổi/tháng",
    features: [
      "8 buổi học/tháng",
      "2 buổi/tuần, 90 phút/buổi",
      "Tài liệu học tập miễn phí",
      "Báo cáo tiến độ hàng tuần",
      "Hỗ trợ online ngoài giờ học",
    ],
    popular: true,
  },
  {
    id: "advanced",
    name: "Gói chuyên sâu",
    price: "2.000.000đ",
    duration: "12 buổi/tháng",
    features: [
      "12 buổi học/tháng",
      "3 buổi/tuần, 90 phút/buổi",
      "Tài liệu học tập miễn phí",
      "Báo cáo tiến độ hàng tuần",
      "Hỗ trợ online 24/7",
      "Luyện thi chứng chỉ quốc tế",
      "Video bài học để xem lại",
    ],
    popular: false,
  },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleRegister = (courseId: string) => {
    setSelectedCourse(courseId);
    setIsRegisterModalOpen(true);
  };

  return (
    <section id="khoa-hoc" ref={ref} className="section-container relative py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-50/30 to-transparent pointer-events-none" />
      
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-br from-primary-300/20 to-primary-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary-300/20 to-secondary-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-4xl">💎</span>
          </motion.div>
          <h2 className="heading-2 mb-4 relative inline-block">
            Gói học phù hợp với bạn
            <motion.span
              className="absolute -top-2 -right-8 text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⭐
            </motion.span>
          </h2>
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "140%" } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 px-4 sm:px-0">
            Chọn gói học phù hợp với nhu cầu và ngân sách của gia đình
          </p>
        </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {courses.map((course, index) => (
          <TiltCard
            key={course.id}
            intensity={course.popular ? 20 : 10}
            className="h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`card p-5 sm:p-6 md:p-8 relative h-full flex flex-col overflow-hidden group ${
                course.popular
                  ? "border-2 border-primary-500 lg:scale-105 shadow-xl"
                  : "border border-gray-100 hover:border-primary-200"
              }`}
            >
            {/* Popular badge with animation */}
            {course.popular && (
              <motion.div
                className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg z-20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="mr-1">🔥</span>
                Phổ biến nhất
              </motion.div>
            )}

            {/* Decorative gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${
              course.popular 
                ? 'from-primary-50/50 via-transparent to-secondary-50/30' 
                : 'from-gray-50/0 via-transparent to-gray-50/0 group-hover:from-primary-50/30 group-hover:via-transparent group-hover:to-secondary-50/20'
            } transition-all duration-300 pointer-events-none`} />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 shimmer" />
            </div>

            <div className="relative z-10 text-center mb-6">
              {/* Icon decoration */}
              <motion.div
                className="mb-4"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                <span className="text-4xl">
                  {index === 0 ? '🎁' : index === 1 ? '🚀' : '⭐'}
                </span>
              </motion.div>
              <h3 className="heading-3 mb-3 group-hover:text-primary-500 transition-colors">{course.name}</h3>
              <div className="relative inline-block">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                  {course.price}
                </div>
                {course.popular && (
                  <motion.div
                    className="absolute -top-1 -right-2 text-lg"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ✨
                  </motion.div>
                )}
              </div>
              <div className="text-sm text-gray-600 font-medium">{course.duration}</div>
            </div>
            <ul className="space-y-3 mb-8 relative z-10">
              {course.features.map((feature, idx) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                  className="flex items-start gap-3 group/feature"
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiCheck className="w-5 h-5 text-primary-500 group-hover/feature:text-primary-600 transition-colors" />
                  </motion.div>
                  <span className="text-gray-700 text-sm group-hover/feature:text-gray-900 transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <RippleButton
              onClick={() => handleRegister(course.id)}
              className={`w-full mt-auto ${
                course.popular ? "btn-primary" : "btn-secondary"
              } flex items-center justify-center gap-2`}
            >
              <span>Đăng ký ngay</span>
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
            </RippleButton>
            </motion.div>
          </TiltCard>
        ))}
      </div>
      </div>

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => {
          setIsRegisterModalOpen(false);
          setSelectedCourse(null);
        }}
        selectedCourse={selectedCourse}
      />
    </section>
  );
}


