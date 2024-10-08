"use client";

import React from "react";
import Image from "next/image";

import useHeader from "@/hooks/useHeader";

import ArrowRoundDown from "@/assets/ArrowRoundDown";
import ArrowRoundUp from "@/assets/ArrowRoundUp";
import Logo from "@/../public/assets/maple/GG_logo.png";
import Link from "next/link";

const Header = () => {
  const {
    gameArr,
    isSelectView,
    onClickGameSet,
    onClickIsSelectViewToggleHandler,
    selectGame,
  } = useHeader();

  return (
    <header className="py-3 px-10 w-full h-28 border-b border-solid border-black">
      <div className="flex items-center gap-10 h-full">
        <Link href={"/"} className="flex items-center gap-3 w-fit h-full">
          <Image src={Logo} alt="로고" className="w-auto h-full" />
          <p className="text-title/32px font-DungGeunMo">Good_Game</p>
        </Link>
        <div
          onClick={onClickIsSelectViewToggleHandler}
          className="relative flex justify-between items-center p-3 w-48 border border-solid border-black rounded-xl text-body/18px cursor-pointer"
        >
          {selectGame ? selectGame : "전체 게임"}
          {isSelectView ? (
            <ArrowRoundUp className="w-4 h-4" />
          ) : (
            <ArrowRoundDown className="w-4 h-4" />
          )}

          {isSelectView && (
            <div className="absolute left-0 -bottom-12 z-30 border border-solid border-black rounded-lg bg-white">
              {gameArr.map((item) => (
                <div
                  key={item.game}
                  onClick={() => onClickGameSet(item.game)}
                  className="flex items-center p-3 w-48 text-body/18px cursor-pointer"
                >
                  {item.game}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
