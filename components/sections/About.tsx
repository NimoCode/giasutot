"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiBook, FiUsers, FiAward, FiShield } from "react-icons/fi";
import DecorativeShapes from "@/components/ui/DecorativeShapes";

const features = [
  {
    icon: FiBook,
    title: "Phương pháp hiện đại",
    description: "Áp dụng phương pháp dạy học tương tác, vui nhộn, phù hợp với trẻ em",
  },
  {
    icon: FiUsers,
    title: "Giáo viên chuyên nghiệp",
    description: "Đội ngũ gia sư có kinh nghiệm, bằng cấp và tận tâm với học sinh",
  },
  {
    icon: FiAward,
    title: "Kết quả rõ ràng",
    description: "Hơn 90% học sinh cải thiện điểm số và tự tin giao tiếp sau 3 tháng",
  },
  {
    icon: FiShield,
    title: "An toàn & Tin cậy",
    description: "Môi trường học tập an toàn, phụ huynh có thể theo dõi tiến độ",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gioi-thieu" ref={ref} className="section-container relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent pointer-events-none" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-primary-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary-200/20 to-secondary-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16 relative z-10"
        style={{ willChange: "opacity, transform" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
          className="inline-block mb-4"
          style={{ willChange: "transform" }}
        >
          <span className="text-4xl">✨</span>
        </motion.div>
        <h2 className="heading-2 mb-4 relative">
          Tại sao chọn chúng tôi?
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "width" }}
            />
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
          Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất cho con em bạn
        </p>
      </motion.div>

      {/* Decorative shapes */}
      <DecorativeShapes className="z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="card p-4 sm:p-5 md:p-6 text-center group cursor-pointer relative overflow-hidden border-2 border-transparent hover:border-primary-200"
              style={{ 
                transition: "border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform, opacity" 
              }}
            >
              {/* Hover gradient effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/50 group-hover:via-transparent group-hover:to-secondary-50/50 pointer-events-none"
                style={{ transition: "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)", willChange: "background" }}
              />
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-200/0 to-primary-300/0 group-hover:from-primary-200/20 group-hover:to-primary-300/10 rounded-bl-full transition-all duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 relative shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-white relative z-10" />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary-400 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                </motion.div>
                <h3 className="heading-3 mb-2 group-hover:text-primary-500 transition-colors relative">
                  {feature.title}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"
                  />
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


