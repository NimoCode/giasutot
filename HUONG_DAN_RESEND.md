# Hướng dẫn sử dụng Resend (Dễ hơn Gmail App Password)

## ✅ Tại sao nên dùng Resend?

- **Không cần App Password** - Đơn giản hơn nhiều!
- **Miễn phí 100 email/ngày** - Đủ cho hầu hết các dự án
- **Dễ cấu hình** - Chỉ cần API key
- **Đáng tin cậy** - Dịch vụ chuyên nghiệp

## 🚀 Các bước cấu hình:

### Bước 1: Đăng ký tài khoản Resend

1. Truy cập: https://resend.com
2. Click "Sign Up" (miễn phí)
3. Đăng ký bằng email của bạn

### Bước 2: Lấy API Key

1. Đăng nhập vào Resend
2. Vào **API Keys** (menu bên trái)
3. Click **"Create API Key"**
4. Đặt tên: "Next.js App"
5. Chọn quyền: **Sending access**
6. Click **"Add"**
7. **Copy API key** (chỉ hiển thị 1 lần!)

### Bước 3: Verify domain (Tùy chọn - Có thể bỏ qua)

**Lưu ý:** Nếu chưa verify domain, bạn sẽ dùng email mặc định:
- Email gửi: `onboarding@resend.dev` 
- Email nhận: `nguyenducdufedev@gmail.com` ✅ (vẫn hoạt động bình thường)

**Nếu muốn verify domain để dùng email riêng:**
1. Vào **Domains** trong Resend
2. Thêm domain của bạn
3. Thêm DNS records như hướng dẫn
4. Đợi verify (thường vài phút)

### Bước 4: Cấu hình .env.local

Tạo file `.env.local` trong thư mục gốc:

```env
# Sử dụng Resend (dễ hơn SMTP)
NEXT_PUBLIC_USE_RESEND=true
RESEND_API_KEY=re_your_api_key_here

# Email gửi (nếu đã verify domain, nếu không dùng onboarding@resend.dev)
RESEND_FROM_EMAIL=onboarding@resend.dev

# Hoặc nếu đã verify domain:
# RESEND_FROM_EMAIL=noreply@yourdomain.com
```

### Bước 5: Test

1. Khởi động lại server:
   ```bash
   npm run dev
   ```

2. Mở form đăng ký và submit một form test

3. Kiểm tra email đến tại: **nguyenducdufedev@gmail.com**

## 🔄 So sánh Resend vs Gmail SMTP:

| Tính năng | Resend | Gmail SMTP |
|-----------|--------|------------|
| App Password | ❌ Không cần | ✅ Cần (khó tạo) |
| Miễn phí | ✅ 100 email/ngày | ✅ Không giới hạn |
| Dễ cấu hình | ✅ Rất dễ | ❌ Phức tạp |
| Độ tin cậy | ✅ Cao | ⚠️ Tùy thuộc |

## ❓ FAQ:

**Q: Tôi có thể dùng email `nguyenducdufedev@gmail.com` làm email gửi không?**
A: Có, nhưng cần verify domain trước. Tạm thời dùng `onboarding@resend.dev` cũng được.

**Q: Email có vào spam không?**
A: Resend có tỷ lệ deliverability cao. Nhưng nên verify domain để tốt hơn.

**Q: Giới hạn miễn phí có đủ không?**
A: 100 email/ngày = ~3000 email/tháng - đủ cho hầu hết website.

**Q: Tôi có thể dùng cả SMTP và Resend không?**
A: Có, code đã hỗ trợ cả 2. Chỉ cần set `NEXT_PUBLIC_USE_RESEND=true` để dùng Resend.

## 🆘 Troubleshooting:

**Lỗi: "Invalid API key"**
- Kiểm tra lại RESEND_API_KEY trong .env.local
- Đảm bảo đã copy đầy đủ API key

**Lỗi: "Domain not verified"**
- Tạm thời dùng `onboarding@resend.dev` trong RESEND_FROM_EMAIL
- Hoặc verify domain theo hướng dẫn

**Email không đến:**
- Kiểm tra spam folder
- Kiểm tra API key đúng chưa
- Xem console log để biết lỗi chi tiết

