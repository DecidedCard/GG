import React from "react";

import RankingList from "@/components/maple/common/RankingList";
import UnionRankingList from "@/components/maple/common/union/UnionRankingList";
import DojangRankingList from "@/components/maple/common/dojang/DojangRankingList";

import {
  dojangRanking,
  overallRanking,
  RebootOverallRanking,
  unionRanking,
} from "@/api/maple";

const Maple = async () => {
  const { ranking } = await overallRanking();
  const { ranking: Reboot } = await RebootOverallRanking();
  const { ranking: union } = await unionRanking();
  const { ranking: dojang } = await dojangRanking();

  return (
    <div className="grid grid-cols-2 gap-5 p-4 md:grid-cols-1">
      <RankingList ranking={ranking} text="TODAY 일반월드 종합 랭킹" />
      <RankingList ranking={Reboot} text="TODAY 일반월드 종합 랭킹" />
      <UnionRankingList ranking={union} />
      <DojangRankingList ranking={dojang} />
    </div>
  );
};

export default Maple;
