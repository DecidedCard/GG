import React from "react";

import RankingBar from "../common/RankingBar";

import { RebootOverallRanking } from "@/api/maple";

const RebootOverallRankingList = async () => {
  const { ranking } = await RebootOverallRanking();

  return (
    <div className="flex flex-col gap-2 p-3 bg-gray-300">
      <h2 className="text-title/28px">TODAY 리부트 종합랭킹</h2>
      {ranking.slice(0, 10).map((item) => (
        <RankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default RebootOverallRankingList;
