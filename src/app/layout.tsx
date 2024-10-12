import type { Metadata } from "next";

import Header from "@/components/common/Header";
import Provider from "./Provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "GG",
  description: "good-game information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-Pretendard antialiased bg-bg-100">
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
