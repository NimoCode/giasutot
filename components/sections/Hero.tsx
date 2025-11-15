"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import RegisterModal from "@/components/modals/RegisterModal";
import { useState, useRef } from "react";
import RippleButton from "@/components/ui/RippleButton";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          className="absolute top-10 left-5 sm:top-20 sm:left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-gradient-to-br from-primary-200 to-primary-500 rounded-full opacity-10 blur-3xl"
                animate={{ 
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1],
                }}
                style={{ willChange: "transform" }}
        />
        <motion.div
          className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-full opacity-10 blur-3xl"
                animate={{
                  x: [0, -40, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1],
                }}
                style={{ willChange: "transform" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-accent-300 to-accent-500 rounded-full opacity-[0.08] blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ willChange: "transform" }}
        />
      </motion.div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ y, willChange: "transform, opacity" }}
          >
            <motion.h1
              className="heading-1 mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "opacity, transform" }}
            >
              Học tiếng Anh vui vẻ,{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-[length:200%_auto]"
                animate={{
                  backgroundPosition: ["0%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                hiệu quả
              </motion.span>{" "}
              cùng gia sư chuyên nghiệp
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "opacity, transform" }}
            >
              Phương pháp dạy hiện đại, tương tác cao, phù hợp với trẻ em Việt
              Nam. Đăng ký học thử miễn phí ngay hôm nay!
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "opacity, transform" }}
            >
              <RippleButton
                onClick={() => setIsRegisterModalOpen(true)}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Đăng ký học thử</span>
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
              <MagneticButton
                className="btn-secondary flex items-center justify-center space-x-2"
                onClick={() => {
                  const element = document.querySelector("#gia-su");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FiPlay className="w-5 h-5" />
                <span>Xem gia sư</span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ y, opacity, willChange: "transform, opacity" }}
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] px-4 sm:px-0">
              {/* Main illustration card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-100 rounded-2xl sm:rounded-3xl shadow-soft-lg border border-white/50 overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #FF9AA2 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
                
                {/* Main content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.6, 1],
                  }}
                  style={{ willChange: "transform" }}
                >
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl relative">
                      <motion.span
                        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-xl sm:text-2xl lg:text-4xl"
                        animate={{ 
                          rotate: [0, 20, -20, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: [0.4, 0, 0.6, 1],
                        }}
                        style={{ willChange: "transform" }}
                      >
                        ✨
                      </motion.span>
                      📚
                      <motion.span
                        className="absolute -bottom-1 -left-2 sm:-bottom-2 sm:-left-4 text-xl sm:text-2xl lg:text-4xl"
                        animate={{ 
                          rotate: [0, -15, 15, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: [0.4, 0, 0.6, 1],
                        }}
                        style={{ willChange: "transform" }}
                      >
                        🌟
                      </motion.span>
                    </div>
                  </motion.div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 via-transparent to-secondary-500/5 pointer-events-none" />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-5 -right-5 sm:-top-10 sm:-right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full shadow-soft-lg border-2 sm:border-4 border-white/50 hidden sm:block"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
                  📖
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-5 -left-5 sm:-bottom-10 sm:-left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-full shadow-soft-lg border-2 sm:border-4 border-white/50 hidden sm:block"
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [360, 180, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
                  🎓
                </div>
              </motion.div>

              {/* Additional small floating elements */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${
                    i === 0 ? 'bg-accent-300 top-1/4 left-0' :
                    i === 1 ? 'bg-primary-200 bottom-1/3 right-0' :
                    'bg-secondary-200 top-2/3 right-1/4'
                  } shadow-soft opacity-60 hidden md:block`}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.7,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </section>
  );
}


