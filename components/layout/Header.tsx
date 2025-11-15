"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#gioi-thieu", label: "Giới thiệu" },
    { href: "#gia-su", label: "Gia sư" },
    { href: "#khoa-hoc", label: "Khóa học" },
    { href: "#bai-viet", label: "Bài viết" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-soft-lg border-b border-white/20"
          : "bg-transparent"
      }`}
      style={{
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "background-color, backdrop-filter, box-shadow",
      }}
    >
      <nav className={`container mx-auto ${
        isScrolled 
          ? "px-3 sm:px-4 lg:px-6" 
          : "px-4 sm:px-6 lg:px-8"
      }`}
      style={{
        transition: "padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "padding",
      }}
      >
        <div className={`flex items-center justify-between ${
          isScrolled ? "py-1.5" : "py-4"
        }`}
        style={{
          transition: "padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "padding",
        }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group">
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-200 to-primary-500 rounded-full flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-bold text-base sm:text-xl">GS</span>
            </motion.div>
            <motion.span
              className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hidden sm:inline">Gia Sư </span><span className="text-primary-500">Tiếng Anh</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-primary-500 font-medium text-sm lg:text-base relative"
                style={{
                  transition: "color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "color, transform",
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ willChange: "width" }}
                />
              </motion.a>
            ))}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="#dang-ky"
                onClick={(e) => handleNavClick(e, "#dang-ky")}
                className="btn-primary"
              >
                Đăng ký học thử
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden pb-4"
              style={{ willChange: "opacity, height" }}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-700 hover:text-primary-500 font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  href="#dang-ky"
                  onClick={(e) => handleNavClick(e, "#dang-ky")}
                  className="btn-primary text-center"
                >
                  Đăng ký học thử
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}


