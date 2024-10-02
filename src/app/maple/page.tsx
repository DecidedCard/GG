import React from "react";

import RankingList from "@/components/maple/main/RankingList";
import UnionRankingList from "@/components/maple/main/union/UnionRankingList";
import DojangRankingList from "@/components/maple/main/dojang/DojangRankingList";

import {
  dojangRanking,
  overallRanking,
  RebootOverallRanking,
  seedRanking,
  unionRanking,
} from "@/api/maple";
import SeedRankingList from "@/components/maple/main/seed/SeedRankingList";

const Maple = async () => {
  const { ranking } = await overallRanking();
  const { ranking: Reboot } = await RebootOverallRanking();
  const { ranking: union } = await unionRanking();
  const { ranking: dojang } = await dojangRanking();
  const { ranking: seed } = await seedRanking();

  return (
    <div className="grid grid-cols-2 gap-5 p-4 md:grid-cols-1">
      <RankingList ranking={ranking} text="TODAY 일반월드 종합 랭킹" />
      <RankingList ranking={Reboot} text="TODAY 일반월드 종합 랭킹" />
      <UnionRankingList ranking={union} />
      <DojangRankingList ranking={dojang} />
      <SeedRankingList ranking={seed} />
    </div>
  );
};

export default Maple;
