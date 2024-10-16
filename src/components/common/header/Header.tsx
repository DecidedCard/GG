import React from "react";
import Image from "next/image";
import Link from "next/link";

import GameSelector from "./GameSelector";

import Logo from "@/../public/assets/GG_logo.png";

const Header = () => {
  return (
    <header className="py-3 px-10 w-full h-28 bg-bg-200">
      <div className="flex items-center gap-10 mx-auto w-[1280px] h-full text-text-100">
        <Link href={"/"} className="flex items-center gap-3 w-fit h-full">
          <Image
            src={Logo}
            alt="로고"
            className="w-auto h-full"
            priority={true}
          />
          <h1 className="text-title/32px font-DungGeunMo">Good_Game</h1>
        </Link>
        <GameSelector />
      </div>
    </header>
  );
};

export default Header;
