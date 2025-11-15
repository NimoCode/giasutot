"use client";

import { motion } from "framer-motion";

interface DecorativeShapesProps {
  className?: string;
}

export default function DecorativeShapes({ className = "" }: DecorativeShapesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated Circles */}
      <motion.div
        className="absolute top-10 right-10 sm:top-20 sm:right-20 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full opacity-20 blur-2xl hidden sm:block"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-16 left-12 sm:bottom-32 sm:left-24 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-full opacity-20 blur-2xl hidden sm:block"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Dots Pattern */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-400 rounded-full opacity-30 hidden md:block"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

