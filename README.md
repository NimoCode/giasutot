# Gia Sư Tiếng Anh - Landing Page

Landing page quảng bá dịch vụ gia sư tiếng Anh chuyên nghiệp cho trẻ em. Dự án được xây dựng với Next.js, TypeScript, Tailwind CSS và Framer Motion.

## 🚀 Tính năng

- ✅ Landing page một trang với các sections: Hero, Giới thiệu, Gia sư, Khóa học, Bài viết, FAQ
- ✅ Trang chi tiết gia sư với form liên hệ
- ✅ Trang chi tiết bài viết
- ✅ Carousel hiển thị danh sách gia sư
- ✅ Form đăng ký học thử (lưu vào localStorage và download JSON)
- ✅ Responsive design, mobile-first
- ✅ Animations mượt mà với Framer Motion
- ✅ SEO-friendly với Next.js SSG
- ✅ Accessibility (keyboard navigation, ARIA labels)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Testing**: Jest + React Testing Library

## 📦 Cài đặt

### Yêu cầu

- Node.js 18+ 
- npm hoặc yarn

### Bước 1: Clone và cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### Bước 2: Chạy development server

```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

### Bước 3: Build cho production

```bash
npm run build
npm start
# hoặc
yarn build
yarn start
```

## 📁 Cấu trúc dự án

```
web_gs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx            # Homepage
│   ├── tutor/[id]/        # Tutor detail pages
│   └── post/[id]/         # Post detail pages
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Homepage sections
│   ├── tutor/             # Tutor-related components
│   ├── post/              # Post-related components
│   └── modals/            # Modal components
├── data/                  # JSON data files
│   ├── tutors.json        # Tutor data
│   ├── posts.json         # Blog posts
│   └── leads.json         # Generated leads (empty initially)
├── public/                # Static assets
│   └── assets/            # Images, avatars
├── types/                 # TypeScript types
└── utils/                 # Utility functions
```

## 📝 Dữ liệu mẫu

Dự án sử dụng file-based database với các file JSON trong thư mục `/data`:

- `tutors.json`: Danh sách 5 gia sư mẫu
- `posts.json`: 4 bài viết mẫu
- `leads.json`: File trống, sẽ được populate khi có form submission

### Thêm gia sư mới

Chỉnh sửa `data/tutors.json` và thêm object mới theo format:

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

## 🧪 Testing

Chạy tests:

```bash
npm test
# hoặc
yarn test
```

Tests hiện tại bao gồm:
- TutorCard component
- TutorCarousel component

## 🎨 Customization

### Màu sắc

Chỉnh sửa `tailwind.config.ts` để thay đổi color scheme:

```typescript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
}
```

### Fonts

Thêm fonts trong `app/layout.tsx` và cấu hình trong `tailwind.config.ts`.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel sẽ tự động detect Next.js và deploy

### GitHub Pages

1. Cài đặt `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Thêm script vào `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d out"
  }
}
```

3. Cấu hình `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

4. Deploy:
```bash
npm run deploy
```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Hoặc sử dụng Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🔧 Kết nối Backend (Tùy chọn)

Hiện tại, form submissions được lưu vào localStorage và download JSON file. Để kết nối với backend thực:

1. Tạo API route trong `app/api/leads/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Save to database
  return Response.json({ success: true });
}
```

2. Cập nhật `utils/leadStorage.ts` để gọi API thay vì localStorage.

## 📋 Checklist trước khi deploy

- [ ] Thay thế placeholder images bằng ảnh thật
- [ ] Cập nhật thông tin liên hệ trong Footer
- [ ] Kiểm tra tất cả links và navigation
- [ ] Test trên các thiết bị khác nhau
- [ ] Chạy Lighthouse và đạt điểm tốt
- [ ] Cập nhật meta tags cho SEO
- [ ] Kiểm tra accessibility với screen reader
- [ ] Test form submissions

## ⚖️ Lưu ý pháp lý

**Quan trọng**: Nếu hoạt động dạy thu phí, có thể cần đăng ký kinh doanh theo quy định của Việt Nam. Thông tin này chỉ mang tính gợi ý, vui lòng kiểm tra luật hiện hành.

Các điểm cần lưu ý:
- Giáo viên công lập cần tuân thủ quy định về dạy thêm
- Học sinh tiểu học có giới hạn về dạy thêm
- Thuế phải nộp nếu có thu nhập từ hoạt động dạy học
- Cần đăng ký kinh doanh nếu hoạt động thương mại

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👥 Contributors

Dự án được phát triển bởi Cursor AI.

## 📞 Hỗ trợ

Nếu có thắc mắc hoặc gặp vấn đề, vui lòng tạo issue trên GitHub repository.

---

**Lưu ý**: Đây là một dự án demo. Trước khi sử dụng cho mục đích thương mại, hãy đảm bảo tuân thủ các quy định pháp luật về giáo dục và kinh doanh tại Việt Nam.


