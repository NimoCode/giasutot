"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Học phí là bao nhiêu?",
    answer:
      "Học phí phụ thuộc vào gói học bạn chọn và gia sư. Gói học thử miễn phí 1 buổi. Gói cơ bản từ 1.200.000đ/tháng (8 buổi), gói chuyên sâu từ 2.000.000đ/tháng (12 buổi). Học phí theo giờ dao động từ 180.000đ - 250.000đ tùy gia sư.",
  },
  {
    question: "Có thể học online không?",
    answer:
      "Có, nhiều gia sư của chúng tôi hỗ trợ cả hình thức học online và offline. Bạn có thể chọn hình thức phù hợp với nhu cầu của mình khi đăng ký.",
  },
  {
    question: "Làm thế nào để đăng ký học thử?",
    answer:
      "Bạn chỉ cần điền form đăng ký trên website, chọn gia sư và thời gian phù hợp. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để xác nhận và sắp xếp buổi học thử miễn phí.",
  },
  {
    question: "Gia sư có bằng cấp gì?",
    answer:
      "Tất cả gia sư của chúng tôi đều có bằng cấp liên quan (Cử nhân, Thạc sĩ) và kinh nghiệm giảng dạy từ 3 năm trở lên. Thông tin chi tiết về bằng cấp và kinh nghiệm được hiển thị trên trang cá nhân của từng gia sư.",
  },
  {
    question: "Có thể đổi gia sư nếu không phù hợp không?",
    answer:
      "Có, chúng tôi luôn sẵn sàng hỗ trợ bạn tìm gia sư phù hợp hơn nếu cảm thấy không hài lòng. Bạn có thể yêu cầu đổi gia sư bất cứ lúc nào.",
  },
  {
    question: "Học sinh ở độ tuổi nào có thể tham gia?",
    answer:
      "Chúng tôi nhận dạy học sinh từ 6-15 tuổi (từ lớp 1 đến lớp 9). Một số gia sư cũng nhận dạy học sinh THPT. Bạn có thể xem thông tin chi tiết về cấp độ mà từng gia sư dạy trên trang cá nhân của họ.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="section-container relative py-16 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-50/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
          style={{ willChange: "opacity, transform" }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="inline-block mb-4"
            style={{ willChange: "transform" }}
          >
            <span className="text-4xl">❓</span>
          </motion.div>
          <h2 className="heading-2 mb-4 relative inline-block">
            Câu hỏi thường gặp
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "110%" } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "width" }}
            />
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
            Tìm câu trả lời cho những thắc mắc phổ biến của bạn
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="card overflow-hidden group border border-gray-100 hover:border-primary-200"
            style={{ 
              transition: "border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform, opacity" 
            }}
          >
            {/* Left border accent */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-lg relative"
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center gap-4 flex-1">
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 text-sm font-bold"
                  animate={{
                    scale: openIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="heading-3 pr-4 group-hover:text-primary-600 transition-colors">{faq.question}</h3>
              </div>
              <motion.div
                className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors"
                animate={{ 
                  rotate: openIndex === index ? 180 : 0,
                  backgroundColor: openIndex === index ? "rgb(255, 154, 162)" : "rgb(254, 242, 242)",
                }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown className={`w-5 h-5 flex-shrink-0 transition-colors ${
                  openIndex === index ? "text-white" : "text-primary-500 group-hover:text-white"
                }`} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4 bg-gradient-to-b from-white to-primary-50/20">
                    <div className="flex items-start gap-3">
                      <span className="text-primary-400 text-xl flex-shrink-0 mt-1">💡</span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}


