import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-container">
      <div className="text-center">
        <h1 className="heading-1 mb-4">404 - Trang không tìm thấy</h1>
        <p className="text-lg text-gray-600 mb-8">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}


