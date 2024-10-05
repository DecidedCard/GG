"use client";

import React from "react";

import BasicInfo from "@/components/maple/result/BasicInfo";
import StatInfo from "@/components/maple/result/StatInfo";

import useResult from "@/hooks/maple/result/useResult";
import ItemList from "@/components/maple/result/ItemList";

const Result = () => {
  const { query } = useResult();

  if (query.isLoading) {
    return <div>로딩 중....</div>;
  }

  if (query.isError) {
    return <div>에러!</div>;
  }

  return (
    query.data && (
      <div className="flex flex-col gap-4 p-4">
        <BasicInfo
          info={query.data.basicInfo}
          popularity={query.data.popularityInfo.popularity}
        />
        <div className="flex gap-3 mx-auto w-[1280px] md:w-full">
          <StatInfo info={query.data.statInfo} />
          <ItemList item={query.data.itemInfo} />
        </div>
      </div>
    )
  );
};

export default Result;
