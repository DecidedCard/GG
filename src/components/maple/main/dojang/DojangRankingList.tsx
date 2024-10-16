import React from "react";
import Link from "next/link";

import DojangRankingBar from "./DojangRankingBar";
import DojangRankingTitle from "./DojangRankingTitle";
import ArrowRoundForward from "@/assets/ArrowRoundForward";

import type { DojangRanking } from "@/types/maple/mapleApi";

const DojangRankingList = ({ ranking }: { ranking: DojangRanking[] }) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-bg-300 text-text-100">
      <div className="flex justify-between items-center">
        <h3 className="text-title/24px">TODAY 무릉도장 랭킹</h3>
        <Link
          href={"/maple/ranking/dojang"}
          className="flex items-center gap-1 text-text-200 cursor-pointer"
        >
          더보기 <ArrowRoundForward />
        </Link>
      </div>
      <DojangRankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <DojangRankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default DojangRankingList;
