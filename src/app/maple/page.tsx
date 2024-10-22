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
      <section className="grid grid-cols-2 gap-5 pb-20 mx-auto w-[1280px] lg:grid-cols-1 lg:w-full md:grid-cols-1 md:w-full sm:grid-cols-1 sm:w-full">
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
