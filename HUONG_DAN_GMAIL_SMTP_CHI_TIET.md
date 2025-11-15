# 📧 Hướng dẫn Chi tiết: Cấu hình Gmail SMTP

Hướng dẫn từng bước để chuyển từ Resend sang Gmail SMTP (không cần domain).

---

## 🎯 Mục tiêu

Sau khi hoàn thành, form đăng ký sẽ gửi email qua Gmail SMTP thay vì Resend.

---

## 📋 Bước 1: Bật 2-Factor Authentication trên Gmail

### 1.1. Kiểm tra xem đã bật chưa

1. Truy cập: https://myaccount.google.com/security
2. Đăng nhập Gmail của bạn
3. Tìm phần **"2-Step Verification"**
4. Nếu thấy **"On"** = Đã bật ✅ → Chuyển sang Bước 2
5. Nếu thấy **"Off"** = Chưa bật → Làm tiếp 1.2

### 1.2. Bật 2-Factor Authentication

1. Click vào **"2-Step Verification"**
2. Click **"Get Started"**
3. Chọn số điện thoại để nhận mã xác thực
4. Nhập mã xác thực được gửi đến điện thoại
5. Click **"Turn On"**
6. Hoàn tất! ✅

---

## 🔑 Bước 2: Tạo App Password Gmail

### 2.1. Truy cập App Passwords

1. Truy cập: https://myaccount.google.com/apppasswords
2. Đăng nhập Gmail (nếu chưa đăng nhập)
3. Nếu yêu cầu xác thực lại, nhập mật khẩu Gmail

### 2.2. Tạo App Password mới

1. Bạn sẽ thấy màn hình **"App passwords"**
2. Ở phần **"Select app"**, chọn: **"Mail"**
3. Ở phần **"Select device"**, chọn: **"Other (Custom name)"**
4. Nhập tên: `Next.js Web GS` (hoặc tên bạn muốn)
5. Click **"Generate"**

### 2.3. Copy App Password

1. Google sẽ hiển thị **16 ký tự password**
2. Password có dạng: `abcd efgh ijkl mnop` (có khoảng trắng)
3. **Copy toàn bộ password** (bao gồm cả khoảng trắng)
4. **Lưu vào Notepad** tạm thời để dùng sau
   - Ví dụ: `abcd efgh ijkl mnop`
   - Hoặc bỏ khoảng trắng: `abcdefghijklmnop`

> ⚠️ **QUAN TRỌNG**: App Password chỉ hiển thị 1 lần! Nếu quên, phải tạo lại.

---

## ⚙️ Bước 3: Cập nhật Environment Variables trên Vercel

### 3.1. Vào Vercel Dashboard

1. Truy cập: https://vercel.com/dashboard
2. Đăng nhập (nếu chưa)
3. Click vào project **`giasutot`** (hoặc tên project của bạn)

### 3.2. Vào Settings

1. Click tab **"Settings"** (ở trên cùng)
2. Click **"Environment Variables"** ở sidebar bên trái

### 3.3. Xóa/Disable các biến Resend (nếu có)

**Nếu có các biến sau, bạn có thể xóa hoặc để nguyên:**
- `RESEND_API_KEY` - Có thể xóa hoặc để trống
- `RESEND_FROM_EMAIL` - Có thể xóa hoặc để trống

**Hoặc giữ lại** (không ảnh hưởng nếu `NEXT_PUBLIC_USE_RESEND=false`)

### 3.4. Thêm Biến 1: NEXT_PUBLIC_USE_RESEND

1. Click nút **"Add New"**
2. Điền thông tin:
   - **Key**: `NEXT_PUBLIC_USE_RESEND`
   - **Value**: `false` (quan trọng: phải là `false` để dùng SMTP)
   - **Environment**: 
     - ✅ Tick **Production**
     - ✅ Tick **Preview**
     - ✅ Tick **Development**
3. Click **"Save"**

### 3.5. Thêm Biến 2: SMTP_HOST

1. Click nút **"Add New"** lần nữa
2. Điền thông tin:
   - **Key**: `SMTP_HOST`
   - **Value**: `smtp.gmail.com`
   - **Environment**: 
     - ✅ Tick **Production**
     - ✅ Tick **Preview**
     - ✅ Tick **Development**
3. Click **"Save"**

### 3.6. Thêm Biến 3: SMTP_PORT

1. Click nút **"Add New"** lần nữa
2. Điền thông tin:
   - **Key**: `SMTP_PORT`
   - **Value**: `587`
   - **Environment**: 
     - ✅ Tick **Production**
     - ✅ Tick **Preview**
     - ✅ Tick **Development**
3. Click **"Save"**

### 3.7. Thêm Biến 4: SMTP_USER

