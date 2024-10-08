import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/../public/assets/maple/GG_logo.png";

const Header = () => {
  return (
    <header className="p-4 w-full h-28 border-b border-solid border-black">
      <Link href={"/"} className="flex items-center gap-3 h-full">
        <Image src={Logo} alt="로고" className="w-auto h-full" />
        <p className="text-title/32px">Good_Game</p>
      </Link>
    </header>
  );
};

export default Header;
