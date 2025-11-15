# Hướng dẫn kiểm tra và sửa lỗi Email

## ✅ Bước 1: Kiểm tra cấu hình

File `.env.local` đã có:
- ✅ RESEND_API_KEY: `re_HySxLy5d_H1YBYRFWBQTtcjsB4MzgiEUm`
- ✅ RESEND_FROM_EMAIL: `onboarding@resend.dev`

## 🔄 Bước 2: Restart Server (QUAN TRỌNG!)

Sau khi thêm/sửa `.env.local`, bạn **PHẢI** restart server:

1. **Dừng server hiện tại**: Nhấn `Ctrl + C` trong terminal
2. **Khởi động lại**:
   ```bash
   npm run dev
   ```

**Lưu ý**: Next.js chỉ đọc `.env.local` khi khởi động. Nếu không restart, thay đổi sẽ không có hiệu lực!

## 🧪 Bước 3: Test Email

Sau khi restart server, mở trình duyệt và truy cập:

```
http://localhost:3000/api/test-email
```

Nếu thấy:
- ✅ `"success": true` → Email đã hoạt động!
- ❌ `"success": false` → Xem thông báo lỗi

## 🔍 Bước 4: Kiểm tra lỗi thường gặp

### Lỗi: "RESEND_API_KEY chưa được cấu hình"
- **Nguyên nhân**: Server chưa restart sau khi thêm .env.local
- **Giải pháp**: Restart server (Bước 2)

### Lỗi: "Invalid API key" hoặc "Unauthorized"
- **Nguyên nhân**: API key không đúng hoặc đã bị xóa
- **Giải pháp**: 
  1. Vào https://resend.com/api-keys
  2. Tạo API key mới
  3. Copy và cập nhật vào .env.local
  4. Restart server

### Lỗi: "Domain not verified"
- **Nguyên nhân**: Đang dùng email không phải onboarding@resend.dev
- **Giải pháp**: Đảm bảo `RESEND_FROM_EMAIL=onboarding@resend.dev`

### Email không đến
- Kiểm tra spam folder
- Kiểm tra API key có đúng không
- Xem console log trong terminal để biết lỗi chi tiết

## 📝 Bước 5: Test form đăng ký

1. Mở website: http://localhost:3000
2. Click "Đăng ký học thử"
3. Điền form và submit
4. Kiểm tra:
   - Thông báo thành công/thất bại
   - Console log trong terminal
   - Email đến nguyenducdufedev@gmail.com

## 🆘 Nếu vẫn không hoạt động

1. **Kiểm tra console log** trong terminal khi submit form
2. **Kiểm tra Network tab** trong DevTools (F12) → Xem response từ `/api/register-resend`
3. **Test API trực tiếp**: Truy cập `http://localhost:3000/api/test-email`

Gửi cho tôi:
- Thông báo lỗi trong console
- Response từ API test
- Screenshot lỗi (nếu có)



