import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET(request: NextRequest) {
  try {
    // Check environment variables
    const hasApiKey = !!process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    
    if (!hasApiKey) {
      return NextResponse.json({
        success: false,
        message: "RESEND_API_KEY chưa được cấu hình trong .env.local",
        config: {
          hasApiKey: false,
          fromEmail: fromEmail,
        }
      }, { status: 500 });
    }

    // Try to initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send a test email
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: "nguyenducdufedev@gmail.com",
      subject: "🧪 Test Email từ Gia Sư Tiếng Anh",
      html: `
        <h2>Test Email</h2>
        <p>Nếu bạn nhận được email này, nghĩa là cấu hình email đã hoạt động!</p>
        <p>Thời gian: ${new Date().toLocaleString("vi-VN")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: "Lỗi khi gửi email",
        error: error,
        config: {
          hasApiKey: true,
          fromEmail: fromEmail,
        }
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Email test đã được gửi thành công!",
      emailId: data?.id,
      config: {
        hasApiKey: true,
        fromEmail: fromEmail,
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Lỗi không xác định",
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    }, { status: 500 });
  }
}



