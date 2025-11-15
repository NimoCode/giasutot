import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validate phone number (Vietnamese format)
function validatePhone(phone: string): boolean {
  const phoneRegex = /^(0|\+84)[1-9][0-9]{8,9}$/;
  const cleanPhone = phone.replace(/\s/g, "");
  return phoneRegex.test(cleanPhone);
}

// Validate email format
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, parentPhone, studentAge, subject, preferredTime } = body;

    // Validation
    const errors: string[] = [];

    if (!name || name.trim().length < 2) {
      errors.push("Họ tên phụ huynh phải có ít nhất 2 ký tự");
    }

    if (!parentPhone || !validatePhone(parentPhone)) {
      errors.push("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam (ví dụ: 0900123456)");
    }

    if (!studentAge) {
      errors.push("Vui lòng chọn độ tuổi học sinh");
    }

    if (!subject || subject.trim().length < 1) {
      errors.push("Vui lòng nhập môn học quan tâm");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Create transporter
    // For Gmail, you need to use App Password or OAuth2
    // Update SMTP configuration in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD, // Use App Password for Gmail
      },
    });

    // Email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF9AA2 0%, #0087FF 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .info-row { margin-bottom: 15px; padding: 10px; background: white; border-radius: 4px; }
            .label { font-weight: bold; color: #666; }
            .value { color: #333; margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎓 Đăng ký học thử mới</h2>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">Họ tên phụ huynh:</div>
                <div class="value">${name}</div>
              </div>
              <div class="info-row">
                <div class="label">Số điện thoại:</div>
                <div class="value">${parentPhone}</div>
              </div>
              <div class="info-row">
                <div class="label">Độ tuổi học sinh:</div>
                <div class="value">${studentAge}</div>
              </div>
              <div class="info-row">
                <div class="label">Môn học quan tâm:</div>
                <div class="value">${subject}</div>
              </div>
              ${preferredTime ? `
              <div class="info-row">
                <div class="label">Thời gian học mong muốn:</div>
                <div class="value">${preferredTime}</div>
              </div>
              ` : ''}
              <div class="info-row">
                <div class="label">Thời gian đăng ký:</div>
                <div class="value">${new Date().toLocaleString("vi-VN")}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
Đăng ký học thử mới

Họ tên phụ huynh: ${name}
Số điện thoại: ${parentPhone}
Độ tuổi học sinh: ${studentAge}
Môn học quan tâm: ${subject}
${preferredTime ? `Thời gian học mong muốn: ${preferredTime}` : ''}
Thời gian đăng ký: ${new Date().toLocaleString("vi-VN")}
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Gia Sư Tiếng Anh" <${process.env.SMTP_USER}>`,
      to: "nguyenducdufedev@gmail.com",
      subject: `🎓 Đăng ký học thử mới - ${name}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể." 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { 
        success: false, 
        errors: ["Có lỗi xảy ra khi gửi đăng ký. Vui lòng thử lại sau."],
        error: process.env.NODE_ENV === "development" ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

