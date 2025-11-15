# 🌐 Hướng dẫn Xem Website trên Trình duyệt

Hướng dẫn chi tiết từng bước để deploy và xem website của bạn trên trình duyệt.

## 🎯 Mục tiêu

Sau khi hoàn thành hướng dẫn này, bạn sẽ:
- ✅ Có URL để truy cập website (ví dụ: `https://your-project.vercel.app`)
- ✅ Xem website hoạt động trên trình duyệt
- ✅ Form đăng ký gửi email thành công

---

## ⚡ Phương pháp: Deploy lên Vercel (MIỄN PHÍ - Dễ nhất)

Vercel là nền tảng tốt nhất cho Next.js, hoàn toàn miễn phí và dễ sử dụng.

---

## 📋 Bước 1: Đăng ký Vercel (2 phút)

### 1.1. Truy cập Vercel

1. Mở trình duyệt và vào: **https://vercel.com**
2. Click nút **"Sign Up"** (góc trên bên phải)

### 1.2. Đăng ký bằng GitHub (KHUYẾN NGHỊ)

**Tại sao chọn GitHub?**
- ✅ Tự động kết nối với repository GitHub của bạn
- ✅ Không cần nhập thông tin thêm
- ✅ Deploy tự động mỗi khi push code

**Cách làm:**
1. Click **"Continue with GitHub"**
2. GitHub sẽ mở cửa sổ đăng nhập
3. Đăng nhập GitHub của bạn
4. Click **"Authorize Vercel"** để cấp quyền
5. Hoàn tất đăng ký

**Hoặc đăng ký bằng email:**
1. Click **"Continue with Email"**
2. Nhập email và mật khẩu
3. Xác nhận email qua link được gửi

---

## 🚀 Bước 2: Deploy Website (3 phút)

### 2.1. Tạo Project mới

1. Sau khi đăng nhập Vercel, bạn sẽ thấy Dashboard
2. Click nút **"Add New..."** (góc trên bên phải)
3. Chọn **"Project"**

### 2.2. Chọn Repository

1. Vercel sẽ hiển thị danh sách repositories GitHub của bạn
2. Tìm và click vào repository **`giasutot`** (hoặc tên repo bạn đã push)
3. Nếu không thấy repository:
   - Click **"Adjust GitHub App Permissions"**
   - Chọn repository `giasutot` và cấp quyền
   - Refresh trang

### 2.3. Cấu hình Project

Vercel sẽ tự động detect Next.js và cấu hình sẵn:

- ✅ **Framework Preset**: Next.js
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `.next`
- ✅ **Install Command**: `npm install`

**KHÔNG CẦN thay đổi gì**, giữ nguyên mặc định.

### 2.4. Deploy

1. Scroll xuống dưới
2. Click nút **"Deploy"** (màu đen)
3. Đợi build hoàn tất (2-3 phút)

**Trong lúc đợi, bạn sẽ thấy:**
- Build logs hiển thị từng bước
- "Installing dependencies..."
- "Building..."
- "Deploying..."

### 2.5. Lấy URL Website

Khi deploy thành công:

1. Bạn sẽ thấy thông báo: **"Congratulations! Your project has been deployed."**
2. Click nút **"Visit"** (hoặc copy URL)
3. URL có dạng: `https://giasutot.vercel.app` hoặc `https://giasutot-xxxxx.vercel.app`

🎉 **Chúc mừng! Website của bạn đã có thể truy cập trên trình duyệt!**

---

## ⚙️ Bước 3: Cấu hình Environment Variables (Để form đăng ký hoạt động)

> ⚠️ **LƯU Ý**: Website đã có thể xem được, nhưng form đăng ký sẽ chưa gửi email cho đến khi bạn cấu hình bước này.

### 3.1. Lấy Resend API Key

**Nếu chưa có API key:**

1. Truy cập: **https://resend.com**
2. Click **"Sign Up"** (hoặc đăng nhập nếu đã có tài khoản)
3. Sau khi đăng nhập, click **"API Keys"** ở sidebar bên trái
4. Click nút **"Create API Key"**
5. Điền thông tin:
   - **Name**: `Web GS Production`
   - **Permission**: Chọn **"Sending access"**
6. Click **"Add"**
7. **Copy API Key** ngay lập tức (chỉ hiển thị 1 lần)
   - API key có dạng: `re_AbCdEf1234567890...`
   - **Lưu vào Notepad** để dùng sau

**Nếu đã có API key:** Copy key từ danh sách API Keys.

### 3.2. Thêm Environment Variables trên Vercel

1. Vào Dashboard Vercel
2. Click vào project **`giasutot`** (hoặc tên project của bạn)
3. Click tab **"Settings"** (ở trên cùng)
4. Click **"Environment Variables"** ở sidebar bên trái

### 3.3. Thêm Biến 1: RESEND_API_KEY

1. Click nút **"Add New"**
2. Điền thông tin:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Dán API key từ bước 3.1 (ví dụ: `re_AbCdEf1234567890`)
   - **Environment**: 
     - ✅ Tick **Production**
     - ✅ Tick **Preview**
     - ✅ Tick **Development**
3. Click **"Save"**

### 3.4. Thêm Biến 2: RESEND_FROM_EMAIL

1. Click nút **"Add New"** lần nữa
2. Điền thông tin:
   - **Key**: `RESEND_FROM_EMAIL`
   - **Value**: `onboarding@resend.dev`
   - **Environment**: 
     - ✅ Tick **Production**
     - ✅ Tick **Preview**
     - ✅ Tick **Development**
3. Click **"Save"**

### 3.5. Thêm Biến 3: NEXT_PUBLIC_USE_RESEND

