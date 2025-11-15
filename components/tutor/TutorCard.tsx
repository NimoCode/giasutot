"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiStar, FiMapPin } from "react-icons/fi";
import type { Tutor } from "@/types";
import TiltCard from "@/components/ui/TiltCard";

interface TutorCardProps {
  tutor: Tutor;
}

export default function TutorCard({ tutor }: TutorCardProps) {
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
    <TiltCard className="h-full">
      <motion.div
        whileHover={{ y: -8 }}
        className="card p-4 sm:p-5 md:p-6 h-full flex flex-col"
      >
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-primary-200 to-primary-500 flex items-center justify-center overflow-hidden">
          {shouldShowImage && avatarUrl ? (
            <img
              src={avatarUrl}
              alt={tutor.name}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-3xl sm:text-4xl text-white">
              {tutor.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 bg-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-soft text-xs font-semibold text-primary-500">
          {tutor.rating.toFixed(1)} ⭐
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 text-center mb-4">
        <h3 className="heading-3 mb-2">{tutor.name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {tutor.subjects.join(", ")}
        </p>
        <p className="text-xs text-gray-500 mb-3">{tutor.short_bio}</p>
        <div className="flex items-center justify-center gap-4 text-xs text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <FiMapPin className="w-4 h-4" />
            {tutor.location}
          </span>
          <span>{tutor.teaching_experience_years} năm kinh nghiệm</span>
        </div>
        <div className="flex flex-wrap gap-1 justify-center mb-3">
          {tutor.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg font-bold text-primary-500 mb-4">
          {formatPrice(tutor.price_per_hour)}/giờ
        </p>
      </div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={`/tutor/${tutor.id}`}
          className="btn-secondary w-full text-center block"
        >
          Xem chi tiết
        </Link>
      </motion.div>
      </motion.div>
    </TiltCard>
  );
}


