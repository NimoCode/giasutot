# Hướng dẫn nhanh

## 🚀 Chạy dự án lần đầu

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Mở trình duyệt tại: http://localhost:3000

## 📝 Cấu trúc chính

- **Trang chủ**: `/` - Landing page với tất cả sections
- **Chi tiết gia sư**: `/tutor/[id]` - Thông tin chi tiết từng gia sư
- **Chi tiết bài viết**: `/post/[id]` - Nội dung bài viết
- **Tất cả bài viết**: `/posts` - Danh sách tất cả bài viết

## 🎨 Thay đổi nội dung

### Thêm/Sửa gia sư

Chỉnh sửa file: `data/tutors.json`

### Thêm/Sửa bài viết

Chỉnh sửa file: `data/posts.json`

### Thay đổi màu sắc

Chỉnh sửa: `tailwind.config.ts`

## 🖼️ Thêm ảnh

1. Đặt ảnh avatar vào: `public/assets/avatars/`
2. Đặt ảnh gallery vào: `public/assets/tutors/`
3. Cập nhật đường dẫn trong JSON files

## 📱 Test responsive

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🧪 Chạy tests

```bash
npm test
```

## 🏗️ Build production

```bash
npm run build
npm start
```

## 📦 Deploy

Xem file `DEPLOYMENT.md` để biết chi tiết.

---

**Lưu ý**: Đảm bảo Node.js version >= 18


