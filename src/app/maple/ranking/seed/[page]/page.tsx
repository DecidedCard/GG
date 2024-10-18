import React from "react";

import PageButton from "@/components/maple/ranking/PageButton";

import { seedRanking } from "@/api/maple/fetch";

import formatTime from "@/util/formatTime";

const SeedRankingList = async ({ params }: { params: { page: number } }) => {
  const { ranking } = await seedRanking();

  const contentsIndex = params.page * 20;
  const contents = [...ranking.slice(contentsIndex - 20, contentsIndex)];

  return (
    <main className="flex flex-col gap-5 p-5 mx-auto w-[1280px] text-text-100">
      <h2 className="text-title/28px">TODAY 유니온 랭킹</h2>
      <div className="flex flex-col gap-4 p-5 bg-bg-200">
        {contents.map((item) => (
          <ol
            key={item.ranking}
            className="flex justify-between items-center px-4"
          >
            <div className="flex gap-4 text-center">
              <p className="w-12">{item.ranking}</p>
              <p className="w-28">{item.character_name}</p>
              <p className="w-28">
                {item.sub_class_name ? item.sub_class_name : item.class_name}
              </p>
            </div>
            <div className="flex gap-4 text-center">
              <p className="w-20">{formatTime(item.theseed_time_record)}</p>
              <p className="w-20">{item.theseed_floor}</p>
              <p className="w-20">{item.world_name}</p>
            </div>
          </ol>
        ))}
      </div>
      <PageButton length={ranking.length} page={params.page} />
    </main>
  );
};

export default SeedRankingList;
