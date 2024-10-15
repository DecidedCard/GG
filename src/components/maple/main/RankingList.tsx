import React from "react";

import RankingBar from "./RankingBar";
import RankingTitle from "./RankingTitle";

import type { MapleRankingList } from "@/types/maple/props";

const RankingList = ({ ranking, text }: MapleRankingList) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-bg-300 text-text-100">
      <h3 className="text-title/24px">{text}</h3>
      <RankingTitle />
      {ranking.slice(0, 10).map((item) => (
        <RankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default RankingList;
