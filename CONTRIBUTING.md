# Hướng dẫn đóng góp

Cảm ơn bạn quan tâm đến việc cải thiện dự án này!

## 🛠️ Cách thêm tính năng mới

### 1. Thêm gia sư mới

1. Mở file `data/tutors.json`
2. Thêm object mới vào array theo format:

```json
{
  "id": "tutor-anh-06",
  "name": "Tên gia sư",
  "avatar": "/assets/avatars/avatar.webp",
  "subjects": ["Tiếng Anh"],
  "levels": ["Tiểu học"],
  "rating": 4.8,
  "price_per_hour": 200000,
  "short_bio": "Mô tả ngắn",
  "long_bio": "Mô tả chi tiết...",
  "teaching_experience_years": 5,
  "education": "Bằng cấp",
  "sample_video_url": "",
  "tags": ["Online", "Offline"],
  "gallery_images": [],
  "contact": {
    "email": "email@example.com",
    "phone": "0900123456"
  },
  "availability": ["Thứ 2: 17:00-19:00"],
  "location": "Hà Nội"
}
```

3. Thêm ảnh avatar vào `public/assets/avatars/`

### 2. Thêm bài viết mới

1. Mở file `data/posts.json`
2. Thêm object mới:

```json
{
  "id": "post-5",
  "title": "Tiêu đề bài viết",
  "excerpt": "Tóm tắt ngắn gọn",
  "contentMarkdown": "## Tiêu đề\n\nNội dung chi tiết...",
  "date": "2025-01-20",
  "author": "Tên tác giả"
}
```

### 3. Thêm section mới vào trang chủ

1. Tạo component trong `components/sections/`
2. Import và thêm vào `app/page.tsx`
3. Thêm navigation link trong `components/layout/Header.tsx`

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Thay đổi màu primary
  },
  secondary: {
    // Thay đổi màu secondary
  },
}
```

### Thay đổi fonts

1. Thêm font vào `app/layout.tsx`
2. Cập nhật `tailwind.config.ts`

## 🧪 Testing

Trước khi commit, đảm bảo:

```bash
npm run lint      # Kiểm tra lỗi code
npm test          # Chạy tests
npm run build     # Build thành công
```

## 📝 Code Style

- Sử dụng TypeScript
- Tuân thủ ESLint rules
- Format code với Prettier
- Component names: PascalCase
- File names: kebab-case hoặc PascalCase cho components

## 🔍 Best Practices

- Mobile-first design
- Accessibility (ARIA labels, keyboard navigation)
- Performance (lazy loading, code splitting)
- SEO (meta tags, semantic HTML)

## 📦 Commit Messages

Sử dụng format:

```
feat: thêm tính năng mới
fix: sửa lỗi
docs: cập nhật tài liệu
style: thay đổi format code
refactor: refactor code
test: thêm tests
chore: cập nhật dependencies
```

---

Cảm ơn bạn đã đóng góp! 🎉

