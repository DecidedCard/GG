"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import InfoNav from "./InfoNav";
import BasicInfo from "./BasicInfo";
import SkillInfo from "./skill/SkillInfo";
import StatAndItemInfo from "./stat&item/StatAndItemInfo";
import UnionInfo from "./union/UnionInfo";

import ArrowRoundBack from "@/assets/ArrowRoundBack";

import { useCharacterQuery } from "@/hooks/maple/useQuery";

import useErrorModalStore from "@/store/errorModalStore";

const CharacterInfo = () => {
  const { setIsError, setReset } = useErrorModalStore();
  const navigation = useRouter();
  const params = useSearchParams();

  const type = params.get("type");
  const name = params.get("character_name") || "";

  const { data, isError } = useCharacterQuery(name);

  if (isError) {
    setIsError({
      comment: "데이터를 가져오는 중에 오류가 발생하였습니다.",
      isError: true,
      onClickFn: () => {
        navigation.replace("/maple");
        setReset();
      },
    });
  }

  return (
    data.basicInfo && (
      <div className="relative flex flex-col gap-4 mt-5 mx-auto w-[1280px] h-[3000px] text-text-100 lg:w-full md:w-full md:h-[4500px] sm:w-full sm:h-[10000px]">
        <Link href={"/maple"} className="absolute top-4 left-4 z-20">
          <ArrowRoundBack className="w-9 h-9 text-primary-200 cursor-pointer sm:w-6 sm:h-6" />
        </Link>
        <BasicInfo
          info={data.basicInfo}
          popularity={data.popularityInfo.popularity}
          cashItem={data.cashItemInfo}
        />
        <InfoNav />
        {type === "skill" && <SkillInfo data={data} />}
        {type === "stat" && <StatAndItemInfo data={data} />}
        {type === "union" && <UnionInfo data={data} />}
      </div>
    )
  );
};

export default CharacterInfo;
