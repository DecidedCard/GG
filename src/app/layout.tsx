import type { Metadata } from "next";

import Header from "@/components/common/Header";
import Provider from "./Provider";

import "./globals.css";

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
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
