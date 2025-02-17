import React from "react";

import { RebootOverallRanking } from "@/api/maple/fetch";

import PageButton from "@/components/maple/ranking/PageButton";
import LevelRanking from "@/components/maple/ranking/LevelRanking";

const RebootRanking = async (props: { params: Promise<{ page: number }> }) => {
  const params = await props.params;
  const { ranking } = await RebootOverallRanking();

  const contentsIndex = params.page * 20;
  const contents = [...ranking.slice(contentsIndex - 20, contentsIndex)];

  return (
    <main className="flex flex-col gap-5 p-5 mx-auto w-[1280px] text-text-100 lg:w-full md:w-full sm:w-full">
      <LevelRanking contents={contents} text="TODAY 리부트월드 랭킹" />
      <PageButton length={ranking.length} page={params.page} check="reboot" />
    </main>
  );
};

export default RebootRanking;
