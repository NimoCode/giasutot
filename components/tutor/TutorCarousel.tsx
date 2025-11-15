"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TutorCard from "./TutorCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Tutor } from "@/types";

interface TutorCarouselProps {
  tutors: Tutor[];
}

export default function TutorCarousel({ tutors }: TutorCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(itemsPerView.tablet);
      } else {
        setItemsPerPage(itemsPerView.desktop);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, tutors.length - itemsPerPage);

  useEffect(() => {
    if (isAutoPlaying && tutors.length > itemsPerPage) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex, tutors.length, itemsPerPage]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const visibleTutors = tutors.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      <div
        className="flex gap-4 sm:gap-6 overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 sm:gap-6 w-full"
          >
            {visibleTutors.map((tutor) => (
              <div
                key={tutor.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              >
                <TutorCard tutor={tutor} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {tutors.length > itemsPerPage && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 lg:-translate-x-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-soft-lg flex items-center justify-center hover:bg-primary-50 transition-colors z-10"
            aria-label="Previous tutor"
          >
            <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 lg:translate-x-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-soft-lg flex items-center justify-center hover:bg-primary-50 transition-colors z-10"
            aria-label="Next tutor"
          >
            <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {tutors.length > itemsPerPage && (
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary-500 w-6 sm:w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}


