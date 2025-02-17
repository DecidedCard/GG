import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "mapleGG",
  description: "굿게임 메이플 정보 페이지",
  keywords: ["게임", "굿게임", "good-game", "굿-게임", "메이플"],
  openGraph: {
    siteName: "Good-Game/maple",
    title: "Good-Game/maple",
    description: "굿게임 메이플 랭킹 및 캐릭터 검색 페이지",
    url: "https://gg-ashen-five.vercel.app/maple",
    locale: "ko_KR",
    type: "website",
    images: {
      url: "https://github.com/user-attachments/assets/6eb114ad-dce8-4515-a2dd-30fb9a9fd2c6",
    },
  },
};

const MapleLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-grow">{children}</main>;
};

export default MapleLayout;
