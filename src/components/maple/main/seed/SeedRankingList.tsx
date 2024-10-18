import React from "react";
import Link from "next/link";

import SeedRankingTitle from "./SeedRankingTitle";
import SeedRankingBar from "./SeedRankingBar";
import ArrowRoundForward from "@/assets/ArrowRoundForward";

import type { SeedRanking } from "@/types/maple/mapleApi";

const SeedRankingList = ({ ranking }: { ranking: SeedRanking[] }) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-bg-300 text-text-100">
      <div className="flex justify-between items-center">
        <h3 className="text-title/24px">TODAY 더 시드 랭킹</h3>
        <Link
          href={"/maple/ranking/seed/1"}
          className="flex items-center gap-1 text-text-200 cursor-pointer"
        >
          더보기 <ArrowRoundForward />
        </Link>
      </div>
      <SeedRankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <SeedRankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default SeedRankingList;
