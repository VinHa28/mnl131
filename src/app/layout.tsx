import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Chủ Nghĩa Xã Hội Khoa Học tại Việt Nam",
  description: "Khám phá sức sống vĩ đại của lý luận khoa học trong công cuộc đổi mới và phát triển đất nước.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
