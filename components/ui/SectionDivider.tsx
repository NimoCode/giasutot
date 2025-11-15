"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "default" | "wave" | "curve";
  className?: string;
}

export default function SectionDivider({
  variant = "default",
  className = "",
}: SectionDividerProps) {
  if (variant === "wave") {
    return (
      <div className={`relative w-full ${className}`}>
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,60 C300,100 600,20 900,60 C1050,80 1125,70 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`relative w-full ${className}`}>
        <svg
          className="w-full h-16 text-gradient-to-b from-white to-transparent"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#gradient)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9AA2" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#0087FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FF9AA2" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
    </div>
  );
}


