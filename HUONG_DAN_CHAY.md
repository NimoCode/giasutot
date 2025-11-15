# 🚀 Hướng Dẫn Chạy Dự Án Next.js trong Visual Studio Code

## ❌ Lỗi: 'next' is not recognized

Lỗi này xảy ra vì **chưa cài đặt dependencies** (thư viện cần thiết) cho dự án.

## ✅ Cách Sửa Lỗi

### Bước 1: Mở Terminal trong VS Code

1. Mở Visual Studio Code
2. Mở thư mục dự án `web_gs`
3. Mở Terminal bằng một trong các cách:
   - Nhấn `` Ctrl + ` `` (Ctrl + dấu backtick)
   - Hoặc vào menu: **Terminal** → **New Terminal**
   - Hoặc vào menu: **View** → **Terminal**

### Bước 2: Cài đặt Dependencies

Trong Terminal, chạy lệnh:

```powershell
npm install
```

Hoặc sử dụng script có sẵn:

```powershell
.\setup.ps1
```

**Lưu ý:** Nếu gặp lỗi về Execution Policy, chạy lệnh này trước:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
```

### Bước 3: Chạy Development Server

Sau khi cài đặt xong, chạy lệnh:

```powershell
npm run dev
```

Hoặc sử dụng script:

```powershell
.\dev.ps1
```

### Bước 4: Mở trình duyệt

Mở trình duyệt và truy cập: **http://localhost:3000**

---

## 📋 Các Lệnh Thường Dùng

| Lệnh | Mô tả |
|------|-------|
| `npm install` | Cài đặt tất cả dependencies |
| `npm run dev` | Chạy development server (localhost:3000) |
| `npm run build` | Build dự án cho production |
| `npm run start` | Chạy production server (sau khi build) |
| `npm run lint` | Kiểm tra lỗi code |
| `npm test` | Chạy tests |

---

## 🔧 Yêu Cầu Hệ Thống

- **Node.js**: Phiên bản 18 trở lên
- **npm**: Đi kèm với Node.js

Kiểm tra phiên bản:
```powershell
node --version
npm --version
```

Nếu chưa có Node.js, tải về tại: https://nodejs.org/

---

## 💡 Tips cho VS Code

1. **Extensions hữu ích:**
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - TypeScript và JavaScript Language Features (có sẵn)

2. **Debug trong VS Code:**
   - Tạo file `.vscode/launch.json` để debug Next.js
   - Hoặc sử dụng Chrome DevTools với `npm run dev`

3. **Terminal tích hợp:**
   - VS Code có terminal tích hợp, không cần mở PowerShell riêng
   - Có thể mở nhiều terminal cùng lúc

---

## 🆘 Xử Lý Lỗi Thường Gặp

### Lỗi: "npm is not recognized"
→ Cài đặt Node.js từ https://nodejs.org/

### Lỗi: "Execution Policy"
→ Chạy: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned`

### Lỗi: Port 3000 đã được sử dụng
→ Đổi port: `npm run dev -- -p 3001`

### Lỗi: Module not found
→ Xóa `node_modules` và `package-lock.json`, rồi chạy lại `npm install`

---

## 📝 Quy Trình Làm Việc

1. **Lần đầu tiên:**
   ```powershell
   npm install          # Cài đặt dependencies
   npm run dev          # Chạy development server
   ```

2. **Các lần sau:**
   ```powershell
   npm run dev          # Chỉ cần chạy lệnh này
   ```

3. **Khi có thay đổi package.json:**
   ```powershell
   npm install          # Cài lại dependencies
   ```

---

Chúc bạn code vui vẻ! 🎉



