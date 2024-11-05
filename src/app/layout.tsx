import type { Metadata } from "next";

import Header from "@/components/common/header/Header";
import Footer from "@/components/common/Footer";
import ErrorModal from "@/components/common/ErrorModal";
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
      url: "https://github.com/user-attachments/assets/6eb114ad-dce8-4515-a2dd-30fb9a9fd2c6",
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko" className="min-h-full">
      <body className="font-Pretendard antialiased bg-bg-100 min-h-screen">
        <Provider>
          <ErrorModal>
            <Header />
            {children}
            <Footer />
          </ErrorModal>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
