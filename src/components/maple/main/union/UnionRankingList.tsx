import React from "react";
import Link from "next/link";

import UnionRankingBar from "./UnionRankingBar";
import UnionRankingTitle from "./UnionRankingTitle";
import ArrowRoundForward from "@/assets/ArrowRoundForward";

import { UnionRanking } from "@/types/maple/mapleApi";

const UnionRankingList = ({ ranking }: { ranking: UnionRanking[] }) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-bg-300 text-text-100">
      <div className="flex justify-between items-center">
        <h3 className="text-title/24px">TODAY 유니온 랭킹</h3>
        <Link
          href={"/maple/ranking/union/1"}
          className="flex items-center gap-1 text-text-200 cursor-pointer"
        >
          더보기 <ArrowRoundForward />
        </Link>
      </div>

      <UnionRankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <UnionRankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default UnionRankingList;
