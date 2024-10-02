import React from "react";

import RankingList from "@/components/maple/common/RankingList";

import {
  overallRanking,
  RebootOverallRanking,
  unionRanking,
} from "@/api/maple";
import UnionRankingList from "@/components/maple/common/Union/UnionRankingList";

const Maple = async () => {
  const { ranking } = await overallRanking();
  const { ranking: Reboot } = await RebootOverallRanking();
  const { ranking: union } = await unionRanking();

  return (
    <div className="grid grid-cols-2 gap-5 p-4">
      <RankingList ranking={ranking} text="TODAY 일반월드 종합 랭킹" />
      <RankingList ranking={Reboot} text="TODAY 일반월드 종합 랭킹" />
      <UnionRankingList ranking={union} />
    </div>
  );
};

export default Maple;
