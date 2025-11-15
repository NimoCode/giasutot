"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TutorCarousel from "@/components/tutor/TutorCarousel";
import tutorsData from "@/data/tutors.json";

export default function Tutors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gia-su" ref={ref} className="section-container relative py-16 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-primary-50/20 to-white/50 pointer-events-none" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-pattern-dots pointer-events-none" />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-secondary-200/30 to-secondary-400/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary-200/30 to-primary-400/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
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
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-4xl">👨‍🏫</span>
          </motion.div>
          <h2 className="heading-2 mb-4 relative inline-block">
            Đội ngũ gia sư của chúng tôi
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "120%" } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
            Những giáo viên tận tâm, có kinh nghiệm và phương pháp dạy phù hợp với trẻ em
          </p>
        </motion.div>

        <TutorCarousel tutors={tutorsData} />
      </div>
    </section>
  );
}


