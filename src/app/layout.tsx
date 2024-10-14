import type { Metadata } from "next";

import Header from "@/components/common/Header";
import Provider from "./Provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "GG",
  description: "good-game information",
  keywords: ["게임", "굿게임", "rntrpdla", "good-game", "굿-게임", "rnt-rpdla"],
  openGraph: {
    siteName: "Good-Game",
    title: "Good-Game",
    description: "게임 캐릭터를 검색하여 캐릭터 정보를 확인해보세요!",
    url: "https://gg-ashen-five.vercel.app/",
    locale: "ko_KR",
    type: "website",
    images: {
      url: "../../public/assets/GG_logo.png",
    },
  },
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
