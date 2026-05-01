import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Việt Tree AI | Computer Vision B2B",
  description:
    "Giải pháp thị giác máy tính cho Công nghiệp và Nông nghiệp của Việt Tree AI.",
  icons: {
    icon: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