1. Click nút **"Add New"** lần nữa
2. Điền thông tin:
   - **Key**: `SMTP_USER`
   - **Value**: `your-email@gmail.com` (thay bằng email Gmail của bạn)
     - Ví dụ: `nguyenducdufedev@gmail.com`
   - **Environment**: 
     - ✅ Tick **Production**
     - ✅ Tick **Preview**
     - ✅ Tick **Development**
3. Click **"Save"**

### 3.8. Thêm Biến 5: SMTP_PASSWORD

1. Click nút **"Add New"** lần nữa
2. Điền thông tin:
   - **Key**: `SMTP_PASSWORD`
   - **Value**: Dán App Password từ Bước 2.3
     - Có thể dán với khoảng trắng: `abcd efgh ijkl mnop`
     - Hoặc bỏ khoảng trắng: `abcdefghijklmnop`
     - Cả 2 cách đều được
   - **Environment**: 
     - ✅ Tick **Production**
     - ✅ Tick **Preview**
     - ✅ Tick **Development**
3. Click **"Save"**

---

## 🔄 Bước 4: Redeploy để áp dụng

### 4.1. Vào Deployments

1. Click tab **"Deployments"** (ở trên cùng)
2. Tìm deployment mới nhất (đầu tiên trong danh sách)

### 4.2. Redeploy

1. Click **"..."** (3 chấm) ở bên phải deployment mới nhất
2. Chọn **"Redeploy"**
3. Trong popup:
   - **"Use existing Build Cache"**: Tắt (OFF) ⚠️ Quan trọng!
4. Click **"Redeploy"**

### 4.3. Đợi Build

1. Đợi 1-2 phút để redeploy hoàn tất
2. Khi thấy status **"Ready"** (màu xanh) = Thành công ✅

---

## ✅ Bước 5: Kiểm tra và Test

### 5.1. Mở Website

1. Click nút **"Visit"** trên deployment mới nhất
2. Hoặc truy cập URL: `https://giasutot.vercel.app` (hoặc URL của bạn)

### 5.2. Test Form Đăng ký

1. Scroll xuống form đăng ký trên website
2. Điền thông tin test:
   - **Họ tên phụ huynh**: `Nguyễn Văn Test`
   - **Số điện thoại**: `0901234567`
   - **Độ tuổi học sinh**: Chọn một tuổi
   - **Môn học quan tâm**: `Tiếng Anh`
   - **Thời gian học mong muốn**: `Tối` (tùy chọn)
3. Click nút **"Đăng ký"** hoặc **"Gửi đăng ký"**

### 5.3. Kiểm tra Email

1. Mở Gmail: https://mail.google.com
2. Đăng nhập vào email: `nguyenducdufedev@gmail.com`
3. Kiểm tra **Inbox** (hoặc **Spam** nếu không thấy)
4. Nếu có email mới với nội dung đăng ký = **Thành công!** ✅

---

## ❌ Xử lý Lỗi

### Lỗi 1: "Invalid login credentials"

**Nguyên nhân**: App Password sai hoặc chưa tạo đúng

**Cách fix:**
1. Kiểm tra lại App Password đã copy đúng chưa
2. Tạo lại App Password mới nếu cần
3. Cập nhật lại `SMTP_PASSWORD` trên Vercel
4. Redeploy lại

### Lỗi 2: "Email không đến"

**Nguyên nhân**: Email có thể vào Spam

**Cách fix:**
1. Kiểm tra folder **Spam** trong Gmail
2. Nếu có, đánh dấu "Not spam"
3. Kiểm tra logs trên Vercel để xem có lỗi không

### Lỗi 3: "SMTP connection failed"

**Nguyên nhân**: Cấu hình SMTP sai

**Cách fix:**
1. Kiểm tra lại:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = email Gmail đúng
   - `SMTP_PASSWORD` = App Password đúng
2. Đảm bảo đã bật 2-Factor Authentication
3. Redeploy lại

---

## 📝 Tóm tắt các Biến cần thêm

Sau khi hoàn thành, bạn sẽ có **5 biến** trên Vercel:

```
NEXT_PUBLIC_USE_RESEND=false
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

---

## ✅ Checklist

- [ ] Đã bật 2-Factor Authentication trên Gmail
- [ ] Đã tạo App Password Gmail
- [ ] Đã copy và lưu App Password
- [ ] Đã thêm 5 biến Environment Variables trên Vercel
- [ ] Đã redeploy deployment
- [ ] Đã test form đăng ký
- [ ] Email đã đến thành công

---

## 🎉 Hoàn thành!

Nếu email đã đến thành công, bạn đã cấu hình Gmail SMTP thành công!

**Lưu ý:**
- Email gửi đi sẽ hiển thị từ Gmail của bạn
- Có thể vào Spam lần đầu, nhưng sau đó sẽ vào Inbox
- Giới hạn Gmail: ~500 email/ngày (đủ cho hầu hết website)

---

**Chúc bạn thành công! 🚀**

