import React from "react";

import UnionRankingBar from "./UnionRankingBar";
import UnionRankingTitle from "./UnionRankingTitle";

import { UnionRanking } from "@/types/maple/mapleApi";

const UnionRankingList = ({ ranking }: { ranking: UnionRanking[] }) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-bg-300 text-text-100">
      <h3 className="text-title/24px">TODAY 유니온 랭킹</h3>
      <UnionRankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <UnionRankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default UnionRankingList;
