import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ParticleBackground from "@/components/ui/ParticleBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gia Sư Tiếng Anh Chuyên Nghiệp | Dạy Kèm Trẻ Em",
  description:
    "Dịch vụ gia sư tiếng Anh chuyên nghiệp cho trẻ em. Phương pháp dạy vui nhộn, tương tác cao. Đăng ký học thử miễn phí ngay!",
  keywords: [
    "gia sư tiếng Anh",
    "dạy kèm tiếng Anh",
    "gia sư trẻ em",
    "học tiếng Anh online",
    "gia sư Hà Nội",
  ],
  openGraph: {
    title: "Gia Sư Tiếng Anh Chuyên Nghiệp | Dạy Kèm Trẻ Em",
    description:
      "Dịch vụ gia sư tiếng Anh chuyên nghiệp cho trẻ em. Phương pháp dạy vui nhộn, tương tác cao.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollProgress />
        <ParticleBackground />
        <div className="flex min-h-screen flex-col relative z-10">
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


