# 📤 Hướng dẫn Push Code lên GitHub/GitLab/Bitbucket

Hướng dẫn chi tiết cách đẩy code lên Git repository để chuẩn bị deploy.

## 📋 Mục lục

1. [Cài đặt Git](#cài-đặt-git)
2. [Push lên GitHub](#push-lên-github)
3. [Push lên GitLab](#push-lên-gitlab)
4. [Push lên Bitbucket](#push-lên-bitbucket)
5. [Xử lý lỗi thường gặp](#xử-lý-lỗi-thường-gặp)

---

## 🔧 Cài đặt Git

### Windows

1. Tải Git: https://git-scm.com/download/win
2. Cài đặt với tất cả options mặc định
3. Mở **Git Bash** hoặc **PowerShell** để sử dụng

### Kiểm tra cài đặt

```bash
git --version
```

Nếu hiển thị version (ví dụ: `git version 2.43.0`) = thành công ✅

### Cấu hình Git lần đầu (chỉ cần làm 1 lần)

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

**Ví dụ:**
```bash
git config --global user.name "Nguyen Duc Du"
git config --global user.email "nguyenducdufedev@gmail.com"
```

---

## 📤 Push lên GitHub

### Bước 1: Tạo repository trên GitHub

1. Đăng nhập GitHub: https://github.com
2. Click nút **"+"** góc trên bên phải > **"New repository"**
3. Điền thông tin:
   - **Repository name**: `web_gs` (hoặc tên bạn muốn)
   - **Description**: `Landing page gia sư tiếng Anh` (tùy chọn)
   - **Visibility**: 
     - Chọn **Public** (miễn phí, ai cũng xem được)
     - Hoặc **Private** (chỉ bạn xem được, cần trả phí)
   - **⚠️ KHÔNG TICK** "Initialize with README" (vì đã có code)
4. Click **"Create repository"**

### Bước 2: Copy URL repository

Sau khi tạo xong, GitHub sẽ hiển thị URL, copy URL này:

- **HTTPS**: `https://github.com/username/web_gs.git`
- **SSH**: `git@github.com:username/web_gs.git` (cần cấu hình SSH key)

Dùng **HTTPS** cho dễ (không cần cấu hình thêm).

### Bước 3: Mở terminal trong thư mục dự án

**Windows:**
- Click chuột phải vào thư mục dự án
- Chọn **"Git Bash Here"** hoặc **"Open in Terminal"**

**Hoặc:**
```bash
cd "C:\Users\Nguyen Duc Du\Desktop\web_gs"
```

### Bước 4: Khởi tạo Git (nếu chưa có)

Kiểm tra xem đã có Git chưa:

```bash
git status
```

**Nếu hiện lỗi**: "not a git repository" → Chưa khởi tạo Git

**Khởi tạo Git:**
```bash
git init
```

**Nếu đã có Git** (hiển thị danh sách file) → Bỏ qua bước này

### Bước 5: Thêm file .gitignore (nếu chưa có)

Kiểm tra file `.gitignore` đã có chưa:

```bash
ls .gitignore
# hoặc trên Windows PowerShell:
dir .gitignore
```

**Nếu chưa có**, tạo file `.gitignore`:

```bash
# Tạo file .gitignore (Windows PowerShell)
@"
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo
"@ | Out-File -FilePath .gitignore -Encoding utf8
```

**Hoặc tạo thủ công**: Tạo file `.gitignore` trong thư mục gốc với nội dung trên.

### Bước 6: Add và Commit code

```bash
# Add tất cả file vào staging
git add .

# Commit với message
git commit -m "Initial commit: Landing page gia sư tiếng Anh"
```

**Giải thích:**
- `git add .` = Thêm tất cả file vào staging area
- `git commit -m "message"` = Lưu snapshot với message mô tả

### Bước 7: Kết nối với GitHub và Push

```bash
# Thêm remote repository
git remote add origin https://github.com/username/web_gs.git

# Đổi tên branch thành main (nếu cần)
git branch -M main

# Push code lên GitHub
git push -u origin main
```

**Lưu ý:** Thay `username` bằng username GitHub của bạn.

**Nếu yêu cầu đăng nhập:**
- GitHub sẽ mở browser để đăng nhập
- Hoặc nhập username/password (nếu dùng Personal Access Token)

### Bước 8: Kiểm tra

1. Truy cập: `https://github.com/username/web_gs`
2. Xem code đã được push lên chưa
3. Nếu thấy tất cả file = **Thành công!** ✅

---

## 📤 Push lên GitLab

### Bước 1: Tạo project trên GitLab

1. Đăng nhập GitLab: https://gitlab.com
2. Click **"New project"** hoặc **"+"** > **"New project/repository"**
3. Chọn **"Create blank project"**
4. Điền thông tin:
   - **Project name**: `web_gs`
   - **Visibility Level**: 
     - **Public** (miễn phí)
     - **Private** (miễn phí cho cá nhân)
   - **⚠️ KHÔNG TICK** "Initialize repository with a README"
5. Click **"Create project"**

### Bước 2: Copy URL repository

Copy URL hiển thị sau khi tạo project:

- **HTTPS**: `https://gitlab.com/username/web_gs.git`
- **SSH**: `git@gitlab.com:username/web_gs.git`

### Bước 3-7: Tương tự như GitHub

```bash
# Khởi tạo (nếu chưa có)
git init

# Add và commit
git add .
git commit -m "Initial commit: Landing page gia sư tiếng Anh"

# Kết nối với GitLab
git remote add origin https://gitlab.com/username/web_gs.git
git branch -M main
git push -u origin main
```

**Lưu ý:** Thay `username` bằng username GitLab của bạn.

---

## 📤 Push lên Bitbucket

### Bước 1: Tạo repository trên Bitbucket

1. Đăng nhập Bitbucket: https://bitbucket.org
2. Click **"+"** > **"Repository"**
3. Điền thông tin:
   - **Repository name**: `web_gs`
   - **Access level**: 
     - **Public** (ai cũng xem được)
     - **Private** (chỉ bạn xem được, miễn phí)
   - **⚠️ KHÔNG TICK** "Include a README?"
4. Click **"Create repository"**

### Bước 2: Copy URL repository

Copy URL hiển thị:

- **HTTPS**: `https://username@bitbucket.org/username/web_gs.git`
- **SSH**: `git@bitbucket.org:username/web_gs.git`

### Bước 3-7: Tương tự như GitHub

```bash
# Khởi tạo (nếu chưa có)
git init

# Add và commit
git add .
git commit -m "Initial commit: Landing page gia sư tiếng Anh"

# Kết nối với Bitbucket
git remote add origin https://username@bitbucket.org/username/web_gs.git
git branch -M main
git push -u origin main
```

**Lưu ý:** 
- Thay `username` bằng username Bitbucket của bạn
- Bitbucket có thể yêu cầu **App Password** thay vì mật khẩu thường

---

## 🔄 Push code sau khi đã có repository

Nếu đã push lần đầu, các lần sau chỉ cần:

```bash
# Add file mới/thay đổi
git add .

# Commit
git commit -m "Mô tả thay đổi"

# Push lên remote
git push
```

**Ví dụ commit messages:**
```bash
git commit -m "Thêm tính năng đăng ký"
git commit -m "Sửa lỗi responsive mobile"
git commit -m "Cập nhật nội dung FAQ"
```

---

## ❌ Xử lý lỗi thường gặp

### Lỗi 1: "remote origin already exists"

**Nguyên nhân:** Đã có remote origin

**Cách fix:**

```bash
# Xem remote hiện tại
git remote -v

# Xóa remote cũ (nếu cần đổi URL)
git remote remove origin

# Thêm remote mới
git remote add origin https://github.com/username/web_gs.git
```

### Lỗi 2: "failed to push some refs"

**Nguyên nhân:** Remote có code mới hơn local

**Cách fix:**

```bash
# Pull code từ remote trước
git pull origin main --allow-unrelated-histories

# Giải quyết conflict (nếu có), sau đó push lại
git push -u origin main
```

### Lỗi 3: "Permission denied" hoặc "Authentication failed"

**Nguyên nhân:** Chưa đăng nhập hoặc sai thông tin

**Cách fix:**

**GitHub:**
- Dùng **Personal Access Token** thay vì password
- Tạo token: Settings > Developer settings > Personal access tokens > Tokens (classic)
- Copy token và dùng làm password khi push

**GitLab:**
- Dùng **Personal Access Token**: Preferences > Access Tokens

**Bitbucket:**
- Dùng **App Password**: Personal settings > App passwords

### Lỗi 4: "fatal: not a git repository"

**Nguyên nhân:** Chưa khởi tạo Git hoặc không ở đúng thư mục

**Cách fix:**

```bash
# Kiểm tra đang ở thư mục nào
pwd  # Linux/Mac
cd   # Windows PowerShell

# Chuyển đến thư mục dự án
cd "C:\Users\Nguyen Duc Du\Desktop\web_gs"

# Khởi tạo Git
git init
```

### Lỗi 5: "nothing to commit, working tree clean"

**Nguyên nhân:** Không có thay đổi nào để commit

**Giải thích:** Đây không phải lỗi, có nghĩa là code đã được commit hết.

**Nếu muốn push:**
```bash
git push
```

### Lỗi 6: File `.env.local` bị commit

**Nguyên nhân:** Chưa có `.gitignore` hoặc `.gitignore` sai

**Cách fix:**

```bash
# Xóa file khỏi Git (nhưng giữ lại trên máy)
git rm --cached .env.local

# Commit
git commit -m "Remove .env.local from git"

# Push
git push

# Đảm bảo .gitignore có dòng:
# .env*.local
# .env
```

---

## 💡 Tips & Best Practices

### 1. Commit message rõ ràng

**❌ Không tốt:**
```bash
git commit -m "fix"
git commit -m "update"
```

**✅ Tốt:**
```bash
git commit -m "Fix lỗi responsive trên mobile"
git commit -m "Update nội dung phần About"
git commit -m "Thêm validation cho form đăng ký"
```

### 2. Commit thường xuyên

Không nên commit 1 lần với quá nhiều thay đổi. Chia nhỏ thành nhiều commit:

```bash
git add components/
git commit -m "Thêm component Header và Footer"

git add app/page.tsx
git commit -m "Cập nhật trang chủ"

git add styles/
git commit -m "Thêm global styles"
```

### 3. Pull trước khi push

Luôn pull code mới nhất trước khi push (nếu làm việc nhóm):

```bash
git pull origin main
git push
```

### 4. Kiểm tra trước khi commit

```bash
# Xem file nào sẽ được commit
git status

# Xem thay đổi chi tiết
git diff

# Xem file đã được add
git diff --staged
```

---

## 📝 Tóm tắt lệnh Git cơ bản

```bash
# Khởi tạo Git repository
git init

# Xem trạng thái
git status

# Add file vào staging
git add .                    # Tất cả file
git add file-name.js         # File cụ thể

# Commit
git commit -m "Message"

# Xem lịch sử commit
git log

# Kết nối với remote
git remote add origin <URL>

# Push code lên
git push -u origin main

# Pull code về
git pull origin main

# Xem remote
git remote -v

# Đổi remote URL
git remote set-url origin <NEW_URL>
```

---

## ✅ Checklist trước khi Push

- [ ] Đã cài đặt Git
- [ ] Đã cấu hình user.name và user.email
- [ ] Đã tạo repository trên GitHub/GitLab/Bitbucket
- [ ] Đã có file `.gitignore` (không commit `.env.local`)
- [ ] Đã test code chạy được local (`npm run dev`)
- [ ] Đã add và commit code
- [ ] Đã kết nối với remote repository
- [ ] Đã push thành công

---

## 🎉 Hoàn thành!

Sau khi push code lên Git thành công, bạn có thể:

1. ✅ Deploy lên Vercel/Netlify (xem `HUONG_DAN_DEPLOY_NHANH.md`)
2. ✅ Chia sẻ code với team
3. ✅ Backup code trên cloud
4. ✅ Theo dõi lịch sử thay đổi

**Chúc bạn thành công! 🚀**

---

## 📞 Cần giúp đỡ?

- 📖 Git Documentation: https://git-scm.com/doc
- 📖 GitHub Docs: https://docs.github.com
- 📖 GitLab Docs: https://docs.gitlab.com
- 📖 Bitbucket Docs: https://support.atlassian.com/bitbucket-cloud/

