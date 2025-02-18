import React from "react";

import { overallRanking } from "@/api/maple/fetch";

import PageButton from "@/components/maple/ranking/PageButton";
import LevelRanking from "@/components/maple/ranking/LevelRanking";

const TotalRanking = async (props: { params: Promise<{ page: number }> }) => {
  const params = await props.params;
  const { ranking } = await overallRanking();

  const contentsIndex = params.page * 20;
  const contents = [...ranking.slice(contentsIndex - 20, contentsIndex)];

  return (
    <main className="flex flex-col gap-5 my-10 mx-auto w-[1080px] border-2 border-solid border-secondary-300 rounded-lg lg:w-full md:w-full sm:w-full">
      <LevelRanking contents={contents} text="TODAY 일반월드 랭킹" />
      <PageButton length={ranking.length} page={params.page} check="total" />
    </main>
  );
};

export default TotalRanking;
