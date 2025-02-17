import React from "react";
import Link from "next/link";

import RankingBar from "./RankingBar";
import RankingTitle from "./RankingTitle";
import ArrowRoundForward from "@/assets/ArrowRoundForward";

// import type { MapleRankingList } from "@/types/maple/props";
import type { BaseRanking } from "@/types/maple/mapleApi";

interface RankingListProps<T extends BaseRanking> {
  ranking: T[];
  text: string;
  link: string;
}

const RankingList = <T extends BaseRanking>({
  ranking,
  text,
  link,
}: RankingListProps<T>) => {
  return (
    <div className="flex flex-col gap-2 p-3 border-2 border-solid rounded-lg border-secondary-100">
      <div className="flex justify-between items-center">
        <h3 className="text-title/24px">{text}</h3>
        <Link
          href={link}
          className="flex items-center gap-1 text-text-200 cursor-pointer"
        >
          더보기 <ArrowRoundForward />
        </Link>
      </div>
      <RankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <RankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default RankingList;
