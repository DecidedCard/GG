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
      url: "https://jrqkhwwuxmnvghqziyjx.supabase.co/storage/v1/object/sign/ogImage/GG_logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvZ0ltYWdlL0dHX2xvZ28ucG5nIiwiaWF0IjoxNzI4OTIwODU1LCJleHAiOjE3NjA0NTY4NTV9.yNbDD3gPSQLMFECKfwGpXVxahYk0QdX5UqsuKzoX2WY&t=2024-10-14T15%3A47%3A36.236Z",
    },
  },
};

const MapleLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default MapleLayout;
