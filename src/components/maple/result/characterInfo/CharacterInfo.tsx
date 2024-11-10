"use client";

import React from "react";
import Link from "next/link";

import InfoNav from "./InfoNav";
import BasicInfo from "./BasicInfo";

import ArrowRoundBack from "@/assets/ArrowRoundBack";

import useResult from "@/hooks/maple/result/useResult";

const CharacterInfo = ({ children }: { children: React.ReactNode }) => {
  const { query, onClickCharacterInfoSet } = useResult();

  return (
    query.data.basicInfo && (
      <div className="relative flex flex-col gap-4 mt-5 mx-auto w-[1280px] h-[3000px] text-text-100 lg:w-full md:w-full md:h-[4500px] sm:w-full sm:h-[10000px]">
        <Link href={"/maple"} className="absolute top-4 left-4 z-20">
          <ArrowRoundBack className="w-9 h-9 text-primary-200 cursor-pointer sm:w-6 sm:h-6" />
        </Link>
        <BasicInfo
          info={query.data.basicInfo}
          popularity={query.data.popularityInfo.popularity}
          cashItem={query.data.cashItemInfo}
        />
        <InfoNav onClickCharacterInfoSet={onClickCharacterInfoSet} />
        {children}
      </div>
    )
  );
};

export default CharacterInfo;
