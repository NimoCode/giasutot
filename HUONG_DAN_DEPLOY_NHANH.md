# 🚀 Hướng dẫn Deploy Nhanh

Hướng dẫn từng bước để deploy dự án lên Vercel (cách dễ nhất và nhanh nhất).

## ⚡ Tóm tắt nhanh (5 phút)

### Bước 1: Chuẩn bị (2 phút)
1. Push code lên GitHub
2. Đăng ký Vercel (nếu chưa có)
3. Lấy Resend API Key

### Bước 2: Deploy (2 phút)
1. Import project trên Vercel
2. Deploy tự động

### Bước 3: Cấu hình (1 phút)
1. Thêm Environment Variables
2. Redeploy

---

## 📋 Chi tiết từng bước

### ✅ Bước 1: Chuẩn bị

#### 1.1. Push code lên GitHub

```bash
# Nếu chưa có repository trên GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/web_gs.git
git push -u origin main
```

#### 1.2. Đăng ký Vercel

1. Truy cập: https://vercel.com
2. Click **"Sign Up"**
3. Chọn **"Continue with GitHub"** (khuyến nghị)
4. Cấp quyền truy cập repository

#### 1.3. Lấy Resend API Key (QUAN TRỌNG)

1. Truy cập: https://resend.com
2. Đăng ký tài khoản miễn phí
3. Vào **"API Keys"** ở sidebar
4. Click **"Create API Key"**
5. Đặt tên: `Web GS Production`
6. **Copy API key** (dạng: `re_AbCdEf1234567890`)
7. **Lưu lại** để dùng ở bước sau

---

### 🚀 Bước 2: Deploy trên Vercel

#### 2.1. Tạo project mới

1. Đăng nhập Vercel
2. Click **"Add New..."** > **"Project"**
3. Chọn repository `web_gs` (hoặc tên repo của bạn)
4. Click **"Import"**

#### 2.2. Cấu hình project

Vercel sẽ tự động detect:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**KHÔNG CẦN** thay đổi gì, giữ nguyên mặc định.

#### 2.3. Deploy

1. Click **"Deploy"**
2. Đợi build hoàn tất (2-3 phút)
3. Khi hoàn tất, bạn sẽ có URL dạng: `https://web-gs.vercel.app`

> ⚠️ **LƯU Ý**: Form đăng ký sẽ chưa hoạt động cho đến khi bạn cấu hình Environment Variables ở bước sau!

---

### ⚙️ Bước 3: Cấu hình Environment Variables

#### 3.1. Vào Settings

1. Trên trang project Vercel, click tab **"Settings"**
2. Click **"Environment Variables"** ở sidebar

#### 3.2. Thêm các biến môi trường

Thêm **3 biến** sau (click "Add New" cho mỗi biến):

**Biến 1:**
- **Key**: `RESEND_API_KEY`
- **Value**: `re_your_actual_api_key_here` (paste API key từ bước 1.3)
- **Environment**: Chọn tất cả (Production, Preview, Development)

**Biến 2:**
- **Key**: `RESEND_FROM_EMAIL`
- **Value**: `onboarding@resend.dev`
- **Environment**: Chọn tất cả

**Biến 3:**
- **Key**: `NEXT_PUBLIC_USE_RESEND`
- **Value**: `true`
- **Environment**: Chọn tất cả

#### 3.3. Lưu và Redeploy

1. Click **"Save"** sau mỗi biến
2. Vào tab **"Deployments"**
3. Tìm deployment mới nhất
4. Click **"..."** > **"Redeploy"**
5. Chọn **"Use existing Build Cache"** = OFF (để áp dụng biến môi trường)
6. Click **"Redeploy"**

Đợi redeploy hoàn tất (1-2 phút).

---

### ✅ Bước 4: Kiểm tra

#### 4.1. Test website

1. Truy cập URL được Vercel cung cấp
2. Kiểm tra website load đúng
3. Test responsive trên mobile

#### 4.2. Test form đăng ký (QUAN TRỌNG)

1. Điền form đăng ký trên website
2. Submit form
3. Kiểm tra email đến: `nguyenducdufedev@gmail.com`
4. Nếu email đến được = **Thành công!** ✅

#### 4.3. Kiểm tra logs nếu có lỗi

1. Vào tab **"Deployments"** trên Vercel
2. Click vào deployment mới nhất
3. Click **"Functions"** tab
4. Click vào function `/api/register-resend`
5. Xem **"Logs"** để debug nếu có lỗi

---

## 🎉 Hoàn thành!

Nếu form đăng ký gửi email thành công, bạn đã deploy thành công!

### Các bước tiếp theo (tùy chọn):

- ✅ **Custom Domain**: Thêm domain riêng trong Settings > Domains
- ✅ **Analytics**: Bật Vercel Analytics trong Settings
- ✅ **Automatic Deployments**: Mỗi lần push code lên GitHub, Vercel sẽ tự động deploy

---

## ❌ Gặp lỗi?

### Lỗi: "Form submit không gửi email"

**Nguyên nhân**: Chưa cấu hình Environment Variables hoặc API key sai.

**Cách fix:**
1. Kiểm tra lại Environment Variables trên Vercel
2. Đảm bảo `RESEND_API_KEY` đúng (bắt đầu bằng `re_`)
3. Đảm bảo đã **Redeploy** sau khi thêm biến
4. Kiểm tra logs trên Vercel để xem lỗi cụ thể

### Lỗi: "Build failed"

**Nguyên nhân**: Có lỗi trong code hoặc dependencies.

**Cách fix:**
1. Chạy `npm run build` local để xem lỗi
2. Kiểm tra Node.js version (cần 18+)
3. Xóa `node_modules` và `package-lock.json`, chạy lại `npm install`
4. Kiểm tra build logs trên Vercel

### Lỗi: "API Route not found"

**Nguyên nhân**: Next.js không detect được API routes.

**Cách fix:**
1. Đảm bảo file `app/api/register-resend/route.ts` tồn tại
2. Kiểm tra cấu trúc thư mục đúng: `app/api/[route-name]/route.ts`
3. Redeploy lại

---

## 📞 Cần giúp đỡ?

- 📖 Xem hướng dẫn chi tiết: `DEPLOYMENT.md`
- 🔗 Vercel Docs: https://vercel.com/docs
- 🔗 Resend Docs: https://resend.com/docs

---

**Chúc bạn deploy thành công! 🎊**

