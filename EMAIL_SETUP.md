# Hướng dẫn cấu hình Email Service

## Bước 1: Tạo file .env.local

Tạo file `.env.local` trong thư mục gốc của dự án và copy nội dung từ file `env.example` (file không có dấu chấm):

**Trên Windows:**
```powershell
Copy-Item env.example .env.local
```

**Hoặc tạo thủ công:**
1. Tạo file mới tên `.env.local` trong thư mục gốc
2. Copy nội dung từ file `env.example` và điền thông tin SMTP của bạn

## Bước 2: Cấu hình SMTP

### Option 1: Sử dụng Gmail (Khuyến nghị)

1. **Bật xác thực 2 bước cho tài khoản Gmail:**
   - Truy cập: https://myaccount.google.com/security
   - Bật "2-Step Verification"

2. **Tạo App Password:**
   - Truy cập: https://myaccount.google.com/apppasswords
   - Chọn "Mail" và "Other (Custom name)"
   - Nhập tên: "Next.js App"
   - Click "Generate"
   - Copy mật khẩu 16 ký tự được tạo

3. **Cập nhật file .env.local:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   ```

### Option 2: Sử dụng SMTP khác

Bạn có thể sử dụng bất kỳ dịch vụ SMTP nào khác (Outlook, Yahoo, SendGrid, Mailgun, etc.)

#### Outlook/Hotmail:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

#### Yahoo:
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
```

## Bước 3: Test Email Service

1. Khởi động lại server:
   ```bash
   npm run dev
   ```

2. Mở form đăng ký và submit một form test

3. Kiểm tra email đến tại: **nguyenducdufedev@gmail.com**

## Troubleshooting

### Lỗi: "Invalid login"
- Đảm bảo bạn đang sử dụng App Password (không phải mật khẩu Gmail thông thường)
- Kiểm tra lại SMTP_USER và SMTP_PASSWORD

### Lỗi: "Connection timeout"
- Kiểm tra firewall/antivirus có chặn port 587 không
- Thử đổi port thành 465 và đặt `secure: true` trong API route

### Email không đến
- Kiểm tra spam folder
- Đảm bảo SMTP credentials đúng
- Kiểm tra console log để xem lỗi chi tiết

## Lưu ý bảo mật

- **KHÔNG** commit file `.env.local` vào Git
- File `.env.local` đã được thêm vào `.gitignore`
- Chỉ sử dụng App Password, không dùng mật khẩu chính của tài khoản

