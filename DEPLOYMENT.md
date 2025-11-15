# Hướng dẫn Deploy

Hướng dẫn chi tiết để deploy landing page lên các nền tảng khác nhau.

> **⚠️ LƯU Ý QUAN TRỌNG**: Dự án này sử dụng Next.js API Routes (gửi email), nên **KHÔNG THỂ** deploy dạng static export. Phải sử dụng các nền tảng hỗ trợ serverless functions như Vercel, Netlify, hoặc VPS.

## 🚀 Vercel (Khuyến nghị - Dễ nhất)

Vercel là nền tảng tốt nhất cho Next.js với tích hợp tự động và hỗ trợ đầy đủ API Routes.

### Bước 1: Chuẩn bị

1. ✅ Đảm bảo code đã được push lên GitHub/GitLab/Bitbucket
2. ✅ Tạo tài khoản Vercel tại [vercel.com](https://vercel.com) (miễn phí)

### Bước 2: Deploy

1. Đăng nhập Vercel và click **"New Project"**
2. Chọn **"Import Git Repository"** và chọn repository của bạn
3. Vercel sẽ tự động detect Next.js và cấu hình
4. Click **"Deploy"**
5. Đợi build hoàn tất (thường 2-3 phút)

### Bước 3: Cấu hình Environment Variables (QUAN TRỌNG)

Sau khi deploy xong, **BẮT BUỘC** phải cấu hình các biến môi trường:

1. Vào project trên Vercel > **Settings** > **Environment Variables**
2. Thêm các biến sau:

#### Nếu dùng Resend (KHUYẾN NGHỊ):
```
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_USE_RESEND=true
```

#### Hoặc nếu dùng SMTP/Gmail:
```
NEXT_PUBLIC_USE_RESEND=false
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

3. Chọn môi trường: **Production**, **Preview**, và **Development**
4. Click **"Save"**
5. Vào tab **Deployments** > Click **"..."** trên deployment mới nhất > **"Redeploy"** để áp dụng biến môi trường

### Bước 4: Kiểm tra

1. Truy cập URL được Vercel cung cấp (dạng: `https://your-project.vercel.app`)
2. Test form đăng ký để đảm bảo email được gửi thành công
3. Kiểm tra console và logs trên Vercel nếu có lỗi

### Ưu điểm

- ✅ Tự động deploy khi push code
- ✅ Preview deployments cho mỗi PR
- ✅ CDN toàn cầu
- ✅ SSL tự động
- ✅ Analytics tích hợp
- ✅ Hỗ trợ đầy đủ Next.js API Routes
- ✅ Miễn phí cho dự án cá nhân

## 📦 GitHub Pages

> **⚠️ LƯU Ý**: GitHub Pages **KHÔNG HỖ TRỢ** Next.js API Routes. Nếu deploy lên GitHub Pages, form đăng ký sẽ không hoạt động vì không có server để xử lý email. Chỉ nên dùng GitHub Pages nếu bạn muốn deploy phiên bản demo/static.

### Bước 1: Cài đặt

```bash
npm install --save-dev gh-pages
```

### Bước 2: Cấu hình Next.js

Cập nhật `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/web_gs' : '', // Thay 'web_gs' bằng tên repo
  assetPrefix: process.env.NODE_ENV === 'production' ? '/web_gs' : '',
};

module.exports = nextConfig;
```

### Bước 3: Thêm script

Cập nhật `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out"
  }
}
```

### Bước 4: Deploy

```bash
npm run deploy
```

### Bước 5: Cấu hình GitHub

1. Vào Settings > Pages của repository
2. Chọn source: "gh-pages branch"
3. Save

**⚠️ Lưu ý**: GitHub Pages chỉ hỗ trợ static export, API Routes sẽ không hoạt động.

## 🌐 Netlify

### Bước 1: Chuẩn bị

1. Push code lên Git repository
2. Tạo tài khoản Netlify tại [netlify.com](https://netlify.com)

### Bước 2: Deploy qua UI

1. Đăng nhập Netlify
2. Click **"Add new site"** > **"Import an existing project"**
3. Chọn Git provider và repository
4. Cấu hình:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **"Deploy site"**

### Bước 2.5: Cấu hình Environment Variables

1. Sau khi deploy, vào **Site settings** > **Environment variables**
2. Thêm các biến môi trường tương tự như Vercel (RESEND_API_KEY, v.v.)
3. **Trigger redeploy** để áp dụng

### Bước 3: Deploy qua CLI

```bash
# Cài đặt Netlify CLI
npm install -g netlify-cli

# Đăng nhập
netlify login

# Deploy
netlify deploy --prod
```

### Cấu hình `netlify.toml` (tùy chọn)

Tạo file `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🔧 VPS/Server (Manual)

### Yêu cầu

- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

### Bước 1: Build

```bash
npm run build
```

### Bước 2: Cài đặt PM2

```bash
npm install -g pm2
```

### Bước 3: Tạo ecosystem file

Tạo `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [
    {
      name: 'web-gs',
      script: 'npm',
      args: 'start',
      cwd: '/path/to/your/project',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
```

### Bước 4: Chạy với PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Bước 5: Cấu hình Nginx

Tạo file `/etc/nginx/sites-available/web-gs`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/web-gs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Bước 6: SSL với Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 📱 Environment Variables

### Biến môi trường BẮT BUỘC cho dự án này:

#### Nếu dùng Resend (KHUYẾN NGHỊ):
```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_USE_RESEND=true
```

**Cách lấy RESEND_API_KEY:**
1. Đăng ký tài khoản miễn phí tại: https://resend.com
2. Vào **API Keys** > **Create API Key**
3. Copy API key (bắt đầu bằng `re_`)
4. Dán vào environment variables trên platform deploy

#### Hoặc nếu dùng SMTP/Gmail:
```env
NEXT_PUBLIC_USE_RESEND=false
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

**Lưu ý**: 
- Variables bắt đầu với `NEXT_PUBLIC_` sẽ được expose ra client
- **KHÔNG BAO GIỜ** commit file `.env.local` lên Git
- Luôn thêm environment variables trên platform deploy (Vercel/Netlify/VPS)

## ✅ Checklist sau khi deploy

### Trước khi deploy:
- [ ] Code đã được push lên Git repository
- [ ] Đã có API key từ Resend (hoặc cấu hình SMTP)
- [ ] Đã test chạy local (`npm run dev`) và form đăng ký hoạt động

### Sau khi deploy:
- [ ] Website load được và không có lỗi console
- [ ] **Environment variables đã được cấu hình đúng**
- [ ] **Form đăng ký hoạt động và gửi email thành công** ⚠️ QUAN TRỌNG
- [ ] Tất cả images hiển thị đúng
- [ ] Navigation hoạt động
- [ ] Responsive trên mobile/tablet/desktop
- [ ] SEO meta tags đúng
- [ ] SSL certificate hoạt động (HTTPS)
- [ ] Performance tốt (check Lighthouse)
- [ ] Analytics tracking (nếu có)

## 🐛 Troubleshooting

### Build fails

- Kiểm tra Node.js version (cần 18+)
- Xóa `.next` và `node_modules`, chạy lại `npm install`
- Kiểm tra lỗi trong build log

### Images không hiển thị

- Đảm bảo images trong `/public` folder
- Kiểm tra đường dẫn trong code (phải bắt đầu với `/`)
- Nếu dùng GitHub Pages, cần `unoptimized: true` trong next.config.js

### Routing không hoạt động

- Với static export, đảm bảo dùng `output: 'export'`
- Kiểm tra `basePath` nếu deploy vào subdirectory

### Performance issues

- Enable Next.js Image Optimization (nếu không dùng static export)
- Optimize images trước khi upload
- Enable compression trong server config

## 📞 Hỗ trợ

Nếu gặp vấn đề, kiểm tra:
1. Next.js documentation: https://nextjs.org/docs
2. Platform-specific docs (Vercel, Netlify, etc.)
3. GitHub Issues của project

---

**Lưu ý**: Mỗi platform có ưu nhược điểm riêng. Vercel là lựa chọn tốt nhất cho Next.js, nhưng GitHub Pages phù hợp nếu muốn miễn phí và đơn giản.


