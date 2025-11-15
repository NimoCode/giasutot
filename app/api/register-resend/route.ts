import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Validate phone number (Vietnamese format)
function validatePhone(phone: string): boolean {
  const phoneRegex = /^(0|\+84)[1-9][0-9]{8,9}$/;
  const cleanPhone = phone.replace(/\s/g, "");
  return phoneRegex.test(cleanPhone);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, parentPhone, studentAge, subject, preferredTime, tutorId, tutorName, courseId } = body;

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

    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          errors: ["Email service chưa được cấu hình. Vui lòng kiểm tra RESEND_API_KEY trong .env.local"]
        },
        { status: 500 }
      );
    }

    // Check if from email is configured
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    if (!fromEmail) {
      return NextResponse.json(
        { 
          success: false, 
          errors: ["Email sender chưa được cấu hình. Vui lòng thêm RESEND_FROM_EMAIL trong Environment Variables. Email phải được verify trong Resend."]
        },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Course names mapping for email subject
    const courseNames: Record<string, string> = {
      trial: "Gói học thử",
      basic: "Gói cơ bản",
      advanced: "Gói chuyên sâu",
    };

    // Get course name, default to "Gói học thử" if courseId is not provided or invalid
    const courseName = (courseId && courseNames[courseId]) ? courseNames[courseId] : "Gói học thử";

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
              <h2>🎓 Đăng ký ${courseName}</h2>
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
              ${tutorId && tutorName ? `
              <div class="info-row" style="background: #e3f2fd; border-left: 4px solid #0087FF;">
                <div class="label" style="color: #0087FF; font-size: 16px;">👨‍🏫 Giáo viên được đăng ký:</div>
                <div class="value" style="color: #1976d2; font-weight: bold; font-size: 16px; margin-top: 8px;">${tutorName}</div>
                <div class="value" style="color: #666; font-size: 14px; margin-top: 4px;">ID: ${tutorId}</div>
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

    // Email subject - prioritize tutor, then course, then default
    let emailSubject = `🎓 Đăng ký ${courseName} - ${name}`;
    if (tutorId && tutorName) {
      emailSubject = `🎓 Đăng ký học với giáo viên ${tutorName} - ${name}`;
    }

    // Email text version
    const emailText = `
Đăng ký ${courseName}

Họ tên phụ huynh: ${name}
Số điện thoại: ${parentPhone}
Độ tuổi học sinh: ${studentAge}
Môn học quan tâm: ${subject}
${preferredTime ? `Thời gian học mong muốn: ${preferredTime}` : ''}
${tutorId && tutorName ? `\n👨‍🏫 Giáo viên được đăng ký: ${tutorName} (ID: ${tutorId})` : ''}
Thời gian đăng ký: ${new Date().toLocaleString("vi-VN")}
    `;

    // Send email using Resend
    // Note: fromEmail must be verified in Resend account
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: "nguyenducdufedev@gmail.com",
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { 
          success: false, 
          errors: ["Có lỗi xảy ra khi gửi đăng ký. Vui lòng thử lại sau."],
          error: process.env.NODE_ENV === "development" ? error.message : undefined
        },
        { status: 500 }
      );
    }

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

