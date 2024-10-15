import React from "react";

import SeedRankingTitle from "./SeedRankingTitle";
import SeedRankingBar from "./SeedRankingBar";

import type { SeedRanking } from "@/types/maple/mapleApi";

const SeedRankingList = ({ ranking }: { ranking: SeedRanking[] }) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-bg-300 text-text-100">
      <h3 className="text-title/24px">TODAY 더 시드 랭킹</h3>
      <SeedRankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <SeedRankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default SeedRankingList;
