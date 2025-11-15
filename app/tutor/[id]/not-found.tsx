import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-container text-center py-20">
      <h1 className="heading-1 mb-4">Không tìm thấy gia sư</h1>
      <p className="text-gray-600 mb-8">
        Gia sư bạn đang tìm không tồn tại hoặc đã bị xóa.
      </p>
      <Link href="/" className="btn-primary inline-block">
        Về trang chủ
      </Link>
    </div>
  );
}


