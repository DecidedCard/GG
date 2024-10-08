import React from "react";

import RankingBar from "./RankingBar";
import RankingTitle from "./RankingTitle";

import type { MapleRankingList } from "@/types/maple/props";

const RankingList = ({ ranking, text }: MapleRankingList) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-gray-300">
      <h2 className="text-title/28px">{text}</h2>
      <RankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <RankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default RankingList;
