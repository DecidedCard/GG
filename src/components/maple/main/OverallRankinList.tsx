import React from "react";

import { overallRanking } from "@/api/maple";
import RankingBar from "../common/RankingBar";

const OverallRankinList = async () => {
  const { ranking } = await overallRanking();

  return (
    <div className="flex flex-col gap-2 p-3 bg-gray-300">
      <h2 className="text-title/28px">TODAY 종합랭킹</h2>
      {ranking.slice(0, 10).map((item) => (
        <RankingBar key={item.ranking} item={item} />
      ))}
    </div>
  );
};

export default OverallRankinList;
