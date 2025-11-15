"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiUser, FiPhone, FiCalendar } from "react-icons/fi";
import Toast from "@/components/ui/Toast";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string | null;
  tutorId?: string | null;
  tutorName?: string | null;
}

export default function RegisterModal({
  isOpen,
  onClose,
  selectedCourse,
  tutorId,
  tutorName,
}: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    parentPhone: "",
    studentAge: "",
    subject: "",
    preferredTime: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Họ tên phụ huynh là bắt buộc";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Họ tên phải có ít nhất 2 ký tự";
    }

    // Validate phone
    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = "Số điện thoại là bắt buộc";
    } else {
      const phoneRegex = /^(0|\+84)[1-9][0-9]{8,9}$/;
      const cleanPhone = formData.parentPhone.replace(/\s/g, "");
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.parentPhone = "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam (ví dụ: 0900123456)";
      }
    }

    // Validate student age
    if (!formData.studentAge) {
      newErrors.studentAge = "Vui lòng chọn độ tuổi học sinh";
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Môn học quan tâm là bắt buộc";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setToastMessage("Vui lòng kiểm tra lại thông tin đã nhập");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    try {
      // Check which email service to use (Resend or SMTP)
      const useResend = process.env.NEXT_PUBLIC_USE_RESEND === "true";
      const apiEndpoint = useResend ? "/api/register-resend" : "/api/register";
      
      // Send to API
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          courseId: selectedCourse || "trial",
          tutorId: tutorId || null,
          tutorName: tutorName || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors from server
        if (data.errors && Array.isArray(data.errors)) {
          const serverErrors: Record<string, string> = {};
          data.errors.forEach((error: string) => {
            if (error.includes("Họ tên")) serverErrors.name = error;
            else if (error.includes("điện thoại")) serverErrors.parentPhone = error;
            else if (error.includes("tuổi")) serverErrors.studentAge = error;
            else if (error.includes("môn học")) serverErrors.subject = error;
          });
          setErrors(serverErrors);
        }
        
        setSubmitStatus("error");
        setToastMessage(data.errors?.[0] || "Có lỗi xảy ra. Vui lòng thử lại sau.");
        setToastType("error");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      } else {
        // Success - Email has been sent
        // Optionally save to localStorage (without downloading file)
        if (typeof window !== "undefined") {
          const lead = {
            id: `lead-${Date.now()}`,
            ...formData,
            courseId: selectedCourse || "trial",
            createdAt: new Date().toISOString(),
          };
          const existingLeads = JSON.parse(localStorage.getItem("leads") || "[]");
          existingLeads.push(lead);
          localStorage.setItem("leads", JSON.stringify(existingLeads));
        }

        setSubmitStatus("success");
        setToastMessage(data.message || "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.");
        setToastType("success");
        setShowToast(true);
        
        setFormData({
          name: "",
          parentPhone: "",
          studentAge: "",
          subject: "",
          preferredTime: "",
        });

        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
          setShowToast(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setToastMessage("Có lỗi xảy ra khi gửi đăng ký. Vui lòng thử lại sau.");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-soft-lg border border-white/20 max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Đăng ký học thử</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <label
                    htmlFor="modal-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Họ tên phụ huynh *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Nhập họ tên"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Số điện thoại *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="modal-phone"
                      name="parentPhone"
                      required
                      value={formData.parentPhone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none ${
                        errors.parentPhone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="0900 123 456"
                    />
                  </div>
                  {errors.parentPhone && (
                    <p className="mt-1 text-sm text-red-600">{errors.parentPhone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Độ tuổi học sinh *
                  </label>
                  <select
                    id="modal-age"
                    name="studentAge"
                    required
                    value={formData.studentAge}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none ${
                      errors.studentAge ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Chọn độ tuổi</option>
                    <option value="6-8">6-8 tuổi (Lớp 1-2)</option>
                    <option value="9-11">9-11 tuổi (Lớp 3-5)</option>
                    <option value="12-15">12-15 tuổi (Lớp 6-9)</option>
                    <option value="16+">16+ tuổi (Lớp 10-12)</option>
                  </select>
                  {errors.studentAge && (
                    <p className="mt-1 text-sm text-red-600">{errors.studentAge}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Môn học quan tâm *
                  </label>
                  <input
                    type="text"
                    id="modal-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Ví dụ: Tiếng Anh"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-time"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Thời gian học mong muốn
                  </label>
                  <div className="relative">
                    <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="modal-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
                      placeholder="Ví dụ: Thứ 2, 4, 6 từ 18:00-19:00"
                    />
                  </div>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                  >
                    Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                  >
                    Có lỗi xảy ra. Vui lòng thử lại sau.
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={onClose}
                    className="flex-1 btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Hủy
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          ⏳
                        </motion.span>
                        Đang gửi...
                      </span>
                    ) : (
                      "Đăng ký"
                    )}
                  </motion.button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  * Thông tin này sẽ được lưu trữ an toàn và chỉ dùng để liên hệ
                  với bạn
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
      
      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </AnimatePresence>
  );
}


