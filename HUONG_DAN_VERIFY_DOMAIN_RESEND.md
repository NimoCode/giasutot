# 🔐 Hướng dẫn Verify Domain trong Resend

Nếu bạn không thấy subdomain trong Resend, bạn cần verify domain riêng của mình.

## 📋 Yêu cầu

- Có domain riêng (ví dụ: `giasutot.com`, `yourdomain.com`)
- Quyền truy cập DNS của domain

## 🚀 Các bước Verify Domain

### Bước 1: Vào Resend Dashboard

1. Truy cập: https://resend.com
2. Đăng nhập
3. Click **"Domains"** ở sidebar bên trái

### Bước 2: Add Domain

1. Click nút **"Add Domain"** hoặc **"Add"**
2. Nhập domain của bạn (ví dụ: `giasutot.com`)
   - **KHÔNG** nhập `www.giasutot.com` (chỉ nhập domain gốc)
3. Click **"Add"**

### Bước 3: Thêm DNS Records

Resend sẽ hiển thị các DNS records cần thêm. Bạn cần thêm vào DNS của domain:

**Ví dụ DNS records cần thêm:**

1. **SPF Record** (Type: TXT)
   - Name: `@` hoặc domain gốc
   - Value: `v=spf1 include:_spf.resend.com ~all`

2. **DKIM Record** (Type: TXT)
   - Name: `resend._domainkey` hoặc `resend._domainkey.giasutot.com`
   - Value: (Resend sẽ cung cấp, dạng: `p=...`)

3. **DMARC Record** (Type: TXT) - Tùy chọn
   - Name: `_dmarc`
   - Value: `v=DMARC1; p=none;`

**Cách thêm DNS records:**

1. Đăng nhập vào nhà cung cấp domain (GoDaddy, Namecheap, Cloudflare, v.v.)
2. Vào phần **DNS Management** hoặc **DNS Settings**
3. Thêm từng record theo hướng dẫn của Resend
4. Lưu lại

### Bước 4: Đợi Verify

1. Quay lại Resend Dashboard
2. Resend sẽ tự động kiểm tra DNS records
3. Đợi 5-15 phút (có thể lâu hơn tùy DNS provider)
4. Khi verify thành công, bạn sẽ thấy status: **"Verified"** ✅

### Bước 5: Sử dụng Email từ Domain

Sau khi verify, bạn có thể dùng email từ domain:

- `noreply@giasutot.com`
- `hello@giasutot.com`
- `contact@giasutot.com`
- Hoặc bất kỳ email nào từ domain đã verify

### Bước 6: Cập nhật trên Vercel

1. Vào Vercel Dashboard > Project > Settings > Environment Variables
2. Tìm `RESEND_FROM_EMAIL`
3. Sửa Value thành: `noreply@giasutot.com` (hoặc email từ domain đã verify)
4. Click **"Save"**
5. **Redeploy** deployment mới nhất

---

## ❓ Nếu không có Domain riêng?

Nếu bạn không có domain riêng, có thể:

1. **Mua domain** (khoảng $10-15/năm từ Namecheap, GoDaddy, v.v.)
2. **Dùng Gmail SMTP** thay vì Resend (xem hướng dẫn bên dưới)
3. **Liên hệ Resend support** để hỏi về subdomain miễn phí

---

## 🔄 Chuyển sang Gmail SMTP (Nếu không có domain)

Nếu không muốn verify domain, bạn có thể dùng Gmail SMTP:

### Bước 1: Tạo App Password Gmail

1. Vào: https://myaccount.google.com/apppasswords
2. Đăng nhập Gmail
3. Chọn **"Mail"** và **"Other (Custom name)"**
4. Nhập tên: `Next.js App`
5. Click **"Generate"**
6. **Copy 16 ký tự password** (dạng: `abcd efgh ijkl mnop`)

### Bước 2: Cập nhật Environment Variables trên Vercel

Thêm các biến sau:

```
NEXT_PUBLIC_USE_RESEND=false
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
```

### Bước 3: Redeploy

Redeploy deployment mới nhất trên Vercel.

---

## ✅ Checklist

- [ ] Đã có domain riêng
- [ ] Đã thêm domain vào Resend
- [ ] Đã thêm DNS records
- [ ] Domain đã verify thành công
- [ ] Đã cập nhật RESEND_FROM_EMAIL trên Vercel
- [ ] Đã redeploy
- [ ] Test form đăng ký thành công

---

**Chúc bạn thành công! 🎉**