1. Click nút **"Add New"** lần nữa
2. Điền thông tin:
   - **Key**: `NEXT_PUBLIC_USE_RESEND`
   - **Value**: `true`
   - **Environment**: 
     - ✅ Tick **Production**
     - ✅ Tick **Preview**
     - ✅ Tick **Development**
3. Click **"Save"**

### 3.6. Redeploy để áp dụng

1. Click tab **"Deployments"** (ở trên cùng)
2. Tìm deployment mới nhất (đầu tiên trong danh sách)
3. Click **"..."** (3 chấm) ở bên phải deployment
4. Chọn **"Redeploy"**
5. Trong popup:
   - **Use existing Build Cache**: Tắt (OFF) - Quan trọng!
6. Click **"Redeploy"**
7. Đợi redeploy hoàn tất (1-2 phút)

---

## ✅ Bước 4: Kiểm tra Website

### 4.1. Xem Website trên Trình duyệt

1. Mở trình duyệt (Chrome, Firefox, Edge, Safari...)
2. Truy cập URL bạn đã nhận ở Bước 2.5
   - Ví dụ: `https://giasutot.vercel.app`
3. Website sẽ load và hiển thị landing page của bạn

**Kiểm tra:**
- ✅ Website load được không?
- ✅ Nội dung hiển thị đúng không?
- ✅ Images load được không?
- ✅ Navigation hoạt động không?
- ✅ Responsive trên mobile (dùng DevTools: F12 > Toggle device toolbar)

### 4.2. Test Form Đăng ký (QUAN TRỌNG)

1. Scroll xuống form đăng ký trên website
2. Điền thông tin test:
   - **Họ tên phụ huynh**: `Nguyễn Văn A`
   - **Số điện thoại**: `0901234567`
   - **Độ tuổi học sinh**: Chọn một tuổi
   - **Môn học quan tâm**: `Tiếng Anh`
   - **Thời gian học mong muốn**: `Tối` (tùy chọn)
3. Click nút **"Đăng ký"** hoặc **"Gửi đăng ký"**
4. Chờ thông báo: "Đăng ký thành công!"
5. Kiểm tra email: `nguyenducdufedev@gmail.com`
   - Nếu có email mới với nội dung đăng ký = **Thành công!** ✅

### 4.3. Xem Logs nếu có lỗi

Nếu form không hoạt động:

1. Vào Vercel Dashboard
2. Click vào project > tab **"Deployments"**
3. Click vào deployment mới nhất
4. Scroll xuống phần **"Functions"**
5. Click vào function `/api/register-resend`
6. Xem tab **"Logs"** để tìm lỗi

**Lỗi thường gặp:**
- `RESEND_API_KEY is not defined` → Chưa thêm Environment Variable
- `Invalid API key` → API key sai, kiểm tra lại
- `401 Unauthorized` → API key không đúng hoặc đã hết hạn

---

## 🎉 Hoàn thành!

Nếu website load được và form đăng ký gửi email thành công, bạn đã deploy thành công!

### URL Website của bạn:
```
https://giasutot.vercel.app
```
(Hoặc URL Vercel đã cung cấp cho bạn)

---

## 💡 Tips & Lưu ý

### Tự động Deploy

**Mỗi lần bạn push code lên GitHub:**
- Vercel sẽ tự động build và deploy lại
- Bạn sẽ nhận email thông báo khi deploy xong
- Tất cả các URL vẫn giữ nguyên

### Xem Deployment History

1. Vào project trên Vercel
2. Tab **"Deployments"**
3. Xem tất cả các lần deploy
4. Có thể rollback về version cũ nếu cần

### Custom Domain (Tùy chọn)

Bạn có thể thêm domain riêng:

1. Vào **Settings** > **Domains**
2. Nhập domain của bạn (ví dụ: `giasutot.com`)
3. Làm theo hướng dẫn để cấu hình DNS

### Preview Deployments

Mỗi khi bạn tạo Pull Request trên GitHub:
- Vercel tự động tạo preview deployment
- Có URL riêng để test trước khi merge vào main

---

## ❌ Xử lý lỗi

### Lỗi 1: "Website không load"

**Kiểm tra:**
1. URL có đúng không?
2. Deployment đã thành công chưa? (xem tab Deployments)
3. Kiểm tra browser console (F12) xem có lỗi không

**Cách fix:**
- Xem build logs trên Vercel để tìm lỗi
- Kiểm tra code có lỗi syntax không

### Lỗi 2: "Form đăng ký không gửi email"

**Nguyên nhân:** Chưa cấu hình Environment Variables hoặc sai API key

**Cách fix:**
1. Kiểm tra lại Environment Variables trên Vercel
2. Đảm bảo đã **Redeploy** sau khi thêm biến
3. Kiểm tra API key từ Resend có đúng không
4. Xem logs trên Vercel để biết lỗi cụ thể

### Lỗi 3: "Build failed"

**Nguyên nhân:** Có lỗi trong code

**Cách fix:**
1. Click vào deployment failed để xem logs
2. Sửa lỗi trong code
3. Commit và push lại lên GitHub
4. Vercel sẽ tự động deploy lại

---

## 📞 Cần giúp đỡ?

- 📖 Xem hướng dẫn deploy chi tiết: `DEPLOYMENT.md`
- 📖 Xem hướng dẫn deploy nhanh: `HUONG_DAN_DEPLOY_NHANH.md`
- 🔗 Vercel Docs: https://vercel.com/docs
- 🔗 Resend Docs: https://resend.com/docs

---

**Chúc bạn thành công! Website của bạn giờ đã có thể truy cập trên trình duyệt! 🎊**

