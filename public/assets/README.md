# Assets Directory

Thư mục này chứa các file tĩnh như images, icons, và các assets khác.

## Cấu trúc

```
assets/
├── avatars/          # Ảnh đại diện của gia sư
│   ├── thao.webp
│   ├── minh-anh.webp
│   ├── huong-giang.webp
│   ├── duc-hung.webp
│   └── mai.webp
└── tutors/           # Ảnh gallery của gia sư
    ├── thao-1.webp
    └── ...
```

## Yêu cầu ảnh

### Avatars
- Format: WebP (khuyến nghị) hoặc JPG/PNG
- Kích thước: 400x400px
- Tỷ lệ: 1:1 (vuông)
- Dung lượng: < 100KB

### Gallery Images
- Format: WebP (khuyến nghị) hoặc JPG
- Kích thước: 1200x800px (tỷ lệ 3:2)
- Dung lượng: < 300KB

## Tools để optimize ảnh

- [Squoosh](https://squoosh.app/) - Online image optimizer
- [ImageOptim](https://imageoptim.com/) - Desktop app
- [TinyPNG](https://tinypng.com/) - Online compressor

## Lưu ý

- Luôn sử dụng format WebP để tối ưu performance
- Đảm bảo ảnh có alt text phù hợp
- Sử dụng lazy loading cho ảnh không quan trọng

