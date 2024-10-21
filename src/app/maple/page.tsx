import React from "react";

import RankingList from "@/components/maple/main/RankingList";
import UnionRankingList from "@/components/maple/main/union/UnionRankingList";
import DojangRankingList from "@/components/maple/main/dojang/DojangRankingList";
import SeedRankingList from "@/components/maple/main/seed/SeedRankingList";
import SearchInputBox from "@/components/maple/main/SearchInputBox";
import FavoriteList from "@/components/maple/main/FavoriteList";

import {
  dojangRanking,
  overallRanking,
  RebootOverallRanking,
  seedRanking,
  unionRanking,
} from "@/api/maple/fetch";

const Maple = async () => {
  const { ranking } = await overallRanking();
  const { ranking: Reboot } = await RebootOverallRanking();
  const { ranking: union } = await unionRanking();
  const { ranking: dojang } = await dojangRanking();
  const { ranking: seed } = await seedRanking();

  return (
    <>
      <SearchInputBox />
      <FavoriteList />
      <section className="mx-auto w-[1280px] grid grid-cols-2 gap-5 pb-20 md:grid-cols-1">
        <RankingList
          ranking={ranking}
          text="TODAY 일반월드 종합 랭킹"
          link="/maple/ranking/total/1"
        />
        <RankingList
          ranking={Reboot}
          text="TODAY 리부트월드 종합 랭킹"
          link="/maple/ranking/reboot/1"
        />
        <UnionRankingList ranking={union} />
        <DojangRankingList ranking={dojang} />
        <SeedRankingList ranking={seed} />
      </section>
    </>
  );
};

export default Maple;
