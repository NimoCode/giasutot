"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import ContactForm from "./ContactForm";
import type { Tutor } from "@/types";

interface TutorDetailProps {
  tutor: Tutor;
}

export default function TutorDetail({ tutor }: TutorDetailProps) {
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const shouldShowImage = tutor.avatar && !imageError;
  const avatarUrl = tutor.avatar || undefined;

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-secondary-50 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Avatar & Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary-200 to-primary-500 flex items-center justify-center overflow-hidden mb-4 sm:mb-6">
              {shouldShowImage && avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={tutor.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-4xl sm:text-5xl md:text-6xl text-white">
                  {tutor.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">{tutor.name}</h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < Math.floor(tutor.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-base sm:text-lg font-semibold text-gray-700">
                {tutor.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-lg sm:text-xl text-primary-500 font-bold mb-4 sm:mb-6">
              {formatPrice(tutor.price_per_hour)}/giờ
            </p>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="card p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary-500 mb-1">
                {tutor.teaching_experience_years}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Năm kinh nghiệm</div>
            </div>
            <div className="card p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary-500 mb-1">
                {tutor.subjects.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Môn học</div>
            </div>
            <div className="card p-3 sm:p-4 text-center col-span-2">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-semibold">{tutor.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-4 sm:p-5 md:p-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Giới thiệu</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                {tutor.long_bio}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-4 sm:p-5 md:p-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Học vấn</h2>
              <p className="text-sm sm:text-base text-gray-700">{tutor.education}</p>
            </motion.div>

            {/* Subjects & Levels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-4 sm:p-5 md:p-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Môn học & Cấp độ</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Môn học:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Cấp độ:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary-100 text-secondary-700 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-4 sm:p-5 md:p-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Đặc điểm</h2>
              <div className="flex flex-wrap gap-2">
                {tutor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="card p-4 sm:p-5 md:p-6"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <FiClock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
                Lịch học
              </h2>
              <ul className="space-y-2">
                {tutor.availability.map((slot, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                    {slot}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              id="contact-form"
            >
              <ContactForm tutorId={tutor.id} tutorName={tutor.name} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


