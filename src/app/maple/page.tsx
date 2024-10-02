import React from "react";

import RankingList from "@/components/maple/common/RankingList";

import { overallRanking, RebootOverallRanking } from "@/api/maple";

const Maple = async () => {
  const { ranking } = await overallRanking();
  const { ranking: RebootRanking } = await RebootOverallRanking();

  return (
    <div className="grid grid-cols-2 gap-5 p-4">
      <RankingList ranking={ranking} text="TODAY 일반월드 종합 랭킹" />
      <RankingList ranking={RebootRanking} text="TODAY 일반월드 종합 랭킹" />
    </div>
  );
};

export default Maple;
