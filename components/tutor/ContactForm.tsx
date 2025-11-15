"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiUser, FiCalendar } from "react-icons/fi";
import { saveLead } from "@/utils/leadStorage";

interface ContactFormProps {
  tutorId: string;
  tutorName: string;
}

export default function ContactForm({ tutorId, tutorName }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    parentPhone: "",
    studentAge: "",
    subject: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send to API with tutor information
      // Check which email service to use (Resend or SMTP)
      const useResend = process.env.NEXT_PUBLIC_USE_RESEND === "true";
      const apiEndpoint = useResend ? "/api/register-resend" : "/api/register";
      
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tutorId,
          tutorName,
          courseId: "contact",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitStatus("error");
        return;
      }

      // Save to localStorage
      const lead = {
        id: `lead-${Date.now()}`,
        ...formData,
        tutorId,
        tutorName,
        createdAt: new Date().toISOString(),
      };

      saveLead(lead);
      setSubmitStatus("success");
      setFormData({
        name: "",
        parentPhone: "",
        studentAge: "",
        subject: "",
        preferredTime: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card p-4 sm:p-5 md:p-6">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Liên hệ đăng ký học</h2>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Họ tên phụ huynh *
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
              placeholder="Nhập họ tên"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="parentPhone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Số điện thoại *
          </label>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              id="parentPhone"
              name="parentPhone"
              required
              value={formData.parentPhone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
              placeholder="0900 123 456"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="studentAge"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Độ tuổi học sinh *
          </label>
          <select
            id="studentAge"
            name="studentAge"
            required
            value={formData.studentAge}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
          >
            <option value="">Chọn độ tuổi</option>
            <option value="6-8">6-8 tuổi (Lớp 1-2)</option>
            <option value="9-11">9-11 tuổi (Lớp 3-5)</option>
            <option value="12-15">12-15 tuổi (Lớp 6-9)</option>
            <option value="16+">16+ tuổi (Lớp 10-12)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Môn học quan tâm *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
            placeholder="Ví dụ: Tiếng Anh"
          />
        </div>

        <div>
          <label
            htmlFor="preferredTime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Thời gian học mong muốn
          </label>
          <div className="relative">
            <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
              placeholder="Ví dụ: Thứ 2, 4, 6 từ 18:00-19:00"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ghi chú thêm
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none resize-none"
            placeholder="Nhập thông tin bổ sung (nếu có)"
          />
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Đang gửi..." : "Gửi đăng ký"}
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Thông tin này sẽ được lưu trữ an toàn và chỉ dùng để liên hệ với bạn
        </p>
      </form>
    </div>
  );
}


