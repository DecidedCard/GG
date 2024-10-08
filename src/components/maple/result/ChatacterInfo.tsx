"use client";

import React from "react";
import Link from "next/link";

import BasicInfo from "@/components/maple/result/BasicInfo";
import StatInfo from "@/components/maple/result/StatInfo";
import ItemList from "@/components/maple/result/ItemList";
import Spinner from "@/components/common/Spinner";

import useResult from "@/hooks/maple/result/useResult";

import ArrowRoundBack from "@/assets/ArrowRoundBack";

const CharacterInfo = () => {
  const { query } = useResult();

  if (query.isFetching) {
    return (
      <div className="flex justify-center items-center w-full h-[90vh]">
        <Spinner />
      </div>
    );
  }

  if (query.isError) {
    return <div>에러!</div>;
  }

  return (
    query.data && (
      <div className="relative flex flex-col gap-4 mx-auto p-4 w-[1440px] md:w-full sm:w-full">
        <Link href={"/maple"} className="absolute top-4 left-4 z-20">
          <ArrowRoundBack className="w-9 h-9 text-blue-500 cursor-pointer" />
        </Link>
        <BasicInfo
          info={query.data.basicInfo}
          popularity={query.data.popularityInfo.popularity}
        />
        <div className="flex gap-3 mx-auto w-[1280px] md:w-full sm:w-full">
          <StatInfo info={query.data.statInfo} />
          <ItemList item={query.data.itemInfo} />
        </div>
      </div>
    )
  );
};

export default CharacterInfo;
