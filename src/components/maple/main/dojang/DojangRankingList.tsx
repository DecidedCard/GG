import React from "react";

import DojangRankingBar from "./DojangRankingBar";

import type { DojangRanking } from "@/types/maple/mapleApi";
import DojangRankingTitle from "./DojangRankingTitle";

const DojangRankingList = ({ ranking }: { ranking: DojangRanking[] }) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-gray-300">
      <h2 className="text-title/24px">TODAY 무릉도장 랭킹</h2>
      <DojangRankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <DojangRankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default DojangRankingList;
