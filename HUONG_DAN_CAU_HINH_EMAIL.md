# Hướng dẫn cấu hình Email - Đơn giản

## 🎯 Bạn KHÔNG cần tạo email mới!

Bạn có thể sử dụng email hiện có của mình (Gmail, Outlook, Yahoo, hoặc bất kỳ email nào).

## 📧 Có 2 email trong hệ thống:

### 1. Email gửi đi (SMTP_USER)
- **Mục đích**: Dùng để xác thực và gửi email từ server
- **Có thể dùng**: Email hiện có của bạn (Gmail, Outlook, Yahoo...)
- **Ví dụ**: `nguyenducdufedev@gmail.com` hoặc email khác

### 2. Email nhận (đã cấu hình sẵn)
- **Email**: `nguyenducdufedev@gmail.com`
- **Mục đích**: Nhận thông báo khi có người đăng ký học
- **Đã được cấu hình**: Không cần thay đổi

## ✅ Cách đơn giản nhất:

### Dùng chính email `nguyenducdufedev@gmail.com` để gửi:

1. **Tạo file `.env.local`** trong thư mục gốc:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=nguyenducdufedev@gmail.com
   SMTP_PASSWORD=your-app-password-here
   ```

2. **Lấy App Password cho Gmail:**
   - Bật 2-Step Verification: https://myaccount.google.com/security
   - Tạo App Password: https://myaccount.google.com/apppasswords
     - Chọn "Mail" và "Other (Custom name)"
     - Nhập: "Next.js App"
     - Copy mật khẩu 16 ký tự

3. **Paste App Password vào `.env.local`**

4. **Xong!** Bây giờ khi có người đăng ký, email sẽ được gửi đến `nguyenducdufedev@gmail.com`

## 🔄 Hoặc dùng email khác để gửi:

Bạn có thể dùng bất kỳ email nào khác (Gmail, Outlook, Yahoo) để gửi, nhưng email nhận vẫn là `nguyenducdufedev@gmail.com`.

### Ví dụ dùng Outlook:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-outlook-password
```

### Ví dụ dùng Yahoo:
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-yahoo-app-password
```

## ❓ FAQ:

**Q: Tôi có cần tạo email mới không?**
A: KHÔNG! Bạn có thể dùng email hiện có.

**Q: Tôi có thể dùng chính email `nguyenducdufedev@gmail.com` để gửi không?**
A: CÓ! Đây là cách đơn giản nhất.

**Q: Email nhận có thể thay đổi không?**
A: CÓ, nhưng cần sửa trong file `app/api/register/route.ts` dòng `to: "nguyenducdufedev@gmail.com"`

**Q: Tôi không có Gmail, có thể dùng email khác không?**
A: CÓ! Bất kỳ email nào có SMTP đều được (Outlook, Yahoo, custom SMTP...)

