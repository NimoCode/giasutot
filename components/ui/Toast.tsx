"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
}: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          className="fixed top-3 sm:top-4 left-1/2 z-50 transform -translate-x-1/2 max-w-[calc(100%-2rem)] sm:max-w-md"
        >
          <div
            className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-soft-lg ${
              type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {type === "success" ? (
              <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            ) : (
              <FiXCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            )}
            <span className="font-medium text-sm sm:text-base">{message}</span>
            <button
              onClick={onClose}
              className="ml-2 hover:opacity-70 transition-opacity"
              aria-label="Close toast"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

