"use client";

import { motion } from "framer-motion";
import { FiBook, FiStar, FiHeart } from "react-icons/fi";

const floatingIcons = [
  { icon: FiBook, delay: 0, duration: 4 },
  { icon: FiStar, delay: 1, duration: 5 },
  { icon: FiHeart, delay: 2, duration: 6 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 9 }).map((_, i) => {
        const iconIndex = i % floatingIcons.length;
        const { icon: Icon, delay, duration } = floatingIcons[iconIndex];
        const size = 24 + (i % 3) * 8;
        const left = (i * 11) % 100;
        const top = (i * 15) % 100;
        
        return (
          <motion.div
            key={i}
            className="absolute text-primary-300 opacity-20"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + i * 0.2,
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
}


