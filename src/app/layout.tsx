import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "game-information",
  description: "game-information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-Pretendard antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
